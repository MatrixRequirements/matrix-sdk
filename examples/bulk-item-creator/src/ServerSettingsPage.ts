import {
    SectionDescriptions,
    IPluginSettingPage,
    Item,
    TestStepsFieldHandler,
    ISetField,
    RichtextFieldHandler,
    AddFileAck,
    ExecuteParam,
    Field,
    TestStepsResultFieldHandler,
    Project,
} from 'matrix-requirements-sdk/client';
import { CategoryInstruction, IBulkSettings, IServerSettings } from "./Interfaces";
import { Plugin } from "./Main";
import { textGenerator } from "./lorem-ipsum";
import { sdkInstance } from './instance';

/* server Setting page closure*/
export class ServerSettingsPage extends sdkInstance.ConfigPage implements IPluginSettingPage<IServerSettings> {
    settingsOriginal?: IServerSettings;
    settingsChanged?: IServerSettings;

    settings(): IServerSettings {
        const serverSettings = sdkInstance.PluginCore.getServerSetting(Plugin.config.customerSettingsPage.settingName, "EMPTY");
        if (serverSettings === "EMPTY") {
            // Go with the default.
            return <IServerSettings>Plugin.config.customerSettingsPage.defaultSettings;
        }
        return <IServerSettings>serverSettings;
    }

    /** Customize this method to generate static HTML.  */
    getSettingsDOM(settings: IServerSettings): JQuery {
        return $(`
            <div class="panel-body-v-scroll fillHeight">
                <div>
                    Bulk item creator. Pick a database, decide on what items to
                    create, and indicate if you want images uploaded.
                </div>
                <div id="presentation">
                </div>
                <div id="controls">
                </div>
                <div id="log">
                </div>
            </div>
        `);
    }

    private dom: JQuery;

    private drawPresentation() {
        let settings = this.getSettings();
        let presentation = $("#presentation", this.dom);
        presentation.html("");
        presentation.append("<span>").html("Database: " + settings.project);
        // Create table of categories.
        let table = $("<table class='table'/>");
        table.append("<thead><tr><td>Category</td><td>Count</td>" +
            "<td>Attachment Count</td><td>Downlinks</td>" +
            "</tr></thead>");
        let rows = table.append("<tbody>");
        for (let cat of settings.categoryInstructions) {
            rows.append("<tr><td>" + cat.category +
                "</td><td>" + cat.count.toString() +
                "</td><td>" + cat.attachmentCount.toString() +
                "</td><td>" + cat.downLinks.join(',') + "</td></tr>");
        }
        presentation.append(table);
        presentation.append("<div>ImageURL: <a href='" + settings.imageToAttachURL + "'>" +
            settings.imageToAttachURL + "</a></div>");
    }

    /** Customize this method to add dynamic content*/
    showSimple() {
        const that = this;
        // Insert these statements below to stop in the debugger, pretty handy:
        // debugger;
        this.drawPresentation();
        let controls = $("#controls", this.dom);
        controls.html("");
        let startButton = $("<button class='btn btn-link'>Start</button>").click(() => {
            that.kickoff();
        });
        let stopButton = $("<button class='btn btn-link'>Stop</button>").click(() => {
            that.stop();
        });
        let loggerTextArea = $("<div><textarea id='myLogger' rows='8' cols='100'></textarea></div>");

        controls.append(startButton);
        controls.append(stopButton);
        controls.append(loggerTextArea);

    }

    running: boolean;

    private log(data: string) {
     $('#myLogger').append(data + '\n');
        console.log(data);
    }

    private getSettings(): IBulkSettings {
        let settings: IBulkSettings = <IBulkSettings><unknown>this.settingsChanged.myServerSetting;
        return settings;
    }

    private isTestCategory(category: string): boolean {
        const testConfig = this.project.getItemConfig().getTestConfig();
        // Find the XTC category and look in the set of uplinks.
        return testConfig.cloneSources.filter(c => c == category).length == 1;
    }

    private isXTCCategory(category: string): boolean {
        const testConfig = this.project.getItemConfig().getTestConfig();
        return testConfig.xtcType == category;
    }

    private validateCategories(categories: string[]) {
        // Make sure all categories are covered in our settings.
        const settings = this.getSettings();
        for (let cat of settings.categoryInstructions) {
            if (categories.filter(c => c == cat.category).length != 1) {
                this.log("Error: category " + cat.category + " not found");
                this.running = false;
                break;
            }
        }
        if (settings.categoryInstructions.length > categories.length) {
            this.log("Error: you specified some non-existent categories.");
            this.running = false;
        }
        return this.running;
    }

    private async getCategoryCount(category: string) {
        const results: string[] = await this.project.search(
            "mrql:category=" + category);
        return results.length;
    }

    private async getCategoryWithoutImages(category: string, keyword: string): Promise<string[]> {
        const search = `mrql:category=${category} and "test case steps" !~ "${keyword}"`;
        return await this.project.search(search);
    }


    private async getCategoryWithDownlinkItems(category: string, downlinkedCategory: string,
        without: boolean): Promise<Item[]> {
        let not = "";
        if (without) {
            not = "!"
        }
        const search = `mrql:category=${category} and downlink ${not}= ${downlinkedCategory}`;
        let mask = this.project.constructSearchFieldMask({
            includeFields: false,
            includeLabels: false,
            includeDownlinks: true,
            includeUplinks: true
        });
        const results: Item[] = await this.project.complexSearch(search, "", false, mask);
        return results;
    }


    private async getCategoryWithUplinkItems(category: string, uplinkedCategory: string,
        without: boolean): Promise<string[]> {
        let not = "";
        if (without) {
            not = "!"
        }
        const search = `mrql:category=${category} and uplink ${not}= ${uplinkedCategory}`;
        return await this.project.search(search);
    }

    private async getCategoryWithUplinkCount(category: string, uplinkedCategory: string,
        without: boolean): Promise<number> {
        return (await this.getCategoryWithUplinkItems(category, uplinkedCategory, without)).length;
    }

    private createStepsArray(handler: TestStepsFieldHandler, stepCount: number): void {
        for (let i = 0; i < stepCount; i++) {
            handler.setColumnData(i, "action", `Test Action ${i}`);
            handler.setColumnData(i, "expected", `A good result`);
        }
    }

    private findFieldOfCategoryAndType(category: string, type: string): string | undefined {
        const catConfig = this.project.getItemConfig().getItemConfiguration(category);
        // We need the first field of type {type}.
        const a = catConfig.fieldList.filter((item) => item.fieldType == type);
        if (a.length > 0) {
            const fieldName = a[0].label;
            return fieldName;
        }
    }

    private assert(condition: boolean, msg: string): void {
        if (!condition) {
            this.log("assert failed: " + msg);
            if (this.running) {
                this.running = false;
            }
            throw new Error(msg);
        }
    }

    private findTestStepsField(category: string): string | undefined {
        this.assert(this.isTestCategory(category), "Expected test category");
        return this.findFieldOfCategoryAndType(category, "test_steps");
    }

    private findTestStepsResultField(category: string): string | undefined {
        this.assert(this.isXTCCategory(category), "Expected XTC category");
        return this.findFieldOfCategoryAndType(category, "test_steps_result");
    }

    // We have to add a field ourselves to a doc to fill with text.
    private async createDoc(folderId: string, cat: CategoryInstruction, title: string): Promise<boolean> {

        let doc = this.project.createDOC();
        doc.setTitle(title);
        let section = doc.addSection("Description", SectionDescriptions.section_richtext);
        section.innerDataHandler.initData( "<p>" + textGenerator(2) + "</p>",)
        let result = await this.project.putItem(folderId, doc);

        return true;
    }

    private async createObject(folderId: string, cat: CategoryInstruction, i: number): Promise<boolean> {
        const config = this.project.getItemConfig();
        const title = `Bulk_${cat.category}_${i}`;
        let data: ISetField[] = [];

        // These are created in a different way
        if (this.isXTCCategory(cat.category)) return true;

        if (cat.category == "DOC") {
            return this.createDoc(folderId, cat, title);
        }

        const itemConfig = config.getItemConfiguration(cat.category);
        let newItem = this.project.createItem(cat.category);
        newItem.setTitle(title);
        for (let field of itemConfig.fieldList) {
            if (field.fieldType == "richtext") {
                let f = newItem.getFieldById(field.id);
                let handler = f.getHandler<RichtextFieldHandler>();
                handler.setHtml(textGenerator(2));
            }
        }

        if (this.isTestCategory(cat.category)) {
            // We need to fill in 10 steps for the test. First, find the field name.
            const fieldName = this.findTestStepsField(cat.category);
            if (fieldName) {
                let field = newItem.getFieldByName(fieldName)[0];
                let handler = field.getHandler<TestStepsFieldHandler>();
                this.createStepsArray(handler, 10);
            }
        }

        try {
            newItem = await this.project.putItem(folderId, newItem);
            this.log(`Document ${title} created, id = ${newItem.getId()}`);
            return true;
        } catch (e) {
            this.log(`Something went wrong, ${e.toString()}`);
        }
        return false;
    }

    private async createFolderForDocs(category: string, i: number) {
        const parentFolderId = `F-${category}-1`;
        const folderTitle = `S-${category}-${i}`;
        let folderItem = this.project.createFolder(category);
        folderItem.setTitle(folderTitle);
        folderItem = await this.project.putItem(parentFolderId, folderItem);
        return folderItem.getId();
    }

    private async createObjects() {
        const settings = this.getSettings();
        let folderId: string;
        sdkInstance.matrixsdk.setComment("Bulk creation");
        for (let cat of settings.categoryInstructions) {
            if (this.isXTCCategory(cat.category)) {
                // We create these differently, after all other categories have been created and linked.
                continue;
            }
            this.log(`Creating items of category ${cat.category}.`);
            // Before creating items of category {cat}, we should check how many are there already.
            let c: number = await this.getCategoryCount(cat.category);
            for (let i = c; i < cat.count; i++) {
                if (!this.running) {
                    // Someone must have stopped us!
                    this.log(`stopping the run in category ${cat.category} on number ${i}.`);
                    return;
                }
                // create subfolder every 100 doc
                if ((i-c) % 100 == 0 ) {
                    folderId = await this.createFolderForDocs(cat.category, i);
                    this.log(`Folder ${folderId} created`);
                }
                if (!folderId){
                    this.log("Unable to create folder, aborting.");
                    this.running = false;
                    return;
                }
                const result: boolean = await this.createObject(folderId, cat, i);
                if (!result) {
                    this.log("Failed to create object, aborting.");
                    this.running = false;
                    return;
                }
            }
        }
    }

    private async uploadImage(): Promise<AddFileAck> {
        const settings = this.getSettings();
        return await this.project.uploadFile(settings.imageToAttachURL);
    }

    private getImageUrl(imgInfo: AddFileAck) {
        const projectId = this.project.getName();
        const imageUrl =
            `${sdkInstance.globalMatrix.matrixRestUrl}/${projectId}/file/${imgInfo.fileId}?key=${imgInfo.key}`;
        return imageUrl;
    }

    private async createExecutedTests(testCategory: string, executedTestCategory: string) {
        const that = this;
        const settings = this.getSettings();
        let tcInfo = settings.categoryInstructions.filter((cat) => cat.category == testCategory)[0];
        let xtcInfo = settings.categoryInstructions.filter((cat) => cat.category == executedTestCategory)[0];
        // How many runs should we do to get enough XTCs to meet the requirement?
        const xtcCount = await this.getCategoryCount(executedTestCategory);
        const xtcCountToCreate = xtcInfo.count - xtcCount;
        if (xtcCountToCreate > 0) {
            // Every time we create a run, we get {tcInfo.count} new XTCs.
            const numberOfRuns = Math.floor(xtcCountToCreate / tcInfo.count);

            for (let run = 0; run < numberOfRuns; run++) {
                let exeParams: ExecuteParam =
                    that.project.createExecuteParamWithDefaults([`F-${testCategory}-1`], executedTestCategory,
                        `For bulk creation run ${run}`);
                try {
                    await that.project.execute(exeParams);
                } catch (e) {
                    this.log("There was an error creating the XTC items. Aborting.");
                    this.running = false;
                    return;
                }
            }
        }
        // We now have all the XTCs we need. Let's attach images to them.
        const imageMarkerText = "BULK IMAGE";
        const xtcs = await this.getCategoryWithoutImages(executedTestCategory, imageMarkerText);
        for (let xtc of xtcs) {
            if (!this.running) {
                this.log("User canceled during executed test image attachment.");
                return;
            }
            this.log(`Uploading ${xtcInfo.attachmentCount} images to ${xtc}...`);
            let imageLinks: AddFileAck[] = [];
            for (let j = 0; j < xtcInfo.attachmentCount; j++) {
                // Create this many images
                imageLinks.push(await this.uploadImage());
            }
            // Now make the XTC include the images
            let xtcItem: Item = await this.project.getItem(xtc);
            // Get the table of steps.
            let fields: Field[] = xtcItem.getFieldsByType("test_steps_result");
            if (fields.length != 1) {
                this.log("Unable to find test_steps_result field to attach images. Aborting");
                this.running = false;
                return;
            }
            const field = fields[0];
            let handler: TestStepsResultFieldHandler =
                field.getHandler<TestStepsResultFieldHandler>();

            // Insert an image at each row.
            for (let row = 0; row < handler.getRowCount(); row++) {
                if (imageLinks.length > 0) {
                    const imgInfo = imageLinks.pop();
                    const currentImageUrl = this.getImageUrl(imgInfo);
                    const existingText = handler.getColumnData(row, "comment") ?? "";
                    const newText = existingText +
                        `<br><p>I have a BULK IMAGE at <img src="${currentImageUrl}"></p>`;
                    handler.setColumnData(row, "comment", newText);
                }
            }
            await that.project.updateItem(xtcItem);
        }
    }

    private async linkObjects() {
        const settings = this.getSettings();
        for (let cat of settings.categoryInstructions) {
            // Before creating items of category {cat}, we should check how many are there already.
            let c: number = await this.getCategoryCount(cat.category);

            if (cat.downLinks) {
                for (let downLink of cat.downLinks) {
                    this.log(`Linking ${cat.category} items to ${downLink} items...`);
                    let downerCount: number = await this.getCategoryCount(downLink);
                    let countPerCategory = 1;
                    if (downerCount > c) {
                        // Each cat.category object must link to multiple downLink categories.
                        countPerCategory = Math.floor(downerCount / c);
                    }

                    if (this.isTestCategory(cat.category) && this.isXTCCategory(downLink)) {
                        this.log('Creating executed tests');
                        await this.createExecutedTests(cat.category, downLink);
                        if (!this.running) return;
                        continue;
                    }

                    // But how many have already been linked?
                    const linkedDowners = await this.getCategoryWithUplinkCount(downLink, cat.category, false);
                    const linksToCreate = downerCount - linkedDowners;
                    if (linksToCreate > 0) {
                        this.log(`Creating ${linksToCreate} links...`);
                        const itemsToLink = await this.getCategoryWithUplinkItems(downLink, cat.category, true);
                        let sourceItems = await this.getCategoryWithDownlinkItems(cat.category, downLink, true);
                        // If there are no more unlinked source items that are unlinked then just start at the top.
                        if (sourceItems.length === 0) {
                            sourceItems = await this.getCategoryWithDownlinkItems(cat.category, downLink, false);
                        }
                        let currentItemToLink = 0;
                        for (let source of sourceItems) {
                            // link countPerCategory from itemsToLink to source.
                            for (let j = 0; j < countPerCategory; j++) {
                                if (currentItemToLink < itemsToLink.length) {
                                    const itemToLink = itemsToLink[currentItemToLink];
                                    source.addDownlink(itemToLink);
                                    await this.project.updateItem(source);
                                }
                                currentItemToLink++;
                            }
                        }
                    }
                }
            }
        }
    }

    private project: Project;

    async initializeProject(project: string) {
        const that = this;

        this.project = await sdkInstance.matrixsdk.openProject(project);
        that.log("Project successfully found");

        if (that.validateCategories(that.project.getItemConfig().getCategories(true))) {
            // Kick off the next step.
            that.log("Validation complete. Now checking to see how many items we already have.");
            await that.createObjects();
            if (this.running) {
                await that.linkObjects();
                that.log("Finished with bulk project creation.");
                this.running = false;
            }
        }
    }

    private async kickoff() {
        const that = this;
        if (this.running) return;
        this.running = true;
        this.log("Starting a run");

        // Step 1, is the project valid?
        let settings = this.getSettings();
        const projectList = await sdkInstance.matrixsdk.getProjects();
        if (projectList.filter(p => p == settings.project).length < 1) {
            that.log("Project is invalid. Aborting");
            that.running = false;
        } else {
            that.log("Project successfully found");
            that.initializeProject(settings.project);
        }
    }

    private stop() {
        if (!this.running) return;
        this.running = false;
        this.log("Stopping a run");
    }

    renderSettingPage() {
        this.running = false;
        this.settingsOriginal = { ...this.settings() };
        this.settingsChanged = { ...this.settingsOriginal };

        this.initPage(
            `${Plugin.config.customerSettingsPage.title} - Server settings`,
            true,
            undefined,
            Plugin.config.customerSettingsPage.help,
            Plugin.config.customerSettingsPage.helpUrl,
            undefined
        );
        this.dom = this.getSettingsDOM(this.settingsChanged);
        sdkInstance.app.itemForm.append(this.dom);
        this.showSimple();
    }

    showAdvanced() {
        const that = this;
        this.showAdvancedCode(JSON.stringify(this.settingsChanged), function (newCode: string) {
            that.settingsChanged = JSON.parse(newCode);
            that.paramChanged();
            that.showSimple();
        });
    }

    saveAsync() {
        let def = this.configApp.setServerSettingAsync(Plugin.config.customerSettingsPage.settingName, JSON.stringify(this.settingsChanged));
        def.done(() => {
            this.settingsOriginal = { ...this.settingsChanged };
            this.renderSettingPage();
        })
        return def;
    }

    paramChanged() {
        this.configApp.itemChanged(JSON.stringify(this.settingsOriginal) != JSON.stringify(this.settingsChanged));
    }
}
