import { CategoryInstruction, IBulkSettings, IServerSettings } from "./Interfaces";
import { Plugin } from "./Main";
import { textGenerator } from "./lorem-ipsum";

// TODO: get this into the API, it is currently "magic"
declare global {
    interface JQuery {
        mxDropdown(a: any): JQuery;
        tableCtrl(a: any): JQuery;
        getController(): any;
    }
}

// eslint-disable-next-line no-unused-vars
/* server Setting page closure*/
export class ServerSettingsPage extends matrixApi.ConfigPage implements matrixApi.IPluginSettingPage<IServerSettings> {
    settingsOriginal?: IServerSettings;
    settingsChanged?: IServerSettings;

    settings(): IServerSettings {
        const serverSettings = matrixApi.PluginCore.getServerSetting(Plugin.config.customerSettingsPage.settingName, "EMPTY");
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
        const testConfig = matrixApi.globalMatrix.ItemConfig.getTestConfig();
        // Find the XTC category and look in the set of uplinks.
        return testConfig.cloneSources.filter(c => c == category).length == 1;
    }

    private isXTCCategory(category: string): boolean {
        const testConfig = matrixApi.globalMatrix.ItemConfig.getTestConfig();
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
        const results: matrixApi.ISearchResult[] = await matrixApi.matrixapi.search(
            "mrql:category=" + category, false, false, false);
        return results.length;
    }

    private async getCategoryWithoutImages(category: string, keyword: string): Promise<matrixApi.ISearchResult[]> {
        const search = `mrql:category=${category} and "test case steps" !~ "${keyword}"`;
        const results: matrixApi.ISearchResult[] = await matrixApi.matrixapi.search(
            search, false, false, false);
        return results;
    }


    private async getCategoryWithDownlinkItems(category: string, downlinkedCategory: string,
        without: boolean): Promise<matrixApi.ISearchResult[]> {
        let not = "";
        if (without) {
            not = "!"
        }
        const search = `mrql:category=${category} and downlink ${not}= ${downlinkedCategory}`;
        const results: matrixApi.ISearchResult[] = await matrixApi.matrixapi.search(
            search, false, false, false);
        return results;
    }


    private async getCategoryWithUplinkItems(category: string, uplinkedCategory: string,
        without: boolean): Promise<matrixApi.ISearchResult[]> {
        let not = "";
        if (without) {
            not = "!"
        }
        const search = `mrql:category=${category} and uplink ${not}= ${uplinkedCategory}`;
        const results: matrixApi.ISearchResult[] = await matrixApi.matrixapi.search(
            search, false, false, false);
        return results;
    }

    private async getCategoryWithUplinkCount(category: string, uplinkedCategory: string,
        without: boolean): Promise<number> {
        return (await this.getCategoryWithUplinkItems(category, uplinkedCategory, without)).length;
    }

    private createStepsArray(stepCount: number) {
        let arr = [];
        for (let i = 0; i < stepCount; i++) {
            let obj = {
                action: `Test Action ${i}`,
                expected: `A good result`
            };
            arr.push(obj);
        }
        return arr;
    }

    private findFieldOfCategoryAndType(category: string, type: string): string | undefined {
        const catConfig = matrixApi.matrixapi.getItemConfig().getItemConfiguration(category);
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
        const fieldDhf00 = matrixApi.matrixapi.getItemConfig().getFieldId("DOC", "dhf00");
        const fieldDhf01 = matrixApi.matrixapi.getItemConfig().getFieldId("DOC", "dhf01");

        let data: matrixApi.ISetField[] = [];
        // Copied from the main project. TODO: bring order to this somehow.
        const dhf00String = JSON.stringify({
            "type": "document_options", "name": "Document Options",
            "fieldValue": "", "ctrlConfig": { "auto_number": false, "omit_title": false }
        });
        data.push({ fieldName: "dhf00", value: dhf00String });
        const id: string = await matrixApi.matrixapi.createItem(folderId, title, data);
        let item: matrixApi.IItem = await matrixApi.matrixapi.getItem(id);

        // await matrixApi.matrixapi.instance.projecdtIte

        // the item will have a field of type dhf, named dhf<number>, where the largest number
        // contains a meta-object that marks the last of the current fields. Since we're creating a
        // new document, we know that dhf00 will contain this object. Our goal is to replace this
        // field with a "real" rich_text field, and move the marker up to dhf01.
        data = [];
        let fieldValue = {
            type: "richtext",
            name: "description",
            fieldValue: "<p>" + textGenerator(2) + "</p>",
            fieldValueXML: JSON.stringify([{ "globalOptions": true }])
        };
        data.push({ fieldName: "dhf01", value: item[fieldDhf00] });
        data.push({ fieldName: "dhf00", value: JSON.stringify(fieldValue) });
        data.push({ fieldName: "reportId", value: "dhf_generic" });
        await matrixApi.matrixapi.setFields(id, data);
        return true;
    }

    private async createObject(folderId: string, cat: CategoryInstruction, i: number): Promise<boolean> {
        const config = matrixApi.matrixapi.getItemConfig();
        const title = `Bulk_${cat.category}_${i}`;
        let data: matrixApi.ISetField[] = [];

        // These are created in a different way
        if (this.isXTCCategory(cat.category)) return true;

        if (cat.category == "DOC") {
            return this.createDoc(folderId, cat, title);
        }

        const itemConfig = config.getItemConfiguration(cat.category);
        for (let field of itemConfig.fieldList) {
            if (field.fieldType == "richtext") {
                data.push({ fieldName: field.label, value: textGenerator(2) });
            }
        }

        try {
            const id: string = await matrixApi.matrixapi.createItem(folderId, title, data);
            this.log(`Document ${title} created`);
            if (this.isTestCategory(cat.category)) {
                // We need to fill in 10 steps for the test. First, find the field name.
                const fieldName = this.findTestStepsField(cat.category);
                if (fieldName) {
                    let item: matrixApi.IItem = await matrixApi.matrixapi.getItem(id);
                    item[fieldName] = this.createStepsArray(10);
                    await matrixApi.matrixapi.setField(id, fieldName, JSON.stringify(item[fieldName]));
                }
            }
            return true;
        } catch (e) {
            this.log("Something went wrong");
        }
        return false;
    }

    private async createFolderForDocs(parentName: string, i: number) {
            const parentFolderId = `F-${parentName}-1`;
            const folderId = `S-${parentName}-${i}`;
            return await matrixApi.matrixapi.createFolder(parentFolderId, folderId);
    }

    private async createObjects() {
        const settings = this.getSettings();
        let folderId: string;
        matrixApi.matrixapi.setComment("Bulk creation");
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

    private lookup;
    private XTCconfig: matrixApi.ITestConfig;

    // This is copied from the Clouds source.
    private prepareMapping(): matrixApi.IGenericMap {

        this.XTCconfig = matrixApi.globalMatrix.ItemConfig.getTestConfig();

        let fieldList = matrixApi.globalMatrix.ItemConfig.getItemConfiguration(this.XTCconfig.xtcType).fieldList;
        this.lookup = {};

        for (let csi = 0; csi < this.XTCconfig.cloneSources.length; csi++) {
            let cs = matrixApi.globalMatrix.ItemConfig.getItemConfiguration(this.XTCconfig.cloneSources[csi]).fieldList;
            for (let csfi = 0; csfi < cs.length; csfi++) {
                let csf = cs[csfi];
                for (let tfi = 0; tfi < fieldList.length; tfi++) {
                    let tf = fieldList[tfi];
                    if (tf.label.toLowerCase() !== "jira") {
                        if ((tf.fieldType === "test_steps_result" && csf.fieldType === "test_steps") ||
                            (tf.label === csf.label)) {
                            this.lookup[csf.id] = tf.id;
                        }
                    }
                }
            }
        }
        return this.lookup;
    }

    public getMappingItems(): matrixApi.IFieldMapping[] {
        this.prepareMapping();
        let mapping: matrixApi.IFieldMapping[] = [];
        const entries = Object.entries(this.lookup);
        entries.forEach((entry) => {
            const key = parseInt(entry[0]);
            const value = parseInt(<string>entry[1]);
            mapping.push({ fromId: key, toId: value });
        });
        return mapping;
    }

    private async uploadImage(): Promise<string> {
        const settings = this.getSettings();
        let result = await (<any>matrixApi.matrixapi).uploadProjectFile(settings.imageToAttachURL);
        return result;
    }

    // TODO: put a type on imgInfo.
    private getImageUrl(imgInfo: any) {
        const projectId = matrixApi.matrixapi.getProject();
        const imageUrl =
            `${matrixApi.globalMatrix.matrixRestUrl}/${projectId}/file/${imgInfo.fileId}?key=${imgInfo.key}`;
        return imageUrl;
    }

    private async createExecutedTests(testCategory: string, executedTestCategory: string) {
        const settings = this.getSettings();
        let tcInfo = settings.categoryInstructions.filter((cat) => cat.category == testCategory)[0];
        let xtcInfo = settings.categoryInstructions.filter((cat) => cat.category == executedTestCategory)[0];
        // How many runs should we do to get enough XTCs to meet the requirement?
        const xtcCount = await this.getCategoryCount(executedTestCategory);
        const xtcCountToCreate = xtcInfo.count - xtcCount;
        if (xtcCountToCreate > 0) {
            // Every time we create a run, we get {tcInfo.count} new XTCs.
            const numberOfRuns = Math.floor(xtcCountToCreate / tcInfo.count);

            let exeParams: matrixApi.ITestWizardParams = {
                itemFieldMapping: this.getMappingItems(),
                input: [`F-${testCategory}-1`],
                output: executedTestCategory
            };
            for (let run = 0; run < numberOfRuns; run++) {
                exeParams.reason = `For bulk creation run ${run}`;
                // TODO: update the API in npm to include this execute method.
                try {
                    await (<any>matrixApi.matrixapi).execute(exeParams);
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
            this.log(`Uploading ${xtcInfo.attachmentCount} images to ${xtc.itemId}...`);
            let imageLinks = [];
            for (let j = 0; j < xtcInfo.attachmentCount; j++) {
                // Create this many images
                imageLinks.push(await this.uploadImage());
            }
            // Now make the XTC include the images
            let xtcItem = await matrixApi.matrixapi.getItem(xtc.itemId);
            // Get the table of steps.
            const fieldName = this.findTestStepsResultField(xtcInfo.category);
            if (!fieldName) {
                this.log("Unable to find test case steps field to attach images. Aborting");
                this.running = false;
                return;
            }
            const fieldId = matrixApi.globalMatrix.ItemConfig.getFieldId(xtcInfo.category, fieldName);
            let steps = xtcItem[fieldId];
            let stepsObj = JSON.parse(steps);
            for (let action of stepsObj) {
                if (imageLinks.length > 0) {
                    const imgInfo = imageLinks.pop();
                    const currentImageUrl = this.getImageUrl(imgInfo);
                    const existingText = action["comment"] ?? "";
                    action["comment"] = existingText +
                        `<br><p>I have a BULK IMAGE at <img src="${currentImageUrl}"></p>`;
                }
            }
            steps = JSON.stringify(stepsObj);
            await matrixApi.matrixapi.setField(xtc.itemId, fieldName, steps);
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
                                    await matrixApi.matrixapi.addDownLink(source.itemId, itemToLink.itemId);
                                }
                                currentItemToLink++;
                            }
                        }
                    }
                }
            }
        }
    }

    async initializeProject(project: string) {
        const that = this;
        matrixApi.matrixapi.setProject(project);
        that.log("Project successfully found");

        const config = matrixApi.matrixapi.createNewItemConfig();
        matrixApi.matrixapi.setItemConfig(config);

        matrixApi.matrixapi.getRestServer(project + "/cat").done((catDetails: matrixApi.XRGetProject_CategoryList_GetProjectStructAck) => {
            config.addCategories(catDetails);
            matrixApi.matrixapi.getRestServer(project + "/setting").done(async (settings: matrixApi.XRGetProject_ProjectSettingAll_GetSettingAck) => {
                config.addSettings(settings);
                if (that.validateCategories(matrixApi.matrixapi.getItemConfig().getCategories(true))) {
                    // Kick off the next step.
                    that.log("Validation complete. Now checking to see how many items we already have.");
                    await that.createObjects();
                    if (this.running) {
                        await that.linkObjects();
                        that.log("Finished with bulk project creation.");
                        this.running = false;
                    }
                }
            });
        });
    }

    private kickoff() {
        const that = this;
        if (this.running) return;
        this.running = true;
        this.log("Starting a run");

        // Step 1, is the project valid?
        let settings = this.getSettings();
        matrixApi.matrixapi.setProject(settings.project).then(() => {
            that.log("Project successfully found");
            this.initializeProject(settings.project);
        },
            () => {
                that.log("Project is invalid. Aborting");
                that.running = false;
            });
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
        matrixApi.app.itemForm.append(this.dom);
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