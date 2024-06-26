import {
    ControlCoreBase,
    IConfigApp,
    IDashboardPage,
    IDashboardParametersBase,
    IExternalPlugin,
    IItem,
    IPluginConfig,
    IPluginFieldHandler,
    IPluginFieldValueBase,
    IPluginSettingPage,
    IProjectSettingsBase,
    ITool,
    PluginCore,
    registerPlugin,
} from 'matrix-requirements-sdk/client';
import { ServerSettingsPage } from "./ServerSettingsPage";
import { IBulkSettings } from "./Interfaces";
import { sdkInstance } from './instance';

let bulkDefaultSettings: IBulkSettings = {
    project: "BLAH",
    categoryInstructions: [
        { category: "DOC", count: 1000, attachmentCount: 0, downLinks: [] },
        { category: "REQ", count: 3000, attachmentCount: 0, downLinks: ["SPEC"] },
        { category: "RISK", count: 1000, attachmentCount: 0, downLinks: ["SPEC"] },
        { category: "SPEC", count: 5000, attachmentCount: 0, downLinks: ["TC"] },
        { category: "TC", count: 5000, attachmentCount: 0, downLinks: ["XTC"] },
        { category: "XTC", count: 20000, attachmentCount: 10, downLinks: [] }
    ],
    imageToAttachURL: "https://www.skiworld.co.uk/images/uploads/photos/large/tignes_resort_-_winter_-_lake_and_reflections_14657.jpg"
};

/** This class is allows you to configure the features of your plugin.
 *
 *  You can also implement functions to into the plugin (at start in the constructor, when loading a project, when loading an item)
 *
     */
export class Plugin implements IExternalPlugin<IBulkSettings,
                                IProjectSettingsBase,
                                IPluginFieldHandler<IPluginFieldValueBase>,
                                IPluginFieldValueBase,
                                IDashboardParametersBase> {

    core: PluginCore;

    /**This part enables which
     *
     * See IPluginConfig interface for explanation of parameters
    */

    static config: IPluginConfig<IBulkSettings, IProjectSettingsBase> = {
        /*  Page in admin client to configure settings across all projects - set enabled to false if not needed.
            The page itself is implemented in the _ServerSettingsPage.ts
        */
        customerSettingsPage: {
            id: "BulkItemCreationPage",
            title: "Bulk Item Creation Page",
            type: "BPPcs",
            enabled: true,
            defaultSettings: {
                project: "BLAH",
                categoryInstructions: [
                    { category: "DOC", count: 1000, attachmentCount: 0, downLinks: [] },
                    { category: "REQ", count: 3000, attachmentCount: 0, downLinks: ["SPEC"] },
                    { category: "RISK", count: 1000, attachmentCount: 0, downLinks: ["SPEC"] },
                    { category: "SPEC", count: 5000, attachmentCount: 0, downLinks: ["TC"] },
                    { category: "TC", count: 5000, attachmentCount: 0, downLinks: ["XTC"] },
                    { category: "XTC", count: 20000, attachmentCount: 10, downLinks: [] }
                ],
                imageToAttachURL: "https://www.skiworld.co.uk/images/uploads/photos/large/tignes_resort_-_winter_-_lake_and_reflections_14657.jpg"
            },
            settingName: "BulkItemCreation_Settings",
            help: "Use this to make many items",
            helpUrl:"https://docs23.matrixreq.com"
        },
        /*  Page in admin client to configure settings for one specific project - set enabled to false if not needed.
            The page itself is implemented in the _ProjectSetingsPage.ts
        */
        projectSettingsPage: {
            id: "BPPprojectsettings",
            title: "BPP projectsettings page",
            type:"BPPps",
            enabled: false,
            defaultSettings: {
                myProjectSetting: "null"
            },
            settingName: "Stuff",
            help: "This is my help text",
            helpUrl:"https://docs23.matrixreq.com"
        },
        /*  Add an entry in the tool menu of an item or folder - set enabled to false if not needed.
            The tool itself is implemented in the _Tool.ts
        */
        menuToolItem: {
            enabled: false,
            title:"matrix-ui-plugin-boilerplate-menuitem",
        },
        /*  Add a custom field to enter some data in the UI - set enabled to false if not needed.
            The field itself is implemented in the _Control.ts
        */
        field: {
            enabled: false,
            fieldType: "matrix-ui-plugin-boilerplate",
            title: "matrix-ui-plugin-boilerplate-field",
            fieldConfigOptions: {
                id: "matrix-ui-plugin-boilerplate",
                capabilities: {
                    canBePublished: false,
                    canBeReadonly: true,
                    canBeXtcPreset: false,
                    canHideInDoc: false,
                    canBeUsedInDocs: false,
                    canRequireContent: true,
                },
                class: "",
                help: "",
                label: "matrix-ui-plugin-boilerplate-field",
            }
        },
        /*  Add a dashboard inside a project - set enabled to false if not needed.
            The field itself is implemented in the _Control.ts
        */
        dashboard: {

            id:"BPP",
            title: "BPP dashboard page",
            enabled: false,
            icon: "fal fa-cog",
            parent: "DASHBOARDS",
            usefilter: true,
            order: 9999,
        }
    };

    /**
     * The constructor is loaded once after all the source code is loaded by the browser.
     * Nothing is known about the instance, project, user etc.
     * You can use it to initialize things like callbacks after item changes
     */
    constructor() {
        // here is a good place to register callbacks for UI events (like displaying or saving items)
        this.core = new sdkInstance.PluginCore(this);
    }

    PLUGIN_VERSION: string;
    PLUGIN_NAME: string;
    async getDashboardAsync(): Promise<IDashboardPage<IDashboardParametersBase>> {
        return null;
    }
    async getProjectSettingsPageAsync(): Promise<IPluginSettingPage<IProjectSettingsBase>> {
        return null;
    }
    async getServerSettingsPageAsync(): Promise<IPluginSettingPage<IBulkSettings>> {
        if (sdkInstance.app.isConfigApp()) {
            return new ServerSettingsPage(<IConfigApp><unknown>sdkInstance.app);
        }
        return null;
    }
    async getControlAsync(ctrlObj: JQuery): Promise<ControlCoreBase<IPluginFieldHandler<IPluginFieldValueBase>, IPluginFieldValueBase>> {
        return null;
    }
    async getToolAsync(): Promise<ITool> {
        return null;
    }
    getConfig(): IPluginConfig<IBulkSettings, IProjectSettingsBase> {
        return Plugin.config;
    }
    enableToolMenu(ul: JQuery, _hook: number): boolean {
        return false;
    }

    /**
     * This method is called each time  a project has been loaded and initialized.
     * At the time it is called, all project settings, categories etc are defined.
     *
     * @param project // id of the loaded project
     */
    onInitProject(project:string) {

        // here is a good place to decide based on the project (maybe some project setting), whether the plugin should be enabled

        // if not:
        // this.enabledInContext = false;
    }

    /** this method is called just before the rendering of an item is done
    * It is also called when opening the create item dialog.
    *
    * @param _item: the item which is being loaded in the UI
    */
    onInitItem(item: IItem) {

        // here is a good place to decide based on the selection in the tree, whether the plugin should be enabled

        // if not:
        // this.enabledInContext = false;
    }
}

registerPlugin(new Plugin().core);
