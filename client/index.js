(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["matrixClientSdk"] = factory();
	else
		root["matrixClientSdk"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReviewControlColumns: () => (/* binding */ ReviewControlColumns)
/* harmony export */ });
class ReviewControlColumns {
}
ReviewControlColumns.COL_COMMENT_LOG = "commentlog";
ReviewControlColumns.COL_ITEM = "reviewitem";
ReviewControlColumns.COL_VERSION = "_version";
ReviewControlColumns.COL_ANNOTATIONS = "_annotation";


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldDescriptions: () => (/* binding */ FieldDescriptions)
/* harmony export */ });
/* harmony import */ var _PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


class FieldDescriptions {
    static findById(idToFind) {
        var _a;
        let returnedValue = undefined;
        let result = this.descriptions.filter((description) => description.id === idToFind);
        returnedValue = result.length === 1 ? result[0] : undefined;
        // TODO: MATRIX-7555: lint errors should be fixed for next line
        // eslint-disable-next-line
        if (returnedValue == undefined) {
            // try to find it in the plugins, if they exist
            let descriptionFromPlugins = (_a = _PluginManager__WEBPACK_IMPORTED_MODULE_0__.plugins === null || _PluginManager__WEBPACK_IMPORTED_MODULE_0__.plugins === void 0 ? void 0 : _PluginManager__WEBPACK_IMPORTED_MODULE_0__.plugins.getFieldConfigOptions()) !== null && _a !== void 0 ? _a : [];
            result = descriptionFromPlugins.filter((description) => description.id === idToFind);
            returnedValue = result.length === 1 ? result[0] : undefined;
        }
        return returnedValue;
    }
    // TODO: MATRIX-7555: lint errors should be fixed for next line
    // eslint-disable-next-line
    static appendFieldDescriptions(newFields) {
        for (let fco of newFields) {
            let result = this.descriptions.filter((description) => description.id === fco.id);
            // TODO: MATRIX-7555: lint errors should be fixed for next line
            // eslint-disable-next-line
            if (result.length == 0) {
                this.descriptions.push(fco);
            }
        }
    }
    static get() {
        return FieldDescriptions.descriptions;
    }
    // TODO: MATRIX-7555: lint errors should be fixed for next line
    // eslint-disable-next-line
    static setValidationFunction(fieldId, validator) {
        let fieldDesc = FieldDescriptions.findById(fieldId);
        if (!fieldDesc) {
            throw new Error(`No such field type ${fieldId} registered`);
        }
        fieldDesc.capabilities.validationFunction = validator;
    }
}
FieldDescriptions.Field_sourceref = "sourceref";
FieldDescriptions.Field_markAsTemplate = "markAsTemplate";
FieldDescriptions.Field_dhf = "dhf";
FieldDescriptions.Field_docFilter = "docFilter";
// normal fields
FieldDescriptions.Field_richtext = "richtext";
FieldDescriptions.Field_text = "text";
FieldDescriptions.Field_section = "section";
FieldDescriptions.Field_fileManager = "fileManager";
FieldDescriptions.Field_tasksControl = "tasksControl";
FieldDescriptions.Field_textline = "textline";
FieldDescriptions.Field_user = "user";
FieldDescriptions.Field_date = "date";
FieldDescriptions.Field_dropdown = "dropdown";
FieldDescriptions.Field_links = "links";
FieldDescriptions.Field_uplinkinfo = "uplinkinfo";
FieldDescriptions.Field_crosslinks = "crosslinks";
FieldDescriptions.Field_risk2 = "risk2";
FieldDescriptions.Field_checkbox = "checkbox";
FieldDescriptions.Field_gateControl = "gateControl";
FieldDescriptions.Field_colorPicker = "colorPicker";
FieldDescriptions.Field_steplist = "steplist";
// toolbar
FieldDescriptions.Field_labels = "labels";
FieldDescriptions.Field_workflow = "workflow";
// tests and xtcs
FieldDescriptions.Field_test_steps = "test_steps";
FieldDescriptions.Field_test_steps_result = "test_steps_result";
FieldDescriptions.Field_test_result = "test_result";
// agile sync
FieldDescriptions.Field_syncStatus = "syncStatus";
FieldDescriptions.Field_syncSourceInfo = "syncSourceInfo";
// beta should not be used really
FieldDescriptions.Field_report = "report";
FieldDescriptions.Field_cascadingSelect = "cascadingSelect";
FieldDescriptions.Field_hyperlink = "hyperlink";
// technical - these need to be added once when creating a new DOC category or something special like this
FieldDescriptions.Field_reportId = "reportId";
FieldDescriptions.Field_filter_file = "filter_file";
FieldDescriptions.Field_signature = "signature";
FieldDescriptions.Field_signatureControl = "signatureControl";
FieldDescriptions.Field_signCache = "signCache";
FieldDescriptions.Field_publishedItemList = "publishedItemList";
FieldDescriptions.Field_publishedFilesList = "publishedFilesList";
FieldDescriptions.Field_publishedContent = "publishedContent";
FieldDescriptions.Field_publishedTitle = "publishedTitle";
FieldDescriptions.Field_docTraining = "docTraining";
FieldDescriptions.Field_docReview = "docReview";
FieldDescriptions.Field_risk = "risk";
FieldDescriptions.Field_htmlForm = "htmlForm";
FieldDescriptions.Field_hidden = "hidden";
FieldDescriptions.Field_dummy = "dummy";
FieldDescriptions.Field_guid = "guid";
FieldDescriptions.Field_oid = "oid";
FieldDescriptions.Field_versionLive = "versionLive";
FieldDescriptions.Field_version = "version";
FieldDescriptions.Field_currentVersion = "currentVersion";
FieldDescriptions.Field_riskFolder = "riskFolder";
FieldDescriptions.Field_reviewControl = "reviewControl";
// A [fieldId]: JsonValidationFunction map built up at runtime.
// We can't build this at compile time because validation functions are high-level entities.
FieldDescriptions.validationFunctions = {};
FieldDescriptions.descriptions = [
    // [ "richtext",  "user" , "date", "text", "textline" ,"test_result",
    //         "crosslinks", "gateControl","fileManager", "reviewControl"];
    // docs and sign
    {
        id: FieldDescriptions.Field_sourceref,
        capabilities: {
            canImportedFromExcel: true,
            canBeUsedInDocs: true,
            canHideInDoc: false,
            canBeXtcPreset: false,
            canBePublished: false,
            canBeReadonly: true,
        },
        label: "Source (Original Document) [sourceref]",
        class: "docsign",
        help: "keeps a reference to original document when copying and pasting",
    },
    {
        id: FieldDescriptions.Field_markAsTemplate,
        capabilities: {
            canBeUsedInDocs: true,
            canHideInDoc: false,
            canBeXtcPreset: false,
            canBePublished: false,
            canBeReadonly: true,
        },
        label: "Mark as template [markAsTemplate]",
        class: "docsign",
        help: "allows to define DOC templates which can be used in other projects",
    },
    {
        id: FieldDescriptions.Field_dhf,
        capabilities: {
            canBeUsedInDocs: true,
            canHideInDoc: false,
            canBeXtcPreset: false,
            canBePublished: false,
            canBeReadonly: true,
        },
        label: "DFH field  [dhf]",
        class: "docs",
        help: "for documents only: holds a section in a document",
    },
    {
        id: FieldDescriptions.Field_docFilter,
        capabilities: {
            canBeUsedInDocs: true,
            canHideInDoc: false,
            canBeXtcPreset: false,
            canBePublished: false,
            canBeReadonly: true,
        },
        label: "Label Filter in DOCs [docFilter]",
        class: "docs",
        help: "a special field for Document categories to filter documents by label",
    },
    // normal fields
    {
        id: FieldDescriptions.Field_richtext,
        capabilities: {
            canImportedFromExcel: true,
            canBeUnsafe: true,
            canBeUsedInDocs: true,
            canHideInDoc: true,
            canBeXtcPreset: true,
            canBePublished: true,
            canBeReadonly: true,
            canRequireContent: true,
        },
        label: "Rich Text Control [richtext]",
        class: "all",
        help: "a rich text editor field (with formatting)",
    },
    {
        id: FieldDescriptions.Field_text,
        capabilities: {
            canImportedFromExcel: true,
            canBeUnsafe: true,
            canBeUsedInDocs: true,
            canHideInDoc: true,
            canBeXtcPreset: true,
            canBePublished: true,
            canBeReadonly: true,
            canRequireContent: true,
        },
        label: "Plain Text Control [text]",
        class: "all",
        help: "a text editor field (no formatting)",
    },
    {
        id: FieldDescriptions.Field_section,
        capabilities: {
            canBeUsedInDocs: false,
            canHideInDoc: false,
            canBeXtcPreset: false,
            canBePublished: true,
            canBeReadonly: false,
            canRequireContent: false,
        },
        label: "Section with explanation [section]",
        class: "all",
        help: "a title with some explanation to separate fields",
    },
    {
        id: FieldDescriptions.Field_fileManager,
        capabilities: {
            canImportedFromExcel: true,
            canBeUsedInDocs: true,
            canHideInDoc: true,
            canBeXtcPreset: true,
            canBePublished: true,
            canBeReadonly: true,
        },
        label: "File Manager Control [fileManager]",
        class: "all",
        help: "a control which allows to attach files by browsing or drag and drop",
    },
    {
        id: FieldDescriptions.Field_tasksControl,
        capabilities: {
            canBeUsedInDocs: true,
            canHideInDoc: true,
            canBeXtcPreset: false,
            canBePublished: false,
            canBeReadonly: true,
        },
        label: "Tasks Control [tasksControl]",
        class: "all",
        help: "a field which shows links to external systems, like JIRA, github etc. (eg extensions folder)",
    },
    {
        id: FieldDescriptions.Field_textline,
        capabilities: {
            canImportedFromExcel: true,
            canBeUnsafe: true,
            canBeUsedInDocs: true,
            canHideInDoc: true,
            canBeXtcPreset: true,
            canBePublished: true,
            canBeReadonly: true,
            canRequireContent: true,
        },
        label: "Text Line Control [textline]",
        class: "all",
        help: "a field for one line of text",
    },
    {
        id: FieldDescriptions.Field_user,
        capabilities: {
            canImportedFromExcel: true,
            canBeUsedInDocs: true,
            canHideInDoc: true,
            canBeXtcPreset: true,
            canBePublished: true,
            canBeReadonly: true,
            canRequireContent: true,
        },
        label: "User Select Control [user]",
        class: "all",
        help: "a drop down to select a user in the project",
    },
    {
        id: FieldDescriptions.Field_date,
        capabilities: {
            canImportedFromExcel: true,
            canBeUsedInDocs: true,
            canHideInDoc: true,
            canBeXtcPreset: true,
            canBePublished: true,
            canBeReadonly: true,
            canRequireContent: true,
        },
        label: "Date Select Control [date]",
        class: "all",
        help: "a field to select a date",
    },
    {
        id: FieldDescriptions.Field_dropdown,
        capabilities: {
            canBeUnsafe: true,
            needsConfiguration: true,
            canBeUsedInDocs: true,
            canHideInDoc: true,
            canBeXtcPreset: true,
            canBePublished: true,
            canBeReadonly: true,
            canRequireContent: true,
        },
        label: "Drop Down Control [dropdown]",
        class: "all",
        help: "a drop-down selection field",
    },
    {
        id: FieldDescriptions.Field_links,
        capabilities: {
            canBeUsedInDocs: true,
            canHideInDoc: false,
            canBeXtcPreset: false,
            canBePublished: false,
            canBeReadonly: true,
        },
        label: "Down Traces Control [links]",
        class: "all",
        help: "a field to show and edit down traces as defined in the traceability configuration",
    },
    {
        id: FieldDescriptions.Field_uplinkinfo,
        capabilities: {
            schema: "IUpLinkDetails",
            needsConfiguration: true,
            canBeUsedInDocs: true,
            canHideInDoc: false,
            canBeXtcPreset: false,
            canBePublished: false,
            canBeReadonly: true,
        },
        label: "Uplink information [uplinkinfo]",
        class: "all",
        help: "a field to show information about up traces in the user interface",
    },
    {
        id: FieldDescriptions.Field_crosslinks,
        capabilities: {
            canImportedFromExcel: true,
            canBeUsedInDocs: true,
            canHideInDoc: true,
            canBeXtcPreset: false,
            canBePublished: false,
            canBeReadonly: true,
        },
        label: "Cross Project Link Control [crosslinks]",
        class: "all",
        help: "a field to add links to other matrix projects",
    },
    {
        id: FieldDescriptions.Field_risk2,
        capabilities: {
            canBeUnsafe: true,
            onlyOne: true,
            canHideInDoc: true,
            canBeXtcPreset: false,
            canBePublished: false,
            canBeReadonly: true,
        },
        label: "Risk Control [risk2]",
        class: "all",
        help: "a field rendering an FMEA-type risk field",
    },
    {
        id: FieldDescriptions.Field_checkbox,
        capabilities: {
            canBeUsedInDocs: true,
            canHideInDoc: true,
            canBeXtcPreset: true,
            canBePublished: true,
            canBeReadonly: true,
        },
        label: "Checkbox Control [checkbox]",
        class: "all",
        help: "a checkbox field",
    },
    {
        id: FieldDescriptions.Field_hyperlink,
        capabilities: {
            canImportedFromExcel: true,
            canBeUsedInDocs: true,
            canHideInDoc: true,
            canBeXtcPreset: false,
            canBePublished: true,
            canBeReadonly: true,
            canRequireContent: true,
        },
        label: "Hyperlink Control [hyperlink]",
        class: "all",
        help: "a field holding a hyperlink (url)",
    },
    {
        id: FieldDescriptions.Field_gateControl,
        capabilities: {
            canImportedFromExcel: true,
            canBeUnsafe: true,
            needsConfiguration: true,
            canHideInDoc: true,
            canBeXtcPreset: true,
            canBePublished: false,
            canBeReadonly: true,
            schema: "IGate",
        },
        label: "Gate Control [gateControl]",
        class: "all",
        help: "a quality gate field",
    },
    {
        id: FieldDescriptions.Field_colorPicker,
        capabilities: {
            canBeUsedInDocs: true,
            canHideInDoc: true,
            canBeXtcPreset: true,
            canBePublished: true,
            canBeReadonly: true,
            canRequireContent: true,
        },
        label: "Color picker [colorPicker]",
        class: "super",
        help: "a color picker field",
    },
    {
        id: FieldDescriptions.Field_steplist,
        capabilities: {
            needsConfiguration: true,
            canBeUsedInDocs: true,
            canHideInDoc: true,
            canBeXtcPreset: false,
            canBePublished: true,
            canBeReadonly: true,
            canBeUnsafe: true,
            schema: "IFieldParameter",
        },
        label: "Table Control [steplist]",
        class: "all",
        help: "a field rendered as a table",
    },
    // toolbar
    {
        id: FieldDescriptions.Field_labels,
        capabilities: {
            onlyOne: true,
            canBeUsedInDocs: true,
            canHideInDoc: false,
            canBeXtcPreset: false,
            canBePublished: false,
            canBeReadonly: true,
        },
        label: "Labels [labels]",
        class: "toolbar",
        help: "shows defined labels in the item's tool bar",
    },
    {
        id: FieldDescriptions.Field_workflow,
        capabilities: {
            onlyOne: true,
            canBeUsedInDocs: true,
            canHideInDoc: false,
            canBeXtcPreset: false,
            canBePublished: false,
            canBeReadonly: true,
        },
        label: "One2One Issue Mapping [workflow]",
        class: "toolbar",
        help: "a field shown in the item's tool bar showing the status of an external ticket (i.e. jira)",
    },
    // tests and xtcs
    {
        id: FieldDescriptions.Field_test_steps,
        capabilities: {
            canBeUnsafe: true,
            onlyOne: true,
            canHideInDoc: true,
            canBeXtcPreset: false,
            canBePublished: false,
            canBeReadonly: true,
        },
        label: "Test Table [test_steps]",
        class: "tests",
        help: "a special table control to define tests (see test configuration)",
    },
    {
        id: FieldDescriptions.Field_test_steps_result,
        capabilities: {
            canBeUnsafe: true,
            onlyOne: true,
            canHideInDoc: true,
            canBeXtcPreset: false,
            canBePublished: false,
            canBeReadonly: true,
        },
        label: "Test Result Table [test_steps_result]",
        class: "xtcs",
        help: "a special table control to define tests with results (see test configuration)",
    },
    {
        id: FieldDescriptions.Field_test_result,
        capabilities: {
            canImportedFromExcel: true,
            onlyOne: true,
            canHideInDoc: true,
            canBeXtcPreset: false,
            canBePublished: false,
            canBeReadonly: true,
        },
        label: "Test Result Summary [test_result]",
        class: "xtcs",
        help: "a special field to compute or specify the overall test result",
    },
    // agile sync
    {
        id: FieldDescriptions.Field_syncStatus,
        capabilities: {
            onlyOne: true,
            canHideInDoc: false,
            canBeXtcPreset: false,
            canBePublished: false,
            canBeReadonly: true,
        },
        label: "SYNC Status [syncStatus]",
        class: "sync",
        help: "control to hold the information about synced external items ",
    },
    {
        id: FieldDescriptions.Field_syncSourceInfo,
        capabilities: {
            onlyOne: true,
            canHideInDoc: false,
            canBeXtcPreset: false,
            canBePublished: false,
            canBeReadonly: true,
        },
        label: "SYNC Source Info [syncSourceInfo]",
        class: "sync",
        help: "a control to show control syncing of external items",
    },
    // beta should not be used really
    {
        id: FieldDescriptions.Field_report,
        capabilities: { canHideInDoc: false, canBeXtcPreset: false, canBePublished: false, canBeReadonly: true },
        label: "Embedded Report [report]",
        class: "beta",
        help: "allows to embed a standard report",
    },
    {
        id: FieldDescriptions.Field_cascadingSelect,
        capabilities: { canHideInDoc: false, canBeXtcPreset: true, canBePublished: true, canBeReadonly: true },
        label: "Cascading Select [cascadingSelect]",
        class: "beta",
        help: "a field to select values from hierachies of drop downs",
    },
    // technical - these need to be added once when creating a new DOC category or something special like this
    {
        id: FieldDescriptions.Field_reportId,
        capabilities: {
            onlyOne: true,
            canHideInDoc: false,
            canBeXtcPreset: false,
            canBePublished: false,
            canBeReadonly: true,
        },
        label: "report ID [reportId]",
        class: "super",
        help: "contains the id of the xslt template for reports",
    },
    {
        id: FieldDescriptions.Field_filter_file,
        capabilities: {
            onlyOne: true,
            canHideInDoc: false,
            canBeXtcPreset: false,
            canBePublished: false,
            canBeReadonly: true,
        },
        label: "filter_file [filter_file]",
        class: "super",
        help: "internal field required for documents",
    },
    {
        id: FieldDescriptions.Field_signature,
        capabilities: {
            onlyOne: true,
            canHideInDoc: false,
            canBeXtcPreset: false,
            canBePublished: false,
            canBeReadonly: true,
        },
        label: "Signature Table [signature]",
        class: "super",
        help: "field showing signature in documents",
    },
    {
        id: FieldDescriptions.Field_signatureControl,
        capabilities: {
            onlyOne: true,
            canHideInDoc: false,
            canBeXtcPreset: false,
            canBePublished: false,
            canBeReadonly: true,
        },
        label: "Signature Password Field [signatureControl]",
        class: "super",
        help: "field with control for signatures",
    },
];


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InitializePluginManager: () => (/* binding */ InitializePluginManager),
/* harmony export */   PluginManager: () => (/* binding */ PluginManager),
/* harmony export */   pluginHooks: () => (/* binding */ pluginHooks),
/* harmony export */   plugins: () => (/* binding */ plugins)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);




let pluginHooks;
pluginHooks = { shares: 0 };
class PluginManager {
    constructor() {
        this._plugins = [];
        this.controls = {};
        this.destructors = {};
        this.titles = {};
        this.usesFilters = {};
    }
    /** Called by the main UI handing over a div which can be used inside a plugin
     * to display modal popups
     *
     * @param {jquery object} jui a $("<div />") object
     * @returns {undefined}
     */
    setUI(jui) {
        this._jui = jui;
    }
    /** function to register a plugin for a specific menu (specified by the hook)
     *
     * @param {instance of plugin} plugin
     * @returns {undefined}
     */
    register(plugin) {
        this._plugins.push(plugin);
    }
    /** this method is called from the main UI whenever an item is selected to be
     * displayed. The information is forwarded to all plugins
     *
     * @param {json object} item for example a requirement. see the json documention of item types
     * @returns {undefined}
     */
    init(item) {
        for (let idx = 0; idx < this._plugins.length; idx++) {
            try {
                if (this._plugins[idx].initItem) {
                    // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                    this._plugins[idx].initItem(item, this._jui);
                }
            }
            catch (e) {
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                console.error("error: Fail to init for plugin : " + e.toString());
            }
        }
    }
    // TODO: MATRIX-7555: lint errors should be fixed for next line
    // eslint-disable-next-line
    async initPrinting() {
        for (let idx = 0; idx < this._plugins.length; idx++) {
            try {
                if (this._plugins[idx].initPrintingAsync) {
                    // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                    await this._plugins[idx].initPrintingAsync();
                }
            }
            catch (e) {
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                console.error("error: Fail to initPrinting for plugin : " + e.toString());
            }
        }
    }
    /** this method is called after connecting to server using getServer ("")
     *
     * @param {json serverSettings} serverSettings or null after unsucessful login
     * @returns {undefined}
     */
    initServerSettings(serverSettings) {
        for (let idx = 0; idx < this._plugins.length; idx++) {
            try {
                if (this._plugins[idx].initServerSettings) {
                    // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                    // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                    this._plugins[idx].initServerSettings(serverSettings);
                }
            }
            catch (e) {
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                console.log("error " + e.toString());
            }
        }
    }
    /** this method is called when creating a menu which has a hook. it allows the plugins to add
     * li's to the ul supplied
     *
     * @param {number} hook identifies the menu
     * @param {jquery object} ul  a $("<ul />) object
     * @returns {undefined}
     */
    updateMenu(hook, ul) {
        for (let idx = 0; idx < this._plugins.length; idx++) {
            try {
                if (this._plugins[idx].updateMenu) {
                    // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                    this._plugins[idx].updateMenu(ul, hook);
                }
            }
            catch (e) {
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                console.error("error: Fail to updateMenu for plugin : " + e.toString());
            }
        }
    }
    getFieldConfigOptions() {
        let fco = [];
        for (let idx = 0; idx < this._plugins.length; idx++) {
            try {
                if (this._plugins[idx].getFieldConfigOptions && this._plugins[idx].supportsControl) {
                    // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                    // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                    const fieldConfig = this._plugins[idx].getFieldConfigOptions();
                    for (let i = 0; i < fieldConfig.length; i++) {
                        // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                        if (this._plugins[idx].supportsControl(fieldConfig[i].id)) {
                            fco.push(fieldConfig[i]);
                        }
                    }
                }
            }
            catch (e) {
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                console.error("error: Fail to getFieldConfigOptions for plugin : " + e.toString());
            }
        }
        return fco;
    }
    // TODO: MATRIX-7555: lint errors should be fixed for next line
    // eslint-disable-next-line
    // TODO: MATRIX-7555: lint errors should be fixed for next line
    // eslint-disable-next-line
    addFieldSettings(
    // TODO: MATRIX-7555: lint errors should be fixed for next line
    // eslint-disable-next-line
    configApp, project, pageId, fieldType, fieldParams, ui, paramChanged, canBePublished) {
        for (let idx = 0; idx < this._plugins.length; idx++) {
            try {
                if (this._plugins[idx].addFieldSettings) {
                    // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                    this._plugins[idx].addFieldSettings(configApp, project, pageId, fieldType, fieldParams, ui, () => paramChanged(), canBePublished);
                }
            }
            catch (e) {
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                console.error("error: Fail to addFieldSettings for plugin : " + e.toString());
            }
        }
    }
    supportsControl(fieldType) {
        for (let idx = 0; idx < this._plugins.length; idx++) {
            try {
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                if (this._plugins[idx].supportsControl && this._plugins[idx].supportsControl(fieldType)) {
                    return true;
                }
            }
            catch (e) {
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                console.error("error: Fail to supportsControl for plugin : " + e.toString());
            }
        }
        return false;
    }
    createControl(ctrlObj, settings) {
        for (let idx = 0; idx < this._plugins.length; idx++) {
            try {
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                if (this._plugins[idx].supportsControl && this._plugins[idx].supportsControl(settings.fieldType)) {
                    // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                    this._plugins[idx].createControl(ctrlObj, settings);
                    return;
                }
            }
            catch (e) {
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                console.error("error: Fail to createControl for plugin : " + e.toString());
            }
        }
    }
    initProject(project) {
        // delete all non default plugins === custom
        for (let idx = this._plugins.length - 1; idx >= 0; idx--) {
            if (!this._plugins[idx].isDefault) {
                this._plugins.splice(idx, 1);
            }
        }
        for (let idx = 0; idx < this._plugins.length; idx++) {
            try {
                if (this._plugins[idx].initProject) {
                    // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                    this._plugins[idx].initProject(project);
                }
            }
            catch (e) {
                //Display error message to user in the console.
                console.error(e);
            }
        }
        this.initPrinting();
    }
    // to modify db tree after it has been created
    filterProject(db) {
        for (let idx = 0; idx < this._plugins.length; idx++) {
            try {
                if (this._plugins[idx].filterProject) {
                    // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                    this._plugins[idx].filterProject(db);
                }
            }
            catch (e) {
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                console.error("error: Fail to filterProject for plugin : " + e.toString());
            }
        }
    }
    // to modify search panel on left after it has been rendered
    updateSearchPanel() {
        for (let idx = 0; idx < this._plugins.length; idx++) {
            try {
                if (this._plugins[idx].updateSearchPanel) {
                    // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                    this._plugins[idx].updateSearchPanel();
                }
            }
            catch (e) {
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                console.error("error: Fail to updateSearchPanel for plugin : " + e.toString());
            }
        }
    }
    // to modify item on left after it has been rendered
    updateItemPanel() {
        for (let idx = 0; idx < this._plugins.length; idx++) {
            try {
                if (this._plugins[idx].updateItemPanel) {
                    // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                    this._plugins[idx].updateItemPanel();
                }
            }
            catch (e) {
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                console.error("error: Fail to updateItemPanel for plugin : " + e.toString());
            }
        }
    }
    // notify plugins that links of item changed
    updateItem(updates) {
        for (let idx = 0; idx < this._plugins.length; idx++) {
            try {
                if (this._plugins[idx].updateItem) {
                    // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                    this._plugins[idx].updateItem(updates);
                }
            }
            catch (e) {
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                console.error("error: Fail to updateItem for plugin : " + e.toString());
            }
        }
    }
    // TODO: MATRIX-7555: lint errors should be fixed for next line
    // eslint-disable-next-line
    updateTree() {
        for (let idx = 0; idx < this._plugins.length; idx++) {
            try {
                if (this._plugins[idx].updateTree) {
                    // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                    this._plugins[idx].updateTree();
                }
            }
            catch (e) {
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                console.error("error: Fail to updateTree for plugin : " + e.toString());
            }
        }
        return;
    }
    // TODO: MATRIX-7555: lint errors should be fixed for next line
    // eslint-disable-next-line
    getTinyMenus(editor) {
        let list = [];
        for (let plugin of this._plugins) {
            try {
                if (plugin.getTinyMenuItems) {
                    let menuItems = plugin.getTinyMenuItems(editor);
                    if (menuItems && menuItems.length > 0) {
                        list.push(...menuItems);
                    }
                }
            }
            catch (e) {
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                console.error("error: Fail to getTinyMenus for plugin : " + e.toString());
            }
        }
        return list;
    }
    getCustomSearches() {
        let list = [];
        for (let plugin of this._plugins) {
            try {
                if (plugin.getCustomSearches) {
                    let menuItems = plugin.getCustomSearches();
                    if (menuItems && menuItems.length > 0) {
                        list.push(...menuItems);
                    }
                }
            }
            catch (e) {
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                console.error("error: Fail to getCustomSearches for plugin : " + e.toString());
            }
        }
        return list;
    }
    getUserMenuItems() {
        let list = [];
        for (let plugin of this._plugins) {
            try {
                if (plugin.getUserMenuItems) {
                    let menuItems = plugin.getUserMenuItems();
                    if (menuItems && menuItems.length > 0) {
                        list.push(...menuItems);
                    }
                }
            }
            catch (e) {
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                console.error("error: Fail to getUserMenuItems for plugin : " + e.toString());
            }
        }
        return list;
    }
    getQMSUserMenuItems() {
        let list = [];
        for (let plugin of this._plugins) {
            try {
                if (plugin.getQMSUserMenuItems) {
                    let menuItems = plugin.getQMSUserMenuItems();
                    if (menuItems && menuItems.length > 0) {
                        list.push(...menuItems);
                    }
                }
            }
            catch (e) {
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                console.error("error: Fail to getQMSUserMenuItems for plugin : " + e.toString());
            }
        }
        return list;
    }
    getConfigUserMenuItems() {
        let list = [];
        for (let plugin of this._plugins) {
            try {
                if (plugin.getConfigUserMenuItems) {
                    let menuItems = plugin.getConfigUserMenuItems();
                    if (menuItems && menuItems.length > 0) {
                        list.push(...menuItems);
                    }
                }
            }
            catch (e) {
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                console.error("error: Fail to getConfigUserMenuItems for plugin : " + e.toString());
            }
        }
        return list;
    }
    getProjectMenuItems() {
        let list = [];
        for (let plugin of this._plugins) {
            try {
                if (plugin.getProjectMenuItems) {
                    let menuItems = plugin.getProjectMenuItems();
                    if (menuItems && menuItems.length > 0) {
                        list.push(...menuItems);
                    }
                }
            }
            catch (e) {
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                console.error("error: Fail to getProjectMenuItems for plugin : " + e.toString());
            }
        }
        return list;
    }
    async getProjectPages() {
        let that = this;
        let allPages = [];
        for (let idx = 0; idx < this._plugins.length; idx++) {
            try {
                if (this._plugins[idx].getProjectPagesAsync) {
                    // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                    // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                    let pages = await this._plugins[idx].getProjectPagesAsync();
                    for (let page of pages) {
                        allPages.push(page);
                        that.controls["_" + page.id] = page.render;
                        that.destructors["_" + page.id] = page.destroy;
                        that.titles["_" + page.id] = page.title;
                        that.usesFilters["_" + page.id] = page.usesFilters;
                    }
                }
            }
            catch (e) {
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                console.error("error: Fail to getProjectPages for plugin : " + e.toString());
            }
        }
        return allPages;
    }
    /**
     * Return a list of plugins that can be displayed in the dashboard analytics page.
     * */
    // TODO: MATRIX-7555: lint errors should be fixed for next line
    // eslint-disable-next-line
    getAllTiles() {
        let tiles = [];
        for (let idx = 0; idx < this._plugins.length; idx++) {
            let plugin = this._plugins[idx];
            // TODO: MATRIX-7555: lint errors should be fixed for next line
            // eslint-disable-next-line
            if (plugin.getTiles != undefined) {
                let tile = plugin.getTiles();
                tiles.push(...tile);
            }
        }
        return tiles;
    }
    // TODO: MATRIX-7555: lint errors should be fixed for next line
    // eslint-disable-next-line
    async getAllDashboardLinksForAnalyticsAsync() {
        let allLinks = [];
        for (let idx = 0; idx < this._plugins.length; idx++) {
            // TODO: MATRIX-7555: lint errors should be fixed for next line
            // eslint-disable-next-line
            // TODO: MATRIX-7555: lint errors should be fixed for next line
            // eslint-disable-next-line
            // TODO: MATRIX-7555: lint errors should be fixed for next line
            // eslint-disable-next-line
            // TODO: MATRIX-7555: lint errors should be fixed for next line
            // eslint-disable-next-line
            // TODO: MATRIX-7555: lint errors should be fixed for next line
            // eslint-disable-next-line
            let plugin = this._plugins[idx];
            // TODO: MATRIX-7555: lint errors should be fixed for next line
            // eslint-disable-next-line
            if (plugin && plugin.getDashboardLinksForAnalyticsAsync != undefined) {
                let links = await plugin.getDashboardLinksForAnalyticsAsync();
                allLinks.push(...links);
            }
        }
        return allLinks;
    }
    supportsControlPage(controlType) {
        return !!this.controls[controlType];
    }
    createControlPage(options, toggleFilters) {
        options.control.html("");
        document.title = this.titles[options.type] + " - " + _globals__WEBPACK_IMPORTED_MODULE_0__.matrixSession.getProject();
        if (this.usesFilters[options.type]) {
            // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
            toggleFilters(true);
        }
        else {
            // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
            toggleFilters(false);
        }
        this.activeControlPage = options.type;
        this.controls[options.type](options);
    }
    destroyActiveControlPage() {
        if (this.activeControlPage) {
            try {
                const destructor = this.destructors[this.activeControlPage];
                if (destructor) {
                    destructor();
                }
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                this.activeControlPage = null;
            }
            catch (e) {
                console.error("Error removing control page", e);
            }
        }
        else {
            // console.log("No active control page");
        }
    }
    // TODO: MATRIX-7555: lint errors should be fixed for next line
    // eslint-disable-next-line
    callPreSaveHook(isItem, type, controls) {
        let that = this;
        // TODO: MATRIX-7555: lint errors should be fixed for next line
        // eslint-disable-next-line
        function callRec(idx) {
            let res = $.Deferred();
            if (idx >= that._plugins.length) {
                res.resolve();
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                return res;
            }
            if (that._plugins[idx].preSaveHookAsync) {
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                that._plugins[idx]
                    .preSaveHookAsync(isItem, type, controls)
                    .then(function () {
                    callRec(idx + 1)
                        .done(function () {
                        res.resolve();
                    })
                        .fail(function () {
                        res.reject();
                    });
                })
                    .catch(function () {
                    callRec(idx + 1).always(function () {
                        res.reject();
                    });
                });
            }
            else {
                callRec(idx + 1)
                    .done(function () {
                    res.resolve();
                })
                    .fail(function () {
                    res.reject();
                });
            }
            // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
            return res;
        }
        return callRec(0);
    }
    // return true for handled, false for not  handled
    renderActionButtons(options, body, controls) {
        let done = false;
        for (let idx = 0; idx < this._plugins.length; idx++) {
            try {
                if (this._plugins[idx].renderActionButtons) {
                    // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                    if (this._plugins[idx].renderActionButtons(options, body, controls)) {
                        done = true;
                    }
                }
            }
            catch (e) {
                // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
                console.error("error: Fail to renderActionButtons for plugin : " + e.toString());
            }
        }
        // return true if at least on plugin is owner
        return done;
    }
    /******************** admin function  */
    // TODO: MATRIX-7555: lint errors should be fixed for next line
    // eslint-disable-next-line
    getPlugins() {
        return this._plugins;
    }
    // TODO: MATRIX-7555: lint errors should be fixed for next line
    // eslint-disable-next-line
    async waitForAllPlugins() {
        //Wait for all script to be loaded
        // TODO: MATRIX-7555: lint errors should be fixed for next line
        // eslint-disable-next-line
        let pluginCount = () => {
            // TODO: MATRIX-7555: lint errors should be fixed for next line
            // eslint-disable-next-line
            return globalThis.pluginLoadedCount;
        };
        // TODO: MATRIX-7555: lint errors should be fixed for next line
        // eslint-disable-next-line
        let expectedCount = () => {
            // TODO: MATRIX-7555: lint errors should be fixed for next line
            // eslint-disable-next-line
            return globalThis.pluginCountExpectedToBeLoaded;
        };
        console.log(` ${expectedCount()} plugins has to be loaded...`);
        console.log(`Current plugin count: ${pluginCount()}`);
        let tryCount = 0;
        // If item doesn't exist, let's check if plugins are still loading by check the # of plugins
        // TODO: MATRIX-7555: lint errors should be fixed for next line
        // eslint-disable-next-line
        // TODO: MATRIX-7555: lint errors should be fixed for next line
        // eslint-disable-next-line
        while (pluginCount() == undefined || (pluginCount() != expectedCount() && tryCount < 10)) {
            // Wait few milliseconds to let the plugins register themselves
            console.log(`Waiting for plugins to load ${pluginCount()}/${expectedCount()} ... Try #${tryCount++}`);
            await (0,_globals__WEBPACK_IMPORTED_MODULE_0__.wait)(100);
            if (tryCount === 10) {
                console.error("Failed to load all plugins");
                break;
            }
        }
        console.info("All plugins loaded");
    }
}
let plugins;
// TODO: MATRIX-7555: lint errors should be fixed for next line
// eslint-disable-next-line
function InitializePluginManager() {
    plugins = new PluginManager(); // plugin manager
    // @ts-ignore TODO: get rid of globals
    globalThis.plugins = plugins;
    // @ts-ignore TODO: get rid of globals
    globalThis.pluginHooks = pluginHooks;
}


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlState: () => (/* binding */ ControlState),
/* harmony export */   GlobalMatrix: () => (/* binding */ GlobalMatrix),
/* harmony export */   InstallLegacyAdaptor: () => (/* binding */ InstallLegacyAdaptor),
/* harmony export */   app: () => (/* binding */ app),
/* harmony export */   applyResponsiveView: () => (/* binding */ applyResponsiveView),
/* harmony export */   globalMatrix: () => (/* binding */ globalMatrix),
/* harmony export */   matrixApplicationUI: () => (/* binding */ matrixApplicationUI),
/* harmony export */   matrixSession: () => (/* binding */ matrixSession),
/* harmony export */   restConnection: () => (/* binding */ restConnection),
/* harmony export */   setApp: () => (/* binding */ setApp),
/* harmony export */   setIC: () => (/* binding */ setIC),
/* harmony export */   setMatrixApplicationUI: () => (/* binding */ setMatrixApplicationUI),
/* harmony export */   setMatrixSession: () => (/* binding */ setMatrixSession),
/* harmony export */   setRestConnection: () => (/* binding */ setRestConnection),
/* harmony export */   wait: () => (/* binding */ wait)
/* harmony export */ });




class GlobalMatrix {
    constructor() {
        this.ITEM_DOES_NOT_EXIST = "";
        this.globalShiftDown = false;
        this.globalCtrlDown = false;
        this.historyFilter = "merge,delete,undelete,add,edit,execute,reviewed,signature,report,touch,release";
        // @ts-ignore TODO: MATRIX-6934: nullStrictCheck should be fixed for next line
        this.mobileApp = undefined;
    }
    // TODO: MATRIX-7555: lint errors should be fixed for next line
    // eslint-disable-next-line
    installLegacyAdaptor() {
        // @ts-ignore have to live with it for now
        globalThis.ITEM_DOES_NOT_EXIST = this.ITEM_DOES_NOT_EXIST;
        // @ts-ignore have to live with it for now
        globalThis.matrixRestUrl = this.matrixRestUrl;
        // @ts-ignore have to live with it for now
        globalThis.matrixBaseUrl = this.matrixBaseUrl;
        // @ts-ignore have to live with it for now
        globalThis.matrixWfgw = this.matrixWfgw;
        // @ts-ignore have to live with it for now
        globalThis.matrixExpress = this.matrixExpress;
        // @ts-ignore have to live with it for now
        globalThis.matrixProduct = this.matrixProduct;
        // @ts-ignore have to live with it for now
        globalThis.mxOauth = this.mxOauth;
        // @ts-ignore have to live with it for now
        globalThis.mxOauthLoginUrl = this.mxOauthLoginUrl;
        // @ts-ignore have to live with it for now
        globalThis.serverStorage = this.serverStorage;
        // @ts-ignore have to live with it for now
        globalThis.projectStorage = this.projectStorage;
        // @ts-ignore have to live with it for now
        globalThis.wfgwConnection = this.wfgwConnection;
        // @ts-ignore have to live with it for now
        globalThis.globalShiftDown = this.globalShiftDown;
        // @ts-ignore have to live with it for now
        globalThis.globalCtrlDown = this.globalCtrlDown;
        // @ts-ignore have to live with it for now
        globalThis.jsonValidator = this.jsonValidator;
    }
}
const globalMatrix = new GlobalMatrix();
// TODO: MATRIX-7555: lint errors should be fixed for next line
// eslint-disable-next-line
function setIC(newIC) {
    globalMatrix.ItemConfig = newIC; // To use in matrixSdk
    // @ts-ignore have to live with it for now
    globalThis.IC = newIC; // legacy support
}
let matrixSession;
// TODO: MATRIX-7555: lint errors should be fixed for next line
// eslint-disable-next-line
function setMatrixSession(session) {
    matrixSession = session;
}
let restConnection; // global rest connection
// TODO: MATRIX-7555: lint errors should be fixed for next line
// eslint-disable-next-line
function setRestConnection(rc) {
    restConnection = rc;
}
let matrixApplicationUI; // the application
// TODO: MATRIX-7555: lint errors should be fixed for next line
// eslint-disable-next-line
function setMatrixApplicationUI(ui) {
    matrixApplicationUI = ui;
}
// TODO(modules): app was declared as interface MatrixReq, which is empty, and then usually
// assigned to a variable of type businesslogic/UI/MatrixReq. We just opt out of typing for
// this variable and ideally we should fix that with a real interface. I changed the type to
// any to make the true situation easier to see.
let app; // main application
// TODO: MATRIX-7555: lint errors should be fixed for next line
// eslint-disable-next-line
// TODO: MATRIX-7555: lint errors should be fixed for next line
// eslint-disable-next-line
function setApp(newApp) {
    app = newApp;
}
var ControlState;
(function (ControlState) {
    ControlState[ControlState["FormEdit"] = 0] = "FormEdit";
    ControlState[ControlState["FormView"] = 1] = "FormView";
    ControlState[ControlState["DialogCreate"] = 2] = "DialogCreate";
    ControlState[ControlState["HistoryView"] = 3] = "HistoryView";
    ControlState[ControlState["Tooltip"] = 4] = "Tooltip";
    ControlState[ControlState["Print"] = 5] = "Print";
    ControlState[ControlState["Report"] = 6] = "Report";
    ControlState[ControlState["DialogEdit"] = 7] = "DialogEdit";
    ControlState[ControlState["Review"] = 8] = "Review";
    ControlState[ControlState["Zen"] = 9] = "Zen";
})(ControlState || (ControlState = {}));
// This is so that old legacy scripts can "just work" to a degree.
// TODO: MATRIX-7555: lint errors should be fixed for next line
// eslint-disable-next-line
function InstallLegacyAdaptor() {
    // @ts-ignore have to live with it for now
    globalThis.ControlState = ControlState;
    // @ts-ignore have to live with it for now
    globalThis.IC = globalMatrix.ItemConfig;
    // @ts-ignore have to live with it for now
    globalThis.matrixSession = matrixSession;
    // @ts-ignore have to live with it for now
    globalThis.restConnection = restConnection;
    // @ts-ignore have to live with it for now
    globalThis.app = app;
    // @ts-ignore have to live with it for now
    globalThis.matrixApplicationUI = matrixApplicationUI;
    globalMatrix.installLegacyAdaptor();
    // @ts-ignore have to live with it for now
    globalThis.applyResponsiveView = applyResponsiveView;
}
// TODO: MATRIX-7555: lint errors should be fixed for next line
// eslint-disable-next-line
function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
// TODO: MATRIX-7555: lint errors should be fixed for next line
// eslint-disable-next-line
function applyResponsiveView() {
    let mobileView = localStorage.getItem("mobileLayout");
    let x = $(window).width();
    if (mobileView) {
        $("#contextframesizer").css("display", "none");
        $("#dragbar").css("display", "none");
        $("#sidebar").css("max-width", "none");
    }
    // TODO: MATRIX-7555: lint errors should be fixed for next line
    // eslint-disable-next-line
    if (mobileView == "0") {
        // see item
        $("#sidebar").css("display", "none");
        $("#navLeft").css("display", "none");
        $("#main").css("display", "block");
        // TODO: MATRIX-7555: lint errors should be fixed for next line
        // eslint-disable-next-line
    }
    else if (mobileView == "1") {
        // see navigation tree
        $("#sidebar").css("width", x).css("display", "block");
        $("#main").css("display", "none");
        $("#navLeft").css("display", "");
        // TODO: MATRIX-7555: lint errors should be fixed for next line
        // eslint-disable-next-line
    }
    else if (mobileView == "2") {
        // see both
        $("#sidebar").css("width", x / 2 + "px");
        $("#navLeft").css("display", "");
        $("#main").css("display", "block");
    }
    else {
        // not mobile
        $("#dragbar").css("display", "block");
        $("#contextframesizer").css("display", "block");
        $("#navLeft").css("display", "");
        $("#main").css("display", "block");
    }
    app.resizeItem(true);
}


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineType: () => (/* binding */ LineType)
/* harmony export */ });
var LineType;
(function (LineType) {
    LineType["textline"] = "textline";
    LineType["id"] = "id";
    LineType["uppercase"] = "uppercase";
    LineType["number"] = "number";
    LineType["select"] = "select";
    LineType["table"] = "table";
    LineType["json"] = "json";
    LineType["color"] = "color";
    LineType["id_"] = "id_";
    LineType["richtext"] = "richtext";
    LineType["readonly"] = "readonly";
    LineType["boolean"] = "boolean";
    LineType["multiselect"] = "multiselect";
    LineType["folderselect"] = "folderselect";
    LineType["userAndGroupSelect"] = "userAndGroupSelect";
})(LineType || (LineType = {}));


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchState: () => (/* binding */ SearchState),
/* harmony export */   SearchUpdate: () => (/* binding */ SearchUpdate),
/* harmony export */   SelectMode: () => (/* binding */ SelectMode)
/* harmony export */ });

var SelectMode;
(function (SelectMode) {
    /*** DO NOT CHANGED numbers use from baseControl */
    SelectMode[SelectMode["none"] = 0] = "none";
    SelectMode[SelectMode["items"] = 1] = "items";
    SelectMode[SelectMode["folders"] = 2] = "folders";
    SelectMode[SelectMode["singleItem"] = 3] = "singleItem";
    SelectMode[SelectMode["singleFolder"] = 4] = "singleFolder";
    SelectMode[SelectMode["independent"] = 5] = "independent";
    SelectMode[SelectMode["auto"] = 6] = "auto";
    SelectMode[SelectMode["independentAuto"] = 7] = "independentAuto";
    SelectMode[SelectMode["autoPrecise"] = 8] = "autoPrecise";
})(SelectMode || (SelectMode = {}));
var SearchState;
(function (SearchState) {
    SearchState[SearchState["NoSearch"] = 0] = "NoSearch";
    SearchState[SearchState["FilterDone"] = 1] = "FilterDone";
    SearchState[SearchState["ServerRunning"] = 2] = "ServerRunning";
    SearchState[SearchState["ServerDone"] = 3] = "ServerDone";
})(SearchState || (SearchState = {}));
var SearchUpdate;
(function (SearchUpdate) {
    SearchUpdate[SearchUpdate["inserted_node"] = 1] = "inserted_node";
    SearchUpdate[SearchUpdate["updated_rec"] = 2] = "updated_rec";
    SearchUpdate[SearchUpdate["filter_status_changed"] = 3] = "filter_status_changed";
    SearchUpdate[SearchUpdate["title_changed"] = 4] = "title_changed";
    SearchUpdate[SearchUpdate["item_dropped"] = 5] = "item_dropped";
})(SearchUpdate || (SearchUpdate = {}));


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldDescriptions: () => (/* reexport safe */ _core_common_businesslogic_FieldDescriptions__WEBPACK_IMPORTED_MODULE_1__.FieldDescriptions),
/* harmony export */   LineType: () => (/* reexport safe */ _core_common_UI_LineType__WEBPACK_IMPORTED_MODULE_2__.LineType),
/* harmony export */   ReviewControlColumns: () => (/* reexport safe */ _core_client_plugins_ScheduleReviewDefines__WEBPACK_IMPORTED_MODULE_0__.ReviewControlColumns),
/* harmony export */   SelectMode: () => (/* reexport safe */ _core_common_UI_Components_ProjectViewDefines__WEBPACK_IMPORTED_MODULE_3__.SelectMode),
/* harmony export */   getSdkInstance: () => (/* binding */ getSdkInstance),
/* harmony export */   registerPlugin: () => (/* binding */ registerPlugin)
/* harmony export */ });
/* harmony import */ var _core_client_plugins_ScheduleReviewDefines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _core_common_businesslogic_FieldDescriptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _core_common_UI_LineType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _core_common_UI_Components_ProjectViewDefines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);




// Enums need to be exported fully, "export type" isn't sufficient.

function isOutsideMatrixApp() {
    return !(window && window.matrixSdk);
}
function getSdkInstance() {
    if (isOutsideMatrixApp()) {
        throw new Error("Client SDK can only be used within Matrix Requirements application");
    }
    return window.matrixSdk;
}
function registerPlugin(plugin) {
    getSdkInstance().plugins.register(plugin);
}

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=clientSdk.js.map