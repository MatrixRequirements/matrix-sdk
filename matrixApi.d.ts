declare module matrixApi
{
	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface Admin {
	}
	interface MatrixReq {
	}
	interface Error {
	    name: string;
	    message: string;
	}
	interface IControlDefinition {
	    name?: string;
	    control?: JQuery;
	    fieldId?: number;
	    isDhfType?: boolean;
	    ctrlType?: string;
	}
	interface IGenericMap {
	    [key: string]: any;
	}
	interface IAnyMap {
	    [key: string]: any;
	}
	interface IStringMap {
	    [key: string]: string;
	}
	interface IItemGetMap {
	    [key: string]: IItemGet;
	}
	interface INumberStringMap {
	    [key: number]: string;
	}
	interface IStringNumberMap {
	    [key: string]: number;
	}
	interface IBooleanMap {
	    [key: string]: boolean;
	}
	interface IStringStringArrayMap {
	    [key: string]: string[];
	}
	interface IStringJQueryMap {
	    [key: string]: JQuery;
	}
	interface IJsonSetting {
	    id: string;
	    value: any;
	}
	interface IRestParam extends Object {
	    td?: number;
	    reason?: string;
	    filter?: string;
	    [key: string]: any;
	}
	type IRestResult = {} | string;
	class GlobalMatrix {
	    verbose: boolean;
	    ItemConfig: ItemConfiguration;
	    resetHighlightLinks: Function;
	    PopulateProjects: Function;
	    mobileApp: {
	        Login: Function;
	        ShowLoginScreen: Function;
	        ShowMobileUI: Function;
	    };
	    jiraPlugin: any;
	    Admin: any;
	    doc: any;
	    addHighlightLink: Function;
	    addHighlightRegex: Function;
	    ITEM_DOES_NOT_EXIST: string;
	    matrixRestUrl: string;
	    matrixBaseUrl: string;
	    matrixWfgw: string;
	    matrixExpress: boolean;
	    matrixProduct: string;
	    mxOauth: string;
	    mxOauthLoginUrl: string;
	    serverStorage: IDataStorage;
	    projectStorage: IDataStorage;
	    wfgwConnection: RestConnector;
	    globalShiftDown: boolean;
	    globalCtrlDown: boolean;
	    jsonValidator: JsonValidator;
	    historyFilter: any;
	    EmbeddedReport: any;
	    constructor();
	    installLegacyAdaptor(): void;
	}
	var globalMatrix: GlobalMatrix;
	function setIC(newIC: ItemConfiguration): void;
	var matrixSession: MatrixSession;
	function setMatrixSession(session: MatrixSession): void;
	var restConnection: RestConnector;
	function setRestConnection(rc: RestConnector): void;
	var matrixApplicationUI: Application;
	function setMatrixApplicationUI(ui: Application): void;
	var app: any;
	function setApp(newApp: any): void;
	interface IReference {
	    projectShortLabel?: string;
	    to: string;
	    title: string;
	    modDate?: string;
	    isIndirect?: boolean;
	}
	interface IItemIdParts {
	    id: string;
	    version: number;
	    type: string;
	    isFolder: boolean;
	    url: string;
	    link: string;
	    linkv: string;
	    number: number;
	}
	interface IReferenceChange {
	    action: string;
	    fromId: string;
	    toId: string;
	}
	interface IEmail {
	    summary: string;
	    description: string;
	    matrixProject: string;
	    matrixItem: string;
	    browser: string;
	    log: string;
	    email?: string;
	}
	interface IDevice {
	    screen: ISize;
	    viewport: ISize;
	}
	interface ISize {
	    width: number;
	    height: number;
	}
	interface IItem {
	    upLinks?: IReference[];
	    upLinkList?: XRTrimLink[];
	    downLinks?: IReference[];
	    children?: IItem[];
	    history?: IItemHistory[];
	    modDate?: string;
	    isUnselected?: number;
	    availableFormats?: string[];
	    selectSubTree?: XRCategoryAndRoot[];
	    requireSubTree?: XRCategoryAndRoot[];
	    icon?: string;
	    type?: string;
	    id?: string;
	    title?: string;
	    linksUp?: string;
	    linksDown?: string;
	    isFolder?: boolean;
	    isDeleted?: boolean;
	    maxVersion?: number;
	    docHasPackage?: boolean;
	    [key: string]: any;
	}
	interface ILink {
	    from: string;
	    to: string;
	}
	interface IItemGet extends IItem {
	    labels?: string[];
	}
	interface IItemPut extends IItem {
	    labels?: string;
	    onlyThoseFields?: number;
	    onlyThoseLabels?: number;
	}
	interface IItemHistory {
	    action: string;
	    user: string;
	    dateUserFormat: string;
	    comment: string;
	    id: string;
	    version: number;
	    date: string;
	    title: string;
	    deletedate?: string;
	}
	interface IDataStorage {
	    setItem: (itemKey: string, itemVal: string, sanitize?: boolean) => void;
	    getItem: (itemKey: string, dontSanitize?: boolean) => string;
	    getItemDefault: (itemKey: string, defaultValue: string) => string;
	}
	enum ControlState {
	    FormEdit = 0,
	    FormView = 1,
	    DialogCreate = 2,
	    HistoryView = 3,
	    Tooltip = 4,
	    Print = 5,
	    Report = 6,
	    DialogEdit = 7
	}
	function InstallLegacyAdaptor(): void;
	//# sourceMappingURL=globals.d.ts.map

	export interface XCGetAllUsers extends IRestParam {
	    details: any;
	}
	export interface XCGetUser extends IRestParam {
	}
	export interface XCGetUserAudit extends IRestParam {
	    startAt?: number;
	    maxResults?: number;
	}
	export interface XCGetUserProjects extends IRestParam {
	}
	export interface XCCheckUserPassword extends IRestParam {
	    password: string;
	}
	export interface XCPostLogin extends IRestParam {
	    password: string;
	}
	export interface XCPostLogout extends IRestParam {
	}
	export interface XCPostAddUser extends IRestParam {
	    login: string;
	    email: string;
	    password: string;
	    first?: string;
	    last?: string;
	    json: any;
	}
	export interface XCPostAddUserProject extends IRestParam {
	    permission: number;
	}
	export interface XCPostAddUserSetting extends IRestParam {
	    key: string;
	    value: string;
	}
	export interface XCPostAddUserToken extends IRestParam {
	    value?: string;
	    purpose: string;
	    reason?: string;
	    validity?: number;
	}
	export interface XCPostResetPassword extends IRestParam {
	    token: string;
	    password: string;
	    signature_password?: string;
	}
	export interface XCPostCheckUserPassword extends IRestParam {
	    password: string;
	}
	export interface XCPutUser extends IRestParam {
	    email: string;
	    password: string;
	    first?: string;
	    last?: string;
	    json: string;
	}
	export interface XCPutUserProject extends IRestParam {
	    permission: number;
	}
	export interface XCPutUserStatus extends IRestParam {
	    status: any;
	}
	export interface XCPutUserRename extends IRestParam {
	    newLogin: string;
	}
	export interface XCDeleteUser extends IRestParam {
	    confirm: string;
	}
	export interface XCDeleteUserToken extends IRestParam {
	    value: string;
	}
	export interface XCGetAllGroups extends IRestParam {
	    details?: number;
	}
	export interface XCGetGroup extends IRestParam {
	    details?: number;
	}
	export interface XCPostAddGroup extends IRestParam {
	}
	export interface XCPostAddGroupToProject extends IRestParam {
	    permission?: number;
	}
	export interface XCPutUserInGroup extends IRestParam {
	}
	export interface XCPutAllUserInGroup extends IRestParam {
	    IGNORE0?: any;
	}
	export interface XCPutGroupRename extends IRestParam {
	    newName: any;
	}
	export interface XCDeleteGroup extends IRestParam {
	    confirm: string;
	}
	export interface XCDeleteUserFromGroup extends IRestParam {
	}
	export interface XCGetStartupInfo extends IRestParam {
	    adminUI?: number;
	    output?: string;
	}
	export interface XCGetProjectInfo extends IRestParam {
	    adminUI?: number;
	}
	export interface XCGetCalendar extends IRestParam {
	}
	export interface XCGetCategoryList extends IRestParam {
	}
	export interface XCGetProjectSetting extends IRestParam {
	}
	export interface XCGetProjectSettingAll extends IRestParam {
	}
	export interface XCGetSchema extends IRestParam {
	    simple?: number;
	    excludeCategories?: string;
	}
	export interface XCGetConfigCheck extends IRestParam {
	    excludeCategories?: string;
	}
	export interface XCGetStatus extends IRestParam {
	}
	export interface XCGetTags extends IRestParam {
	}
	export interface XCGetTodos extends IRestParam {
	    itemRef?: string;
	    includeDone?: number;
	    includeAllUsers?: number;
	    includeFuture?: number;
	}
	export interface XCGetTodosAllProjects extends IRestParam {
	    includeDone?: number;
	    includeFuture?: number;
	}
	export interface XCGetJobStatus extends IRestParam {
	}
	export interface XCGetJobFile extends IRestParam {
	    mode?: string;
	    format?: string;
	    disposition?: string;
	}
	export interface XCGetCategoryDetail extends IRestParam {
	    filter?: string;
	}
	export interface XCGetFullTree extends IRestParam {
	    fancy?: string;
	    filter?: string;
	    atDate?: string;
	}
	export interface XCGetNeedle extends IRestParam {
	    search: string;
	    id: string;
	    filter?: string;
	    fieldsOut?: string;
	    labels?: number;
	    treeOrder?: number;
	    links?: string;
	}
	export interface XCGetNeedleAllProjects extends IRestParam {
	    search: string;
	    id: string;
	    filter?: string;
	    fieldsOut?: string;
	    labels?: number;
	    links?: string;
	}
	export interface XCGetNeedleMinimal extends IRestParam {
	    search: string;
	    filter?: string;
	}
	export interface XCGetNeedleMinimalAllProjects extends IRestParam {
	    search: string;
	    filter?: string;
	}
	export interface XCGetMonitor extends IRestParam {
	}
	export interface XCGetReports extends IRestParam {
	}
	export interface XCGetDate extends IRestParam {
	    date?: string;
	    dateformat?: string;
	    timeformat?: string;
	}
	export interface XCGetTimeZones extends IRestParam {
	}
	export interface XCGetAllFile extends IRestParam {
	}
	export interface XCGetAllFileCustomer extends IRestParam {
	}
	export interface XCGetAllJob extends IRestParam {
	}
	export interface XCGetOneCustomerFile extends IRestParam {
	    key: string;
	    disposition?: string;
	}
	export interface XCGetOneFile extends IRestParam {
	    key: string;
	    disposition?: string;
	}
	export interface XCGetItemDetail extends IRestParam {
	    history?: number;
	    fields?: number;
	    filter?: string;
	    atDate?: string;
	    withTree?: number;
	}
	export interface XCGetFolderDetail extends IRestParam {
	    history?: number;
	    filter?: string;
	    children?: string;
	    atDate?: string;
	    fields?: number;
	}
	export interface XCGetItemList extends IRestParam {
	    detailed?: number;
	}
	export interface XCGetField extends IRestParam {
	    field: string;
	    format?: string;
	    download?: number;
	}
	export interface XCGetProjectAudit extends IRestParam {
	    startAt?: number;
	    maxResults?: number;
	    deleteOnly?: string;
	    tech?: string;
	    auditIdMin?: number;
	    auditIdMax?: number;
	    noReport?: number;
	    noImport?: number;
	    include?: string;
	    resolveRef?: number;
	    itemRef?: string;
	}
	export interface XCGetProjectAccess extends IRestParam {
	}
	export interface XCGetCategorySetting extends IRestParam {
	}
	export interface XCGetExport extends IRestParam {
	    itemList: string;
	}
	export interface XCGetLicense extends IRestParam {
	}
	export interface XCGetMergeInfo extends IRestParam {
	    excludeCategories?: string;
	    fromDate?: string;
	    push?: number;
	}
	export interface XCGetMergeHistory extends IRestParam {
	}
	export interface XCGetLabelHistory extends IRestParam {
	    itemRef?: string;
	    from?: string;
	    to?: string;
	}
	export interface XCGetOpenApi extends IRestParam {
	}
	export interface XCGetQmsFind extends IRestParam {
	    search?: string;
	    pubItem?: string;
	}
	export interface XCPostCreateProject extends IRestParam {
	    label: string;
	    shortLabel: string;
	    overwrite?: string;
	    importUsers?: string;
	    branchLabel?: string;
	    branchTag?: string;
	    branchComment?: string;
	    branchBaseProjectLabel?: string;
	}
	export interface XCPostCloneProject extends IRestParam {
	    label: string;
	    shortLabel: string;
	    keepHistory: number;
	    keepContent: number;
	    keepPermissions: number;
	}
	export interface XCPostImportItems extends IRestParam {
	    reason: string;
	}
	export interface XCPostAddCategory extends IRestParam {
	    label: string;
	    shortLabel: string;
	    reason: string;
	}
	export interface XCPostAddField extends IRestParam {
	    label: string;
	    category: string;
	    fieldType: string;
	    fieldParam: string;
	    reason: string;
	}
	export interface XCPostAddTag extends IRestParam {
	    label: string;
	    auditId: number;
	    type: string;
	    comments: string;
	}
	export interface XCPostWebHook extends IRestParam {
	}
	export interface XCPostCopyItemOrFolder extends IRestParam {
	    targetFolder: string;
	    targetProject?: string;
	    copyLabels?: number;
	    map?: string;
	    ignoreLabels?: string;
	    reason: string;
	}
	export interface XCPostAddItem extends IRestParam {
	    title: string;
	    folder: string;
	    IGNORE2?: any;
	    labels?: string;
	    author?: string;
	    reason: string;
	    linksUp: string;
	    linksDown: string;
	    failOnCleanup?: number;
	}
	export interface XCPostSendMail extends IRestParam {
	    to: string[];
	    cc: string[];
	    subject: string;
	    htmlbody: string;
	    textbody: string;
	    system?: number;
	    noreply?: number;
	}
	export interface XCPostCreateServiceDesk extends IRestParam {
	    summary: string;
	    description: string;
	    matrixProject: string;
	    matrixItem: string;
	    browser: string;
	    log: string;
	}
	export interface XCPostAddLink extends IRestParam {
	    reason: string;
	}
	export interface XCPostAddFolder extends IRestParam {
	    parent: string;
	    label: string;
	    reason: string;
	    fxField?: string;
	}
	export interface XCPostAddProjectSetting extends IRestParam {
	    key: string;
	    value: string;
	}
	export interface XCPostAddCustomerSetting extends IRestParam {
	    key: string;
	    value: string;
	}
	export interface XCPostLog extends IRestParam {
	    message: string;
	}
	export interface XCPostAddCustomerFile extends IRestParam {
	}
	export interface XCPostAddFile extends IRestParam {
	    url?: string;
	}
	export interface XCPostConvertExcelFile extends IRestParam {
	}
	export interface XCPostLaunchReport extends IRestParam {
	    itemList?: string;
	    url?: string;
	    resturl?: string;
	    format?: string;
	    isSignedReport: string;
	    includeSignatures: string;
	    newTitle: string;
	    copyFields: string;
	    filter?: string;
	    useOld?: number;
	    atDate?: string;
	}
	export interface XCPostLaunchSignedReport extends IRestParam {
	    url?: string;
	    resturl?: string;
	    format?: string;
	}
	export interface XCPostMoveItems extends IRestParam {
	    items?: string;
	    reason: string;
	}
	export interface XCPostCreateTodo extends IRestParam {
	    fieldId?: number;
	    logins?: string;
	    text: string;
	    todoType?: string;
	    atDate?: string;
	    auto?: number;
	}
	export interface XCPostRestoreItem extends IRestParam {
	    at?: number;
	    reason: string;
	}
	export interface XCPostHook extends IRestParam {
	    hook: string;
	}
	export interface XCPostAddCategorySetting extends IRestParam {
	    key: string;
	    value: string;
	}
	export interface XCPostSignItem extends IRestParam {
	    password: string;
	    acceptComments?: string;
	}
	export interface XCPostPublishItem extends IRestParam {
	    reason: string;
	    trainingFor?: string;
	}
	export interface XCPostExecuteXtc extends IRestParam {
	    IGNORE0?: any;
	}
	export interface XCPostCompareSign extends IRestParam {
	}
	export interface XCPostConvertWord extends IRestParam {
	    fileNo?: number;
	    targetDocumentFolder?: string;
	    useAsField?: number;
	    reason: string;
	}
	export interface XCPostCompareHtml extends IRestParam {
	    arg?: string;
	}
	export interface XCPostJobProgress extends IRestParam {
	    progress: number;
	    status?: string;
	}
	export interface XCPostBranch extends IRestParam {
	    label: string;
	    shortLabel: string;
	    branch?: number;
	    history?: number;
	    tagToCreate?: string;
	    branchInThePastTag?: string;
	    keepPermissions: number;
	    keepContent: number;
	}
	export interface XCPostMerge extends IRestParam {
	    reason: string;
	}
	export interface XCPostHtmlCleanupTest extends IRestParam {
	    categories?: string;
	}
	export interface XCPostHtmlCleanupBlob extends IRestParam {
	}
	export interface XCPutEditItem extends IRestParam {
	    title?: string;
	    IGNORE1?: any;
	    labels?: string;
	    auditAction?: string;
	    newFolder?: string;
	    newPosition?: number;
	    reason: string;
	    filter?: string;
	    linksUp?: string;
	    linksDown?: string;
	    currentVersion?: number;
	    onlyThoseFields?: number;
	    onlyThoseLabels?: number;
	    failOnCleanup?: number;
	}
	export interface XCPutEditField extends IRestParam {
	    field: number;
	    label: string;
	    fieldParam: string;
	    order: number;
	    reason: string;
	}
	export interface XCPutTouchItems extends IRestParam {
	    reason: string;
	    nbLayers?: number;
	}
	export interface XCPutEditCategory1 extends IRestParam {
	    order: number;
	    shortLabel: string;
	    label: string;
	    reason: string;
	}
	export interface XCPutHideProject extends IRestParam {
	    reason: string;
	}
	export interface XCPutUnhideProject extends IRestParam {
	    newShort: string;
	    reason: string;
	}
	export interface XCPutEditSign extends IRestParam {
	    rejectSign: string;
	}
	export interface XCDeleteProject extends IRestParam {
	    confirm: string;
	}
	export interface XCDeleteItem extends IRestParam {
	    confirm: string;
	    reason: string;
	}
	export interface XCDeleteLink extends IRestParam {
	    reason: string;
	}
	export interface XCDeleteCategory extends IRestParam {
	    reason: string;
	}
	export interface XCDeleteField extends IRestParam {
	    field: number;
	    reason: string;
	}
	export interface XCDeleteJob extends IRestParam {
	    reason: string;
	}
	export interface XCDeleteTodo extends IRestParam {
	    hardDelete: string;
	}
	//# sourceMappingURL=RestCalls.d.ts.map

	export type XRGetProject_StartupInfo_ListProjectAndSettings = XRListProjectAndSettings;
	export type XRGetProject_ProjectInfo_ProjectInfo = XRProjectInfo;
	export type XRGetProject_Calendar_CalendarTypeList = XRCalendarType[];
	export type XRGetProject_CategoryList_GetProjectStructAck = XRGetProjectStructAck;
	export type XRGetProject_ProjectSetting_GetProjectSettingAck = XRGetProjectSettingAck;
	export type XRGetProject_ProjectSettingAll_GetSettingAck = XRGetSettingAck;
	export type XRGetProject_getSchema = string;
	export type XRGetProject_getConfigCheck = string;
	export type XRGetProject_Status_ServerStatus = XRServerStatus;
	export type XRGetProject_Tags_TagList = XRTag[];
	export type XRGetProject_Todos_GetTodosAck = XRGetTodosAck;
	export type XRGetProject_TodosAllProjects_GetTodosAck = XRGetTodosAck;
	export type XRGetProject_JobStatus_JobsStatusWithUrl = XRJobsStatusWithUrl;
	export type XRGetProject_getJobFile = string;
	export type XRGetProject_CategoryDetail_CategoryFull = XRCategoryFull;
	export type XRGetProject_FullTree_FancyFolderList = XRFancyFolder[];
	export type XRGetProject_Needle_TrimNeedle = XRTrimNeedle;
	export type XRGetProject_GetNeedleAllProjects_TrimNeedle = XRTrimNeedle;
	export type XRGetProject_NeedleMinimal_StringList = string[];
	export type XRGetProject_GetNeedleMinimalAllProjects_StringList = string[];
	export type XRGetProject_Monitor_GetMonitorAck = XRGetMonitorAck;
	export type XRGetProject_Reports_GetReportsAck = XRGetReportsAck;
	export type XRGetProject_Date_GetDateAck = XRGetDateAck;
	export type XRGetProject_TimeZones_StringList = string[];
	export type XRGetProject_AllFile_GetProjectFileListAck = XRGetProjectFileListAck;
	export type XRGetProject_GetAllFileCustomer_GetProjectFileListAck = XRGetProjectFileListAck;
	export type XRGetProject_AllJob_JobsWithUrl = XRJobsWithUrl;
	export type XRGetProject_getOneCustomerFile = string;
	export type XRGetProject_getOneFile = string;
	export type XRGetProject_ItemDetail_TrimItem = XRTrimItem;
	export type XRGetProject_FolderDetail_TrimFolder = XRTrimFolder;
	export type XRGetProject_ItemList_GetItemListAck = XRGetItemListAck;
	export type XRGetProject_getField = string;
	export type XRGetProject_ProjectAudit_TrimAuditList = XRTrimAuditList;
	export type XRGetProject_ProjectAccess_GetAccessAck = XRGetAccessAck;
	export type XRGetProject_CategorySetting_GetSettingAck = XRGetSettingAck;
	export type XRGetProject_Export_ExportItemsAck = XRExportItemsAck;
	export type XRGetProject_License_LicenseStatus = XRLicenseStatus;
	export type XRGetProject_MergeInfo_MergeInfoList = XRMergeInfo[];
	export type XRGetProject_MergeHistory_MergeHistoryList = XRMergeHistory[];
	export type XRGetProject_LabelHistory_LabelHistoryList = XRLabelHistory[];
	export type XRGetProject_getOpenApi = string;
	export type XRGetProject_QmsFind_StringList = string[];
	export interface XRListProjectAndSettings {
	    currentUser: string;
	    customerAdmin: number;
	    superAdmin: number;
	    dateInfo: XRGetDateAck;
	    customerSettings: XRSettingType[];
	    license: XRMatrixLicense;
	    readWriteUsers: string[];
	    allUsers: XRUserType[];
	    licenseStatus: string;
	    todoCounts: XRTodoCount[];
	    allTodos: XRTodo[];
	    currentUserSettings: XRSettingType[];
	    branches: XRMainAndBranch[];
	    serviceEmail: string;
	    project: XRProjectType[];
	    serverVersion: string;
	    baseUrl: string;
	    restUrl: string;
	}
	export interface XRProjectInfo {
	    userPermission: XRUserPermissionType[];
	    groupPermission: XRGroupPermissionType[];
	    categoryList: XRCategoryExtendedListType;
	    label: string;
	    shortLabel: string;
	    acl: string;
	    aclExplanations: string;
	    settingList: XRSettingType[];
	    categorySettingList: XRCategoryAndSettingListType[];
	    pluginSettingsList: XRPluginSetting[];
	    todos: XRTodo[];
	}
	export interface XRCalendarType {
	    dateString: string;
	    auditIdMin: number;
	    auditIdMax: number;
	    nbChanges: number;
	}
	export interface XRGetProjectStructAck {
	    categoryList: XRCategoryExtendedListType;
	    label: string;
	    shortLabel: string;
	    acl: string;
	    aclExplanations: string;
	}
	export interface XRGetProjectSettingAck {
	    settingList: XRSettingType[];
	    categorySettingList: XRCategoryAndSettingListType[];
	    pluginSettingsList: XRPluginSetting[];
	}
	export interface XRGetSettingAck {
	    settingList: XRSettingType[];
	}
	export interface XRServerStatus {
	    exceptionStatus: XRExceptionStatus;
	    version: string;
	    publicUrl: string;
	}
	export interface XRTag {
	    id: number;
	    auditId: number;
	    auditTime: string;
	    label: string;
	    comments: string;
	    tagType: string;
	    tagCreation: string;
	    userLogin: string;
	    baseProjectId: number;
	    baseProjectName: string;
	    baseProjectTag: string;
	    baseAuditCreation: string;
	    baseAuditId: number;
	}
	export interface XRGetTodosAck {
	    todos: XRTodo[];
	    todoCounts: XRTodoCount[];
	}
	export interface XRJobsStatusWithUrl {
	    progress: number;
	    status: string;
	    visibleName: string;
	    jobFile: XRJobFileWithUrl[];
	}
	export interface XRCategoryFull {
	    project: XRProjectType;
	    categ: XRCategoryType;
	    folder: XRTrimFolder;
	    fieldList: XRRestField[];
	}
	export interface XRFancyFolder {
	    children: (XRFancyFolder | XRFancyLeaf)[];
	    icon: string;
	    id: string;
	    title: string;
	    type: string;
	    isUnselected: number;
	    version: string;
	}
	export interface XRTrimNeedle {
	    startAt: number;
	    maxResults: number;
	    totalResults: number;
	    searchId: string;
	    needles: XRTrimNeedleItem[];
	}
	export interface XRGetMonitorAck {
	    reminderActions: XRMonitorAction[];
	    firstLoginDate: string;
	    lastLoginDate: string;
	}
	export interface XRGetReportsAck {
	    reportList: XRReportType[];
	}
	export interface XRGetDateAck {
	    dateIso8601: string;
	    timeUserFormat: string;
	    dateUserFormat: string;
	    timeCustomerFormat: string;
	    dateCustomerFormat: string;
	    dateformat: string;
	    timeformat: string;
	    timeZone: string;
	    timeZoneDesc: string;
	    customerDateformat: string;
	    customerTimeformat: string;
	    customerTimezone: string;
	    customerTimezoneDesc: string;
	}
	export interface XRGetProjectFileListAck {
	    projectFile: XRProjectFileType[];
	}
	export interface XRJobsWithUrl {
	    runningJobs: number;
	    maxRunningJobs: number;
	    jobs: XRJobWithUrl[];
	}
	export interface XRTrimItem {
	    title: string;
	    itemRef: string;
	    folderRef: string;
	    upLinkList: XRTrimLink[];
	    downLinkList: XRTrimLink[];
	    fieldValList: XRFieldValListType;
	    labels: string[];
	    itemHistoryList: XRItemHistoryListType;
	    maxVersion: number;
	    disabled: number;
	    isFolder: number;
	    availableFormats: string[];
	    itemId: number;
	    modDate: string;
	    modDateUserFormat: string;
	    requireSubTree: XRCategoryAndRoot[];
	    selectSubTree: XRCategoryAndRoot[];
	    isUnselected: number;
	    downloads: XRUserAndTime[];
	    docHasPackage: boolean;
	    cleanupFail: XRCleanupFail;
	    contextTree: XRFancyReducedTree;
	}
	export interface XRTrimFolder {
	    itemRef: string;
	    title: string;
	    partial: number;
	    itemList: XRTrimFolder[];
	    fieldValList: XRFieldValListType;
	    isFolder: number;
	    isUnselected: number;
	    itemHistoryList: XRItemHistoryListType;
	    maxVersion: number;
	    modDate: string;
	    modDateUserFormat: string;
	    itemId: number;
	    disabled: number;
	    contextTree: XRFancyLeaf;
	}
	export interface XRGetItemListAck {
	    docDateCustomerFormat: string;
	    docDate: string;
	    items: XRItemSimpleType[];
	    secondaryItems: XRItemSimpleType[];
	}
	export interface XRTrimAuditList {
	    startAt: number;
	    maxResults: number;
	    totalResults: number;
	    audit: XRTrimAudit[];
	}
	export interface XRGetAccessAck {
	    userPermission: XRUserPermissionType[];
	    groupPermission: XRGroupPermissionType[];
	}
	export interface XRExportItemsAck {
	    jobId: number;
	}
	export interface XRLicenseStatus {
	    modules: string[];
	    maxUsers: number;
	    currentRWUsers: number;
	    licenseUsers: XRLicenseUser[];
	}
	export interface XRMergeInfo {
	    branchBase: XRMergeInfoPoint;
	    branchNow: XRMergeInfoPoint;
	    mainlineBase: XRMergeInfoPoint;
	    mainlineNow: XRMergeInfoPoint;
	    linksAdded: XRMergeItemLink[];
	    linksDifferent: XRMergeItemLink[];
	    linksDeleted: XRMergeItemLink[];
	}
	export interface XRMergeHistory {
	    entries: XRMergeEntry[];
	}
	export interface XRLabelHistory {
	    entries: XRLabelEntry[];
	}
	export interface XRFancyLeaf {
	    id: string;
	    title: string;
	    type: string;
	    isUnselected: number;
	    version: string;
	}
	export interface XRSettingType {
	    value: string;
	    key: string;
	    secret: boolean;
	}
	export interface XRMatrixLicense {
	    licenseVersion: number;
	    customerName: string;
	    customerId: number;
	    customerEcommerceId: number;
	    customerEmail: string;
	    customerPhone: string;
	    maxReadWrite: number;
	    maxReadOnly: number;
	    maxVisitors: number;
	    maxTotalUsers: number;
	    validTo: string;
	    productName: string;
	    options: string[];
	    VERSION: number;
	    MAX_USERS: number;
	}
	export interface XRUserType {
	    id: number;
	    login: string;
	    email: string;
	    firstName: string;
	    lastName: string;
	    signatureImage: string;
	    signaturePassword: string;
	    customerAdmin: number;
	    passwordAgeInDays: number;
	    badLogins: number;
	    badLoginsBefore: number;
	    superAdmin: number;
	    userStatus: string;
	    userSettingsList: XRSettingType[];
	    tokenList: XRTokenType[];
	    groupList: number[];
	}
	export interface XRTodoCount {
	    userId: number;
	    login: string;
	    projectId: number;
	    projectShort: string;
	    nbTodos: number;
	    firstTodos: XRTodo[];
	}
	export interface XRTodo {
	    todoId: number;
	    userId: number;
	    login: string;
	    projectShort: string;
	    itemRef: string;
	    fieldLabel: string;
	    fieldId: number;
	    auto: boolean;
	    originatorUserId: number;
	    originatorLogin: string;
	    action: XRTodoAction;
	    createdAt: string;
	    closedAt: string;
	    createdAtUserFormat: string;
	    closedAtUserFormat: string;
	    future: boolean;
	}
	export interface XRMainAndBranch {
	    mainline: string;
	    branch: string;
	    user: string;
	    branchDateTime: string;
	    branchDateTimeUser: string;
	    withHistory: number;
	    branchUntilTag: string;
	    lastMergeDatetime: string;
	    lastMergeDatetimeUser: string;
	    lastMergeUser: string;
	}
	export interface XRProjectType {
	    id: number;
	    label: string;
	    shortLabel: string;
	    projectLogo: string;
	    qmsProject: boolean;
	    accessType: string;
	}
	export interface XRUserPermissionType {
	    id: number;
	    login: string;
	    email: string;
	    permission: number;
	    firstName: string;
	    lastName: string;
	}
	export interface XRGroupPermissionType {
	    groupName: string;
	    permission: number;
	    groupId: number;
	    membership: XRUserTypeSimple[];
	}
	export interface XRCategoryExtendedListType {
	    categoryExtended: XRCategoryExtendedType[];
	}
	export interface XRCategoryAndSettingListType {
	    settingList: XRSettingType[];
	    categoryId: number;
	    categoryShort: string;
	}
	export interface XRPluginSetting {
	    pluginId: number;
	    pluginLongName: string;
	    pluginShortName: string;
	    settings: XRSettingAndValue[];
	    computedSettings: XRSettingAndValue[];
	    capabilities: XRPluginCapabilities;
	}
	export interface XRExceptionStatus {
	    nbExceptionsStillStart: number;
	    lastHourExceptions: XRExceptionItemIso[];
	}
	export interface XRJobFileWithUrl {
	    restUrl: string;
	    jobFileId: number;
	    visibleName: string;
	    internalPath: string;
	    mimeType: string;
	}
	export interface XRCategoryType {
	    id: number;
	    label: string;
	    shortLabel: string;
	    maxSerial: number;
	}
	export interface XRRestField {
	    id: number;
	    label: string;
	    fieldType: string;
	    fieldParam: string;
	    testParam: string;
	    testExecParam: string;
	}
	export interface XRTrimNeedleItem {
	    itemOrFolderRef: string;
	    title: string;
	    project: string;
	    fieldVal: XRFieldValType[];
	    labels: string;
	    lastModDate: string;
	    creationDate: string;
	    upLinkList: XRTrimLink[];
	    downLinkList: XRTrimLink[];
	}
	export interface XRMonitorAction {
	    action: string;
	    done: boolean;
	}
	export interface XRReportType {
	    id: string;
	    label: string;
	    group: string;
	    description: string;
	    custom: boolean;
	    guiItems: string[];
	    requireSubtreeType: string;
	    requireSubtree: string;
	    selectSubtreeType: string;
	    selectSubtree: string;
	    targets: XRReportTarget[];
	}
	export interface XRProjectFileType {
	    fileId: number;
	    localName: string;
	    fullPath: string;
	    mimeType: string;
	    key: string;
	}
	export interface XRJobWithUrl {
	    getJobUrl: string;
	    jobId: number;
	    progress: number;
	    status: string;
	    jobBirth: string;
	    jobLastWrite: string;
	    project: string;
	}
	export interface XRTrimLink {
	    upLinkList: XRTrimLink[];
	    downLinkList: XRTrimLink[];
	    itemRef: string;
	    title: string;
	    modDate: string;
	    modDateUserFormat: string;
	}
	export interface XRFieldValListType {
	    fieldVal: XRFieldValType[];
	}
	export interface XRItemHistoryListType {
	    itemHistory: XRItemHistoryType[];
	}
	export interface XRCategoryAndRoot {
	    category: string;
	    rootFolder: string;
	}
	export interface XRUserAndTime {
	    userId: number;
	    login: string;
	    firstName: string;
	    lastName: string;
	    email: string;
	    date: string;
	    dateUserFormat: string;
	}
	export interface XRFancyReducedTree {
	    id: string;
	    title: string;
	    children: XRFancyReducedTree[];
	}
	export interface XRCleanupFail {
	    fields: XRCleanupField[];
	    titleCleanedUp: boolean;
	    titleBeforeCleanup: string;
	    titleAfterCleanup: string;
	    itemRef: string;
	}
	export interface XRItemSimpleType {
	    author: string;
	    birth: string;
	    ref: string;
	    title: string;
	    version: number;
	}
	export interface XRTrimAudit {
	    userLogin: string;
	    dateTime: string;
	    dateTimeUserFormat: string;
	    action: string;
	    entity: string;
	    reason: string;
	    projectLabel: string;
	    reportRef: string;
	    reportTitle: string;
	    reportJobId: number;
	    itemBefore: XRTrimNeedleItem;
	    itemAfter: XRTrimNeedleItem;
	    itemUp: XRTrimNeedleItem;
	    itemDown: XRTrimNeedleItem;
	    auditId: number;
	    techAudit: XRTechAuditType[];
	    tags: XRTag[];
	    itemsDeletedByMerge: XRItemSimpleType[];
	}
	export interface XRLicenseUser {
	    userId: number;
	    login: string;
	    name: string;
	    email: string;
	    level: string;
	}
	export interface XRMergeInfoPoint {
	    project: string;
	    date: string;
	    items: XRMergeItem[];
	}
	export interface XRMergeItemLink {
	    upItemRef: string;
	    downItemRef: string;
	}
	export interface XRMergeEntry {
	    id: number;
	    user: string;
	    mainlineProject: string;
	    branchProject: string;
	    date: string;
	    dateUser: string;
	    comments: string;
	    mainlineProjectId: number;
	    branchProjectId: number;
	    details: XRMergeAction[];
	}
	export interface XRLabelEntry {
	    itemRef: string;
	    labels: XRLabelChange[];
	}
	export interface XRTokenType {
	    userId: number;
	    tokenId: number;
	    purpose: string;
	    reason: string;
	    value: string;
	    validTo: string;
	    validToUserFormat: string;
	}
	export interface XRTodoAction {
	    text: string;
	    todoType: string;
	}
	export interface XRUserTypeSimple {
	    userId: number;
	    login: string;
	    email: string;
	    firstName: string;
	    lastName: string;
	}
	export interface XRCategoryExtendedType {
	    category: XRCategoryType;
	    fieldList: XRFieldListType;
	    enable: string[];
	}
	export interface XRSettingAndValue {
	    setting: string;
	    value: string;
	    encrypted: boolean;
	}
	export interface XRPluginCapabilities {
	    canCreate: boolean;
	    canFind: boolean;
	    needSetup: boolean;
	    handleAsLink: boolean;
	    one2OneMapping: boolean;
	    hasMeta: boolean;
	    canCreateBacklinks: boolean;
	    messaging: boolean;
	    restToken: boolean;
	    impersonate: boolean;
	    extendedSettings: boolean;
	    hideInProjectSettings: boolean;
	}
	export interface XRExceptionItemIso {
	    date: string;
	    text: string;
	}
	export interface XRFieldValType {
	    id: number;
	    value: string;
	    hide: number;
	    restricted: number;
	    fieldName: string;
	    fieldType: string;
	}
	export interface XRReportTarget {
	    targetId: string;
	    targetText: string;
	}
	export interface XRItemHistoryType {
	    version: number;
	    createdAt: string;
	    createdAtUserFormat: string;
	    deletedAt: string;
	    deletedAtUserFormat: string;
	    title: string;
	    createdByUserId: number;
	    createdByUserLogin: string;
	    reason: string;
	    auditId: number;
	    auditAction: string;
	}
	export interface XRCleanupField {
	    fieldId: number;
	    fieldLabel: string;
	    fieldType: string;
	    beforeCleanup: string;
	    afterCleanup: string;
	}
	export interface XRTechAuditType {
	    id: number;
	    operation: string;
	    table: string;
	    index: number;
	    ref: string;
	}
	export interface XRTag {
	    id: number;
	    auditId: number;
	    auditTime: string;
	    label: string;
	    comments: string;
	    tagType: string;
	    tagCreation: string;
	    userLogin: string;
	    baseProjectId: number;
	    baseProjectName: string;
	    baseProjectTag: string;
	    baseAuditCreation: string;
	    baseAuditId: number;
	}
	export interface XRMergeItem {
	    itemRef: string;
	    version: number;
	    title: string;
	    parentFolder: string;
	    nbMoveSinceV1: number;
	    itemId: number;
	}
	export interface XRMergeAction {
	    action: string;
	    branchItem: string;
	    branchItem2: string;
	    mainlineItem: string;
	    mainlineItem2: string;
	    mainlineFolder: string;
	    request: string;
	    error: string;
	}
	export interface XRLabelChange {
	    label: string;
	    set: XRLabelChangeDetail[];
	    reset: XRLabelChangeDetail[];
	}
	export interface XRFieldListType {
	    field: XRFieldType[];
	}
	export interface XRLabelChangeDetail {
	    version: number;
	    dateIso: string;
	    dateUser: string;
	}
	export interface XRFieldType {
	    id: number;
	    order: number;
	    fieldType: string;
	    parameter: string;
	    label: string;
	}
	export type XRPostProject_postCreateProject = string;
	export type XRPostProject_postCloneProject = string;
	export type XRPostProject_postImportItems = string;
	export type XRPostProject_postAddCategory = string;
	export type XRPostProject_postAddField = string;
	export type XRPostProject_postAddTag = string;
	export type XRPostProject_postWebHook = string;
	export type XRPostProject_CopyItemOrFolder_CopyItemAck = XRCopyItemAck;
	export type XRPostProject_AddItem_AddItemAck = XRAddItemAck;
	export type XRPostProject_postSendMail = string;
	export type XRPostProject_postCreateServiceDesk = string;
	export type XRPostProject_postAddLink = string;
	export type XRPostProject_AddFolder_AddItemAck = XRAddItemAck;
	export type XRPostProject_postAddProjectSetting = string;
	export type XRPostProject_postAddCustomerSetting = string;
	export type XRPostProject_postLog = string;
	export type XRPostProject_AddCustomerFile_AddFileAck = XRAddFileAck;
	export type XRPostProject_AddFile_AddFileAck = XRAddFileAck;
	export type XRPostProject_postConvertExcelFile = string;
	export type XRPostProject_LaunchReport_CreateReportJobAck = XRCreateReportJobAck;
	export type XRPostProject_postLaunchSignedReport = string;
	export type XRPostProject_postMoveItems = string;
	export type XRPostProject_postCreateTodo = string;
	export type XRPostProject_RestoreItem_UndeleteAnswer = XRUndeleteAnswer;
	export type XRPostProject_postHook = string;
	export type XRPostProject_postAddCategorySetting = string;
	export type XRPostProject_SignItem_SignItemAck = XRSignItemAck;
	export type XRPostProject_postPublishItem = string;
	export type XRPostProject_ExecuteXtc_FolderAnswer = XRFolderAnswer;
	export type XRPostProject_postCompareSign = string;
	export type XRPostProject_postConvertWord = string;
	export type XRPostProject_CompareHtml_HtmlCompareResult = XRHtmlCompareResult;
	export type XRPostProject_postJobProgress = string;
	export type XRPostProject_postBranch = string;
	export type XRPostProject_postMerge = string;
	export type XRPostProject_HtmlCleanupTest_HtmlTestCleanupList = XRHtmlTestCleanup[];
	export type XRPostProject_HtmlCleanupBlob_GetHtmlBlobList = XRGetHtmlBlob[];
	export interface XRCopyItemAck {
	    itemsAndFoldersCreated: string[];
	}
	export interface XRAddItemAck {
	    itemId: number;
	    serial: number;
	    cleanupFail: XRCleanupFail;
	}
	export interface XRAddFileAck {
	    fileId: number;
	    fileFullPath: string;
	    key: string;
	}
	export interface XRCreateReportJobAck {
	    jobId: number;
	}
	export interface XRUndeleteAnswer {
	    newParent: string;
	    newOrder: number;
	}
	export interface XRSignItemAck {
	    result: string;
	    ok: boolean;
	}
	export interface XRFolderAnswer {
	    folder: string;
	    xtcInError: XRExecuteTestErrorDetails[];
	}
	export interface XRHtmlCompareResult {
	    html: string[];
	    htmlMultiple: string[][];
	    spanElement: string;
	    addClass: string;
	    removeClass: string;
	}
	export interface XRHtmlTestCleanup {
	    cleanups: XRCleanupFail[];
	}
	export interface XRGetHtmlBlob {
	    auth: XRAuthType;
	    projectId: number;
	    inputHtml: string;
	}
	export interface XRExecuteTestErrorDetails {
	    key: string;
	    errors: string[];
	}
	export interface XRAuthType {
	    reason: string;
	    login: string;
	    password: string;
	    clientIp: string;
	    internalQuery: boolean;
	    csrfOk: boolean;
	    basicAuth: boolean;
	    oAuth: boolean;
	    token: string;
	    verifiedAuth: XRVerifiedAuth;
	}
	export interface XRVerifiedAuth {
	    VERIFIED_AUTH_SESSION_ATTRIBUTE: string;
	    AUTH_SOURCE_SESSION: string;
	    AUTH_SOURCE_SINGLE_SIGNON: string;
	    login: string;
	    userId: number;
	    authSource: string;
	    superAdmin: boolean;
	    customerAdmin: boolean;
	    projectMap: XRInteger;
	}
	export interface XRInteger {
	}
	export type XRPutProject_EditItem_TrimItem = XRTrimItem;
	export type XRPutProject_putEditField = string;
	export type XRPutProject_putTouchItems = string;
	export type XRPutProject_putEditCategory1 = string;
	export type XRPutProject_putHideProject = string;
	export type XRPutProject_putUnhideProject = string;
	export type XRPutProject_putEditSign = string;
	export type XRDeleteProject_deleteProject = string;
	export type XRDeleteProject_deleteItem = string;
	export type XRDeleteProject_deleteLink = string;
	export type XRDeleteProject_deleteCategory = string;
	export type XRDeleteProject_deleteField = string;
	export type XRDeleteProject_deleteJob = string;
	export type XRDeleteProject_deleteTodo = string;
	export type XRGetUser_AllUsers_GetUserListAck = XRGetUserListAck;
	export type XRGetUser_User_UserType = XRUserType;
	export type XRGetUser_UserAudit_TrimAuditList = XRTrimAuditList;
	export type XRGetUser_UserProjects_UserDetails = XRUserDetails;
	export type XRGetUser_checkUserPassword_CheckPasswordAck = XRCheckPasswordAck;
	export interface XRGetUserListAck {
	    user: XRUserType[];
	    needDoublePassword: number;
	    passwordExpirationDays: number;
	    passwordStrength: number;
	    maxUsers: number;
	}
	export interface XRUserDetails {
	    login: string;
	    nbReadWriteProjectsNow: number;
	    projects: XRProjectAndAccess[];
	    infoUpdates: XRUserInfo[];
	    admin: number;
	    superAdmin: number;
	    userStatus: string;
	}
	export interface XRCheckPasswordAck {
	    actualLogin: string;
	    userId: number;
	    userDetails: XRUserType;
	    maxAge: number;
	    singleSignOn: boolean;
	    superAdmin: boolean;
	    customerAdmin: boolean;
	}
	export interface XRProjectAndAccess {
	    projectId: number;
	    projectShort: string;
	    projectLabel: string;
	    accesses: XRAccess[];
	}
	export interface XRUserInfo {
	    startDate8601: string;
	    endDate8601: string;
	    hasKey: boolean;
	    userId: number;
	    login: string;
	    email: string;
	    firstName: string;
	    lastName: string;
	}
	export interface XRAccess {
	    startDate8601: string;
	    endDate8601: string;
	    readWrite: number;
	    visitorOnly: boolean;
	}
	export type XRPostUser_postLogin = string;
	export type XRPostUser_postLogout = string;
	export type XRPostUser_postAddUser = string;
	export type XRPostUser_postAddUserProject = string;
	export type XRPostUser_postAddUserSetting = string;
	export type XRPostUser_postAddUserToken = string;
	export type XRPostUser_postResetPassword = string;
	export type XRPostUser_postCheckUserPassword = string;
	export type XRPutUser_putUser = string;
	export type XRPutUser_putUserProject = string;
	export type XRPutUser_putUserStatus = string;
	export type XRPutUser_putUserRename = string;
	export type XRDeleteUser_deleteUser = string;
	export type XRDeleteUser_deleteUserToken = string;
	export type XRGetGroup_AllGroups_GetGroupListAck = XRGetGroupListAck;
	export type XRGetGroup_Group_GroupType = XRGroupType;
	export interface XRGetGroupListAck {
	    groups: XRGroupType[];
	}
	export interface XRGroupType {
	    groupName: string;
	    membership: XRUserType[];
	    permissions: XRProjectPermissionType[];
	    groupId: number;
	}
	export interface XRProjectPermissionType {
	    project: XRProjectType;
	    access: XRAccess;
	}
	export type XRPostGroup_postAddGroup = string;
	export type XRPostGroup_postAddGroupToProject = string;
	export type XRPutGroup_putUserInGroup = string;
	export type XRPutGroup_putAllUserInGroup = string;
	export type XRPutGroup_putGroupRename = string;
	export type XRDeleteGroup_deleteGroup = string;
	export type XRDeleteGroup_deleteUserFromGroup = string;
	//# sourceMappingURL=RestResult.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IDeletedProjects {
	    deleted: string[];
	}
	interface IWorkflowConfig {
	    enabled?: boolean;
	    defaultProjectId?: string;
	    defaultTypeId?: string;
	    projectsAndTypes?: IWorkflowConfigProjectsAndTypes[];
	    one2one?: IWorkflowConfigOne2One;
	    states?: IWorkflowConfigStates[];
	    pluginId: number;
	}
	interface IWorkflowConfigOne2One {
	    projectId: string;
	    typeId: string;
	}
	interface IWorkflowConfigProjectsAndTypes {
	    key: string;
	    id: string;
	    issueTypes: IWorkflowConfigIssueType[];
	    name: string;
	}
	interface IWorkflowConfigIssueType {
	    id: string;
	    name: string;
	    icon?: string;
	    quickIssue?: boolean;
	}
	interface IWorkflowConfigStates {
	    projectId: string;
	    typeId: string;
	    states: IWorkflowConfigStateDetails[];
	}
	interface IWorkflowConfigStateDetails {
	    name: string;
	    color: string;
	    background: string;
	    done: boolean | string;
	}
	interface IWorkflowConfigJira extends IWorkflowConfig {
	    hideCreateJiraSimpleIssue?: boolean;
	    hideCreateJiraNativeIssue?: boolean;
	    requireCommitTicket?: boolean;
	    addJIRAComment?: boolean;
	}
	interface IWorkflowConfigZoho extends IWorkflowConfig {
	    zohoBaseUrl?: string;
	}
	interface IWorkflowConfigIssueTypesZoho extends IWorkflowConfigIssueType {
	    prefix: string;
	    details?: string;
	}
	interface ITraceConfig {
	    rules: ITraceConfigDetails[];
	}
	interface ITraceConfigDetails {
	    category: string;
	    creates_end: string | boolean;
	    end_point?: string;
	    reporting: string[];
	    up_rules: ITraceConfigRule[];
	    down_rules: ITraceConfigRule[];
	}
	interface ITraceConfigRule {
	    message: string;
	    name: string;
	    rule: TTraceRule;
	    any_of: string[];
	}
	type TTraceRule = "can_have" | "must_have";
	enum EnumItemPublish {
	    IfNotInGroup = 0,
	    Always = 1,
	    Never = 2
	}
	interface IQMSConfig {
	    /** there's only one publication in the array supported */
	    publications: IPublication[];
	    rolesTargetProjects?: string[];
	    affectedByField?: string;
	    responsibleForField?: string;
	    training?: ITraining;
	    /** Experimental: comma separated list of labels to show in published site -> if they are set */
	    showLabels?: string;
	    /** obsolete */
	    legacyRoles: boolean;
	}
	interface ITraining {
	    messages?: ITrainingMessages;
	}
	interface ITrainingMessages {
	    trainingSub?: string;
	    trainingText?: string;
	    overdueSub?: string;
	    overdueText?: string;
	}
	interface IPublication {
	    /** information for each publishable category */
	    rules: IPublicationCategory[];
	    /** needs to be PUB right now */
	    toCategory: string;
	    /** needs to be pub right now */
	    target: string;
	    /** comma separated list of users who can publish */
	    publisher: string;
	    /** beta: userMode: default 0 - select the logged in user, 1 no user pre selected, 2: hide all other users , 3: hide all other users (Strict mode) */
	    userMode?: number;
	    /** obsolete */
	    keepFlatList: boolean;
	}
	interface IPublicationCategory {
	    /** the category for which the rule applies  */
	    category: string;
	    /** a list of labels which must be set to be able to publish (approved labels)*/
	    readyLabels: string[];
	    /** how individual items can be published:  0 - only if they are not in a group, 1 - independently of groups, 2 - only as part of a group*/
	    itemRules: EnumItemPublish;
	    /** name of the group, displayed in the UI as heading in the navigation of the live qms */
	    groupName?: string;
	    /** identification of labels which define the group (groupType setting in labels)  */
	    groupLabelType?: string;
	    /** if a PROC should only be published with its WI,s the group down would be WI*/
	    groupDown?: string[];
	}
	interface IPublicationCategoryGroup {
	    category: string;
	    groupName: string;
	    groupLabelType: string;
	}
	const qmsDefaultConfig: IQMSConfig;
	interface IPublishLegacy {
	    publisher: string;
	}
	interface ILabelsConfig {
	    /** basic label definitions */
	    labels: ILabel[];
	    /** grouping of labels to or, xor or review groups */
	    groups: ILabelGroup[];
	    /** array of the design review labels */
	    design_reviews?: IDesignReview[];
	    /** allows to change the background color of the top bar if a filter is selected */
	    filterBackgroundColor?: string;
	    /** if set to true, the filters are shown in a drop down menu (each group needs to be added as well)*/
	    useFilterMenu?: boolean;
	    /** beta: when looking at an item, it shows the labels underneath the item if set to true - this allows for more items.. */
	    useLabelBar?: boolean;
	    /** invert groups in items (this will make groups show in the wrong order... as it was in 2.2 and before) */
	    invertGroups?: boolean;
	}
	interface ILabelStyle {
	    label: {
	        on: {
	            foreground: string;
	            background: string;
	            icon?: string;
	            displayName: string;
	            tooltip?: string;
	        };
	        off: {
	            foreground: string;
	            background: string;
	            icon?: string;
	            displayName: string;
	            tooltip?: string;
	        };
	    };
	    filter: {
	        on: {
	            foreground: string;
	            background: string;
	            icon?: string;
	            displayName: string;
	            tooltip?: string;
	        };
	        off: {
	            foreground: string;
	            background: string;
	            icon?: string;
	            displayName: string;
	            tooltip?: string;
	        };
	    };
	}
	interface ILabel {
	    label: string;
	    categories: string[];
	    editors?: string[];
	    reportName: string;
	    reportHide?: string;
	    default?: boolean | string;
	    defaultAsk?: boolean;
	    style: ILabelStyle;
	    isSelected?: boolean;
	    isNegative?: boolean;
	    askForComment?: boolean;
	    displayName?: string;
	    toolTipFilterOn?: string;
	    color?: string;
	    template?: ILabelTemplate;
	    dontCopy?: boolean;
	}
	interface ILabelInstance extends ILabel {
	    btn: JQuery;
	}
	interface ILabelTemplate {
	    id: number;
	    name: string;
	    key: string;
	}
	interface ILabelGroup {
	    selection: string;
	    labels: string[];
	    filterMenu?: IFilterMenu;
	    default?: string;
	    defaultAsk?: boolean;
	    noColor?: string;
	    noName?: string;
	    noIcon?: string;
	    reset?: boolean;
	    foreground?: string;
	    background?: string;
	    askForComment?: boolean;
	    showComments?: boolean;
	    tooltip?: string;
	    reviewers?: string[];
	    groupType?: string;
	    labelDef?: ILabel[];
	    filterSelection?: string;
	    virtualGroup?: boolean;
	}
	interface IFilterMenu {
	    displayName: string;
	    on?: {
	        foreground: string;
	        background: string;
	        icon?: string;
	        displayName: string;
	        tooltip?: string;
	    };
	    off?: {
	        foreground: string;
	        background: string;
	        icon?: string;
	        displayName: string;
	        tooltip?: string;
	    };
	}
	interface IDesignReview {
	    /** id of label (no spaces, special characters) */
	    label: string;
	    /** define who can approve the review. Empty array -> everybody.  */
	    reviewers?: string[];
	    /** beta: allow to specify the name of a field from which to take possible approvers. If set it has precedence over reviewers */
	    reviewerField?: string;
	    /** set to true if labels should be reset if item is changed */
	    reset: boolean;
	    /** title of review  */
	    reviewName: string;
	    /** sub title */
	    reviewHelp: string;
	    /** list of questions, checkboxes, or a signature box */
	    reviewDetails: {
	        name: string;
	        help?: string;
	        type?: string;
	    }[];
	    /**  can be set to rename comment field to something else than "Design Review Comment" */
	    commentHeading?: string;
	    /** can be used to set a group type (used internally e.g. to indicate a group is a design review for a Process) */
	    groupType?: string;
	    /** can be used to put the reviews' filter into the filter menu if enabled */
	    filterMenu?: IFilterMenu;
	    /** beta: allows to name a table field. If this exists, the revision need to increase when setting the label */
	    revisionTableName?: string;
	}
	interface IMailConfig {
	    canned?: IMailConfigCanned;
	    defaultCC?: string[];
	}
	interface IMailConfigCanned {
	    /**  replacement for please sign message (in SIGN page)*/
	    please_sign?: string;
	    /** replacement for look at item message (in tool menu)*/
	    look_at?: string;
	    /** replacement for training message (in SIGN page)*/
	    training?: string;
	    /** replacement for document released message (in SIGN page)*/
	    release_note?: string;
	    /** Generic replacement */
	    [key: string]: string | undefined;
	}
	interface IMailConfigCustom {
	    name: string;
	    categories: string[];
	    to: string[];
	    subject: string;
	    message: string;
	}
	interface ISearchConfig {
	    searches: ISearchConfigSearch[];
	    init?: IInitialSearches[];
	}
	interface ISearchConfigSearch {
	    name: string;
	    expr: string;
	}
	interface IInitialSearches {
	    expr: string;
	    style: string;
	    computeFolder: number;
	}
	interface ILabelLockConfig {
	    locks: ILabelLockConfigLocks[];
	}
	interface ILabelLockConfigLocks {
	    label: string;
	    lockKeeper: string[];
	}
	interface IRiskConfig {
	    factors?: IRiskConfigFactor[];
	    method?: IRiskConfigMethod;
	    maxGreen?: number;
	    maxYellow?: number;
	    charts?: IRiskConfigZone[];
	    rpns?: IRiskConfigRPN[];
	    riskCategory?: string;
	    riskCategories?: string[];
	    mitigationTypes?: IRiskConfigMitgationType[];
	    mitigationTable?: IRiskConfigMitgationTable;
	    mitigationColDef?: IColDef;
	    reductions?: IRiskConfigReduction[];
	    postReduction?: IRiskPostReduction;
	    rbm?: IRiskConfigRT;
	    ram?: IRiskConfigRT;
	    controls?: string;
	    hazard_category?: string;
	}
	type IRiskConfigMethod = "+" | "*" | "lookup";
	interface IRiskConfigRT {
	    short: string;
	    long: string;
	    report: string;
	    hidden?: boolean;
	    colDef?: IColDef;
	}
	interface IRiskConfigMitgationType {
	    type: string;
	    name: string;
	}
	interface IRiskConfigFactor {
	    type: string;
	    label: string;
	    weights: IRiskConfigFactorWeight[];
	    hideTextInput?: boolean;
	    readonly?: boolean;
	    inputType?: IRiskConfigFactorInputType;
	    options?: IRiskConfigFactorOption[];
	    spancols?: boolean;
	    colDef?: IColDef;
	}
	interface IColDef {
	    width?: string;
	    minWidth?: string;
	    maxWidth?: string;
	    rowSpan?: boolean;
	}
	interface IRiskConfigMitgationTable {
	    columns: IRiskConfigTablesColumn[];
	}
	interface IRiskConfigTablesColumn {
	    name: string;
	    field: string;
	    editor: RiskTableCellEditor;
	    options?: any;
	}
	type RiskTableCellEditor = "control" | "reduction";
	type IRiskConfigFactorInputType = "text" | "select" | "textarea" | "richtext";
	interface IRiskConfigFactorOption {
	    value: string;
	    label: string;
	    changes: IRiskConfigSelectChanges[];
	}
	interface IRiskConfigSelectChanges {
	    changesFactor?: string;
	    changesWeight?: string;
	    value: number | string;
	}
	interface IRiskConfigFactorWeight {
	    type: string;
	    help: boolean;
	    label: string;
	    readonly?: boolean;
	    hidden?: boolean;
	    values: IRiskConfigFactorWeightValue[];
	    colDef?: IColDef;
	}
	interface IRiskConfigFactorWeightValue {
	    shortname: string;
	    help: string;
	    factor: number;
	}
	interface IRiskConfigReduction {
	    name: string;
	    options: IRiskConfigReductionOptions[];
	}
	interface IRiskConfigReductionOptions {
	    shortname: string;
	    by: number;
	    changes: string;
	}
	interface IRiskConfigZone {
	    zone?: string;
	    foreground?: string;
	    background?: string;
	    textColor?: string;
	    label?: string;
	}
	interface IRiskConfigRPN {
	    zone: string;
	    text: string;
	    [key: string]: string | number;
	}
	interface IRiskPostReduction {
	    weights: IRiskConfigFactorWeight[];
	    help?: string;
	}
	interface ICascadingSelect {
	    startGroupId: string;
	    groups: ICascadingSelectGroup[];
	}
	interface ICascadingSelectGroup {
	    groupId: string;
	    type: "text" | "number" | "select";
	    spec: ICascadingSelectText | ICascadingSelectNumber | ICascadingSelectSelect[];
	}
	interface ICascadingSelectNumber {
	    counter: string;
	    format: string;
	    nextGroupId: string;
	}
	interface ICascadingSelectSelect {
	    text: string;
	    help?: string;
	    nextGroupId: string;
	}
	interface ICascadingSelectText {
	    text: string;
	    nextGroupId: string;
	}
	interface IDHFConfig {
	    /** if set to true the created PDFs won't be locked */
	    doNotLockPDF?: boolean;
	    /** default formats for different report types */
	    defaultFormats?: IDHFConfigDefaultFormats;
	    /** table configuration for audit trail table */
	    audittrail?: IDHFConfigTable;
	    /** table configuration for signature table*/
	    signatures?: IDHFConfigTable;
	    /** table configuration for responsibilities table */
	    responsibilities?: IDHFConfigTable;
	    /** list with predefined document sections when creating new DOC items */
	    controlledDocs?: IDHFConfigStandardDocs;
	    /** can be used to define custom table columns (e.g. dropdowns) */
	    customColumns?: IDHFConfigCustomColumn[];
	    /** allows to specify an alternative for "Ready to Sign / Release" button*/
	    archiveButtonName?: string;
	    /** if set to true a warning will be shown if there's a missing signature */
	    warnMissingSign?: boolean;
	    /** possibility to overwrite options in signature meaning column */
	    signatureMeanings?: IStringMap;
	    /**  beta: if true a user can reject instead of signing. the reject comment will be stored and showed, other cannot sign anymore */
	    canReject?: boolean;
	    /**  beta:  if canReject is true and this is true the user can reject without supplying a password */
	    rejectWithoutPass?: boolean;
	    /** beta: if canReject is true and this is true the user needs to supply special comment to reject */
	    rejectNeedsComment?: boolean;
	    /** beta: text shown in signature box if someone needs to sign something */
	    signatureHint?: string;
	    /** beta: list of users who can change name of person who needs to sign */
	    proxyRights?: string[];
	    /** beta: a list of options to what user is signing for ["i release", "i confirm correct","I don't know"], */
	    signedMeaning?: string[];
	    /** beta: removes not needed notifications and adds new ones when changing signatures proxies */
	    fixNotifications?: boolean;
	    /** beta: 0 leave original sign info. 1 replace name and title when changing signature proxies */
	    proxySignTableUpdate?: number;
	    /** beta: set to true show a column with sign meaning in SIGN */
	    showOriginalSignMeaning?: boolean;
	    /** obsolete */
	    hideFileFormats?: IDHFConfigHideFormat[];
	    /** obsolete */
	    customTables?: IDHFConfigCustomTable[];
	    /** obsolete  */
	    customReports?: IDHFConfigCustomReports;
	    /**  obsolete */
	    categories?: IDHFCategories;
	    /**  obsolete */
	    captions?: ICaptions;
	    /**  obsolete */
	    renderInTree?: string[];
	    /** obsolete */
	    toolFolderName?: string;
	    /** obsolete */
	    functionDefaults?: IPrintFunctionParamsOverwrites;
	}
	interface ICaptions {
	    figure?: ICaption;
	    table?: ICaption;
	}
	interface ICaption {
	    preNo: string;
	    postNo: string;
	}
	interface IDHFCategories {
	    documentTypes: string[];
	    documentForms: string[];
	    documentSigned: string[];
	    documentTemplates: string[];
	    signAs: string;
	}
	interface IDHFConfigCustomReports {
	    group: string;
	}
	interface IDHFConfigDefaultFormats {
	    DOC: IDHFConfigDefaultFormatsOption;
	    SIGN: IDHFConfigDefaultFormatsOption;
	    REPORT: IDHFConfigDefaultFormatsOption;
	    [map: string]: IDHFConfigDefaultFormatsOption;
	}
	type IDHFConfigDefaultFormatsOption = "docx" | "pdf" | "html";
	interface IDHFConfigHideFormat {
	    category: string;
	    format: IDHFConfigDefaultFormatsOption;
	}
	interface IDHFConfigCustomColumn {
	    type: string;
	    options: IDropdownOption[] | any;
	    name: string;
	    editor?: string;
	}
	interface IDHFConfigTable {
	    columns: IDHFConfigTableColumn[];
	}
	interface IDHFConfigTableColumn {
	    name: string;
	    field: string;
	    columnType: IDHFConfigTableColumnType;
	    pos: number;
	    editor?: TableCellEditor;
	    options?: IDropdownOption[];
	}
	type IDHFConfigTableColumnType = "type0" | "type1" | "type2" | "type3" | "type4" | "type5" | "type6" | "type7" | "type8" | "type9" | "type10" | "type11" | "type12" | "type13" | "type14";
	interface IDHFConfigCustomTable {
	    name: string;
	    id: string;
	}
	interface IDHFConfigStandardDocs {
	    [key: string]: IDHFConfigStandardDocsDef;
	}
	interface IDHFConfigStandardDocsDef {
	    fields: IDHFConfigStandardDocsSection[];
	}
	interface IDHFConfigStandardDocsSection {
	    [key: string]: string;
	}
	interface IContextPageConfig {
	    categoryHelp?: IContextPageConfigHelp;
	    itemHelp?: IContextPageConfigHelp;
	    tabs?: IContextPageConfigTab[];
	}
	interface IContextPageConfigHelp {
	    [key: string]: string;
	}
	interface IContextPageConfigTab {
	    title: string;
	    type: ContextPageConfigTabOption;
	    tabId?: string;
	    hipchat?: boolean;
	    baseURL?: string;
	}
	type ContextPageConfigTabOption = "help" | "support" | "faq" | "references" | "smartlinks" | "iframe" | "iframeget" | "upreferences" | "downreferences" | "foldercontent" | "trainings";
	interface ITestConfig {
	    xtcType: string;
	    cloneSources: string[];
	    presetFields: ITestConfigPresetField[];
	    render: ITestConfigTables;
	    defaultTestResultResult: string;
	    automatic: ITestRuleAuto[];
	    manual: ITestRuleManual[];
	    perStep: ITestRuleStep[];
	    reExecute?: string;
	    autoFillTester?: string;
	}
	interface ITestConfigPresetField {
	    field: string;
	    value: string;
	}
	interface ITestConfigTables {
	    [key: string]: ITestConfigTablesColumns;
	}
	interface ITestConfigTablesColumns {
	    columns: ITestConfigTablesColumn[];
	}
	interface ITestConfigTablesColumn {
	    name: string;
	    field: string;
	    editor: TableCellEditor;
	    options?: IDropdownOption[] | any;
	}
	type TableCellEditor = "text" | "none" | "textline" | "design" | "uprules" | "downrules" | "rules" | "result" | "user" | "versionletter" | "date" | "select";
	interface ITestRule {
	    human: string;
	    code: string;
	    render: TestResultType;
	}
	interface ITestRuleAuto extends ITestRule {
	    rule: TestResultRule;
	    param: string;
	}
	interface ITestRuleManual extends ITestRule {
	    command: string;
	}
	interface ITestRuleStep extends ITestRuleManual {
	    key: string;
	    image: string;
	}
	type TestResultType = "ok" | "error" | "warning";
	type TestResultRule = "all" | "one" | "";
	interface ICategorySetting {
	}
	interface ICategorySettingTitle extends ICategorySetting {
	    create?: string;
	    placeholder?: string;
	}
	interface ICategorySettingTextIcon extends ICategorySetting {
	    color?: string;
	    text?: string;
	}
	interface ICategorySettingTabs extends ICategorySetting {
	    tabs: ICategorySettingTab[];
	}
	interface ICategorySettingTab {
	    id?: string;
	    name: string;
	    fields: string[];
	}
	interface ICategoryGroups {
	    groups: ICategoryGroup[];
	}
	interface ICategoryGroup {
	    categories: string[];
	    text: string;
	    name: string;
	    color: string;
	    position?: number;
	    helpPage?: string;
	}
	const ACL_SETTING: string;
	interface IACL {
	    rules: IACLRules[];
	}
	interface IACLRules {
	    name: string;
	    groups: string[];
	    acl: IACLGroupsAcl[];
	}
	interface IACLGroupsAcl {
	    category: string;
	    fields?: string[];
	    rights: string[];
	}
	interface IFieldParameter {
	    [key: string]: any;
	    /** if set to true, the control will not be editable by the user */
	    readonly?: boolean;
	    /** if set to true the field will not be shown in reports */
	    hide_report?: boolean;
	    /** if set to true the field will not be shown in documents */
	    hide_document?: boolean;
	    /** if set to true the field will not be shown in published (QMS) */
	    hide_publication?: boolean;
	    hide_UI?: boolean;
	    /** set to 1 to not clean the field values */
	    unsafeHtml?: number;
	    /** this can be set to point to a an external website which is openend when user clicks on a link, e.g.
	     * "externalHelp":"matrix.com". Note this must be a website which is accesible through https://url */
	    externalHelp?: string;
	    /** this can be set to show help as a tooltip, e.g. "popupHelp":"enter a short description" */
	    popupHelp?: string;
	    /** this can be set to render a help line underneath the "heading":"enter a long description" */
	    inlineHelp?: string;
	    /** for folder category */
	    visibleOption?: string;
	    /** for SIGN category
	     * if set to true, the field is not visible (only makes sense with the above flag)
	     */
	    invisible?: boolean;
	    /** this allows to copy fields from underlying DOC into the SIGN item.
	     * Note: Fields are copied only if this is set to true and the labels (names) of the field is the same in the
	     * DOC and the SIGN */
	    copyfromdoc?: boolean;
	    /** legacy options */
	    adminVisibility?: boolean;
	    /** legacy options */
	    requiresContent?: boolean;
	}
	interface IDropDownConfig {
	    fieldMeaning?: string;
	    placeholder?: string;
	    options: IDropdownOption[];
	    groups?: IDropdownGroup[];
	}
	interface IDropdownGroup {
	    value: string;
	    label: string;
	}
	interface IDropdownOption {
	    id: string;
	    label: string;
	    class?: string;
	    disabled?: boolean;
	    strikethrough?: boolean;
	}
	interface IAutoFillSetting {
	    allowAutoFill: boolean;
	    allowLoginAutoFill: boolean;
	    allowDocSignAutoFill: boolean;
	    allowLabelSignAutoFill: boolean;
	    allowGateAutoFill: boolean;
	    allowPublishAutoFill: boolean;
	}
	interface ISmartTextConfig {
	    replacements?: ISmartTextConfigReplacement[];
	}
	interface ISmartTextConfigReplacement {
	    /** id of the macro: needs to be simple combination of letters and digits */
	    what: string;
	    /** the text to display */
	    with: string;
	    /** value from 1 to 4: 1=plain text 2=rich text 3=term 4=abbreviation */
	    tagType: number;
	    /**  additional explanation for terms*/
	    description?: string;
	    /** set to true to ask user to review before creating document */
	    warn: boolean;
	    /** date/time of creation */
	    when: string;
	    /** internal: not to be used */
	    projectSetting?: boolean;
	    /** legacy: now handled by tagType */
	    plain?: boolean;
	    /**  Include this term/abv in the List of Terms and abbreviation doc section when not surrounded with _ */
	    tableNoUnderscore?: boolean;
	}
	interface IProjectLogo {
	    fileId: string;
	}
	interface IExtras {
	    tableCanImport: boolean | string;
	    copyPaste: boolean | string;
	    moveIn: boolean | string;
	    excelImport: boolean | string;
	    deepTouch: boolean | string;
	    noTouch: boolean | string;
	    setLabel: boolean | string;
	    compareX: boolean | string;
	    compareInsideX: boolean | string;
	    indexer: boolean;
	    cleanup: boolean | string;
	    defaultToNewEditor: boolean | string;
	    enableLegacyReport?: "0" | "1" | "2";
	}
	interface IEmbeddedReport {
	    reportId: string;
	}
	interface IProjectGroups {
	    groups: IProjectGroup[];
	}
	interface IProjectGroup {
	    name: string;
	    projects: string[];
	}
	interface IFieldCapabilities {
	    onlyOne?: boolean;
	    canBePublished: boolean;
	    canBeReadonly: boolean;
	    canHideInDoc: boolean;
	    canBeXtcPreset: boolean;
	    canRequireContent?: boolean;
	    canBeUsedInDocs?: boolean;
	    validationFunction?: JsonEditorValidation;
	    schema?: string;
	    needsConfiguration?: boolean;
	    canBeUnsafe?: boolean;
	}
	interface IFieldDescription {
	    id: string;
	    label: string;
	    class: string;
	    help: string;
	    capabilities: IFieldCapabilities;
	}
	interface INotificationConfig {
	    enabled: boolean;
	    closeAuto: boolean;
	    manualCreate: boolean;
	    browserNotificationDisabled?: boolean;
	    browserNotificationAutoCloseAfter?: number;
	}
	let notificationSetting: string;
	let defaultNotificationConfig: INotificationConfig;
	/** allow to set cell in table column if another dropdown cell in same row changes*/
	interface IAutoColumn {
	    /** a list of mappings (which cell is updated upon change of which cell) */
	    maps: IAutoColumnMap[];
	}
	interface IAutoColumnMap {
	    /** name of cell which triggers change */
	    dropdownColumnName: string;
	    /** name of cell which is updated  */
	    textColumnName: string;
	    /** mapping from selected to set value */
	    mapping: IAutoColumnMapping[];
	}
	interface IAutoColumnMapping {
	    /** selected value */
	    dropdownValue: string;
	    /** set value */
	    textValue: string;
	}
	let autoColumnSetting: string;
	let autoColumnDefault: IAutoColumn;
	interface ICleanup {
	    "cleanup": boolean;
	    "tags": string[];
	    "attributes": IStringStringArrayMap;
	    "enforcedAttributes": IStringStringArrayMap;
	    "protocolAttributes": ICleanupProtocol[];
	}
	interface ICleanupProtocol {
	    "element": string;
	    "attribute": string;
	    "protocols": string[];
	}
	//# sourceMappingURL=ProjectSettings.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ISingleSelectOptions extends IDHFSectionOptions {
	    search?: string;
	}
	interface IDoubleSelectOptions extends IDHFSectionOptions {
	    searchFrom?: string;
	    searchTo?: string;
	}
	interface ISingleDefaultControllerConfig {
	    default: ISingleSelectOptions;
	}
	interface IDoubleDefaultControllerConfig {
	    default: ISingleSelectOptions;
	}
	abstract class SingleSelectBase implements IDHFSection {
	    protected abstract config: ISingleDefaultControllerConfig;
	    abstract renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions): void;
	    abstract updateXmlValue(ctrl: IDHFControlDefinition): void;
	    getConfig(ctrl: IDHFControlDefinition): ISingleSelectOptions;
	    addSignatures(signatures: string[], currentValue: IDHFControlDefinition): void;
	    abstract showSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): void;
	    protected addSpecificSettings(controllerConfig: ISingleSelectOptions, custom: JQuery): void;
	    abstract saveSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): boolean;
	    protected setSpecificSettings(controllerConfig: ISingleSelectOptions, custom: JQuery): boolean;
	    hasSearch(ctrl: IDHFControlDefinition): boolean;
	    executeSearch(ctrl: IDHFControlDefinition): void;
	    verifySearch(ctrl: IDHFControlDefinition): void;
	    verifyContent(ctrl: IDHFControlDefinition): void;
	    protected removeSpaces(str: string): string;
	}
	abstract class DoubleSelectBase implements IDHFSection {
	    protected abstract config: IDoubleDefaultControllerConfig;
	    abstract renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions): void;
	    abstract updateXmlValue(ctrl: IDHFControlDefinition): void;
	    getConfig(ctrl: IDHFControlDefinition): IDoubleSelectOptions;
	    addSignatures(signatures: string[], currentValue: IDHFControlDefinition): void;
	    abstract showSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): void;
	    protected addSpecificSettings(controllerConfig: IDoubleSelectOptions, custom: JQuery): void;
	    abstract saveSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): boolean;
	    protected setSpecificSettings(controllerConfig: IDoubleSelectOptions, custom: JQuery): boolean;
	    hasSearch(ctrl: IDHFControlDefinition): boolean;
	    executeSearch(ctrl: IDHFControlDefinition): void;
	    verifySearch(ctrl: IDHFControlDefinition): void;
	    verifyContent(ctrl: IDHFControlDefinition): void;
	    protected removeSpaces(str: string): string;
	}
	//# sourceMappingURL=SingleSelectBase.d.ts.map

	/**
	 * This class maintains a list of searches to be executed in order to fill DOC sections.
	 *
	 * The searches are executed one after the other. This prevents the client from spamming
	 * the server and allows the client to show progress.
	 *
	 */
	export abstract class SelectSearchQueue {
	    protected static verifySearchQueue: Function[];
	    /** this function can be used if the user changes the selection in the tree to avoid unnecessary searches.
	     *
	     */
	    static resetSearchQueue(): void;
	    static launchTimer: number;
	    /** adds a search to the queue.
	     *
	     * if there's no new search in the next 100ms, the searches are launched.
	     * the idea is that the GUI is rendered completely before running the searches.
	     * so that spinning wheels can indicate the needed action.
	     */
	    static addToSearchQueue(search: Function): void;
	    static runSearches(): void;
	}
	//# sourceMappingURL=SelectSearchQueue.d.ts.map

	/************************************************************************
	 
	Formatter deal with an array or a single item/folder/label/field and convert that to an "html" string
	 There are 5 main different types of formatters:
	 * sequential: print folders/items in a list by mixing html with macros
	 * tables: print folders arrays in a tabular form by mixing html with macros
	 * blocks: print something about an item/folder/label/field by mixing html with macros
	 * traces: know how to iterate over traces
	 * fields / labels: know how to iterate over fields or labels
	 
	 These are implemented as JSON objects or javascript functions
	************************************************************************/
	interface IPrintFormatter {
	    /**
	     * a unique id required for user defined id's if the uid is not unique it will overwrite the defaults
	     */
	    uid: string;
	    /**
	     * to display to user
	     */
	    name: string;
	    /**
	     * explains what the entity  is for
	     */
	    help: string;
	    /**
	     * indicates if an item was deleted
	     */
	    deleted?: boolean;
	    /**
	     * last modification date of print item
	    */
	    modDate?: string;
	}
	/** a top level formatter - this can be selected by the user  */
	interface IPrintFormatterTop extends IPrintFormatter {
	    /**
	     * Items with this flag will be displayed in the Layouter dialog as
	     * a selection option. Right now only for LIST and TABLE
	     */
	    topLevelTemplate?: boolean;
	    /**
	     * breadcrumbs (parent folders and item itself in PRINT project)
	     */
	    path: string;
	}
	/** a hierarchical structure */
	interface IPrintFormatterTree extends IPrintFormatter {
	    /** what to render for items */
	    item: string;
	    /** before parents nodes (e.g. <ul>)*/
	    before: string;
	    /** after parents nodes (e.g </ul>)*/
	    after: string;
	}
	/** prints a hierarchy of folders and items as sequential list / tree */
	interface IPrintFormatterList extends IPrintFormatterTree, IPrintFormatterTop {
	    folder: string;
	    hideFolder?: boolean;
	}
	/** prints recursively traces */
	interface IPrintFormatterTraces extends IPrintFormatterTree {
	    iterator: string;
	    params: IPrintItemIteratorParams;
	}
	/** a conditional object structure */
	interface IPrintFormatterBlock extends IPrintFormatter {
	    /** what to render for items */
	    render: string;
	    /** condition evaluation function */
	    condition: string;
	    /** condition params */
	    params: IPrintConditionParams;
	}
	/** template for rendering fields and labels  */
	interface IPrintFormatterFields extends IPrintFormatter {
	    /** what to render for items */
	    render: string;
	    /** iterator function */
	    iterator: string;
	    /** iterator params */
	    params: IPrintConditionParams;
	    /** render before fields/labels */
	    before: string;
	    /** render after fields/labels */
	    after: string;
	}
	/** takes an array of items and folders as input an renders them as table with possibly some sub tables (one after the other) */
	interface IPrintFormatterTable extends IPrintFormatterTree {
	    iterator: string;
	    params: IPrintItemIteratorParams;
	    subTable: string;
	    subTableFolder: string;
	    before: string;
	    after: string;
	    renderFolderRow: IPrintTableRow;
	    renderItemRow: IPrintTableRow;
	}
	/**  defines a sub table: e.g. if the main table shows REQs the sub table can define how to show TCs for each REQ*/
	interface IPrintFormatterSubTable extends IPrintFormatter {
	    iterator: string;
	    params: IPrintItemIteratorParams;
	    subTable: string;
	    cells: IPrintSubTableCell[];
	    tableRow?: Number;
	}
	interface IPrintFunctionMacro {
	    renderFunction: string;
	}
	interface IPrintItemMacro {
	    renderItem: string;
	}
	interface IPrintTableRow {
	    before: string;
	    after: string;
	    cells: ITableTableCell[];
	}
	interface ITableTableCell {
	    before: string;
	    after: string;
	    render?: string;
	    merge?: boolean;
	    fetchColumn?: number;
	    fetchColumnAlt?: string;
	    sortFunction?: string;
	    sortPriority?: number;
	}
	interface IPrintSubTableCell {
	    render: string;
	    fetchColumn?: number;
	    fetchColumnAlt?: string;
	}
	interface IPrintCustomFormatter {
	    /**
	     * The project on this instance that is used as the source
	     * for the definitions. By default this is PRINT
	     */
	    source?: string;
	    /**
	     * Definition of LIST iterators
	     */
	    items: {
	        [key: string]: IPrintFormatter;
	    };
	    /**
	     * Overwrites for default function parameters
	     */
	    functionDefaults: IPrintFunctionParamsOverwrites;
	}
	interface IPrintFormatterMap {
	    [key: string]: IPrintFormatter;
	}
	interface IPrintConditionParams {
	    negate?: boolean;
	}
	//# sourceMappingURL=PrintFormatter.d.ts.map

	/************************************************************************
	 
	Print Functions item/folder/label/field and convert that to an "html" string or boolean
	  
	 These are implemented as javascript functions
	************************************************************************/
	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IPrintFunctionMap {
	    [key: string]: IPrintFunction;
	}
	interface IConditionFunctionMap {
	    [key: string]: IConditionFunction;
	}
	interface IPrintBaseFunction {
	    getName: () => string;
	    getHelp: (hideDetails?: boolean) => string;
	    editParams?: (json: {}, onUpdate: (newParams: {}) => void) => JQuery;
	}
	interface IPrintBaseFunctionMap {
	    [key: string]: IPrintBaseFunction;
	}
	interface IPrintFunction extends IPrintBaseFunction {
	    getGroup: () => string;
	    getSubGroup?: () => string;
	    render: (overwrites: IGlobalPrintFunctionParams, params: IPrintFunctionParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void, printProcessor?: IPrintProcessor) => string;
	}
	interface IPrintFunctionParams {
	}
	interface IPrintFunctionParamsOverwrites {
	    debug: number;
	    [key: string]: IPrintFunctionParams;
	}
	interface IPrePostProcessor {
	    processor: string;
	    [key: string]: any;
	}
	interface IGlobalPrintFunctionParams {
	    outputFormat: string;
	    customer: IPrintFunctionParamsOverwrites;
	    project: IPrintFunctionParamsOverwrites;
	    section: IPrintFunctionParamsOverwrites;
	    tableRow?: number;
	}
	interface IConditionFunction extends IPrintBaseFunction {
	    itemOrFolder: boolean;
	    evaluate: (overwrites: IGlobalPrintFunctionParams, params: {}, itemOrFolderRef: any, object: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void) => boolean;
	}
	//# sourceMappingURL=PrintFunction.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	/************************************************************************
	 
	Iterators return children of an item, items or folders in a folder, or field / label objects
	 There are 3 main different types of formatters:
	 * Item operators return item ids based on an reference item or folder
	 * Label iterators return label objects for an item
	 * Field iterators return field objects for an item or folder
	  
	 These are implemented as javascript functions
	 
	************************************************************************/
	interface IPrintIteratorMap {
	    [key: string]: IPrintIterator;
	}
	interface IPrintItemIteratorParams {
	    maxDepth?: number;
	    sorting?: IPrintSortParams[];
	}
	interface IPrintIterator extends IPrintBaseFunction {
	    worksOnItem: boolean;
	    worksOnFolder: boolean;
	}
	interface IPrintItemIterator extends IPrintIterator {
	    iterate: (overwrites: IGlobalPrintFunctionParams, params: IPrintItemIteratorParams, itemOrFolder: string, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void) => string[];
	    getValidation: () => JsonEditorValidation | null;
	    folderIterator: boolean;
	    traceIterator: boolean;
	    tableRowIterator: boolean;
	}
	interface IPrintTracesIterator extends IPrintIterator {
	    iterator: string;
	    params: IPrintItemIteratorParams;
	    iterate: (overwrites: IGlobalPrintFunctionParams, params: IPrintItemIteratorParams, itemOrFolder: string, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void) => string[];
	    getValidation: () => JsonEditorValidation | null;
	}
	interface IPrintFieldIteratorParams {
	}
	interface IPrintFieldInfo {
	    fieldId: string;
	    field: JQuery;
	    name: string;
	    type: string;
	    config: JQuery;
	    jsonConfig: any;
	    jsonValue: any;
	}
	interface IPrintFieldIterator extends IPrintIterator {
	    iterate: (overwrites: IGlobalPrintFunctionParams, params: IPrintFieldIteratorParams, itemOrFolder: string, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void) => IPrintFieldInfo[];
	}
	interface IPrintLabelIteratorParams {
	}
	interface IPrintLabelInfo {
	    id: string;
	    printName: string;
	    icon: string;
	    set: boolean;
	    jsonConfig: {};
	}
	interface IPrintLabelIterator extends IPrintIterator {
	    iterate: (overwrites: IGlobalPrintFunctionParams, params: IPrintLabelIteratorParams, itemOrFolder: string, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void) => IPrintLabelInfo[];
	}
	//# sourceMappingURL=PrintIterators.d.ts.map

	/**
	    Macro's are used in format strings to call/embed iterators, or primitive functions or other formatters in a formatting
	*/
	interface IPrintMacro {
	}
	interface IPrintMacroFunction extends IPrintMacro {
	    renderFunction: string;
	}
	interface IPrintArrayMacro extends IPrintMacro {
	    iterator?: string;
	    maxDepth?: number;
	}
	interface IPrintTableMacro extends IPrintArrayMacro {
	    renderItem: string;
	}
	interface IPrintMacroParams {
	    itemIterator?: string;
	    labelIterator?: string;
	    fieldIterator?: string;
	    maxDepth?: number;
	    value?: string;
	    values?: string[];
	    render?: string;
	    fieldDetails?: IPrintLabelInfo;
	    formatter?: string;
	    rowspan?: number;
	}
	//# sourceMappingURL=PrintMacros.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	/************************************** Main section definition  ********************************************/
	interface ICustomSection {
	    description?: string;
	    descriptionContent?: string;
	    descriptionNoContent?: string;
	    formatter: string;
	    functionDefaults?: IPrintFunctionParamsOverwrites;
	}
	interface IPrintProcessorOptions {
	    headers?: {
	        maxDepth?: number;
	        altBefore?: string;
	        altAfter?: string;
	    };
	}
	interface IProcessResult {
	    /** generated html */
	    html: string;
	    /** primary list of items from selection + first level interators */
	    redlining: string[];
	}
	interface IPrintProcessor {
	    prepareProcessing(mf: JQuery, onError: (message: string) => void, format: string): any;
	    processSection(formatter: IPrintCustomFormatter, section: ICustomSection, projectOverwrites: IPrintFunctionParamsOverwrites, selection: string[], possibleTargets: string[]): IProcessResult;
	    getCustomStylesheet(): string;
	    /**
	     * This can be used by render functions to get a table and process its data,
	     * for example for a row count
	     * @param tableId The (sub)table to render
	     * @param selection The selection to use as the root
	     */
	    getTableData(tableId: string, selection: string[]): string;
	    globals: IPrintGlobals;
	}
	const PrintFindAllScriptsRegex: RegExp;
	interface IPrintConfig {
	    getPrintProcessor(): IPrintProcessor;
	    getFieldAndLabelsIteratorsDropdown(): IDropdownOption[];
	    getItemIteratorsDropdown(items: boolean, folders: boolean, allowNoIterator: boolean): any;
	    getItemConditionDropdown(): any;
	    showOptionsEditor(fctName: string, currentValue: string, onUpdate: (newValue: string) => void): any;
	    editFunctionOptions(currentValue: string, onUpdate: (newOptions: string) => void): any;
	    editStyle(wrap: JQuery): any;
	    functionHasOptions(functionUid: string): any;
	    getFunctions(group: string): any;
	    getItemSorters(): IPrintSorterMap;
	    getAllFunctions(): IPrintBaseFunctionMap;
	    getAllIterators(): IPrintBaseFunctionMap;
	}
	var globalPrintConfig: IPrintConfig;
	function setGlobalPrintConfig(config: IPrintConfig): void;
	interface IStringRiskConfigMap {
	    [key: string]: IRiskConfig;
	}
	interface IFieldCache {
	    [key: string]: IPrintFieldInfo;
	}
	interface IPrintGlobals {
	    itemMap: IStringJQueryMap;
	    riskControlCategories: IStringStringArrayMap;
	    categories: IStringJQueryMap;
	    fieldsPerCategory: IStringJQueryMap;
	    fieldIdByLabel: IStringMap;
	    fieldDefById: IStringJQueryMap;
	    riskConfigs: IStringRiskConfigMap;
	    down: IStringStringArrayMap;
	    up: IStringStringArrayMap;
	    children: IStringStringArrayMap;
	    count: number;
	    lastItem: string;
	    lastFields: IFieldCache;
	}
	//# sourceMappingURL=PrintProcessorInterfaces.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	/************************************************************************
	 
	print sorter allow to sort items in tables
	 
	************************************************************************/
	interface IPrintSorterMap {
	    [key: string]: IPrintSorter;
	}
	interface IPrintSorterParams {
	    reverse: boolean;
	}
	interface IPrintSorter {
	    getName: () => string;
	    getHelp: () => string;
	    sort: (a: string, b: string, inverse: boolean, params: any, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void) => number;
	}
	interface IPrintSortParams {
	    sorter: string;
	    descending: boolean;
	    params?: any;
	}
	//# sourceMappingURL=PrintSorter.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class ContextFramesTools implements IContextFramesTools {
	    static defaultPages: IContextPageConfig;
	    private exists;
	    private visible;
	    private support;
	    private context;
	    private controls;
	    private resetSmartLinks;
	    private maxNumberOfLinks;
	    private categoryFilter;
	    private shouldBeVisible;
	    constructor();
	    protected setToogleIcon(allowClose: boolean): void;
	    protected toggleFunction(): void;
	    showContextFrame(tabType: string, makeVisible: boolean): boolean;
	    getExpender(): JQuery;
	    private getTabs;
	    visibility(enabled: boolean): void;
	    hideContextFrames(): void;
	    showContextFrames(): void;
	    private showSupport;
	    private showHelp;
	    private showSmartLinksTab;
	    private showReferencesTab;
	    private showItemsInFolderTab;
	    private showUpReferences;
	    private showDownReferences;
	    private getUpLinks;
	    private getDownLinks;
	    private renderFromIds;
	    private renderIds;
	    private nonBlockingRenderNext;
	    private nonBlockingRender;
	    private renderAllUpOrDown;
	    private renderAllInFolder;
	    private showNothingFound;
	    renderContextFrames(): void;
	    fillContextFrame(_data: IItem, itemId: string): void;
	    init(): void;
	}
	//# sourceMappingURL=ContextFramesTools.d.ts.map

	/// <reference types="jquery" />
	class FileTools implements IFileTools {
	    private uploadInfo;
	    private uploadFilesAsync;
	    UploadFilesAsync(files: FileList | File[]): JQueryDeferred<IUploadedFileInfo[]>;
	    UploadFileAsync(file: File): JQueryDeferred<IUploadedFileInfo[]>;
	    convertXLSXAsync(file: IFileParam): JQueryDeferred<string>;
	}
	//# sourceMappingURL=FileTools.d.ts.map

	interface IHTMLClean {
	    whiteLists: {
	        styles: IHTMLWhiteList[];
	        classes: IHTMLWhiteList[];
	        properties: IHTMLWhiteList[];
	        data: IHTMLWhiteList[];
	    };
	    blackLists: {
	        removeTags: string[];
	        keepOnlyInside: string[];
	        removeEmpty: string[];
	    };
	    tagReplacements: IHTMLReplacement[];
	    tagReplacementsDoc: IHTMLReplacement[];
	}
	interface IHTMLReplacement {
	    what: string;
	    with: string;
	}
	interface IHTMLWhiteList {
	    tagName: string;
	    allowed: string[];
	}
	class HTMLCleaner {
	    private autoEscape;
	    text: string;
	    cleanConfig: IHTMLClean;
	    constructor(htmlCode: string, autoEscape?: boolean);
	    getClean(cleaningLevel?: HTMLCleaner.CleanLevel, keepMatrix?: boolean): string;
	    replaceWiki(): string;
	    checkServerCleaning(): string[];
	    applyServerCleaning(): string;
	    private applyWiki;
	    private replaceCode;
	    private replaceTable;
	    private replaceList;
	    private getListLevel;
	    private getText;
	    private setMaxImageSize;
	    private replaceCount;
	    private replaceNoCount;
	    private replaceTags;
	    private removeTags;
	    private removeInsideTags;
	    private cleanInlineStyle;
	    private cleanClasses;
	    private removeProps;
	    private cleanProperties;
	    private cleanData;
	    private removeUseLessStuff;
	    private handleWordLists;
	    private removeSpansWithoutStyle;
	    private removeEmpty;
	    private unwrapEmptyStuff;
	    private removeDivDiv;
	}
	namespace HTMLCleaner {
	    enum CleanLevel {
	        PurifyOnly = 0,
	        Basic = 1,
	        Soft = 2,
	        Strict = 3,
	        BasicSafety = 4,
	        StrictDoc = 5,
	        Server = 6
	    }
	}
	//# sourceMappingURL=HTMLCleaner.d.ts.map

	class ItemTools implements IItemTools {
	    parseRef(itemRef: string): IItemIdParts;
	    getCreator(item: IItem): string;
	    getLastEditor(item: IItem): string;
	    refListToDisplayString(inputItems: IReference[] | null, prefix: string, shorten?: number): string;
	    renderLink(itemId: string, itemTitle?: string, newWindow?: boolean): any;
	    updateReferences(oldReferences: IReference[], newReferences: IReference[], fromId: string | null, toId: string | null): IReferenceChange[];
	    clone(item: IItemGet, copyLabels: boolean): IItemPut;
	    sort(a: string, b: string): number;
	}
	//# sourceMappingURL=ItemTools.d.ts.map

	class JSONTools implements IJSONTools {
	    private cloner2;
	    mergeOptions(defaultOptions: IBaseControlOptions, options: IBaseControlOptions): IBaseControlOptions;
	    setOptions(newOptions: IBaseControlOptions, options: IBaseControlOptions): IBaseControlOptions;
	    isTrue(obj: undefined | null | boolean | string | number): boolean;
	    isFalse(obj: undefined | null | boolean | string | number): boolean;
	    fromString(str: null | string): {
	        status: string;
	        value: {};
	    };
	    clone(src: any): any;
	}
	//# sourceMappingURL=JSONTools.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class LabelTools implements ILabelTools {
	    ignoreProjectFilter: boolean;
	    private activeFilter;
	    getFilterColor(): string;
	    getFilter(): string;
	    getDisplayName(labelId: string): string;
	    getFilterName(labelId: string): string;
	    getLabelDefinitions(categories: string[]): ILabel[];
	    setFilter(filter: string[]): void;
	    resetReviewLabels(labelIds: string[], category: string, addXor?: boolean): string[];
	    getDefaultLabels(category: string): string[];
	    hasLabels(): boolean;
	    setLabels(oldLabelIds: string, labels: string[]): string;
	    setLabel(oldLabelIds: string[], label: string): string[];
	    getLastTimeLabelWasSet(itemId: string, label: string, beforeRevision: number): JQueryDeferred<unknown>;
	    unsetLabel(oldLabelIds: string[], label: string): string[];
	    compareLabels(before: string[], after: string[]): IChangedLabels;
	    protected hasCombinedFilterMenu(): boolean;
	    static timeWarpLabel: string;
	    protected getLabelList(): ILabel[];
	    getLabelNames(): string[];
	    protected getDesignReviews(): IDesignReview[];
	    getDesignReview(labelId: string): IDesignReview | null;
	    isFiltered(category: string, labels: string): boolean;
	    getLabelsOfLabelGroupsType(labelGroupType: string): string[];
	    getLabelGroups(category?: string): ILabelGroup[];
	    protected getGroupOfLabel(labelID: string): ILabelGroup | null;
	}
	class LabelSwitches extends LabelTools implements ILabelSwitches {
	    private lexist;
	    private isFilter;
	    private dbClickCounter;
	    private dbClickTimer;
	    private groups;
	    private ui;
	    private canEdit;
	    private category;
	    private currentLabelsOn;
	    private mode;
	    private valueChanged;
	    private item?;
	    private restrictEditTo;
	    private canAutoFill;
	    constructor(ui: JQuery, canEdit: boolean, category: string, currentLabelsOn: string[], mode: string, valueChanged: (clo: string[]) => void, item?: IItem, restrictEditTo?: string[]);
	    private showLabels;
	    private setEnabled;
	    labelsExist(): boolean;
	    private canEditLabel;
	    /**
	     *  this.ui elements for different label this.groups
	     */
	    private create_group_or;
	    private triggerLabelChanged;
	    private create_group_xor;
	    private create_group_review;
	    private saveAfterLabelChange;
	    private create_group_design_review;
	    protected verifyRevisionTable(label: string, revisionTableName: string): JQueryDeferred<unknown>;
	    private compareRevisions;
	    protected getRevisionFromTable(revisionTableVal: string, revisionColumn: string): string;
	    protected getUsersFromField(fieldName: string): any;
	    protected initPasswordField(name: JQuery, pwd: JQuery): void;
	    private add_to_global_dropdown;
	    private create_dropdown_group;
	    private updateSelection;
	    private createButton;
	    private createLabel;
	}
	//# sourceMappingURL=LabelTools.d.ts.map

	enum SERVER_LOG_LEVEL {
	    WEIRD_STATE = "WEIRD_STATE",
	    BROKEN_STATE = "BROKEN_STATE"
	}
	class LoggerTools implements ILoggerTools {
	    private verbose;
	    private lastLogMsg;
	    private logData;
	    private logIdx;
	    private logSize;
	    log(id: string, msg: string): void;
	    private getCaller;
	    private logServer;
	    debug(message: string): void;
	    info(message: string): void;
	    warning(message: string): void;
	    error(message: string): void;
	    weirdState(message: string): void;
	    brokenState(message: string): void;
	    getLog(): string;
	}
	//# sourceMappingURL=LoggerTools.d.ts.map

	/// <reference types="jquery" />
	class MailTools implements IMailTools {
	    sendMail(to: string, cc: string, bcc: string, subject: string, body: string, systemMail?: number, noSuccess?: boolean, noReply?: number): JQueryDeferred<{}>;
	    sendMailDlg(sendTo: string, preSelectedUsers: XRUserPermissionType[], subject: string, body: string, sendCc: string): void;
	    replacePlaceholders(template: string, itemId: string, rejectComment: string, reviewers: string[], readers: string[], trainers: string[], trainees: string[]): string;
	    getCannedMessage(messageId: string, to: string, itemId: string, custom?: string, body?: string): string;
	    sendMails(sendTos: string[], subject: string, messages: string[]): void;
	    private sendMailsRec;
	}
	//# sourceMappingURL=MailTools.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IContextInformation {
	    project: string;
	    user: string;
	    server: string;
	    version: string;
	    product: string;
	    itemId: string;
	    item: string;
	    fieldList: string;
	}
	interface IContextFramesTools {
	    showContextFrame(tabType: string, makeVisible: boolean): any;
	    getExpender(): any;
	    visibility(enabled: boolean): any;
	    hideContextFrames(): any;
	    showContextFrames(): any;
	    renderContextFrames(): any;
	    fillContextFrame(_data: IItem, itemId: string): any;
	    init(): any;
	}
	interface IUploadedFileInfo {
	    fileName: string;
	    fileId?: string;
	    uploaded?: boolean;
	    fileObj?: any;
	}
	interface IFileDefinition {
	    name: string;
	}
	interface IFileTools {
	    UploadFilesAsync(files: FileList | File[]): JQueryDeferred<IUploadedFileInfo[]>;
	    UploadFileAsync(file: File): JQueryDeferred<IUploadedFileInfo[]>;
	    convertXLSXAsync(file: IFileParam): JQueryDeferred<string>;
	}
	interface IItemTools {
	    parseRef(itemRef: string): IItemIdParts;
	    getCreator(item: IItem): string;
	    getLastEditor(item: IItem): string;
	    refListToDisplayString(inputItems: IReference[] | null, prefix: string, shorten?: number): string;
	    renderLink(itemId: string, itemTitle?: string, newWindow?: boolean): any;
	    updateReferences(oldReferences: IReference[], newReferences: IReference[], fromId: string | null, toId: string | null): IReferenceChange[];
	    clone(item: IItemGet, copyLabels: boolean): IItemPut;
	    sort(a: string, b: string): any;
	}
	interface IJSONTools {
	    mergeOptions(defaultOptions: IBaseControlOptions, options: IBaseControlOptions): IBaseControlOptions;
	    setOptions(newOptions: IBaseControlOptions, options: IBaseControlOptions): IBaseControlOptions;
	    isTrue(obj: undefined | null | boolean | string | number): boolean;
	    isFalse(obj: undefined | null | boolean | string | number): boolean;
	    fromString(str: null | string): {
	        status: string;
	        value: {};
	    };
	    clone(src: any): any;
	}
	interface IReportTask {
	    reportId: string;
	    jobId: number;
	    progress: number;
	    postCreateCallback: Function;
	    postFailCallback?: Function;
	    postProgressCallback?: Function;
	    reportOptions?: IReportOptions;
	}
	interface IJobList {
	    allGood: boolean;
	    tasks: IReportTask[];
	    doneBatch: number;
	}
	interface IReportOptions extends IRestParam {
	    format?: string;
	    inline?: boolean;
	    reason?: string;
	    filter?: string;
	    isSignedReport?: boolean;
	    includeSignatures?: string;
	    newTitle?: string;
	    copyFields?: string;
	    itemList?: string;
	    url?: string;
	    resturl?: string;
	}
	interface IReportTransferField {
	    fromId: string;
	    toId: string;
	}
	interface IReportSetField {
	    toId: string;
	    value: string;
	}
	interface IGetReportProgressResult {
	    status: string;
	    progress: number;
	    jobFile: IGetReportProgressJobFileResult[];
	    visibleName: string;
	}
	interface IGetReportProgressJobFileResult {
	    internalPath: string;
	    jobFileId: number;
	    mimeType: string;
	    restUrl: string;
	    visibleName: string;
	}
	interface IPostCreateSignOrDocResult {
	    jobId: number;
	}
	interface IReportInput {
	    to: string;
	}
	interface IReportGeneratorTools {
	    SaveAndCreate(itemId: string, reportOptions: IReportOptions, progressInfo: string, postCreateCallback: Function, postFailCallback?: Function, postProgressCallback?: Function): void;
	    CreateSignedDoc(docId: string, signatures: string[], signedDocumentsControl: JQuery, labelFilter: string, signName: string, transferFields: IReportTransferField[], defaultLabels: string[], docUpdateCb: (createdDocumentId: string) => void): void;
	    createSIGN(target: string, comment: string, docId: string, signatures: string[], signedDocumentsControl: JQuery, labelFilter: string, signName: string, transferFields: IReportTransferField[], defaultLabels: string[], docUpdateCb: (createdDocumentId: string) => void): void;
	    CreateDoc(docId: string, format: IReportOptions, labelFilter: string): void;
	    CreateReport(reportId: string, format: IReportOptions, inputItems?: IReportInput[], requiredItems?: IReportInput[]): void;
	    DownloadSignedDoc(signedId: string, format: IReportOptions): any;
	}
	interface IChangedLabels {
	    changed: boolean;
	    added: string[];
	    removed: string[];
	    delta: string;
	}
	const DOCUMENT_STATUS_LABEL_GROUP_TYPE = "_DOCUMENT_STATUS_";
	interface ILabelTools {
	    ignoreProjectFilter: boolean;
	    getFilterColor(): string;
	    getFilter(): string;
	    getDisplayName(labelId: string): any;
	    getFilterName(labelId: string): any;
	    getLabelDefinitions(categories: string[]): ILabel[];
	    setFilter(filter: string[]): any;
	    resetReviewLabels(labelIds: string[], category: string, addXor?: boolean): string[];
	    getDefaultLabels(category: string): string[];
	    hasLabels(): any;
	    setLabels(oldLabelIds: string, labels: string[]): string;
	    setLabel(oldLabelIds: string[], label: string): string[];
	    unsetLabel(oldLabelIds: string[], label: string): string[];
	    compareLabels(before: string[], after: string[]): IChangedLabels;
	    getLabelNames(): string[];
	    getDesignReview(labelId: string): IDesignReview | null;
	    isFiltered(category: string, labels: string): boolean;
	    getLabelsOfLabelGroupsType(labelGroupType: string): string[];
	    getLabelGroups(category?: string): ILabelGroup[];
	    getLastTimeLabelWasSet(itemId: string, label: string, beforeRevision: number): any;
	}
	interface ILabelSwitches extends ILabelTools {
	    labelsExist(): boolean;
	}
	interface ILoggerTools {
	    log(id: string, msg: string): any;
	    debug(message: string): void;
	    info(message: string): void;
	    warning(message: string): void;
	    error(message: string): void;
	    weirdState(message: string): void;
	    brokenState(message: string): void;
	    getLog(): string;
	}
	interface IUserDropDown {
	    id: string;
	    label: string;
	}
	interface ITestCanned extends IMailConfigCanned {
	    [key: string]: string | undefined;
	}
	interface IUserLookup extends XRUserPermissionType {
	    [key: string]: string | number;
	}
	interface IMailTools {
	    /** send mail
	    * @param {type} to comma separated list of user ids
	    * @param {type} cc comma separated  list of user ids
	    * @param {type} bcc comma separated  list of user ids
	    * @param {type} subject default subject
	    * @param {type} body default body
	    * @param {type} systemMail set to 1 to send mail in name of system rather than user
	    *
	    * @returns {undefined} nothing
	    */
	    sendMail(to: string, cc: string, bcc: string, subject: string, body: string, systemMail?: number, noSuccess?: boolean, noReply?: number): JQueryDeferred<{}>;
	    /** show send mail dialog and send mail
	    * @param {type} sendTo comma separated list of user ids
	    * @param {type} preSelectedUsers available users or null if to use all project users
	    * @param {type} subject default subject
	    * @param {type} body default body
	    * @param {type} includeSupport whether to send it to matrix support
	    * @param {type} sendCc
	    
	    * @returns {undefined} nothing
	    */
	    sendMailDlg(sendTo: string, preSelectedUsers: XRUserPermissionType[], subject: string, body: string, sendCc: string): void;
	    replacePlaceholders(template: string, itemId: string, rejectComment: string, reviewers: string[], readers: string[], trainers: string[], trainees: string[]): string;
	    /** get default messages, replace a few strings
	     *
	     * @param {type} messageId
	     * @param {type} itemId
	     * @returns {undefined}
	     */
	    getCannedMessage(messageId: string, to: string, itemId: string, custom?: string, body?: string): string;
	    sendMails(sendTos: string[], subject: string, messages: string[]): any;
	}
	interface ICancelSearchEvent {
	}
	interface ISearchTools {
	    OnCancelSearch: IEvent<ICancelSearchEvent, void>;
	    getFilter(): any;
	    cancelSearch(): any;
	    searchInDialog(): any;
	    endSearchInDialog(): any;
	    highlight(term: string): any;
	    hideHighlight(): any;
	    renderHighlight(): any;
	}
	interface ICaptionFormat extends ICaption {
	    captionDetails: string;
	    captionClass: string;
	    referenceClassNo: string;
	}
	interface ISmartTextTools {
	    createMenu(docMode: boolean, tableMode: boolean): void;
	    deleteTag(what: string): void;
	    insertFigReference(reference: string, editor: any, editable: any): any;
	    insertTabReference(reference: string, editor: any, editable: any): any;
	    pasteBuffer(editor: any, editable: any): any;
	    createCaption(isTable: boolean, editor: Summernote.editor, editable: any): any;
	    updateCaptionsAndReferences(): any;
	    createEditTag(tagType: number, what: string, data?: ISmartTextConfigReplacement, saveFct?: Function, forceTiny?: boolean): void;
	    selectEditCreateTag(mode: number, tagType: number, tagSelected: Function): void;
	    removeOuterParagraph(edit: string): any;
	    replaceTextFragments(text: string, showTooltips?: boolean, encoded?: boolean): string;
	    showTooltips(node: JQuery, noContainer?: boolean): any;
	    prepareForReadReadRender(itemDetails: JQuery): any;
	}
	interface IToolTipCache {
	    date: Date;
	    item: IItem;
	}
	interface IDropDownButtonOption {
	    name: string;
	    class?: string;
	    click: Function;
	}
	interface IDialogOptions {
	    container: JQuery;
	    title: string;
	    buttons: any[];
	    content?: JQuery;
	    minMaxWidth?: number;
	    minMaxHeight?: number;
	    scrolling?: UIToolsConstants.Scroll;
	    autoResize?: boolean;
	    maximizeButton?: boolean;
	    noXButton?: boolean;
	    onClose?: Function;
	    onOpen?: Function;
	    onResize?: Function;
	    noCloseOnEscape?: boolean;
	}
	interface ICIColor {
	    color: string;
	    alternateColor: string;
	}
	interface ICIColorList {
	    [key: string]: ICIColor;
	}
	interface IUIToolsEnum {
	    widgetPluginsContainer: IWidgetPluginsContainer;
	    DateTime: IDateTimeUI;
	    BlockingProgress: IBlockingProgressUI;
	    SelectUserOrGroup: ISelectUserOrGroupUI;
	    lt: ILT;
	    Progress: IProgressUI;
	    ThemeSelector: IThemeSelector;
	    fixC3ForCopy(copied: JQuery): any;
	    createDropDownButton(defaultText: string, options: IDropDownButtonOption[], isUp: boolean, isJui: boolean, buttonId?: string, disableDefaultButtonClick?: boolean): JQuery;
	    getNiceDialogSize(minWidth: number, minHeight: number): {
	        width: number;
	        height: number;
	    };
	    showSuccess(messageTitle: string, hideAfter?: number): void;
	    hideSuccess(): void;
	    hideError(): void;
	    showError(messageTitle: string, messageBody: string, showForMS?: number): void;
	    showAck(ackId: number, messageTitle: string, dlgTitle?: string): void;
	    showConfirm(confId: number, messageInfo: {
	        title: string;
	        ok: string;
	        nok?: string;
	        third?: string;
	    }, confFunction: Function, noConfFunction: Function, thirdFunction?: Function): void;
	    confirmSpinningWait(message: string): any;
	    closeConfirmSpinningWait(): any;
	    showTooltip(itemId: string, target: JQuery, event: Event, crossProject?: string): void;
	    showTaskAsTooltip(id: string, title: string, url: string, htmlContent: string, target: JQuery): void;
	    hideTooltip(now?: boolean): void;
	    updateTooltip(): void;
	    spaceMessage(userHasSpaces: boolean, passwordHasSpaces: boolean): string;
	    getSpinningWait(message?: string): JQuery;
	    setEnabled(button: JQuery, enabled: boolean): any;
	    getDisplayError(jqxhr: IJcxhr, textStatus: string, error: string): any;
	    showDialog(dlg: JQuery, title: string, content: JQuery, minMaxWidth: number, minMaxHeight: number, buttons: any[], // DialogButtonOptions 
	    scrolling: UIToolsConstants.Scroll, autoResize?: boolean, maximizeButton?: boolean, close?: Function, open?: Function, resize?: Function, noCloseOnEscape?: boolean): any;
	    showDialogDes({ maximizeButton, // = false
	    noXButton, // = false
	    autoResize, // = false
	    onClose, // = null
	    onOpen, // = null
	    onResize, // = null
	    noCloseOnEscape, // = false
	    minMaxWidth, // = $(document).width() * 0.9
	    minMaxHeight, // = app.itemForm.height() * 0.9
	    scrolling, // = UIToolsConstants.Scroll.None
	    content, // = null
	    container, title, buttons }: IDialogOptions): any;
	    pushDialog(thisDialog: JQuery): any;
	    popDialog(thisDialog: JQuery): any;
	    serverHtmlCleanupBlob(content: JQuery): JQueryDeferred<string>;
	    copyBuffer(anchor: JQuery, tooltip: string, content: JQuery, catchKey?: JQuery, onProcessCopy?: Function, btnText?: string, beforeCopy?: Function, afterCopy?: Function): any;
	    getIconOptions(): any;
	    calculateColorFrom(input: string): ICIColor;
	    getAvatar(info: string, size: number): JQuery;
	    doCopy(content: JQuery, onProcessCopy: Function): any;
	    addChevronSection(container: JQuery, text: string, help: string, open?: boolean): any;
	    enableIf(cb: JQuery, state: boolean, ctrls: JQuery[]): any;
	    addCheckboxD(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function, defaultValue: string): any;
	    addCheckbox(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function): any;
	    addCheckboxIsTrue(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function): any;
	    addCheckboxIsFalse(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function): any;
	    addPassInput(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function, onUnFocus?: Function): any;
	    addTextInput(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function, onFocusOut?: Function, isPass?: boolean, help?: string, readonly?: boolean): any;
	    addRichTextInput(ui: JQuery, params: IRichTextParams, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function, onFocusOut?: Function): any;
	    addDateSelect(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function, help?: string, readonly?: boolean): any;
	    addIconInput(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function, onFocusOut?: Function, isPass?: boolean): any;
	    addDropdownToArray(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, options: IDropdownOption[], grouping: IDropdownGroup[], maxItems: number, create: boolean, sort: boolean, onChange: Function, placeholder?: string): any;
	    addDropdownNumber(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, first: number, last: number, onChange: Function, placeholder?: string, paramsBase?: IDropdownParams): any;
	    addDropdownToValue(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, options: IDropdownOption[], create: boolean, sort: boolean, onChange: Function, placeholder?: string, paramsBase?: IDropdownParams): any;
	    getPageTitle(title: string, getPanel?: () => JQuery, resize?: () => void): JQuery;
	    createConfigLine(lineId: string, linePrefix: string, lineName: string, lineArray: any[], idProp: string, onChangedOrder: () => void, onEdit: (lineId: string) => void, needsEdit: boolean, onDelete: (lineId: string) => void): any;
	    fixArrows(ul: JQuery): any;
	    createConfigAddLine(action: string, onAdd: () => void): any;
	}
	class UIToolsConstants {
	    static CIColors: ICIColorList;
	    static CIColorsGrey: ICIColorList;
	    static allGrey: string[];
	    static CIColorsPrimary: ICIColorList;
	}
	module UIToolsConstants {
	    enum Scroll {
	        Auto = 0,
	        Vertical = 1,
	        None = 2
	    }
	}
	interface ITimeZoneOption {
	    val: string;
	    text: string;
	    timeformat?: string;
	    dateformat?: string;
	}
	interface ITimeZoneSetting {
	    [key: string]: string | ITimeZoneOption[] | undefined;
	    timeZoneOptions: ITimeZoneOption[];
	    settingsSource: string;
	    timeformat?: string;
	    dateformat?: string;
	    timezone?: string;
	}
	interface IDateTimeUI {
	    initDateTimeSettings(update?: boolean): JQueryDeferred<{}>;
	    renderHumanDate(date: Date, dateOnly?: boolean): string;
	    renderCustomerHumanDate(date: Date, dateOnly?: boolean): string;
	    renderHumanMonth(dateObj: Date): string;
	    renderDashFormat(dateObj: Date): string;
	    renderSettingControls(options: {
	        table: JQuery;
	        user: string;
	        help: string;
	    }): void;
	    renderSettingDialog(user: string): void;
	    requiresTimeZoneWarning(): boolean;
	    getTimeZoneCTA(): JQuery;
	    getSimpleDateFormat(): string;
	    getSimpleDateFormatMoment(): any;
	    getSimpleDateTimeFormatMoment(): any;
	}
	interface IBlockingProgressUITask {
	    name: string;
	    progress?: number;
	}
	interface IBlockingProgressUI {
	    Init(tasks: IBlockingProgressUITask[], animate?: boolean): void;
	    SetProgress(taskIdx: number, percent: number, newText?: string): void;
	    SetProgressError(taskIdx: number, problem: string): void;
	}
	interface IProgressUI {
	    Init(message: string, warning?: boolean): void;
	    Update(progress: number): void;
	    SuccessHide(message: string, ms: number): void;
	    ErrorHide(message: string, ms: number): void;
	}
	interface ISelectUserOrGroupUI {
	    showMultiUserSelect(container: JQuery, help: string, selected: string[], title: string, selectFrom: string, selectTo: string, showUsers: boolean, showGroups: boolean, onSelect: (selection: string[]) => void, preSelectedUsers?: XRUserPermissionType[]): any;
	    getUsersInSelection(selection: string[]): any;
	    getGroupId(group: XRGroupPermissionType | XRGroupType): any;
	    getGroupDisplayNameFromId(groupOrUserId: string): any;
	    isGroup(groupOrUserId: string): any;
	    exists(groupOrUserId: string): any;
	    showSelectDialog(selected: string[], title: string, selectFrom: string, selectTo: string, showUsers: boolean, showGroups: boolean, onSelect: (selection: string[]) => void, preSelectedUsers?: XRUserPermissionType[]): any;
	    getUserDropDownOptions(showUsers: boolean, showGroups: boolean, preSelectedUsers?: XRUserPermissionType[], possiblyDeletedUsername?: string): IDropdownOption[];
	    showSingleSelect(control: JQuery, showUsers: boolean, showGroups: boolean, onSelect: (selection: string) => void, preSelectedUsers?: XRUserPermissionType[], possiblyDeletedUsername?: string): any;
	    getAllUsersAndGroups(): JQueryDeferred<IDropdownOption[]>;
	    combinedName(user: XRUserPermissionType): any;
	    showSingleSelectDialog(selected: string, title: string, help: string, showUsers: boolean, showGroups: boolean, onSelect: (selection: string) => void, preSelectedUsers?: XRUserPermissionType[]): any;
	}
	interface ILT {
	    forDB(code: string, fieldId: number): any;
	    forUI(code: string, fieldId: number): any;
	}
	interface IMatrixUrlParts {
	    project: string;
	    item: string;
	    params: IStringMap;
	}
	interface IURLTools {
	    getParameterByName(url: string, name: string): string | null;
	    parseUrl(url: String): IMatrixUrlParts;
	}
	interface IXPathToolsComp {
	    name?: string;
	    position: number;
	}
	interface IXPathTools {
	    get(node: JQuery): any;
	    hardCopy(element: JQuery): any;
	}
	interface IMatrix {
	    Search: ISearchTools;
	    Item: IItemTools;
	    ContextFrames: IContextFramesTools;
	    JSON: IJSONTools;
	    XPath: IXPathTools;
	    URL: IURLTools;
	    Mail: IMailTools;
	    Logger: ILoggerTools;
	    LabelTools: ILabelTools;
	    UI: IUIToolsEnum;
	    File: IFileTools;
	    ReportGenerator: IReportGeneratorTools;
	    SmartText: ISmartTextTools;
	}
	//# sourceMappingURL=MatrixLibInterfaces.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class ReportGeneratorTools implements IReportGeneratorTools {
	    private reportJoblist;
	    private reportProc;
	    lastReportXMLs: string[];
	    SaveAndCreate(itemId: string, reportOptions: IReportOptions, progressInfo: string, postCreateCallback: Function, postFailCallback?: Function, postProgressCallback?: Function): void;
	    private StartReportEngine;
	    private StartReportEngineLaunch;
	    private waitForReports;
	    private updateAfterCreatingCache;
	    private getProgressStatus;
	    private getError;
	    CreateSignedDoc(docId: string, signatures: string[], signedDocumentsControl: JQuery, labelFilter: string, signName: string, transferFields: IReportTransferField[], defaultLabels: string[], docUpdateCb: (createdDocumentId: string) => void): void;
	    createSIGN(target: string, comment: string, docId: string, signatures: string[], signedDocumentsControl: JQuery, labelFilter: string, signName: string, transferFields: IReportTransferField[], defaultLabels: string[], docUpdateCb: (createdDocumentId: string) => void): void;
	    protected addSignToTree(target: string, comment: string, itemdetails: IItemGet, signedDocumentsControl: JQuery): void;
	    CreateDoc(docId: string, format: IReportOptions, labelFilter: string): void;
	    CreateReport(reportId: string, format: IReportOptions, inputItems?: IReportInput[], requiredItems?: IReportInput[]): void;
	    DownloadSignedDoc(signedId: string, format: IReportOptions): void;
	}
	//# sourceMappingURL=ReportGeneratorTools.d.ts.map

	class SearchTools implements ISearchTools {
	    private globalFilter;
	    private highlightContext;
	    OnCancelSearch: EventDispatcher<ICancelSearchEvent>;
	    getFilter(): string;
	    cancelSearch(): void;
	    searchInDialog(): void;
	    endSearchInDialog(): void;
	    highlight(term: string): void;
	    hideHighlight(): void;
	    renderHighlight(): void;
	    private updateTinys;
	}
	//# sourceMappingURL=SearchTools.d.ts.map

	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class SmartTextTools implements ISmartTextTools {
	    private figureDef;
	    private tableDef;
	    createMenu(docMode: boolean, tableMode: boolean): void;
	    deleteTag(what: string): void;
	    insertFigReference(reference: string, editor: any, editable: any): void;
	    insertTabReference(reference: string, editor: any, editable: any): void;
	    pasteBuffer(editor: any, editable: any): void;
	    private insertReference;
	    createCaption(isTable: boolean, editor: Summernote.editor, editable: any): void;
	    updateCaptionsAndReferences(): void;
	    createEditTag(tagType: number, what: string, data?: ISmartTextConfigReplacement, saveFct?: Function, forceTiny?: boolean): void;
	    selectEditCreateTag(mode: number, tagType: number, tagSelected: Function): void;
	    private calculateButtonEnableInsert;
	    private calculateButtonEnable;
	    removeOuterParagraph(edit: string): string;
	    private addSelect;
	    private addEnter;
	    replaceTextFragments(text: string, showTooltips?: boolean, encoded?: boolean): string;
	    private resolveRec;
	    showTooltips(node: JQuery, noContainer?: boolean): void;
	    prepareForReadReadRender(itemDetails: JQuery): void;
	    private getTooltipType;
	    private getCurrentConfig;
	    private updateTags;
	    private saveTag;
	    private getReplacement;
	}
	//# sourceMappingURL=SmartTextTools.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class UIToolsEnum implements IUIToolsEnum {
	    fixC3ForCopy(copied: JQuery): void;
	    private tooltip_cache;
	    private lastTooltipRequest;
	    private lastTooltipHide;
	    private hidden_tooltip_itemId;
	    private removeTimer;
	    widgetPluginsContainer: IWidgetPluginsContainer;
	    DateTime: IDateTimeUI;
	    BlockingProgress: IBlockingProgressUI;
	    SelectUserOrGroup: ISelectUserOrGroupUI;
	    lt: ILT;
	    Progress: IProgressUI;
	    ThemeSelector: IThemeSelector;
	    constructor();
	    createDropDownButton(defaultText: string, options: IDropDownButtonOption[], isUp: boolean, isJui: boolean, buttonId?: string, disableDefaultButtonClick?: boolean): JQuery;
	    getNiceDialogSize(minWidth: number, minHeight: number): {
	        width: number;
	        height: number;
	    };
	    showSuccess(messageTitle: string, hideAfter?: number): void;
	    hideSuccess(): void;
	    hideError(): void;
	    showError(messageTitle: string, messageBody: string, showForMS?: number): void;
	    /**
	     * show acknowledge dialog
	     * @param ackId: a (unique) value > 0 can be used as unique id to have acknowledge boxes which are shown only one
	     * @param messageTitle
	     * @param dlgTitle
	     */
	    showAck(ackId: number, messageTitle: string, dlgTitle?: string): void;
	    showConfirm(confId: number, messageInfo: {
	        title: string;
	        ok: string;
	        nok?: string;
	        third?: string;
	    }, confFunction: Function, noConfFunction: Function, thirdFunction?: Function): void;
	    confirmSpinningWait(message: string): void;
	    closeConfirmSpinningWait(): void;
	    showTooltip(itemId: string, target: JQuery, event: Event, crossProject?: string): void;
	    showTaskAsTooltip(id: string, title: string, url: string, htmlContent: string, target: JQuery): void;
	    hideTooltip(now?: boolean): void;
	    updateTooltip(): void;
	    spaceMessage(userHasSpaces: boolean, passwordHasSpaces: boolean): string;
	    getSpinningWait(message?: string): JQuery;
	    setEnabled(button: JQuery, enabled: boolean): void;
	    getDisplayError(jqxhr: IJcxhr, textStatus: string, error: string): string;
	    showDialog(dlg: JQuery, title: string, content: JQuery, minMaxWidth: number, minMaxHeight: number, buttons: any[], // DialogButtonOptions 
	    scrolling: UIToolsConstants.Scroll, autoResize?: boolean, maximizeButton?: boolean, close?: Function, open?: Function, resize?: Function, noCloseOnEscape?: boolean): void;
	    showDialogDes({ maximizeButton, noXButton, autoResize, onClose, onOpen, onResize, noCloseOnEscape, minMaxWidth, minMaxHeight, scrolling, content, container, title, buttons }: IDialogOptions): void;
	    pushDialog(thisDialog: JQuery): void;
	    popDialog(thisDialog: JQuery): void;
	    serverHtmlCleanupBlob(content: JQuery): JQueryDeferred<string>;
	    copyBuffer(anchor: JQuery, tooltip: string, content: JQuery, catchKey?: JQuery, onProcessCopy?: Function, btnText?: string, beforeCopy?: Function, afterCopy?: Function): void;
	    toolIcons: string[];
	    getIconOptions(): {
	        id: string;
	        label: string;
	    }[];
	    private colorScheme;
	    calculateColorFrom(input: string): ICIColor;
	    getAvatar(info: string, size: number): JQuery;
	    doCopy(content: JQuery, onProcessCopy: Function): void;
	    private countVisibleDialogs;
	    addChevronSection(container: JQuery, text: string, help: string, open?: boolean): JQuery;
	    private getSlideHeight;
	    private showSlide;
	    private hideSlide;
	    private getItemHtmlFromCacheOrServerAsync;
	    private renderItem;
	    private renderCrossItem;
	    private hideCurrentToolTip;
	    private showTaskAsTooltip_Delayed;
	    private showTooltip_Delayed;
	    enableIf(cb: JQuery, state: boolean, ctrls: JQuery[]): void;
	    addCheckboxD(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function, defaultValue: string): any;
	    addCheckbox(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function): any;
	    /** checkbox will only be checked if explicitly be set to true*/
	    addCheckboxIsTrue(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function): any;
	    /** checkbox will only checked if NOT explicitly be set to false (so unchanged=default=checked) */
	    addCheckboxIsFalse(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function): any;
	    addPassInput(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function, onUnFocus?: Function): any;
	    addTextInput(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function, onFocusOut?: Function, isPass?: boolean, help?: string, readonly?: boolean): any;
	    addRichTextInput(ui: JQuery, params: IRichTextParams, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function, onFocusOut?: Function): any;
	    addDateSelect(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function, help?: string, readonly?: boolean): any;
	    addIconInput(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function, onFocusOut?: Function, isPass?: boolean): any;
	    addDropdownToArray(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, options: IDropdownOption[], grouping: IDropdownGroup[], maxItems: number, create: boolean, sort: boolean, onChange: Function, placeholder?: string): any;
	    addDropdownNumber(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, first: number, last: number, onChange: Function, placeholder?: string, paramsBase?: IDropdownParams): void;
	    addDropdownToValue(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, options: IDropdownOption[], create: boolean, sort: boolean, onChange: Function, placeholder?: string, paramsBase?: IDropdownParams): any;
	    getPageTitle(title: string, getPanel?: () => JQuery, resize?: () => void): JQuery;
	    createConfigLine(lineId: string, linePrefix: string, lineName: string, lineArray: any[], idProp: string, onChangedOrder: () => void, onEdit: (lineId: string) => void, needsEdit: boolean, onDelete: (lineId: string) => void): JQuery;
	    fixArrows(ul: JQuery): void;
	    createConfigAddLine(action: string, onAdd: () => void): JQuery;
	    protected getIndex(lineArray: any[], idProp: string, lineId: string): number;
	    protected moveUp(moveBtn: JQuery): any;
	    protected moveDown(moveBtn: JQuery): any;
	}
	class DateTimeUI implements IDateTimeUI {
	    private userDateTimeFormat;
	    private userDateOnlyFormat;
	    private userTimezone;
	    private simpleDateTimeFormat;
	    private simpleDateFormat;
	    private dateIso8601FromServer;
	    private dateUserFromServer;
	    private serverDateTimeFormat;
	    private serverDateOnlyFormat;
	    private serverTimezone;
	    private simpleCustomerDateTimeFormat;
	    private simpleCustomerDateFormat;
	    constructor();
	    private showControls;
	    private initAsync;
	    private renderDateTimeFormat;
	    private showTime;
	    private setSetting;
	    private renderTimeZone;
	    private renderTimeZoneWarning;
	    private isValidDate;
	    initDateTimeSettings(update?: boolean): JQueryDeferred<{}>;
	    renderHumanDate(date: Date, dateOnly?: boolean): string;
	    renderCustomerHumanDate(date: Date, dateOnly?: boolean): string;
	    renderHumanMonth(dateObj: Date): string;
	    renderDashFormat(dateObj: Date): string;
	    renderSettingControls(options: {
	        table: JQuery;
	        user: string;
	        help: string;
	    }): void;
	    renderSettingDialog(user: string): void;
	    requiresTimeZoneWarning(): boolean;
	    getTimeZoneCTA(): JQuery;
	    getSimpleDateFormat(): string;
	    getSimpleDateFormatMoment(): string;
	    getSimpleDateTimeFormatMoment(): string;
	    private toMoment;
	}
	class BlockingProgressUI implements IBlockingProgressUI {
	    private progressLauncher;
	    private animation;
	    private taskList;
	    private closeIfDone;
	    Init(tasks: IBlockingProgressUITask[], animate?: boolean): void;
	    SetProgress(taskIdx: number, percent: number, newText?: string): void;
	    SetProgressError(taskIdx: number, problem: string): void;
	    private tick;
	}
	class ProgressUI implements IProgressUI {
	    private ProgressCtrlTimer;
	    Init(message: string, warning?: boolean): void;
	    Update(progress: number): void;
	    SuccessHide(message: string, ms: number): void;
	    ErrorHide(message: string, ms: number): void;
	}
	class SelectUserOrGroupUI implements ISelectUserOrGroupUI {
	    dlg: JQuery;
	    showMultiUserSelect(container: JQuery, help: string, selected: string[], title: string, selectFrom: string, selectTo: string, showUsers: boolean, showGroups: boolean, onSelect: (selection: string[]) => void, preSelectedUsers?: XRUserPermissionType[]): void;
	    getUsersInSelection(selection: string[]): string[];
	    getGroupId(group: XRGroupPermissionType | XRGroupType): string;
	    getGroupDisplayNameFromId(groupOrUserId: string): string;
	    isGroup(groupOrUserId: string): boolean;
	    exists(groupOrUserId: string): boolean;
	    showSelectDialog(selected: string[], title: string, selectFrom: string, selectTo: string, showUsers: boolean, showGroups: boolean, onSelect: (selection: string[]) => void, preSelectedUsers?: XRUserPermissionType[]): void;
	    getUserDropDownOptions(showUsers: boolean, showGroups: boolean, preSelectedUsers?: XRUserPermissionType[], possiblyDeletedUserGroupNames?: string): IDropdownOption[];
	    showSingleSelect(control: JQuery, showUsers: boolean, showGroups: boolean, onSelect: (selection: string) => void, preSelectedUsers?: XRUserPermissionType[], possiblyDeletedUsername?: string): void;
	    getAllUsersAndGroups(): JQueryDeferred<IDropdownOption[]>;
	    combinedName(user: XRUserPermissionType): string;
	    showSingleSelectDialog(selected: string, title: string, help: string, showUsers: boolean, showGroups: boolean, onSelect: (selection: string) => void, preSelectedUsers?: XRUserPermissionType[]): void;
	    private resize;
	}
	/** helper to escape < into non-dangerous &lt; */
	class LT implements LT {
	    /** prepares the text for storage in db and readonly display
	     * @param code is the text
	     * @param fieldId (or 0/null) is the field which can have this turned off
	    */
	    forDB(code: string, fieldId: number): string;
	    /** prepares the text for editing in UI
	     * @param code is the text
	     * @param fieldId (or 0/null) is the field which can have this turned off
	    */
	    forUI(code: string, fieldId: number): string;
	}
	//# sourceMappingURL=UITools.d.ts.map

	class URLTools implements IURLTools {
	    getParameterByName(url: string, name: string): string | null;
	    parseUrl(url: String): IMatrixUrlParts;
	}
	//# sourceMappingURL=URLTools.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class XPathTools implements IXPathTools {
	    constructor();
	    get(node: JQuery): string;
	    hardCopy(element: JQuery): string;
	}
	//# sourceMappingURL=XPathTools.d.ts.map

	//# sourceMappingURL=index.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IPanel {
	    destroy: Function;
	    title: string;
	    toggleZen?: Function;
	}
	interface IItemPanelOptions {
	    control: JQuery;
	    itemId: string;
	    changed: Function;
	    cachedItem: IItem;
	}
	class Application {
	    lastMainItemForm: ItemControl;
	    currentPanel: IPanel;
	    protected currentPrintPanel: IPanel;
	    protected saveEnabled: boolean;
	    currentItem: IItem;
	    protected currentItemForcedReadonly: boolean;
	    protected isSaving: boolean;
	    constructor();
	    saveSave(): void;
	    updateMainUI(disabled?: boolean): void;
	    setSaveCancelState(enabled: boolean, quietCancel: boolean): void;
	    editConfiguration(): void;
	    destroyOldControls(): void;
	    refreshLinks(): void;
	    updateControl(watcherInfo: IItemWatched, itemChanged: (needsSave: boolean) => void): void;
	    forceReadonly(itemId: string): void;
	    highlightReferences(): void;
	    createControl(folderType: string, itemId: string, itemChanged?: (needsSave: boolean) => void, cachedItem?: IItem): void;
	    renderErrorControl(control: JQuery, header: string, text: string, contextFrame?: boolean): void;
	    private createItemControlCached;
	    private createItemControl;
	}
	//# sourceMappingURL=Application.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ILineEditorLine {
	    id?: string;
	    key?: number;
	    help: string;
	    explanation?: string;
	    value: string;
	    type: string;
	    options?: IDropdownOption[];
	    multiple?: boolean;
	    groups?: IDropdownGroup[];
	    columns?: ITableControlOptionsColumn[];
	    noEdit?: boolean;
	    readonly?: boolean;
	    hide?: boolean;
	    required?: boolean;
	    extraOptions?: IAnyMap;
	}
	class LineEditorExt {
	    constructor();
	    showDialog(title: string, height: number, input: ILineEditorLine[], onOk: (update: ILineEditorLine[]) => boolean, width?: number, showUserAndGroupsSelectWithDialog?: (container: JQuery, showUsers: boolean, showGroups: boolean, help: string, empty: string, selected: string[], dialogTitle: string, onSelect: (selection: string[]) => void) => void): JQueryDeferred<any>;
	    static mapToKeys(results: ILineEditorLine[]): ILineEditorLine[];
	    private setEnabled;
	    private getValue;
	    private isEnabled;
	}
	//# sourceMappingURL=ILineEditor.d.ts.map

	interface IValidationSpec {
	    validationFunction?: JsonEditorValidation | null | any;
	    schema?: string;
	    apiHelp?: string;
	}
	class JsonEditor {
	    constructor();
	    showDialog(title: string, value: string, onOk: (update: string) => void, semanticValidate?: IValidationSpec): void;
	}
	//# sourceMappingURL=JsonEditor.d.ts.map

	function InitializeUI(): void;
	//# sourceMappingURL=initialize.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IItemControlOptions extends IBaseControlOptions {
	    id?: string;
	    control?: JQuery;
	    type?: string;
	    item?: IItemGet;
	    dummyData?: {};
	    parent?: string;
	    changed?: Function;
	    isForm?: boolean;
	    isItem?: boolean;
	    isPrint?: boolean;
	    isHistory?: number;
	    isDialog?: boolean;
	    canEdit?: boolean;
	    canEditLabels?: boolean;
	    canEditTitle?: boolean;
	}
	interface ILinkType {
	    type: string;
	    name?: string;
	    buttonName?: string;
	    folder?: boolean;
	    import?: boolean;
	    required?: boolean;
	}
	class ItemControl {
	    private settings;
	    private defaultOptions;
	    private resizeItTimer;
	    controls: IControlDefinition[];
	    private _title;
	    private _riders;
	    private _outerbody;
	    private _body;
	    private config;
	    private title;
	    private links;
	    private orginalControlState;
	    private startEdit;
	    private duringFill;
	    private restrictUnlockTo;
	    static lastTab: IStringNumberMap;
	    constructor(options: IItemControlOptions);
	    destroy(): void;
	    getValues(update: IItemPut, latest?: IItemGet): IItemPut;
	    saveAsync(category: string, auditAction: string, valueOverwrites?: IItemGet): JQueryDeferred<IDBParent | IItemGet>;
	    addMove(itemId: string, newVersion: number): void;
	    resizeItem(force?: boolean): void;
	    refreshLinks(): void;
	    fillControls(): void;
	    needsSave(): boolean;
	    hasTitle(): boolean;
	    updateItem(newItem: IItem): void;
	    setFieldValue(fieldId: number, newValue: string): void;
	    getFieldValue(fieldId: number): any;
	    getCurrentTitle(): any;
	    setViewers(viewers: IItemWatched): void;
	    getControls(fieldType?: string): JQuery[];
	    /** returns (first) control with a given title */
	    getControlByName(name: string): JQuery;
	    /** returns control with a given id */
	    getControlById(fieldId: number): JQuery;
	    wasUpdated(itemId: string, historyLength: number): boolean;
	    private addTabs;
	    private showTab;
	    private allowSectionClose;
	    resizeIt(forceRedraw?: boolean): void;
	    private needsSaveImpl;
	    private getFieldType;
	    private sendNeedsSave;
	    private renderActionButtonsReport;
	}
	//# sourceMappingURL=ItemForm.d.ts.map

	/// <reference types="jquery" />
	interface IShortcut {
	    disableEdge: boolean;
	    disableSafari: boolean;
	    withCtrl: boolean;
	    keyCode: number;
	    key: string;
	    help: string;
	    category: string;
	    inElement: string[];
	    notInElement: string[];
	    fct: (event: JQueryEventObject, that?: KeyboardShortcuts) => void;
	}
	interface IShortCutOverWrite {
	    orgCtrl: boolean;
	    newCtrl: boolean;
	    orgKey: string;
	    newKey: string;
	    orgKeyCode: number;
	    newKeyCode: number;
	}
	class KeyboardShortcuts {
	    private lastKeyDown;
	    private shortCuts;
	    private documentSectionIdx;
	    constructor();
	    private defineShortcuts;
	    print(): void;
	    resetCustomKeys(): void;
	    setKey(orgCtrl: boolean, newCtrl: boolean, orgKey: string, newKey: string): void;
	    setKeyCode(orgCtrl: boolean, newCtrl: boolean, orgKeyCode: number, newKeyCode: number): void;
	    addCtrlShortcut(key: string, category: string, help: string, inElement: string[], notInElement: string[], fct: (event: JQueryEventObject, that?: KeyboardShortcuts) => void, disableEdge: boolean, disableSafari: boolean): void;
	    addShortcut(key: string, category: string, help: string, inElement: string[], notInElement: string[], fct: (event: JQueryEventObject, that?: KeyboardShortcuts) => void, disableEdge: boolean, disableSafari: boolean): void;
	    addCtrlShortcutCode(keyCode: number, category: string, key: string, help: string, inElement: string[], notInElement: string[], fct: (event: JQueryEventObject, that?: KeyboardShortcuts) => void, disableEdge: boolean, disableSafari: boolean): void;
	    addShortcutCode(keyCode: number, category: string, key: string, help: string, inElement: string[], notInElement: string[], fct: (event: JQueryEventObject, that?: KeyboardShortcuts) => void, disableEdge: boolean, disableSafari: boolean): void;
	    init(): void;
	    private isGoodTarget;
	    private isDialogOpen;
	    private static isDialogOpen;
	    private showInReview;
	    private showZen;
	    private save;
	    static doSave(): void;
	    private createSelect;
	    private toggleSections;
	    private delete;
	    private initToggleSection;
	    private toggleSection;
	    private downloadDocument;
	    private focusSearch;
	    private help;
	}
	//# sourceMappingURL=KeyboardShortcuts.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface INavigationBar {
	    disableTabs: boolean;
	    tabs: INavigationBarTab[];
	}
	interface INavigationBarRuntime extends INavigationBar {
	    tabs: INavigationBarTabRuntime[];
	}
	interface INavigationBarTab {
	    name: string;
	    icon: string;
	    mode: TabMode;
	    other: string[];
	}
	interface INavigationBarTabRuntime extends INavigationBarTab {
	    node?: JQuery;
	    trees?: JQuery[];
	    isActive?: boolean;
	}
	interface IStringTabMap {
	    [key: string]: INavigationBarTab;
	}
	enum TabMode {
	    ShowAsDefault = 1,
	    HideAsDefault = 2
	}
	class NavigationBar {
	    static navbarWidth: number;
	    protected rootTabMap: IStringTabMap;
	    protected workFolders: string[];
	    protected enabled: boolean;
	    protected bar: INavigationBarRuntime;
	    protected helpButton: JQuery;
	    static getDefaultBar(project: string): INavigationBar;
	    constructor();
	    init(): void;
	    isEnabled(): boolean;
	    isInCurrentTab(itemId: string): boolean;
	    getCurrentTab(): string;
	    countPerTab(itemIds: string[]): ISearchCountsTab[];
	    activateItemsTab(itemId: string): void;
	    updateNotificationCounters(): void;
	    protected drawNavigationBar(): void;
	    setWorkFolders(folders: string[]): void;
	    protected resizeBarItems(): void;
	    protected createTabs(): void;
	    switchTab(tabName: string): boolean;
	    protected activateTab(tab: INavigationBarTabRuntime): void;
	    private getTab;
	}
	var NavBar: NavigationBar;
	function initialize(): void;
	//# sourceMappingURL=NavigationBar.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IUIMap {
	    [key: string]: JQuery;
	}
	interface IKeyTitle {
	    key: string;
	    title: string;
	}
	class ListView {
	    private control;
	    private hits;
	    private selected;
	    private projectWarn;
	    private panel;
	    private sRoot;
	    private uRoot;
	    private nodes;
	    private noSelected;
	    constructor(panel: ProjectView);
	    show(): void;
	    hide(): void;
	    setSelectedItems(selectedItems: string[]): void;
	    redrawItem(itemId: string): void;
	    filterList(match: string): ISearchCounts;
	    showSearchResults(serverSearchResults: string[]): ISearchCounts;
	    selectAll(setSelected: boolean): void;
	    private getTitleFromTree;
	    private showNodes;
	    private createNode;
	    getFancyRootNode(): Fancytree.FancytreeNode;
	    getFancyTree(): Fancytree.Fancytree;
	}
	//# sourceMappingURL=ProjectList.d.ts.map

	/// <reference types="matrixrequirements-type-declarations" />
	interface ISearchCounts {
	    current: number;
	    total: number;
	    perTab: ISearchCountsTab[];
	}
	interface ISearchCountsTab {
	    tabName: string;
	    count: number;
	}
	class ProjectTree {
	    private hits;
	    private allHits;
	    private lastFilterFct;
	    private panel;
	    private canBeFiltered;
	    private delayedFilter;
	    private lt;
	    private lit;
	    private legacyColors;
	    constructor(panel: ProjectView, canBeFiltered: boolean);
	    show(): void;
	    hide(): void;
	    setSelectedItems(selectedItems: string[]): void;
	    applyFilter(): void;
	    redrawItem(itemId: string): void;
	    openTree(key: string): void;
	    closeTree(key: string): void;
	    selectAll(isSelected: boolean): void;
	    selectChildren(node: Fancytree.FancytreeNode): void;
	    unSelectChildren(node: Fancytree.FancytreeNode): void;
	    unselectParents(node: Fancytree.FancytreeNode): void;
	    setHideMismatches(hideMismatches: boolean): void;
	    forcePartial(): void;
	    filterTree(match?: string): ISearchCounts;
	    removeFilter(): number;
	    showSearchResults(serverSearchResults: string[]): ISearchCounts;
	    getFancyRootNode(): Fancytree.FancytreeNode;
	    getFancyTree(): Fancytree.Fancytree;
	    getNode(key: string): Fancytree.FancytreeNode;
	    removeNode(key: string): void;
	    setTitle(key: string, title: string): boolean;
	    select(key: string): void;
	    isSelected(key: string): boolean;
	    updateRec(item: IDB): void;
	    insertRec(parentKey: string, item: IDB): void;
	    moveNode(parentId: string, itemId: string, position: number): void;
	    addNode(treeNode: Fancytree.FancytreeNode, item: IDB, position?: {
	        at: number;
	    }): Fancytree.FancytreeNode;
	    treeFromDb(dbTree: IDB[]): void;
	    updateItemIsUnselected(itemId: string, isUnselected: boolean): boolean;
	    updateNotificationCounters(): void;
	    private addNodes;
	}
	//# sourceMappingURL=ProjectTree.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class ProjectView implements IBaseControl {
	    settings: IProjectPanelControlOptions;
	    viewModeSelector: ViewModeSelector;
	    searchBox: SearchBox;
	    projectTree: ProjectTree;
	    listView: ListView;
	    prefixCategory: string;
	    tree: JQuery;
	    private _root;
	    needsLatest: boolean;
	    constructor(control: JQuery);
	    init(options: IBaseControlOptions): void;
	    private forceSelectChildren;
	    hasChanged(): boolean;
	    getValue(): IReference[];
	    setValue(selectedItems: string[]): void;
	    toggleSelection(selected: boolean): void;
	    destroy(): void;
	    resizeItem(): void;
	    clearFilter(): void;
	    filterStatusChanged(itemId: string): void;
	    insertNode(parentKey: string, item: IDB, position: {
	        at: number;
	    }): void;
	    moveNode(parentId: string, itemId: string, position: number): void;
	    refresh(): void;
	    updateRec(item: IDB): void;
	    insertRec(parentKey: string, item: IDB): void;
	    updateTopPosition(top: number): void;
	    appendController(controller: JQuery): void;
	    render(subtree?: number, itemId?: string, item?: IDB): void;
	    openTree(key: string): void;
	    closeTree(key: string): void;
	    setTitle(key: string, title: string): void;
	    removeNode(key: string): void;
	    select(key: string): void;
	    isSelected(key: string): boolean;
	    updateItemIsUnselected(itemId: string, isUnselected: boolean): void;
	    updateNotificationCounters(): void;
	    private saveSelection;
	    private calculateDropTarget;
	}
	//# sourceMappingURL=ProjectView.d.ts.map

	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IProjectPanelControlOptions extends IBaseControlOptions {
	    parameter?: {
	        readonly?: boolean;
	        placeholder?: string;
	        maxItems?: number;
	        options?: any;
	    };
	    noAnimation?: boolean;
	    dragAndDrop?: boolean;
	    controlState?: ControlState;
	    highlight?: boolean;
	    canFilter?: boolean;
	    isConfigSearch?: boolean;
	    serverSearch?: boolean;
	    expand?: number;
	    tree?: IDB[];
	    tooltips?: boolean;
	    collectionChanged?: (count: number) => void;
	    selectionChanged?: (id: string) => void;
	    onExpand?: (id: string) => void;
	    dropCallback?: Function;
	    crossProject?: string;
	    selectedItems?: IReference[];
	    selectMode?: SelectMode;
	    glueToBottom?: boolean;
	    isMainTree?: boolean;
	    autoScroll?: boolean;
	}
	enum SelectMode {
	    /*** DO NOT CHANGED numbers use from baseControl */
	    none = 0,
	    items = 1,
	    folders = 2,
	    singleItem = 3,
	    singleFolder = 4,
	    independent = 5,
	    auto = 6,
	    independentAuto = 7,
	    autoPrecise = 8
	}
	interface MyNodeData extends Fancytree.FancytreeNode {
	    cstrender?: boolean;
	    background?: string;
	    shortTitle?: string;
	    border?: string;
	    type?: string;
	    icon?: string;
	    hideCheckbox?: boolean;
	    isUnselected?: boolean;
	    extraStyle?: string;
	    classes?: string[];
	}
	interface MyNode extends Fancytree.FancytreeNode {
	    selected?: boolean;
	    unselectable?: boolean;
	    ul?: JQuery;
	    span?: JQuery;
	    type?: string;
	    subMatch?: boolean;
	    shortTitle?: string;
	}
	interface MyDDData {
	    otherNode?: MyNode;
	    hitMode?: string;
	}
	interface MyFancytree extends Fancytree.Fancytree {
	    options?: Fancytree.FancytreeOptions;
	}
	interface MyFancytreeOption extends Fancytree.FancytreeOptions {
	    filter?: {
	        mode?: string;
	    };
	}
	enum SearchState {
	    NoSearch = 0,
	    FilterDone = 1,
	    ServerRunning = 2,
	    ServerDone = 3
	}
	enum SearchUpdate {
	    inserted_node = 1,
	    updated_rec = 2,
	    filter_status_changed = 3,
	    title_changed = 4,
	    item_dropped = 5
	}
	interface IVizMode {
	    uid: string;
	    icon: string;
	    text: string;
	    mainTree: boolean;
	    asList: boolean;
	    hide: boolean;
	    check: boolean;
	    expand: boolean;
	}
	interface IDelayedAction {
	    type: string;
	    expression: string;
	}
	//# sourceMappingURL=ProjectViewDefines.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class SearchBox {
	    private spinnerServerSearch;
	    private currentStatus;
	    private currentResults;
	    private currentSearchExpression;
	    private delayedAction;
	    private panel;
	    private filterHighlight_timeout;
	    private filterSearch_timeout;
	    private searchMetaInfo;
	    private isEnabled;
	    private isConfigSearch;
	    private savedSearchIndex;
	    constructor(panel: ProjectView);
	    updateHeights(): void;
	    renderSearchField(filter: JQuery, enableServerSearch: boolean, highlightResults: boolean, isConfigSearch: boolean): void;
	    private setPrefixCategory;
	    render(): void;
	    protected showMatches(matches: ISearchCounts, localSearch: boolean): void;
	    resetSearch(): void;
	    private getMiracleControl;
	    addToSavedSearch(str: string, filter: JQuery): void;
	    getSavedSearches(): string[];
	    private filterAgainExpression;
	    private filter;
	    private filterAgain;
	    private search;
	    private doDelayed;
	    private showSearchStatus;
	    private updateSearchStatusHeights;
	}
	//# sourceMappingURL=SearchBox.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class ViewModeSelector {
	    private isMainTree;
	    private btn;
	    private img;
	    private searchVizModes;
	    private panel;
	    constructor(panel: ProjectView);
	    private selectFoldersOnly;
	    getVizModeControl(onChange: Function): JQuery;
	    setEnabled(enabled: boolean): void;
	    showAsList(): boolean;
	    hideMismatches(): boolean;
	    isExpandTree(): boolean;
	    private getMode;
	    private setMode;
	}
	//# sourceMappingURL=ViewModeSelector.d.ts.map

	class Zen {
	    private mainItem;
	    private isMobile;
	    constructor(item: IItem);
	    stopZen(): void;
	    toggleZen(): void;
	    protected showVersion(itemVersionId: string, actualId: string, actualTitle: string): void;
	    protected showCurrentVersion(localChanges: IRestParam): void;
	    private showZen;
	    private applyZenMode;
	    private makeZen;
	    private renderItemMeat;
	}
	//# sourceMappingURL=Zen.d.ts.map

	//# sourceMappingURL=index.d.ts.map

	function InitializeComponents(): void;
	//# sourceMappingURL=initialize.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ITableParams {
	    canBeModified?: boolean;
	    create?: boolean;
	    showLineNumbers?: boolean;
	    maxRows?: number;
	    fixRows?: number;
	    readonly_allowfocus?: boolean;
	    columns: any;
	    onCellChanged?: Function;
	}
	interface IBaseControl {
	    getValue: (latestItem?: IItemGet) => any;
	    hasChanged: () => boolean;
	    resizeItem: (width?: number, forceRedraw?: boolean) => void;
	    destroy: () => void;
	    highlightReferences?: () => void;
	    getText?: Function;
	    getValueRaw?: Function;
	    setValue?: Function;
	    updateItem?: Function;
	    refreshLinks?: Function;
	    linksToCreate?: Function;
	    labelsToSet?: Function;
	    redraw?: Function;
	    refresh?: Function;
	    needsLatest: boolean;
	    requiresContent?: () => boolean;
	    disableDelayedShow?: boolean;
	}
	interface IBaseControlOptions {
	    [key: string]: any;
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldType?: string;
	    fieldId?: number;
	    valueChanged?: Function;
	    parameter?: IFieldParameter;
	    fieldValue?: any;
	    fieldValueJSON?: {};
	    isItem?: boolean;
	    item?: IItem;
	    isForm?: boolean;
	    isPrint?: boolean;
	    isTooltip?: boolean;
	    id?: string;
	    isHistory?: number;
	    type?: string;
	    isFolder?: boolean;
	    requiresContent?: boolean;
	}
	abstract class BaseControl implements IBaseControl {
	    protected _root: JQuery;
	    disableDelayedShow: boolean;
	    needsLatest: boolean;
	    constructor(control: JQuery);
	    protected createHelp(settings: IBaseControlOptions): JQuery;
	    abstract getValue(): any;
	    abstract hasChanged(): boolean;
	    abstract resizeItem(newWidth?: number, force?: boolean): void;
	    abstract destroy(): void;
	}
	//# sourceMappingURL=BaseControl.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IGenericTableRow {
	    [key: string]: string;
	}
	type IGenericTableData = IGenericTableRow[];
	class PrintProjectUIMods implements IPlugin {
	    isDefault: boolean;
	    static CAT_TABLE: string;
	    static CAT_SEQUENTIAL: string;
	    static CAT_TRACES: string;
	    static CAT_BLOCK: string;
	    static CAT_FIELDS: string;
	    static CAT_SUBTABLE: string;
	    static TYPE_TOP: string[];
	    static TYPE_HIERARCHY: string[];
	    static TYPE_FORMATTER: string[];
	    static MENU_FIELD_AND_LABEL: string[];
	    static MENU_CSS: string[];
	    static MENU_ITEM: string[];
	    static MENU_RECURSION: string[];
	    static getMenu(): string;
	    static cssMenus: string[];
	    static addTinyMenus(editor: any, valueChanged: Function, category: string): void;
	    static buildMenu(fcts: any, editor: any): any[];
	    private _item;
	    private _jui;
	    private codeFieldId;
	    private enabledProject;
	    initItem(item: IItem, jui: JQuery): void;
	    initProject(): void;
	    subscribe(): void;
	    private saveToInstance;
	    private itemsToDelete;
	    private markDeleted;
	    private isOnlyRecursion;
	    private convertPrintToJson;
	    private getTableBefore;
	    private getTableAfter;
	    private getTable;
	    private rowBefore;
	    private rowAfter;
	    private getSubTableCells;
	    private getTableItemRow;
	    private getTableItemRowSubtable;
	    private toPrintScript;
	    private getBeforeAfter;
	    private toJSON;
	    private toXML;
	    private toText;
	}
	function initialize(): void;
	//# sourceMappingURL=PrintProjectUIMods.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ICascadingSelectOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string;
	    valueChanged?: Function;
	    parameter?: {
	        cascadingOptions?: ICascadingSelect;
	    };
	}
	interface ICascadingOptionSelector {
	    groupId: string;
	    groupValue: string;
	}
	class CascadingSelect extends BaseControl {
	    private settings;
	    private optionsChain;
	    constructor(control: JQuery);
	    init(options: ICascadingSelectOptions): void;
	    hasChanged(): boolean;
	    getValue(): string;
	    destroy(): void;
	    resizeItem(): void;
	    getGuid(): string;
	    private completeChain;
	    private getGroup;
	    private renderControls;
	    private updateControls;
	}
	//# sourceMappingURL=cascadingSelect.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ICheckBoxControlOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string;
	    valueChanged?: Function;
	    parameter?: {
	        inlineHelp?: string;
	        initialContent?: boolean;
	    };
	}
	class CheckBoxImpl extends BaseControl {
	    private settings;
	    constructor(control: JQuery);
	    init(options: ICheckBoxControlOptions): void;
	    hasChanged(): boolean;
	    getValue(): any;
	    setValue(value: boolean): void;
	    destroy(): void;
	    resizeItem(): void;
	}
	//# sourceMappingURL=checkBox.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IColorPickerParams {
	    externalHelp?: string;
	    readonly?: boolean;
	    allowResize?: boolean;
	    requiresContent?: boolean;
	    inlineHelp?: string;
	    initialContent?: string;
	    hideFullscreen?: boolean;
	}
	interface IColorPickerControlOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string;
	    valueChanged?: Function;
	    lostFocus?: Function;
	    parameter?: IColorPickerParams;
	}
	class ColorPickerImpl extends BaseControl {
	    private settings;
	    private lastValueChanged;
	    private _editor;
	    private doesRequireContent;
	    constructor(control: JQuery);
	    init(options: IColorPickerControlOptions): void;
	    hasChanged(): boolean;
	    getValue(): string;
	    requiresContent(): boolean;
	    refresh(): void;
	    setValue(newValue: string, reset?: boolean): void;
	    destroy(): void;
	    resizeItem(): void;
	    private valueChanged;
	}
	//# sourceMappingURL=colorPicker.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IDateSelectParams {
	    allowClear?: boolean;
	    readonly?: boolean;
	    vertical?: string;
	    horizontal?: string;
	    minDate?: Date;
	    requiresContent?: boolean;
	    initialContent?: boolean;
	    inlineHelp?: string;
	}
	interface IDateSelectOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string;
	    valueChanged?: Function;
	    parameter?: IDateSelectParams;
	}
	class DateSelectImpl extends BaseControl {
	    private settings;
	    private data;
	    private lastSelectedDate;
	    private ctrl;
	    private doesRequireContent;
	    constructor(control: JQuery);
	    init(options: IDateSelectOptions): void;
	    hasChanged(): boolean;
	    getValue(): string;
	    setValue(date: string): void;
	    destroy(): void;
	    resizeItem(): void;
	    requiresContent(): boolean;
	    private setDateFromString;
	    static getDateFromString(dateStr: string): Date;
	    private valueChanged;
	    private renderHuman;
	}
	//# sourceMappingURL=dateselect.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ISignaturesInfo {
	    signatures: ISignature[];
	    missing: string[];
	    given: string[];
	    signatureDate: {
	        [key: string]: string;
	    };
	    missingSignatures: number;
	    givenSignatures: number;
	    needSignature: boolean;
	    hasSignature: boolean;
	    isTemplate: boolean;
	}
	abstract class DocBaseImpl extends BaseControl {
	    constructor(control: JQuery);
	    static readSignatureInfo(item: IItemGet): ISignaturesInfo;
	    static isMeTest(user: string): boolean;
	    protected isMe(user: string): boolean;
	}
	//# sourceMappingURL=docBase..d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IDocFilterOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string;
	    valueChanged?: Function;
	    parameter?: {};
	}
	class DocFilterImpl extends BaseControl {
	    private settings;
	    constructor(control: JQuery);
	    init(options: IDocFilterOptions): void;
	    hasChanged(): boolean;
	    getValue(): any;
	    setValue(): void;
	    destroy(): void;
	    resizeItem(): void;
	}
	//# sourceMappingURL=docFilter.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IDocReviewOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string;
	    valueChanged?: Function;
	    parameter?: {
	        hideReview?: boolean;
	        allowModifyOthers?: boolean;
	    };
	}
	interface IReviewData {
	    inlineComments: IInlineComment[];
	}
	interface IInlineComment {
	    ranges: IInlineCommentRange[];
	    quote: string;
	    text: string;
	    id: string;
	    changedBy: string;
	    createdBy: string;
	    changedAt: string;
	    createdAt: string;
	    highlights?: JQuery[];
	}
	interface IInlineCommentRange {
	    start: string;
	    startOffset: number;
	    end: string;
	    endOffset: number;
	}
	interface IAnnotationChange {
	    action: string;
	    value: IInlineComment;
	}
	interface ISignature {
	    orgid: string;
	    userid: string;
	    signDate: string;
	    signDateCustomer?: string;
	    signaturefileid: string;
	}
	interface ISignatureChange {
	    action: string;
	    value: string;
	}
	class DocReviewImpl extends DocBaseImpl {
	    private settings;
	    private data;
	    private annotationRecording;
	    private commentSortedBy;
	    private uiCtrl;
	    private reportBuffer;
	    constructor(control: JQuery);
	    init(options: IDocReviewOptions): void;
	    hasChanged(): boolean;
	    getValue(currentItem?: IItemGet): string;
	    destroy(): void;
	    resizeItem(): void;
	    private applyRecordings;
	    private parseValue;
	    /********************************************
	     
	     ******************************************** */
	    protected reviewButton(signatureStatus: ISignaturesInfo): void;
	    recordAnnotation(action: string, annotation: IInlineComment): void;
	    protected showReviewComments(canEdit: boolean, comments: IInlineComment[]): void;
	    private showReportWithComments;
	    private showComments;
	    sortCommentsBy(sortBy: number): void;
	}
	class HTMLAnnotator {
	    private annotationsBefore;
	    private annotationsAfter;
	    private commentSortedBy;
	    constructor();
	    hasChanged(): boolean;
	    getValue(): string;
	    destroy(): void;
	    resizeItem(): void;
	    /**
	     * this function merges annotations done locally with the changes happened in parallel on the server.
	     *
	     * @param serverVersion these are the annotations last saved (by another user)
	     * @param localBefore these are the ones which existed locally, before starting to edit
	     * @param localAfter  these are the ones which existed locally when user saves
	     * @returns
	     */
	    static mergeAnnotation(serverVersion: string, localBefore: string, localAfter: string): string;
	    static hasAnnotations(reviewComments: string): boolean;
	    showReviewDialog(canEdit: boolean, itemId: string, version: number, data: IItem, reviewComments: string, isSuperUser: boolean, onUpdate: Function): void;
	    protected recordAnnotation(action: string, annotation: IInlineComment): void;
	    private showHTMLWithComments;
	    private showCommentList;
	    private sortCommentsBy;
	}
	//# sourceMappingURL=docReview.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IDocSignOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string;
	    valueChanged?: Function;
	    parameter?: {
	        inlineHelp?: string;
	    };
	}
	interface ISignData {
	    rejectComments: ISignComment[];
	    acceptComments: ISignComment[];
	}
	interface ISignComment {
	    user: string;
	    comment: string;
	    createdAt: string;
	}
	interface ISignature {
	    orgid: string;
	    userid: string;
	    signDate: string;
	    signDateCustomer?: string;
	    signaturefileid: string;
	}
	interface ISignatureChange {
	    action: string;
	    value: string;
	}
	class DocSignImpl extends DocBaseImpl {
	    protected settings: IDocSignOptions;
	    private data;
	    private uiCtrl;
	    private static iHaveSignature;
	    private static iUser;
	    constructor(control: JQuery);
	    init(options: IDocSignOptions): void;
	    hasChanged(): boolean;
	    getValue(currentItem?: IItemGet): string;
	    destroy(): void;
	    resizeItem(): void;
	    private parseValue;
	    protected addSignMeaning(uiCtrl: JQuery): void;
	    protected renderSignatureTable(signatureInfo: ISignaturesInfo, uiCtrl: JQuery, notSigned: string, youSign: string, signedAt: string): void;
	    protected removeNotifications(itemId: string, user?: string): void;
	    protected removeNotificationsRec(toDelete: XRTodo[], idx: number): void;
	    protected getUserId(login: string): number;
	    protected showSignatureField(signatureInfo: ISignaturesInfo, uiCtrl: JQuery, columnSize: number, btnName: string, onSign: (pwd: string) => void, templateApproval: boolean): void;
	    protected replaceSignButton(): void;
	    protected rejectSignWithPass(): void;
	    protected rejectSign(): void;
	    protected signFromDropdown(meaning?: string): void;
	    protected signDocument(pwd: string, meaning?: string): void;
	}
	//# sourceMappingURL=docSign.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IDropdownParams {
	    readonly?: boolean;
	    placeholder?: string;
	    maxItems?: number;
	    options?: IDropdownOption[];
	    groups?: IDropdownGroup[];
	    create?: boolean;
	    sort?: boolean;
	    optionSetting?: string;
	    splitHuman?: boolean;
	    inlineHelp?: string;
	    requiresContent?: boolean;
	    maxHeight?: string;
	    printProcessor?: {
	        dropdownOptions?: string;
	        parameterField?: string;
	    };
	    width?: string;
	    initialContent?: string;
	}
	interface IDropDownControlOptions extends IBaseControlOptions {
	    controlState: any;
	    parameter?: IDropdownParams;
	    noMarkup?: boolean;
	}
	interface IUserSelect extends IDropDownControlOptions {
	    parameter?: {
	        readonly?: boolean;
	        placeholder?: string;
	        maxItems?: number;
	        showGroups?: boolean;
	        showUsers?: boolean;
	    };
	    options?: IDropdownOption[];
	    create?: boolean;
	}
	class DropdownImpl extends BaseControl {
	    private settings;
	    private rawValue;
	    private ctrl;
	    private human;
	    private duringInit;
	    private beforeDisplay;
	    private doesRequireContent;
	    constructor(control: JQuery);
	    init(options: IDropDownControlOptions): void;
	    getValueRaw(): string;
	    hasChanged(): boolean;
	    getValue(): string;
	    getText(): string;
	    destroy(): void;
	    resizeItem(): void;
	    requiresContent(): boolean;
	    setValue(newValueDirty: string, force?: boolean): void;
	    private valueChanged;
	    private parseValue;
	}
	//# sourceMappingURL=dropdown.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IErrorControlOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string;
	    valueChanged?: Function;
	    parameter?: {};
	}
	class ErrorControlImpl extends BaseControl {
	    private settings;
	    constructor(control: JQuery);
	    init(options: IErrorControlOptions): void;
	    getValue(): void;
	    hasChanged(): boolean;
	    destroy(): void;
	    resizeItem(): void;
	}
	//# sourceMappingURL=errorControl.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IFileManagerParams {
	    readonly?: boolean;
	    replace?: ReplaceOptions;
	    autohide?: boolean;
	    hidden?: boolean;
	    manualOnly?: boolean;
	    titleBarControl?: JQuery;
	    extensions?: string[];
	    textTodo?: string;
	    single?: boolean;
	    hideNoFileInfo?: boolean;
	    maxWidth?: number;
	    naked?: boolean;
	}
	interface IFileManagerOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string;
	    valueChanged?: Function;
	    parameter?: IFileManagerParams;
	    processExternally?: (fileList: FileList) => boolean;
	    id?: string;
	}
	type ReplaceOptions = "never" | "name" | "name_auto" | "type" | "type_auto";
	class FileManagerImpl extends BaseControl {
	    private settings;
	    private data;
	    private fileInfo;
	    private dragCounter;
	    constructor(control: JQuery);
	    init(options: IFileManagerOptions): void;
	    hasChanged(): boolean;
	    getValue(): string;
	    setValue(files: string): void;
	    destroy(): void;
	    resizeItem(): void;
	    addLinks(uploads: IUploadedFileInfo[]): void;
	    populateFromRichtext(): boolean;
	    private showFiles;
	    private deleteFile;
	    private deleteFiles;
	    private uploadFiles;
	    private badExtension;
	    private uploadFilesUser;
	    private onDrop;
	}
	//# sourceMappingURL=fileManager.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IGateControlControlOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string;
	    valueChanged?: Function;
	    parameter: IGate;
	}
	/** define behavior of a gate */
	interface IGate {
	    /** define different reviews/approvals which need to be made for gate to pass */
	    lines: IGateLine[];
	    /** if set to true the user can add some comment when approving */
	    hasComments: boolean;
	    /** defines behavior when all reviews/approvals have passed */
	    allPass: {
	        /** locks the fields above the gate if all reviews/approvals have passed */
	        lockAbove: boolean;
	        /** enables the fields below the gate if all reviews/approvals have passed */
	        enableBelow: boolean;
	        /** sets the specified labels if all reviews/approvals have passed */
	        setLabels?: string[];
	        /** hides the tools menu if all reviews/approvals have passed */
	        hideMenu?: boolean | string[];
	        /** hides the reference view if all reviews/approvals have passed */
	        hideReferences?: boolean;
	        /** locks the title if all reviews/approvals have passed */
	        lockTitle?: boolean;
	        /** disables delete if all reviews/approvals have passed */
	        lockDelete?: boolean;
	        notifyEmailPassed?: string[];
	        notifyPassed?: string[];
	        notifyFirstReject?: string[];
	    };
	    notifyFirstReject?: string[];
	    /** text to show in printed reports if all reviews/approvals have passed */
	    printAllPassed: string;
	    /** text to show in printed reports if reviews/approvals has been rejected */
	    printNotPassed: string;
	    /** text to show in printed reports if reviews/approvals still need to be finished */
	    printTodo: string;
	    /** button allowing to approve a gate, leave empty ("") to hide*/
	    pass: string;
	    /** button allowing to reject a gate, leave empty  ("") to hide*/
	    fail: string;
	    /** text to show instead of pass button if gate was approved, leave empty ("") to use same as pass, set to "hide" to hide the button in this state*/
	    passPassed?: string;
	    /** text to show instead of pass button if gate was rejected, leave empty ("") to use same as pass, set to "hide" to hide the button in this state */
	    passFailed?: string;
	    /** text to show instead of fail button if gate was approved, leave empty ("") to use same as fail, set to "hide" to hide the button in this state */
	    failPassed?: string;
	    /** text to show instead of fail button if gate was rejected, leave empty ("") to use same as fail, set to "hide" to hide the button in this state */
	    failFailed?: string;
	    /** ask for signature to approve a gate */
	    requireSignature?: boolean;
	    /** ask for signature to reject a gate */
	    requireSignatureReject?: boolean;
	    /**  reset gate if any of these fields change. enter field names or ids  */
	    reset?: string[];
	    readOnly?: boolean;
	    /** legacy mode (don't show in UI and printed documents who approved/rejected a line) */
	    hideApprovalInfo?: boolean;
	    /** show a line per given signature when printing */
	    printSignaturesApproved?: boolean;
	    /** show a line per missing signature when printing */
	    printSignaturesRequired?: boolean;
	    /** show a line per rejected signature when printing */
	    printSignaturesRejected: boolean;
	    /**   if set to true only allow a user to sign only one line in a gate  */
	    strictSign?: boolean;
	}
	interface IGateLine {
	    /** a unique id for the line */
	    id: string;
	    /** define which users can approve */
	    users: string[];
	    /** info to show before user (e.g. to hint what the approval means) */
	    hint?: string;
	    /** info to show before user (... once approved) */
	    hintDone?: string;
	    /** info to show before user (... if rejected) */
	    hintRejected?: string;
	}
	interface IGateStatus {
	    passed: boolean;
	    failed: boolean;
	    lines: IGateStatusLine[];
	    search: string;
	}
	interface IGateStatusLine {
	    id: string;
	    passed: boolean;
	    failed: boolean;
	    user: string;
	    date: string;
	    dateUser: string;
	    comment: string;
	}
	class GateControlImpl extends BaseControl {
	    private settings;
	    constructor(control: JQuery);
	    private currentValue;
	    private uiCtrl;
	    private triggerUpdate;
	    private allPassed;
	    init(options: IGateControlControlOptions): void;
	    private postSave;
	    hasChanged(): boolean;
	    getValue(): string;
	    setValue(): void;
	    destroy(): void;
	    resizeItem(): void;
	    labelsToSet(): string[];
	    changed(fieldId: number, fieldName: string): void;
	    private formatUserLogin;
	    private showControl;
	    private askForSignature;
	    private setStatus;
	    private update;
	    private setColor;
	    private getLine;
	    private parseFieldValue;
	    private updateOverallStatus;
	}
	//# sourceMappingURL=gateControl.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IHiddenOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string;
	    valueChanged?: Function;
	    parameter?: {};
	}
	class HiddenImpl extends BaseControl {
	    private curValue;
	    constructor(control: JQuery);
	    init(options: IHiddenOptions): void;
	    getValue(): any;
	    setValue(newValue: any): void;
	    hasChanged(): boolean;
	    destroy(): void;
	    resizeItem(): void;
	}
	//# sourceMappingURL=hidden.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IHtmlFormOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string;
	    valueChanged?: Function;
	    parameter?: {
	        readonly?: boolean;
	        htmlSetting?: string;
	    };
	}
	interface IHTMLFormValue {
	    name: string;
	    value: string;
	    pos?: number;
	}
	interface IFormValue {
	    data: IHTMLFormValue[];
	    html: string;
	}
	class HtmlFormImpl extends BaseControl {
	    private settings;
	    private timer;
	    private form;
	    constructor(control: JQuery);
	    init(options: IHtmlFormOptions): void;
	    hasChanged(): boolean;
	    getValue(): string;
	    setValue(newValue: string): void;
	    destroy(): void;
	    resizeItem(): void;
	    private readData;
	    private writeData;
	    private getHtml;
	}
	//# sourceMappingURL=htmlform.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IHyperlinkOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string;
	    valueChanged?: Function;
	    parameter?: {};
	    fieldValueLabel?: string;
	    linkPrefix?: string;
	}
	class HyperlinkImpl extends BaseControl {
	    private settings;
	    private lastValueChanged;
	    private _editor;
	    constructor(control: JQuery);
	    init(options: IHyperlinkOptions): void;
	    protected showLink(container: JQuery): void;
	    hasChanged(): boolean;
	    getValue(): any;
	    destroy(): void;
	    resizeItem(): void;
	    private valueChanged;
	}
	//# sourceMappingURL=hyperlink.d.ts.map

	function InitializeControls(): void;
	//# sourceMappingURL=initialize.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IItemSelectionParams {
	    prefix?: string;
	    buttonName?: string;
	    showOnly?: string[];
	    showNot?: string[];
	    crossProject?: boolean;
	    singleFolderOnly?: boolean;
	    readOnly?: boolean;
	    linkTypes?: {}[];
	    readonly?: boolean;
	    crossProjectHideDelete?: boolean;
	    crossProjectAsList?: boolean;
	}
	interface IItemSelectionOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string;
	    valueChanged?: Function;
	    parameter?: IItemSelectionParams;
	}
	class ItemSelectionImpl extends BaseControl {
	    private settings;
	    private selectedItems;
	    private uiCtrl;
	    private currentSelection;
	    constructor(control: JQuery);
	    init(options: IItemSelectionOptions): void;
	    hasChanged(): boolean;
	    getValue(): string;
	    setValue(itemIds: string[]): void;
	    destroy(): void;
	    resizeItem(): void;
	    private addUnlink;
	    private showCurrentSelection;
	}
	//# sourceMappingURL=itemSelection.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IItemSelectionFromToOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string;
	    valueChanged?: Function;
	    parameter?: {
	        /** Do not include these CATs in the FROM selection list */
	        showNotFrom?: string[];
	        /** Only include these CATs in the TO selection list */
	        showOnlyTo?: string[];
	        /** Initially select all possible items as to items */
	        allTo?: boolean;
	        buttonNameFrom?: string;
	        buttonNameTo?: string;
	        prefixFrom?: string;
	        prefixTo?: string;
	    };
	}
	interface IFromToSelection {
	    from: IReference[];
	    to: IReference[];
	}
	class ItemSelectionFromToImpl extends BaseControl {
	    private settings;
	    private selectedItems;
	    private defaultSelection;
	    constructor(control: JQuery);
	    init(options: IItemSelectionFromToOptions): void;
	    hasChanged(): boolean;
	    getValue(): string;
	    setValue(newValue: string): void;
	    setValueFrom(itemIds: string[]): void;
	    setValueTo(itemIds: string[]): void;
	    destroy(): void;
	    resizeItem(): void;
	    private getSelectionString;
	    private isDefaultSelection;
	}
	//# sourceMappingURL=itemSelectionFromTo.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ILabelsControlOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string;
	    valueChanged?: Function;
	    parameter?: {
	        titleBarControl?: JQuery;
	        renderSliders?: boolean;
	        hide_UI?: boolean;
	    };
	    type?: string;
	    restrictEditTo?: string[];
	}
	class LabelsControlImpl extends BaseControl {
	    private settings;
	    private space;
	    private mode;
	    constructor(control: JQuery);
	    init(options: ILabelsControlOptions): void;
	    hasChanged(): boolean;
	    getValue(): any;
	    setValue(labelStr: string): void;
	    destroy(): void;
	    resizeItem(): void;
	    private showLabels;
	}
	//# sourceMappingURL=labelsControl.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ILinkRenderParams {
	    linkTypes?: ILinkCategories[];
	    none?: string;
	    disableCreate?: boolean;
	    readonly?: boolean;
	    reviewMode?: boolean;
	    render?: {
	        category?: string;
	        hideLink?: boolean;
	        buttonName?: string;
	        hideCreate?: boolean;
	        hideSelect?: boolean;
	        ignoreOutOfDate?: boolean;
	    }[];
	}
	interface ILinkCollectionOptions extends IBaseControlOptions {
	    item?: any;
	    fieldValue?: IReference[];
	    parameter?: ILinkRenderParams;
	    doNotSave?: boolean;
	    mitigationRenderer?: Function;
	    id?: string;
	    tiny?: boolean;
	}
	interface ILinkCategories {
	    name?: string;
	    required?: boolean;
	    type: string;
	}
	class LinkCollectionImpl extends BaseControl {
	    private settings;
	    private saveInDb;
	    private itemReferences;
	    private hideSelect;
	    private ignoreOutOfDate;
	    private showLinks;
	    constructor(control: JQuery);
	    init(options: ILinkCollectionOptions): void;
	    refreshLinks(): void;
	    hasChanged(): boolean;
	    getValue(): any;
	    setValue(newVal: IReference[]): void;
	    resizeItem(): void;
	    destroy(): void;
	    updateItem(newItem: IItem): void;
	    private deleteReference;
	    private removeDeletedReference;
	    private addReference;
	    private selectionChange;
	    private renderRefs;
	}
	//# sourceMappingURL=linkCollection.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IDocMarkAsTemplateOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string;
	    valueChanged?: Function;
	    parameter?: {
	        inlineHelp?: string;
	    };
	}
	interface IPasteSourceSetting {
	    templates: IPasteSource[];
	}
	interface IPasteSource {
	    fromProject: string;
	    fromSign: string;
	    fromName: string;
	    fromDOC: string;
	    canUseIn: string[];
	}
	interface ITempSignatures {
	    signatures: ITempSignature[];
	}
	interface ITempSignature {
	    user: string;
	    datetime: string;
	}
	interface ITemplateProjects {
	    projects: string[];
	    targets: string[];
	}
	class MarkAsTemplateImpl extends DocSignImpl {
	    static PROJECT_SETTING: string;
	    static PROJECT_SETTING_Projects: string;
	    private originalValue;
	    private newValue;
	    private pub;
	    private publishTo;
	    constructor(control: JQuery);
	    private formatUserLogin;
	    init(options: IDocMarkAsTemplateOptions): void;
	    private getHelpPart;
	    hasChanged(): boolean;
	    getValue(): string;
	    setValue(): string;
	    destroy(): void;
	    resizeItem(): void;
	    static getRequiredApprovals(value: string): string[];
	    static getTemplateSignatureStatus(value: string): ISignaturesInfo;
	    static removeFromTemplates(deletedItems: string[]): void;
	    private hideSignatureCtrl;
	    private showProjects;
	    private showCurrentUsages;
	    private showSignatureTableEdit;
	    static removeDeletedUsers(userList: string[]): string[];
	    private getTemplateSignatureStatus;
	    private askForSignatures;
	    protected signTemplate(pwd: string): void;
	}
	//# sourceMappingURL=markAsTemplate.d.ts.map

	//# sourceMappingURL=oldTableCtrl.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IPlainTextParams extends IFieldParameter {
	    externalHelp?: string;
	    readonly?: boolean;
	    allowResize?: boolean;
	    rows?: number;
	    code?: boolean | CodeLanguage;
	    lineNumbers?: boolean;
	    tabSize?: number;
	    height?: number;
	    password?: boolean;
	    autoEdit?: boolean;
	    autoFormat?: boolean;
	    showJSONFormat?: boolean;
	    requiresContent?: boolean;
	    inlineHelp?: string;
	    magic?: boolean;
	    apiHelp?: string;
	    initialContent?: string;
	    hideFullscreen?: boolean;
	    purify?: boolean;
	}
	interface IPlainTextControlOptions extends IBaseControlOptions {
	    dummyData?: any;
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string;
	    valueChanged?: Function;
	    lostFocus?: Function;
	    parameter?: IPlainTextParams;
	}
	type CodeLanguage = "xml" | "json" | "css";
	class PlainTextImpl extends BaseControl {
	    private settings;
	    private lastValueChanged;
	    private isCode;
	    private myCodeMirror;
	    private changedBefore;
	    private _editor;
	    private doesRequireContent;
	    constructor(control: JQuery);
	    init(options: IPlainTextControlOptions): void;
	    hasChanged(): boolean;
	    getValue(): string;
	    requiresContent(): boolean;
	    refresh(): void;
	    setValue(newValueDirty: string, reset?: boolean): void;
	    destroy(): void;
	    resizeItem(): void;
	    private valueChanged;
	    private compactizeJSON;
	}
	//# sourceMappingURL=plainText.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class PublishedContentImpl extends BaseControl {
	    private settings;
	    constructor(control: JQuery);
	    init(options: ICheckBoxControlOptions): void;
	    hasChanged(): boolean;
	    getValue(): string;
	    setValue(value: boolean): void;
	    destroy(): void;
	    resizeItem(): void;
	}
	//# sourceMappingURL=publishedContent.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IRichTextParams {
	    showSmartText?: boolean;
	    autoEdit?: boolean;
	    height?: number;
	    docMode?: boolean;
	    tableMode?: boolean;
	    readonly?: boolean;
	    wiki?: boolean;
	    tiny?: boolean;
	    noConvertTiny?: boolean;
	    requiresContent?: boolean;
	    printMode?: boolean;
	    width?: string;
	    initialContent?: string;
	    visibleOption?: string;
	}
	interface IRichTextControlOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string;
	    valueChanged?: Function;
	    parameter?: IRichTextParams;
	}
	class RichTextImpl extends BaseControl {
	    private settings;
	    private lastClient;
	    private editStart;
	    private data;
	    private lastScroll;
	    private hiddenPasteBuffer;
	    private _editor;
	    private editable;
	    private lastValueChanged;
	    private form;
	    private resizable;
	    private heightDelta;
	    private failedImages;
	    private recCall;
	    static editorInstanceCount: number;
	    constructor(control: JQuery);
	    init(options: IRichTextControlOptions, form?: ItemControl): void;
	    getValue(): string;
	    setValue(newVal: string): void;
	    hasChanged(): boolean;
	    getText(): void;
	    getValueRaw(): void;
	    destroy(): void;
	    resizeItem(): void;
	    static useTiny(ctrlParameter: IRichTextControlOptions): boolean;
	    private triggerValueChange;
	    private valueChanged;
	    private showMenu;
	    private markBadImages;
	    private importImages;
	    private importImagesRec;
	    private showBadImages;
	    private hideMenu;
	    private uploadAndInsertImages;
	    private cleanPastedHTML;
	    private processpaste;
	    private ddUploadFiles;
	    private ddCreateLink;
	    private ddUploadHTML;
	    private onDragOver;
	    private onDrop;
	    private addVerticalResizer;
	}
	//# sourceMappingURL=richText.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	function hackInAQueryParamToDisableCachingForSafariOnly(original: string): string;
	class RichText2 extends BaseControl {
	    static editorInstanceCount: number;
	    static toolbarHeight: number;
	    private settings;
	    private selectorId;
	    private dataOriginal;
	    private dataChanged;
	    private lastValueChanged;
	    private purifyServer;
	    private isInEditMode;
	    private duringInit;
	    private delayedInit;
	    private editingDrawIO;
	    private editorBox;
	    private editor;
	    private form;
	    private tinyConf;
	    private lastUploadedFile;
	    private failedImages;
	    private imgSrcMap;
	    private doesRequireContent;
	    private cachedContent;
	    private wasDifferentBefore;
	    constructor(control: JQuery);
	    init(options: IRichTextControlOptions, form?: ItemControl): void;
	    hasChanged(): boolean;
	    getValue(): string;
	    setValue(newVal: string): void;
	    destroy(): void;
	    resizeItem(): void;
	    requiresContent(): boolean;
	    highlightReferences(): void;
	    private renderInCodeMode;
	    private cleanBlock;
	    private initEditor;
	    private onSetup;
	    private images_upload_handler;
	    private onInit;
	    private onChange;
	    private onPostChange;
	    private onFocus;
	    private PastePreProcess;
	    private replaceWith;
	    private PastePostProcess;
	    private getPurifiedContent;
	    private OnKeyUp;
	    private OnKeyDown;
	    private AfterSetContent;
	    private onMouseDown;
	    private onMouseUp;
	    private onResizeEditor;
	    private setMinHeight;
	    private closeEditor;
	    private enableEditor;
	    private setContent;
	    private toSelector;
	    private toOffset;
	    private getSelector;
	    /*******************************************************
	     * Drag and drop support
	     *******************************************************/
	    private setupDragAndDrop;
	    private onDragStart;
	    private dragEnterCounter;
	    private onDragEnter;
	    private onDragLeave;
	    private onDragOver;
	    private onDrop;
	    private ddCreateLink;
	    private ddUploadFiles;
	    private insertImage;
	    private resizeNewImage;
	    private createImage;
	    private getImageSize;
	    private getInitialImageSize;
	    private ddUploadHTML;
	    /*******************************************
	     * handle images pointing to alien servers
	     *******************************************/
	    private markBadImages;
	    private markBadImage;
	    private processPastedImages;
	    private uploadPastedImagesRec;
	    private showBadImages;
	    /******************************************
	     * Smart text tools
	    *******************************************/
	    private insertReference;
	    private insertCrossReference;
	    private pasteBuffer;
	    private insertSmartMacro;
	    /****************************************** */
	    /****************************************** */
	    private addDrawIO;
	    private openDrawIODrawing;
	    private onOpenedDrawIO;
	    private onClosedDrawIO;
	}
	function initialize(): void;
	//# sourceMappingURL=richText2.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IRiskControlOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string;
	    valueChanged?: Function;
	    parameter?: IRiskParameter;
	    links?: IReference[];
	    hideReadonlyColumns?: boolean;
	}
	interface IRiskParameter {
	    riskConfig?: IRiskConfig;
	    showAttributeNames?: boolean;
	    forceAfterWeightsInPrint?: boolean;
	    hide_UI?: boolean;
	}
	interface IRiskValue {
	    factors: IRiskValueFactor[];
	    mitigations: IRiskValueMitigation[];
	    postWeights?: IRiskValueFactorWeight[];
	}
	interface IRiskValueFactor {
	    label: string;
	    type: string;
	    value: string;
	    inputType?: string;
	    weights: IRiskValueFactorWeight[];
	}
	interface IRiskValueFactorWeight {
	    description: string;
	    label: string;
	    type: string;
	    value: number;
	}
	interface IRiskValueMitigation {
	    to: string;
	    title: string;
	    changes: IRiskValueMitigationChange[];
	}
	interface IRiskValueMitigationChange {
	    by: number;
	    changes: string;
	    description: string;
	    name: string;
	}
	interface IRiskValueMap {
	    [key: string]: number;
	}
	interface IRiskRender {
	    text: string;
	    foregroundColor: string;
	    backgroundColor: string;
	    css: string;
	}
	class RiskCalculator {
	    private riskValue;
	    private config;
	    constructor(config: IRiskConfig);
	    parse(fieldValue: string): void;
	    updateMitigations(possibleRefs: IReference[]): boolean;
	    updateMitigationTitles(possibleLinks: IReference[]): void;
	    init(riskValue: IRiskValue): void;
	    /** get the value */
	    getValue(): IRiskValue;
	    getAttributeHTML(attributeIn: string): string;
	    getWeight(factorType: string, weightType: string): number;
	    getRBM(): IRiskValueMap;
	    getRAMByMath(rbm: IRiskValueMap): IRiskValueMap;
	    getRAMByUser(rbm: IRiskValueMap): IRiskValueMap;
	    getRAM(rbm: IRiskValueMap): IRiskValueMap;
	    getRiskSumText(riskValues: IRiskValueMap): {
	        text: string;
	        foregroundColor: string;
	        backgroundColor: string;
	        css: string;
	    };
	    getRiskSumSpan(riskValues: IRiskValueMap): string;
	    getColor(riskValues: IRiskValueMap, foreground: boolean): string;
	    static labelDisplay(weightValue: IRiskConfigFactorWeightValue): string;
	}
	class RiskControlImpl extends BaseControl {
	    private settings;
	    private config;
	    private risk;
	    private mitbody;
	    private isPrint;
	    private riskCalculator;
	    private mitigationsRemoved;
	    constructor(control: JQuery);
	    init(options: IRiskControlOptions): void;
	    hasChanged(): boolean;
	    getValue(): string;
	    destroy(): void;
	    resizeItem(): void;
	    private syncTheLinks;
	    private controlsFromTable;
	    private controlsToTable;
	    private renderFactorWithWeightsLine;
	    private editRichText;
	    private setFactorRichValue;
	    private renderWeight;
	    private setWeight;
	    private setFactor;
	    riskChange(): void;
	    private mitigationChanged;
	    private getLabelFactor;
	    private getLabelWeight;
	    private getLabelWeightFactor;
	    private createMitigationSelect;
	    private mitigationRenderer;
	    private setSelectValues;
	    private setSelectValue;
	    private canBeMitigation;
	    /********************************
	     * render as table control
	     ********************************/
	    private renderTableBodyRow;
	    /********************************
	     * user inputs
	     ********************************/
	    private renderFactorInput;
	    private renderWeightInput;
	    highlightReferences(): void;
	    private renderMitigationSelect;
	}
	//# sourceMappingURL=riskCtrl2.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ISectionOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    help?: string;
	    parameter?: ISectionParams;
	}
	interface ISectionParams {
	    lineBefore?: boolean;
	    lineAfter?: boolean;
	}
	class SectionImpl extends BaseControl {
	    private curValue;
	    constructor(control: JQuery);
	    init(options: ISectionOptions): void;
	    getValue(): string;
	    setValue(newValue: any): void;
	    hasChanged(): boolean;
	    destroy(): void;
	    resizeItem(): void;
	}
	//# sourceMappingURL=section.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IDocSourceRefOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string;
	    valueChanged?: Function;
	    parameter?: {
	        readonly?: boolean;
	    };
	}
	class SourceRefImpl extends DocBaseImpl {
	    private settings;
	    private originalValue;
	    private newValue;
	    private lastValueChanged;
	    constructor(control: JQuery);
	    init(options: IDocSourceRefOptions): void;
	    hasChanged(): boolean;
	    getValue(): string;
	    setValue(newInfo: string): string;
	    destroy(): void;
	    resizeItem(): void;
	}
	//# sourceMappingURL=sourceRef.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ISyncSourceInfoOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string;
	    valueChanged?: Function;
	    parameter?: {
	        readonly?: boolean;
	    };
	}
	interface ISyncSourceInfo {
	    param: string;
	    type: string;
	    value: string;
	}
	class SyncSourceInfoImpl extends BaseControl {
	    private settings;
	    constructor(control: JQuery);
	    init(options: IHtmlFormOptions): void;
	    hasChanged(): boolean;
	    getValue(): string;
	    setValue(syncStatusString: string): void;
	    destroy(): void;
	    resizeItem(): void;
	    private renderValue;
	}
	//# sourceMappingURL=syncSourceInfo.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ISyncStatusOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string;
	    valueChanged?: Function;
	    parameter?: {
	        readonly?: boolean;
	    };
	}
	interface ISyncCatgoryInfo {
	    categories: string;
	    sourceName: string;
	    new?: ISyncMapping[];
	    resync?: ISyncMapping[];
	}
	interface ISyncMapping {
	    from: string;
	    to: string;
	    fromId?: number;
	    toId?: number;
	}
	interface ISyncStatusValue {
	    targetItemId?: string;
	    targetSyncedVersion?: number;
	    thisSyncedVersion?: number;
	}
	interface IMergeResult {
	    targetFieldId: string;
	    targetFieldValue: string;
	}
	enum SyncStatus {
	    NeverSynced = 0,
	    InSync = 1,
	    BothChanged = 2,
	    MatrixChanged = 3,
	    OtherChanged = 4
	}
	class SyncStatusImpl extends BaseControl {
	    private settings;
	    private syncStatus;
	    private syncCatgoryInfo;
	    private labelStatus;
	    private target;
	    private source;
	    private newCreated;
	    static syncBlackList: string[];
	    private mergeResults;
	    constructor(control: JQuery);
	    init(options: IHtmlFormOptions): void;
	    hasChanged(): boolean;
	    getValue(): string;
	    destroy(): void;
	    resizeItem(): void;
	    preSaveHook(isItem: boolean, type: string, controls: IControlDefinition[]): JQueryDeferred<{}>;
	    static createNew(externalCategory: string, items: string[], targetCategory: string): JQueryDeferred<{}>;
	    static reSyncItems(externalCategory: string, items: string[]): JQueryDeferred<{}>;
	    static breakLinks(externalCategory: string, items: string[]): JQueryDeferred<{}>;
	    private static breakLinksRec;
	    private static createNewRec;
	    private static reSyncItemsRec;
	    private static updateSyncDetails;
	    private static getFieldIdMapping;
	    private static matchSyncDetails;
	    private getSyncStatus;
	    private setSyncStatus;
	    /** function called if item is not yet synced or ignored
	     *
	     */
	    private offerLinking;
	    private showSyncInfo;
	    private showLinkInfo;
	    private fillCreateDialog;
	    private createItemLink;
	    private offerBreakLink;
	    /** function called if item is linked - it can or cannot be in sync
	   
	    */
	    private offerAutoSync;
	    private saveMergeInfo;
	    private autoSync;
	    private saveAndLink;
	    private offerManualSync;
	    /** render dialog to sync items */
	    private showSyncDialog;
	    /** render info that the item behind exists and can be loaded (or doesn't exist...) */
	    private lazyLoad;
	    /** hide input fields which cannot be synced (no setValue method) */
	    private hideNonSyncFields;
	}
	function initialize(): void;
	//# sourceMappingURL=syncStatus.d.ts.map

	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ITableControlParams {
	    readonly?: boolean;
	    columns?: ITableControlOptionsColumn[];
	    onDblClick?: Function;
	    canBeModified?: boolean;
	    create?: boolean;
	    showLineNumbers?: boolean;
	    maxRows?: number;
	    fixRows?: number;
	    readonly_allowfocus?: boolean;
	    passFailEditorConfig?: any;
	    readOnlyFields?: string[];
	    limitEditRow?: string;
	    manualTableHeights?: boolean;
	    doNotRememberWidth?: boolean;
	    onColumnsResized?: Function;
	    cellAskEdit?: string;
	    disableColumnReorder?: boolean;
	    inlineHelp?: string;
	    initialContent?: IStringMap[];
	    autoUpdate?: string;
	}
	interface ITableControlOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    dummyData?: any;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string;
	    valueChanged?: Function;
	    parameter?: ITableControlParams;
	}
	interface ITableControlOptionsColumn {
	    name: string;
	    field: string;
	    editor: string;
	    options?: {
	        [key: string]: string;
	    } | IDropdownOption[];
	    relativeWidth?: Number;
	    headerCssClass?: string;
	    cssClass?: string;
	}
	interface ITableRow {
	    idx: number;
	    id: string;
	    name: string;
	    [key: string]: any;
	}
	interface MyData extends Slick.SlickData {
	    options?: string[];
	}
	class TableControlImpl extends BaseControl {
	    private settings;
	    constructor(control: JQuery);
	    init(options: ITableControlOptions): void;
	    getValue(): string;
	    hasChanged(): boolean;
	    destroy(): void;
	    resizeItem(): void;
	    static checkConfig(json: ITableControlParams): Promise<string | null>;
	}
	//# sourceMappingURL=tableCtrl.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ITasksControlOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: any;
	    valueChanged?: Function;
	    parameter?: {
	        readonly?: boolean;
	        plugins?: number[];
	    };
	    readOnly?: boolean;
	}
	class TasksControlImpl extends BaseControl {
	    private settings;
	    private dragCounter;
	    constructor(control: JQuery);
	    init(options: ITasksControlOptions): void;
	    updateControl(): void;
	    init2(): void;
	    hasChanged(): boolean;
	    getValue(): string;
	    destroy(): void;
	    resizeItem(): void;
	    getPluginFilter(): number[];
	    private onDrop;
	}
	//# sourceMappingURL=tasksControl.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ITitleToolbarOptions extends IBaseControlOptions {
	    parameter?: {
	        readonly?: boolean;
	        placeholder?: string;
	    };
	    id?: string;
	    title?: string;
	    item?: IItem;
	    canEditTitle?: boolean;
	    canDelete?: boolean;
	    locked?: string;
	    unlockers?: string;
	    type?: string;
	    validate?: boolean;
	    noAutoActivation?: boolean;
	}
	class TitleToolbarImpl extends BaseControl {
	    private settings;
	    private isInHiddenMode;
	    private link;
	    private warnedAboutOutOfDate;
	    private _refDlgIcon;
	    constructor(control: JQuery);
	    init(options: ITitleToolbarOptions): void;
	    hasChanged(): boolean;
	    getValue(): any;
	    setValue(newTitle: string, fireUpdate: boolean): void;
	    getText(): void;
	    getValueRaw(): void;
	    titleCreationMode(): void;
	    destroy(): void;
	    resizeItem(): void;
	    setViewers(viewers: IItemWatched): void;
	    updateItem(newItem?: IItem): void;
	    private toggleOutOfDateIcon;
	    private showOutOfDateIcon;
	}
	//# sourceMappingURL=titleToolbar.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IUpLinkInfoOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string | {};
	    valueChanged?: Function;
	    parameter?: IUpLinkDetails;
	    validate?: boolean;
	}
	interface IUpLinkDetails {
	    /** a comma separated list of categories */
	    cats: string;
	    /** it is possible to show a specific text with some icons if there are (set to true)/ are no links (set to false) */
	    exists?: boolean;
	    /** depends on exist:  shows an icon if there's at least one (or none)  */
	    icon?: string;
	    /** depends on exist:  color of icon  */
	    iconfg?: string;
	    /** depends on exist:  background color of icon  */
	    iconbg?: string;
	    /** depends on exist:  text behind icon  */
	    text?: string;
	    /** to show information about the actualy uplinks: false (don't show)|true (shows a simple list with all id's)|listref (shows a list with id's as links and titles)|ref (shows id's as links and titles inline behind text) */
	    itemInfo?: string | boolean;
	    /** show create button */
	    showCreate?: boolean;
	    /**  a comma separated list of categories for which to hide the create button (subset of cats) */
	    hideCreate?: string;
	    /**  a comma separated list of categories for which to hide in selection (subset of cats) */
	    hideSelect?: string;
	    reports?: boolean;
	}
	class UpLinkInfoImpl extends BaseControl {
	    private settings;
	    constructor(control: JQuery);
	    init(options: IUpLinkInfoOptions): void;
	    refreshLinks(): void;
	    hasChanged(): boolean;
	    getValue(): string;
	    destroy(): void;
	    resizeItem(): void;
	    updateItem(newItem: IItemGet): void;
	    private renderRefs;
	    private renderCreateButtons;
	    private addReference;
	    private selectionChange;
	}
	//# sourceMappingURL=uplinkinfo.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IWorkflowControlOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string;
	    valueChanged?: Function;
	    parameter?: {
	        titleBarControl?: JQuery;
	        pollFrequencyMS?: number;
	        pollCount?: number;
	    };
	}
	class WorkflowControlImpl extends BaseControl {
	    private settings;
	    private btn;
	    private issue;
	    private waitForChange;
	    private poll;
	    constructor(control: JQuery);
	    init(options: IWorkflowControlOptions): void;
	    hasChanged(): boolean;
	    getValue(): any;
	    setValue(issueId: string): void;
	    destroy(): void;
	    resizeItem(): void;
	    private updateButton;
	    private setButtonSpinning;
	}
	function initialize(): void;
	//# sourceMappingURL=workflowControl.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface MatrixTreeOptions {
	    noAnimation: boolean;
	    highlight: boolean;
	    canFilter: boolean;
	    serverSearch: boolean;
	    expand: number;
	    canSelectItems: boolean;
	    canFilterExclusiv: boolean;
	    selectedItems: IReference[];
	    isConfigSearch?: boolean;
	    tree?: IDB[];
	    controlState: ControlState;
	    dropCallback: (moveDetails: ITreeDropInfo) => boolean;
	    selectionChanged: (id: string) => void;
	    onExpand?: (id: string) => void;
	    isMainTree?: boolean;
	}
	interface ITreeDropInfo {
	    parentId: string;
	    itemId: string;
	    index: number;
	    updateUI?: () => void;
	}
	class MainTreeImpl {
	    private settings;
	    private _jui;
	    private triggerSelectionChange;
	    constructor();
	    init(control: JQuery): void;
	    render(treeSettings?: MatrixTreeOptions): void;
	    update(item: IItem): void;
	    remove(itemId: string): void;
	    openFolder(itemId: string, expandToRoot?: boolean): void;
	    closeFolder(itemId: string): void;
	    select(itemId: string): void;
	    isSelected(itemId: string): boolean;
	    insertInTree(newItem: IDBParent, noEscape?: boolean): void;
	    moveInTree(itemId: string, newParentId: string, newPosition: number): void;
	    insertUpdateTreeRec(target: string, source: IDB): void;
	    destroy(): void;
	    clearFilter(): void;
	    updateItemIsUnselected(itemId: string, isUnselected: boolean): void;
	    updateNotificationCounters(): void;
	}
	var NavigationPanel: MainTreeImpl;
	//# sourceMappingURL=MainTree.d.ts.map

	class ActivityPanel implements IPanel {
	    title: string;
	    constructor(first?: number, last?: number);
	    destroy(): void;
	}
	//# sourceMappingURL=ActivityPanel.d.ts.map

	interface IInfoPerDay {
	    auditIdMin: number;
	    auditIdMax: number;
	    details?: IInfoPerDayDetail[];
	    nbChanges: number;
	    dejaVu?: boolean;
	}
	interface IInfoPerDayDetail {
	    itemId: string;
	    type: string;
	    title: string;
	    version: number;
	    action: string;
	    human: string;
	    reason: string;
	}
	interface IInfoPerDayMap {
	    [key: string]: IInfoPerDay;
	}
	class CalendarPanel implements IPanel {
	    private control;
	    private infoPerDay;
	    private selectFromDate;
	    private selectToDate;
	    private cats;
	    private select;
	    private results;
	    private auditIdMin;
	    private auditIdMax;
	    private killed;
	    private timewarpColors;
	    title: string;
	    constructor();
	    destroy(): void;
	    private resetSelection;
	    private changeSelection;
	    private updateSelection;
	    private dayOfTimeWarp;
	    private renderMonth;
	    private renderMonths;
	    private renderEmptySelectionHelp;
	    private appendSelectionTime;
	    private selectCalendar;
	    private addFilter;
	    private delayedFilter;
	    private filterCalendar;
	    private renderCalendar;
	    private renderCalendarSelection;
	    private renderLastChanges;
	}
	//# sourceMappingURL=CalendarPanel.d.ts.map

	class ChangeLogPanel implements IPanel {
	    private control;
	    title: string;
	    constructor();
	    destroy(): void;
	}
	//# sourceMappingURL=ChangeLogPanel.d.ts.map

	class DeletedItemPanel implements IPanel {
	    title: string;
	    private delayedFilter;
	    private filterDeletedItems;
	    private addFilter;
	    constructor();
	    destroy(): void;
	}
	//# sourceMappingURL=DeletedItemsPanel.d.ts.map

	class DocumentPanel implements IPanel {
	    title: string;
	    constructor();
	    destroy(): void;
	}
	//# sourceMappingURL=DocumentPanel.d.ts.map

	class GroupPanel implements IPanel {
	    title: string;
	    constructor(categoryGroup: string, title: string);
	    destroy(): void;
	    private createProjectControl;
	    private addChildren;
	}
	//# sourceMappingURL=GroupPanel.d.ts.map

	class ItemPanel implements IPanel {
	    private itemForm;
	    private zen;
	    title: string;
	    constructor(options: IItemControlOptions);
	    destroy(): void;
	    getItemForm(): ItemControl;
	    toggleZen(): void;
	}
	//# sourceMappingURL=ItemPanel.d.ts.map

	class MyDocsPanel implements IPanel {
	    private control;
	    title: string;
	    constructor();
	    destroy(): void;
	    render(): void;
	}
	//# sourceMappingURL=MyDocsPanel.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IPublishInfo {
	    target: string;
	    SOPLabelGroupType: string;
	    ProcReviewLabelGroupType: string;
	    WiReviewLabelGroupType: string;
	    publisher: string;
	}
	interface IPublished {
	    item: string;
	    version: number;
	    wis: string[];
	    sop: string;
	}
	interface IToPublish {
	    itemInfo: ISearchResult;
	    approved: boolean;
	    lastPublishedVersion: number;
	    wis: string[];
	    sop: string;
	    rolesAndUsers: string[];
	}
	interface IToPublishMap {
	    [key: string]: IToPublish;
	}
	interface IPublicationGroup {
	    groupInfo: IPublicationCategory;
	    label: string;
	    groupItems: string[];
	    approved: boolean;
	    needsPublication: boolean;
	}
	interface IDocTitle {
	    id: string;
	    title: string;
	}
	interface IPublicationHistory {
	    history: IPublicationHistoryItem[];
	}
	interface IPublicationHistoryItem {
	    item: string;
	    date: string;
	    comment: string;
	}
	interface INewPublication {
	    item: string;
	    version: number;
	    wis: string[];
	    sop: string;
	}
	class PublishPanel implements IPanel {
	    title: string;
	    private control;
	    private body;
	    private pubConfig;
	    private selectedForPublication;
	    private selectedForUnPublication;
	    private deletedStillPublished;
	    private itemMap;
	    private unGrouped;
	    private groups;
	    constructor(folderType: string);
	    private paint;
	    destroy(): void;
	    private renderTabs;
	    private renderPublishUi;
	    renderReadyToPublish(isForPublication: boolean, panel: JQuery): void;
	    private renderNotReadyToPublish;
	    private enablePublish;
	    private showGroup;
	    private updateItems;
	    private getItemsFromCheckBoxes;
	    private showItem;
	    private showDeletedItem;
	    private showGroupDetails;
	    private showItemDetails;
	    private addInfoLastPublication;
	    private computePublicationNeeds;
	    private getPublicationItemsAndGroups;
	    private publishSelected;
	    private getIncludedDownlinksRec;
	    private doPublish;
	    private doPublishInFolder;
	    private waitForPublication;
	    private createDateFolder;
	    private createFolders;
	}
	//# sourceMappingURL=PublishPanel.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class ITrainingFilter {
	    userRaw: string[];
	    user: string[];
	    itemInfo: string;
	    new: boolean;
	    due: boolean;
	    overdue: boolean;
	    ok: boolean;
	    none: boolean;
	    overdueAfter: string;
	    retrainingAfter: string;
	}
	interface ITrainingAnalysis {
	    title: string;
	    hasTraining: boolean;
	    users: {
	        [key: string]: ITrainingAnalysisUsers;
	    };
	    labels: string[];
	}
	interface ITrainingAnalysisUsers {
	    /** true if there is an open training notification */
	    thereIsATraining: boolean;
	    /** if thereIsATraining number of days since it was created */
	    theTrainingExistsSinceDays: number;
	    /** true thereIsATraining if the training notification is overdue */
	    theTrainingIsOverdue: boolean;
	    /** true if there should be a training (either because there never has been one or there was no retraining) */
	    thereShouldBeATraining: boolean;
	    /** info about each training done */
	    trainingsDone: ITrainingDone[];
	    /** if there was a completed training, how many days ago the last training was completed */
	    lastTrainingAgeDays: number;
	    /** if there was a completed training, when last training was completed */
	    lastTrainingDate: Date;
	}
	interface ITrainingDone {
	    trainingCreated: string;
	    trainingDone: string;
	    trainingDays: number;
	    trainingOverdue: boolean;
	}
	interface ITrainingCellStatus {
	    classes: string;
	    text: string;
	    verbose: string;
	}
	enum ETrainingStatus {
	    notNeeded = 0,
	    needed = 1,
	    due = 2,
	    overdue = 3,
	    done = 4
	}
	class TrainingTable {
	    private vscroll;
	    protected ivscroll: JQuery;
	    private hscroll;
	    protected ihscroll: JQuery;
	    protected filterBox: JQuery;
	    private mainTable;
	    private leftTable;
	    private leftContainer;
	    protected leftBody: JQuery;
	    protected topTable: JQuery;
	    private topContainer;
	    protected headerRow: JQuery;
	    protected accessTable: JQuery;
	    private accessContainer;
	    protected accessBody: JQuery;
	    protected topLeft: JQuery;
	    protected destroyTable(): void;
	    protected intiTableTimer: number;
	    protected createMainContainer(place: JQuery): void;
	    protected initTooltipBox(onShow: (cell: JQuery) => string): void;
	    protected placeChangeMenu(uio: JQuery, cell: JQuery): void;
	    protected initCellMenu(change: (cell: JQuery, option: string) => void): void;
	    protected hideMenu(): void;
	    protected scrollTop(): void;
	    protected scrollLeft(): void;
	    protected initTableScrolling(where: JQuery, paddingBottom: number): void;
	    private scrollFunction;
	}
	function initialize(): void;
	//# sourceMappingURL=QMSTraining.d.ts.map

	class SyncPanel implements IPanel {
	    private control;
	    private syncCatgoryInfo;
	    private body;
	    private syncLists;
	    title: string;
	    constructor();
	    destroy(): void;
	    private renderSyncCategory;
	    /** show items from external database which never have been synched */
	    private renderNew;
	    private showItemList;
	    /** toggle items in table */
	    private toggleTable;
	    /** create a new items from selected external items */
	    private createNew;
	    /** re-sync existing links */
	    private reSync;
	    /** re-sync existing links */
	    private ignore;
	    /** create a clickable link */
	    private createItemLink;
	}
	//# sourceMappingURL=SyncPanel.d.ts.map

	class TagPanel implements IPanel {
	    private control;
	    title: string;
	    constructor();
	    destroy(): void;
	    render(): void;
	}
	//# sourceMappingURL=TagsPanel.d.ts.map

	function InitializePanels(): void;
	//# sourceMappingURL=initialize.d.ts.map

	function InitializeCodeMirrorPlugins(): void;
	//# sourceMappingURL=CodeMirrorPlugins.d.ts.map

	class Email {
	    private element;
	    private resultBox;
	    constructor(e: string);
	    isOK(): boolean;
	    private validate;
	}
	//# sourceMappingURL=EmailValidator.d.ts.map

	interface PasswordOptions {
	    minChar?: number;
	    passIndex?: number;
	    label?: string;
	    verdicts?: string[];
	    colors?: string[];
	    width?: string[];
	    scores?: number[];
	    passFail?: (result: boolean) => void;
	    other?: string;
	}
	class StrongPass {
	    private options;
	    private bannedPasswords;
	    private checks;
	    private element;
	    private resultBox;
	    constructor(element: string, param: PasswordOptions);
	    setPassIndex(newIndex: number): void;
	    isOK(): boolean;
	    private attachEvents;
	    private createBox;
	    private runPassword;
	    private checkPassword;
	}
	//# sourceMappingURL=PasswordValidator.d.ts.map

	//# sourceMappingURL=RefLink.d.ts.map

	enum refLinkStyle {
	    edit = 1,
	    link = 2,
	    show = 3,
	    select = 4,
	    selectTree = 5
	}
	enum refLinkTooltip {
	    none = 1,
	    html = 2
	}
	interface IRefLinkOptions {
	    style?: refLinkStyle;
	    tooltip?: refLinkTooltip;
	    callback?: Function;
	    id?: string;
	    title?: string;
	    folder?: boolean;
	    showVersion?: boolean;
	    validate?: boolean;
	    isHidden?: boolean;
	    placeholder?: string;
	    hideTitle?: boolean;
	    crossProject?: string;
	    css?: string;
	}
	//# sourceMappingURL=RefLinkDefines.d.ts.map

	//# sourceMappingURL=SummernotePlugins.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class TokenControl {
	    static showUserTokens(container: JQuery, login: string): void;
	    static showTokenList(body: JQuery, createUser: string, displayUser: string, tokenList: XRTokenType[]): void;
	    static showTokenAdd(body: JQuery, user: string, allUsers: XRUserType[], onAdded: Function): void;
	    private static updateCreate;
	    private static createToken;
	}
	//# sourceMappingURL=TokenControl.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	type UserEditMode = "create" | "useredit" | "adminedit";
	interface IUserCreate {
	    pw1?: string;
	    pw2?: string;
	    pw3?: string;
	    password?: string;
	    admin?: number;
	    login?: string;
	    email?: string;
	    firstName?: string;
	    lastName?: string;
	    signatureImage?: number;
	    customerAdmin?: number;
	    signaturePassword?: string;
	    userSettingsList?: XRSettingType[];
	}
	interface IUserGet {
	    pw1?: string;
	    pw2?: string;
	    pw3?: string;
	    password?: string;
	    admin?: number;
	    login?: string;
	    email?: string;
	    firstName?: string;
	    lastName?: string;
	    signatureImage?: string;
	    customerAdmin?: number;
	    signaturePassword?: string;
	}
	interface ITokenConfig {
	    enabled: boolean;
	    users: string[];
	}
	interface IEmailNotificationSetting {
	    periodicity: "" | "weekly" | "daily";
	}
	class UserControl {
	    static TOKEN_CONFIG: string;
	    static EMAILNOTIF_CONFIG: string;
	    constructor();
	    editUserDetails(mode: UserEditMode, userId?: string, userAddedCb?: Function, noUserAddedCb?: Function): void;
	    resetPassword(userId: string): void;
	    private canAutoFill;
	    askForPassword(container: JQuery, btnName: string, showUser: boolean, userWidth: number, onSign: (name: string, pwd: string) => void): void;
	    protected initUserAndPassword(name: JQuery, pwd: JQuery, showUser: boolean): void;
	    private editUserDetailsDlg;
	    enableSaveOAuth(): void;
	    saveEmailNotificationsSetting(user: string, setting: IEmailNotificationSetting): void;
	    renderNotificationEmailReminder(userDetails: IUserCreate, table: JQuery): void;
	    private createUserMail;
	    private enableSavePwd;
	    private setUserData;
	    private getUserDetailsHTML;
	    private generatePassword;
	}
	var userControls: UserControl;
	//# sourceMappingURL=UserControl.d.ts.map

	class User {
	    private element;
	    private resultBox;
	    constructor(el: string);
	    isOK(): boolean;
	    private validate;
	}
	//# sourceMappingURL=UserNameValidator.d.ts.map

	function InitializeParts(): void;
	//# sourceMappingURL=initialize.d.ts.map

	//# sourceMappingURL=jqueryFunctions.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ICreateDialogOptions {
	    type: string;
	    name: string;
	    folder: boolean;
	    created?: (newItems: IReference) => void;
	    singleCreate?: boolean;
	    dontOpenNewItem: boolean;
	    parent: string;
	    closed?: Function;
	}
	interface ICreateDialogEventOptions {
	    data: ICreateDialogOptions;
	}
	interface ICreateDialogButtonOptions {
	    control: JQuery;
	    linkTypes: ILinkType[];
	    singleCreate?: boolean;
	    created?: (newRef: IReference) => void;
	    isRiskControl?: boolean;
	    type?: string;
	    parent?: string;
	    docTemplate?: boolean;
	    open?: (view: ItemControl) => void;
	    tinybuttons?: boolean;
	    dontOpenNewItem: boolean;
	}
	class ItemCreationTools {
	    private onOpenDlg;
	    showDialog(options: ICreateDialogOptions): void;
	    renderButtons(options: ICreateDialogButtonOptions): void;
	    private showCreateDialog;
	    private onDialogOpen;
	    private showCreateDialogEvent;
	}
	//# sourceMappingURL=ItemCreationView.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IHistory {
	    history: IVersionDetails[];
	    id: string;
	    panel?: JQuery;
	    panelBorder?: JQuery;
	    header?: JQuery;
	    wasEdit?: boolean;
	}
	interface IHistoryMap {
	    [key: string]: IHistory;
	}
	interface IPanelOptions {
	    deletedItems: boolean;
	    deletedate?: string;
	    ctrl: JQuery;
	    id: string;
	    title: string;
	    isFolder: boolean;
	    version: number;
	    user: string;
	    action: string;
	    dateServer: string;
	    date: string;
	    comment: string;
	    allowRestore: boolean;
	    fullVersion: string;
	    auditId: number;
	    tags: XRTag[];
	}
	interface IMergeLine {
	    user: string;
	    date: string;
	    dateServer: string;
	    tags: XRTag[];
	    comment: string;
	    ctrl: JQuery;
	    auditId: number;
	    action: string;
	}
	interface IAccordionLine {
	    id: string;
	    title: string;
	    version: number;
	    user: string;
	    date: string;
	    dateServer: string;
	}
	interface IReportLine extends IAccordionLine {
	    job: number;
	}
	interface IExecuteLine extends IAccordionLine {
	}
	interface ISignLine extends IAccordionLine {
	    reason: string;
	}
	interface IAccordionToggleOptions {
	    ctrl: JQuery;
	    id: string;
	    version: number;
	    panelId: number;
	    auditId: number;
	    action: string;
	}
	interface IShowHistoryDialogOptions {
	    item: IItem;
	    preselect?: number[];
	    id?: string;
	    isFolder?: boolean;
	    readOnly?: boolean;
	}
	interface IShowHistoryDialogButtonOptions {
	    item: IItem;
	    control: JQuery;
	    id?: string;
	    isFolder?: boolean;
	    readOnly?: boolean;
	}
	class HistoryTools {
	    onNewResult(cb: () => void): void;
	    private onNewResultCallback;
	    private panelIdCounter;
	    private controls;
	    private lastHistory;
	    private readHistory;
	    private lastWasTimewarp;
	    constructor();
	    compareLatest(itemId: string): void;
	    compare(fullVersion: string): void;
	    compareVersions(itemId: string, oldVersion: number, newVersion: number): void;
	    diffAgainstLatest(localChanges: IRestParam): void;
	    showDeletedItems(ctrl: JQuery): void;
	    showActivity(ctrl: JQuery, auditIdMin?: number, auditIdMax?: number): void;
	    showReadersDigest(ctrl: JQuery): void;
	    renderButtons(options: IShowHistoryDialogButtonOptions): void;
	    private createPanel;
	    private createDateInfo;
	    private createCommentInfo;
	    private createTag;
	    private createReportLine;
	    private createExecuteLine;
	    private createReferenceLine;
	    private createSignLine;
	    private createMergeLine;
	    private downloadReport;
	    private toggle;
	    updateVersionPanes(): void;
	    private splitVersions;
	    private updateRowHeights;
	    private renderVersionPanes;
	    renderItemMeat(hi: JQuery, item: IItem): void;
	    private showSaveConflict;
	    private compareVersionDialog;
	    private checkItemId;
	    private formatUserLogin;
	    private formatUserName;
	    private showHistoryDetails;
	    private showHistoryDialog;
	    private initHistoryOptionSelect;
	    private updateHistoryOptionSelect;
	    private showDiffDialog;
	    private showNextActivity;
	    pFrom: number;
	    pCount: number;
	    pTotal: number;
	    scrollInstalled: boolean;
	    private showNextReaders;
	    private formatReadHistoryAction;
	    private showReadHistory;
	}
	//# sourceMappingURL=ItemHistoryView.d.ts.map

	interface IReferenceToolsOptions {
	    item: IItem;
	    canEdit: boolean;
	    callback?: (item: IItem) => void;
	}
	class ReferenceTools {
	    showReferenceDialog(options: IReferenceToolsOptions): void;
	}
	//# sourceMappingURL=ItemReferenceView.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IItemSelectDialogOptions {
	    linkTypes: ILinkType[];
	    getSelectedItems: () => IReference[];
	    selectionChange: (newSelection: IReference[]) => void;
	    crossProjectInit?: Function;
	    crossProject?: boolean;
	    crossProjectProject?: string;
	    crossProjectFilter?: string;
	    crossProjectFilterStrict?: boolean;
	    selectMode?: SelectMode;
	    selectOptions?: JQuery;
	    dialogTitle?: string;
	    focusOn?: string;
	    height?: number;
	    autoScroll?: boolean;
	}
	interface IItemSelectButtonOptions extends IItemSelectDialogOptions {
	    buttonName?: string;
	    smallbutton?: boolean;
	    isRiskControl?: boolean;
	    control: JQuery;
	    tinybutton?: boolean;
	}
	class ItemSelectionTools {
	    constructor();
	    showDialog(options: IItemSelectDialogOptions): void;
	    renderButtons(options: IItemSelectButtonOptions): void;
	    private showSelectDialog;
	    private toggleSelect;
	    showCrossProjectDialog(options: IItemSelectDialogOptions): void;
	    private removeHidden;
	}
	//# sourceMappingURL=ItemSelectionView.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class Layouter {
	    private itemId;
	    private mf;
	    private sectionConfig;
	    private fromSelection;
	    private toSelection;
	    private isLandScape;
	    private displayStyle;
	    constructor();
	    show(itemId: string, fieldId: number, sectionConfig: ICustomSectionOptions, fromSelection: string, toSelection: string, labelFilter: string, onUpdate: (code: string) => void, previewOnly?: boolean, previewDiv?: JQuery): void;
	    private initEditor;
	    private formatterList;
	    private displayPreview;
	    private introOptions;
	    private advancedOptions;
	    private static sortItems;
	    private static filterTopLevelFormatters;
	    private waitForJob;
	    static convert(customSectionConfig: ICustomSection, customSectionFroms: string, customSectionTo: string, paperWidth: string, mf: JQuery, container: JQuery): void;
	}
	//# sourceMappingURL=Layouter.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IThemes {
	    [key: string]: string;
	}
	interface IThemeSelector {
	    themeSelectorAdded: boolean;
	    loadTheme(themeName: string): any;
	    init(): any;
	    renderThemeSelectorControl(help: string, table: JQuery): any;
	}
	class ThemeSelector implements IThemeSelector {
	    themeSelectorAdded: boolean;
	    constructor();
	    private currentCSS;
	    private injectCSS;
	    private reloadCurrentCSS;
	    loadTheme(themeName: string): void;
	    init(): void;
	    renderThemeSelectorControl(help: string, table: JQuery): void;
	    private themes;
	}
	//# sourceMappingURL=ThemeSelector.d.ts.map

	interface IDB {
	    children?: IDB[];
	    id?: string;
	    title?: string;
	    type?: string;
	    isUnselected?: number;
	    background?: string;
	    border?: string;
	    icon?: string;
	    iconClass?: string;
	    version?: string;
	    extraStyle?: string;
	    order?: number;
	}
	interface IDBParent {
	    parent: string;
	    position: number;
	    item: IItem;
	}
	interface XRCategoryAndSettingListTypeExt {
	    settingList: XRSettingType[];
	    categoryId: number | string;
	    categoryShort: string;
	}
	interface IDBCache {
	    sortChildren(itemId: string): any;
	    initMatrixTree(init: IDB[], includeActivity: boolean): any;
	    initConfigTree(init: IDB[]): any;
	    getTree(subtreeFilter: string[]): IDB[];
	    getParentId(itemId: string): string;
	    getCategoryBreadcrumbs(category: string): any;
	    getBreadcrumbs(itemId: string): string[];
	    getType(itemId: string): string;
	    getIcon(itemId: string): string;
	    setStyle(itemIds: string[], style: string, computeFolder: number): any;
	    setStyleRec(folder: IDB[], itemIds: string[], style: string, computeFolder: number): boolean;
	    isFolder(itemId: string): boolean;
	    getItemTitle(itemId: string): string;
	    getItemType(itemId: string): string;
	    isHiddenLink(itemId: string): boolean;
	    setHiddenLink(itemId: string, hidden: number): void;
	    hasChildren(itemId: string): boolean;
	    doesExist(itemId: string): boolean;
	    insertItem(itemJson: IItem, parentId: string): IDBParent;
	    copyFrom(target: string, source: IDB): boolean;
	    getRootOfType(category: string): string;
	    deleteItem(itemId: string): IDB;
	    moveItem(itemId: string, newFolder: string, newPosition: number): any;
	    updateItem(itemJson: IItem): void;
	    getChildrenIds(parentId: string): string[];
	    getItemFromCache(itemId: string): IDB;
	}
	class DBCache implements IDBCache {
	    private db;
	    private activities;
	    private groupPos;
	    private groupDefintion;
	    private breadCrumbs;
	    constructor();
	    protected createVirtualFolder(id: string, title: string, icon?: string, color?: string): IDB;
	    protected createVirtualItem(order: number, id: string, title: string, icon?: string): IDB;
	    sortChildren(itemId: string): void;
	    initMatrixTree(init: IDB[], includeActivity: boolean): void;
	    initConfigTree(init: IDB[]): void;
	    /** getTree returns a tree or a sub tree of the project.
	     * this call is synchronous. The database tree is created once during the
	     * initialization and filtered after as needed.
	     *
	     * @param {type} subtreeFilter
	     * @returns tree object
	     */
	    getTree(subtreeFilter: string[]): IDB[];
	    getParentId(itemId: string): string;
	    getCategoryBreadcrumbs(category: string): string[];
	    getBreadcrumbs(itemId: string): string[];
	    getType(itemId: string): string;
	    getIcon(itemId: string): string;
	    setStyle(itemIds: string[], style: string, computeFolder: number): void;
	    setStyleRec(folder: IDB[], itemIds: string[], style: string, computeFolder: number): boolean;
	    isFolder(itemId: string): boolean;
	    getItemTitle(itemId: string): string;
	    getItemType(itemId: string): string;
	    isHiddenLink(itemId: string): boolean;
	    setHiddenLink(itemId: string, hidden: number): void;
	    hasChildren(itemId: string): boolean;
	    doesExist(itemId: string): boolean;
	    insertItem(itemJson: IItem, parentId: string): IDBParent;
	    copyFrom(target: string, source: IDB): boolean;
	    getRootOfType(category: string): string;
	    deleteItem(itemId: string): IDB;
	    moveItem(itemId: string, newFolder: string, newPosition: number): void;
	    updateItem(itemJson: IItem): void;
	    getChildrenIds(parentId: string): string[];
	    getItemFromCache(itemId: string): IDB;
	    private internalReplace;
	    private findInChildren;
	    private findInDB;
	    private findParentId;
	    private deleteItemRec;
	    private insertAtRec;
	}
	//# sourceMappingURL=DBCache.d.ts.map

	interface ISettingMapString {
	    [key: string]: string;
	}
	interface ISettingMapStringArray {
	    [key: string]: string[];
	}
	interface ISettingMapJSON {
	    [key: string]: {};
	}
	interface ICategoryConfig {
	    fieldList: XRFieldTypeAnnotated[];
	    label: string;
	    downLinksRequired: string[];
	    downLinksOptional: string[];
	    enable: string[];
	}
	interface ICategoryConfigMap {
	    [key: string]: ICategoryConfig;
	}
	interface XRFieldTypeAnnotated extends XRFieldType {
	    parameterJson?: XRFieldTypeAnnotatedParamJson;
	}
	interface XRFieldTypeAnnotatedParamJson extends IFieldParameter {
	    linkTypes?: XRFieldTypeAnnotatedParamJsonLinkType[];
	}
	interface XRFieldTypeAnnotatedParamJsonLinkType {
	    required: boolean;
	    type: string;
	}
	interface IFieldsOfType {
	    category: string;
	    field: XRFieldTypeAnnotated;
	}
	interface IUserPermission {
	    userPermission: XRUserPermissionType[];
	}
	interface ISettingValidationFinding {
	    category?: string;
	    findings: ISettingValidationFindingDetail[];
	}
	interface ISettingValidationFindingDetail {
	    message: string;
	    path: string;
	}
	interface IDropDownInfo {
	    id: string;
	    label: string;
	    value: IDropDownConfig;
	}
	class ItemConfiguration {
	    private configuration;
	    private settings;
	    private settingsString;
	    private settingsJSON;
	    private users;
	    private userList;
	    private userGroups;
	    private modules;
	    private accessRights;
	    private timewarpDate;
	    isConfigured(): boolean;
	    addUsers(userPer: XRGetProject_ProjectInfo_ProjectInfo): void;
	    getUserInfo(login: string): XRUserPermissionType;
	    getFullName(login: string): string;
	    hasGroupInfo(group: string): boolean;
	    hasUserInfo(login: string): boolean;
	    getUserIds(): string[];
	    getEmail(user?: string): string;
	    activateTimewarp(date: string): void;
	    getTimeWarp(): string;
	    isAfterTimeWarp(date: string): boolean;
	    hasWriteAccess(user: string): boolean;
	    getPermission(user: string): number;
	    getUserNames(sorted?: boolean): XRUserPermissionType[];
	    getUserGroups(): XRGroupPermissionType[];
	    addGroupMember(gid: number, user: string): void;
	    removeGroupMember(gid: number, user: string): void;
	    amIAllowedUser(limitedTo: string[]): boolean;
	    addSettings(s: XRGetProject_ProjectInfo_ProjectInfo | XRGetProject_ProjectSettingAll_GetSettingAck): void;
	    getSettings(): XRSettingType[];
	    getSetting(s: string): string;
	    getSettingJSON(s: string, def?: {}): {};
	    getDropDowns(dropdownId?: string): IDropDownInfo[];
	    getTasksConfig(): ITasksConfiguration;
	    getDHFConfig(): IDHFConfig;
	    getExtrasConfig(): IExtras;
	    getLabelsConfig(): ILabelsConfig;
	    getQMSConfig(): IQMSConfig;
	    getRiskConfig(): IRiskConfig;
	    getCategoryGroupConfig(): ICategoryGroups;
	    getACLConfig(): IACL;
	    getTraceConfig(): ITraceConfig;
	    getNavigationBarConfig(project: string): INavigationBar;
	    getContextPagesConfig(): IContextPageConfig;
	    getMailConfig(includeServerSettings?: boolean): IMailConfig;
	    getSearchConfig(): ISearchConfig;
	    getLabelLockConfig(): ILabelLockConfig;
	    getTestConfig(): ITestConfig;
	    setSettingJSON(key: string, valueJSON: {}): void;
	    getSmartText(): ISmartTextConfig;
	    setSmartText(config: ISmartTextConfig): void;
	    addCategorySetting(categorySetting: XRCategoryAndSettingListType): void;
	    getCategorySettings(category: string): XRSettingType[];
	    getPluginSetting(pluginId: number, setting: string): string;
	    getPluginSettings(): XRPluginSetting[];
	    getFieldsOfType(fieldType: string, categoryType?: string): IFieldsOfType[];
	    getCategorySetting(category: string, setting: string): ICategorySetting;
	    getCategories(noFolders?: boolean): string[];
	    getCategoryLabel(category: string): string;
	    getCategoryId(category: string): string;
	    getDownLinkTypes(category: string, required: boolean): string[];
	    getUpLinkTypes(category: string, required: boolean): string[];
	    addCategories(config: XRGetProject_ProjectInfo_ProjectInfo | XRGetProject_CategoryList_GetProjectStructAck): void;
	    init(config: XRGetProject_ProjectInfo_ProjectInfo): void;
	    canEdit(category: string): boolean;
	    canEditTitle(category: string): boolean;
	    canMove(category: string): boolean;
	    canCreate(category: string): boolean;
	    canDelete(category: string): boolean;
	    canModifyLabels(category: string): boolean;
	    canSign(category: string): boolean;
	    canReport(category: string): boolean;
	    private canDo;
	    private addCategory;
	    getItemConfiguration(category: string): ICategoryConfig;
	    getFieldId(category: string, fieldLabel: string): number;
	    getFields(category: string): XRFieldTypeAnnotated[];
	    getFieldByName(category: string, name: string): XRFieldTypeAnnotated;
	    getFieldById(category: string, fieldId: number): XRFieldTypeAnnotated;
	    getFieldConfig(fieldId: number): XRFieldTypeAnnotatedParamJson;
	    getFieldName(fieldId: number): string;
	    getFieldType(category: string, fieldId: number): string;
	    getLinkTypes(category: string, down: boolean, required: boolean): string[];
	    getLinkInfo(category: string, down: boolean, required: boolean, groupByRule: boolean): ILinkInfo[];
	    validateTraceability(tc?: ITraceConfig, cats?: string[], testCats?: string[], mitCats?: ISettingMapStringArray): ISettingValidationFinding[];
	    getMitigations(): IStringStringArrayMap;
	    /** return cleanup rules, if there's a project setting that wins, if there's no rules or it's disabled it returns -1 */
	    getCleanupRules(): ICleanup;
	    private verifyNoTracesTo;
	    private verifyTracesBetween;
	    private checkReporting;
	    private checkNoRules;
	    getTraceRule(tc: ITraceConfig, category: string): ITraceConfigDetails;
	    /** validate xtc settings
	     *
	     */
	    validateTestConfiguration(tc?: ITestConfig, cats?: string[]): ISettingValidationFinding[];
	    private goodResultClass;
	    private wrongResultClass;
	    private wrongResultHuman;
	    private countResultCodes;
	    private verifyColumns;
	    private addTraceFinding;
	}
	//# sourceMappingURL=ItemConfiguration.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ITraceRules {
	    valid: boolean;
	    mustHaveCategories: string[];
	    canHaveCategories: string[];
	    exstingCategories: string[];
	    missingMustHaveCategories: string[];
	    missingCanHaveCategories: string[];
	    outdatedReferences: string[];
	}
	interface ILinkInfo {
	    category: string | string[];
	    reason: string;
	}
	interface IVersionDetails {
	    action: string;
	    id: string;
	    title: string;
	    user: string;
	    date: string;
	    dateUserFormat: string;
	    job?: number;
	    reason?: string;
	    comment: string;
	    version: number;
	    fullVersion: string;
	    auditId: number;
	    tags: XRTag[];
	}
	interface XRTrimNeedleItemJob extends XRTrimNeedleItem {
	    job?: number;
	}
	interface ILogoConfig {
	    fileId?: string;
	    logoId?: string;
	}
	interface IReferenceUpdate {
	    added: boolean;
	    fromId: string;
	    toId: string;
	    date: string;
	    dateUserFormat: string;
	    comment: string;
	    user: string;
	}
	interface ISimpleTree {
	    itemId: string;
	    title: string;
	    children?: ISimpleTree[];
	}
	interface ISetField {
	    fieldName: string;
	    value: string;
	}
	class MatrixReq {
	    private dbConnection;
	    private _itemId;
	    private _needsSave;
	    private forceUIRefreshTimer;
	    private lastState;
	    private freezeDuringSave;
	    mainApp: boolean;
	    itemForm: JQuery;
	    printForm: JQuery;
	    dlgForm: JQuery;
	    mainTreeLoaded: boolean;
	    constructor(dataSource: RestDB);
	    setCache(externalCache: DBCache): void;
	    loadProject(project: string, item: string): void;
	    loadTree(project: string): JQueryDeferred<{}>;
	    loadTreeAndItem(project: string, item: string): JQueryDeferred<IItem>;
	    updateFavicon(project: string, notification: boolean): void;
	    waitForMainTree(callback: () => void): void;
	    private loadTreeWithSearches;
	    private colorBySearches;
	    private showTree;
	    getTree(subtreeFilter?: string[]): IDB[];
	    getSubTree(itemId: string): ISimpleTree;
	    getAuditDetailsAsync(auditId?: number, ignoreErrors?: boolean): JQueryDeferred<XRTrimAudit>;
	    getItemAsync(itemId: string, version?: number, ignoreErrors?: boolean, noHistory?: boolean): JQueryDeferred<IItem>;
	    getNeedlesAsync(searchExpr: string, up: boolean, down: boolean, fields: string, labels: boolean, ignoreFilters?: boolean): JQueryDeferred<IItem[]>;
	    getItemProjectAsync(project: string, itemId: string, ignoreErrors?: boolean): JQueryDeferred<IItem>;
	    getProjectItemAsync(project: string, itemId: string, version?: number, includeHistory?: boolean): JQueryDeferred<IItem>;
	    getProjectCatFields(project: string): JQueryDeferred<XRCategoryExtendedType[]>;
	    getItemFromTree(itemId: string): IDB;
	    getChildrenIds(parentId: string): string[];
	    getChildrenIdsRec(itemId: string): string[];
	    getParentId(itemId: string): string;
	    getCategoryBreadcrumbs(category: string): string[];
	    getBreadcrumbs(itemId: string): string[];
	    setStyle(itemIds: string[], style: string, computeFolder: number): void;
	    getRootOfType(category: string): string;
	    startReportAsync(itemId: string, reportOptions: IReportOptions): JQueryDeferred<{}>;
	    canLaunchReport(): JQueryDeferred<boolean>;
	    startCreateDocumentAsync(itemId: string, reportOptions: IReportOptions): JQueryDeferred<XRPostProject_LaunchReport_CreateReportJobAck>;
	    getReportDetails(jobId: number): JQueryDeferred<XRGetProject_JobStatus_JobsStatusWithUrl>;
	    compareHTML(compareParams: XCPostCompareHtml): JQueryDeferred<XRPostProject_CompareHtml_HtmlCompareResult>;
	    isFolder(itemId: string): boolean;
	    getItemTitle(itemId: string, display?: boolean): string;
	    download(jobId: number, file: number, param?: string[]): void;
	    downloadFromUrl(url: string, param?: IStringMap): void;
	    downloadInMemory(jobId: number, file: string, dataType?: string): JQueryDeferred<string>;
	    downloadInMemoryFromUrl(url: string): JQueryDeferred<string>;
	    searchAsync(term: string, filter?: string, ignoreFilters?: boolean, fieldList?: string, crossProject?: string, labels?: boolean, down?: boolean, up?: boolean, treeOrder?: boolean): JQueryDeferred<ISearchResult[]>;
	    searchAsyncMinimalOutput(term: string, filter?: string, ignoreFilters?: boolean, crossProject?: string): JQueryDeferred<string[]>;
	    updateItemInDBAsync(itemJson: IItemPut, auditAction: string, requireVersion?: number): JQueryDeferred<IItemGet>;
	    getItemFromDBAsync(itemId: string): Promise<IItem>;
	    getFieldFromDBAsync(itemId: string, fieldName: string): Promise<any>;
	    setFieldInDBAsync(itemId: string, fieldName: string, value: string): Promise<any>;
	    setFieldsInDBAsync(itemId: string, data: ISetField[]): Promise<any>;
	    createItemOfTypeAsync(category: string, itemJson: IItemPut, actions: string, parentId: string, dontFailOnCleanup?: boolean): JQueryDeferred<IDBParent>;
	    restoreItemAsync(itemId: string, title: string, version: number): JQueryDeferred<IRestoreItemResult>;
	    deleteItem(itemId: string): JQueryDeferred<{}>;
	    private verifyNoLockedItems;
	    uploadFileProjectAsync(file: IFileParam, progress: (p: IFileUploadProgress) => void): JQueryDeferred<{}>;
	    fetchFileAsync(url: string, progress: (p: IFileUploadProgress) => void): JQueryDeferred<XRPostProject_AddFile_AddFileAck>;
	    resizeItem(force?: boolean): void;
	    itemChanged(needsSave: boolean): void;
	    updateItem(newItem: IItem): void;
	    setFieldValue(fieldId: number, newValue: string): void;
	    getFieldValue(fieldId: number): any;
	    getCurrentTitle(): any;
	    addDownLinkAsync(fromId: string, toId: string): JQueryDeferred<{}>;
	    removeDownLinkAsync(fromId: string, toId: string): JQueryDeferred<{}>;
	    setSettingJSON(key: string, valueJSON: {}): JQueryDeferred<{}>;
	    readSettingJSONAsync(key: string, otherProject?: string, noRetry?: boolean): JQueryDeferred<{}>;
	    setSettingCustomerJSON(key: string, valueJSON: {}): JQueryDeferred<unknown>;
	    readSettingCustomerJSONAsync(key: string): JQueryDeferred<{}>;
	    getMissingUpLinks(item: IItem): string[];
	    isUpLinkMissing(item: IItem): boolean;
	    getMissingDownLinks(item: IItem): string[];
	    getLinkCategories(item: IItem, ctrlParameter: ILinkCollectionOptions): ILinkCategories[];
	    isDownLinkMissing(item: IItem): boolean;
	    isAnyLinkOutdated(item: IItem): boolean;
	    hasLinks(item: IItem): boolean;
	    isHiddenLink(itemId: string): boolean;
	    setHiddenLink(itemId: string, hidden: number): void;
	    saveAsync(sendUnEdit: boolean): JQueryDeferred<{}>;
	    forceReadonly(itemId: string): void;
	    cancel(): void;
	    someOneElseChanged(): void;
	    private waitingForEditRights;
	    someOneIsChangingTheItem(): void;
	    waitForEditRights(): void;
	    someOneElseIsChanging(watcherInfo: IItemWatched): void;
	    someOneElseWasChanging(watcherInfo: IItemWatched): void;
	    someOneElseStoppedEditing(watcherInfo: IItemWatched, previousWatcherInfo: IItemWatched): void;
	    updateItemViewers(watcherInfo: IItemWatched): void;
	    protected updateItemDisplay(watcherInfo: IItemWatched): void;
	    getVersion(): string;
	    getVersionQualifier(): string;
	    getNeedsSave(): boolean;
	    getType(itemId: string): string;
	    getAvailableReportsAsync(): JQueryDeferred<XRGetProject_Reports_GetReportsAck>;
	    getDeletedItemsAsync(insertInList: (item: IVersionDetails) => void, progress: (p: number) => void, deleteLog?: IVersionDetails[], startAt?: number): JQueryDeferred<{}>;
	    getActivityAsync(insertInList: (item: IVersionDetails, first?: number, last?: number, referenceChange?: IReferenceUpdate) => void, startAt?: number, count?: number, auditIdMin?: number, auditIdMax?: number): JQueryDeferred<number>;
	    canNavigateAwayAsync(): JQueryDeferred<{}>;
	    treeSelectionChangeAsync(newItemId: string): JQueryDeferred<{}>;
	    moveItemsAsync(itemIds: string, newFolder: string, newPosition?: number, useComment?: string): JQueryDeferred<{}>;
	    updateMaxVersion(itemId: string): JQueryDeferred<unknown>;
	    removedFromTree(itemId: string, parentId: string): void;
	    insertInTree(newItem: IDBParent): void;
	    copyFrom(target: string, source: IDB): void;
	    updateCache(newItem: IUpdateCache): void;
	    createItemUrl(itemId?: string, crossProject?: string): string;
	    renderItem(cachedItem?: IItem): void;
	    print(): void;
	    touchAsync(itemOrFolderId: string, depth: number): JQueryDeferred<string>;
	    setLabels(newLabels: IItemGet): JQueryDeferred<{}>;
	    needsSave(): boolean;
	    signItemAsync(itemId: string, password: string, meaning?: string): JQueryDeferred<XRPostProject_SignItem_SignItemAck>;
	    checkPassword(password: string): JQueryDeferred<IRestResult>;
	    convertDocAsync(fileNo: number, targetDocumentFolder?: string, useOriginal?: boolean): JQueryDeferred<string>;
	    pingCurrentItem(): void;
	    getCurrentItemId(): string;
	    /** sessions */
	    commitChangeListAsync(changeList: IReferenceChange[]): JQueryDeferred<{}>;
	    /**
	     *  product variations
	     * */
	    isMedical(strict?: boolean): boolean;
	    commentRequired(): boolean;
	    touchToolAvailable(item: IItem): boolean;
	    auditTrailAvailable(): boolean;
	    mailToolAvailable(): boolean;
	    postLogin(user: string): void;
	    canDeleteItem(item: IItem): boolean;
	    canViewItem(item: IItem): boolean;
	    canEditItem(item: IItem): boolean;
	    canCreateItemType(category: string, folder?: boolean): boolean;
	    canDragDrop(category: string, id: string): boolean;
	    dragEnter?: (dragged: Fancytree.FancytreeNode, target: Fancytree.FancytreeNode) => string[] | boolean;
	    canSeeField(category: string, field: number): boolean;
	    canEditField(category: string, field: number): boolean;
	    private refreshUIAsync;
	    evaluateTraceRule(item: IItem, checkDownRule: boolean): ITraceRules;
	    private commitChangeListRec;
	    static getProjectIcon(customLogo: string, alternateValue?: string): any;
	    static getProjectLogo(customLogo: string): any;
	}
	//# sourceMappingURL=MatrixReq.d.ts.map

	/// <reference types="jquery" />
	interface IItemViewEvent {
	    caller: any;
	    item: IItem;
	    view: ItemControl;
	}
	interface IItemChangeEvent {
	    caller: any;
	    view: ItemControl;
	    before: IItem;
	    after: IItem;
	}
	interface IPreCreateItemEvent {
	    caller: any;
	    view: ItemControl;
	    isItem: boolean;
	    category: string;
	}
	interface IPreCreateCloseEvent {
	    caller: any;
	    ok: boolean;
	}
	interface IGenericItemEvent {
	    caller: any;
	    item: IItem;
	}
	interface IGenericItemIdEvent {
	    caller: any;
	    itemId: string;
	}
	interface INewItemIdEvent {
	    caller: any;
	    item: IDBParent;
	}
	interface ILabelChangeEvent {
	    caller: any;
	    item: IItem;
	    set: string[];
	    unset: string[];
	}
	interface ISignatureEvent {
	    caller: any;
	    item: IItem;
	    lastuser: boolean;
	}
	interface IEvent<TArgs, TMode> {
	    subscribe(caller: any, fn: (args: TArgs) => TMode): void;
	    unsubscribe(fn: (args: TArgs) => TMode): void;
	    dispatch(args: TArgs): TMode;
	}
	class EventDispatcher<TArgs> implements IEvent<TArgs, void> {
	    private _subscriptions;
	    private _callers;
	    subscribe(caller: any, fn: (args: TArgs) => void): void;
	    unsubscribe(fn: (args: TArgs) => void): void;
	    dispatch(args: TArgs): void;
	}
	class EventDispatcherAsync<TArgs> implements IEvent<TArgs, JQueryDeferred<{}>> {
	    private _subscriptionsAsync;
	    private _callersAsync;
	    subscribe(caller: any, fn: (args: TArgs) => JQueryDeferred<{}>): void;
	    unsubscribe(fn: (args: TArgs) => JQueryDeferred<{}>): void;
	    dispatch(args: TArgs): JQueryDeferred<{}>;
	    private dispatchAsyncOne;
	}
	class MR1Impl {
	    cbsItemDisplayed: EventDispatcher<IItemViewEvent>;
	    cbsCreateItemDisplayed: EventDispatcher<IPreCreateItemEvent>;
	    cbsCreateItemDisplayedClose: EventDispatcher<IPreCreateCloseEvent>;
	    cbsBeforeSave: EventDispatcherAsync<IItemChangeEvent>;
	    cbsAfterSave: EventDispatcher<IItemChangeEvent>;
	    cbsAfterRestore: EventDispatcher<IGenericItemIdEvent>;
	    cbsAfterDelete: EventDispatcher<IGenericItemEvent>;
	    cbsAfterCreate: EventDispatcher<INewItemIdEvent>;
	    cbsAfterCreateSign: EventDispatcher<IGenericItemEvent>;
	    cbsBeforeDelete: EventDispatcherAsync<IGenericItemEvent>;
	    cbsAfterLabelChange: EventDispatcher<ILabelChangeEvent>;
	    cbsAfterSignature: EventDispatcher<ISignatureEvent>;
	    triggerItemCreate(view: ItemControl, isItem: boolean, category: string): void;
	    triggerItemCreateClose(ok: boolean): void;
	    triggerItemDisplayed(item: IItem, view: ItemControl): void;
	    triggerBeforeSaveAsync(view: ItemControl, before: IItem, after: IItem): JQueryDeferred<{}>;
	    triggerAfterSave(view: ItemControl, before: IItem, after: IItem): void;
	    triggerAfterRestore(itemId: string): void;
	    triggerAfterDelete(item: IItem): void;
	    triggerAfterItemCreate(item: IDBParent): void;
	    triggerAfterCreateSign(item: IItem): void;
	    triggerBeforeDeleteAsync(item: IItem): JQueryDeferred<{}>;
	    triggerAfterLabelChange(item: IItem, before: string[], after: string[]): void;
	    triggerAfterSignature(item: IItem, lastuser: boolean): void;
	    onItemDisplayed(): IEvent<IItemViewEvent, void>;
	    onItemCreateDlgOpen(): IEvent<IPreCreateItemEvent, void>;
	    onItemCreateDlgClose(): IEvent<IPreCreateCloseEvent, void>;
	    onAfterSave(): IEvent<IItemChangeEvent, void>;
	    onAfterRestore(): IEvent<IGenericItemIdEvent, void>;
	    onAfterDelete(): IEvent<IGenericItemEvent, void>;
	    onAfterCreate(): IEvent<INewItemIdEvent, void>;
	    onAfterCreateSign(): IEvent<IGenericItemEvent, void>;
	    onAfterLabelChange(): IEvent<ILabelChangeEvent, void>;
	    onAfterSignature(): IEvent<ISignatureEvent, void>;
	    onBeforeSaveAsync(): IEvent<IItemChangeEvent, JQueryDeferred<{}>>;
	    onBeforeDeleteAsync(): IEvent<IGenericItemEvent, JQueryDeferred<{}>>;
	}
	var MR1: MR1Impl;
	/** tests...
	// MR1.onAfterLabelChange().subscribe( this, function (event:ILabelChangeEvent) { console.log("Label changed for " + event.item.id + " set: '" + event.set.join() + "' unset: '" + event.unset.join() + "'");} );
	MR1.onBeforeDeleteAsync().subscribe( this, function (event:IGenericItemEvent) {
	    console.log("MR1 >>>Could cancel item delete " + event.item.id);
	    let res = $.Deferred();
	    res.resolve(); // res.reject(); to cancel
	    return res;
	});
	MR1.onBeforeSaveAsync().subscribe( this, function (event:IItemChangeEvent) {
	    console.log("MR1 >>>Could cancel save of " + event.before.id);
	    let res = $.Deferred();
	    res.resolve(); // res.reject(); to cancel
	    return res;
	});
	MR1.onAfterCreate().subscribe( this, function (event:INewItemIdEvent) { console.log("MR1 >>>Item created " + event.item.item.id);} );
	MR1.onAfterCreateSign().subscribe( this, function (event:IGenericItemEvent) { console.log("MR1 >>>SIGN created " + event.item.id);} );
	MR1.onAfterSignature().subscribe( this, function (event:ISignatureEvent) { console.log("MR1 >>>SIGNED " + event.item.id + " by " + matrixSession.getUser() +  ( event.lastuser?" as last signature":" but not last signature"));} );
	MR1.onAfterSave().subscribe( this, function (event:IItemChangeEvent) { console.log("MR1 >>>Item saved " + event.after.id);} );
	MR1.onAfterRestore().subscribe( this, function (event:IGenericItemIdEvent) { console.log("MR1 >>>Item restored " + event.itemId);} );
	MR1.onAfterDelete().subscribe( this, function (event:IGenericItemEvent) { console.log("MR1 >>>Item deleted " + event.item.id);} );
	MR1.onItemDisplayed().subscribe( this, function (event:IGenericItemEvent) { console.log("MR1 >>>Item displayed " + event.item.id);} );
	MR1.onItemCreateDlgOpen().subscribe( this, function (event:IPreCreateItemEvent) {  console.log("MR1 >>>Create item dialog with " + event.view.getControls().length + " controls.");}  );
	*/
	/** example extract all italic from text and put in title when saving if title is " " or ""
	MR1.onBeforeSaveAsync().subscribe( this, function (event:IItemChangeEvent) {
	    console.log("MR1 >>>Could cancel save of " + event.before.title);
	    if (event.after.title == " " || event.after.title == "") {
	        let tf = IC.getFieldsOfType("richtext",event.after.type);
	        let italics="";
	        $.each( tf, function(idx, tfd) {
	            let tfc = $("<div>").html(event.after[tfd.field.id]);
	            $("span", tfc).each( function(spanIdx,span) {
	                if ($(span).css("font-style").indexOf("italic")!=-1) {
	                    italics += italics?(" "+$(span).text()):$(span).text();
	                }
	            });
	        });
	        event.after.title = italics?italics:"title required";
	    }
	    let res = $.Deferred();
	    res.resolve();
	    return res;
	});
	 */
	//# sourceMappingURL=MatrixRequirementsAPI.d.ts.map

	/// <reference types="jquery" />
	interface IGetProjectResult {
	    settings: IGetProjectResultSetting[];
	    currentUser: string;
	    customerAdmin: number;
	    superAdmin: number;
	    dateInfo: IGetProjectResultDateInfo;
	    customerSettings: IGetProjectResultSetting[];
	    project: XRProjectType[];
	}
	interface IGetProjectResultSetting {
	    key: string;
	    value: string;
	}
	interface IGetProjectResultDateInfo {
	    timeformat: string;
	    dateformat: string;
	    timeZone: string;
	    customerDateformat: string;
	    customerTimeformat: string;
	    customerTimezone: string;
	    dateIso8601: string;
	    timeUserFormat: string;
	}
	interface IGetProjectResultDateInfos {
	    key: string;
	    value: string;
	}
	interface ICustomerSettingString {
	    [key: string]: string;
	}
	interface ICustomerSettingJSON {
	    [key: string]: {};
	}
	interface IPostLoginResult {
	    actualLogin: string;
	    userId: number;
	    userDetails: IPostLoginResultUserDetail;
	    maxAge: number;
	}
	interface IPostLoginResultUserDetail {
	    id: number;
	    login: string;
	    email: string;
	    firstName: string;
	    lastName: string;
	    signatureImage: number;
	    customerAdmin: number;
	    passwordAgeInDays: number;
	    badLogins: number;
	    badLoginsBefore: number;
	    superAdmin: number;
	    userSettingsList: IGetProjectResultSetting[];
	}
	interface ICompanyUISettings {
	    /** allow to add links to locked items */
	    allowAddLinkToLocked?: boolean;
	    /** if true the save button is always on the left */
	    saveLeft?: boolean;
	    /** if set to true, auto clean the input of text fields */
	    purify?: boolean;
	    /** editor setting */
	    tiny?: ICompanyTiny;
	    /** always use new editor (also for old projects) */
	    tinyAsDefault?: boolean;
	    /** true if user should be able to switch from editor to tiny per field */
	    tinyUpgradeOption?: boolean;
	    /** how many items to show in list view (after running searches, default 200) */
	    maxHits?: number;
	    /** @experimental: Enable the widget dashboard on instance root */
	    widgetDashboardOption?: boolean;
	    /** internal: url of draw io editor */
	    drawioURL?: string;
	    /** @experimental: if set to anything > 0 the fields in a form are rendered in a non blocking way if there are more than largeFormRender fields */
	    largeFormRender?: number;
	    /** @internal beta - do not auto select parents if single item is selected for DOC */
	    preciseDocSelect?: boolean;
	    /** @internal obsolete */
	    legacyPrint?: boolean;
	    /** @internal obsolete */
	    legacyUserDropdown?: number;
	    /** @internal obsolete */
	    legacyKeepFolder?: boolean;
	}
	interface ICompanyTiny {
	    /** true if browser context menu should be used as default */
	    tinyHideMenu?: boolean;
	    /** enable or disable editor plugins */
	    plugins?: string[];
	    extraPlugins?: string[];
	    /** toolbar definition */
	    toolbar?: string;
	    /** menubar definition  default: edit view insert format table matrix */
	    menubar?: string;
	    /** menu entries can be used to change default menus or add details of new menu bar */
	    menu?: ICompanyTinyMenuMap;
	    /** allows to overwrite any default setting (e.g. misc: { "table_toolbar": ""} )  to hide table toolbar */
	    misc?: any;
	    /** html entities to accept in text */
	    extended_valid_elements?: string;
	    /**  optional: formats in Paragraph menu (for docs) */
	    block_formats_doc?: any;
	    /** optional: rules for formats (for docs) */
	    apply_formats_doc?: any;
	    /** optional: formats in style menu (for docs) */
	    style_formats_doc?: any;
	    /** optional: formats in Paragraph menu (for items) */
	    block_formats?: any;
	    /** optional: rules for formats (for items)  */
	    apply_formats?: any;
	    /** optional: formats in style menu (for items) */
	    style_formats?: any;
	    /** elements which don't need content (e.g. a TD cell can be empty, needs to be the complete list) */
	    short_ended_elements?: string;
	    /** a custom css name/path */
	    css?: string;
	    /** if true it used dom purify to super clean the html */
	    dompurify?: boolean;
	    /** requires textpattern plugin! see https://www.tiny.cloud/docs/plugins/opensource/textpattern/ */
	    textpattern_patterns?: any[];
	}
	interface ICompanyTinyMenuMap {
	    [key: string]: ICompanyTinyMenu;
	}
	interface ICompanyTinyMenu {
	    /** display name of menu */
	    title: string;
	    /** items to show */
	    items: string;
	}
	class MatrixSession {
	    private quiet;
	    private CurrentUser;
	    private CurrentProject;
	    private CurrentComment;
	    private customerAdmin;
	    private superAdmin;
	    private dateInfo;
	    private customerSettingsString;
	    private customerSettingsJSON;
	    private ProjectList;
	    private CommitTransaction;
	    private CommitTransactionComment;
	    private CommitTransactionCancelled;
	    private postConnect;
	    duringBrowserNavigation: boolean;
	    private userPermissions;
	    private licensedModules;
	    lastManualComment: string;
	    serverConfig: XRGetProject_StartupInfo_ListProjectAndSettings;
	    private myTodoCount;
	    private myTodos;
	    pushMessages: PushMessages;
	    private customParams;
	    private branches;
	    constructor();
	    startCommitTransaction(): void;
	    stopCommitTransaction(): void;
	    getUser(): string;
	    setUser(login: string): void;
	    private setDateInfo;
	    getDateInfo(): IGetProjectResultDateInfo;
	    private setCustomerSettings;
	    setCustomerSettingJSON(s: string, setting: {}): void;
	    getCustomerSetting(s: string): string;
	    getCustomerSettingJSON(s: string, defaultValue?: {}): any;
	    getUISettings(defaultValues?: {}): ICompanyUISettings;
	    setUISetting(setting: string, value: any): void;
	    showUISettings(): void;
	    isEditor(): boolean;
	    isCustomerAdmin(): boolean;
	    isSuperAdmin(): boolean;
	    isAdmin(): boolean;
	    getProject(): string;
	    setProject(projectId: string): void;
	    getCommentAsync(): JQueryDeferred<string>;
	    getComment(): string;
	    private makeTeaser;
	    getCommentTeaser(): string;
	    setComment(comment?: string, internal?: boolean): void;
	    isGroup(): boolean;
	    isQMS(): boolean;
	    isMerge(): boolean;
	    isReview(): boolean;
	    isACL(): boolean;
	    isQMSProject(project?: string): boolean;
	    limitAdmin(): boolean;
	    hasRisks(): boolean;
	    hasVariants(): boolean;
	    hasDocs(): boolean;
	    hasAgileSync(): boolean;
	    private setModules;
	    private getLastComments;
	    tryReconnect(): JQueryDeferred<{}>;
	    signInAfterTimeout(): JQueryDeferred<{}>;
	    triggerLoginWithDialog(): void;
	    changePassword(): void;
	    getProjectList(readOrWriteOnly: boolean): XRProjectType[];
	    canSeeProject(project: string): boolean;
	    private changeToken;
	    setProjectColor(projectShort: string, color: string): void;
	    getProjectColor(projectShort: string): string;
	    getImgFromProject(pRef: string, offsetTop?: number): string;
	    private createProjectSelectLink;
	    updateUI(afterTimeout?: boolean): void;
	    addLiveQMSProjects(): 0 | 1;
	    updateCommentCheckboxBoxVisibility(): any;
	    loadProject(projectId: string, projectURL?: string, setAsProjectUrl?: boolean): void;
	    oAuthOnly(): boolean;
	    private showProjectSelectMessage;
	    private filterProjects;
	    private getItemFromUrlOrStorage;
	    private getProjectFromUrlOrStorage;
	    browserNavigation(): void;
	    signOut(requestAdminRights: boolean): void;
	    editComment(): void;
	    showLoginWindow(): void;
	    hideLoginWindow(): void;
	    private requestLogin;
	    private receiveMessage;
	    private addHelpButton;
	    getHelpButton(): string;
	    private showUserMenu;
	    setNotificationCounts(todos: XRTodoCount[]): void;
	    getNotificationCounts(): XRTodoCount[];
	    getNotifications(): XRTodo[];
	    setNotifications(todos: XRTodo[]): void;
	    initPushMessaging(): JQueryDeferred<{}>;
	    private lastWatchInfo;
	    updateWatchItemVersion(itemId: string, newVersion: number): void;
	    isConfigClient(): boolean;
	    private updateSettings;
	    getBranches(mainline: string, branch: string): XRMainAndBranch[];
	    private signOutCleanUp;
	    getCustomParams(): IStringMap;
	    getDashboardConfig(): IDashboardConfig;
	}
	//# sourceMappingURL=MatrixSession.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IPlugin {
	    initItem?: (item: IItem, jui: JQuery) => void;
	    initServerSettings?: (serverSettings: XRGetProject_StartupInfo_ListProjectAndSettings) => void;
	    updateMenu?: (ul: JQuery, hook: number) => void;
	    supportsControl?: (ctrl: string) => boolean;
	    createControl?: (ctrlObj: JQuery, settings: IBaseControlOptions) => void;
	    initProject?: (project: string) => void;
	    isDefault?: boolean;
	    filterProject?: (db: IDB[]) => void;
	    updateSearchPanel?: () => void;
	    updateItemPanel?: () => void;
	    updateItem?: (item: IItem) => void;
	    getProjectPages?: () => IProjectPageParam[];
	    preSaveHook?: (isItem: boolean, type: string, controls: IControlDefinition[]) => JQueryDeferred<{}>;
	    renderActionButtons?: (options: IItemControlOptions, body: JQuery, controls: IControlDefinition[]) => boolean;
	    updateTree?: () => void;
	    getFieldConfigOptions?: () => IFieldDescription[];
	    addFieldSettings?: (configApp: any, project: string, pageId: string, fieldType: string, fieldParams: IFieldParameter, ui: JQuery, paramChanged: () => void, canBePublished?: boolean) => void;
	    getProjectSettingPages?: () => ISettingPage[];
	    getCustomerSettingPages?: () => ISettingPage[];
	    getPluginName?: () => string;
	    getPluginVersion?: () => string;
	    categorySetting?: (key: string) => string;
	    editCategorySetting?: (key: string, category: string) => void;
	    helpUrl?: string;
	}
	let pluginHooks: {
	    shares: number;
	};
	interface ISettingPage {
	    id: string;
	    title: string;
	    type?: string;
	    help?: string;
	    externalHelp?: string;
	    render: (ui: JQuery) => void;
	    advanced?: () => void;
	    del?: () => void;
	    saveAsync?: () => JQueryDeferred<unknown>;
	    getNode?: () => IDB;
	}
	interface IProjectPageParam {
	    id: string;
	    title: string;
	    render: any;
	    destroy?: any;
	    folder?: string;
	    order: number;
	    folderTitle?: string;
	    icon?: string;
	    usesFilters: boolean;
	}
	interface IPluginControl {
	    [key: string]: Function;
	}
	interface IPluginPanelOptions {
	    type: string;
	    control: JQuery;
	    controlState: number;
	}
	class PluginManager {
	    private _jui;
	    private _plugins;
	    private controls;
	    private destructors;
	    private titles;
	    private usesFilters;
	    private activeControlPage;
	    /** Called by the main UI handing over a div which can be used inside a plugin
	     * to display modal popups
	     *
	     * @param {jquery object} jui a $("<div />") object
	     * @returns {undefined}
	     */
	    setUI(jui: JQuery): void;
	    /** function to register a plugin for a specific menu (specified by the hook)
	     *
	     * @param {instance of plugin} plugin
	     * @returns {undefined}
	     */
	    register(plugin: IPlugin): void;
	    /** this method is called from the main UI whenever an item is selected to be
	     * displayed. The information is forwarded to all plugins
	     *
	     * @param {json object} item for example a requirement. see the json documention of item types
	     * @returns {undefined}
	     */
	    init(item: IItem): void;
	    /** this method is called after connecting to server using getServer ("")
	     *
	     * @param {json serverSettings} serverSettings or null after unsucessful login
	     * @returns {undefined}
	     */
	    initServerSettings(serverSettings?: XRGetProject_StartupInfo_ListProjectAndSettings): void;
	    /** this method is called when creating a menu which has a hook. it allows the plugins to add
	     * li's to the ul supplied
	     *
	     * @param {number} hook identifies the menu
	     * @param {jquery object} ul  a $("<ul />) object
	     * @returns {undefined}
	     */
	    updateMenu(hook: number, ul: JQuery): void;
	    getFieldConfigOptions(): IFieldDescription[];
	    addFieldSettings(configApp: any, project: string, pageId: string, fieldType: string, fieldParams: IFieldParameter, ui: JQuery, paramChanged: () => void, canBePublished?: boolean): void;
	    supportsControl(ctrl: string): boolean;
	    createControl(ctrlObj: JQuery, settings: IBaseControlOptions): void;
	    initProject(project: string): void;
	    filterProject(db: IDB[]): void;
	    updateSearchPanel(): void;
	    updateItemPanel(): void;
	    updateItem(updates: IItem): void;
	    updateTree(): void;
	    getProjectPages(): IProjectPageParam[];
	    supportsControlPage(controlType: string): boolean;
	    createControlPage(options: IPluginPanelOptions): void;
	    destroyActiveControlPage(): void;
	    callPreSaveHook(isItem: boolean, type: string, controls: IControlDefinition[]): JQueryDeferred<{}>;
	    renderActionButtons(options: IItemControlOptions, body: JQuery, controls: IControlDefinition[]): boolean;
	    /******************** admin function  */
	    getPlugins(): IPlugin[];
	}
	var plugins: PluginManager;
	function InitializePluginManager(): void;
	//# sourceMappingURL=PluginManager.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IPluginDocumentSection {
	}
	interface IDHFFieldListItem {
	    id: string;
	    label: string;
	}
	interface IDHFField {
	    type: string;
	    name: string;
	}
	interface IDHFControlDefinition extends IControlDefinition {
	    dhfValue?: IDHFControlDefinitionValue;
	    configTouched?: boolean;
	}
	interface IDHFControlDefinitionValue {
	    fieldValue?: string;
	    fieldValueXML?: string;
	    name?: string;
	    type?: string;
	    ctrlConfig?: IDHFSectionOptions;
	}
	interface IDHFSection {
	    renderControl: (ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions) => void;
	    updateXmlValue: (ctrl: IDHFControlDefinition) => void;
	    getConfig: (ctrl: IDHFControlDefinition) => IDHFSectionOptions;
	    addSignatures: (signatures: string[], currentValue: IDHFControlDefinition, all?: boolean) => void;
	    showSpecificSettings: (ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery) => void;
	    saveSpecificSettings: (ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery) => boolean;
	    hasSearch?: (ctrl: IDHFControlDefinition) => boolean;
	    executeSearch?: (ctrl: IDHFControlDefinition) => void;
	    verifySearch?: (ctrl: IDHFControlDefinition) => void;
	    verifyContent: (ctrl: IDHFControlDefinition) => void;
	}
	interface IDHFSectionOptions {
	    globalOptions?: boolean;
	    show_section_title?: string;
	    automation?: string;
	    page_break?: string;
	    landscape?: boolean;
	    sub_section?: string;
	}
	interface IDHFFieldParameter {
	    autoHide?: boolean;
	    perItemVisibility?: boolean;
	}
	interface IDHFFieldValue {
	    type: string;
	}
	interface IDHFXMLOptions {
	}
	interface IDHFPasteBuffer {
	    tree: ISimpleTree;
	    items: IDHFPasteBufferItem[];
	}
	interface IDHFPasteBufferItem {
	    sourceItem: string;
	    sourceProject: string;
	    pasteSource: string;
	    title: string;
	    item: IDHFPasteBufferValue[];
	}
	interface IDHFPasteBufferValue {
	    def: XRFieldTypeAnnotated;
	    val: string;
	}
	interface IDHFReorder {
	    idx: number;
	    id: string;
	    name: string;
	    type: string;
	}
	interface IDHFFileOption {
	    name: string;
	    click: Function;
	}
	interface IDHFGuidOid {
	    guid: string;
	    oid: string;
	}
	interface IDHFWizardData {
	    dhfItems: any[];
	    dhfNumber: string;
	    dhfGUID: string;
	    dhfName: string;
	    template?: string;
	}
	interface IDHFFactory {
	    [key: string]: (config: IDHFConfig) => IDHFSection;
	}
	interface ISectionInfo {
	    sectionName: string;
	    sectionType: DocumentSectionType;
	    hidden: boolean;
	    dynamic: boolean;
	}
	enum DocumentSectionType {
	    Static = 1,
	    Database = 2,
	    Table = 3,
	    Technical = 4,
	    CustomTable = 5
	}
	interface IGrandMother {
	    id: string;
	    version: number;
	    fullId: string;
	    title: string;
	}
	interface ISectionMap {
	    [key: string]: ISectionInfo;
	}
	interface ItemSortInfo {
	    itemId: string;
	    item: JQuery;
	    existsInBoth: boolean;
	}
	class PluginManagerDocuments {
	    private wasInformedToday;
	    private wasInformedTodayAbout;
	    private dhf_config;
	    private item;
	    private jui;
	    private ColumnTypes;
	    private sectionFactories;
	    private sectionTypeNames;
	    readonly COPY_PASTE_BUFFER = "pasteBuffer";
	    isDefault: boolean;
	    constructor();
	    initItem(_item: IItem, _jui: JQuery): void;
	    updateMenu(ul: JQuery, hook: number): void;
	    supportsControl(ctrl: string): boolean;
	    createControl(ctrl: JQuery, options: IBaseControlOptions): void;
	    initProject(project: string): void;
	    getProjectPages(): IProjectPageParam[];
	    renderActionButtons(options: IItemControlOptions, body: JQuery, controls: IDHFControlDefinition[]): boolean;
	    renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, fieldValue: string): boolean;
	    getValue(ctrl: IDHFControlDefinition): string;
	    configChanged(ctrl: IDHFControlDefinition): boolean;
	    getDefaultFormat(category: string): string;
	    showInProjectFolder(category: string): boolean;
	    isDocumentType(category: string): boolean;
	    getDocumentTypes(): string[];
	    getDocumentFormTypes(): string[];
	    getDocumentTemplatesTypes(): string[];
	    isDocumentFormType(category: string): boolean;
	    isSignedType(category: string): boolean;
	    getSignedAsync(docId: string, labelFilter?: string): JQueryDeferred<IReference[]>;
	    registerSection(sectionType: DocumentSectionType, sectionId: string, sectionName: string, creator: (config?: IDHFConfig, dhfType?: string, columnTypes?: ColumnTypesInfo) => IDHFSection, hidden?: boolean): void;
	    registerSection2(sectionType: DocumentSectionType, dynamic: boolean, sectionId: string, sectionName: string, creator: (config?: IDHFConfig, dhfType?: string, columnTypes?: ColumnTypesInfo) => IDHFSection, hidden?: boolean): void;
	    getSections(dynamic: boolean): string[];
	    isUsedAsTemplate(itemId: string): boolean;
	    removeAsTemplate(itemId: string): void;
	    private runSearch;
	    showConfigDialog(sectionName: string, _controller: IDHFSection, _ctrl: IDHFControlDefinition, _ctrlParameter: IBaseControlOptions, title: string, hideStandardOptions: boolean): void;
	    getArchiveButtonName(): string;
	    getToolFolderName(): string;
	    showCreateFromDocx(options: ICreateDialogOptions): void;
	    loadDocument(jobId: number, onLoad: (htmlDOM: any) => void): void;
	    getSignatureMeanings(): IStringMap;
	    private getDefaultFields;
	    getDhfControls(): ISectionMap;
	    setConfig(config: IDHFConfig): void;
	    private appendConfigTool;
	    private getSignatures;
	    private showDHFCreateWizard;
	    getBaseDOCofSIGN(project: string, itemSigned: IItem): JQueryDeferred<unknown>;
	    private createFromTemplate;
	    private transformTemplate;
	    private copyTemplates;
	    copyTemplate(items: string[], itemIdx: number, quiet: boolean): JQueryDeferred<{}>;
	    private pasteTemplates;
	    private pasteTemplate;
	    private getFieldByType;
	    /** requires sectionName or sectionType to identify field(s) */
	    private getDHFFieldValuesFromItem;
	    /** requires sectionName or sectionType to identify field */
	    private setDHFFieldValueOfItem;
	    preparePasteBuffer(tree: ISimpleTree): void;
	    private addToPasteBuffer;
	    private docHasContent;
	    private dhfFactory;
	    private getNumberOfDHFSections;
	    private getControlFieldName;
	    private reorderDialog;
	    private hasFileAttachments;
	    private hideFileOption;
	    private renderControlsSIGN;
	    private getFilterCtrl;
	    private getFilterValue;
	    private showPreviewDoc;
	    private showPreviewSign;
	    private renderControlsDOC;
	    private static hasCustomSection;
	    private createSIGN;
	    private verifyVersionTableComplete;
	    private verifyVersionInfo;
	    private getVersionFromTable;
	    private hasPackage;
	    private createConfirmedDownloadOrSIGN;
	    private getSignatureInfo;
	    private getCached;
	    private renderSignDownload;
	    private getOtherSigns;
	    private createCompareButton;
	    private compareDocuments;
	    private redlineDocuments;
	    private filterAlignItems;
	    compareDocumentsContent(thisId: string, otherId: string, left: string, right: string, ui: JQuery): void;
	    private fillSideBySide;
	    getDocumentStatus(item: IItem): IDocumentStatus;
	    static excelButtonControl(click: () => boolean): JQuery;
	}
	interface IDocumentStatus {
	    isDoc?: boolean;
	    isDocWithTemplate?: boolean;
	    isDocWithEmptyTemplate?: boolean;
	    isDocWithFilledSignatureTable?: boolean;
	    isDocWithEmptySignatureTable?: boolean;
	    isDocWithoutSignatureTable?: boolean;
	    isSign?: boolean;
	    isSignNeedingTemplateApproval?: boolean;
	    isSignNeedingTemplateMyApproval?: boolean;
	    isSignApprovedTemplate?: boolean;
	    isSignNeedingSignature?: boolean;
	    isSignCompletlySigned?: boolean;
	    isSignNoSignatureNoTemplate?: boolean;
	}
	class ColumnTypesInfo {
	    private config;
	    private editorOfType;
	    private nameOfType;
	    constructor(config: IDHFConfig);
	    private getCustomTypeDef;
	    getCustomDropDownOptions(type: string): IDropdownOption[];
	    getNames(currentColumns: string[]): {
	        [key: string]: string;
	    };
	    getEditorOfType(type: string): TableCellEditor;
	    getOptionsOfType(type: string): IDropdownOption[];
	    getNameOfType(type: string): string;
	}
	var mDHF: PluginManagerDocuments;
	function InitializePluginManagerDocuments(): void;
	//# sourceMappingURL=PluginManagerDocuments.d.ts.map

	interface ITableDataRow {
	    [key: string]: number | string;
	}
	interface ITableFunction {
	    (table: ITableDataRow[], parameterJson: ITableParams): string;
	}
	interface ITableFunctions {
	    [key: string]: ITableFunction;
	}
	class TableMath {
	    protected functions: ITableFunctions;
	    /** allow to add new functions:  */
	    registerFunction(functionId: string, execute: ITableFunction): void;
	    /** executes function on a table */
	    execute(functionId: string, table: ITableDataRow[], parameterJson: ITableParams): string;
	}
	var tableMath: TableMath;
	function InitializePluginManagerFormulas(): void;
	//# sourceMappingURL=PluginManagerFormulas.d.ts.map

	/// <reference types="jquery" />
	interface IPushMessage {
	    subject: string;
	    project: string;
	    item: string;
	    version: string;
	    users: string;
	    parent: string;
	    title: string;
	    error?: string;
	}
	interface IItemEditor {
	    user: string;
	    thisSocket: boolean;
	}
	interface IItemWatched {
	    item: string;
	    users: string[];
	    editor: IItemEditor;
	    version: number;
	}
	interface IItemUpdated {
	    item: string;
	    version: number;
	    title: string;
	    thisSocket: boolean;
	}
	interface IItemCreated {
	    item: string;
	    parent: string;
	    title: string;
	}
	interface IItemDeleted {
	    item: string;
	}
	interface ITodoChanged {
	}
	class PushMessages {
	    private webSocket;
	    private itemWatched;
	    private itemUpdated;
	    private itemCreated;
	    private itemDeleted;
	    private todoChanged;
	    static socketId: number;
	    constructor();
	    newConnection(): JQueryDeferred<{}>;
	    connect(): JQueryDeferred<number>;
	    private preventConcurrentEdit;
	    private reconnectAfterCloseMessage;
	    trigger(message: any): void;
	    private sendCurrentEditingStatus;
	    private retryTimer;
	    private send;
	    watchItem(itemId: string): void;
	    unWatchItem(): void;
	    editItem(itemId: string): void;
	    unEditItem(): void;
	    onTodoChanged(fn: (args: ITodoChanged) => void): void;
	    onItemUpdated(fn: (args: IItemUpdated) => void): void;
	    onItemCreated(fn: (args: IItemCreated) => void): void;
	    onItemDeleted(fn: (args: IItemDeleted) => void): void;
	    onItemWatched(fn: (args: IItemWatched) => void): void;
	}
	//# sourceMappingURL=PushMessages.d.ts.map

	/// <reference types="jquery" />
	interface IRestConfig {
	    server: string;
	}
	interface IRestTimer {
	    start: number;
	    end?: number;
	    status?: number;
	    command?: string;
	    type?: string;
	}
	interface IJcxhr {
	    status: number;
	    responseText: string;
	    responseJSON: IResponseJson;
	    displayError: string;
	    statusText?: string;
	}
	interface IResponseJson {
	    category: string;
	    detailsList: string[];
	    displayError?: string;
	    code?: string;
	}
	interface IFileParam {
	    name: string;
	}
	interface IFileUploadProgress {
	    position?: number;
	    loaded?: number;
	    totalSize?: number;
	    total?: number;
	}
	interface IFileUploadResult {
	    fileId: string;
	    fileFullPath: string;
	    key: string;
	}
	interface IError224 {
	    fields: IError224Field[];
	}
	interface IError224Field {
	    fieldId: number;
	    beforeCleanup: string;
	    afterCleanup: string;
	}
	class RestConnector {
	    private restServer;
	    private restServerProject;
	    private timer;
	    private keepAlive;
	    constructor(config: IRestConfig);
	    setProject(projectName: string): void;
	    getProject(cmd: string, ignoreErrors?: boolean, ignoreFilters?: boolean): JQueryDeferred<IRestResult>;
	    getServer(cmd: string, noRetry?: boolean): JQueryDeferred<IRestResult>;
	    postServer(cmd: string, param?: IRestParam, payload?: boolean): JQueryDeferred<IRestResult>;
	    postProject(cmd: string, param: IRestParam, payload?: boolean): JQueryDeferred<IRestResult>;
	    postProjectJson(cmd: string, data: unknown): JQueryDeferred<IRestResult>;
	    putServer(cmd: string, param: IRestParam, asPayload?: boolean): JQueryDeferred<IRestResult>;
	    putProject(cmd: string, param: IRestParam, itemId?: string): JQueryDeferred<IRestResult>;
	    deleteProjectAsync(cmd: string, param: IRestParam, asString?: boolean): JQueryDeferred<IRestResult>;
	    deleteServerAsync(cmd: string, param: IRestParam, asString?: boolean): JQueryDeferred<IRestResult>;
	    download(cmd: string, params?: string[] | IStringMap): void;
	    getFile(cmd: string, dataType?: string): JQueryDeferred<IRestResult>;
	    uploadFileProjectAsync(file: IFileParam, progress: (p: IFileUploadProgress) => void): JQueryDeferred<IFileUploadResult>;
	    fetchFileAsync(url: string, progress: (p: IFileUploadProgress) => void): JQueryDeferred<IFileUploadResult>;
	    uploadFileCustomerAsync(file: IFileParam, progress: (p: IFileUploadProgress) => void): JQueryDeferred<IFileUploadResult>;
	    importProjectAsync(file: IFileParam, progress: (p: IFileUploadProgress) => void, params: {}): any;
	    uploadFileServerAsync(file: IFileParam, progress: (p: IFileUploadProgress) => void, target: string, params: {}, urlSuffix: string): JQueryDeferred<IFileUploadResult>;
	    convertExcelProjectAsync(file: IFileParam, progress: (p: IFileUploadProgress) => void): JQueryDeferred<string>;
	    convertExcelServerAsync(file: IFileParam, progress: (p: IFileUploadProgress) => void): JQueryDeferred<string>;
	    isTimeout(jqxhr: IJcxhr): boolean;
	    isGatewayTimeout(jqxhr: IJcxhr): boolean;
	    handleError(jqxhr: IJcxhr, textStatus: string, error: string, cmd: string, param?: IRestParam, itemId?: string): JQueryDeferred<IRestResult>;
	    private get;
	    private post;
	    private postJson;
	    postSpecialServer(cmd: string, param: IRestParam): JQueryDeferred<IRestResult>;
	    private postSpecial;
	    private put;
	    private deleteRestAsync;
	}
	//# sourceMappingURL=RestConnector.d.ts.map

	/// <reference types="jquery" />
	interface ISearchResult {
	    itemId: string;
	    version: number;
	    title: string;
	    fieldVal?: ISearchResultField[];
	    downlinks: string[];
	    uplinks: string[];
	    labels: string[];
	}
	interface ISearchResultField {
	    id: number;
	    value: string;
	}
	interface IRestoreItemResult {
	    item: string;
	    version: number;
	    response: XRPostProject_RestoreItem_UndeleteAnswer;
	}
	interface IUpdateCache {
	    item: IItem;
	    parent: string;
	}
	class RestDB {
	    private restConnection;
	    private _project;
	    private dbCache;
	    constructor(init: RestConnector);
	    setProject(project: string): void;
	    setSettingJSON(key: string, valueJSON: {}): JQueryDeferred<{}>;
	    readSettingJSONAsync(key: string, otherProject?: string, noRetry?: boolean): JQueryDeferred<{}>;
	    setSettingCustomerJSON(settingId: string, valueJSON: {}): JQueryDeferred<unknown>;
	    readSettingCustomerJSONAsync(key: string): JQueryDeferred<unknown>;
	    setCache(externalCache: DBCache): void;
	    retrieveTreeAsync(): JQueryDeferred<{}>;
	    retrieveTreeAndItem(itemId: string): JQueryDeferred<IItem>;
	    static filterLegacyReportCat(result: any[]): any[];
	    doesExist(itemId: string): boolean;
	    getChildrenIds(parentId: string): string[];
	    getItemFromTree(itemId: string): IDB;
	    getItemAsync(itemId: string, ignoreErrors: boolean, includeHistory: boolean): JQueryDeferred<IItem>;
	    getNeedlesAsync(searchExpr: string, up: boolean, down: boolean, fields: string, labels: boolean, ignoreFilters?: boolean): JQueryDeferred<IItem[]>;
	    getItemProjectAsync(project: string, itemId: string, ignoreErrors: boolean, includeHistory: boolean): JQueryDeferred<IItem>;
	    getProjectItemAsync(project: string, itemId: string, includeHistory: boolean): JQueryDeferred<IItem>;
	    startReportAsync(itemId: string, reportOptions: IReportOptions): JQueryDeferred<{}>;
	    canLaunchReport(): JQueryDeferred<XRGetProject_AllJob_JobsWithUrl>;
	    startCreateDocumentAsync(itemId: string, reportOptions: IReportOptions): JQueryDeferred<XRPostProject_LaunchReport_CreateReportJobAck>;
	    getReportDetails(jobId: number): JQueryDeferred<XRGetProject_JobStatus_JobsStatusWithUrl>;
	    compareHTML(compareParams: XCPostCompareHtml): JQueryDeferred<XRPostProject_CompareHtml_HtmlCompareResult>;
	    download(jobId: number, file: number, param: string[]): void;
	    downloadFromUrl(url: string, param?: IStringMap): void;
	    downloadInMemory(jobId: number, file: string, dataType?: string): JQueryDeferred<string>;
	    downloadInMemoryFromUrl(url: string): JQueryDeferred<string>;
	    getType(itemId: string): string;
	    touchAsync(itemId: string, depth: number, comment: string): JQueryDeferred<string>;
	    getIcon(itemId: string): string;
	    private parseSearchResult;
	    searchAsyncMinimalOutput(term: string, filter?: string, ignoreFilters?: boolean, crossProject?: string): JQueryDeferred<string[]>;
	    searchAsync(term: string, filter?: string, ignoreFilters?: boolean, fieldList?: string, crossProject?: string, labels?: boolean, down?: boolean, up?: boolean, treeOrder?: boolean): JQueryDeferred<ISearchResult[]>;
	    getVersionAsync(itemId: string, version: number, includeHistory?: boolean): JQueryDeferred<{}>;
	    getProjectVersionAsync(project: string, itemId: string, version: number, includeHistory?: boolean): JQueryDeferred<{}>;
	    getProjectCat(project: string): JQueryDeferred<XRGetProject_CategoryList_GetProjectStructAck>;
	    getAuditLogAsync(startAt: number, maxResults: number, param: XCGetProjectAudit): JQueryDeferred<XRGetProject_ProjectAudit_TrimAuditList>;
	    getAuditDetailsAsync(auditId?: number): JQueryDeferred<XRTrimAudit>;
	    getAvailableReportsAsync(): JQueryDeferred<XRGetProject_Reports_GetReportsAck>;
	    getTree(subtreeFilter: string[]): IDB[];
	    getParentId(itemId: string): string;
	    getCategoryBreadcrumbs(category: string): string[];
	    getBreadcrumbs(itemId: string): string[];
	    setStyle(itemIds: string[], style: string, computeFolder: number): void;
	    getRootOfType(type: string): string;
	    hasChildren(itemId: string): boolean;
	    isFolder(itemId: string): boolean;
	    getItemTitle(itemId: string): string;
	    isHiddenLink(itemId: string): boolean;
	    setHiddenLink(itemId: string, hidden: number): void;
	    createItemAsync(itemJson: IItemPut, comment: string, actions: string, parentId: string, dontFailOnCleanup?: boolean): JQueryDeferred<IDBParent>;
	    signItemAsync(itemId: string, password: string, comment: string, meaning?: string): JQueryDeferred<XRPostProject_SignItem_SignItemAck>;
	    checkPassword(password: string): JQueryDeferred<IRestResult>;
	    convertDocAsync(fileNo: number, comment: string, targetDocumentFolder?: string, useOriginal?: boolean): JQueryDeferred<string>;
	    restoreItemAsync(itemId: string, title: string, version: number, comment: string): JQueryDeferred<IRestoreItemResult>;
	    updateItemAsync(itemJson: IItemPut, comment: string, auditAction: string, requireVersion?: number): JQueryDeferred<IItemGet>;
	    moveItemsAsync(itemIds: string, newFolder: string, newPosition: number, comment: string): JQueryDeferred<{}>;
	    updateCache(newItem: IUpdateCache): void;
	    copyFrom(target: string, source: IDB): boolean;
	    deleteItemAsync(itemId: string, comment: string, force: boolean): JQueryDeferred<string>;
	    uploadFileProjectAsync(file: IFileParam, progress: (p: IFileUploadProgress) => void): JQueryDeferred<{}>;
	    fetchFileAsync(url: string, progress: (p: IFileUploadProgress) => void): JQueryDeferred<{}>;
	    addDownLinkAsync(fromId: string, toId: string, comment: string): JQueryDeferred<{}>;
	    removeDownLinkAsync(fromId: string, toId: string, comment: string): JQueryDeferred<{}>;
	    private retrieveConfigAsync;
	    private showRestError;
	    private parseItemJSON;
	}
	//# sourceMappingURL=RestDB.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	/*** config
	 *
	 */
	interface ITasksConfiguration {
	    config: ITaskConfiguration[];
	}
	type FolderItem = Folder | IWltItemWithLinks;
	type Folder = {
	    name: string;
	    id: string;
	    children: FolderItem[];
	};
	interface IPFExternalField {
	    /**  Jira field id something like custom_... or assignee or ...*/
	    extFieldId: string;
	    /** converter which specified how to convert matrix field into jira field */
	    converter: string;
	    /** mapping for drop down from Matrix to Jira drop downs  */
	    ddMapping?: IStringMap;
	    [key: string]: any;
	}
	interface ICatFieldMapping {
	    /** map from category to the fields in the category. The matrixFieldName is the name of the field in Matrix  */
	    [key: string]: {
	        [matrixFieldName: string]: IPFExternalField;
	    };
	}
	interface ITaskConfiguration {
	    /** defaultSearches: can be used to define default search expressions, (e.g. shortcuts to search task changed in last x hours, server plugin must understand these...) */
	    defaultSearches?: ITaskSearch[];
	    /** one2OneMapping: #
	     * requires one2one capability. defines how external items are shown
	     * the first search in the list will be executed automatically when the dialog is opened
	     * in order not to run an automatic search define first element in array with name=""
	    */
	    one2OneMapping?: IOne2OneMapping;
	    /** allowEmptySearches: can be set to true if plugin can handle it */
	    allowEmptySearches?: boolean;
	    /** searchHelp: can be an url to any website to explain search options (e.g. jql https://..atlassian.. /jql) */
	    searchHelp?: string;
	    /** autoSearch: can be set to true to start default search (when opening dialog)*/
	    autoSearch?: boolean;
	    /** smartLinks: a set of rules to automatically show hyperlinks to items -> note these are available only in the client, in documents the same rules will not be applied! */
	    smartLinks?: ISmartTask[];
	    /** smartUrls: a set of rules to automatically detect dropped links*/
	    smartUrls?: ISmartUrls[];
	    /** projectsCreate: there must be at least one default project in which tasks can be created */
	    projectsCreate: ITaksProjects[];
	    /** projectFilter: filter for projects of which items are displayed in workflow control, if not set all tasks are shown */
	    projectFilter?: string[];
	    /** useAsDescription: defines if and what to use as default description -> default is empty (an empty description box) */
	    useAsDescription?: ITaskTaskDescription;
	    /** useEmptyTitle: by default the title of new task is the current item title, true leaves it empty */
	    useEmptyTitle?: boolean;
	    /** requireCommitTicket: set to true if saving should requires a task id (requires smartLinks to be configured)*/
	    requireCommitTicket?: boolean;
	    /** catFieldMapping: mapping from Matrix fields to jira fields per category  */
	    catFieldMapping?: ICatFieldMapping;
	    /** userMapping: mapping from Matrix users to jira users  */
	    userMapping?: IStringMap;
	    /** defaultComment: when updating the matrix item this comment is added to the linked jira tickets as prefix to the details of which item was changed */
	    defaultComment?: string;
	    /** if autoAddCommentOnSave is to true it adds a comment to all linked items*/
	    autoAddCommentOnSave?: boolean;
	    /** showStatus: if set to true it will request from server the meta info for each linked ticket. If there's a status property in the meta it's displayed a string*/
	    showStatus?: boolean;
	    /** pluginName: as shown in UI e.g. JIRA, GitHub, ...*/
	    pluginName?: string;
	    /** pluginLongName: as shown in UI e.g. JIRA Server Plugin, GitHub Plugin, ... */
	    pluginLongName?: string;
	    /** hideCreateTask: overwrites canCreate capability*/
	    hideCreateTask?: boolean;
	    /** hideSearchTasks: overwrites canFind capability */
	    hideSearchTasks?: boolean;
	    /** handleAsLink: should not be changed - if true links are treated like URLs*/
	    handleAsLink?: boolean;
	    /** hasMeta: should not be changed - if true external items have a description and a status*/
	    hasMeta?: boolean;
	    /** nativeCreateUrl: overwrites nativeCreateUrl*/
	    nativeCreateUrl?: string;
	    /** nativeCreateSearch:  overwrites nativeCreateSearch*/
	    nativeCreateSearch?: string;
	    /** pluginId: 'internal id provided by server'*/
	    pluginId?: number;
	}
	type ITaskTaskDescription = "hide" | "empty" | "text";
	interface IOne2OneMapping {
	    projectId: string;
	    taskTypeId: string;
	    showId?: boolean;
	    statusOverwrites: IOne2OneMappingStatus[];
	}
	interface IOne2OneMappingStatus extends ITaskRenderInfo {
	    externalStatusName: string;
	    text: string;
	}
	interface ITaskRenderInfo {
	    text: string;
	    color?: string;
	    background?: string;
	    strikethrough?: boolean;
	}
	interface ITaskSearch {
	    name: string;
	    expression: string;
	}
	interface ITaksProjects {
	    projectId: string;
	    projectName: string;
	    taskTypes: ITaskType[];
	}
	interface ITaskType {
	    taskTypeId: string;
	    taskTypeName: string;
	    iconUrl?: string;
	    iconClass?: string;
	}
	interface ISmartTask {
	    regex: string;
	    issueProjectId: string;
	    issueId: string;
	    title: string;
	    url?: string;
	}
	interface ISmartUrls {
	    regex: string;
	    issueProjectId: string;
	    issueId: string;
	    title: string;
	    priority?: number;
	}
	/*** wlt interface
	 *
	 */
	interface IWltItemWithLinks {
	    matrixItem: IWltMatrixItem;
	    links: IExternalItem[];
	}
	interface IWltMatrixItem {
	    itemId: number;
	    projectId: number;
	    title: string;
	    matrixItem: string;
	    project: string;
	}
	interface IExternalItem {
	    externalItemId: string;
	    externalItemTitle: string;
	    externalItemUrl: string;
	    externalDescription: string;
	    externalDone: boolean;
	    externalUser?: string;
	    externalProject?: string;
	    externalType?: string;
	    externalMeta?: string;
	    plugin: number;
	    more?: IMoreInfo[];
	}
	interface IMoreInfo {
	    key: string;
	    value: string;
	}
	interface ISearchResults {
	    startAt: number;
	    maxResults: number;
	    tasks: IExternalItem[];
	}
	interface ITaskDetails extends IExternalItem {
	    matrixItemIds?: string[];
	}
	interface XTCTableRow {
	    comment: string;
	}
	class Tasks implements IPlugin {
	    private item;
	    private jui;
	    static tasksConfiguration: ITaskConfiguration[];
	    isDefault: boolean;
	    constructor();
	    initItem(_item: IItem, _jui: JQuery): void;
	    reset(): void;
	    initServerSettings(serverSettings: XRGetProject_StartupInfo_ListProjectAndSettings): void;
	    updateMenu(ul: JQuery, hook: number): void;
	    supportsControl(ctrlType: string): boolean;
	    createControl(ctrl: JQuery, options: IBaseControlOptions): void;
	    initProject(): void;
	    getProjectPages(): IProjectPageParam[];
	    preSaveHook(isItem: boolean, type: string, controls: IControlDefinition[]): JQueryDeferred<{}>;
	    isPluginEnabled(pluginId: number): boolean;
	    evaluateTaskIds(comment: string): string[];
	    static externalItemFromUrl(url: string): IExternalItem;
	    private addCommentToAllLinkedIssues;
	    /** this creates a new item and jira and sets the define fields with values coming from Matrix */
	    private pushIssueDlg;
	    static postPushIssue(pluginId: number, itemId: string, title: string, description: string, projectId: string, taskTypeId: string): JQueryDeferred<IExternalItem[]>;
	    subscribe(): void;
	    afterSaveHookAddComment(event: IItemChangeEvent): void;
	    static createTaskFromUrl(itemId: string, url: string): void;
	    static isTaskId(someId: string): boolean;
	    static getOne2OneTask(externalItemId: string): JQueryDeferred<IExternalItem>;
	    static createOne2OneTask(itemId: string): JQueryDeferred<IExternalItem>;
	    static getOne2OneRenderInfo(task?: IExternalItem): ITaskRenderInfo;
	    static showTasks(itemId: string, control: JQuery, canEdit: boolean, pluginFilter?: number[]): void;
	    /*** UI
	     *
	     */
	    private createAndLinkIssueDlg;
	    private static createAndLinkWebDlg;
	    private createSearchAndLinkIssueDlg;
	    private waitForNewTaskOrWindowCloseActive;
	    private waitForNewTaskOrWindowCloseTimer;
	    private waitForNewTaskOrWindowClose;
	    private searchAndLinkIssueDlg;
	    static getConfig(pluginId: number): ITaskConfiguration;
	    private renderProjectPage;
	    private updateUI;
	    private static getTaskDefinition;
	    static renderTasks(itemId: string, linkedTasks: IExternalItem[], root: JQuery, canEdit: boolean, fullWidth: boolean): void;
	    private static escapeHtml;
	    static renderTask(itemId: string, task: IExternalItem, unlink: boolean, fullWidth: boolean, tinyLink?: boolean): JQuery;
	    private getSearchField;
	    private createLinksAsync;
	    /** rest api */
	    static postCreateLinks(itemId: string, tasksToLink: IExternalItem[]): JQueryDeferred<IExternalItem[]>;
	    static postCreateIssue(pluginId: number, itemId: string, title: string, description: string, projectId: string, taskTypeId: string): JQueryDeferred<IExternalItem[]>;
	    static getTasks(itemId?: string, pluginFilter?: number[]): JQueryDeferred<IExternalItem[]>;
	    static getAllTasksProject(plugin: number): JQueryDeferred<IWltItemWithLinks[]>;
	    private static getFindTasks;
	    static showError(text: string, jqxhr: IJcxhr, textStatus: string, error: string): void;
	    static deleteLink(itemId: string, task: IExternalItem): JQueryDeferred<{}>;
	    static getMeta(pluginId: number, externalItemId: string): JQueryDeferred<IExternalItem>;
	    static fillTree(tree: IDB[], alltasks: IWltItemWithLinks[]): FolderItem[];
	    static isFolder(item: FolderItem): item is Folder;
	    static appendIssueItems(parentElement: JQuery, folderItems: FolderItem[], selectedFolders: string[], folderChangeCallback: (folder: Folder) => void, folders?: Folder[]): void;
	    private static renderTasksInTable;
	    private static expandFolders;
	    private static thisFolderPathIsInSelection;
	}
	var mTasks: Tasks;
	function InitializeTasks(): void;
	//# sourceMappingURL=Tasks.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ITestWizardParams {
	    single?: number;
	    input?: string[];
	    output?: string;
	    parentFolder?: string;
	    filter?: string[];
	    itemPresets?: ITestWizardParamsPreset[];
	    itemFieldMapping?: IFieldMapping[];
	    reason?: string;
	}
	interface ITestWizardParamsPreset {
	    field: number;
	    value: string;
	}
	interface ITestFieldParam extends XRFieldTypeAnnotatedParamJson {
	    fieldMeaning: string;
	}
	interface IFieldMapping {
	    fromId: number;
	    toId: number;
	}
	interface ITestConfig15 {
	    columnsStepsResult: ITestConfigTablesColumn[];
	    columnsSteps: ITestConfigTablesColumn[];
	}
	interface ITestStepsResultsConfig {
	    canBeModified: boolean;
	    columns: ITestConfigTablesColumn[];
	    passFailEditorConfig: ITestRuleStep[];
	}
	interface ITestStepsResult {
	    result: string;
	}
	interface ITestStepsResultOption {
	    id: string;
	    label: string;
	}
	interface ITestResultInfo {
	    automatic: boolean;
	    label: string;
	}
	interface ITestRuleResult extends ITestRule {
	    result: string;
	}
	class TestManager implements IPlugin {
	    private XTCconfig;
	    private item;
	    private jui;
	    private inputItems;
	    private lookup;
	    isDefault: boolean;
	    constructor();
	    initItem(item: IItem, jui: JQuery): void;
	    updateMenu(ul: JQuery, hook: number): void;
	    supportsControl(ctrl: string): boolean;
	    createControl(ctrl: JQuery, options: IBaseControlOptions): void;
	    initProject(project: string): void;
	    getProjectPages(): IProjectPageParam[];
	    preSaveHook(isItem: boolean, type: string, controls: IControlDefinition[]): JQueryDeferred<{}>;
	    renderActionButtons(options: IItemControlOptions, body: JQuery, controls: IControlDefinition[]): boolean;
	    isXTC(type: string): boolean;
	    isTC(type: string): boolean;
	    getXTCType(): string;
	    getCloneSources(): string[];
	    private redoFailed;
	    private ConvertAll;
	    private isCloneSource;
	    private getTestStepsConfig;
	    private getTestStepsResultsConfig;
	    private getTestRunResultOptions;
	    private getTestRunResultPlaceholder;
	    getSearchExpression(resultType: string, notEqual: boolean): string;
	    private prepareMapping;
	    getMappingItems(): IFieldMapping[];
	    private getResultInfo;
	    private allTestSteps;
	    private oneTestStep;
	    private computeOverallResult;
	    private createHumanValues;
	}
	var mTM: TestManager;
	function InitializeTestManager(): void;
	//# sourceMappingURL=TestManager.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IContextFramePlugin {
	    id: string;
	    title: string;
	    adminOption: string;
	    onUpdate: (ui: JQuery, config: IContextPageConfigTab, context: IContextInformation) => void;
	}
	class ContextFrameManagerImpl {
	    private pages;
	    constructor();
	    getPages(): IContextFramePlugin[];
	    register(plugin: IContextFramePlugin): void;
	    implements(id: string): boolean;
	    renderTab(panel: JQuery, id: string, config: IContextPageConfigTab, context: IContextInformation): void;
	    private getPlugin;
	}
	var ContextFrameManager: ContextFrameManagerImpl;
	function InitializeTrainingManager(): void;
	//# sourceMappingURL=TrainingManager.d.ts.map

	function InitializeBusinessLogic(): void;
	//# sourceMappingURL=index.d.ts.map

	class ProjectStorageAdmin implements IDataStorage {
	    setItem(itemKey: string, itemVal: string): void;
	    getItem(itemKey: string): string;
	    getItemDefault(itemKey: string, defaultValue: string): string;
	}
	//# sourceMappingURL=ProjectStorageAdmin.d.ts.map

	class ServerStorageAdmin implements IDataStorage {
	    setItem(itemKey: string, itemVal: string): void;
	    getItem(itemKey: string): string;
	    getItemDefault(itemKey: string, defaultValue: string): string;
	}
	//# sourceMappingURL=ServerStorageAdmin.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IConfigPage {
	    getNode(): IDB;
	    saveAsync(): JQueryDeferred<{}>;
	    load(pageId: string): void;
	    getProject(): string;
	    getCategory(): string;
	    getField(): string;
	    willUnload(): void;
	}
	interface IGroupsUsers {
	    users: XRUserType[];
	    groups: XRGroupType[];
	}
	class ConfigPage implements IConfigPage {
	    static PROJECT_SETTING_FOLDER_BASE_ID: string;
	    static PROJECT_SETTING_FOLDER_TYPE: string;
	    protected pageId: string;
	    protected simple: JQuery;
	    protected allUsers: XRUserType[];
	    protected allGroups: XRGroupType[];
	    configApp: IConfigApp;
	    getNode(): IDB;
	    saveAsync(): JQueryDeferred<{}>;
	    load(pageId: string): void;
	    constructor(configApp: IConfigApp);
	    getProject(): string;
	    getCategory(): string;
	    getField(): string;
	    willUnload(): void;
	    protected initPage(title: string, showAdvancedBtn: boolean, showDeleteText: string, help: string, externalHelp?: string, showCopy?: boolean): void;
	    protected showAdvanced(): void;
	    protected doCopy(): void;
	    protected doDelete(): void;
	    protected showSimple(): void;
	    protected showWarning(text: string, id?: string): JQuery;
	    protected showNote(text: string): void;
	    protected showAdvancedCode(code: string, success: (code: string) => void, semanticValidate?: IValidationSpec): void;
	    protected getProjectSettingLink(setting: string): string;
	    protected getProjectSettingLinkA(setting: string, name: string): string;
	    protected getCategorySettingLink(): string;
	    protected getTraceSettingLink(): string;
	    protected getPluginLink(): string;
	    protected getGroupId(group: XRGroupType): any;
	    protected getGroupDisplayNameFromId(groupOrUserId: string): string;
	    protected combinedName(user: XRUserType): string;
	    private resizeUserSelectDlg;
	    showUserAndGroupsSelectWithDialog(container: JQuery, showUsers: boolean, showGroups: boolean, help: string, empty: string, selected: string[], dialogTitle: string, onSelect: (selection: string[]) => void): void;
	    protected showSelectDialog(selectedIn: string[], showUsers: boolean, showGroups: boolean, dialogTitle: string, onSelect: (selection: string[]) => void): void;
	    protected markUsersWithoutAccess(lis: JQuery): void;
	    protected filterGroupsAndUsers(lis: JQuery, sex: string, writeOnly: boolean): void;
	    protected updateUsersAndGroups(withDetails: boolean): JQueryDeferred<{}>;
	    initMeta(users: XRUserType[], groups: XRGroupType[], pageId: string): void;
	}
	class GenericAdminPage extends ConfigPage {
	    private page;
	    project: string;
	    category: string;
	    constructor(configApp: IConfigApp, page: ISettingPage);
	    getNode(): IDB;
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    protected showAdvanced(): void;
	    protected doDelete(): void;
	}
	//# sourceMappingURL=ConfigPage.d.ts.map

	interface IDynParent {
	    parent: string;
	    node: IConfigPage;
	    superadminOnly: boolean;
	}
	class ConfigPageFactory extends Application {
	    private registered_pages;
	    private dynamicParents;
	    private delayedRegister;
	    configApp: IConfigApp;
	    constructor(configApp: IConfigApp);
	    updateMainUI(disabled?: boolean): void;
	    createPage(pageId: string, type: string): IConfigPage;
	    registerPage(ext: IConfigPage, parentId?: string, dynamicParentId?: string, superadminOnly?: boolean): void;
	    delayedPageAdd(updateUI?: boolean): void;
	    insertProjectCopy(projectId: string): void;
	    insertProjectSettings(projectId: string): void;
	    insertProjectExtensionFolder(projectId: string): void;
	    insertProjectCategoryFolder(projectId: string, categoryExtended: XRCategoryExtendedType[]): void;
	    insertProjectExtension(projectId: string, parentId: string, plugin: any): void;
	    insertCategory(projectId: string, categories: XRCategoryExtendedType[]): void;
	}
	//# sourceMappingURL=ConfigPageFactory.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	export interface IConfigApp {
	    configPages: ConfigPageFactory;
	    plugins: IServerPluginSettings[];
	    getConfigPages(): ConfigPageFactory;
	    init(itemForm: JQuery, dlgForm: JQuery): void;
	    getUser(): string;
	    getVersion(): string;
	    getVersionQualifier(): string;
	    getNeedsSave(): boolean;
	    getLastProject(): string;
	    getType(): string;
	    getParentId(itemId: string): string;
	    saveAsync(): JQueryDeferred<any>;
	    cancel(): void;
	    resizeItem(): void;
	    postLogin(user: string, projects: string): void;
	    treeSelectionChange(pageId: string): void;
	    selectItem(itemId: string, itemLabel: string): void;
	    getTree(): IDB[];
	    getItem(itemId: string): IDB;
	    getCurrentItemId(): string;
	    pingCurrentItem(): void;
	    registerPage(item: IItem, parent: string, updateUI: boolean): void;
	    insertItem(item: IItem, parent: string): void;
	    itemChanged(needsSave: boolean): void;
	    setLastConnection(): void;
	    canNavigateAwayAsync(): JQueryDeferred<any>;
	    canDragDrop(nodeType: string, pageId: string): boolean;
	    dragEnter(dragged: Fancytree.FancytreeNode, target: Fancytree.FancytreeNode): string[] | boolean;
	    getJSONProjectSettings(projectId: string, settingId: string): IJsonSetting[];
	    settingExists(projectId: string, settingId: string): boolean;
	    setJSONProjectSettingAsync(projectId: string, setting: IJsonSetting, pageId: string): JQueryDeferred<IRestResult>;
	    setProjectSettingAsync(projectId: string, settingId: string, settingValue: string, pageId: string): JQueryDeferred<IRestResult>;
	    setServerSettingAsync(settingId: string, settingValue: string): JQueryDeferred<any>;
	    getServerSetting(settingId: string, defaultValue: any): any;
	    setServerSetting(settingId: string, property: string, newValue: any): void;
	    getCustomerSetting(setting: string): string;
	    setCategorySettingAsync(projectId: string, category: string, settingId: string, settingValue: string, pageId: string): JQueryDeferred<any>;
	    getProjectConfig(projectId: string): XRGetProject_ProjectInfo_ProjectInfo;
	    getCatgegoryConfig(projectId: string, category: string): XRCategoryExtendedType;
	    getCategories(projectId: string): string[];
	    getUserPermission(projectId: string): XRUserPermissionType[];
	    getGroupPermission(projectId: string): XRGroupPermissionType[];
	    canUserWrite(projectId: string, login: string): boolean;
	    canGroupWrite(projectId: string, groupId: number): boolean;
	    getFieldConfig(projectId: string, category: string, field: string): XRFieldType;
	    updateFieldConfig(projectId: string, category: string, field: string, newConfig: XRFieldType): void;
	    removedFromTree(itemId: string, newId: string): void;
	    renamePage(pageId: string, label: string, parent: string): void;
	    updateProjectData(projectId: string): JQueryDeferred<IRestResult>;
	    reloadProject(project: string, pageId: string, parentFolderId: string): JQueryDeferred<any>;
	    signOut(): void;
	    initConfigPages(): void;
	}
	//# sourceMappingURL=IConfigApp.d.ts.map

	class LineEditor {
	    editor: LineEditorExt;
	    constructor();
	    showDialog(configPage: ConfigPage, title: string, height: number, input: ILineEditorLine[], onOk: (update: ILineEditorLine[]) => boolean, width?: number): void;
	    static mapToKeys(results: ILineEditorLine[]): ILineEditorLine[];
	}
	//# sourceMappingURL=LinEditor.d.ts.map

	class TextEditor {
	    constructor();
	    showDialog(title: string, value: string, onOk: (update: string) => void): void;
	}
	//# sourceMappingURL=TextEditor.d.ts.map

	class TextMacroBase extends ConfigPage {
	    protected macrosOriginal: ISmartTextConfig;
	    protected macrosChanged: ISmartTextConfig;
	    protected isServerMacros: boolean;
	    protected moveToServer: string[];
	    protected useTiny: boolean;
	    protected paramChanged(): void;
	    protected init(): void;
	    protected showSimple(): void;
	    protected showMacroList(title: string, type: number, help: string, projectId: string): void;
	    protected deleteMacro(midx: number, projectId?: string): void;
	    protected editMacro(tidx: number, type: number): void;
	    protected updateMacro(tidx: number, newMac: ISmartTextConfigReplacement): boolean;
	    protected globalMacro(tidx: number, type: number): void;
	    protected showAdvanced(): void;
	}
	//# sourceMappingURL=TextMacroBase.d.ts.map

	function InitializeSettingsLib(configApp: IConfigApp): void;
	//# sourceMappingURL=initialize.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class CategoryFolder extends ConfigPage {
	    static CATEGORY_FOLDER_ID: string;
	    static CATEGORY_FOLDER_TYPE: string;
	    private project;
	    private help;
	    private category;
	    private newLabel;
	    private newType;
	    private hint;
	    private create;
	    getNode(): {
	        type: string;
	        id: string;
	        icon: string;
	        title: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    protected showSimple(): void;
	    protected enableCreateField(): void;
	    protected doDoCopy(selectedProject: string, dialog: JQuery): void;
	    protected doCopy(): void;
	    protected doDelete(): void;
	    protected changeCategoryLabels(newShort: string, newLong: string): void;
	    protected changeCategoryLabels_doIt(newShort: string, newLong: string): void;
	    protected dodoDelete(): void;
	}
	//# sourceMappingURL=CategoryFolder.d.ts.map

	/// <reference types="jquery" />
	class CategoryFolders extends ConfigPage {
	    static CATEGORY_FOLDERS_ID: string;
	    private catId;
	    private catName;
	    private includeDefaultFields;
	    private create;
	    private ctype;
	    private hint;
	    getNode(): {
	        id: string;
	        title: string;
	        type: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    showSimple(): void;
	    protected enableCreateField(): void;
	}
	//# sourceMappingURL=CategoryFolders.d.ts.map

	/// <reference types="jquery" />
	class CategorySetting extends ConfigPage {
	    getNode(): {
	        id: string;
	        type: string;
	        title: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    private createEdit;
	    private editConcurrentEdit;
	    private editItemTabbing;
	    private editCategoryIcon;
	    private editSyncInfo;
	    private createNew;
	}
	//# sourceMappingURL=CategorySetting.d.ts.map

	/// <reference types="jquery" />
	class Field extends ConfigPage {
	    static FIELD_TYPE: string;
	    private help;
	    private project;
	    private category;
	    private fieldId;
	    private field;
	    private fieldOriginal;
	    private fieldOptions;
	    constructor(configApp: IConfigApp);
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    static getFieldDescription(fieldType: string): IFieldDescription;
	    static fieldHelp(fieldType: string): string;
	    static fieldDescription: IFieldDescription[];
	    static getDHFConfig(): IDHFConfig;
	    static getPossibleFieldsForCategory(project: string, category: string): IFieldDescription[];
	    static fieldGroupsBase: {
	        value: string;
	        label: string;
	    }[];
	    static fieldGroupsNormal: {
	        value: string;
	        label: string;
	    }[];
	    static fieldGroupsDocs: {
	        value: string;
	        label: string;
	    }[];
	    static getFieldGroups(category: string): {
	        value: string;
	        label: string;
	    }[];
	    protected isInternal(fieldType: string): boolean;
	    protected showSimple(): void;
	    protected showAdvanced(): void;
	    protected addTabSelect(): void;
	    protected doDelete(): void;
	    private paramChanged;
	    private addCommonFields;
	    private canBePublished;
	    private addRichtextFields;
	    private addDateFields;
	    private addSectionFields;
	    private addPlainTextFields;
	    private addFileManagerFields;
	    private addDropdownFields;
	    private showEditDropDown;
	    private addUserFields;
	    private addCascadingSelectFields;
	    private addDownLinkFields;
	    private addCheckboxFields;
	    private addCrossLinkFields;
	    private addGateFields;
	    private editGateButtons;
	    private editGateLine;
	    private addUplinkInfo;
	    private addRiskFields;
	    private addTestFields;
	    private addSyncFields;
	    private addInternal;
	    private addDocPropertySelector;
	}
	//# sourceMappingURL=Field.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class TableConfigPlugin implements IPlugin {
	    getFieldConfigOptions(): IFieldDescription[];
	    private static columnTypes;
	    addFieldSettings(configApp: any, project: string, pageId: string, fieldType: string, fieldParams: IFieldParameter, ui: JQuery, paramChanged: () => void, canBePublished: boolean): void;
	    addColumnEditor(ui: JQuery, options: ITableParams, isQMSProject: boolean, paramChanged: () => void): void;
	    private askForColumnType;
	    private editOptions;
	    private static askForName;
	    private static askForDropdownOptions;
	    private static askForCategoryOptions;
	    private static askForCategoryUpDownOptions;
	    private static askForReferenceOptions;
	}
	//# sourceMappingURL=TableConfig.d.ts.map

	function InitializeCategoriesSettings(configApp: IConfigApp): void;
	//# sourceMappingURL=initialize.d.ts.map

	/// <reference types="jquery" />
	class ExtensionFolder extends ConfigPage {
	    static EXTENSION_FOLDER_ID: string;
	    getNode(): {
	        id: string;
	        title: string;
	        type: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): Promise<void>;
	    showExtensions(users: IDropdownOption[]): void;
	    setPluginSetting(wfgw: RestConnector, pluginId: string, key: string, value: string, encrypted: boolean, ok: Function, failure: Function): void;
	}
	//# sourceMappingURL=ExtensionFolder.d.ts.map

	function InitializeExtensionSettings(configApp: IConfigApp): void;
	//# sourceMappingURL=initialize.d.ts.map

	/// <reference types="jquery" />
	interface IActualSetting {
	    projectId: number;
	    projectName: string;
	    settingName: string;
	    settingValue: any;
	}
	interface ISetupSetting {
	    key: string;
	    type: string;
	    userTitle: string;
	}
	interface IProjectPlugin {
	    owner: string;
	    projectId: number;
	    projectName: string;
	    pwd: string;
	    repo: string;
	    user: string;
	}
	interface IServerPluginSettings {
	    pluginName: string;
	    displayName: string;
	    capabilities: IGenericMap;
	    needed: boolean;
	    pluginId: number;
	    comments: string;
	    actualSettings: IActualSetting[];
	    projects: IProjectPlugin[];
	    setupSettings: ISetupSetting[];
	}
	class ProjectPluginSetting extends ConfigPage {
	    static PROJECT_EXTENSION_BASE_ID: string;
	    static PROJECT_EXTENSION_TYPE: string;
	    private plugin;
	    private pluginOrginal;
	    private pluginChanged;
	    private projectId;
	    private clientConfig;
	    private wfgw;
	    constructor(configApp: IConfigApp, projectId: string, plugin: IServerPluginSettings);
	    getNode(): {
	        type: string;
	        id: string;
	        icon: string;
	        title: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<unknown>;
	    protected saveAsyncRec(idx: number): JQueryDeferred<IRestResult>;
	    load(pageId: string): void;
	    private paramChanged;
	    protected showAdvanced(): void;
	    protected showSimple(): void;
	    protected getActualSetting(key: string): string;
	    protected setActualSetting(key: string, newvalue: string): void;
	    protected showServerSettings(): void;
	    protected showTextInput(key: string, help: string, password: boolean): void;
	    protected showclientConfigs(): void;
	    protected showBool(field: string, text: string): void;
	    protected showCreate(): void;
	    protected editCreate(gidx: number): void;
	    protected showSmartTasks(asSimpleId: boolean): void;
	    protected editSmart(matchJustAnId: boolean, gidx: number): void;
	    protected showSearches(): void;
	    protected editSearch(gidx: number): void;
	}
	//# sourceMappingURL=ProjectPluginSetting.d.ts.map

	/// <reference types="jquery" />
	class ProjectPluginSettingFolder extends ConfigPage {
	    static PROJECT_EXTENSION_FOLDER_BASE_ID: string;
	    static PROJECT_EXTENSION_FOLDER_TYPE: string;
	    getNode(): {
	        type: string;
	        id: string;
	        icon: string;
	        title: string;
	        children: any;
	    };
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    showSimple(): void;
	}
	//# sourceMappingURL=ProjectPluginSettingFolder.d.ts.map

	function InitializeProjectPluginSettings(configApp: IConfigApp): void;
	//# sourceMappingURL=initialize.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class Project extends ConfigPage {
	    static PROJECT_FOLDER_TYPE: string;
	    spinningWait: JQuery;
	    exportBtn: JQuery;
	    getNode(): {
	        type: string;
	        id: string;
	        title: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    private waitForJob;
	    protected showSimple(): void;
	    private showBranchInfoPage;
	    protected deleteProject(): void;
	    protected analyze(): void;
	}
	//# sourceMappingURL=Project.d.ts.map

	/// <reference types="jquery" />
	class ProjectLoad extends ConfigPage {
	    static PROJECTLOAD_FOLDER_TYPE: string;
	    getNode(): {
	        type: string;
	        id: string;
	        title: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	}
	//# sourceMappingURL=ProjectLoad.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class Projects extends ConfigPage {
	    static PROJECT_FOLDER_ID: string;
	    static PROJECT_FOLDER_TYPE: string;
	    protected copyName: JQuery;
	    protected copyId: JQuery;
	    protected copyIdHint: JQuery;
	    protected copyTemplate: JQuery;
	    protected copyRemoveContent: JQuery;
	    protected copyRemoveAccess: JQuery;
	    protected copyKeepHistory: JQuery;
	    protected copyCreate: JQuery;
	    private projectCreationProgress;
	    protected backName: JQuery;
	    protected backId: JQuery;
	    protected backIdHint: JQuery;
	    protected backTemplate: JQuery;
	    protected backTag: JQuery;
	    protected backTagHint: JQuery;
	    protected backOver: JQuery;
	    protected enableUserImportCheckbox: JQuery;
	    protected backNewTag: JQuery;
	    protected backNewTagDescription: JQuery;
	    protected backCreate: JQuery;
	    protected backLastFile: FileList;
	    getNode(): {
	        type: string;
	        id: string;
	        title: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    protected showSimple(): void;
	    protected showBackup(): void;
	    protected waitForProjectJob(jobId: number, projectId: string): void;
	    protected enableCreateBackup(): void;
	    protected showCopy(): void;
	    protected enableCreateCopy(): void;
	    protected waitForProject(projectId: string): void;
	    protected projectIdTest(projcectId: string, complainHere: JQuery, allowProjectOverwrite?: boolean): boolean;
	    static checkProjectId(projcectId: string): "" | "the project id must be shorter than 20 characters" | "the project id must start with an uppercase letter" | "the project id can only consist of letters, digits and underscore";
	}
	//# sourceMappingURL=Projects.d.ts.map

	function InitializeProjectListSettings(configApp: IConfigApp): void;
	//# sourceMappingURL=initialize.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class ACL extends ConfigPage {
	    static ACL_BASE_ID: string;
	    protected aclChanged: IACL;
	    protected aclOriginal: IACL;
	    protected grouped: IGenericMap;
	    private readonly DOCSECTIONS;
	    private readonly DOCSECTIONSTYPE;
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<IRestResult>;
	    load(pageId: string): void;
	    protected showAdvanced(): void;
	    protected showSimple(): void;
	    protected showRules(): void;
	    protected editRule(gidx: number): void;
	    protected showGroupsInRule(ul: JQuery, gidx: number): void;
	    protected showAccessRightsDialog(gidx: number): void;
	    private displayAccessRights;
	    private yesNo;
	    private na;
	    private getCatAcl;
	    private paramChanged;
	    protected analyze(): void;
	}
	//# sourceMappingURL=ACL.d.ts.map

	/// <reference types="jquery" />
	class Branch extends ConfigPage {
	    static BRANCH_BASE_ID: string;
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        iconClass: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<IRestResult>;
	    load(pageId: string): void;
	    showSimple(): void;
	    private showCreatePage;
	    private validate;
	    private startCopy;
	    protected waitForProjectJob(jobId: number, projectId: string): void;
	}
	//# sourceMappingURL=Branch.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class BranchConfig extends ConfigPage {
	    protected uploader: JQuery;
	    private settingOriginal;
	    private settingNow;
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<IRestResult>;
	    load(pageId: string): void;
	    private paramChanged;
	    protected showAdvanced(): void;
	    protected showSimple(): void;
	}
	//# sourceMappingURL=BranchConfig.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class CategoryGroups extends ConfigPage {
	    static CATEGORYGROUPS_BASE_ID: string;
	    protected groupsChanged: ICategoryGroups;
	    protected groupsOriginal: ICategoryGroups;
	    protected grouped: IGenericMap;
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<IRestResult>;
	    load(pageId: string): void;
	    protected showAdvanced(): void;
	    protected showSimple(): void;
	    protected showGroups(): void;
	    protected editGroup(gidx: number): void;
	    protected showCategoriesInGroup(ul: JQuery, gidx: number): void;
	    protected getAvailableCategories(cats: string[]): IDropdownOption[];
	    private paramChanged;
	    protected analyze(): void;
	}
	//# sourceMappingURL=CategoryGroups.d.ts.map

	/// <reference types="jquery" />
	class ContextPages extends ConfigPage {
	    static CONTEXTPAGE_BASE_ID: string;
	    private settingOriginal;
	    private settingNow;
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<IRestResult>;
	    load(pageId: string): void;
	    private paramChanged;
	    protected showSimple(): void;
	    protected showSimpleProp(key: string, title: string, label: string): void;
	    protected showAdvanced(): void;
	}
	//# sourceMappingURL=ContextPages.d.ts.map

	/// <reference types="jquery" />
	interface ISectionDef {
	    name: string;
	    type: string;
	}
	class DhfConfig extends ConfigPage {
	    static LOCK_BASE_ID: string;
	    private settingOriginal;
	    private settingNow;
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<IRestResult>;
	    load(pageId: string): void;
	    private paramChanged;
	    protected showAdvanced(): void;
	    protected showSimple(): void;
	    protected showDocumentStructures(): void;
	    protected showSignatureMeanings(): void;
	    protected editStructure(docId: string): void;
	    protected editSignatureMeaning(sicId: string): void;
	}
	//# sourceMappingURL=DHF.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class DropDowns extends ConfigPage {
	    static DROPDOWN_BASE_ID: string;
	    private project;
	    private newId;
	    private hint;
	    private tests;
	    private updates;
	    private guiTools;
	    create: JQuery;
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    setProject(project: string): void;
	    showDropDownAdd(ui: JQuery, text: string, pageId?: string, created?: (id: string) => void): void;
	    editDropDownOptions(ddid: string, saveDirect: boolean): void;
	    editDropDownGroups(ddid: string, saveDirect: boolean): void;
	    editAdvanced(ddid: string): void;
	    private paramChanged;
	    private showDropDowns;
	}
	//# sourceMappingURL=DropDowns.d.ts.map

	/// <reference types="jquery" />
	class Extras extends ConfigPage {
	    static EXTRAS_BASE_ID: string;
	    private settingOriginal;
	    private settingNow;
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<IRestResult>;
	    load(pageId: string): void;
	    private paramChanged;
	    protected showSimple(): void;
	    protected showSimpleProp(key: string, label: string, help: string): void;
	    protected showSelect(key: string, label: string, help: string, options: IDropdownOption[]): void;
	    protected showAdvanced(): void;
	}
	//# sourceMappingURL=Extras.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class ItemLock extends ConfigPage {
	    static LOCK_BASE_ID: string;
	    private settingOriginal;
	    private settingNow;
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<IRestResult>;
	    load(pageId: string): void;
	    private paramChanged;
	    protected showSimple(): void;
	    protected showLocks(): void;
	    protected editGroup(gidx: number): void;
	    protected showLockMasters(ul: JQuery, gidx: number): void;
	    protected showAdvanced(): void;
	}
	//# sourceMappingURL=ItemLock.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class Labels extends ConfigPage {
	    static LABELS_BASE_ID: string;
	    private labelsOriginal;
	    private labelsChanged;
	    private labelTools;
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<IRestResult>;
	    load(pageId: string): void;
	    private paramChanged;
	    protected showAdvanced(): void;
	    protected showSimple(): void;
	    protected analyze(): void;
	    static getName(label: ILabel): string;
	    protected showShared(): void;
	    protected showOr(): void;
	    protected showXor(): void;
	    protected showReview(): void;
	    protected showDesignReview(): void;
	    protected showGroup(groupType: string): void;
	    protected sortGroup(groupIdx: number): void;
	    protected editGroup(groupType: string, groupIdx: number): void;
	    protected editOrGroup(groupType: string, groupIdx: number): void;
	    protected showDesignReviewLabels(ul: JQuery): void;
	    protected showLabelsInGroup(ul: JQuery, groupType: string, gidx: number): void;
	    protected editLabel(groupIdx: number, groupType: string, label: string): void;
	    protected getLabelProp(ldef: ILabel, ps: string): any;
	    protected groupsAreSame(g1: ILabelGroup, g2: ILabelGroup): boolean;
	    static getLabelName(projectId: string, label: string): string;
	    static getLabelOptions(includeDesignReviews?: boolean): IDropdownOption[];
	    static hasCategory(projectId: string, category: string): boolean;
	    static removeCategory(configApp: IConfigApp, projectId: string, category: string): JQueryDeferred<IRestResult>;
	}
	//# sourceMappingURL=Labels.d.ts.map

	/// <reference types="jquery" />
	class Mail extends ConfigPage {
	    static MAIL_BASE_ID: string;
	    private mailChanged;
	    private mailOriginal;
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    paramChanged(): void;
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    showSimple(): void;
	    protected showAdvanced(): void;
	}
	//# sourceMappingURL=Mail.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class NavigationBarConfig extends ConfigPage {
	    protected uploader: JQuery;
	    private settingOriginal;
	    private settingNow;
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<IRestResult>;
	    load(pageId: string): void;
	    private paramChanged;
	    protected showAdvanced(): void;
	    protected showSimple(): void;
	    protected editTab(idx: number): void;
	}
	//# sourceMappingURL=NavigationBarConfig.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class ProjectLogo extends ConfigPage {
	    protected uploader: JQuery;
	    protected logo: IStringMap;
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    protected showSimple(): void;
	    protected addUploadArea(logoName: string, help: string, logoId: string, removeName: string, defaultPath: string, fileTypes: string[], containerDisplayClass: string): void;
	    protected fileUploaded(uploaded: JQuery, logoId: string): void;
	    protected logoDeleted(logoId: string): void;
	}
	//# sourceMappingURL=ProjectLogo.d.ts.map

	/// <reference types="jquery" />
	class ProjectSettingsFolder extends ConfigPage {
	    getNode(): {
	        type: string;
	        id: string;
	        icon: string;
	        title: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    protected showSimple(): void;
	    protected createNewSetting(): void;
	    protected deleteSettings(key: string): void;
	    protected createEditSetting(key: string): void;
	}
	//# sourceMappingURL=ProjectSettingsFolder.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class QMS extends ConfigPage {
	    static QMS_BASE_ID: string;
	    private qmsConfigOriginal;
	    private qmsConfigChanged;
	    protected labelsConfigOriginal: ILabelsConfig;
	    protected labelsConfigChanged: ILabelsConfig;
	    protected affectedConfigOriginal: IDropDownConfig;
	    protected affectedConfigChanged: IDropDownConfig;
	    protected responsibleConfigOriginal: IDropDownConfig;
	    protected responsibleConfigChanged: IDropDownConfig;
	    protected grouped: IGenericMap;
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<IRestResult>;
	    load(pageId: string): void;
	    private paramChanged;
	    protected showAdvanced(): void;
	    protected showSimple(): void;
	    /************************** Roles rights *************************/
	    protected showRoles(): void;
	    protected showPushRoles(): void;
	    protected showRolesFor(responsible: boolean): void;
	    protected showRole(ul: JQuery, responsible: boolean, roleIdx: number, roleName: string, showUp: boolean, showDown: boolean): void;
	    protected editRole(responsible: boolean, roleIdx: number): void;
	    protected createRole(responsible: boolean): void;
	    /************************** Publishing rights *************************/
	    protected showPublishing(publication: IPublication): void;
	    /************************** Viewing rights *************************/
	    protected showViewingRights(): void;
	    /************************** PROC and WI reviewer *************************/
	    protected showReviewers(categoryRules: IPublicationCategory): void;
	    protected showLabelReviewers(label: string, reviewType: string): void;
	    /************************** Groups *************************/
	    protected showGroupLabels(groupType: string, groupName: string, groupCategory: string): void;
	    protected moveUp(el: JQuery): void;
	    protected moveDown(el: JQuery): void;
	    protected showGroupLabel(groupType: string, ul: JQuery, groupLabelId: string, showUp: boolean, showDown: boolean): void;
	    protected editGroupLabel(groupLabelId: string): void;
	    protected createGroupLabel(groupType: string, groupCategory: string): void;
	    protected getLabelName(labelId: string): string;
	    protected setLabelName(labelId: string, newName: string): void;
	    protected deleteGroupLabel(groupLabelId: string): void;
	    protected analyze(): void;
	}
	//# sourceMappingURL=QMS.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class Risks extends ConfigPage {
	    static RISKS_BASE_ID: string;
	    protected riskOriginal: IRiskConfig;
	    protected riskChanged: IRiskConfig;
	    protected riskFactorIds: string[];
	    protected riskWeightIds: string[];
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    protected riskSave(event: IItemChangeEvent): void;
	    protected paramChanged(): void;
	    protected showAdvanced(): void;
	    protected showError(area: string): void;
	    protected showSimple(): void;
	    protected analyze(): void;
	    protected showTest(): void;
	    protected showReductions(): void;
	    protected showPerControlReductions(): void;
	    protected editReduction(rr_idx: number): void;
	    protected showMethod(): void;
	    protected editRpnTable(): void;
	    protected editRiskZones(): void;
	    protected editRPNLooks(which: string): void;
	    protected showRiskControls(): void;
	    protected showFactors(): void;
	    protected getNameOfType(type: string): "dropdown" | "multiline text field" | "rich text" | "line of text";
	    protected showWeights(factorLi: JQuery, factorIdx: number, isPostReductionFactor?: boolean): void;
	    protected createEditFactor(idx: number): void;
	    protected createEditWeight(fidx: number, widx: number, isPostReductionFactor?: boolean): void;
	    protected createEditFactorOptions(fidx: number): void;
	    static hasCategory(projectId: string, category: string): boolean;
	    static removeCategory(configApp: IConfigApp, projectId: string, category: string): JQueryDeferred<IRestResult>;
	}
	export class RiskSettings extends Risks {
	    private fieldConfig;
	    private onChangeFieldSetting;
	    addFieldSettings(configApp: IConfigApp, project: string, pageId: string, fieldType: string, fieldParams: IRiskTableControlOptions, ui: JQuery, paramChanged: () => void): void;
	    postSave(project: string, field: string): void;
	    protected showPostDialogsForRisks(project: string, search: string): void;
	    protected showPostSaveDialog(project: string): void;
	    protected startReIndex(project: string, content: JQuery, dlg: JQuery): void;
	    protected paramChanged(): void;
	}
	//# sourceMappingURL=Risks.d.ts.map

	/// <reference types="jquery" />
	class Search extends ConfigPage {
	    protected mc: ISearchConfig;
	    static SEARCH_BASE_ID: string;
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    protected showSimple(): void;
	    protected createEditSearch(idx: number): void;
	    protected showAdvanced(): void;
	}
	//# sourceMappingURL=Search.d.ts.map

	/// <reference types="jquery" />
	interface ITestColumns {
	    testCats: string[];
	    shared: ITableParams;
	    xtcOnly: ITableParams;
	}
	class Tests extends ConfigPage {
	    static TESTS_BASE_ID: string;
	    private testOriginal;
	    private testChanged;
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<IRestResult>;
	    load(pageId: string): void;
	    private paramChanged;
	    protected showAdvanced(): void;
	    protected fixTestChanged(): void;
	    protected showError(area: string): void;
	    protected showSimple(): void;
	    protected analyze(): void;
	    protected showTestCategories(): void;
	    protected showTestColumns(): void;
	    private getTestColumns;
	    protected showPresetFields(): void;
	    protected showDefaultTester(): void;
	    protected showDefaultTestResultResult(): void;
	    protected showSearchExpressions(): void;
	    showTestStepResults(): void;
	    editAutomatic(): void;
	    editManual(): void;
	    editSteps(): void;
	    static hasCategory(projectId: string, category: string): boolean;
	    static removeCategory(configApp: IConfigApp, projectId: string, category: string): JQueryDeferred<IRestResult>;
	}
	//# sourceMappingURL=Tests.d.ts.map

	/// <reference types="jquery" />
	class TextMacros extends TextMacroBase {
	    static MACROS_BASE_ID: string;
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<IRestResult>;
	    private saveProject;
	    private saveServer;
	    load(pageId: string): void;
	}
	//# sourceMappingURL=TextMacros.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class Traceability extends ConfigPage {
	    static TRACE_BASE_ID: string;
	    private traceOriginal;
	    private traceChanged;
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<IRestResult>;
	    load(pageId: string): void;
	    private paramChanged;
	    protected showAdvanced(): void;
	    protected showSimple(): void;
	    protected categoriesWithLinks(): string[];
	    protected showGraph(): void;
	    protected analyze(): void;
	    protected showConfig(): void;
	    static getCatTypeOptions(): {
	        id: string;
	        label: string;
	    }[];
	    protected editCategory(cidx: number): void;
	    protected showRules(sul: JQuery, tridx: number, down: boolean): void;
	    protected editRule(tridx: number, idx: number, down: boolean): void;
	    static hasCategory(projectId: string, category: string): boolean;
	    static removeCategory(configApp: IConfigApp, projectId: string, category: string): JQueryDeferred<IRestResult>;
	    static getCategoryOfType(type: string): string[];
	    static getDocCats(): string[];
	    static getCategoryTypeHuman(category: string): string;
	    static addCategory(configApp: IConfigApp, catId: string, projectId: string, catType: string): JQueryDeferred<IRestResult>;
	}
	//# sourceMappingURL=Traceability.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class WordTemplate extends ConfigPage {
	    protected uploader: JQuery;
	    protected labelUI: LabelTemplateSettings;
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<IRestResult>;
	    willUnload(): void;
	    load(pageId: string): void;
	    protected fileUploaded(): void;
	    protected doDelete(): void;
	}
	class LabelTemplateSettings {
	    DOCUMENT_STATUS_GROUP: string;
	    DEFAULT_LABEL_NAME: string;
	    LABEL_COLOR_ACTIVE: ICIColor;
	    LABEL_COLOR_PASSIVE: ICIColor;
	    LABEL_REGEX_STRING: string;
	    LABEL_REGEX: RegExp;
	    labels: ILabelsConfig;
	    project: string;
	    container: JQuery;
	    fileEditors: {
	        [key: string]: JQuery;
	    };
	    deleteEnabled?: string;
	    newLabelText: string;
	    configApp: IConfigApp;
	    constructor(configApp: IConfigApp, container: JQuery, project: string);
	    private documentClickHandler;
	    removeDocumentClickHandler(): void;
	    update(): void;
	    private makeSureItHasDefaults;
	    buildUITable(): void;
	    private isTheLabalValueNew;
	    private checkAddLabelButton;
	    private addLabelSubmit;
	    fileEditor(labelName: string): JQuery;
	    addNewLabel(name: string): void;
	    getSettings(): string;
	    private deleteLabel;
	    addLabelToLabelConfig(config: ILabelsConfig, label: ILabel, addToFront?: boolean): ILabelsConfig;
	    updateStatusGroup(config: ILabelsConfig, newGroup: ILabelGroup): ILabelsConfig;
	    findStatusGroup(config: ILabelsConfig): ILabelGroup;
	    deleteLabelFromConfig(config: ILabelsConfig, labelID: string): ILabelsConfig;
	    createLabel(name: string): ILabel;
	    createDefaultLabel(): ILabel;
	    styleSet(text: string): {
	        on: {
	            foreground: string;
	            background: string;
	            icon: string;
	            displayName: string;
	            tooltip: string;
	        };
	        off: {
	            foreground: string;
	            background: string;
	            icon: string;
	            displayName: string;
	            tooltip: string;
	        };
	    };
	    enabledLabel(text: string): {
	        foreground: string;
	        background: string;
	        icon: string;
	        displayName: string;
	        tooltip: string;
	    };
	    disabledLabel(text: string): {
	        foreground: string;
	        background: string;
	        icon: string;
	        displayName: string;
	        tooltip: string;
	    };
	    labelStyle(text: string, foreground: ICIColor, background: ICIColor): {
	        foreground: string;
	        background: string;
	        icon: string;
	        displayName: string;
	        tooltip: string;
	    };
	    createGroup(): ILabelGroup;
	}
	//# sourceMappingURL=WordTemplates.d.ts.map

	function InitializeProjectSettings(configApp: IConfigApp): void;
	//# sourceMappingURL=initialize.d.ts.map

	/// <reference types="jquery" />
	interface IFileConfig {
	    sharing: string;
	}
	class FileSettings extends ConfigPage {
	    private fileConfig;
	    private fileSetting;
	    getNode(): {
	        id: string;
	        type: string;
	        title: string;
	        icon: string;
	        children: IDB[];
	    };
	    paramChanged(): void;
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    protected showAdvanced(): void;
	}
	//# sourceMappingURL=Attachments.d.ts.map

	/// <reference types="jquery" />
	class DashboardSettings extends ConfigPage {
	    protected dashboardsOriginal: IDashboardConfig;
	    protected dashboardChanged: IDashboardConfig;
	    protected useTiny: boolean;
	    protected paramChanged(): void;
	    protected init(): void;
	    protected showSimple(): void;
	    protected showDashboards(help: string): void;
	    protected deleteDashboard(midx: string): void;
	    protected editDashboard(tidx: string): void;
	    protected updateDashboard(tidx: string, newDashboard: IDashboard): boolean;
	    protected showAdvanced(): void;
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<any>;
	    load(pageId: string): void;
	}
	//# sourceMappingURL=DashboardSettings.d.ts.map

	/// <reference types="jquery" />
	class DateTimeSettings extends ConfigPage {
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    protected showSimple(): void;
	}
	//# sourceMappingURL=DateAndTimeSettings.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IRestoreObject {
	    project: string;
	    newId: string;
	}
	class SettingDeletedProjects extends ConfigPage {
	    private dpChanged;
	    private dpOriginal;
	    private backIdHint;
	    static SERVER_SETTING_DELETED_PROJECTS: string;
	    getNode(): {
	        id: string;
	        type: string;
	        title: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<any>;
	    load(pageId: string): void;
	    protected showAdvanced(): void;
	    protected showSimple(): void;
	    protected enableRestore(restoreBtn: JQuery, restore: IRestoreObject): void;
	}
	//# sourceMappingURL=DeletedProjects.d.ts.map

	/// <reference types="jquery" />
	class HTMLCLEANUPConfig extends ConfigPage {
	    private dpChanged;
	    private dpOriginal;
	    private static SERVER_SETTING_PAGE_ID;
	    private static THE_SETTING;
	    private isServer;
	    constructor(configApp: IConfigApp, isServer: boolean);
	    getNode(): {
	        id: string;
	        type: string;
	        title: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<IRestResult>;
	    private paramChanged;
	    load(pageId: string): void;
	    protected showAdvanced(): void;
	    protected showSimple(): void;
	    private testSetting;
	    private testSettingCategory;
	}
	//# sourceMappingURL=HTMLCleanup.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class JobList extends ConfigPage {
	    interval: number;
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    willUnload(): void;
	    JobList: {
	        [key: number]: JQuery;
	    };
	    protected showHide(name: string, checked: boolean): void;
	    protected showSimple(): void;
	    createNewJob(job: XRJobWithUrl): void;
	}
	//# sourceMappingURL=JobList.d.ts.map

	/// <reference types="jquery" />
	class PasswordSettings extends ConfigPage {
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    protected showSimple(): void;
	    private changePasswordExpiry;
	}
	//# sourceMappingURL=PasswordSettings.d.ts.map

	/// <reference types="jquery" />
	class PrintConfig extends ConfigPage {
	    private dpChanged;
	    private dpOriginal;
	    private resyncButton;
	    static SERVER_SETTING_PRINTCONFIG_PAGE_ID: string;
	    static SERVER_SETTING_PRINTCONFIG_SETTING: string;
	    private static BUTTON_TEXT;
	    private issuesUl;
	    getNode(): {
	        id: string;
	        type: string;
	        title: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<any>;
	    private paramChanged;
	    load(pageId: string): void;
	    private updateSettings;
	    private validateSettings;
	    protected showAdvanced(): void;
	    protected showSimple(): void;
	    resyncSettings(): void;
	    /***
	     * Wrapper around the matrix rest call, returning a regular Promise
	     * @param url the URL to call, will be prefixed with the current PRINT project
	     * @private
	     */
	    private callMatrix;
	    /***
	     * Get the all items in a category and their code
	     * @param type The type to get all code fragments for
	     * @private
	     */
	    private updateItemMap;
	    /***
	     * Get the field ID of the CODE field of the given category. This uses the current PRINT project
	     * @param category The category ID
	     * @private
	     */
	    private getCodeField;
	}
	//# sourceMappingURL=PrintConfig.d.ts.map

	/// <reference types="jquery" />
	class ServerSettingsEditor extends ConfigPage {
	    static PROJECT_SETTING_FOLDER_BASE_ID: string;
	    static PROJECT_SETTING_FOLDER_TYPE: string;
	    getNode(): {
	        type: string;
	        id: string;
	        icon: string;
	        title: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    protected showSimple(): void;
	    protected createNewSetting(): void;
	    protected deleteSettings(key: string): void;
	    protected createEditSetting(key: string, val: any): void;
	}
	//# sourceMappingURL=ServerSettingsEditor.d.ts.map

	/// <reference types="jquery" />
	class ServerSettingsFolder extends ConfigPage {
	    static SERVER_SETTING_FOLDER_ID: string;
	    getNode(): {
	        type: string;
	        id: string;
	        icon: string;
	        title: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    protected showSimple(): void;
	    protected showPlugins(): void;
	}
	//# sourceMappingURL=ServerSettingsFolder.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class SettingProjectGroups extends ConfigPage {
	    groupsChanged: IProjectGroups;
	    groupsOriginal: IProjectGroups;
	    getNode(): {
	        id: string;
	        type: string;
	        title: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<any>;
	    load(pageId: string): void;
	    protected showAdvanced(): void;
	    protected showSimple(): void;
	    protected showGroups(): void;
	    protected editGroup(gidx: number): void;
	    protected showProjectsInGroup(ul: JQuery, gidx: number): void;
	    private paramChanged;
	}
	//# sourceMappingURL=SettingProjectGroups.d.ts.map

	/// <reference types="jquery" />
	class SettingTerms extends TextMacroBase {
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<any>;
	    load(pageId: string): void;
	}
	//# sourceMappingURL=SettingTerms.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class TemplateProjects extends ConfigPage {
	    private templates;
	    private original;
	    static SERVER_SETTING_TEMPLATE_PROJECTS: string;
	    getNode(): {
	        id: string;
	        type: string;
	        title: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<any>;
	    load(pageId: string): void;
	    protected onChange(): void;
	    protected showSimple(): void;
	    protected verifySource(ul: JQuery, project: string): void;
	    protected verifyMarkAsTemplate(ul: JQuery, project: string): void;
	    protected showProjectsInGroup(help: string, master: boolean): void;
	    protected showAdvanced(): void;
	}
	//# sourceMappingURL=TemplateProjects.d.ts.map

	/// <reference types="jquery" />
	class ToDoSettings extends ConfigPage {
	    private todoConfig;
	    getNode(): {
	        id: string;
	        type: string;
	        title: string;
	        icon: string;
	        children: IDB[];
	    };
	    paramChanged(): void;
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    protected showAdvanced(): void;
	}
	//# sourceMappingURL=ToDoSettings.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class Tokens extends ConfigPage {
	    private tokens;
	    getNode(): {
	        id: string;
	        type: string;
	        title: string;
	        icon: string;
	        children: IDB[];
	    };
	    paramChanged(): void;
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    protected showTokens(container: JQuery, allUsers: XRGetUser_AllUsers_GetUserListAck): void;
	    protected showAdvanced(): void;
	}
	//# sourceMappingURL=Tokens.d.ts.map

	/// <reference types="jquery" />
	class UIConfig extends ConfigPage {
	    private dpChanged;
	    private dpOriginal;
	    static SERVER_SETTING_UI_PAGE_ID: string;
	    static SERVER_SETTING_UI_SETTING: string;
	    getNode(): {
	        id: string;
	        type: string;
	        title: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<any>;
	    private paramChanged;
	    load(pageId: string): void;
	    protected showAdvanced(): void;
	    protected showSimple(): void;
	}
	//# sourceMappingURL=UIConfig.d.ts.map

	function InitializeServerSettings(configApp: IConfigApp): void;
	//# sourceMappingURL=initialize.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface GroupAccessUser {
	    overall: string;
	    details: string[];
	}
	class ConfigPageUsersBase extends ConfigPage {
	    private vscroll;
	    private ivscroll;
	    private hscroll;
	    private ihscroll;
	    private filterBox;
	    private mainTable;
	    private leftTable;
	    private leftContainer;
	    protected leftBody: JQuery;
	    private topTable;
	    private topContainer;
	    protected headerRow: JQuery;
	    protected accessTable: JQuery;
	    private accessContainer;
	    protected accessBody: JQuery;
	    protected createMainContainer(): void;
	    protected initTooltipBox(onShow: (cell: JQuery) => string): void;
	    protected placeChangeMenu(uio: JQuery, cell: JQuery): void;
	    protected doAllVerticalCells(accessTable: JQuery, row: number, col: number, change: (cell: JQuery, option: string) => JQueryDeferred<{}>, option: string): void;
	    protected doAllHorizontalCells(accessTable: JQuery, row: number, col: number, change: (cell: JQuery, option: string) => JQueryDeferred<{}>, option: string): void;
	    protected initCellMenu(menu: number, change: (cell: JQuery, option: string) => JQueryDeferred<{}>): void;
	    protected hideMenu(): void;
	    protected scrollTop(): void;
	    protected scrollLeft(): void;
	    protected initTableScrolling(paddingBottom?: number): void;
	    protected addFilter(label: string, key: string, alt?: string, onAltClick?: () => void): any;
	    protected addFilterUserGroup(label: string, classKey: string, dataKey: string, alt?: string, onAltClick?: () => void): any;
	    protected addFilterProjectGroup(label: string, classKey: string, dataKey: string, alt?: string, onAltClick?: () => void): any;
	    protected addFilterGroup(options: IDropdownOption[], resolve: (selected: string[]) => string[], label: string, classKey: string, dataKey: string, alt?: string, onAltClick?: () => void): any;
	    protected isMember(groupId: number, login: string): boolean;
	    protected updateMember(groupId: number, login: string, isMember: boolean): void;
	    protected getAccessRights(groupId: number, project: string): "" | "W" | "Q" | "R";
	    protected getAccessLetterFromNumber(projectRights: number): "" | "W" | "Q" | "R";
	}
	//# sourceMappingURL=ConfigPageUsersBase.d.ts.map

	/// <reference types="jquery" />
	class GroupsAccessOverview extends ConfigPageUsersBase {
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    showSimple(): void;
	    private setAccess;
	}
	//# sourceMappingURL=GroupAccessOverview.d.ts.map

	/// <reference types="jquery" />
	interface GroupAccessUser {
	    overall: string;
	    details: string[];
	}
	class UserAccessOverview extends ConfigPageUsersBase {
	    private allAdmins;
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    readonly AR_NoAccess = -1;
	    readonly AR_WriteAccess = 1;
	    readonly AR_ReadAccess = 0;
	    readonly AR_QMSAccess = 2;
	    showSimple(): void;
	    private showSimpleInner;
	    private setAccess;
	    private computeOverallAccess;
	    private updateMail;
	    private getGroupAccess;
	}
	//# sourceMappingURL=UserAccesOverview.d.ts.map

	/// <reference types="jquery" />
	interface IUserFilter {
	    filterText: string;
	    deleted: boolean;
	    filterGroup: string[];
	}
	class UserDetails extends ConfigPage {
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    showSimple(): void;
	    protected applyFilter(filter: IUserFilter): void;
	    protected insertImage(imageID: string): string;
	    protected formatPasswordAge(maxage: number, age: number): string | number;
	}
	//# sourceMappingURL=UserDetails.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class UserGroups extends ConfigPageUsersBase {
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    showSimple(): void;
	    protected showUserGroups(): void;
	    protected getGroupLi(idx: number): JQuery;
	    protected createUserGroup(ul: JQuery): void;
	    protected editUserGroup(gidx: number, li: JQuery): void;
	}
	//# sourceMappingURL=UserGroups.d.ts.map

	/// <reference types="jquery" />
	class UserGroupsAccess extends ConfigPageUsersBase {
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    showSimple(): void;
	    private setAccess;
	}
	//# sourceMappingURL=UserGroupsUsers.d.ts.map

	/// <reference types="jquery" />
	class UsersFolder extends ConfigPage {
	    static USERS_FOLDER_ID: string;
	    getNode(): {
	        type: string;
	        id: string;
	        icon: string;
	        title: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<unknown>;
	    load(pageId: string): void;
	    showSimple(): void;
	}
	//# sourceMappingURL=UsersFolder.d.ts.map

	function InitializeUserSettings(configApp: IConfigApp): void;
	//# sourceMappingURL=initialize.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IWidgetDashboardSettings {
	    enabled: boolean;
	    displayedWidgets: IDisplayedWidget[];
	}
	interface IDisplayedWidget {
	    id: string;
	    pluginName: string;
	    parameters: IWidgetParameters;
	    createdBy?: string;
	}
	enum widgetRenderEvent {
	    load = 0,
	    scroll = 1,
	    click = 2
	}
	enum renderMode {
	    placeholder = 0,
	    minimized = 1,
	    maximized = 2
	}
	enum IWidgetScope {
	    admin = 0,
	    user = 1,
	    superAdmin = 2
	}
	interface IWidgetPosition {
	    dashboard: string;
	    w: number;
	    h: number;
	    x?: number;
	    y?: number;
	}
	interface IWidgetParameters {
	    canBeAddedOrDeletedBy: IWidgetScope;
	    position: IWidgetPosition;
	    users?: string[];
	    options: {
	        title: string;
	        canBeHidden: boolean;
	        [key: string]: any;
	    };
	}
	interface IWidgetPlugin {
	    id: string;
	    help: string;
	    _root: JQuery;
	    displayedWidget: IDisplayedWidget;
	    pluginName(): string;
	    defaultParameters(): IWidgetParameters;
	    mergeOptions(parameters: IWidgetParameters): IWidgetParameters;
	    render(root: JQuery, displayedWidget: IDisplayedWidget): void;
	    updatePosition(w: number, h: number, x: number, y: number): any;
	    hide(showConfirm: boolean): any;
	    unload?(): void;
	    scrollIntoView?(): void;
	    clicked?(): void;
	    refresh?(): void;
	}
	class WidgetPluginManager {
	    pluginList: {
	        [key: string]: IWidgetPlugin;
	    };
	    loadedWidgets: {
	        [key: string]: IWidgetPlugin;
	    };
	    constructor();
	    registerPlugin(plugin: IWidgetPlugin): void;
	    addLoadedWidget(key: string, widget: IWidgetPlugin): void;
	    unLoadAllWidgets(): void;
	    removeLoadedWidget(displayedWidget: IDisplayedWidget): void;
	}
	interface IGridStackWidget {
	    /** widget position x (default?: 0) */
	    x?: number;
	    /** widget position y (default?: 0) */
	    y?: number;
	    /** widget dimension width (default?: 1) */
	    w?: number;
	    /** widget dimension height (default?: 1) */
	    h?: number;
	    /** if true then x, y parameters will be ignored and widget will be places on the first available position (default?: false) */
	    autoPosition?: boolean;
	    /** minimum width allowed during resize/creation (default?: undefined = un-constrained) */
	    minW?: number;
	    /** maximum width allowed during resize/creation (default?: undefined = un-constrained) */
	    maxW?: number;
	    /** minimum height allowed during resize/creation (default?: undefined = un-constrained) */
	    minH?: number;
	    /** maximum height allowed during resize/creation (default?: undefined = un-constrained) */
	    maxH?: number;
	    /** prevent resizing (default?: undefined = un-constrained) */
	    noResize?: boolean;
	    /** prevents moving (default?: undefined = un-constrained) */
	    noMove?: boolean;
	    /** prevents moving and resizing (default?: undefined = un-constrained) */
	    locked?: boolean;
	    /** widgets can have their own resize handles. For example 'e,w' will make the particular widget only resize east and west. */
	    resizeHandles?: string;
	    /** value for `gs-id` stored on the widget (default?: undefined) */
	    id?: number | string;
	    /** html to append inside as content */
	    content?: string;
	}
	var widgetPluginManager: WidgetPluginManager;
	//# sourceMappingURL=WidgetPluginManager.d.ts.map

	interface IDashboard {
	    displayString: string;
	    icon?: string;
	}
	interface IDashboardConfig {
	    dashboards: {
	        [key: string]: IDashboard;
	    };
	}
	var GridStack: any;
	class WidgetPluginsConstants {
	    static defaultDashboardId: string;
	    static defaultDashboard: IDashboard;
	}
	interface IWidgetPluginsContainer {
	    visible: boolean;
	    previousUrl: string;
	    toggle(): any;
	    addNewWidget(): any;
	    render(dashboardId: string): any;
	    loadServerSettingWidgets(loadAllUser: boolean): any;
	    exit(destination: string): any;
	    hideWidget(id: string): any;
	    unhide(id: string): any;
	    deleteWidget(displayedWidget: IDisplayedWidget): any;
	    showUpdateShowHiddenButton(): any;
	}
	class WidgetPluginsContainer implements IWidgetPluginsContainer {
	    visible: boolean;
	    private currentDashboard;
	    previousUrl: string;
	    toggle(): void;
	    private _root;
	    constructor();
	    addNewWidget(): void;
	    private grid;
	    render(dashboardId?: string): void;
	    loadServerSettingWidgets(loadAllUser?: boolean): void;
	    exit(destination: string): void;
	    hideWidget(id: string): void;
	    unhide(id: string): void;
	    deleteWidget(displayedWidget: IDisplayedWidget): void;
	    showUpdateShowHiddenButton(): void;
	}
	//# sourceMappingURL=WidgetPluginsContainer.d.ts.map

	/// <reference types="jquery" />
	class WidgetSettingsManager {
	    static getHiddenWidgets(): string[];
	    static hide(widget: IDisplayedWidget): JQueryDeferred<any>;
	    static unhide(displayedWidget: IDisplayedWidget): JQueryDeferred<any>;
	    static updatePosition(widget: IDisplayedWidget): JQueryDeferred<any>;
	    static setSettings(widget: IDisplayedWidget): JQueryDeferred<any>;
	    static deleteDeleteWidgetSettings(widget: IDisplayedWidget): JQueryDeferred<any>;
	    static canBeEdited(displayedWidget: IDisplayedWidget, configurator: ILineEditorLine[]): boolean;
	    static canBeDeleted(displayedWidget: IDisplayedWidget): boolean;
	}
	//# sourceMappingURL=WidgetSettingsManager.d.ts.map

	class ProjectStorage implements IDataStorage {
	    Project: string;
	    constructor(project: string);
	    setItem(itemKey: string, itemVal: string, dontSanitize?: boolean): void;
	    getItem(itemKey: string, dontSanitize?: boolean): string;
	    getItemDefault(itemKey: string, defaultValue: string): string;
	}
	//# sourceMappingURL=ProjectStorage.d.ts.map

	class ServerStorage implements IDataStorage {
	    private serverPrefix;
	    setItem(itemKey: string, itemVal: string, dontSanitize?: boolean): void;
	    getItem(itemKey: string, dontSanitize?: boolean): string;
	    getItemDefault(itemKey: string, defaultValue: string): string;
	}
	//# sourceMappingURL=ServerStorage.d.ts.map

	function initialize(): void;
	//# sourceMappingURL=Export.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	/**this is the information about a branch (including the merge history) */
	interface IBranchInfo {
	    /** tag set in mainline and branch just after the creation of the branch */
	    branchTag: string;
	    /** UTC date / time when the branch was created */
	    branchDate: string;
	    /** if of the mainline project */
	    sourceProject: string;
	    /** mapping of fields between mainline and branch */
	    fieldMapping: IFieldMergeMapping[];
	    /** allows you to not merge some categories, if not set it defaults to ["REPORT", FOLDER"] */
	    dontMerge?: string[];
	    /** these labels are set in new /updated items in mainline (if they exist in the given category) */
	    setLabels?: string[];
	    /** these labels are reset in new /updated items in mainline (if they exist in the given category) */
	    resetLabels?: string[];
	    /**  these labels are not copied in case they changed in the branch */
	    ignoreLabels?: string[];
	    /**  these labels are set (next to set labels) if there was a conflict and the user decided to mark the conflicts */
	    conflictLabels?: string[];
	    /** user ids of user who can merge branch back into main */
	    branchMasters?: string[];
	}
	enum EMergeChangeStatus {
	    deleted = 0,
	    created = 1,
	    changed = 2,
	    unchanged = 3,
	    notExist = 4
	}
	interface IFieldMergeMapping {
	    /** field id in mainline project */
	    mainline: number;
	    /** field id of same field in branch project */
	    branch: number;
	}
	interface IMergeResults {
	    utcDate: string;
	    user: string;
	    comment: string;
	    tag: string;
	    results: IMergeDetails[];
	}
	enum EItemChangeState {
	    never = 0,
	    notNow = 1,
	    now = 2
	}
	enum EMergeActionChoice {
	    noActionNeeded = -1,
	    undecided = 0,
	    ignore = 1,
	    add_restore = 2,
	    replace = 3,
	    delete = 4
	}
	interface IMergeDetails {
	    id: string;
	    mV: number;
	    bV: number;
	    a: EMergeActionChoice;
	    np: string;
	    l: string[];
	    u: string;
	}
	interface IMergeLookup {
	    [key: string]: XRMergeItem;
	}
	interface ILastMerges {
	    [key: string]: ILastMerge;
	}
	interface ILastMerge {
	    [key: string]: number;
	}
	interface IMove {
	    id: string;
	    parent: string;
	}
	interface IMergeCommand {
	    copy: string[];
	    conflicted: string[];
	    delete: string[];
	    add_links: ILink[];
	    remove_links: ILink[];
	    move: IMove[];
	    push?: number;
	}
	interface IMergeCommandTarget {
	    id: string;
	    m: number;
	}
	interface IImportMergeItem {
	    instance?: string;
	    project?: string;
	    id: string;
	    revision: number;
	    description: string;
	}
	enum EMergeType {
	    undefined = 0,
	    merge = 1,
	    push = 2
	}
	class ImportMergeBase {
	    protected fieldMapping: IStringNumberMap;
	    protected compare3Way(item1: IImportMergeItem, item2: IImportMergeItem, commonBase: IImportMergeItem): void;
	    protected showItem(show: IImportMergeItem): void;
	    protected remapItem(itemFromOtherProject: IItem): IItem;
	    protected getItem(item: IImportMergeItem): JQueryDeferred<unknown>;
	    protected renderVersion(hi: JQuery, source: string, item: IItem, version: number, category: string, branch?: string): void;
	}
	//# sourceMappingURL=ImportMergeBase.d.ts.map

	interface IImportColumn {
	    label: string;
	    id: string;
	    isLabel?: boolean;
	    index?: number;
	    fieldId?: number;
	    fieldType?: string;
	}
	interface IImportRow {
	    cells: string[];
	}
	function initialize(): void;
	//# sourceMappingURL=MassImport.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class BranchBase extends ImportMergeBase implements IPlugin {
	    protected pageRoot: string;
	    protected pageID: string;
	    protected pageTitle: string;
	    static BRANCH_INFO_SETTING: string;
	    protected mergeType: EMergeType;
	    protected msg_na: string;
	    protected msg_ignore: string;
	    protected msg_add_restore: string;
	    protected msg_add_restore_now: string;
	    protected msg_replace: string;
	    protected msg_restore_replace: string;
	    protected msg_delete: string;
	    protected msg_bothChanged: string;
	    protected msg_changedInBranchOnly: string;
	    protected msg_changedInMainlineOnly: string;
	    protected msg_explain_merge_push: string;
	    protected msg_explain_merge_push_help: string;
	    protected msg_links_added: string;
	    protected msg_links_removed: string;
	    protected msg_links_not_in_other: string;
	    isDefault: boolean;
	    private branchProject;
	    private branchInfo;
	    private lastMerges;
	    private mainlineBaseItemMap;
	    private mainlineNowItemMap;
	    private branchBaseItemMap;
	    private branchNowItemMap;
	    private branchBaseItems;
	    private branchNowItems;
	    private mainBaseItems;
	    private mainNowItems;
	    private mergeLineCount;
	    private mergeLineNoAction;
	    private mergeOptions;
	    initItem(_item: IItem, _jui: JQuery): void;
	    initServerSettings(serverSettings: XRGetProject_StartupInfo_ListProjectAndSettings): void;
	    supportsControl(ctrlType: string): boolean;
	    createControl(ctrl: JQuery, options: IBaseControlOptions): void;
	    initProject(): void;
	    isEnabled(): boolean;
	    getProjectPages(): IProjectPageParam[];
	    protected showPage(control: JQuery): void;
	    protected showBranchHistory(container: JQuery): void;
	    private showMergeDetails;
	    private addMergeDetail;
	    static renderItemLink(fullItem: string, otherProject?: string): string;
	    static addMergeDetail(ul: JQuery, detail: XRMergeAction, targetProject: string, isFromBranch: boolean): void;
	    protected wizardShowBranchSelect(container: JQuery): void;
	    private isMerge;
	    private isPush;
	    private wizardContentChanges;
	    private showChanges;
	    private showMergeDecisionsToTake;
	    private getPairs;
	    private getItemsOnlyInBranch;
	    private getItemsByChangeStatus;
	    private getOptionButtons;
	    private getOptionButton;
	    private showPairs;
	    private activateContentChangesNext;
	    private isBranchMaster;
	    private getUserContentChoices;
	    private wizardLinkChanges;
	    private addLinkList;
	    private wizardStructuralChanges;
	    private wizardExecuteMerge;
	    private renderSingleItem;
	    private compareMainVsBranch;
	    private renderBranchId;
	    private renderMainId;
	    private renderBranchOrMainId;
	    private createMap;
	    private mergeSelect;
	    private rememberMergeInfo;
	    protected getToolTip(actionText: any): string;
	}
	function initialize(): void;
	//# sourceMappingURL=Merge.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface INotificationTableOptions {
	    allowDelete: boolean;
	    selectable: boolean;
	    forColumn: boolean;
	    itemColumn: boolean;
	    doneColumn: boolean;
	    canCloseMine: boolean;
	    canCloseAll: boolean;
	    showAddButton: boolean;
	    none: string;
	    tableClass?: string;
	    moveDoneTo?: string;
	}
	class Notifications implements IPlugin {
	    private notificationConfig;
	    private lastCount;
	    private newNotification;
	    private _item;
	    private lastMenu;
	    private projectCount;
	    isDefault: boolean;
	    private notificationUpdateTimer;
	    previousNotificationsIds: number[];
	    constructor();
	    onUpdate(ui: JQuery, config: IContextPageConfigTab, context: IContextInformation): void;
	    init(): void;
	    setPreviousNotificationsIds(notifIds: number[]): void;
	    getPreviousNotificationsIds(): number[];
	    initItem(item: IItem, jui: JQuery): void;
	    initServerSettings(): void;
	    initProject(): void;
	    isEnabled(): boolean;
	    getProjectPages(): IProjectPageParam[];
	    updateMenu(ul: JQuery): void;
	    private userCanAcknowledgeNotification;
	    supportsControl(): boolean;
	    updateNotifications(): void;
	    private watchActivity;
	    private updateActivity;
	    private getNotificationChanges;
	    protected getTotalNotificationsProject(project: string): XRTodoCount;
	    protected getTotalNotifications(): number;
	    protected getProjectNotifications(project: string, item: string): XRTodo[];
	    private renderNotificationProjectPage;
	    protected renderNotificationRow(tr: JQuery, notification: XRTodo, tableOptions: INotificationTableOptions): void;
	    protected renderNotificationTable(container: JQuery, tableOptions: INotificationTableOptions, notifications: XRTodo[]): void;
	    protected indicateNotificationChange(): void;
	    protected closeNotifications(notifications: JQuery, deleteThem: boolean): void;
	    protected updateProjectMenu(): void;
	    static getMessage(todo: XRTodo): any;
	    static getField(todo: XRTodo): any;
	    static getReply(todo: XRTodo): any;
	    protected showCreateNotificationDialog(): JQueryDeferred<unknown>;
	    protected showAllNotificationsDialog(): void;
	    private showNotifications;
	    protected filterNotifications(ui: JQuery, cbs: any): void;
	    deleteNotificationDlg(notification: XRTodo): JQueryDeferred<unknown>;
	    deleteNotification(notification: XRTodo): JQueryDeferred<unknown>;
	    protected deleteNotificationIdRec(project: string, notifications: JQuery, deleteThem: boolean, idx: number): JQueryDeferred<unknown>;
	    protected deleteNotificationId(project: string, todoId: number, deleteThem: boolean): JQueryDeferred<unknown>;
	    createNotification(users: string[], project: string, item: string, text: string, type: string, atDate: Date): JQueryDeferred<unknown>;
	    private countRec;
	    protected updateCounters(): void;
	    protected getNotificationCount(itemId: string): number;
	    private addFancyTreeNotificationCounterPlugin;
	    static anchorTimer: any;
	    static anchorNotifications(): void;
	}
	var NotificationList: Notifications;
	function initialize(): void;
	//# sourceMappingURL=Notifications.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IStringJQueryArrayMap {
	    [key: string]: JQuery[];
	}
	function initialize(): void;
	//# sourceMappingURL=PubHistory.d.ts.map

	interface IReindexCats {
	    cats: string[];
	}
	function initialize(): void;
	//# sourceMappingURL=ReIndex.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ISection {
	    html: JQuery;
	    title: string;
	    type: string;
	}
	interface ISectionPair {
	    left: ISection | null;
	    right: ISection | null;
	    dynamic: boolean;
	}
	class Redlining implements IPlugin {
	    private _item;
	    private _jui;
	    isDefault: boolean;
	    private panel;
	    private selectedOnly;
	    private documentCompareCanceled;
	    initItem(item: IItem, jui: JQuery): void;
	    initServerSettings(): void;
	    initProject(): void;
	    supportsControl(): boolean;
	    updateMenu(ul: JQuery): void;
	    getProjectPages(): IProjectPageParam[];
	    compareDocuments(report: JQuery, leftId: string, rightId: string): void;
	    cancelCompare(): void;
	    compareDocumentsDetail(report: JQuery, leftId: string, rightId: string, leftCreationDate: string, rightCreationDate: string, leftFilter: string, rightFilter: string): void;
	    destroy(): void;
	    private getFilterOfDoc;
	    private showDetailedSectionChanges;
	    private getHtmlFromSection;
	    private getTitleFromSection;
	    private compareHtmlSection;
	    private viewHtmlSection;
	    private getTypeFromClass;
	    private showDetailedItemChanges;
	    private extractLinks;
	    getIncludedItems(leftId: string, rightId: string): JQueryDeferred<unknown>;
	    private renderProjectPage;
	    private addFilters;
	    private hideShow;
	    private showDateSelection;
	    private createRedLineDates;
	    private createItemsFromTree;
	    private showDifferences;
	    private addItems;
	}
	function initialize(): void;
	//# sourceMappingURL=Redlining.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class ReviewContextFrame implements IPlugin {
	    static reviewContextFrame: string;
	    static lastDisplayedItemId: string;
	    constructor();
	    onUpdate(ui: JQuery, config: IContextPageConfigTab, context: IContextInformation): void;
	    static lastRenderedItem: string;
	    static lastRenderedVersion: number;
	    static renderItem(itemId: string, version: number, showContextFrameIfNotVisible: boolean): void;
	    private _item;
	    isDefault: boolean;
	    initItem(item: IItem, jui: JQuery): void;
	    initServerSettings(): void;
	    initProject(): void;
	    getProjectPages(): IProjectPageParam[];
	    updateMenu(ul: JQuery): void;
	    supportsControl(): boolean;
	}
	function initialize(): void;
	//# sourceMappingURL=ReviewContextFrame.d.ts.map

	interface IRiskTableControlOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: string;
	    valueChanged?: Function;
	    parameter?: IRiskTableParams;
	    links?: IReference[];
	}
	interface IRiskTableParams {
	    tableOptions?: {
	        showFullRisk?: boolean;
	        hideReadonly?: boolean;
	        cloneButtonName?: string;
	    };
	}
	function initialize(): void;
	//# sourceMappingURL=RiskControlFolder.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IReviewConfig {
	    tasks?: IReviewConfigTask;
	    lockLabel?: ILockAction;
	    doneLabel?: IReviewStatusUpdate;
	    mailTo?: IMailAction;
	    allowSelectUserGroups?: boolean;
	    showVersions?: boolean;
	    showAnnotations?: boolean;
	    annotationMasters?: string[];
	    showComments?: boolean;
	    showInline?: boolean;
	    showHistory?: boolean;
	    /** like showHistoryOutOfDate but it only shows items as out of date if review is not yet completed */
	    showHistoryOutOfDateBeforeDone?: boolean;
	    /** shows items as out of date if current revision is newer than the one in the review */
	    showHistoryOutOfDate?: boolean;
	    readonly?: boolean;
	    appendComments?: boolean;
	    statusDropdown?: string;
	    canBeModified?: boolean;
	    canBeModifiedBy?: string[];
	    cellAskEdit?: string;
	    autoshowContext?: boolean;
	    createDoc?: ICreateDoc;
	    hide_UI?: boolean;
	}
	interface ICreateDoc {
	    template: string;
	    section: string;
	    pasteTo: string;
	    hide?: string[];
	}
	interface IReviewAction {
	    buttonName: string;
	    users: string[];
	}
	interface IMailAction extends IReviewAction {
	    mailSubject: string;
	}
	interface ILockAction extends IReviewAction {
	    label: string;
	}
	interface IReviewStatusUpdate extends IReviewAction {
	    passedLabel?: string;
	    failedLabel?: string;
	    todoLabel?: string;
	}
	interface IReviewActionCategoryLabel {
	    label: string;
	    category: string;
	}
	interface IReviewConfigTask {
	    buttonName: string;
	    users: string[];
	    taskPluginId: number;
	    taskIssueType: string;
	    taskProject: string;
	    taskDescription?: string;
	}
	interface ITableReviewData {
	    reviewtable: IStringMap[];
	}
	interface INeedleMap {
	    [key: string]: XRTrimNeedleItem;
	}
	interface IItemReviews {
	    [key: string]: IItemReview;
	}
	interface IItemReview {
	    passed: string[];
	    failed: string[];
	    todo: string[];
	    all: XRTrimNeedleItem[];
	}
	class ScheduleReview implements IPlugin {
	    static fieldType: string;
	    isDefault: boolean;
	    initItem(item: IItem, jui: JQuery): void;
	    initServerSettings(): void;
	    initProject(): void;
	    getProjectPages(): IProjectPageParam[];
	    supportsControl(ctrlType: string): boolean;
	    createControl(ctrl: JQuery, options: IBaseControlOptions): void;
	    getFieldConfigOptions(): IFieldDescription[];
	    addFieldSettings(configApp: any, project: string, pageId: string, fieldType: string, fieldParams: IReviewConfig, ui: JQuery, paramChanged: () => void): void;
	    updateMenu(ul: JQuery): void;
	    private renderReviewProjectPage;
	    private renderReviews;
	    private getNeedleRef;
	    private getItemRef;
	    private renderItems;
	    renderItemsCat(container: JQuery, cat: string, reviewAnalysis: IItemReviews): void;
	    private showHide;
	    private analyzeReview;
	    private getReviewTable;
	}
	function initialize(): void;
	interface IReviewControlOptions extends IBaseControlOptions {
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldValue?: any;
	    valueChanged?: Function;
	    parameter: IReviewConfig;
	    readOnly?: boolean;
	}
	class ReviewControlImpl extends BaseControl {
	    static reviewOptionsSetting: string;
	    static COL_COMMENT_LOG: string;
	    static COL_ITEM: string;
	    static COL_VERSION: string;
	    static COL_ANNOTATIONS: string;
	    private settings;
	    private reviewItems;
	    private reviewUsers;
	    private forceNewTable;
	    private currentVersions;
	    private outOfDateInfo;
	    private reviewTable;
	    private expanded;
	    private expandDetails;
	    private expandSaveTimeout;
	    private readonly;
	    private texts;
	    private isCommenting;
	    constructor(control: JQuery);
	    init(options: IReviewControlOptions): void;
	    updateControl(): void;
	    highlightReferences(): void;
	    init2(): void;
	    private copyDetails;
	    private fixInputs;
	    private replaceSlickTables;
	    private copyAnnotations;
	    private createNewDoc;
	    private copyDetail;
	    private renderReviewInput;
	    private isReviewDone;
	    private editReview;
	    private updateReview;
	    hasChanged(): boolean;
	    getValue(currentItem?: IItemGet): any;
	    private mergeComments;
	    private mergeAnnotations;
	    private getItemRef;
	    private getItemVersion;
	    destroy(): void;
	    resizeItem(newWidth?: number, force?: boolean): void;
	    private createTasks;
	    private createTask;
	    private sendReminder;
	    private lockItems;
	    private setItemReviewStatusLabel;
	    private setLabels;
	    private setLabel;
	    private getItems;
	    getItemsToDoByUser(fieldId: number, tableData: IStringMap[]): IStringStringArrayMap;
	    static analyzeReview(fieldId: number, tableData: IStringMap[], passedItems: string[], failedItems: string[], todoItems: string[]): void;
	    static getReviewers(tableData: IStringMap[]): string[];
	    static getItem(row: IStringMap): string;
	    static getItemFromCell(value: string): string;
	    static getReviewOptions(fieldId: number, passed: boolean, failed: boolean, todo: boolean): string[];
	    private static getDropdownParams;
	    private getMyReviewColumns;
	    private showTable;
	    private showTableDetails;
	    private makeExpandable;
	    private tablesReadyTimeout;
	    private showAnnotations;
	    private colorIcon;
	    private repaintAfterColumnChange;
	    private toggleItem;
	    private retrieveItem;
	    private showHistoryAgainstLastReviewed;
	}
	//# sourceMappingURL=ScheduleReview.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IImportItemMap {
	    source: string;
	    sourceVersion: number;
	    target: string;
	    targetVersion: number;
	}
	interface IImportCategoryMap {
	    source: string;
	    target: string;
	    fields: IImportFieldMap[];
	}
	interface IImportFieldMap {
	    source: string;
	    target: string;
	}
	interface IImportMapping {
	    project: string;
	    items: IImportItemMap[];
	    mapping?: IImportCategoryMap[];
	    importUser: string;
	    importDate: string;
	    syncDate: string;
	    syncUser: string;
	}
	interface IImports {
	    sources: IImportMapping[];
	}
	class SyncImport extends ImportMergeBase implements IPlugin {
	    pageID: string;
	    pageTitle: string;
	    static IMPORT_INFO_SETTING: string;
	    isDefault: boolean;
	    private imports;
	    private revisionsSource;
	    private revisionsTarget;
	    private titleSource;
	    private titleTarget;
	    initItem(_item: IItem, _jui: JQuery): void;
	    initServerSettings(serverSettings: XRGetProject_StartupInfo_ListProjectAndSettings): void;
	    updateMenu(ul: JQuery, hook: number): void;
	    supportsControl(ctrlType: string): boolean;
	    createControl(ctrl: JQuery, options: IBaseControlOptions): void;
	    initProject(): void;
	    isEnabled(): boolean;
	    getProjectPages(): IProjectPageParam[];
	    private showPage;
	    private showProjects;
	    private showAdd;
	    private addProjectImport;
	    private showImportWizard;
	    private showOtherProjectAtDate;
	    createFieldMapping(mapping: IImportCategoryMap[], sourceIC: ItemConfiguration): void;
	    private indicateSelectionRootsTimer;
	    private indicateSelectionRoots;
	    private askUserWhatToUpdate;
	    private showList;
	    private createLookups;
	    private executeImportUpdate;
	}
	//# sourceMappingURL=SyncImport.d.ts.map

	function InitializePlugins(): void;
	//# sourceMappingURL=initialize.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ICheckboxOptions extends IDHFSectionOptions {
	}
	interface IDHFCheckboxConfig {
	    default: {};
	}
	class Checkbox implements IDHFSection {
	    private config;
	    renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions): void;
	    updateXmlValue(ctrl: IDHFControlDefinition): void;
	    getConfig(ctrl: IDHFControlDefinition): ICheckboxOptions;
	    addSignatures(signatures: string[], currentValue: IDHFControlDefinition): void;
	    showSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): void;
	    saveSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): boolean;
	    verifyContent(ctrl: IDHFControlDefinition): void;
	}
	//# sourceMappingURL=Checkbox.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ICustomSectionOptions extends IDHFSectionOptions {
	    includeInToc: boolean;
	    options: ICustomSection;
	    landscape: boolean;
	}
	interface IDHFCustomSectionOptions {
	    default: ICustomSectionOptions;
	}
	class CustomSection extends DoubleSelectBase {
	    protected config: IDHFCustomSectionOptions;
	    renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions): void;
	    updateXmlValue(ctrl: IDHFControlDefinition): void;
	    getConfig(ctrl: IDHFControlDefinition): ICustomSectionOptions;
	    addSignatures(signatures: string[], currentValue: IDHFControlDefinition): void;
	    showSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): void;
	    saveSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): boolean;
	}
	//# sourceMappingURL=CustomSection.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ITableConfig {
	    default: IDhfTableOptions;
	}
	interface IDhfTableOptions extends IDHFSectionOptions {
	    columns: ITableConfigColumn[];
	}
	interface ITableConfigColumn extends IDHFSectionOptions {
	    columnType: string;
	    field: string;
	    pos: number;
	    editor: string;
	    name: string;
	    options: IDropdownOption[];
	}
	class DhfTable implements IDHFSection {
	    private config;
	    private dhfTypeXML;
	    private columnTypes;
	    constructor(defaultConfig: IDHFConfig, dhfTypeXML: string, dhfType: string, columnTypes: ColumnTypesInfo);
	    renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions): void;
	    updateXmlValue(ctrl: IDHFControlDefinition): void;
	    getConfig(ctrl: IDHFControlDefinition): IDhfTableOptions;
	    addSignatures(signatures: string[], ctrl: IDHFControlDefinition, includeAll: boolean): void;
	    showSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): void;
	    saveSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): boolean;
	    verifyContent(ctrl: IDHFControlDefinition): void;
	    protected GetColumnCount(controllerConfig: IDhfTableOptions): number;
	}
	//# sourceMappingURL=DHFTable.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IDerivedFromOptions extends IDHFSectionOptions {
	    render: string;
	    includeInToc: boolean;
	    numericalOrder: boolean;
	    noHitMessage: string;
	    searchFrom?: string;
	    searchTo?: string;
	}
	interface IDHFDerivedFromConfig {
	    default: IDerivedFromOptions;
	}
	class DerivedFrom extends DoubleSelectBase {
	    protected config: IDHFDerivedFromConfig;
	    private itemRender;
	    constructor();
	    renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions): void;
	    updateXmlValue(ctrl: IDHFControlDefinition): void;
	    getConfig(ctrl: IDHFControlDefinition): IDerivedFromOptions;
	    addSignatures(signatures: string[], currentValue: IDHFControlDefinition): void;
	    showSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): void;
	    saveSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): boolean;
	}
	//# sourceMappingURL=DerivedFrom.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IDesignReviewsOptions extends IDHFSectionOptions {
	    reviews: string[];
	    user: boolean;
	    date: boolean;
	    revision: boolean;
	    comment: boolean;
	    includeInToc: boolean;
	    numericalOrder: boolean;
	    search?: string;
	}
	interface IDHFDesignReviewsConfig {
	    default: IDesignReviewsOptions;
	}
	class DesignReviews extends SingleSelectBase {
	    protected config: IDHFDesignReviewsConfig;
	    renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions): void;
	    updateXmlValue(ctrl: IDHFControlDefinition): void;
	    getConfig(ctrl: IDHFControlDefinition): IDesignReviewsOptions;
	    addSignatures(signatures: string[], currentValue: IDHFControlDefinition): void;
	    showSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): void;
	    saveSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): boolean;
	}
	//# sourceMappingURL=DesignReviews.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IDocumentOptionsOptions extends IDHFSectionOptions {
	    auto_number?: boolean;
	    omit_title?: boolean;
	    internal_links?: boolean;
	    no_folder_ids?: boolean;
	    hide_links?: boolean;
	}
	class DocumentOptions implements IDHFSection {
	    private config;
	    constructor();
	    renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions): void;
	    updateXmlValue(ctrl: IDHFControlDefinition): void;
	    getConfig(ctrl: IDHFControlDefinition): IDocumentOptionsOptions;
	    addSignatures(signatures: string[], currentValue: IDHFControlDefinition): void;
	    showSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): void;
	    saveSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): boolean;
	    verifyContent(ctrl: IDHFControlDefinition): void;
	}
	//# sourceMappingURL=DocumentOptions.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IDueDateOptions extends IDHFSectionOptions {
	}
	interface IDHFDueDateConfig {
	    default: IDueDateOptions;
	}
	class DueDate implements IDHFSection {
	    private config;
	    renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions): void;
	    updateXmlValue(ctrl: IDHFControlDefinition): void;
	    getConfig(ctrl: IDHFControlDefinition): IDueDateOptions;
	    addSignatures(signatures: string[], currentValue: IDHFControlDefinition): void;
	    showSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): void;
	    saveSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): boolean;
	    verifyContent(ctrl: IDHFControlDefinition): void;
	}
	//# sourceMappingURL=DueDate.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class Hidden implements IDHFSection {
	    renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions): void;
	    updateXmlValue(ctrl: IDHFControlDefinition): void;
	    getConfig(ctrl: IDHFControlDefinition): IDHFSectionOptions;
	    addSignatures(signatures: string[], currentValue: IDHFControlDefinition): void;
	    showSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): void;
	    saveSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): boolean;
	    verifyContent(ctrl: IDHFControlDefinition): void;
	}
	//# sourceMappingURL=Hidden.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IItemIndexOptions extends IDHFSectionOptions {
	    format: string;
	}
	interface IDHFItemIndexConfig {
	    default: IItemIndexOptions;
	}
	class ItemIndex implements IDHFSection {
	    private config;
	    renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions): void;
	    updateXmlValue(ctrl: IDHFControlDefinition): void;
	    getConfig(ctrl: IDHFControlDefinition): IItemIndexOptions;
	    addSignatures(signatures: string[], currentValue: IDHFControlDefinition): void;
	    showSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): void;
	    saveSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): boolean;
	    verifyContent(ctrl: IDHFControlDefinition): void;
	}
	//# sourceMappingURL=ItemIndex.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IItemListOptions extends IDHFSectionOptions {
	    recursive: boolean;
	    tree: boolean;
	    refdocs: boolean;
	    hideEmptyFolders: boolean;
	    showParentFolders: boolean;
	    includeInToc: boolean;
	    sortedList: boolean;
	    search?: string;
	}
	interface IDHFItemListConfig {
	    default: IItemListOptions;
	    defaultPackage: IItemListOptions;
	}
	class ItemList extends SingleSelectBase {
	    protected isSIGNPackage: boolean;
	    constructor(isPackage: boolean);
	    protected config: IDHFItemListConfig;
	    renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions): void;
	    updateXmlValue(ctrl: IDHFControlDefinition): void;
	    getConfig(ctrl: IDHFControlDefinition): IItemListOptions;
	    addSignatures(signatures: string[], currentValue: IDHFControlDefinition): void;
	    showSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): void;
	    saveSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): boolean;
	}
	//# sourceMappingURL=ItemList.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IItemTableOptions extends IDHFSectionOptions {
	    includeInToc: boolean;
	    sortedList: boolean;
	    includeFolders: boolean;
	    columns: string;
	    search?: string;
	}
	interface IDHFItemTableConfig {
	    default: IItemTableOptions;
	}
	class ItemTable extends SingleSelectBase {
	    protected config: IDHFItemTableConfig;
	    renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions): void;
	    updateXmlValue(ctrl: IDHFControlDefinition): void;
	    getConfig(ctrl: IDHFControlDefinition): IItemTableOptions;
	    showSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): void;
	    saveSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): boolean;
	    private eitherCB;
	}
	//# sourceMappingURL=ItemTable.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IItemsOptions extends IDHFSectionOptions {
	    folderDetails: string;
	    extracolumn: string;
	    showlinks: boolean;
	    showUpOnly: boolean;
	    showDownOnly: boolean;
	    showDeeplinks: boolean;
	    breadcrumb: boolean;
	    showExternal: number;
	    dateoptions: string;
	    refdocs: boolean;
	    hideLinkErrors: boolean;
	    hideLabels: boolean;
	    hideEmptyFolders: boolean;
	    showAllParentFolders: boolean;
	    includeInToc: boolean;
	    search?: string;
	    breakAfterItems: boolean;
	}
	interface IItemsFromConfig {
	    default: IItemsOptions;
	}
	class Items extends SingleSelectBase {
	    protected config: IItemsFromConfig;
	    renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions): void;
	    updateXmlValue(ctrl: IDHFControlDefinition): void;
	    getConfig(ctrl: IDHFControlDefinition): IItemsOptions;
	    addSignatures(signatures: string[], currentValue: IDHFControlDefinition): void;
	    showSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery, hideFolder?: boolean): void;
	    saveSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): boolean;
	}
	//# sourceMappingURL=Items.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ILinkListOptions extends IDHFSectionOptions {
	    showExternal: number;
	    includeInToc: boolean;
	    search?: string;
	}
	interface IDHFLinkListConfig {
	    default: ILinkListOptions;
	}
	class LinkList extends SingleSelectBase {
	    protected config: IDHFLinkListConfig;
	    renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions): void;
	    updateXmlValue(ctrl: IDHFControlDefinition): void;
	    getConfig(ctrl: IDHFControlDefinition): ILinkListOptions;
	    addSignatures(signatures: string[], currentValue: IDHFControlDefinition): void;
	    showSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): void;
	    saveSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): boolean;
	}
	//# sourceMappingURL=LinkList.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IListOfFiguresOptions extends IDHFSectionOptions {
	    figures?: boolean;
	    tables?: boolean;
	}
	interface IListOfFiguresConfig {
	    default: IListOfFiguresOptions;
	}
	interface IFigTabRef {
	    fita: string;
	}
	class ListOfFigures implements IDHFSection {
	    private config;
	    renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions): void;
	    updateXmlValue(ctrl: IDHFControlDefinition): void;
	    getConfig(ctrl: IDHFControlDefinition): IListOfFiguresOptions;
	    addSignatures(signatures: string[], currentValue: IDHFControlDefinition): void;
	    showSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): void;
	    saveSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): boolean;
	    verifyContent(ctrl: IDHFControlDefinition): void;
	}
	//# sourceMappingURL=ListOfFiguresTables.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IMultiSelectOptions extends IDHFSectionOptions {
	    maxItems: number;
	    create: boolean;
	    sort: boolean;
	    optionSetting: string;
	}
	interface IDHFMultiSelectConfig {
	    default: IMultiSelectOptions;
	}
	class MultiSelect implements IDHFSection {
	    private config;
	    renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions): void;
	    updateXmlValue(ctrl: IDHFControlDefinition): void;
	    getConfig(ctrl: IDHFControlDefinition): IMultiSelectOptions;
	    addSignatures(signatures: string[], currentValue: IDHFControlDefinition): void;
	    showSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): void;
	    saveSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): boolean;
	    verifyContent(ctrl: IDHFControlDefinition): void;
	}
	//# sourceMappingURL=MultiSelect.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IRemarkOptions extends IDHFSectionOptions {
	}
	interface IDHFRemarksConfig {
	    default: {};
	}
	class Remarks implements IDHFSection {
	    private config;
	    constructor();
	    getConfig(ctrl: IDHFControlDefinition): IRemarkOptions;
	    addSignatures(signatures: string[], currentValue: IDHFControlDefinition): void;
	    showSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): void;
	    saveSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): boolean;
	    renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions): void;
	    updateXmlValue(ctrl: IDHFControlDefinition): void;
	    verifyContent(ctrl: IDHFControlDefinition): void;
	}
	//# sourceMappingURL=Remarks.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IRichTextOptions extends IDHFSectionOptions {
	}
	interface IDHFRichTextConfig {
	    default: IRichTextOptions;
	}
	class RichText implements IDHFSection {
	    private config;
	    renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions): void;
	    updateXmlValue(ctrl: IDHFControlDefinition): void;
	    getConfig(ctrl: IDHFControlDefinition): IRichTextOptions;
	    addSignatures(signatures: string[], currentValue: IDHFControlDefinition): void;
	    showSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): void;
	    saveSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): boolean;
	    verifyContent(ctrl: IDHFControlDefinition): void;
	}
	//# sourceMappingURL=RichText.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IRiskStatsOptions extends IDHFSectionOptions {
	    includeInToc: boolean;
	    table: string;
	    rbm: string;
	    ram: string;
	    noTest: string;
	    mustReduce: string;
	    noBenefits: string;
	    riskNoTest: string;
	    riskAfterByZone: string;
	    riskBeforeByZone: string;
	    mitNoTest: string;
	    traceMitTest: string;
	    search?: string;
	}
	interface IDHFRiskStatsConfig {
	    default: IRiskStatsOptions;
	}
	class RiskStats extends SingleSelectBase {
	    protected config: IDHFRiskStatsConfig;
	    renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions): void;
	    updateXmlValue(ctrl: IDHFControlDefinition): void;
	    getConfig(ctrl: IDHFControlDefinition): IRiskStatsOptions;
	    addSignatures(signatures: string[], currentValue: IDHFControlDefinition): void;
	    showSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): void;
	    saveSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): boolean;
	}
	//# sourceMappingURL=RiskStats.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ISmartTextOptions extends IDHFSectionOptions {
	    plaintext?: boolean;
	    richtext?: boolean;
	    abbreviations?: boolean;
	    terms?: boolean;
	    customerTags?: boolean;
	    projectTags?: boolean;
	    includeAll?: boolean;
	    firstColumnName: string;
	    secondColumnName: string;
	}
	interface IDHFSmartTextConfig {
	    default: ISmartTextOptions;
	}
	class SmartText implements IDHFSection {
	    private config;
	    renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions): void;
	    updateXmlValue(ctrl: IDHFControlDefinition): void;
	    getConfig(ctrl: IDHFControlDefinition): ISmartTextOptions;
	    addSignatures(signatures: string[], currentValue: IDHFControlDefinition): void;
	    showSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): void;
	    saveSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): boolean;
	    verifyContent(ctrl: IDHFControlDefinition): void;
	}
	//# sourceMappingURL=SmartText.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ITableOfContentOptions extends IDHFSectionOptions {
	    format: string;
	    render_toc?: boolean;
	}
	interface IDHFTableOfContentConfig {
	    default: ITableOfContentOptions;
	}
	class TableOfContent implements IDHFSection {
	    private config;
	    renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions): void;
	    updateXmlValue(ctrl: IDHFControlDefinition): void;
	    getConfig(ctrl: IDHFControlDefinition): ITableOfContentOptions;
	    addSignatures(signatures: string[], currentValue: IDHFControlDefinition): void;
	    showSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): void;
	    saveSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): boolean;
	    verifyContent(ctrl: IDHFControlDefinition): void;
	}
	//# sourceMappingURL=TableOfContent.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ITestResultsOptions extends IDHFSectionOptions {
	    lastOnly: boolean;
	    lastCreatedOnly: boolean;
	    completeTree: boolean;
	    failedOnly: boolean;
	    dateoptions: string;
	    includeInToc: boolean;
	    numericalOrder: boolean;
	    searchFrom?: string;
	    searchTo?: string;
	}
	interface IDHFTestResultsConfig {
	    default: ITestResultsOptions;
	}
	class TestResults extends DoubleSelectBase {
	    protected config: IDHFTestResultsConfig;
	    renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions): void;
	    updateXmlValue(ctrl: IDHFControlDefinition): void;
	    getConfig(ctrl: IDHFControlDefinition): ITestResultsOptions;
	    addSignatures(signatures: string[], currentValue: IDHFControlDefinition): void;
	    showSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): void;
	    saveSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): boolean;
	    verifyContent(ctrl: IDHFControlDefinition): void;
	}
	//# sourceMappingURL=TestResults.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ITextLineOptions extends IDHFSectionOptions {
	}
	interface IDHFTextLineConfig {
	    default: ITextLineOptions;
	}
	class TextLine implements IDHFSection {
	    private config;
	    renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions): void;
	    updateXmlValue(ctrl: IDHFControlDefinition): void;
	    getConfig(ctrl: IDHFControlDefinition): ITextLineOptions;
	    addSignatures(signatures: string[], currentValue: IDHFControlDefinition): void;
	    showSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): void;
	    saveSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): boolean;
	    verifyContent(ctrl: IDHFControlDefinition): void;
	}
	//# sourceMappingURL=TextLine.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ITraceMatrixOptions extends IDHFSectionOptions {
	    includeInToc: boolean;
	    numericalOrder: boolean;
	    showIdOnly: boolean;
	    searchFrom?: string;
	    searchTo?: string;
	    columnDef?: string;
	}
	interface IDHFTraceMatrixConfig {
	    default: ITraceMatrixOptions;
	}
	class TraceMatrix extends DoubleSelectBase {
	    protected config: IDHFTraceMatrixConfig;
	    renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions): void;
	    updateXmlValue(ctrl: IDHFControlDefinition): void;
	    getConfig(ctrl: IDHFControlDefinition): ITraceMatrixOptions;
	    addSignatures(signatures: string[], currentValue: IDHFControlDefinition): void;
	    showSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): void;
	    saveSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): boolean;
	}
	//# sourceMappingURL=TraceMatrix.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ITracesOptions extends IDHFSectionOptions {
	    strict?: boolean;
	    dateoptions?: string;
	    includeInToc?: boolean;
	    numericalOrder?: boolean;
	}
	interface IDHFTracesConfig {
	    default: ITracesOptions;
	}
	interface ITracesValue extends ITracesOptions {
	    from?: string;
	    to?: string;
	}
	class Traces implements IDHFSection {
	    private config;
	    private upTraces;
	    private traceOptions;
	    constructor(isUp: boolean);
	    renderControl(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions): void;
	    updateXmlValue(ctrl: IDHFControlDefinition): void;
	    getConfig(ctrl: IDHFControlDefinition): ITracesOptions;
	    addSignatures(signatures: string[], currentValue: IDHFControlDefinition): void;
	    showSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): void;
	    saveSpecificSettings(ctrl: IDHFControlDefinition, ctrlParameter: IBaseControlOptions, custom: JQuery): boolean;
	    verifyContent(ctrl: IDHFControlDefinition): void;
	}
	//# sourceMappingURL=Traces.d.ts.map

	function InitializeDocumentSections(): void;
	//# sourceMappingURL=initialize.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IXmlCharIssues {
	    itemId: string;
	    details: string;
	}
	class Cleanup implements IPlugin {
	    private item;
	    private jui;
	    static FIX_THE_ZOMBIE: string;
	    static FIX_THE_IMAGE: string;
	    static FIX_INVALID_XML: string;
	    static badEncodedChars: string[];
	    isDefault: boolean;
	    constructor();
	    initItem(_item: IItem, _jui: JQuery): void;
	    initServerSettings(serverSettings: XRGetProject_StartupInfo_ListProjectAndSettings): void;
	    updateMenu(ul: JQuery, hook: number): void;
	    supportsControl(ctrlType: string): boolean;
	    createControl(ctrl: JQuery, options: IBaseControlOptions): void;
	    initProject(): void;
	    getProjectPages(): IProjectPageParam[];
	    private renderProjectPage;
	    private runCleanupSmartZombies;
	    private createSmartZombieNotifications;
	    private getZombieNotificationName;
	    private getSmartLinks;
	    private runCleanupImageZombies;
	    private createImageZombieNotifications;
	    private getZombieImageName;
	    private removeNotifications;
	    private getFolders;
	    private getImages;
	    /*****************************************
	     *
	     * invalid xml characters
	     *
	    */
	    private runCleanupCharacters;
	    static textOk(fieldVal: any): boolean;
	    private testXML;
	}
	function initialize(): void;
	//# sourceMappingURL=Cleanup.d.ts.map

	function initialize(): void;
	//# sourceMappingURL=Compare.d.ts.map

	interface IItemCopyBuffer extends IItem {
	    [key: string]: any;
	}
	function initialize(): void;
	//# sourceMappingURL=CopyPaste.d.ts.map

	/**
	 * to use create a new category for the hazards: the category can have normal text / drop down and also a risk field
	 * in the category create a category setting "hazard"
	 * copy the risk configuration from the risk field in the risk category into the category setting "hazard"
	 * in that setting add "targetCategory":"<risk category>",
	 * in that setting add "targetField":"<name of risk field in risk category>",
	 *  find the hazard drop down, remove all but the first option and replace it with something like this
	 *
	 * "factors": [
	      {
	        "type": "hazard",
	        "label": "Hazard",
	        "inputType": "select",
	        "options": [
	          {
	            "value": "",
	            "label": "$id$ $title$",
	            "changes": [
	              { "changesFactor": "sequenceOfEvents", "value": "$risk.hazard$" },
	              { "changesFactor": "hazardousSituation", "value": "HAZARDOUS SITUATION" },
	              { "changesWeight": "p2", "value": "$risk.p1$" },
	              { "changesWeight": "severity", "value": "$SEVERITY OF HARM$" }
	            ]
	          }
	        ],.....
	 *  the macros are $id$ to put the id of the HAZARD item, $title$ for the title
	 *  $field$ for a normal field value
	 *  $field.weight$ or $field.factor$ for values from a risk control
	 */
	function initialize(): void;
	//# sourceMappingURL=Hazards.d.ts.map

	function initialize(): void;
	//# sourceMappingURL=MultiMove.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ILabelSelectMap {
	    [map: string]: JQuery;
	}
	function initialize(): void;
	//# sourceMappingURL=MultiSetLabel.d.ts.map

	function initialize(): void;
	//# sourceMappingURL=Touchdown.d.ts.map

	class ProjectStorageMobile implements IDataStorage {
	    private Project;
	    constructor(project: string);
	    setItem(itemKey: string, itemVal: string): void;
	    getItem(itemKey: string): string;
	    getItemDefault(itemKey: string, defaultValue: string): string;
	}
	//# sourceMappingURL=ProjectStorageMobile.d.ts.map

	class ServerStorageMobile {
	    private Server;
	    constructor();
	    setItem(itemKey: string, itemVal: string): void;
	    getItem(itemKey: string): string;
	    getItemDefault(itemKey: string, defaultValue: string): string;
	}
	//# sourceMappingURL=ServerStorageMobile.d.ts.map

	let ml: IMatrix;
	//# sourceMappingURL=matrixlib.d.ts.map

	/// <reference types="matrixrequirements-type-declarations" />
	interface SchemaDef {
	    module: string;
	    type: string;
	    serverUse: string;
	    serverProp: string;
	}
	type JsonEditorValidation = (json: unknown) => Promise<string | null>;
	/**
	 * Globally available JSON Validator. It can validate against schemas stored in web/schemas/*.json
	 * The schemas in this directory are generated by the `gulp schema` command and defined in schemagen/schemas.json
	 * To add validation for a new type:
	 * * Add to schemas.json
	 * * Run gulp schema (or gulp build)
	 * * Call jsonValidator.validateType( yourObject, "IYourInterface")
	 *
	 * There are some utility functions that can wrap a type in a validator closure or give you
	 * access to the raw object.
	 */
	class JsonValidator {
	    private schemas;
	    private validators;
	    private version;
	    private ajv;
	    /**
	     * This is a global object, you should not have to create it. See `jsonValidator`
	     */
	    constructor(version: string);
	    /**
	     * Create a display string from an error list
	     * @param errors
	     */
	    errorString(errors: Ajv.ErrorObject[]): string | null;
	    /**
	     * Create a validation function for the given type that is used in some of the Matrix editors
	     * @param type
	     */
	    validationFunction(type: string): JsonEditorValidation;
	    /**
	     * Validate the given data against the given schema.
	     * @param data
	     * @param type
	     * @return null if valid, or an array of errors if not
	     */
	    validateType(data: unknown, type: string): Promise<Ajv.ErrorObject[] | null>;
	    /**
	     * Get the validator function for the given type
	     * @param type
	     */
	    validatorByType(type: string): Promise<Ajv.ValidateFunction | null>;
	    urlRegex: RegExp;
	    patchVersionIntoUrl(url: string): string;
	    /**
	     * Get the schema object for the given type
	     * @param type
	     * @throws Exception if the schema is not found
	     */
	    schemaByType(type: string): Promise<object | null>;
	    /**
	     * Get the schema UI element. This can be embedded in other DOM elements
	     * @param type The name of the type - this should exist in the schemas dir
	     * @throws Exception if the schema is not found
	     */
	    schemaView(type: string): Promise<MatrixSchemaView | null>;
	}
	interface ISchema extends ISchemaObject {
	}
	type ISchemaPropertyMap = {
	    key: String;
	    ISchemaProperty: any;
	};
	interface ISchemaItem {
	    description?: string;
	    type?: ESchemaType;
	    anyOf?: ISchemaItem[];
	}
	interface ISchemaObject extends ISchemaItem {
	    properties?: ISchemaPropertyMap;
	    additionalProperties?: ISchemaItem;
	    required?: string[];
	}
	interface ISchemaArray extends ISchemaItem {
	    items?: ISchemaItem;
	}
	enum ESchemaType {
	    string = "string",
	    array = "array",
	    object = "object",
	    number = "number",
	    boolean = "boolean"
	}
	interface ISchemaPrintTypeInfo {
	    help?: string;
	    type?: string;
	    subItems?: string;
	    subItemStart?: string;
	    subItemEnd?: string;
	}
	class MatrixSchemaView {
	    schema: ISchema;
	    constructor(schema: ISchema);
	    render(): HTMLDivElement;
	    renderObject(object: ISchemaObject): string;
	    renderArray(array: ISchemaArray): string;
	    renderProperty(prop: ISchemaItem): ISchemaPrintTypeInfo;
	}
	//# sourceMappingURL=JsonValidator.d.ts.map

	//# sourceMappingURL=init.d.ts.map

	//# sourceMappingURL=index.d.ts.map

	interface ITitleAndId {
	    title: string;
	    id: string;
	    isFolder: boolean;
	}
	class MatrixAPI {
	    protected config: Configuration;
	    protected base_path: string;
	    static getLabelDefinitions(cats: string[]): ILabel[];
	    initialize(): void;
	    protected instance: DefaultApi;
	    protected matrixlib: IMatrix;
	    protected matrixSession: MatrixSession;
	    debug: boolean;
	    constructor(config: Configuration, base_path: string);
	    private initializeProject;
	    private log;
	    setComment(comment: string): void;
	    getComment(): string;
	    setProject(project: string): Promise<void>;
	    getProject(): string;
	    getProjects(): Promise<string[]>;
	    private getType;
	    /**
	     * get an item from the database as json object.
	     *
	     * Use: await api.getItem("F-DOC-1")
	     *
	     * @param itemId the id of the item like "REQ-1" or a specific version like "REQ-1-v1"
	     * @throws error in case the itemId is bad.
	     * @returns Promise to json object with all fields, links and labels
	     */
	    getItem(itemId: string): Promise<IItem>;
	    /**
	     * get the initial tree structure from a project. Project must be set first.
	     */
	    getTree(): Promise<ITitleAndId[]>;
	    /**
	     * get a folder from the database, filling in it's children.
	     * @param folderId  the id of the folder like "F-<type>-<id>"
	     * @throws error if folderId is invalid
	     * @returns Prommise to json object
	     */
	    getFolderChildren(folderId: string): Promise<ITitleAndId[]>;
	    private parseItemJSON;
	    private appGetItemAsync;
	    getDownlinks(itemId: string): Promise<IReference[]>;
	    getDownlinkIds(itemId: string): Promise<string[]>;
	    getUplinks(itemId: string): Promise<IReference[]>;
	    getUplinkIds(itemId: string): Promise<string[]>;
	    /**
	     * search items
	     *
	     * @param term search expression, e.g. mrql:category=REQ
	     * @param includeFields true to include fields
	     * @param includeLinks true to include links
	     * @param includeLabels true to include labels
	     * @returns
	     */
	    search(term: string, includeFields?: boolean, includeLinks?: boolean, includeLabels?: boolean, filter?: string): Promise<ISearchResult[]>;
	    private parseSearchResult;
	    private appSearchAsync;
	    getItemIdsInCategory(category: string): Promise<string[]>;
	    /**
	     * gets the value of a field of an item from the database
	     *
	     * Use: await getField( "REQ-1", "description")
	     *
	     * @param itemId the id of the item like "REQ-1" or a specific version like "REQ-1-v1"
	     * @param fieldName name of the field
	     * @throws Error in case of invalid item or field
	     * @returns Promise to the value of the field
	     */
	    getField(itemId: string, fieldName: string): Promise<any>;
	    /**
	     * set a field of an item in the database
	     *
	     * Use: await api.setField("PROC-83", "plain english", "x");
	     *
	     * @param itemId itemId the id of the item like "REQ-1"
	     * @param fieldName name of the field
	     * @param value value of the field
	     * @throws Error in case of invalid itemId or fieldName
	     * @returns Promise to the updated item
	     */
	    setField(itemId: string, fieldName: string, value: string): Promise<IItemGet>;
	    setTitle(itemId: string, value: string): Promise<IItemGet>;
	    private appUpdateItemInDBAsync;
	    /**
	     * sets multiple fields in the database
	     *
	     * Use: await api.setFields("PROC-83", [{fieldName:"plain english",value:"x"}]  )
	     *
	     * @param itemId itemId itemId the id of the item like "REQ-1"
	     * @param data array of fieldName and value tupels
	     * @throws Error in case of invalid id or fields
	     * @returns the updated item
	     */
	    setFields(itemId: string, data: ISetField[]): Promise<IItemGet>;
	    addDownLink(fromId: string, toId: string): Promise<string>;
	    deleteItem(itemId: string, force?: boolean): Promise<string>;
	    appDeleteItem(itemId: string, force: boolean): Promise<string>;
	    deleteDownLink(fromId: string, toId: string): Promise<string>;
	    deleteDownLinks(fromId: string): Promise<string[]>;
	    deleteUpLinks(fromId: string): Promise<string[]>;
	    /**
	     * create a new item in the database
	     *
	     * Use: createItem( "F-REQ-1", "my item", [{fieldName:"description",value:"x"}], ["labelx"], downlinks:["SPEC-1"], uplinks:[] )
	     *
	     * @param folder where to store the item
	     * @param title name of the item
	     * @param data array with fieldNames and values
	     * @param labels list of labels to set
	     * @param downlinks list of downlinks to create
	     * @param uplinks list of uplinks to create
	     * @returns the created item id
	     */
	    createItem(folder: string, title: string, data?: ISetField[], labels?: [], downlinks?: [], uplinks?: []): Promise<string>;
	    private appCreateItemOfTypeAsync;
	    /**
	     * Creates a folder
	     *
	     * @param parent where to store the folder
	     * @param title name of the folder
	     * @param data array with fieldNames and values
	     * @throws error in case of input error (bad fields, etc)
	     * @returns Promise to the item id of folder
	     */
	    createFolder(parent: string, title: string, data?: ISetField[]): Promise<string>;
	    getItemIdByTitle(category: string, title: string): Promise<string | null>;
	    copyItem(fromProject: string, fromItem: string, toProject: string, toFolder: string, copyLabels: boolean): Promise<string>;
	}
	var matrixapi: MatrixAPI;
	function initializeAPI(): void;
	//# sourceMappingURL=client.d.ts.map

	/**
	 * MatrixALM and MatrixQMS REST API
	 * Feel free to make a copy of this definition and change the url below to your instance of MatrixALM or MatrixQMS. For the authentication, create  a token for an admin to try out all the methods. Use at your own risks! Any question? ask us on https://support.matrixreq.com
	 *
	 * OpenAPI spec version: 2.3
	 *
	 *
	 * NOTE: This file is auto generated by the swagger code generator program.
	 * https://github.com/swagger-api/swagger-codegen.git
	 * Do not edit the file manually.
	 */
	/**
	 *
	 * @export
	 */
	export const COLLECTION_FORMATS: {
	    csv: string;
	    ssv: string;
	    tsv: string;
	    pipes: string;
	};
	/**
	 *
	 * @export
	 * @interface FetchAPI
	 */
	export interface FetchAPI {
	    (url: string, init?: any): Promise<Response>;
	}
	/**
	 *
	 * @export
	 * @interface FetchArgs
	 */
	export interface FetchArgs {
	    url: string;
	    options: any;
	}
	/**
	 *
	 * @export
	 * @class BaseAPI
	 */
	export class BaseAPI {
	    protected basePath: string;
	    protected fetch: FetchAPI;
	    protected configuration: Configuration;
	    constructor(configuration: Configuration, basePath: string, fetch: FetchAPI);
	}
	/**
	 *
	 * @export
	 * @class RequiredError
	 * @extends {Error}
	 */
	export class RequiredError extends Error {
	    field: string;
	    name: string;
	    constructor(field: string, msg?: string);
	}
	/**
	 *
	 * @export
	 * @interface Access
	 */
	export interface Access {
	    /**
	     *
	     * @type {string}
	     * @memberof Access
	     */
	    startDate8601?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof Access
	     */
	    endDate8601?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof Access
	     */
	    readWrite?: number;
	    /**
	     *
	     * @type {boolean}
	     * @memberof Access
	     */
	    visitorOnly?: boolean;
	}
	/**
	 *
	 * @export
	 * @interface AddFileAck
	 */
	export interface AddFileAck {
	    /**
	     *
	     * @type {number}
	     * @memberof AddFileAck
	     */
	    fileId?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof AddFileAck
	     */
	    fileFullPath?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof AddFileAck
	     */
	    key?: string;
	}
	/**
	 *
	 * @export
	 * @interface AddItemAck
	 */
	export interface AddItemAck {
	    /**
	     *
	     * @type {number}
	     * @memberof AddItemAck
	     */
	    itemId?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof AddItemAck
	     */
	    serial?: number;
	    /**
	     *
	     * @type {CleanupFail}
	     * @memberof AddItemAck
	     */
	    cleanupFail?: CleanupFail;
	}
	/**
	 *
	 * @export
	 * @interface AuthType
	 */
	export interface AuthType {
	    /**
	     *
	     * @type {string}
	     * @memberof AuthType
	     */
	    reason?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof AuthType
	     */
	    login?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof AuthType
	     */
	    password?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof AuthType
	     */
	    clientIp?: string;
	    /**
	     *
	     * @type {boolean}
	     * @memberof AuthType
	     */
	    internalQuery?: boolean;
	    /**
	     *
	     * @type {boolean}
	     * @memberof AuthType
	     */
	    csrfOk?: boolean;
	    /**
	     *
	     * @type {boolean}
	     * @memberof AuthType
	     */
	    basicAuth?: boolean;
	    /**
	     *
	     * @type {boolean}
	     * @memberof AuthType
	     */
	    oAuth?: boolean;
	    /**
	     *
	     * @type {string}
	     * @memberof AuthType
	     */
	    token?: string;
	    /**
	     *
	     * @type {VerifiedAuth}
	     * @memberof AuthType
	     */
	    verifiedAuth?: VerifiedAuth;
	}
	/**
	 *
	 * @export
	 * @interface CalendarType
	 */
	export interface CalendarType {
	    /**
	     *
	     * @type {string}
	     * @memberof CalendarType
	     */
	    dateString?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof CalendarType
	     */
	    auditIdMin?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof CalendarType
	     */
	    auditIdMax?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof CalendarType
	     */
	    nbChanges?: number;
	}
	/**
	 *
	 * @export
	 * @interface CategoryAndRoot
	 */
	export interface CategoryAndRoot {
	    /**
	     *
	     * @type {string}
	     * @memberof CategoryAndRoot
	     */
	    category?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof CategoryAndRoot
	     */
	    rootFolder?: string;
	}
	/**
	 *
	 * @export
	 * @interface CategoryAndSettingListType
	 */
	export interface CategoryAndSettingListType {
	    /**
	     *
	     * @type {Array<SettingType>}
	     * @memberof CategoryAndSettingListType
	     */
	    settingList?: Array<SettingType>;
	    /**
	     *
	     * @type {number}
	     * @memberof CategoryAndSettingListType
	     */
	    categoryId?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof CategoryAndSettingListType
	     */
	    categoryShort?: string;
	}
	/**
	 *
	 * @export
	 * @interface CategoryExtendedListType
	 */
	export interface CategoryExtendedListType {
	    /**
	     *
	     * @type {Array<CategoryExtendedType>}
	     * @memberof CategoryExtendedListType
	     */
	    categoryExtended?: Array<CategoryExtendedType>;
	}
	/**
	 *
	 * @export
	 * @interface CategoryExtendedType
	 */
	export interface CategoryExtendedType {
	    /**
	     *
	     * @type {CategoryType}
	     * @memberof CategoryExtendedType
	     */
	    category?: CategoryType;
	    /**
	     *
	     * @type {FieldListType}
	     * @memberof CategoryExtendedType
	     */
	    fieldList?: FieldListType;
	    /**
	     *
	     * @type {Array<string>}
	     * @memberof CategoryExtendedType
	     */
	    enable?: Array<string>;
	}
	/**
	 *
	 * @export
	 * @interface CategoryFull
	 */
	export interface CategoryFull {
	    /**
	     *
	     * @type {ProjectType}
	     * @memberof CategoryFull
	     */
	    project?: ProjectType;
	    /**
	     *
	     * @type {CategoryType}
	     * @memberof CategoryFull
	     */
	    categ?: CategoryType;
	    /**
	     *
	     * @type {TrimFolder}
	     * @memberof CategoryFull
	     */
	    folder?: TrimFolder;
	    /**
	     *
	     * @type {Array<RestField>}
	     * @memberof CategoryFull
	     */
	    fieldList?: Array<RestField>;
	}
	/**
	 *
	 * @export
	 * @interface CategoryType
	 */
	export interface CategoryType {
	    /**
	     *
	     * @type {number}
	     * @memberof CategoryType
	     */
	    id?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof CategoryType
	     */
	    label?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof CategoryType
	     */
	    shortLabel?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof CategoryType
	     */
	    maxSerial?: number;
	}
	/**
	 *
	 * @export
	 * @interface CheckPasswordAck
	 */
	export interface CheckPasswordAck {
	    /**
	     *
	     * @type {string}
	     * @memberof CheckPasswordAck
	     */
	    actualLogin?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof CheckPasswordAck
	     */
	    userId?: number;
	    /**
	     *
	     * @type {UserType}
	     * @memberof CheckPasswordAck
	     */
	    userDetails?: UserType;
	    /**
	     *
	     * @type {number}
	     * @memberof CheckPasswordAck
	     */
	    maxAge?: number;
	    /**
	     *
	     * @type {boolean}
	     * @memberof CheckPasswordAck
	     */
	    singleSignOn?: boolean;
	    /**
	     *
	     * @type {boolean}
	     * @memberof CheckPasswordAck
	     */
	    superAdmin?: boolean;
	    /**
	     *
	     * @type {boolean}
	     * @memberof CheckPasswordAck
	     */
	    customerAdmin?: boolean;
	}
	/**
	 *
	 * @export
	 * @interface CleanupFail
	 */
	export interface CleanupFail {
	    /**
	     *
	     * @type {Array<CleanupField>}
	     * @memberof CleanupFail
	     */
	    fields?: Array<CleanupField>;
	    /**
	     *
	     * @type {boolean}
	     * @memberof CleanupFail
	     */
	    titleCleanedUp?: boolean;
	    /**
	     *
	     * @type {string}
	     * @memberof CleanupFail
	     */
	    titleBeforeCleanup?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof CleanupFail
	     */
	    titleAfterCleanup?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof CleanupFail
	     */
	    itemRef?: string;
	}
	/**
	 *
	 * @export
	 * @interface CleanupField
	 */
	export interface CleanupField {
	    /**
	     *
	     * @type {number}
	     * @memberof CleanupField
	     */
	    fieldId?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof CleanupField
	     */
	    fieldLabel?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof CleanupField
	     */
	    fieldType?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof CleanupField
	     */
	    beforeCleanup?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof CleanupField
	     */
	    afterCleanup?: string;
	}
	/**
	 *
	 * @export
	 * @interface CreateReportJobAck
	 */
	export interface CreateReportJobAck {
	    /**
	     *
	     * @type {number}
	     * @memberof CreateReportJobAck
	     */
	    jobId?: number;
	}
	/**
	 *
	 * @export
	 * @interface ExceptionItemIso
	 */
	export interface ExceptionItemIso {
	    /**
	     *
	     * @type {string}
	     * @memberof ExceptionItemIso
	     */
	    date?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ExceptionItemIso
	     */
	    text?: string;
	}
	/**
	 *
	 * @export
	 * @interface ExceptionStatus
	 */
	export interface ExceptionStatus {
	    /**
	     *
	     * @type {number}
	     * @memberof ExceptionStatus
	     */
	    nbExceptionsStillStart?: number;
	    /**
	     *
	     * @type {Array<ExceptionItemIso>}
	     * @memberof ExceptionStatus
	     */
	    lastHourExceptions?: Array<ExceptionItemIso>;
	}
	/**
	 *
	 * @export
	 * @interface ExecuteTestErrorDetails
	 */
	export interface ExecuteTestErrorDetails {
	    /**
	     *
	     * @type {string}
	     * @memberof ExecuteTestErrorDetails
	     */
	    key?: string;
	    /**
	     *
	     * @type {Array<string>}
	     * @memberof ExecuteTestErrorDetails
	     */
	    errors?: Array<string>;
	}
	/**
	 *
	 * @export
	 * @interface ExportItemsAck
	 */
	export interface ExportItemsAck {
	    /**
	     *
	     * @type {number}
	     * @memberof ExportItemsAck
	     */
	    jobId?: number;
	}
	/**
	 *
	 * @export
	 * @interface FancyFolder
	 */
	export interface FancyFolder {
	    /**
	     *
	     * @type {Array<FancyLeaf>}
	     * @memberof FancyFolder
	     */
	    children?: Array<FancyLeaf>;
	    /**
	     *
	     * @type {string}
	     * @memberof FancyFolder
	     */
	    icon?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof FancyFolder
	     */
	    id?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof FancyFolder
	     */
	    title?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof FancyFolder
	     */
	    type?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof FancyFolder
	     */
	    isUnselected?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof FancyFolder
	     */
	    version?: string;
	}
	/**
	 *
	 * @export
	 * @interface FancyLeaf
	 */
	export interface FancyLeaf {
	    /**
	     *
	     * @type {string}
	     * @memberof FancyLeaf
	     */
	    id?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof FancyLeaf
	     */
	    title?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof FancyLeaf
	     */
	    type?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof FancyLeaf
	     */
	    isUnselected?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof FancyLeaf
	     */
	    version?: string;
	}
	/**
	 *
	 * @export
	 * @interface FieldListType
	 */
	export interface FieldListType {
	    /**
	     *
	     * @type {Array<FieldType>}
	     * @memberof FieldListType
	     */
	    field?: Array<FieldType>;
	}
	/**
	 *
	 * @export
	 * @interface FieldType
	 */
	export interface FieldType {
	    /**
	     *
	     * @type {number}
	     * @memberof FieldType
	     */
	    id?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof FieldType
	     */
	    order?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof FieldType
	     */
	    fieldType?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof FieldType
	     */
	    parameter?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof FieldType
	     */
	    label?: string;
	}
	/**
	 *
	 * @export
	 * @interface FieldValListType
	 */
	export interface FieldValListType {
	    /**
	     *
	     * @type {Array<FieldValType>}
	     * @memberof FieldValListType
	     */
	    fieldVal?: Array<FieldValType>;
	}
	/**
	 *
	 * @export
	 * @interface FieldValType
	 */
	export interface FieldValType {
	    /**
	     *
	     * @type {number}
	     * @memberof FieldValType
	     */
	    id?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof FieldValType
	     */
	    value?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof FieldValType
	     */
	    hide?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof FieldValType
	     */
	    restricted?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof FieldValType
	     */
	    fieldName?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof FieldValType
	     */
	    fieldType?: string;
	}
	/**
	 *
	 * @export
	 * @interface FolderAnswer
	 */
	export interface FolderAnswer {
	    /**
	     *
	     * @type {string}
	     * @memberof FolderAnswer
	     */
	    folder?: string;
	    /**
	     *
	     * @type {Array<ExecuteTestErrorDetails>}
	     * @memberof FolderAnswer
	     */
	    xtcInError?: Array<ExecuteTestErrorDetails>;
	}
	/**
	 *
	 * @export
	 * @interface GetAccessAck
	 */
	export interface GetAccessAck {
	    /**
	     *
	     * @type {Array<UserPermissionType>}
	     * @memberof GetAccessAck
	     */
	    userPermission?: Array<UserPermissionType>;
	    /**
	     *
	     * @type {Array<GroupPermissionType>}
	     * @memberof GetAccessAck
	     */
	    groupPermission?: Array<GroupPermissionType>;
	}
	/**
	 *
	 * @export
	 * @interface GetDateAck
	 */
	export interface GetDateAck {
	    /**
	     *
	     * @type {string}
	     * @memberof GetDateAck
	     */
	    dateIso8601?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof GetDateAck
	     */
	    timeUserFormat?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof GetDateAck
	     */
	    dateUserFormat?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof GetDateAck
	     */
	    timeCustomerFormat?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof GetDateAck
	     */
	    dateCustomerFormat?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof GetDateAck
	     */
	    dateformat?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof GetDateAck
	     */
	    timeformat?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof GetDateAck
	     */
	    timeZone?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof GetDateAck
	     */
	    timeZoneDesc?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof GetDateAck
	     */
	    customerDateformat?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof GetDateAck
	     */
	    customerTimeformat?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof GetDateAck
	     */
	    customerTimezone?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof GetDateAck
	     */
	    customerTimezoneDesc?: string;
	}
	/**
	 *
	 * @export
	 * @interface GetGroupListAck
	 */
	export interface GetGroupListAck {
	    /**
	     *
	     * @type {Array<GroupType>}
	     * @memberof GetGroupListAck
	     */
	    groups?: Array<GroupType>;
	}
	/**
	 *
	 * @export
	 * @interface GetHtmlBlob
	 */
	export interface GetHtmlBlob {
	    /**
	     *
	     * @type {AuthType}
	     * @memberof GetHtmlBlob
	     */
	    auth?: AuthType;
	    /**
	     *
	     * @type {number}
	     * @memberof GetHtmlBlob
	     */
	    projectId?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof GetHtmlBlob
	     */
	    inputHtml?: string;
	}
	/**
	 *
	 * @export
	 * @interface GetItemListAck
	 */
	export interface GetItemListAck {
	    /**
	     *
	     * @type {string}
	     * @memberof GetItemListAck
	     */
	    docDateCustomerFormat?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof GetItemListAck
	     */
	    docDate?: string;
	    /**
	     *
	     * @type {Array<ItemSimpleType>}
	     * @memberof GetItemListAck
	     */
	    items?: Array<ItemSimpleType>;
	    /**
	     *
	     * @type {Array<ItemSimpleType>}
	     * @memberof GetItemListAck
	     */
	    secondaryItems?: Array<ItemSimpleType>;
	}
	/**
	 *
	 * @export
	 * @interface GetMonitorAck
	 */
	export interface GetMonitorAck {
	    /**
	     *
	     * @type {Array<MonitorAction>}
	     * @memberof GetMonitorAck
	     */
	    reminderActions?: Array<MonitorAction>;
	    /**
	     *
	     * @type {string}
	     * @memberof GetMonitorAck
	     */
	    firstLoginDate?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof GetMonitorAck
	     */
	    lastLoginDate?: string;
	}
	/**
	 *
	 * @export
	 * @interface GetProjectFileListAck
	 */
	export interface GetProjectFileListAck {
	    /**
	     *
	     * @type {Array<ProjectFileType>}
	     * @memberof GetProjectFileListAck
	     */
	    projectFile?: Array<ProjectFileType>;
	}
	/**
	 *
	 * @export
	 * @interface GetProjectSettingAck
	 */
	export interface GetProjectSettingAck {
	    /**
	     *
	     * @type {Array<SettingType>}
	     * @memberof GetProjectSettingAck
	     */
	    settingList?: Array<SettingType>;
	    /**
	     *
	     * @type {Array<CategoryAndSettingListType>}
	     * @memberof GetProjectSettingAck
	     */
	    categorySettingList?: Array<CategoryAndSettingListType>;
	    /**
	     *
	     * @type {Array<PluginSetting>}
	     * @memberof GetProjectSettingAck
	     */
	    pluginSettingsList?: Array<PluginSetting>;
	}
	/**
	 *
	 * @export
	 * @interface GetProjectStructAck
	 */
	export interface GetProjectStructAck {
	    /**
	     *
	     * @type {CategoryExtendedListType}
	     * @memberof GetProjectStructAck
	     */
	    categoryList?: CategoryExtendedListType;
	    /**
	     *
	     * @type {string}
	     * @memberof GetProjectStructAck
	     */
	    label?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof GetProjectStructAck
	     */
	    shortLabel?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof GetProjectStructAck
	     */
	    acl?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof GetProjectStructAck
	     */
	    aclExplanations?: string;
	}
	/**
	 *
	 * @export
	 * @interface GetReportsAck
	 */
	export interface GetReportsAck {
	    /**
	     *
	     * @type {Array<ReportType>}
	     * @memberof GetReportsAck
	     */
	    reportList?: Array<ReportType>;
	}
	/**
	 *
	 * @export
	 * @interface GetSettingAck
	 */
	export interface GetSettingAck {
	    /**
	     *
	     * @type {Array<SettingType>}
	     * @memberof GetSettingAck
	     */
	    settingList?: Array<SettingType>;
	}
	/**
	 *
	 * @export
	 * @interface GetTodosAck
	 */
	export interface GetTodosAck {
	    /**
	     *
	     * @type {Array<Todo>}
	     * @memberof GetTodosAck
	     */
	    todos?: Array<Todo>;
	    /**
	     *
	     * @type {Array<TodoCount>}
	     * @memberof GetTodosAck
	     */
	    todoCounts?: Array<TodoCount>;
	}
	/**
	 *
	 * @export
	 * @interface GetUserListAck
	 */
	export interface GetUserListAck {
	    /**
	     *
	     * @type {Array<UserType>}
	     * @memberof GetUserListAck
	     */
	    user?: Array<UserType>;
	    /**
	     *
	     * @type {number}
	     * @memberof GetUserListAck
	     */
	    needDoublePassword?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof GetUserListAck
	     */
	    passwordExpirationDays?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof GetUserListAck
	     */
	    passwordStrength?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof GetUserListAck
	     */
	    maxUsers?: number;
	}
	/**
	 *
	 * @export
	 * @interface GroupPermissionType
	 */
	export interface GroupPermissionType {
	    /**
	     *
	     * @type {string}
	     * @memberof GroupPermissionType
	     */
	    groupName?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof GroupPermissionType
	     */
	    permission?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof GroupPermissionType
	     */
	    groupId?: number;
	    /**
	     *
	     * @type {Array<UserTypeSimple>}
	     * @memberof GroupPermissionType
	     */
	    membership?: Array<UserTypeSimple>;
	}
	/**
	 *
	 * @export
	 * @interface GroupType
	 */
	export interface GroupType {
	    /**
	     *
	     * @type {string}
	     * @memberof GroupType
	     */
	    groupName?: string;
	    /**
	     *
	     * @type {Array<UserType>}
	     * @memberof GroupType
	     */
	    membership?: Array<UserType>;
	    /**
	     *
	     * @type {Array<ProjectPermissionType>}
	     * @memberof GroupType
	     */
	    permissions?: Array<ProjectPermissionType>;
	    /**
	     *
	     * @type {number}
	     * @memberof GroupType
	     */
	    groupId?: number;
	}
	/**
	 *
	 * @export
	 * @interface HtmlCompareResult
	 */
	export interface HtmlCompareResult {
	    /**
	     *
	     * @type {Array<string>}
	     * @memberof HtmlCompareResult
	     */
	    html?: Array<string>;
	    /**
	     *
	     * @type {Array<string>}
	     * @memberof HtmlCompareResult
	     */
	    htmlMultiple?: Array<string>;
	    /**
	     *
	     * @type {string}
	     * @memberof HtmlCompareResult
	     */
	    spanElement?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof HtmlCompareResult
	     */
	    addClass?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof HtmlCompareResult
	     */
	    removeClass?: string;
	}
	/**
	 *
	 * @export
	 * @interface HtmlTestCleanup
	 */
	export interface HtmlTestCleanup {
	    /**
	     *
	     * @type {Array<CleanupFail>}
	     * @memberof HtmlTestCleanup
	     */
	    cleanups?: Array<CleanupFail>;
	}
	/**
	 *
	 * @export
	 * @interface ItemHistoryListType
	 */
	export interface ItemHistoryListType {
	    /**
	     *
	     * @type {Array<ItemHistoryType>}
	     * @memberof ItemHistoryListType
	     */
	    itemHistory?: Array<ItemHistoryType>;
	}
	/**
	 *
	 * @export
	 * @interface ItemHistoryType
	 */
	export interface ItemHistoryType {
	    /**
	     *
	     * @type {number}
	     * @memberof ItemHistoryType
	     */
	    version?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof ItemHistoryType
	     */
	    createdAt?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ItemHistoryType
	     */
	    createdAtUserFormat?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ItemHistoryType
	     */
	    deletedAt?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ItemHistoryType
	     */
	    deletedAtUserFormat?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ItemHistoryType
	     */
	    title?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof ItemHistoryType
	     */
	    createdByUserId?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof ItemHistoryType
	     */
	    createdByUserLogin?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ItemHistoryType
	     */
	    reason?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof ItemHistoryType
	     */
	    auditId?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof ItemHistoryType
	     */
	    auditAction?: string;
	}
	/**
	 *
	 * @export
	 * @interface ItemSimpleType
	 */
	export interface ItemSimpleType {
	    /**
	     *
	     * @type {string}
	     * @memberof ItemSimpleType
	     */
	    author?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ItemSimpleType
	     */
	    birth?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ItemSimpleType
	     */
	    ref?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ItemSimpleType
	     */
	    title?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof ItemSimpleType
	     */
	    version?: number;
	}
	/**
	 *
	 * @export
	 * @interface JobFileWithUrl
	 */
	export interface JobFileWithUrl {
	    /**
	     *
	     * @type {string}
	     * @memberof JobFileWithUrl
	     */
	    restUrl?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof JobFileWithUrl
	     */
	    jobFileId?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof JobFileWithUrl
	     */
	    visibleName?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof JobFileWithUrl
	     */
	    internalPath?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof JobFileWithUrl
	     */
	    mimeType?: string;
	}
	/**
	 *
	 * @export
	 * @interface JobWithUrl
	 */
	export interface JobWithUrl {
	    /**
	     *
	     * @type {string}
	     * @memberof JobWithUrl
	     */
	    getJobUrl?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof JobWithUrl
	     */
	    jobId?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof JobWithUrl
	     */
	    progress?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof JobWithUrl
	     */
	    status?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof JobWithUrl
	     */
	    jobBirth?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof JobWithUrl
	     */
	    jobLastWrite?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof JobWithUrl
	     */
	    project?: string;
	}
	/**
	 *
	 * @export
	 * @interface JobsStatusWithUrl
	 */
	export interface JobsStatusWithUrl {
	    /**
	     *
	     * @type {number}
	     * @memberof JobsStatusWithUrl
	     */
	    progress?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof JobsStatusWithUrl
	     */
	    status?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof JobsStatusWithUrl
	     */
	    visibleName?: string;
	    /**
	     *
	     * @type {Array<JobFileWithUrl>}
	     * @memberof JobsStatusWithUrl
	     */
	    jobFile?: Array<JobFileWithUrl>;
	}
	/**
	 *
	 * @export
	 * @interface JobsWithUrl
	 */
	export interface JobsWithUrl {
	    /**
	     *
	     * @type {number}
	     * @memberof JobsWithUrl
	     */
	    runningJobs?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof JobsWithUrl
	     */
	    maxRunningJobs?: number;
	    /**
	     *
	     * @type {Array<JobWithUrl>}
	     * @memberof JobsWithUrl
	     */
	    jobs?: Array<JobWithUrl>;
	}
	/**
	 *
	 * @export
	 * @interface LabelChange
	 */
	export interface LabelChange {
	    /**
	     *
	     * @type {string}
	     * @memberof LabelChange
	     */
	    label?: string;
	    /**
	     *
	     * @type {Array<LabelChangeDetail>}
	     * @memberof LabelChange
	     */
	    set?: Array<LabelChangeDetail>;
	    /**
	     *
	     * @type {Array<LabelChangeDetail>}
	     * @memberof LabelChange
	     */
	    reset?: Array<LabelChangeDetail>;
	}
	/**
	 *
	 * @export
	 * @interface LabelChangeDetail
	 */
	export interface LabelChangeDetail {
	    /**
	     *
	     * @type {number}
	     * @memberof LabelChangeDetail
	     */
	    version?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof LabelChangeDetail
	     */
	    dateIso?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof LabelChangeDetail
	     */
	    dateUser?: string;
	}
	/**
	 *
	 * @export
	 * @interface LabelEntry
	 */
	export interface LabelEntry {
	    /**
	     *
	     * @type {string}
	     * @memberof LabelEntry
	     */
	    itemRef?: string;
	    /**
	     *
	     * @type {Array<LabelChange>}
	     * @memberof LabelEntry
	     */
	    labels?: Array<LabelChange>;
	}
	/**
	 *
	 * @export
	 * @interface LabelHistory
	 */
	export interface LabelHistory {
	    /**
	     *
	     * @type {Array<LabelEntry>}
	     * @memberof LabelHistory
	     */
	    entries?: Array<LabelEntry>;
	}
	/**
	 *
	 * @export
	 * @interface LicenseStatus
	 */
	export interface LicenseStatus {
	    /**
	     *
	     * @type {Array<string>}
	     * @memberof LicenseStatus
	     */
	    modules?: Array<string>;
	    /**
	     *
	     * @type {number}
	     * @memberof LicenseStatus
	     */
	    maxUsers?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof LicenseStatus
	     */
	    currentRWUsers?: number;
	    /**
	     *
	     * @type {Array<LicenseUser>}
	     * @memberof LicenseStatus
	     */
	    licenseUsers?: Array<LicenseUser>;
	}
	/**
	 *
	 * @export
	 * @interface LicenseUser
	 */
	export interface LicenseUser {
	    /**
	     *
	     * @type {number}
	     * @memberof LicenseUser
	     */
	    userId?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof LicenseUser
	     */
	    login?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof LicenseUser
	     */
	    name?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof LicenseUser
	     */
	    email?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof LicenseUser
	     */
	    level?: string;
	}
	/**
	 *
	 * @export
	 * @interface ListProjectAndSettings
	 */
	export interface ListProjectAndSettings {
	    /**
	     *
	     * @type {string}
	     * @memberof ListProjectAndSettings
	     */
	    currentUser?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof ListProjectAndSettings
	     */
	    customerAdmin?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof ListProjectAndSettings
	     */
	    superAdmin?: number;
	    /**
	     *
	     * @type {GetDateAck}
	     * @memberof ListProjectAndSettings
	     */
	    dateInfo?: GetDateAck;
	    /**
	     *
	     * @type {Array<SettingType>}
	     * @memberof ListProjectAndSettings
	     */
	    customerSettings?: Array<SettingType>;
	    /**
	     *
	     * @type {MatrixLicense}
	     * @memberof ListProjectAndSettings
	     */
	    license?: MatrixLicense;
	    /**
	     *
	     * @type {Array<string>}
	     * @memberof ListProjectAndSettings
	     */
	    readWriteUsers?: Array<string>;
	    /**
	     *
	     * @type {Array<UserType>}
	     * @memberof ListProjectAndSettings
	     */
	    allUsers?: Array<UserType>;
	    /**
	     *
	     * @type {string}
	     * @memberof ListProjectAndSettings
	     */
	    licenseStatus?: string;
	    /**
	     *
	     * @type {Array<TodoCount>}
	     * @memberof ListProjectAndSettings
	     */
	    todoCounts?: Array<TodoCount>;
	    /**
	     *
	     * @type {Array<Todo>}
	     * @memberof ListProjectAndSettings
	     */
	    allTodos?: Array<Todo>;
	    /**
	     *
	     * @type {Array<SettingType>}
	     * @memberof ListProjectAndSettings
	     */
	    currentUserSettings?: Array<SettingType>;
	    /**
	     *
	     * @type {Array<MainAndBranch>}
	     * @memberof ListProjectAndSettings
	     */
	    branches?: Array<MainAndBranch>;
	    /**
	     *
	     * @type {string}
	     * @memberof ListProjectAndSettings
	     */
	    serviceEmail?: string;
	    /**
	     *
	     * @type {Array<ProjectType>}
	     * @memberof ListProjectAndSettings
	     */
	    project?: Array<ProjectType>;
	    /**
	     *
	     * @type {string}
	     * @memberof ListProjectAndSettings
	     */
	    serverVersion?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ListProjectAndSettings
	     */
	    baseUrl?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ListProjectAndSettings
	     */
	    restUrl?: string;
	}
	/**
	 *
	 * @export
	 * @interface MainAndBranch
	 */
	export interface MainAndBranch {
	    /**
	     *
	     * @type {string}
	     * @memberof MainAndBranch
	     */
	    mainline?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof MainAndBranch
	     */
	    branch?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof MainAndBranch
	     */
	    user?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof MainAndBranch
	     */
	    branchDateTime?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof MainAndBranch
	     */
	    branchDateTimeUser?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof MainAndBranch
	     */
	    withHistory?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof MainAndBranch
	     */
	    branchUntilTag?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof MainAndBranch
	     */
	    lastMergeDatetime?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof MainAndBranch
	     */
	    lastMergeDatetimeUser?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof MainAndBranch
	     */
	    lastMergeUser?: string;
	}
	/**
	 *
	 * @export
	 * @interface MatrixLicense
	 */
	export interface MatrixLicense {
	    /**
	     *
	     * @type {number}
	     * @memberof MatrixLicense
	     */
	    licenseVersion?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof MatrixLicense
	     */
	    customerName?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof MatrixLicense
	     */
	    customerId?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof MatrixLicense
	     */
	    customerEcommerceId?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof MatrixLicense
	     */
	    customerEmail?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof MatrixLicense
	     */
	    customerPhone?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof MatrixLicense
	     */
	    maxReadWrite?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof MatrixLicense
	     */
	    validTo?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof MatrixLicense
	     */
	    productName?: string;
	    /**
	     *
	     * @type {Array<string>}
	     * @memberof MatrixLicense
	     */
	    options?: Array<string>;
	    /**
	     *
	     * @type {number}
	     * @memberof MatrixLicense
	     */
	    VERSION?: number;
	}
	/**
	 *
	 * @export
	 * @interface MergeAction
	 */
	export interface MergeAction {
	    /**
	     *
	     * @type {string}
	     * @memberof MergeAction
	     */
	    action?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof MergeAction
	     */
	    branchItem?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof MergeAction
	     */
	    branchItem2?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof MergeAction
	     */
	    mainlineItem?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof MergeAction
	     */
	    mainlineItem2?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof MergeAction
	     */
	    mainlineFolder?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof MergeAction
	     */
	    request?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof MergeAction
	     */
	    error?: string;
	}
	/**
	 *
	 * @export
	 * @interface MergeEntry
	 */
	export interface MergeEntry {
	    /**
	     *
	     * @type {number}
	     * @memberof MergeEntry
	     */
	    id?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof MergeEntry
	     */
	    user?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof MergeEntry
	     */
	    mainlineProject?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof MergeEntry
	     */
	    branchProject?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof MergeEntry
	     */
	    date?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof MergeEntry
	     */
	    dateUser?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof MergeEntry
	     */
	    comments?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof MergeEntry
	     */
	    mainlineProjectId?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof MergeEntry
	     */
	    branchProjectId?: number;
	    /**
	     *
	     * @type {Array<MergeAction>}
	     * @memberof MergeEntry
	     */
	    details?: Array<MergeAction>;
	}
	/**
	 *
	 * @export
	 * @interface MergeHistory
	 */
	export interface MergeHistory {
	    /**
	     *
	     * @type {Array<MergeEntry>}
	     * @memberof MergeHistory
	     */
	    entries?: Array<MergeEntry>;
	}
	/**
	 *
	 * @export
	 * @interface MergeInfo
	 */
	export interface MergeInfo {
	    /**
	     *
	     * @type {MergeInfoPoint}
	     * @memberof MergeInfo
	     */
	    branchBase?: MergeInfoPoint;
	    /**
	     *
	     * @type {MergeInfoPoint}
	     * @memberof MergeInfo
	     */
	    branchNow?: MergeInfoPoint;
	    /**
	     *
	     * @type {MergeInfoPoint}
	     * @memberof MergeInfo
	     */
	    mainlineBase?: MergeInfoPoint;
	    /**
	     *
	     * @type {MergeInfoPoint}
	     * @memberof MergeInfo
	     */
	    mainlineNow?: MergeInfoPoint;
	    /**
	     *
	     * @type {Array<MergeItemLink>}
	     * @memberof MergeInfo
	     */
	    linksAdded?: Array<MergeItemLink>;
	    /**
	     *
	     * @type {Array<MergeItemLink>}
	     * @memberof MergeInfo
	     */
	    linksDifferent?: Array<MergeItemLink>;
	    /**
	     *
	     * @type {Array<MergeItemLink>}
	     * @memberof MergeInfo
	     */
	    linksDeleted?: Array<MergeItemLink>;
	}
	/**
	 *
	 * @export
	 * @interface MergeInfoPoint
	 */
	export interface MergeInfoPoint {
	    /**
	     *
	     * @type {string}
	     * @memberof MergeInfoPoint
	     */
	    project?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof MergeInfoPoint
	     */
	    date?: string;
	    /**
	     *
	     * @type {Array<MergeItem>}
	     * @memberof MergeInfoPoint
	     */
	    items?: Array<MergeItem>;
	}
	/**
	 *
	 * @export
	 * @interface MergeItem
	 */
	export interface MergeItem {
	    /**
	     *
	     * @type {string}
	     * @memberof MergeItem
	     */
	    itemRef?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof MergeItem
	     */
	    version?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof MergeItem
	     */
	    title?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof MergeItem
	     */
	    parentFolder?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof MergeItem
	     */
	    nbMoveSinceV1?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof MergeItem
	     */
	    itemId?: number;
	}
	/**
	 *
	 * @export
	 * @interface MergeItemLink
	 */
	export interface MergeItemLink {
	    /**
	     *
	     * @type {string}
	     * @memberof MergeItemLink
	     */
	    upItemRef?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof MergeItemLink
	     */
	    downItemRef?: string;
	}
	/**
	 *
	 * @export
	 * @interface MonitorAction
	 */
	export interface MonitorAction {
	    /**
	     *
	     * @type {string}
	     * @memberof MonitorAction
	     */
	    action?: string;
	    /**
	     *
	     * @type {boolean}
	     * @memberof MonitorAction
	     */
	    done?: boolean;
	}
	/**
	 *
	 * @export
	 * @interface PluginCapabilities
	 */
	export interface PluginCapabilities {
	    /**
	     *
	     * @type {boolean}
	     * @memberof PluginCapabilities
	     */
	    canCreate?: boolean;
	    /**
	     *
	     * @type {boolean}
	     * @memberof PluginCapabilities
	     */
	    canFind?: boolean;
	    /**
	     *
	     * @type {boolean}
	     * @memberof PluginCapabilities
	     */
	    needSetup?: boolean;
	    /**
	     *
	     * @type {boolean}
	     * @memberof PluginCapabilities
	     */
	    handleAsLink?: boolean;
	    /**
	     *
	     * @type {boolean}
	     * @memberof PluginCapabilities
	     */
	    one2OneMapping?: boolean;
	    /**
	     *
	     * @type {boolean}
	     * @memberof PluginCapabilities
	     */
	    hasMeta?: boolean;
	    /**
	     *
	     * @type {boolean}
	     * @memberof PluginCapabilities
	     */
	    canCreateBacklinks?: boolean;
	    /**
	     *
	     * @type {boolean}
	     * @memberof PluginCapabilities
	     */
	    messaging?: boolean;
	    /**
	     *
	     * @type {boolean}
	     * @memberof PluginCapabilities
	     */
	    restToken?: boolean;
	    /**
	     *
	     * @type {boolean}
	     * @memberof PluginCapabilities
	     */
	    impersonate?: boolean;
	    /**
	     *
	     * @type {boolean}
	     * @memberof PluginCapabilities
	     */
	    extendedSettings?: boolean;
	    /**
	     *
	     * @type {boolean}
	     * @memberof PluginCapabilities
	     */
	    hideInProjectSettings?: boolean;
	}
	/**
	 *
	 * @export
	 * @interface PluginSetting
	 */
	export interface PluginSetting {
	    /**
	     *
	     * @type {number}
	     * @memberof PluginSetting
	     */
	    pluginId?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof PluginSetting
	     */
	    pluginLongName?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof PluginSetting
	     */
	    pluginShortName?: string;
	    /**
	     *
	     * @type {Array<SettingAndValue>}
	     * @memberof PluginSetting
	     */
	    settings?: Array<SettingAndValue>;
	    /**
	     *
	     * @type {Array<SettingAndValue>}
	     * @memberof PluginSetting
	     */
	    computedSettings?: Array<SettingAndValue>;
	    /**
	     *
	     * @type {PluginCapabilities}
	     * @memberof PluginSetting
	     */
	    capabilities?: PluginCapabilities;
	}
	/**
	 *
	 * @export
	 * @interface ProjectAndAccess
	 */
	export interface ProjectAndAccess {
	    /**
	     *
	     * @type {number}
	     * @memberof ProjectAndAccess
	     */
	    projectId?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof ProjectAndAccess
	     */
	    projectShort?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ProjectAndAccess
	     */
	    projectLabel?: string;
	    /**
	     *
	     * @type {Array<Access>}
	     * @memberof ProjectAndAccess
	     */
	    accesses?: Array<Access>;
	}
	/**
	 *
	 * @export
	 * @interface ProjectFileType
	 */
	export interface ProjectFileType {
	    /**
	     *
	     * @type {number}
	     * @memberof ProjectFileType
	     */
	    fileId?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof ProjectFileType
	     */
	    localName?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ProjectFileType
	     */
	    fullPath?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ProjectFileType
	     */
	    mimeType?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ProjectFileType
	     */
	    key?: string;
	}
	/**
	 *
	 * @export
	 * @interface ProjectInfo
	 */
	export interface ProjectInfo {
	    /**
	     *
	     * @type {Array<UserPermissionType>}
	     * @memberof ProjectInfo
	     */
	    userPermission?: Array<UserPermissionType>;
	    /**
	     *
	     * @type {Array<GroupPermissionType>}
	     * @memberof ProjectInfo
	     */
	    groupPermission?: Array<GroupPermissionType>;
	    /**
	     *
	     * @type {CategoryExtendedListType}
	     * @memberof ProjectInfo
	     */
	    categoryList?: CategoryExtendedListType;
	    /**
	     *
	     * @type {string}
	     * @memberof ProjectInfo
	     */
	    label?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ProjectInfo
	     */
	    shortLabel?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ProjectInfo
	     */
	    acl?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ProjectInfo
	     */
	    aclExplanations?: string;
	    /**
	     *
	     * @type {Array<SettingType>}
	     * @memberof ProjectInfo
	     */
	    settingList?: Array<SettingType>;
	    /**
	     *
	     * @type {Array<CategoryAndSettingListType>}
	     * @memberof ProjectInfo
	     */
	    categorySettingList?: Array<CategoryAndSettingListType>;
	    /**
	     *
	     * @type {Array<PluginSetting>}
	     * @memberof ProjectInfo
	     */
	    pluginSettingsList?: Array<PluginSetting>;
	    /**
	     *
	     * @type {Array<Todo>}
	     * @memberof ProjectInfo
	     */
	    todos?: Array<Todo>;
	}
	/**
	 *
	 * @export
	 * @interface ProjectPermissionType
	 */
	export interface ProjectPermissionType {
	    /**
	     *
	     * @type {ProjectType}
	     * @memberof ProjectPermissionType
	     */
	    project?: ProjectType;
	    /**
	     *
	     * @type {Access}
	     * @memberof ProjectPermissionType
	     */
	    access?: Access;
	}
	/**
	 *
	 * @export
	 * @interface ProjectType
	 */
	export interface ProjectType {
	    /**
	     *
	     * @type {number}
	     * @memberof ProjectType
	     */
	    id?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof ProjectType
	     */
	    label?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ProjectType
	     */
	    shortLabel?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ProjectType
	     */
	    projectLogo?: string;
	    /**
	     *
	     * @type {boolean}
	     * @memberof ProjectType
	     */
	    qmsProject?: boolean;
	    /**
	     *
	     * @type {string}
	     * @memberof ProjectType
	     */
	    accessType?: string;
	}
	/**
	 *
	 * @export
	 * @interface ReportTarget
	 */
	export interface ReportTarget {
	    /**
	     *
	     * @type {string}
	     * @memberof ReportTarget
	     */
	    targetId?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ReportTarget
	     */
	    targetText?: string;
	}
	/**
	 *
	 * @export
	 * @interface ReportType
	 */
	export interface ReportType {
	    /**
	     *
	     * @type {string}
	     * @memberof ReportType
	     */
	    id?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ReportType
	     */
	    label?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ReportType
	     */
	    group?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ReportType
	     */
	    description?: string;
	    /**
	     *
	     * @type {boolean}
	     * @memberof ReportType
	     */
	    custom?: boolean;
	    /**
	     *
	     * @type {Array<string>}
	     * @memberof ReportType
	     */
	    guiItems?: Array<string>;
	    /**
	     *
	     * @type {string}
	     * @memberof ReportType
	     */
	    requireSubtreeType?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ReportType
	     */
	    requireSubtree?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ReportType
	     */
	    selectSubtreeType?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ReportType
	     */
	    selectSubtree?: string;
	    /**
	     *
	     * @type {Array<ReportTarget>}
	     * @memberof ReportType
	     */
	    targets?: Array<ReportTarget>;
	}
	/**
	 *
	 * @export
	 * @interface RestField
	 */
	export interface RestField {
	    /**
	     *
	     * @type {number}
	     * @memberof RestField
	     */
	    id?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof RestField
	     */
	    label?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof RestField
	     */
	    fieldType?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof RestField
	     */
	    fieldParam?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof RestField
	     */
	    testParam?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof RestField
	     */
	    testExecParam?: string;
	}
	/**
	 *
	 * @export
	 * @interface ServerStatus
	 */
	export interface ServerStatus {
	    /**
	     *
	     * @type {ExceptionStatus}
	     * @memberof ServerStatus
	     */
	    exceptionStatus?: ExceptionStatus;
	    /**
	     *
	     * @type {string}
	     * @memberof ServerStatus
	     */
	    version?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof ServerStatus
	     */
	    publicUrl?: string;
	}
	/**
	 *
	 * @export
	 * @interface SettingAndValue
	 */
	export interface SettingAndValue {
	    /**
	     *
	     * @type {string}
	     * @memberof SettingAndValue
	     */
	    setting?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof SettingAndValue
	     */
	    value?: string;
	    /**
	     *
	     * @type {boolean}
	     * @memberof SettingAndValue
	     */
	    encrypted?: boolean;
	}
	/**
	 *
	 * @export
	 * @interface SettingType
	 */
	export interface SettingType {
	    /**
	     *
	     * @type {string}
	     * @memberof SettingType
	     */
	    value?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof SettingType
	     */
	    key?: string;
	    /**
	     *
	     * @type {boolean}
	     * @memberof SettingType
	     */
	    secret?: boolean;
	}
	/**
	 *
	 * @export
	 * @interface SignItemAck
	 */
	export interface SignItemAck {
	    /**
	     *
	     * @type {string}
	     * @memberof SignItemAck
	     */
	    result?: string;
	    /**
	     *
	     * @type {boolean}
	     * @memberof SignItemAck
	     */
	    ok?: boolean;
	}
	/**
	 *
	 * @export
	 * @interface Tag
	 */
	export interface Tag {
	    /**
	     *
	     * @type {number}
	     * @memberof Tag
	     */
	    id?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof Tag
	     */
	    auditId?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof Tag
	     */
	    auditTime?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof Tag
	     */
	    label?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof Tag
	     */
	    comments?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof Tag
	     */
	    tagType?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof Tag
	     */
	    tagCreation?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof Tag
	     */
	    userLogin?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof Tag
	     */
	    baseProjectId?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof Tag
	     */
	    baseProjectName?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof Tag
	     */
	    baseProjectTag?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof Tag
	     */
	    baseAuditCreation?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof Tag
	     */
	    baseAuditId?: number;
	}
	/**
	 *
	 * @export
	 * @interface TechAuditType
	 */
	export interface TechAuditType {
	    /**
	     *
	     * @type {number}
	     * @memberof TechAuditType
	     */
	    id?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof TechAuditType
	     */
	    operation?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof TechAuditType
	     */
	    table?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof TechAuditType
	     */
	    index?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof TechAuditType
	     */
	    ref?: string;
	}
	/**
	 *
	 * @export
	 * @interface Todo
	 */
	export interface Todo {
	    /**
	     *
	     * @type {number}
	     * @memberof Todo
	     */
	    todoId?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof Todo
	     */
	    userId?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof Todo
	     */
	    login?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof Todo
	     */
	    projectShort?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof Todo
	     */
	    itemRef?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof Todo
	     */
	    fieldLabel?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof Todo
	     */
	    fieldId?: number;
	    /**
	     *
	     * @type {boolean}
	     * @memberof Todo
	     */
	    auto?: boolean;
	    /**
	     *
	     * @type {number}
	     * @memberof Todo
	     */
	    originatorUserId?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof Todo
	     */
	    originatorLogin?: string;
	    /**
	     *
	     * @type {TodoAction}
	     * @memberof Todo
	     */
	    action?: TodoAction;
	    /**
	     *
	     * @type {string}
	     * @memberof Todo
	     */
	    createdAt?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof Todo
	     */
	    closedAt?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof Todo
	     */
	    createdAtUserFormat?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof Todo
	     */
	    closedAtUserFormat?: string;
	    /**
	     *
	     * @type {boolean}
	     * @memberof Todo
	     */
	    future?: boolean;
	}
	/**
	 *
	 * @export
	 * @interface TodoAction
	 */
	export interface TodoAction {
	    /**
	     *
	     * @type {string}
	     * @memberof TodoAction
	     */
	    text?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof TodoAction
	     */
	    todoType?: string;
	}
	/**
	 *
	 * @export
	 * @interface TodoCount
	 */
	export interface TodoCount {
	    /**
	     *
	     * @type {number}
	     * @memberof TodoCount
	     */
	    userId?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof TodoCount
	     */
	    login?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof TodoCount
	     */
	    projectId?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof TodoCount
	     */
	    projectShort?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof TodoCount
	     */
	    nbTodos?: number;
	    /**
	     *
	     * @type {Array<Todo>}
	     * @memberof TodoCount
	     */
	    firstTodos?: Array<Todo>;
	}
	/**
	 *
	 * @export
	 * @interface TokenType
	 */
	export interface TokenType {
	    /**
	     *
	     * @type {number}
	     * @memberof TokenType
	     */
	    userId?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof TokenType
	     */
	    tokenId?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof TokenType
	     */
	    purpose?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof TokenType
	     */
	    reason?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof TokenType
	     */
	    value?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof TokenType
	     */
	    validTo?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof TokenType
	     */
	    validToUserFormat?: string;
	}
	/**
	 *
	 * @export
	 * @interface TrimAudit
	 */
	export interface TrimAudit {
	    /**
	     *
	     * @type {string}
	     * @memberof TrimAudit
	     */
	    userLogin?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof TrimAudit
	     */
	    dateTime?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof TrimAudit
	     */
	    dateTimeUserFormat?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof TrimAudit
	     */
	    action?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof TrimAudit
	     */
	    entity?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof TrimAudit
	     */
	    reason?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof TrimAudit
	     */
	    projectLabel?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof TrimAudit
	     */
	    reportRef?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof TrimAudit
	     */
	    reportTitle?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof TrimAudit
	     */
	    reportJobId?: number;
	    /**
	     *
	     * @type {TrimNeedleItem}
	     * @memberof TrimAudit
	     */
	    itemBefore?: TrimNeedleItem;
	    /**
	     *
	     * @type {TrimNeedleItem}
	     * @memberof TrimAudit
	     */
	    itemAfter?: TrimNeedleItem;
	    /**
	     *
	     * @type {TrimNeedleItem}
	     * @memberof TrimAudit
	     */
	    itemUp?: TrimNeedleItem;
	    /**
	     *
	     * @type {TrimNeedleItem}
	     * @memberof TrimAudit
	     */
	    itemDown?: TrimNeedleItem;
	    /**
	     *
	     * @type {number}
	     * @memberof TrimAudit
	     */
	    auditId?: number;
	    /**
	     *
	     * @type {Array<TechAuditType>}
	     * @memberof TrimAudit
	     */
	    techAudit?: Array<TechAuditType>;
	    /**
	     *
	     * @type {Array<Tag>}
	     * @memberof TrimAudit
	     */
	    tags?: Array<Tag>;
	    /**
	     *
	     * @type {Array<ItemSimpleType>}
	     * @memberof TrimAudit
	     */
	    itemsDeletedByMerge?: Array<ItemSimpleType>;
	}
	/**
	 *
	 * @export
	 * @interface TrimAuditList
	 */
	export interface TrimAuditList {
	    /**
	     *
	     * @type {number}
	     * @memberof TrimAuditList
	     */
	    startAt?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof TrimAuditList
	     */
	    maxResults?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof TrimAuditList
	     */
	    totalResults?: number;
	    /**
	     *
	     * @type {Array<TrimAudit>}
	     * @memberof TrimAuditList
	     */
	    audit?: Array<TrimAudit>;
	}
	/**
	 *
	 * @export
	 * @interface TrimFolder
	 */
	export interface TrimFolder {
	    /**
	     *
	     * @type {string}
	     * @memberof TrimFolder
	     */
	    itemRef?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof TrimFolder
	     */
	    title?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof TrimFolder
	     */
	    partial?: number;
	    /**
	     *
	     * @type {Array<TrimFolder>}
	     * @memberof TrimFolder
	     */
	    itemList?: Array<TrimFolder>;
	    /**
	     *
	     * @type {FieldValListType}
	     * @memberof TrimFolder
	     */
	    fieldValList?: FieldValListType;
	    /**
	     *
	     * @type {number}
	     * @memberof TrimFolder
	     */
	    isFolder?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof TrimFolder
	     */
	    isUnselected?: number;
	    /**
	     *
	     * @type {ItemHistoryListType}
	     * @memberof TrimFolder
	     */
	    itemHistoryList?: ItemHistoryListType;
	    /**
	     *
	     * @type {number}
	     * @memberof TrimFolder
	     */
	    maxVersion?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof TrimFolder
	     */
	    modDate?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof TrimFolder
	     */
	    modDateUserFormat?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof TrimFolder
	     */
	    itemId?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof TrimFolder
	     */
	    disabled?: number;
	}
	/**
	 *
	 * @export
	 * @interface TrimItem
	 */
	export interface TrimItem {
	    /**
	     *
	     * @type {string}
	     * @memberof TrimItem
	     */
	    title?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof TrimItem
	     */
	    itemRef?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof TrimItem
	     */
	    folderRef?: string;
	    /**
	     *
	     * @type {Array<TrimLink>}
	     * @memberof TrimItem
	     */
	    upLinkList?: Array<TrimLink>;
	    /**
	     *
	     * @type {Array<TrimLink>}
	     * @memberof TrimItem
	     */
	    downLinkList?: Array<TrimLink>;
	    /**
	     *
	     * @type {FieldValListType}
	     * @memberof TrimItem
	     */
	    fieldValList?: FieldValListType;
	    /**
	     *
	     * @type {Array<string>}
	     * @memberof TrimItem
	     */
	    labels?: Array<string>;
	    /**
	     *
	     * @type {ItemHistoryListType}
	     * @memberof TrimItem
	     */
	    itemHistoryList?: ItemHistoryListType;
	    /**
	     *
	     * @type {number}
	     * @memberof TrimItem
	     */
	    maxVersion?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof TrimItem
	     */
	    disabled?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof TrimItem
	     */
	    isFolder?: number;
	    /**
	     *
	     * @type {Array<string>}
	     * @memberof TrimItem
	     */
	    availableFormats?: Array<string>;
	    /**
	     *
	     * @type {number}
	     * @memberof TrimItem
	     */
	    itemId?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof TrimItem
	     */
	    modDate?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof TrimItem
	     */
	    modDateUserFormat?: string;
	    /**
	     *
	     * @type {Array<CategoryAndRoot>}
	     * @memberof TrimItem
	     */
	    requireSubTree?: Array<CategoryAndRoot>;
	    /**
	     *
	     * @type {Array<CategoryAndRoot>}
	     * @memberof TrimItem
	     */
	    selectSubTree?: Array<CategoryAndRoot>;
	    /**
	     *
	     * @type {number}
	     * @memberof TrimItem
	     */
	    isUnselected?: number;
	    /**
	     *
	     * @type {Array<UserAndTime>}
	     * @memberof TrimItem
	     */
	    downloads?: Array<UserAndTime>;
	    /**
	     *
	     * @type {boolean}
	     * @memberof TrimItem
	     */
	    docHasPackage?: boolean;
	    /**
	     *
	     * @type {CleanupFail}
	     * @memberof TrimItem
	     */
	    cleanupFail?: CleanupFail;
	}
	/**
	 *
	 * @export
	 * @interface TrimLink
	 */
	export interface TrimLink {
	    /**
	     *
	     * @type {Array<TrimLink>}
	     * @memberof TrimLink
	     */
	    upLinkList?: Array<TrimLink>;
	    /**
	     *
	     * @type {Array<TrimLink>}
	     * @memberof TrimLink
	     */
	    downLinkList?: Array<TrimLink>;
	    /**
	     *
	     * @type {string}
	     * @memberof TrimLink
	     */
	    itemRef?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof TrimLink
	     */
	    title?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof TrimLink
	     */
	    modDate?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof TrimLink
	     */
	    modDateUserFormat?: string;
	}
	/**
	 *
	 * @export
	 * @interface TrimNeedle
	 */
	export interface TrimNeedle {
	    /**
	     *
	     * @type {number}
	     * @memberof TrimNeedle
	     */
	    startAt?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof TrimNeedle
	     */
	    maxResults?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof TrimNeedle
	     */
	    totalResults?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof TrimNeedle
	     */
	    searchId?: string;
	    /**
	     *
	     * @type {Array<TrimNeedleItem>}
	     * @memberof TrimNeedle
	     */
	    needles?: Array<TrimNeedleItem>;
	}
	/**
	 *
	 * @export
	 * @interface TrimNeedleItem
	 */
	export interface TrimNeedleItem {
	    /**
	     *
	     * @type {string}
	     * @memberof TrimNeedleItem
	     */
	    itemOrFolderRef?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof TrimNeedleItem
	     */
	    title?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof TrimNeedleItem
	     */
	    project?: string;
	    /**
	     *
	     * @type {Array<FieldValType>}
	     * @memberof TrimNeedleItem
	     */
	    fieldVal?: Array<FieldValType>;
	    /**
	     *
	     * @type {string}
	     * @memberof TrimNeedleItem
	     */
	    labels?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof TrimNeedleItem
	     */
	    lastModDate?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof TrimNeedleItem
	     */
	    creationDate?: string;
	    /**
	     *
	     * @type {Array<TrimLink>}
	     * @memberof TrimNeedleItem
	     */
	    upLinkList?: Array<TrimLink>;
	    /**
	     *
	     * @type {Array<TrimLink>}
	     * @memberof TrimNeedleItem
	     */
	    downLinkList?: Array<TrimLink>;
	}
	/**
	 *
	 * @export
	 * @interface UndeleteAnswer
	 */
	export interface UndeleteAnswer {
	    /**
	     *
	     * @type {string}
	     * @memberof UndeleteAnswer
	     */
	    newParent?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof UndeleteAnswer
	     */
	    newOrder?: number;
	}
	/**
	 *
	 * @export
	 * @interface UserAndTime
	 */
	export interface UserAndTime {
	    /**
	     *
	     * @type {number}
	     * @memberof UserAndTime
	     */
	    userId?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof UserAndTime
	     */
	    login?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof UserAndTime
	     */
	    firstName?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof UserAndTime
	     */
	    lastName?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof UserAndTime
	     */
	    email?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof UserAndTime
	     */
	    date?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof UserAndTime
	     */
	    dateUserFormat?: string;
	}
	/**
	 *
	 * @export
	 * @interface UserDetails
	 */
	export interface UserDetails {
	    /**
	     *
	     * @type {string}
	     * @memberof UserDetails
	     */
	    login?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof UserDetails
	     */
	    nbReadWriteProjectsNow?: number;
	    /**
	     *
	     * @type {Array<ProjectAndAccess>}
	     * @memberof UserDetails
	     */
	    projects?: Array<ProjectAndAccess>;
	    /**
	     *
	     * @type {Array<UserInfo>}
	     * @memberof UserDetails
	     */
	    infoUpdates?: Array<UserInfo>;
	    /**
	     *
	     * @type {number}
	     * @memberof UserDetails
	     */
	    admin?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof UserDetails
	     */
	    superAdmin?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof UserDetails
	     */
	    userStatus?: string;
	}
	/**
	 *
	 * @export
	 * @interface UserInfo
	 */
	export interface UserInfo {
	    /**
	     *
	     * @type {string}
	     * @memberof UserInfo
	     */
	    startDate8601?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof UserInfo
	     */
	    endDate8601?: string;
	    /**
	     *
	     * @type {boolean}
	     * @memberof UserInfo
	     */
	    hasKey?: boolean;
	    /**
	     *
	     * @type {number}
	     * @memberof UserInfo
	     */
	    userId?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof UserInfo
	     */
	    login?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof UserInfo
	     */
	    email?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof UserInfo
	     */
	    firstName?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof UserInfo
	     */
	    lastName?: string;
	}
	/**
	 *
	 * @export
	 * @interface UserPermissionType
	 */
	export interface UserPermissionType {
	    /**
	     *
	     * @type {number}
	     * @memberof UserPermissionType
	     */
	    id?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof UserPermissionType
	     */
	    login?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof UserPermissionType
	     */
	    email?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof UserPermissionType
	     */
	    permission?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof UserPermissionType
	     */
	    firstName?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof UserPermissionType
	     */
	    lastName?: string;
	}
	/**
	 *
	 * @export
	 * @interface UserType
	 */
	export interface UserType {
	    /**
	     *
	     * @type {number}
	     * @memberof UserType
	     */
	    id?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof UserType
	     */
	    login?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof UserType
	     */
	    email?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof UserType
	     */
	    firstName?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof UserType
	     */
	    lastName?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof UserType
	     */
	    signatureImage?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof UserType
	     */
	    signaturePassword?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof UserType
	     */
	    customerAdmin?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof UserType
	     */
	    passwordAgeInDays?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof UserType
	     */
	    badLogins?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof UserType
	     */
	    badLoginsBefore?: number;
	    /**
	     *
	     * @type {number}
	     * @memberof UserType
	     */
	    superAdmin?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof UserType
	     */
	    userStatus?: string;
	    /**
	     *
	     * @type {Array<SettingType>}
	     * @memberof UserType
	     */
	    userSettingsList?: Array<SettingType>;
	    /**
	     *
	     * @type {Array<TokenType>}
	     * @memberof UserType
	     */
	    tokenList?: Array<TokenType>;
	    /**
	     *
	     * @type {Array<number>}
	     * @memberof UserType
	     */
	    groupList?: Array<number>;
	}
	/**
	 *
	 * @export
	 * @interface UserTypeSimple
	 */
	export interface UserTypeSimple {
	    /**
	     *
	     * @type {number}
	     * @memberof UserTypeSimple
	     */
	    userId?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof UserTypeSimple
	     */
	    login?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof UserTypeSimple
	     */
	    email?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof UserTypeSimple
	     */
	    firstName?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof UserTypeSimple
	     */
	    lastName?: string;
	}
	/**
	 *
	 * @export
	 * @interface VerifiedAuth
	 */
	export interface VerifiedAuth {
	    /**
	     *
	     * @type {string}
	     * @memberof VerifiedAuth
	     */
	    VERIFIED_AUTH_SESSION_ATTRIBUTE?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof VerifiedAuth
	     */
	    AUTH_SOURCE_SESSION?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof VerifiedAuth
	     */
	    AUTH_SOURCE_SINGLE_SIGNON?: string;
	    /**
	     *
	     * @type {string}
	     * @memberof VerifiedAuth
	     */
	    login?: string;
	    /**
	     *
	     * @type {number}
	     * @memberof VerifiedAuth
	     */
	    userId?: number;
	    /**
	     *
	     * @type {string}
	     * @memberof VerifiedAuth
	     */
	    authSource?: string;
	    /**
	     *
	     * @type {boolean}
	     * @memberof VerifiedAuth
	     */
	    superAdmin?: boolean;
	    /**
	     *
	     * @type {boolean}
	     * @memberof VerifiedAuth
	     */
	    customerAdmin?: boolean;
	    /**
	     *
	     * @type {any}
	     * @memberof VerifiedAuth
	     */
	    projectMap?: any;
	}
	/**
	 * DefaultApi - fetch parameter creator
	 * @export
	 */
	export const DefaultApiFetchParamCreator: (configuration?: Configuration) => {
	    /**
	     * Permissions - No permissions needed. Valid from version 2.1 or earlier
	     * @summary Asks for the difference between A and B html exerpts, and produce the B html with annotations
	     * @param {string} [arg] json object with the arguments
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allCompareHtmlPost(arg?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Returns all info about a date
	     * @param {string} [date] (optional) an input date formatted as iso8601. If not present, current date/time is used
	     * @param {string} [dateformat] (optional) a date formatter. If not present, current date format is used
	     * @param {string} [timeformat] (optional) a date-time formatter. If not present, current date/time format is used
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allDateGet(date?: string, dateformat?: string, timeformat?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have the right key to download the file. Valid from version 2.1 or earlier
	     * @summary Retrieve one customer file. The fileno is a simple fileId. This request returns the actual file
	     * @param {number} fileno file number
	     * @param {string} key The key of the file
	     * @param {string} [disposition] (optional, from version 2.3) set to disposition&#x3D;inline to ask the server to send the disposition to &#x27;inline&#x27; instead of &#x27;attachment&#x27;
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allFileFilenoGet(fileno: number, key: string, disposition?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Retrieve list of all customer-wide files
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allFileGet(options?: any): FetchArgs;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Creates a new customer-wide file - the file should be uploaded as payload. Its mime type should be sent through the HTTP protocol.
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allFilePost(options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Retrieve license status
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allLicenseGet(options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Adds a log entry (server side).
	     * @param {string} message Message to log
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allLogPost(message: string, options?: any): FetchArgs;
	    /**
	     * Permissions - No permissions needed. Valid from version 2.1 or earlier
	     * @summary Monitoring object
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allMonitorGet(options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Find items based on a search string in all projects
	     * @param {string} search search term
	     * @param {string} id search id. Used by MatrixJira js to match queries with answers. Is returned in the output structure
	     * @param {string} [filter] (optional) applies a filter, can be negative
	     * @param {string} [fieldsOut] (optional) comma-delimited list of fields to return -  101,102 - or * for all
	     * @param {number} [labels] (optional) set to 1 to return labels in the output
	     * @param {string} [links] (optional) set to up,down to return up and down items, or only up or only down
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allNeedleGet(search: string, id: string, filter?: string, fieldsOut?: string, labels?: number, links?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - No permissions needed. Valid from version 2.2
	     * @summary The OpenAPI 3.0 definition of our REST API
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allOpenapiGet(options?: any): FetchArgs;
	    /**
	     * Permissions - No permissions needed. Valid from version 2.1 or earlier
	     * @summary Lists all reports
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allReportsGet(options?: any): FetchArgs;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Sends an email. The parameters are sent as a POST JSON payload. The arguments in this help are in fact fields in that json
	     * @param {string} to Comma-delimited list of user names to send as to
	     * @param {string} cc Comma-delimited list of user names to send as cc
	     * @param {string} subject Email subject
	     * @param {string} htmlbody HTML body
	     * @param {string} textbody text body, equivalent to the html (both are sent)
	     * @param {number} [system] (optional) if set to 1 makes it a system email (not sent by the actual user
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allSendmailPost(to: string, cc: string, subject: string, htmlbody: string, textbody: string, system?: number, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Creates a service desk issue. The parameters are sent as a POST JSON payload. The arguments in this help are in fact fields in that json
	     * @param {string} summary Summary
	     * @param {string} description Description
	     * @param {string} matrixProject Matrix project
	     * @param {string} matrixItem Matrix Item
	     * @param {string} browser Browser
	     * @param {string} log Log
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allServicedeskPost(summary: string, description: string, matrixProject: string, matrixItem: string, browser: string, log: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get all settings of a customer
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allSettingGet(options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Adds or changes a customer setting. If the value is empty, the setting will be deleted.
	     * @param {string} key setting key
	     * @param {string} value value
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allSettingPost(key: string, value: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get instance status
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allStatusGet(options?: any): FetchArgs;
	    /**
	     * Permissions - No permissions needed. Valid from version 2.1 or earlier
	     * @summary Returns all accepted time zones
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allTimezoneGet(options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.2
	     * @summary Get all todos for the current user, for all projects
	     * @param {number} [includeDone] (optional) set to 1 to include done todos and todo&#x27;s created by the user
	     * @param {number} [includeFuture] (optional) set to 1 to include future todos as well (defaults to 0)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allTodoGet(includeDone?: number, includeFuture?: number, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary WebHook
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allWebhookPost(options?: any): FetchArgs;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.2
	     * @summary Retrieves the group list
	     * @param {number} [details] (optional) -  if set to 1 returns all details -- in this case user needs to be ADMIN
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGet(details?: number, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Removes a group
	     * @param {string} groupId group Id
	     * @param {string} confirm Needs to be yes for the method to be executed
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGroupIdDelete(groupId: string, confirm: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.2
	     * @summary Retrieves details of a group
	     * @param {string} groupId group Id
	     * @param {number} [details] (optional) -  if set to 1 returns all details -- in this case user needs to be ADMIN
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGroupIdGet(groupId: string, details?: number, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Adds a group to a project (or removes it)
	     * @param {string} groupId group Id
	     * @param {string} project Project short label
	     * @param {number} [permission] Specify the (new) permission for that group in that project
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGroupIdProjectProjectPost(groupId: string, project: string, permission?: number, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Renames a group
	     * @param {string} groupId group Id
	     * @param {string} newName The new group name. Cannot be one of the existing. Must start with &#x27;group.&#x27;
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGroupIdRenamePut(groupId: string, newName: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.2
	     * @summary Adds a user to a group
	     * @param {string} groupId group Id
	     * @param {string} user user login name
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGroupIdUserUserPut(groupId: string, user: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Sets all users of a group (replacing potential former content)
	     * @param {string} groupId group Id
	     * @param {string} users List of all users members of that group, commas-separated
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGroupIdUserlistPut(groupId: string, users: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Creates a new group
	     * @param {string} groupName group name
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGroupNamePost(groupName: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Removes a user from a group
	     * @param {string} groupName group name
	     * @param {string} user user login name
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGroupNameUserUserDelete(groupName: string, user: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.3
	     * @summary Merge branch into mainline. First project is the mainline, second is the branch. The payload must contain a json object with a list of actions to perform.
	     * @param {string} mainproject mainproject
	     * @param {string} branchproject branchproject
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    mainprojectMergeBranchprojectPost(mainproject: string, branchproject: string, reason: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have QMS viewer access (or higher) to the project. Valid from version 2.2
	     * @summary Retrieves all accesses in a project (list of groups and users who have access)
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectAccessGet(project: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Retrieves all changes in a project
	     * @param {string} project Project short label
	     * @param {number} [startAt] (optional) Pagination -  starts the audit after N records
	     * @param {number} [maxResults] (optional) Pagination -  Retrieve N results per page
	     * @param {string} [deleteOnly] (optional) if set to yes, only returns actions of type delete
	     * @param {string} [tech] (optional) if set to yes, returns the underneath changes
	     * @param {number} [auditIdMin] (optional) sets a minimum ID for audits, as returned by GET calendar
	     * @param {number} [auditIdMax] (optional) sets a maximum ID for audits
	     * @param {number} [noReport] (optional) set to 1 to avoid having reports
	     * @param {number} [noImport] (optional) set to 1 to avoid having imports
	     * @param {string} [include] (optional) set to a list of actions to include (delete,undelete,add,edit,...)
	     * @param {number} [resolveRef] (optional) set to 1 to resolve item IDs into refs
	     * @param {string} [itemRef] (optional) restrict the audit to only those mentionning this item
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectAuditGet(project: string, startAt?: number, maxResults?: number, deleteOnly?: string, tech?: string, auditIdMin?: number, auditIdMax?: number, noReport?: number, noImport?: number, include?: string, resolveRef?: number, itemRef?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin. Valid from version 2.3
	     * @summary Launches a server-side branch or clone - needs the 'merge' module if actual branching
	     * @param {string} project Project short label
	     * @param {string} label Branch project label
	     * @param {string} shortLabel Branch project short label
	     * @param {number} keepPermissions 1 or 0. Defaults to 0 (with 0 the project doesn&#x27;t have any permission after branching)
	     * @param {number} keepContent 1 or 0. Defaults to 1. 0 only works without branch and without history
	     * @param {number} [branch] (optional) Set to 1 to branch (default), 0 to just copy/clone
	     * @param {number} [history] (optional) Set to 1 to branch or copy with history, defaults to 0
	     * @param {string} [tagToCreate] (optional) specify a tag (by default auto-generated)
	     * @param {string} [branchInThePastTag] (optional) specify a tag to branch in the past (needs history&#x3D;1)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectBranchPost(project: string, label: string, shortLabel: string, keepPermissions: number, keepContent: number, branch?: number, history?: number, tagToCreate?: string, branchInThePastTag?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get all dates at which a project has been modified
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCalendarGet(project: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Removes (inactivate) a category. Will fail on REPORT and FOLDER categories
	     * @param {string} project Project short label
	     * @param {string} category Category short label
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCatCategoryDelete(project: string, category: string, reason: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get details of a category
	     * @param {string} project Project short label
	     * @param {string} category Category short label
	     * @param {string} [filter] (optional) specify a filter
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCatCategoryGet(project: string, category: string, filter?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Modifies a categorie's labels, and fix the project's settings to reflect that change, OR modifies a category's order.
	     * @param {string} project Project short label
	     * @param {string} category Category short label
	     * @param {number} order The new order (for reordering)
	     * @param {string} shortLabel The new short label for that category (for renaming)
	     * @param {string} label The new long label for that category (for renaming)
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCatCategoryPut(project: string, category: string, order: number, shortLabel: string, label: string, reason: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get all settings of a category
	     * @param {string} project Project short label
	     * @param {string} category Category short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCatCategorySettingGet(project: string, category: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Adds or changes a category setting. If the value is empty, the setting will be deleted
	     * @param {string} project Project short label
	     * @param {string} category Category short label
	     * @param {string} key setting key
	     * @param {string} value value
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCatCategorySettingPost(project: string, category: string, key: string, value: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get all categories of a project
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCatGet(project: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Adds a fields in a category
	     * @param {string} project Project short label
	     * @param {string} label Field label
	     * @param {string} category Category short label
	     * @param {string} fieldType Type of field
	     * @param {string} fieldParam Parameter for the field
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCatPost(project: string, label: string, category: string, fieldType: string, fieldParam: string, reason: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Clones a project
	     * @param {string} project Project short label
	     * @param {string} label Project label
	     * @param {string} shortLabel Project short label
	     * @param {number} keepHistory 1 or 0. Defaults to 0
	     * @param {number} keepContent 1 or 0. Defaults to 0 (only the REPORT part is kept, make sense only if keepHistory is 0)
	     * @param {number} keepPermissions 1 or 0. Defaults to 0 (with 0 the project doesn&#x27;t have any permission after cloning)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectClonePost(project: string, label: string, shortLabel: string, keepHistory: number, keepContent: number, keepPermissions: number, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Asks for the difference between 2 signed documents, as a Word document. The job ID is returned as answer
	     * @param {string} project Project short label
	     * @param {string} signitem1 SIGN-xx for the first SIGN document to compare
	     * @param {string} signitem2 SIGN-xx for the 2nd SIGN document to compare
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCompareSignitem1Signitem2Post(project: string, signitem1: string, signitem2: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get a project's schema
	     * @param {string} [excludeCategories] (optional) comma-separated list of categories to exclude, like DOC,SIGN
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectConfigcheckGet(excludeCategories?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read/write access to the project - admins can impersonate. Valid from version 2.2
	     * @summary Copy items from a folder to another one
	     * @param {string} project Project short label
	     * @param {string} itemOrFolder Item reference (XXX-nn) or folder (F-XXX-nn)
	     * @param {string} targetFolder Reference of the target folder (F-categ-serial)
	     * @param {string} reason The reason why the user is doing this
	     * @param {string} [targetProject] (optional) project to copy into (by default, same project)
	     * @param {number} [copyLabels] (optional) 0 or 1. Defaults to 0
	     * @param {string} [map] (optional) mapN&#x3D;M -  map field N in source to field M in target
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCopyItemOrFolderPost(project: string, itemOrFolder: string, targetFolder: string, reason: string, targetProject?: string, copyLabels?: number, map?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Reserved to Matrix Requirements operations. Valid from version 2.1 or earlier
	     * @summary Removes completely a project (only used for unit testing). This is an actual DELETE in the database.
	     * @param {string} project Project short label
	     * @param {string} confirm Needs to be yes for the method to be executed
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectDelete(project: string, confirm: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Converts an excel file (xls, xlsx) into a XML version that we send straight back as an XML payload.
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectExcelxmlPost(project: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Executes UC or TC into XTC items
	     * @param {string} project Project short label
	     * @param {any} jSONPayload There must be a JSON as a payload. It includes all parameters AND the reason
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectExecutePost(project: string, jSONPayload: any, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Asks for an export of some items. The job ID is returned as answer
	     * @param {string} project Project short label
	     * @param {string} itemList Mandatory list of items to export.
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectExportGet(project: string, itemList: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Removes (inactivate) a field.
	     * @param {string} project Project short label
	     * @param {string} category Category short label
	     * @param {number} field The field number (like field&#x3D;502)
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectFieldCategoryDelete(project: string, category: string, field: number, reason: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get 1 field of an item. {item} has the form CATEG-number.
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} field Mandatory. Field number (faster) OR field label
	     * @param {string} [format] Optional. Format for the return. Can be text, json, html, xml or xslt. Defaults to html
	     * @param {number} [download] Optional. 1 to have in download, 0 as direct result. Defaults to 0.
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectFieldItemGet(project: string, item: string, field: string, format?: string, download?: number, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Modifies a field's label and parameter OR modifies a field's order.
	     * @param {string} project Project short label
	     * @param {number} field The field number (like field&#x3D;502)
	     * @param {string} label The new label (for renaming)
	     * @param {string} fieldParam The new parameter (for renaming)
	     * @param {number} order The new order (for reordering)
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectFieldPut(project: string, field: number, label: string, fieldParam: string, order: number, reason: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have the right key to download the file. Valid from version 2.1 or earlier
	     * @summary Retrieve one project file. The fileno is a simple fileId. This request returns the actual file
	     * @param {string} project Project short label
	     * @param {number} fileno file number
	     * @param {string} key The key of the file
	     * @param {string} [disposition] (optional, from version 2.3) set to disposition&#x3D;inline to ask the server to send the disposition to &#x27;inline&#x27; instead of &#x27;attachment&#x27;
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectFileFilenoGet(project: string, fileno: number, key: string, disposition?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Retrieve list of all files owned by a project
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectFileGet(project: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Creates a new file - the file should be uploaded as payload (or through the url argument as an alternative). It's mime type should be sent through the HTTP protocol.
	     * @param {string} project Project short label
	     * @param {string} [input_url] Optional argument -  the file could also come from an external URL. In this case there will be an error if we can&#x27;t retrieve it on the server
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectFilePost(project: string, input_url?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read/write access to the project - admins can impersonate. Valid from version 2.1 or earlier
	     * @summary Creates a new folder
	     * @param {string} project Project short label
	     * @param {string} parent Reference of the parent folder in the form F-CATEG-serial (example -  F-SPEC-17)
	     * @param {string} label folder label
	     * @param {string} reason The reason why the user is doing this
	     * @param {string} [fxField] (optional) Add one of each of these to set folder&#x27;s fields. fx is followed by the field ID (a number)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectFolderPost(project: string, parent: string, label: string, reason: string, fxField?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get list of project info -  users, settings, categories
	     * @param {string} project Project short label
	     * @param {number} [adminUI] (optional) set to adminUI&#x3D;1 to have this project data even if you are not assigned to, as an admin
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectGet(project: string, adminUI?: number, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Hides a project
	     * @param {string} project Project short label
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectHidePut(project: string, reason: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.2
	     * @summary Launches a server-side hook
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} hook name of the hook
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectHookItemPost(project: string, item: string, hook: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
	     * @summary Cleans up an input html blob according to the current html cleanup rules. The blob is passed in the POST payload. The payload must be a json object with {\"htmlToClean\" - \"x\"}
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectHtmlCleanupBlobPost(project: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
	     * @summary Get the list of items that would be changed if we applied html cleanup. You can pass a cleanup setting in the payload of the POST. If it's not there we take the customer (global) setting and force the cleanup to true
	     * @param {string} project Project short label
	     * @param {string} [categories] (optional) list of comma-delimited categories to go through, all by default
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectHtmlCleanupTestPost(project: string, categories?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Imports some items into a project
	     * @param {string} project Project short label
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectImportPost(project: string, reason: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get details of a folder. {folder} has the form F-CATEG-number[-vN].
	     * @param {string} project Project short label
	     * @param {string} folder Folder reference (F-XXX-nn)
	     * @param {number} [history] (optional) set history&#x3D;1 to retrieve list of all versions
	     * @param {string} [filter] (optional) specify a filter
	     * @param {string} [children] (optional) set to yes if you need the children as well (recursively).
	     * @param {string} [atDate] (optional) retrieves the item at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z. Not compatible with the version query -vN
	     * @param {number} [fields] (optional) set fields&#x3D;1 to retrieve list of all fields, even the empty ones
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemFolderGet(project: string, folder: string, history?: number, filter?: string, children?: string, atDate?: string, fields?: number, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Removes (inactivate) an item (or a folder). Item has the form (F-)CATEG-number. Will fail on non-empty folders
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} confirm Needs to be yes for the method to be executed IF it is a non-empty folder
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemItemDelete(project: string, item: string, confirm: string, reason: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get details of an item. {item} has the form CATEG-number[-vN].
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {number} [history] (optional) set history&#x3D;1 to retrieve list of all versions
	     * @param {number} [fields] (optional) set fields&#x3D;1 to retrieve list of all fields, even the empty ones
	     * @param {string} [filter] (optional) specify a filter
	     * @param {string} [atDate] (optional) retrieves the item at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z. Not compatible with the version query -vN
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemItemGet(project: string, item: string, history?: number, fields?: number, filter?: string, atDate?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Restores an item. Item has the form CATEG-number
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} reason The reason why the user is doing this
	     * @param {number} [at] (optional) If set, specifies that the item should be restored as it was in that version
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemItemPost(project: string, item: string, reason: string, at?: number, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Modifies an item or a folder. Item has the form CATEG-number, folders -  F-CATEG-number
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} reason The reason why the user is doing this
	     * @param {string} [title] Specify new title for the item -- if not there, keep the old title
	     * @param {string} [fxid_] Values of each field, the URI parameter name is fx followed by the ID of the field (fx501 for example)
	     * @param {string} [labels] (optional) List of labels currently applied to this element. If none is specified, will consider there are none. Should be sent as a comma-delimited list of strings
	     * @param {string} [auditAction] (optional) Specify a new verb for the audit action. Defaults to edit
	     * @param {string} [newFolder] (optional) Name of a new folder to move the item into (exclusive from title and fx arguments)
	     * @param {number} [newPosition] (optional) Indicates a new position within the newfolder. If newFolder is not specified, only changes the position. Exclusive of title and fx arguments. Position is an integer starting at 1
	     * @param {string} [filter] (optional) A filter
	     * @param {string} [linksUp] (optional) Comma-delimited (%2C)list of references to up items
	     * @param {string} [linksDown] (optional) Comma-delimited (%2C)list of references to down items
	     * @param {number} [currentVersion] (optional) will not make the change if the current version is not that one
	     * @param {number} [onlyThoseFields] (optional) when set to 1 says that the only fields to change are those passed
	     * @param {number} [onlyThoseLabels] (optional) when set to 1 says that the only labels to change are those passed. To remove a label in this case, prefix it with minus
	     * @param {number} [failOnCleanup] (optional) when set to 1 (default) says that the call will fail if any HTML cleanup is involved. With 0 it will clean and not fail
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemItemPut(project: string, item: string, reason: string, title?: string, fxid_?: string, labels?: string, auditAction?: string, newFolder?: string, newPosition?: number, filter?: string, linksUp?: string, linksDown?: string, currentVersion?: number, onlyThoseFields?: number, onlyThoseLabels?: number, failOnCleanup?: number, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read/write access to the project - admins can impersonate. Valid from version 2.1 or earlier
	     * @summary Adds an item in a folder
	     * @param {string} project Project short label
	     * @param {string} title Item title
	     * @param {string} folder Reference of the folder (F-categ-serial)
	     * @param {string} reason The reason why the user is doing this
	     * @param {string} linksUp Comma-delimited (%2C)list of references to up items
	     * @param {string} linksDown Comma-delimited (%2C)list of references to down items
	     * @param {string} [fxID_] Values of each field, the URI parameter name is fx followed by the ID of the field (fx501 for example)
	     * @param {string} [labels] (optional) List of labels currently applied to this element. If none is specified, will consider there are none. Should be sent as a comma-delimited list of strings
	     * @param {string} [author] The author (login name) - only works when superadmin is issuing this
	     * @param {number} [failOnCleanup] (optional) when set to 1 (default) says that the call will fail if any HTML cleanup is involved. With 0 it will clean and not fail
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemPost(project: string, title: string, folder: string, reason: string, linksUp: string, linksDown: string, fxID_?: string, labels?: string, author?: string, failOnCleanup?: number, options?: any): FetchArgs;
	    /**
	     * Permissions - ?. Valid from version 2.1 or earlier
	     * @summary Removes (inactivate) a link between 2 items. Items are in the form CATEG-number
	     * @param {string} project Project short label
	     * @param {string} upitem Item reference (XXX-nn) for the UP item
	     * @param {string} downitem Item reference (XXX-nn) for the DOWN item
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemlinkUpitemDownitemDelete(project: string, upitem: string, downitem: string, reason: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Adds a link between 2 items. Both items are in the form CATEG-number
	     * @param {string} project Project short label
	     * @param {string} upitem Item reference (XXX-nn) for the UP item
	     * @param {string} downitem Item reference (XXX-nn) for the DOWN item
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemlinkUpitemDownitemPost(project: string, upitem: string, downitem: string, reason: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get the list of items that are detailed in a DOC/SIGN item.
	     * @param {string} project Project short label
	     * @param {string} signitem SIGN-xx item
	     * @param {number} [detailed] Optional. When set to 1 adds a secondaryItems list in the answer. Defaults to 0.
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemlistSignitemGet(project: string, signitem: string, detailed?: number, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Retrieve list of all jobs in a project
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectJobGet(project: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin. Valid from version 2.3
	     * @summary Aborts a job.
	     * @param {string} project Project short label
	     * @param {number} job job number
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectJobJobDelete(project: string, job: number, reason: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get a job file. The job part is the jobID (a number) and the file is the fileID (a number)
	     * @param {string} project Project short label
	     * @param {number} job job number
	     * @param {number} fileno file number
	     * @param {string} [mode] (optional) set to mode&#x3D;direct to get the output in the response output instead of as a download file. This assumes the file is HTML
	     * @param {string} [format] (optional) set to format&#x3D;json to get a json output instead of XML
	     * @param {string} [disposition] (optional, from version 2.3) set to disposition&#x3D;inline to ask the server to send the disposition to &#x27;inline&#x27; instead of &#x27;attachment&#x27;
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectJobJobFilenoGet(project: string, job: number, fileno: number, mode?: string, format?: string, disposition?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get a job status, including generated files. The variable part is the jobID (a number)
	     * @param {string} project Project short label
	     * @param {number} job job number
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectJobJobGet(project: string, job: number, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.2
	     * @summary Sets the progress of a job
	     * @param {string} project Project short label
	     * @param {number} job job number
	     * @param {number} progress progress (0 to 100, 200 for error)
	     * @param {string} [status] (optional( status text
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectJobJobPost(project: string, job: number, progress: number, status?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
	     * @summary Get the label history of a project -  list of all label changes for all items
	     * @param {string} project Project short label
	     * @param {string} [itemRef] (optional) ask for just one item (the return structure is still an array in that case)
	     * @param {string} [from] (optional) date from
	     * @param {string} [to] (optional) date to - works only if you only specified a from
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectLabelhistoryGet(project: string, itemRef?: string, from?: string, to?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
	     * @summary Get the merge history of a project - needs the 'merge' module
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectMergehistoryGet(project: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
	     * @summary Get the merge information - needs the 'merge' module
	     * @param {string} project Project short label
	     * @param {string} [excludeCategories] (optional) comma-delimited list of categories to exclude
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectMergeinfoGet(project: string, excludeCategories?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Move items into this folder
	     * @param {string} project Project short label
	     * @param {string} folder Folder reference (F-XXX-nn)
	     * @param {string} reason The reason why the user is doing this
	     * @param {string} [items] List of items to move in
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectMoveinFolderPost(project: string, folder: string, reason: string, items?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Find items based on a search string in one project
	     * @param {string} project Project short label
	     * @param {string} search search term
	     * @param {string} id search id. Used by MatrixJira js to match queries with answers. Is returned in the output structure
	     * @param {string} [filter] (optional) applies a filter, can be negative
	     * @param {string} [fieldsOut] (optional) comma-delimited list of fields to return -  101,102 - or * for all
	     * @param {number} [labels] (optional) set to 1 to return labels in the output
	     * @param {number} [treeOrder] (optional) set to 1 to return items in tree order (otherwise it&#x27;s project,category,serial)
	     * @param {string} [links] (optional) set to up,down to return up and down items, or only up or only down
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectNeedleGet(project: string, search: string, id: string, filter?: string, fieldsOut?: string, labels?: number, treeOrder?: number, links?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Adds a category to a project
	     * @param {string} project Project short label
	     * @param {string} label Category label
	     * @param {string} shortLabel Category short label
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectPost(project: string, label: string, shortLabel: string, reason: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Publishes an item. Item has the form PUB-nnn
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} reason reason for the publication
	     * @param {string} [trainingFor] (optional) list of items for which we need to add training. If list is not there, all trainings will be generated
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectPublishItemPost(project: string, item: string, reason: string, trainingFor?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) for the reports, read/write for the signed reports. Valid from version 2.1 or earlier
	     * @summary Asks for a new report. The job ID is returned as answer. {report} can be REPORT-n, DOC-n, SIGN-n or a report name.To follow the progress of the job, the GET /{project}/job/{jobid} can be called
	     * @param {string} project Project short label
	     * @param {string} report name of the report
	     * @param {string} isSignedReport If set to true, means the report needs to generate a signed record
	     * @param {string} includeSignatures List of comma separated users who need to sign
	     * @param {string} newTitle New title for the SIGN- item that is generated (only valid for isSignedReport)
	     * @param {string} copyFields List of from-to fields (123,456),(124,457) that we can use to generate the fields in the SIGN record (only valid for isSignedReport)
	     * @param {string} [itemList] (optional) list of items to use in the report. By default all categories are used
	     * @param {string} [input_url] (optional) url to generate in the filter
	     * @param {string} [resturl] (optional) REST url to generate in the filter
	     * @param {string} [format] (optional) format -  html (default), pdf, docx, odt, xml, zipdocx, zippdf or package (from 2.2)
	     * @param {string} [filter] (optional) specify a filter. Can be negative filters
	     * @param {number} [useOld] (optional) ask to use the old report engine (pre 1.11) if set to 1.
	     * @param {string} [atDate] (optional) generates the report at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectReportReportPost(project: string, report: string, isSignedReport: string, includeSignatures: string, newTitle: string, copyFields: string, itemList?: string, input_url?: string, resturl?: string, format?: string, filter?: string, useOld?: number, atDate?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get a project's schema
	     * @param {string} project Project short label
	     * @param {number} [simple] (optional) set to simple&#x3D;1 to have a simpler output (no fields, round shape)
	     * @param {string} [excludeCategories] (optional) comma-separated list of categories to exclude, like DOC,SIGN
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectSchemaGet(project: string, simple?: number, excludeCategories?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Get all settings of a project
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectSettingGet(project: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Adds or changes a project setting. If the value is empty, the setting will be deleted.
	     * @param {string} project Project short label
	     * @param {string} key setting key
	     * @param {string} value value
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectSettingPost(project: string, key: string, value: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Signs an item. Item has the form SIGN-nnn
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} password signature password - the user who is signing is the one who is logged in
	     * @param {string} [acceptComments] (optional) adds an acceptance comment
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectSignItemPost(project: string, item: string, password: string, acceptComments?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Edit the signature parts
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} rejectSign The reason why the user is rejecting the signature
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectSignItemPut(project: string, item: string, rejectSign: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Asks for a new report. The job ID is returned as answer
	     * @param {string} project Project short label
	     * @param {string} [input_url] (optional) url to generate in the filter
	     * @param {string} [resturl] (optional) REST url to generate in the filter
	     * @param {string} [format] (optional) format -  html (default), pdf, docx, odt, xml, zipdocx or zippdf
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectSignedreportSIGNNPost(project: string, input_url?: string, resturl?: string, format?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Get all tags of a project. Works on any project if user is admin
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectTagGet(project: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Adds a tag to a project
	     * @param {string} project Project short label
	     * @param {string} label Tag label. Must be unique within a project
	     * @param {number} auditId Id of the audit this tag is based on
	     * @param {string} type Type of tag (default -  tag)
	     * @param {string} comments Free optional comment
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectTagPost(project: string, label: string, auditId: number, type: string, comments: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.2
	     * @summary Get all todos for the current user, for oneproject
	     * @param {string} project Project short label
	     * @param {string} [itemRef] (optional) set to an item to have all todos linked to an item, regardless of the user
	     * @param {number} [includeDone] (optional) set to 1 to include done todos and todo&#x27;s created by the user
	     * @param {number} [includeAllUsers] (optional) set to 1 to include all todos for all users
	     * @param {number} [includeFuture] (optional) set to 1 to include future todos as well (defaults to 0)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectTodoGet(project: string, itemRef?: string, includeDone?: number, includeAllUsers?: number, includeFuture?: number, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.2
	     * @summary Creates a todo on an item (note that you only need read access for this POST method) for you or others
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} text The todo reason
	     * @param {number} [fieldId] (optional) If set, specifies that the todo is related to that field (review, ...)
	     * @param {string} [logins] (optional) If set, a list of user logins or groups to which these todo apply
	     * @param {string} [todoType] (optional) The todo type -  &#x27;user&#x27; by default
	     * @param {string} [atDate] (optional) a date in the future for reminders
	     * @param {number} [auto] (optional) set to 1 to create an auto-notification (0 by default)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectTodoItemPost(project: string, item: string, text: string, fieldId?: number, logins?: string, todoType?: string, atDate?: string, auto?: number, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.2
	     * @summary Removes (mark as done) a todo.
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectTodoNDelete(project: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Touches (set to same date) an item or folder
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} reason The reason why the user is doing this
	     * @param {number} [nbLayers] (optional) Number of layers -- 1 by default
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectTouchItemPut(project: string, item: string, reason: string, nbLayers?: number, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get full tree
	     * @param {string} project Project short label
	     * @param {string} [fancy] (optional) returns a fancy tree
	     * @param {string} [filter] (optional) applies a filter
	     * @param {string} [atDate] (optional) generates the tree at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectTreeGet(project: string, fancy?: string, filter?: string, atDate?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Unhides a project.
	     * @param {string} project Project short label
	     * @param {string} newShort The new project short name to use
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectUnhidePut(project: string, newShort: string, reason: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Converts a word document to an HTML, with images pointing to uploaded files on the server
	     * @param {string} project Project short label
	     * @param {string} reason The reason why the user is doing this
	     * @param {number} [fileNo] If specified, means that the conversion is from an already uploaded file. Otherwise the file must be uploaded as body of this call
	     * @param {string} [targetDocumentFolder] target document folder (in this case creates a document)
	     * @param {number} [useAsField] set to 1 to have this docx used as a field. In this case the return value is the html equivalent, with some meta
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectWordconvertPost(project: string, reason: string, fileNo?: number, targetDocumentFolder?: string, useAsField?: number, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Get list of all projects, all settings and current user, all todos and JIRA meta create object
	     * @param {number} [adminUI] (optional) set to adminUI&#x3D;1 to have all projects even the ones you are not assigned to, as an admin
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    rootGet(adminUI?: number, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Creates a new project. Either the full project is sent as XML payload, or the label and shortLabel are given. If uploading data for a whole project, label and shortLabel are optional but overwrite the XML content if present. Branching can be done with an audit report as payload, and branch* must be defined in that case
	     * @param {string} label Project label
	     * @param {string} shortLabel Project short label
	     * @param {string} [overwrite] Must be set to yes if you&#x27;re overwriting an existing project
	     * @param {string} [branchLabel] Must be set to branch (optional)
	     * @param {string} [branchTag] Must be set to branch, and match a tag in the audit export (optional)
	     * @param {string} [branchComment] Comment for the branch (optional)
	     * @param {string} [branchBaseProjectLabel] Label of the base Project (optional)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    rootPost(label: string, shortLabel: string, overwrite?: string, importUsers?: string, branchLabel?: string, branchTag?: string, branchComment?: string, branchBaseProjectLabel?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.1 or earlier
	     * @summary Retrieves the user list
	     * @param {string} details (optional) -  if set to 1 returns all details
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userGet(details: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Creates a new user. Arguments are either a set of arguments or json
	     * @param {string} login User login name
	     * @param {string} email User email
	     * @param {string} password User password in clear
	     * @param {string} json A json struct with login, email, password, first, last, signatureImage(int), signaturePassword, admin(int)
	     * @param {string} [first] User first name (optional)
	     * @param {string} [last] User last name (optional)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userPost(login: string, email: string, password: string, json: string, first?: string, last?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1 or earlier
	     * @summary Retrieves all actions of a user
	     * @param {string} user user login name
	     * @param {number} [startAt] (optional) Pagination -  starts the audit after N records
	     * @param {number} [maxResults] (optional) Pagination -  Retrieve N results per page
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserAuditGet(user: string, startAt?: number, maxResults?: number, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1 or earlier
	     * @summary Check a user's password
	     * @param {string} user user login name
	     * @param {string} password Asks for a check of the password1
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserCheckGet(user: string, password: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1 or earlier
	     * @summary Check a user's password
	     * @param {string} user user login name
	     * @param {string} password Asks for a check of the password1
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserCheckPost(user: string, password: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Reserved to Matrix Requirements operations. Valid from version 2.1 or earlier
	     * @summary Removes completely a user (only used for unit testing)
	     * @param {string} user user login name
	     * @param {string} confirm Needs to be yes for the method to be executed
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserDelete(user: string, confirm: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1 or earlier
	     * @summary Retrieves full details of a user
	     * @param {string} user user login name
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserGet(user: string, options?: any): FetchArgs;
	    /**
	     * Permissions - No permissions needed. Valid from version 2.1 or earlier
	     * @summary Login
	     * @param {string} user user login name
	     * @param {string} password password in clear
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserLoginPost(user: string, password: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Logout
	     * @param {string} user user login name
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserLogoutPost(user: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.1 or earlier
	     * @summary Sets a new password for an account that has a password_reset token in place (the {user} in the URL doesn't matter)
	     * @param {string} user user login name
	     * @param {string} token password_reset token
	     * @param {string} password New password to use from now on
	     * @param {string} [signaturePassword] (optional) New password to use from now on for signatures
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserPasswordResetPost(user: string, token: string, password: string, signaturePassword?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Adds a user to a project
	     * @param {string} user user login name
	     * @param {string} project Project short label
	     * @param {number} permission 0 for no access, 1 for readonly, 2 for read/write (default), 3 for admin, 4 for visitor
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserProjectPost(user: string, project: string, permission: number, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Edits the user permissions in a project. If permission is 0, it means the user has no longer access (but we retain its records for audit purposes)
	     * @param {string} user user login name
	     * @param {string} project Project short label
	     * @param {number} permission 0 for no access, 1 for readonly, 2 for read/write (default), 3 for admin
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserProjectPut(user: string, project: string, permission: number, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1 or earlier
	     * @summary Retrieves all projects a user has access to
	     * @param {string} user user login name
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserProjectsGet(user: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.1 or earlier
	     * @summary Edits the user details. Arguments are all separated or a single json argument. Regular users can only change their signature and passwords.
	     * @param {string} user user login name
	     * @param {string} email User new email
	     * @param {string} password User new password in clear
	     * @param {string} json A json struct with login, email, password, first, last, signatureImage(int), signaturePassword, admin(int)
	     * @param {string} [first] User first name (optional)
	     * @param {string} [last] User last name (optional)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserPut(user: string, email: string, password: string, json: string, first?: string, last?: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Renames a user login
	     * @param {string} user user login name
	     * @param {string} newLogin The new login name. Cannot be one of the existing
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserRenamePut(user: string, newLogin: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.1 or earlier
	     * @summary Adds or deletes a user setting.
	     * @param {string} user user login name
	     * @param {string} key Name of the setting
	     * @param {string} value Value of the setting. If empty, deletes the setting.
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserSettingPost(user: string, key: string, value: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Sets the new status of the user. Can be normal,blocked or deleted
	     * @param {string} user user login name
	     * @param {string} status Can be normal,blocked or deleted
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserStatusPut(user: string, status: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.1 or earlier
	     * @summary Removes a user token
	     * @param {string} user user login name
	     * @param {string} value The token to be removed
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserTokenDelete(user: string, value: string, options?: any): FetchArgs;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.1 or earlier
	     * @summary Adds a token for a user
	     * @param {string} user user login name
	     * @param {string} purpose Purpose of the token. Not checked. Should contain either \&quot;password_reset\&quot; or \&quot;oauth\&quot;
	     * @param {string} [value] Value of the token - by default generated by this call
	     * @param {string} [reason] Free text explain where the token will be used (URL or others). Should be set for oauth, not needed for others
	     * @param {number} [validity] Validity of the token in hours - if not set, doesn&#x27;t expire
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserTokenPost(user: string, purpose: string, value?: string, reason?: string, validity?: number, options?: any): FetchArgs;
	};
	/**
	 * DefaultApi - functional programming interface
	 * @export
	 */
	export const DefaultApiFp: (configuration?: Configuration) => {
	    /**
	     * Permissions - No permissions needed. Valid from version 2.1 or earlier
	     * @summary Asks for the difference between A and B html exerpts, and produce the B html with annotations
	     * @param {string} [arg] json object with the arguments
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allCompareHtmlPost(arg?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<HtmlCompareResult>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Returns all info about a date
	     * @param {string} [date] (optional) an input date formatted as iso8601. If not present, current date/time is used
	     * @param {string} [dateformat] (optional) a date formatter. If not present, current date format is used
	     * @param {string} [timeformat] (optional) a date-time formatter. If not present, current date/time format is used
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allDateGet(date?: string, dateformat?: string, timeformat?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<GetDateAck>;
	    /**
	     * Permissions - Must have the right key to download the file. Valid from version 2.1 or earlier
	     * @summary Retrieve one customer file. The fileno is a simple fileId. This request returns the actual file
	     * @param {number} fileno file number
	     * @param {string} key The key of the file
	     * @param {string} [disposition] (optional, from version 2.3) set to disposition&#x3D;inline to ask the server to send the disposition to &#x27;inline&#x27; instead of &#x27;attachment&#x27;
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allFileFilenoGet(fileno: number, key: string, disposition?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Retrieve list of all customer-wide files
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allFileGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<GetProjectFileListAck>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Creates a new customer-wide file - the file should be uploaded as payload. Its mime type should be sent through the HTTP protocol.
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allFilePost(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<AddFileAck>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Retrieve license status
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allLicenseGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<LicenseStatus>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Adds a log entry (server side).
	     * @param {string} message Message to log
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allLogPost(message: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - No permissions needed. Valid from version 2.1 or earlier
	     * @summary Monitoring object
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allMonitorGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<GetMonitorAck>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Find items based on a search string in all projects
	     * @param {string} search search term
	     * @param {string} id search id. Used by MatrixJira js to match queries with answers. Is returned in the output structure
	     * @param {string} [filter] (optional) applies a filter, can be negative
	     * @param {string} [fieldsOut] (optional) comma-delimited list of fields to return -  101,102 - or * for all
	     * @param {number} [labels] (optional) set to 1 to return labels in the output
	     * @param {string} [links] (optional) set to up,down to return up and down items, or only up or only down
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allNeedleGet(search: string, id: string, filter?: string, fieldsOut?: string, labels?: number, links?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<TrimNeedle>;
	    /**
	     * Permissions - No permissions needed. Valid from version 2.2
	     * @summary The OpenAPI 3.0 definition of our REST API
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allOpenapiGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - No permissions needed. Valid from version 2.1 or earlier
	     * @summary Lists all reports
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allReportsGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<GetReportsAck>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Sends an email. The parameters are sent as a POST JSON payload. The arguments in this help are in fact fields in that json
	     * @param {string} to Comma-delimited list of user names to send as to
	     * @param {string} cc Comma-delimited list of user names to send as cc
	     * @param {string} subject Email subject
	     * @param {string} htmlbody HTML body
	     * @param {string} textbody text body, equivalent to the html (both are sent)
	     * @param {number} [system] (optional) if set to 1 makes it a system email (not sent by the actual user
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allSendmailPost(to: string, cc: string, subject: string, htmlbody: string, textbody: string, system?: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Creates a service desk issue. The parameters are sent as a POST JSON payload. The arguments in this help are in fact fields in that json
	     * @param {string} summary Summary
	     * @param {string} description Description
	     * @param {string} matrixProject Matrix project
	     * @param {string} matrixItem Matrix Item
	     * @param {string} browser Browser
	     * @param {string} log Log
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allServicedeskPost(summary: string, description: string, matrixProject: string, matrixItem: string, browser: string, log: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get all settings of a customer
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allSettingGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<GetSettingAck>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Adds or changes a customer setting. If the value is empty, the setting will be deleted.
	     * @param {string} key setting key
	     * @param {string} value value
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allSettingPost(key: string, value: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get instance status
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allStatusGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ServerStatus>;
	    /**
	     * Permissions - No permissions needed. Valid from version 2.1 or earlier
	     * @summary Returns all accepted time zones
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allTimezoneGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<string>>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.2
	     * @summary Get all todos for the current user, for all projects
	     * @param {number} [includeDone] (optional) set to 1 to include done todos and todo&#x27;s created by the user
	     * @param {number} [includeFuture] (optional) set to 1 to include future todos as well (defaults to 0)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allTodoGet(includeDone?: number, includeFuture?: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<GetTodosAck>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary WebHook
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allWebhookPost(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.2
	     * @summary Retrieves the group list
	     * @param {number} [details] (optional) -  if set to 1 returns all details -- in this case user needs to be ADMIN
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGet(details?: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<GetGroupListAck>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Removes a group
	     * @param {string} groupId group Id
	     * @param {string} confirm Needs to be yes for the method to be executed
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGroupIdDelete(groupId: string, confirm: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.2
	     * @summary Retrieves details of a group
	     * @param {string} groupId group Id
	     * @param {number} [details] (optional) -  if set to 1 returns all details -- in this case user needs to be ADMIN
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGroupIdGet(groupId: string, details?: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<GroupType>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Adds a group to a project (or removes it)
	     * @param {string} groupId group Id
	     * @param {string} project Project short label
	     * @param {number} [permission] Specify the (new) permission for that group in that project
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGroupIdProjectProjectPost(groupId: string, project: string, permission?: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Renames a group
	     * @param {string} groupId group Id
	     * @param {string} newName The new group name. Cannot be one of the existing. Must start with &#x27;group.&#x27;
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGroupIdRenamePut(groupId: string, newName: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.2
	     * @summary Adds a user to a group
	     * @param {string} groupId group Id
	     * @param {string} user user login name
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGroupIdUserUserPut(groupId: string, user: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Sets all users of a group (replacing potential former content)
	     * @param {string} groupId group Id
	     * @param {string} users List of all users members of that group, commas-separated
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGroupIdUserlistPut(groupId: string, users: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Creates a new group
	     * @param {string} groupName group name
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGroupNamePost(groupName: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Removes a user from a group
	     * @param {string} groupName group name
	     * @param {string} user user login name
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGroupNameUserUserDelete(groupName: string, user: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.3
	     * @summary Merge branch into mainline. First project is the mainline, second is the branch. The payload must contain a json object with a list of actions to perform.
	     * @param {string} mainproject mainproject
	     * @param {string} branchproject branchproject
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    mainprojectMergeBranchprojectPost(mainproject: string, branchproject: string, reason: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have QMS viewer access (or higher) to the project. Valid from version 2.2
	     * @summary Retrieves all accesses in a project (list of groups and users who have access)
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectAccessGet(project: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<GetAccessAck>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Retrieves all changes in a project
	     * @param {string} project Project short label
	     * @param {number} [startAt] (optional) Pagination -  starts the audit after N records
	     * @param {number} [maxResults] (optional) Pagination -  Retrieve N results per page
	     * @param {string} [deleteOnly] (optional) if set to yes, only returns actions of type delete
	     * @param {string} [tech] (optional) if set to yes, returns the underneath changes
	     * @param {number} [auditIdMin] (optional) sets a minimum ID for audits, as returned by GET calendar
	     * @param {number} [auditIdMax] (optional) sets a maximum ID for audits
	     * @param {number} [noReport] (optional) set to 1 to avoid having reports
	     * @param {number} [noImport] (optional) set to 1 to avoid having imports
	     * @param {string} [include] (optional) set to a list of actions to include (delete,undelete,add,edit,...)
	     * @param {number} [resolveRef] (optional) set to 1 to resolve item IDs into refs
	     * @param {string} [itemRef] (optional) restrict the audit to only those mentionning this item
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectAuditGet(project: string, startAt?: number, maxResults?: number, deleteOnly?: string, tech?: string, auditIdMin?: number, auditIdMax?: number, noReport?: number, noImport?: number, include?: string, resolveRef?: number, itemRef?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<TrimAuditList>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.3
	     * @summary Launches a server-side branch or clone - needs the 'merge' module if actual branching
	     * @param {string} project Project short label
	     * @param {string} label Branch project label
	     * @param {string} shortLabel Branch project short label
	     * @param {number} keepPermissions 1 or 0. Defaults to 0 (with 0 the project doesn&#x27;t have any permission after branching)
	     * @param {number} keepContent 1 or 0. Defaults to 1. 0 only works without branch and without history
	     * @param {number} [branch] (optional) Set to 1 to branch (default), 0 to just copy/clone
	     * @param {number} [history] (optional) Set to 1 to branch or copy with history, defaults to 0
	     * @param {string} [tagToCreate] (optional) specify a tag (by default auto-generated)
	     * @param {string} [branchInThePastTag] (optional) specify a tag to branch in the past (needs history&#x3D;1)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectBranchPost(project: string, label: string, shortLabel: string, keepPermissions: number, keepContent: number, branch?: number, history?: number, tagToCreate?: string, branchInThePastTag?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get all dates at which a project has been modified
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCalendarGet(project: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<CalendarType>>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Removes (inactivate) a category. Will fail on REPORT and FOLDER categories
	     * @param {string} project Project short label
	     * @param {string} category Category short label
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCatCategoryDelete(project: string, category: string, reason: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get details of a category
	     * @param {string} project Project short label
	     * @param {string} category Category short label
	     * @param {string} [filter] (optional) specify a filter
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCatCategoryGet(project: string, category: string, filter?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CategoryFull>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Modifies a categorie's labels, and fix the project's settings to reflect that change, OR modifies a category's order.
	     * @param {string} project Project short label
	     * @param {string} category Category short label
	     * @param {number} order The new order (for reordering)
	     * @param {string} shortLabel The new short label for that category (for renaming)
	     * @param {string} label The new long label for that category (for renaming)
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCatCategoryPut(project: string, category: string, order: number, shortLabel: string, label: string, reason: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get all settings of a category
	     * @param {string} project Project short label
	     * @param {string} category Category short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCatCategorySettingGet(project: string, category: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<GetSettingAck>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Adds or changes a category setting. If the value is empty, the setting will be deleted
	     * @param {string} project Project short label
	     * @param {string} category Category short label
	     * @param {string} key setting key
	     * @param {string} value value
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCatCategorySettingPost(project: string, category: string, key: string, value: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get all categories of a project
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCatGet(project: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<GetProjectStructAck>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Adds a fields in a category
	     * @param {string} project Project short label
	     * @param {string} label Field label
	     * @param {string} category Category short label
	     * @param {string} fieldType Type of field
	     * @param {string} fieldParam Parameter for the field
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCatPost(project: string, label: string, category: string, fieldType: string, fieldParam: string, reason: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Clones a project
	     * @param {string} project Project short label
	     * @param {string} label Project label
	     * @param {string} shortLabel Project short label
	     * @param {number} keepHistory 1 or 0. Defaults to 0
	     * @param {number} keepContent 1 or 0. Defaults to 0 (only the REPORT part is kept, make sense only if keepHistory is 0)
	     * @param {number} keepPermissions 1 or 0. Defaults to 0 (with 0 the project doesn&#x27;t have any permission after cloning)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectClonePost(project: string, label: string, shortLabel: string, keepHistory: number, keepContent: number, keepPermissions: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Asks for the difference between 2 signed documents, as a Word document. The job ID is returned as answer
	     * @param {string} project Project short label
	     * @param {string} signitem1 SIGN-xx for the first SIGN document to compare
	     * @param {string} signitem2 SIGN-xx for the 2nd SIGN document to compare
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCompareSignitem1Signitem2Post(project: string, signitem1: string, signitem2: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get a project's schema
	     * @param {string} [excludeCategories] (optional) comma-separated list of categories to exclude, like DOC,SIGN
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectConfigcheckGet(excludeCategories?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read/write access to the project - admins can impersonate. Valid from version 2.2
	     * @summary Copy items from a folder to another one
	     * @param {string} project Project short label
	     * @param {string} itemOrFolder Item reference (XXX-nn) or folder (F-XXX-nn)
	     * @param {string} targetFolder Reference of the target folder (F-categ-serial)
	     * @param {string} reason The reason why the user is doing this
	     * @param {string} [targetProject] (optional) project to copy into (by default, same project)
	     * @param {number} [copyLabels] (optional) 0 or 1. Defaults to 0
	     * @param {string} [map] (optional) mapN&#x3D;M -  map field N in source to field M in target
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCopyItemOrFolderPost(project: string, itemOrFolder: string, targetFolder: string, reason: string, targetProject?: string, copyLabels?: number, map?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Reserved to Matrix Requirements operations. Valid from version 2.1 or earlier
	     * @summary Removes completely a project (only used for unit testing). This is an actual DELETE in the database.
	     * @param {string} project Project short label
	     * @param {string} confirm Needs to be yes for the method to be executed
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectDelete(project: string, confirm: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Converts an excel file (xls, xlsx) into a XML version that we send straight back as an XML payload.
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectExcelxmlPost(project: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Executes UC or TC into XTC items
	     * @param {string} project Project short label
	     * @param {any} jSONPayload There must be a JSON as a payload. It includes all parameters AND the reason
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectExecutePost(project: string, jSONPayload: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<FolderAnswer>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Asks for an export of some items. The job ID is returned as answer
	     * @param {string} project Project short label
	     * @param {string} itemList Mandatory list of items to export.
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectExportGet(project: string, itemList: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ExportItemsAck>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Removes (inactivate) a field.
	     * @param {string} project Project short label
	     * @param {string} category Category short label
	     * @param {number} field The field number (like field&#x3D;502)
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectFieldCategoryDelete(project: string, category: string, field: number, reason: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get 1 field of an item. {item} has the form CATEG-number.
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} field Mandatory. Field number (faster) OR field label
	     * @param {string} [format] Optional. Format for the return. Can be text, json, html, xml or xslt. Defaults to html
	     * @param {number} [download] Optional. 1 to have in download, 0 as direct result. Defaults to 0.
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectFieldItemGet(project: string, item: string, field: string, format?: string, download?: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Modifies a field's label and parameter OR modifies a field's order.
	     * @param {string} project Project short label
	     * @param {number} field The field number (like field&#x3D;502)
	     * @param {string} label The new label (for renaming)
	     * @param {string} fieldParam The new parameter (for renaming)
	     * @param {number} order The new order (for reordering)
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectFieldPut(project: string, field: number, label: string, fieldParam: string, order: number, reason: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have the right key to download the file. Valid from version 2.1 or earlier
	     * @summary Retrieve one project file. The fileno is a simple fileId. This request returns the actual file
	     * @param {string} project Project short label
	     * @param {number} fileno file number
	     * @param {string} key The key of the file
	     * @param {string} [disposition] (optional, from version 2.3) set to disposition&#x3D;inline to ask the server to send the disposition to &#x27;inline&#x27; instead of &#x27;attachment&#x27;
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectFileFilenoGet(project: string, fileno: number, key: string, disposition?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Retrieve list of all files owned by a project
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectFileGet(project: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<GetProjectFileListAck>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Creates a new file - the file should be uploaded as payload (or through the url argument as an alternative). It's mime type should be sent through the HTTP protocol.
	     * @param {string} project Project short label
	     * @param {string} [url] Optional argument -  the file could also come from an external URL. In this case there will be an error if we can&#x27;t retrieve it on the server
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectFilePost(project: string, url?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<AddFileAck>;
	    /**
	     * Permissions - Must have read/write access to the project - admins can impersonate. Valid from version 2.1 or earlier
	     * @summary Creates a new folder
	     * @param {string} project Project short label
	     * @param {string} parent Reference of the parent folder in the form F-CATEG-serial (example -  F-SPEC-17)
	     * @param {string} label folder label
	     * @param {string} reason The reason why the user is doing this
	     * @param {string} [fxField] (optional) Add one of each of these to set folder&#x27;s fields. fx is followed by the field ID (a number)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectFolderPost(project: string, parent: string, label: string, reason: string, fxField?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<AddItemAck>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get list of project info -  users, settings, categories
	     * @param {string} project Project short label
	     * @param {number} [adminUI] (optional) set to adminUI&#x3D;1 to have this project data even if you are not assigned to, as an admin
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectGet(project: string, adminUI?: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ProjectInfo>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Hides a project
	     * @param {string} project Project short label
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectHidePut(project: string, reason: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.2
	     * @summary Launches a server-side hook
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} hook name of the hook
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectHookItemPost(project: string, item: string, hook: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
	     * @summary Cleans up an input html blob according to the current html cleanup rules. The blob is passed in the POST payload. The payload must be a json object with {\"htmlToClean\" - \"x\"}
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectHtmlCleanupBlobPost(project: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<GetHtmlBlob>>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
	     * @summary Get the list of items that would be changed if we applied html cleanup. You can pass a cleanup setting in the payload of the POST. If it's not there we take the customer (global) setting and force the cleanup to true
	     * @param {string} project Project short label
	     * @param {string} [categories] (optional) list of comma-delimited categories to go through, all by default
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectHtmlCleanupTestPost(project: string, categories?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<HtmlTestCleanup>>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Imports some items into a project
	     * @param {string} project Project short label
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectImportPost(project: string, reason: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get details of a folder. {folder} has the form F-CATEG-number[-vN].
	     * @param {string} project Project short label
	     * @param {string} folder Folder reference (F-XXX-nn)
	     * @param {number} [history] (optional) set history&#x3D;1 to retrieve list of all versions
	     * @param {string} [filter] (optional) specify a filter
	     * @param {string} [children] (optional) set to yes if you need the children as well (recursively).
	     * @param {string} [atDate] (optional) retrieves the item at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z. Not compatible with the version query -vN
	     * @param {number} [fields] (optional) set fields&#x3D;1 to retrieve list of all fields, even the empty ones
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemFolderGet(project: string, folder: string, history?: number, filter?: string, children?: string, atDate?: string, fields?: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<TrimFolder>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Removes (inactivate) an item (or a folder). Item has the form (F-)CATEG-number. Will fail on non-empty folders
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} confirm Needs to be yes for the method to be executed IF it is a non-empty folder
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemItemDelete(project: string, item: string, confirm: string, reason: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get details of an item. {item} has the form CATEG-number[-vN].
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {number} [history] (optional) set history&#x3D;1 to retrieve list of all versions
	     * @param {number} [fields] (optional) set fields&#x3D;1 to retrieve list of all fields, even the empty ones
	     * @param {string} [filter] (optional) specify a filter
	     * @param {string} [atDate] (optional) retrieves the item at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z. Not compatible with the version query -vN
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemItemGet(project: string, item: string, history?: number, fields?: number, filter?: string, atDate?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<TrimItem>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Restores an item. Item has the form CATEG-number
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} reason The reason why the user is doing this
	     * @param {number} [at] (optional) If set, specifies that the item should be restored as it was in that version
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemItemPost(project: string, item: string, reason: string, at?: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UndeleteAnswer>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Modifies an item or a folder. Item has the form CATEG-number, folders -  F-CATEG-number
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} reason The reason why the user is doing this
	     * @param {string} [title] Specify new title for the item -- if not there, keep the old title
	     * @param {string} [fxid_] Values of each field, the URI parameter name is fx followed by the ID of the field (fx501 for example)
	     * @param {string} [labels] (optional) List of labels currently applied to this element. If none is specified, will consider there are none. Should be sent as a comma-delimited list of strings
	     * @param {string} [auditAction] (optional) Specify a new verb for the audit action. Defaults to edit
	     * @param {string} [newFolder] (optional) Name of a new folder to move the item into (exclusive from title and fx arguments)
	     * @param {number} [newPosition] (optional) Indicates a new position within the newfolder. If newFolder is not specified, only changes the position. Exclusive of title and fx arguments. Position is an integer starting at 1
	     * @param {string} [filter] (optional) A filter
	     * @param {string} [linksUp] (optional) Comma-delimited (%2C)list of references to up items
	     * @param {string} [linksDown] (optional) Comma-delimited (%2C)list of references to down items
	     * @param {number} [currentVersion] (optional) will not make the change if the current version is not that one
	     * @param {number} [onlyThoseFields] (optional) when set to 1 says that the only fields to change are those passed
	     * @param {number} [onlyThoseLabels] (optional) when set to 1 says that the only labels to change are those passed. To remove a label in this case, prefix it with minus
	     * @param {number} [failOnCleanup] (optional) when set to 1 (default) says that the call will fail if any HTML cleanup is involved. With 0 it will clean and not fail
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemItemPut(project: string, item: string, reason: string, title?: string, fxid_?: string, labels?: string, auditAction?: string, newFolder?: string, newPosition?: number, filter?: string, linksUp?: string, linksDown?: string, currentVersion?: number, onlyThoseFields?: number, onlyThoseLabels?: number, failOnCleanup?: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<TrimItem>;
	    /**
	     * Permissions - Must have read/write access to the project - admins can impersonate. Valid from version 2.1 or earlier
	     * @summary Adds an item in a folder
	     * @param {string} project Project short label
	     * @param {string} title Item title
	     * @param {string} folder Reference of the folder (F-categ-serial)
	     * @param {string} reason The reason why the user is doing this
	     * @param {string} linksUp Comma-delimited (%2C)list of references to up items
	     * @param {string} linksDown Comma-delimited (%2C)list of references to down items
	     * @param {string} [fxID_] Values of each field, the URI parameter name is fx followed by the ID of the field (fx501 for example)
	     * @param {string} [labels] (optional) List of labels currently applied to this element. If none is specified, will consider there are none. Should be sent as a comma-delimited list of strings
	     * @param {string} [author] The author (login name) - only works when superadmin is issuing this
	     * @param {number} [failOnCleanup] (optional) when set to 1 (default) says that the call will fail if any HTML cleanup is involved. With 0 it will clean and not fail
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemPost(project: string, title: string, folder: string, reason: string, linksUp: string, linksDown: string, fxID_?: string, labels?: string, author?: string, failOnCleanup?: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<AddItemAck>;
	    /**
	     * Permissions - ?. Valid from version 2.1 or earlier
	     * @summary Removes (inactivate) a link between 2 items. Items are in the form CATEG-number
	     * @param {string} project Project short label
	     * @param {string} upitem Item reference (XXX-nn) for the UP item
	     * @param {string} downitem Item reference (XXX-nn) for the DOWN item
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemlinkUpitemDownitemDelete(project: string, upitem: string, downitem: string, reason: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Adds a link between 2 items. Both items are in the form CATEG-number
	     * @param {string} project Project short label
	     * @param {string} upitem Item reference (XXX-nn) for the UP item
	     * @param {string} downitem Item reference (XXX-nn) for the DOWN item
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemlinkUpitemDownitemPost(project: string, upitem: string, downitem: string, reason: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get the list of items that are detailed in a DOC/SIGN item.
	     * @param {string} project Project short label
	     * @param {string} signitem SIGN-xx item
	     * @param {number} [detailed] Optional. When set to 1 adds a secondaryItems list in the answer. Defaults to 0.
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemlistSignitemGet(project: string, signitem: string, detailed?: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<GetItemListAck>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Retrieve list of all jobs in a project
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectJobGet(project: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<JobsWithUrl>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.3
	     * @summary Aborts a job.
	     * @param {string} project Project short label
	     * @param {number} job job number
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectJobJobDelete(project: string, job: number, reason: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get a job file. The job part is the jobID (a number) and the file is the fileID (a number)
	     * @param {string} project Project short label
	     * @param {number} job job number
	     * @param {number} fileno file number
	     * @param {string} [mode] (optional) set to mode&#x3D;direct to get the output in the response output instead of as a download file. This assumes the file is HTML
	     * @param {string} [format] (optional) set to format&#x3D;json to get a json output instead of XML
	     * @param {string} [disposition] (optional, from version 2.3) set to disposition&#x3D;inline to ask the server to send the disposition to &#x27;inline&#x27; instead of &#x27;attachment&#x27;
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectJobJobFilenoGet(project: string, job: number, fileno: number, mode?: string, format?: string, disposition?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get a job status, including generated files. The variable part is the jobID (a number)
	     * @param {string} project Project short label
	     * @param {number} job job number
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectJobJobGet(project: string, job: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<JobsStatusWithUrl>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.2
	     * @summary Sets the progress of a job
	     * @param {string} project Project short label
	     * @param {number} job job number
	     * @param {number} progress progress (0 to 100, 200 for error)
	     * @param {string} [status] (optional( status text
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectJobJobPost(project: string, job: number, progress: number, status?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
	     * @summary Get the label history of a project -  list of all label changes for all items
	     * @param {string} project Project short label
	     * @param {string} [itemRef] (optional) ask for just one item (the return structure is still an array in that case)
	     * @param {string} [from] (optional) date from
	     * @param {string} [to] (optional) date to - works only if you only specified a from
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectLabelhistoryGet(project: string, itemRef?: string, from?: string, to?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<LabelHistory>>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
	     * @summary Get the merge history of a project - needs the 'merge' module
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectMergehistoryGet(project: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<MergeHistory>>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
	     * @summary Get the merge information - needs the 'merge' module
	     * @param {string} project Project short label
	     * @param {string} [excludeCategories] (optional) comma-delimited list of categories to exclude
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectMergeinfoGet(project: string, excludeCategories?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<MergeInfo>>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Move items into this folder
	     * @param {string} project Project short label
	     * @param {string} folder Folder reference (F-XXX-nn)
	     * @param {string} reason The reason why the user is doing this
	     * @param {string} [items] List of items to move in
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectMoveinFolderPost(project: string, folder: string, reason: string, items?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Find items based on a search string in one project
	     * @param {string} project Project short label
	     * @param {string} search search term
	     * @param {string} id search id. Used by MatrixJira js to match queries with answers. Is returned in the output structure
	     * @param {string} [filter] (optional) applies a filter, can be negative
	     * @param {string} [fieldsOut] (optional) comma-delimited list of fields to return -  101,102 - or * for all
	     * @param {number} [labels] (optional) set to 1 to return labels in the output
	     * @param {number} [treeOrder] (optional) set to 1 to return items in tree order (otherwise it&#x27;s project,category,serial)
	     * @param {string} [links] (optional) set to up,down to return up and down items, or only up or only down
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectNeedleGet(project: string, search: string, id: string, filter?: string, fieldsOut?: string, labels?: number, treeOrder?: number, links?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<TrimNeedle>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Adds a category to a project
	     * @param {string} project Project short label
	     * @param {string} label Category label
	     * @param {string} shortLabel Category short label
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectPost(project: string, label: string, shortLabel: string, reason: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Publishes an item. Item has the form PUB-nnn
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} reason reason for the publication
	     * @param {string} [trainingFor] (optional) list of items for which we need to add training. If list is not there, all trainings will be generated
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectPublishItemPost(project: string, item: string, reason: string, trainingFor?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) for the reports, read/write for the signed reports. Valid from version 2.1 or earlier
	     * @summary Asks for a new report. The job ID is returned as answer. {report} can be REPORT-n, DOC-n, SIGN-n or a report name.To follow the progress of the job, the GET /{project}/job/{jobid} can be called
	     * @param {string} project Project short label
	     * @param {string} report name of the report
	     * @param {string} isSignedReport If set to true, means the report needs to generate a signed record
	     * @param {string} includeSignatures List of comma separated users who need to sign
	     * @param {string} newTitle New title for the SIGN- item that is generated (only valid for isSignedReport)
	     * @param {string} copyFields List of from-to fields (123,456),(124,457) that we can use to generate the fields in the SIGN record (only valid for isSignedReport)
	     * @param {string} [itemList] (optional) list of items to use in the report. By default all categories are used
	     * @param {string} [url] (optional) url to generate in the filter
	     * @param {string} [resturl] (optional) REST url to generate in the filter
	     * @param {string} [format] (optional) format -  html (default), pdf, docx, odt, xml, zipdocx, zippdf or package (from 2.2)
	     * @param {string} [filter] (optional) specify a filter. Can be negative filters
	     * @param {number} [useOld] (optional) ask to use the old report engine (pre 1.11) if set to 1.
	     * @param {string} [atDate] (optional) generates the report at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectReportReportPost(project: string, report: string, isSignedReport: string, includeSignatures: string, newTitle: string, copyFields: string, itemList?: string, url?: string, resturl?: string, format?: string, filter?: string, useOld?: number, atDate?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CreateReportJobAck>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get a project's schema
	     * @param {string} project Project short label
	     * @param {number} [simple] (optional) set to simple&#x3D;1 to have a simpler output (no fields, round shape)
	     * @param {string} [excludeCategories] (optional) comma-separated list of categories to exclude, like DOC,SIGN
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectSchemaGet(project: string, simple?: number, excludeCategories?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Get all settings of a project
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectSettingGet(project: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<GetProjectSettingAck>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Adds or changes a project setting. If the value is empty, the setting will be deleted.
	     * @param {string} project Project short label
	     * @param {string} key setting key
	     * @param {string} value value
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectSettingPost(project: string, key: string, value: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Signs an item. Item has the form SIGN-nnn
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} password signature password - the user who is signing is the one who is logged in
	     * @param {string} [acceptComments] (optional) adds an acceptance comment
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectSignItemPost(project: string, item: string, password: string, acceptComments?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<SignItemAck>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Edit the signature parts
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} rejectSign The reason why the user is rejecting the signature
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectSignItemPut(project: string, item: string, rejectSign: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Asks for a new report. The job ID is returned as answer
	     * @param {string} project Project short label
	     * @param {string} [url] (optional) url to generate in the filter
	     * @param {string} [resturl] (optional) REST url to generate in the filter
	     * @param {string} [format] (optional) format -  html (default), pdf, docx, odt, xml, zipdocx or zippdf
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectSignedreportSIGNNPost(project: string, url?: string, resturl?: string, format?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Get all tags of a project. Works on any project if user is admin
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectTagGet(project: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<Tag>>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Adds a tag to a project
	     * @param {string} project Project short label
	     * @param {string} label Tag label. Must be unique within a project
	     * @param {number} auditId Id of the audit this tag is based on
	     * @param {string} type Type of tag (default -  tag)
	     * @param {string} comments Free optional comment
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectTagPost(project: string, label: string, auditId: number, type: string, comments: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.2
	     * @summary Get all todos for the current user, for oneproject
	     * @param {string} project Project short label
	     * @param {string} [itemRef] (optional) set to an item to have all todos linked to an item, regardless of the user
	     * @param {number} [includeDone] (optional) set to 1 to include done todos and todo&#x27;s created by the user
	     * @param {number} [includeAllUsers] (optional) set to 1 to include all todos for all users
	     * @param {number} [includeFuture] (optional) set to 1 to include future todos as well (defaults to 0)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectTodoGet(project: string, itemRef?: string, includeDone?: number, includeAllUsers?: number, includeFuture?: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<GetTodosAck>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.2
	     * @summary Creates a todo on an item (note that you only need read access for this POST method) for you or others
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} text The todo reason
	     * @param {number} [fieldId] (optional) If set, specifies that the todo is related to that field (review, ...)
	     * @param {string} [logins] (optional) If set, a list of user logins or groups to which these todo apply
	     * @param {string} [todoType] (optional) The todo type -  &#x27;user&#x27; by default
	     * @param {string} [atDate] (optional) a date in the future for reminders
	     * @param {number} [auto] (optional) set to 1 to create an auto-notification (0 by default)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectTodoItemPost(project: string, item: string, text: string, fieldId?: number, logins?: string, todoType?: string, atDate?: string, auto?: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.2
	     * @summary Removes (mark as done) a todo.
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectTodoNDelete(project: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Touches (set to same date) an item or folder
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} reason The reason why the user is doing this
	     * @param {number} [nbLayers] (optional) Number of layers -- 1 by default
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectTouchItemPut(project: string, item: string, reason: string, nbLayers?: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get full tree
	     * @param {string} project Project short label
	     * @param {string} [fancy] (optional) returns a fancy tree
	     * @param {string} [filter] (optional) applies a filter
	     * @param {string} [atDate] (optional) generates the tree at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectTreeGet(project: string, fancy?: string, filter?: string, atDate?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<FancyFolder>>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Unhides a project.
	     * @param {string} project Project short label
	     * @param {string} newShort The new project short name to use
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectUnhidePut(project: string, newShort: string, reason: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Converts a word document to an HTML, with images pointing to uploaded files on the server
	     * @param {string} project Project short label
	     * @param {string} reason The reason why the user is doing this
	     * @param {number} [fileNo] If specified, means that the conversion is from an already uploaded file. Otherwise the file must be uploaded as body of this call
	     * @param {string} [targetDocumentFolder] target document folder (in this case creates a document)
	     * @param {number} [useAsField] set to 1 to have this docx used as a field. In this case the return value is the html equivalent, with some meta
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectWordconvertPost(project: string, reason: string, fileNo?: number, targetDocumentFolder?: string, useAsField?: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Get list of all projects, all settings and current user, all todos and JIRA meta create object
	     * @param {number} [adminUI] (optional) set to adminUI&#x3D;1 to have all projects even the ones you are not assigned to, as an admin
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    rootGet(adminUI?: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListProjectAndSettings>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Creates a new project. Either the full project is sent as XML payload, or the label and shortLabel are given. If uploading data for a whole project, label and shortLabel are optional but overwrite the XML content if present. Branching can be done with an audit report as payload, and branch* must be defined in that case
	     * @param {string} label Project label
	     * @param {string} shortLabel Project short label
	     * @param {string} [overwrite] Must be set to yes if you&#x27;re overwriting an existing project
	     * @param {string} [branchLabel] Must be set to branch (optional)
	     * @param {string} [branchTag] Must be set to branch, and match a tag in the audit export (optional)
	     * @param {string} [branchComment] Comment for the branch (optional)
	     * @param {string} [branchBaseProjectLabel] Label of the base Project (optional)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    rootPost(label: string, shortLabel: string, overwrite?: string, importUsers?: string, branchLabel?: string, branchTag?: string, branchComment?: string, branchBaseProjectLabel?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.1 or earlier
	     * @summary Retrieves the user list
	     * @param {string} details (optional) -  if set to 1 returns all details
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userGet(details: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<GetUserListAck>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Creates a new user. Arguments are either a set of arguments or json
	     * @param {string} login User login name
	     * @param {string} email User email
	     * @param {string} password User password in clear
	     * @param {string} json A json struct with login, email, password, first, last, signatureImage(int), signaturePassword, admin(int)
	     * @param {string} [first] User first name (optional)
	     * @param {string} [last] User last name (optional)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userPost(login: string, email: string, password: string, json: string, first?: string, last?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1 or earlier
	     * @summary Retrieves all actions of a user
	     * @param {string} user user login name
	     * @param {number} [startAt] (optional) Pagination -  starts the audit after N records
	     * @param {number} [maxResults] (optional) Pagination -  Retrieve N results per page
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserAuditGet(user: string, startAt?: number, maxResults?: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<TrimAuditList>;
	    /**
	     * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1 or earlier
	     * @summary Check a user's password
	     * @param {string} user user login name
	     * @param {string} password Asks for a check of the password1
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserCheckGet(user: string, password: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CheckPasswordAck>;
	    /**
	     * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1 or earlier
	     * @summary Check a user's password
	     * @param {string} user user login name
	     * @param {string} password Asks for a check of the password1
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserCheckPost(user: string, password: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Reserved to Matrix Requirements operations. Valid from version 2.1 or earlier
	     * @summary Removes completely a user (only used for unit testing)
	     * @param {string} user user login name
	     * @param {string} confirm Needs to be yes for the method to be executed
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserDelete(user: string, confirm: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1 or earlier
	     * @summary Retrieves full details of a user
	     * @param {string} user user login name
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserGet(user: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UserType>;
	    /**
	     * Permissions - No permissions needed. Valid from version 2.1 or earlier
	     * @summary Login
	     * @param {string} user user login name
	     * @param {string} password password in clear
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserLoginPost(user: string, password: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Logout
	     * @param {string} user user login name
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserLogoutPost(user: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.1 or earlier
	     * @summary Sets a new password for an account that has a password_reset token in place (the {user} in the URL doesn't matter)
	     * @param {string} user user login name
	     * @param {string} token password_reset token
	     * @param {string} password New password to use from now on
	     * @param {string} [signaturePassword] (optional) New password to use from now on for signatures
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserPasswordResetPost(user: string, token: string, password: string, signaturePassword?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Adds a user to a project
	     * @param {string} user user login name
	     * @param {string} project Project short label
	     * @param {number} permission 0 for no access, 1 for readonly, 2 for read/write (default), 3 for admin, 4 for visitor
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserProjectPost(user: string, project: string, permission: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Edits the user permissions in a project. If permission is 0, it means the user has no longer access (but we retain its records for audit purposes)
	     * @param {string} user user login name
	     * @param {string} project Project short label
	     * @param {number} permission 0 for no access, 1 for readonly, 2 for read/write (default), 3 for admin
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserProjectPut(user: string, project: string, permission: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1 or earlier
	     * @summary Retrieves all projects a user has access to
	     * @param {string} user user login name
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserProjectsGet(user: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UserDetails>;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.1 or earlier
	     * @summary Edits the user details. Arguments are all separated or a single json argument. Regular users can only change their signature and passwords.
	     * @param {string} user user login name
	     * @param {string} email User new email
	     * @param {string} password User new password in clear
	     * @param {string} json A json struct with login, email, password, first, last, signatureImage(int), signaturePassword, admin(int)
	     * @param {string} [first] User first name (optional)
	     * @param {string} [last] User last name (optional)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserPut(user: string, email: string, password: string, json: string, first?: string, last?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Renames a user login
	     * @param {string} user user login name
	     * @param {string} newLogin The new login name. Cannot be one of the existing
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserRenamePut(user: string, newLogin: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.1 or earlier
	     * @summary Adds or deletes a user setting.
	     * @param {string} user user login name
	     * @param {string} key Name of the setting
	     * @param {string} value Value of the setting. If empty, deletes the setting.
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserSettingPost(user: string, key: string, value: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Sets the new status of the user. Can be normal,blocked or deleted
	     * @param {string} user user login name
	     * @param {string} status Can be normal,blocked or deleted
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserStatusPut(user: string, status: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.1 or earlier
	     * @summary Removes a user token
	     * @param {string} user user login name
	     * @param {string} value The token to be removed
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserTokenDelete(user: string, value: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.1 or earlier
	     * @summary Adds a token for a user
	     * @param {string} user user login name
	     * @param {string} purpose Purpose of the token. Not checked. Should contain either \&quot;password_reset\&quot; or \&quot;oauth\&quot;
	     * @param {string} [value] Value of the token - by default generated by this call
	     * @param {string} [reason] Free text explain where the token will be used (URL or others). Should be set for oauth, not needed for others
	     * @param {number} [validity] Validity of the token in hours - if not set, doesn&#x27;t expire
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserTokenPost(user: string, purpose: string, value?: string, reason?: string, validity?: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
	};
	/**
	 * DefaultApi - factory interface
	 * @export
	 */
	export const DefaultApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
	    /**
	     * Permissions - No permissions needed. Valid from version 2.1 or earlier
	     * @summary Asks for the difference between A and B html exerpts, and produce the B html with annotations
	     * @param {string} [arg] json object with the arguments
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allCompareHtmlPost(arg?: string, options?: any): Promise<HtmlCompareResult>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Returns all info about a date
	     * @param {string} [date] (optional) an input date formatted as iso8601. If not present, current date/time is used
	     * @param {string} [dateformat] (optional) a date formatter. If not present, current date format is used
	     * @param {string} [timeformat] (optional) a date-time formatter. If not present, current date/time format is used
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allDateGet(date?: string, dateformat?: string, timeformat?: string, options?: any): Promise<GetDateAck>;
	    /**
	     * Permissions - Must have the right key to download the file. Valid from version 2.1 or earlier
	     * @summary Retrieve one customer file. The fileno is a simple fileId. This request returns the actual file
	     * @param {number} fileno file number
	     * @param {string} key The key of the file
	     * @param {string} [disposition] (optional, from version 2.3) set to disposition&#x3D;inline to ask the server to send the disposition to &#x27;inline&#x27; instead of &#x27;attachment&#x27;
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allFileFilenoGet(fileno: number, key: string, disposition?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Retrieve list of all customer-wide files
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allFileGet(options?: any): Promise<GetProjectFileListAck>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Creates a new customer-wide file - the file should be uploaded as payload. Its mime type should be sent through the HTTP protocol.
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allFilePost(options?: any): Promise<AddFileAck>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Retrieve license status
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allLicenseGet(options?: any): Promise<LicenseStatus>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Adds a log entry (server side).
	     * @param {string} message Message to log
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allLogPost(message: string, options?: any): Promise<string>;
	    /**
	     * Permissions - No permissions needed. Valid from version 2.1 or earlier
	     * @summary Monitoring object
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allMonitorGet(options?: any): Promise<GetMonitorAck>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Find items based on a search string in all projects
	     * @param {string} search search term
	     * @param {string} id search id. Used by MatrixJira js to match queries with answers. Is returned in the output structure
	     * @param {string} [filter] (optional) applies a filter, can be negative
	     * @param {string} [fieldsOut] (optional) comma-delimited list of fields to return -  101,102 - or * for all
	     * @param {number} [labels] (optional) set to 1 to return labels in the output
	     * @param {string} [links] (optional) set to up,down to return up and down items, or only up or only down
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allNeedleGet(search: string, id: string, filter?: string, fieldsOut?: string, labels?: number, links?: string, options?: any): Promise<TrimNeedle>;
	    /**
	     * Permissions - No permissions needed. Valid from version 2.2
	     * @summary The OpenAPI 3.0 definition of our REST API
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allOpenapiGet(options?: any): Promise<string>;
	    /**
	     * Permissions - No permissions needed. Valid from version 2.1 or earlier
	     * @summary Lists all reports
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allReportsGet(options?: any): Promise<GetReportsAck>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Sends an email. The parameters are sent as a POST JSON payload. The arguments in this help are in fact fields in that json
	     * @param {string} to Comma-delimited list of user names to send as to
	     * @param {string} cc Comma-delimited list of user names to send as cc
	     * @param {string} subject Email subject
	     * @param {string} htmlbody HTML body
	     * @param {string} textbody text body, equivalent to the html (both are sent)
	     * @param {number} [system] (optional) if set to 1 makes it a system email (not sent by the actual user
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allSendmailPost(to: string, cc: string, subject: string, htmlbody: string, textbody: string, system?: number, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Creates a service desk issue. The parameters are sent as a POST JSON payload. The arguments in this help are in fact fields in that json
	     * @param {string} summary Summary
	     * @param {string} description Description
	     * @param {string} matrixProject Matrix project
	     * @param {string} matrixItem Matrix Item
	     * @param {string} browser Browser
	     * @param {string} log Log
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allServicedeskPost(summary: string, description: string, matrixProject: string, matrixItem: string, browser: string, log: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get all settings of a customer
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allSettingGet(options?: any): Promise<GetSettingAck>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Adds or changes a customer setting. If the value is empty, the setting will be deleted.
	     * @param {string} key setting key
	     * @param {string} value value
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allSettingPost(key: string, value: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get instance status
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allStatusGet(options?: any): Promise<ServerStatus>;
	    /**
	     * Permissions - No permissions needed. Valid from version 2.1 or earlier
	     * @summary Returns all accepted time zones
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allTimezoneGet(options?: any): Promise<string[]>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.2
	     * @summary Get all todos for the current user, for all projects
	     * @param {number} [includeDone] (optional) set to 1 to include done todos and todo&#x27;s created by the user
	     * @param {number} [includeFuture] (optional) set to 1 to include future todos as well (defaults to 0)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allTodoGet(includeDone?: number, includeFuture?: number, options?: any): Promise<GetTodosAck>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary WebHook
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    allWebhookPost(options?: any): Promise<string>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.2
	     * @summary Retrieves the group list
	     * @param {number} [details] (optional) -  if set to 1 returns all details -- in this case user needs to be ADMIN
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGet(details?: number, options?: any): Promise<GetGroupListAck>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Removes a group
	     * @param {string} groupId group Id
	     * @param {string} confirm Needs to be yes for the method to be executed
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGroupIdDelete(groupId: string, confirm: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.2
	     * @summary Retrieves details of a group
	     * @param {string} groupId group Id
	     * @param {number} [details] (optional) -  if set to 1 returns all details -- in this case user needs to be ADMIN
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGroupIdGet(groupId: string, details?: number, options?: any): Promise<GroupType>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Adds a group to a project (or removes it)
	     * @param {string} groupId group Id
	     * @param {string} project Project short label
	     * @param {number} [permission] Specify the (new) permission for that group in that project
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGroupIdProjectProjectPost(groupId: string, project: string, permission?: number, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Renames a group
	     * @param {string} groupId group Id
	     * @param {string} newName The new group name. Cannot be one of the existing. Must start with &#x27;group.&#x27;
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGroupIdRenamePut(groupId: string, newName: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.2
	     * @summary Adds a user to a group
	     * @param {string} groupId group Id
	     * @param {string} user user login name
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGroupIdUserUserPut(groupId: string, user: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Sets all users of a group (replacing potential former content)
	     * @param {string} groupId group Id
	     * @param {string} users List of all users members of that group, commas-separated
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGroupIdUserlistPut(groupId: string, users: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Creates a new group
	     * @param {string} groupName group name
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGroupNamePost(groupName: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Removes a user from a group
	     * @param {string} groupName group name
	     * @param {string} user user login name
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    groupGroupNameUserUserDelete(groupName: string, user: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.3
	     * @summary Merge branch into mainline. First project is the mainline, second is the branch. The payload must contain a json object with a list of actions to perform.
	     * @param {string} mainproject mainproject
	     * @param {string} branchproject branchproject
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    mainprojectMergeBranchprojectPost(mainproject: string, branchproject: string, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have QMS viewer access (or higher) to the project. Valid from version 2.2
	     * @summary Retrieves all accesses in a project (list of groups and users who have access)
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectAccessGet(project: string, options?: any): Promise<GetAccessAck>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Retrieves all changes in a project
	     * @param {string} project Project short label
	     * @param {number} [startAt] (optional) Pagination -  starts the audit after N records
	     * @param {number} [maxResults] (optional) Pagination -  Retrieve N results per page
	     * @param {string} [deleteOnly] (optional) if set to yes, only returns actions of type delete
	     * @param {string} [tech] (optional) if set to yes, returns the underneath changes
	     * @param {number} [auditIdMin] (optional) sets a minimum ID for audits, as returned by GET calendar
	     * @param {number} [auditIdMax] (optional) sets a maximum ID for audits
	     * @param {number} [noReport] (optional) set to 1 to avoid having reports
	     * @param {number} [noImport] (optional) set to 1 to avoid having imports
	     * @param {string} [include] (optional) set to a list of actions to include (delete,undelete,add,edit,...)
	     * @param {number} [resolveRef] (optional) set to 1 to resolve item IDs into refs
	     * @param {string} [itemRef] (optional) restrict the audit to only those mentionning this item
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectAuditGet(project: string, startAt?: number, maxResults?: number, deleteOnly?: string, tech?: string, auditIdMin?: number, auditIdMax?: number, noReport?: number, noImport?: number, include?: string, resolveRef?: number, itemRef?: string, options?: any): Promise<TrimAuditList>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.3
	     * @summary Launches a server-side branch or clone - needs the 'merge' module if actual branching
	     * @param {string} project Project short label
	     * @param {string} label Branch project label
	     * @param {string} shortLabel Branch project short label
	     * @param {number} keepPermissions 1 or 0. Defaults to 0 (with 0 the project doesn&#x27;t have any permission after branching)
	     * @param {number} keepContent 1 or 0. Defaults to 1. 0 only works without branch and without history
	     * @param {number} [branch] (optional) Set to 1 to branch (default), 0 to just copy/clone
	     * @param {number} [history] (optional) Set to 1 to branch or copy with history, defaults to 0
	     * @param {string} [tagToCreate] (optional) specify a tag (by default auto-generated)
	     * @param {string} [branchInThePastTag] (optional) specify a tag to branch in the past (needs history&#x3D;1)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectBranchPost(project: string, label: string, shortLabel: string, keepPermissions: number, keepContent: number, branch?: number, history?: number, tagToCreate?: string, branchInThePastTag?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get all dates at which a project has been modified
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCalendarGet(project: string, options?: any): Promise<CalendarType[]>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Removes (inactivate) a category. Will fail on REPORT and FOLDER categories
	     * @param {string} project Project short label
	     * @param {string} category Category short label
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCatCategoryDelete(project: string, category: string, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get details of a category
	     * @param {string} project Project short label
	     * @param {string} category Category short label
	     * @param {string} [filter] (optional) specify a filter
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCatCategoryGet(project: string, category: string, filter?: string, options?: any): Promise<CategoryFull>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Modifies a categorie's labels, and fix the project's settings to reflect that change, OR modifies a category's order.
	     * @param {string} project Project short label
	     * @param {string} category Category short label
	     * @param {number} order The new order (for reordering)
	     * @param {string} shortLabel The new short label for that category (for renaming)
	     * @param {string} label The new long label for that category (for renaming)
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCatCategoryPut(project: string, category: string, order: number, shortLabel: string, label: string, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get all settings of a category
	     * @param {string} project Project short label
	     * @param {string} category Category short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCatCategorySettingGet(project: string, category: string, options?: any): Promise<GetSettingAck>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Adds or changes a category setting. If the value is empty, the setting will be deleted
	     * @param {string} project Project short label
	     * @param {string} category Category short label
	     * @param {string} key setting key
	     * @param {string} value value
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCatCategorySettingPost(project: string, category: string, key: string, value: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get all categories of a project
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCatGet(project: string, options?: any): Promise<GetProjectStructAck>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Adds a fields in a category
	     * @param {string} project Project short label
	     * @param {string} label Field label
	     * @param {string} category Category short label
	     * @param {string} fieldType Type of field
	     * @param {string} fieldParam Parameter for the field
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCatPost(project: string, label: string, category: string, fieldType: string, fieldParam: string, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Clones a project
	     * @param {string} project Project short label
	     * @param {string} label Project label
	     * @param {string} shortLabel Project short label
	     * @param {number} keepHistory 1 or 0. Defaults to 0
	     * @param {number} keepContent 1 or 0. Defaults to 0 (only the REPORT part is kept, make sense only if keepHistory is 0)
	     * @param {number} keepPermissions 1 or 0. Defaults to 0 (with 0 the project doesn&#x27;t have any permission after cloning)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectClonePost(project: string, label: string, shortLabel: string, keepHistory: number, keepContent: number, keepPermissions: number, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Asks for the difference between 2 signed documents, as a Word document. The job ID is returned as answer
	     * @param {string} project Project short label
	     * @param {string} signitem1 SIGN-xx for the first SIGN document to compare
	     * @param {string} signitem2 SIGN-xx for the 2nd SIGN document to compare
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCompareSignitem1Signitem2Post(project: string, signitem1: string, signitem2: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get a project's schema
	     * @param {string} [excludeCategories] (optional) comma-separated list of categories to exclude, like DOC,SIGN
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectConfigcheckGet(excludeCategories?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read/write access to the project - admins can impersonate. Valid from version 2.2
	     * @summary Copy items from a folder to another one
	     * @param {string} project Project short label
	     * @param {string} itemOrFolder Item reference (XXX-nn) or folder (F-XXX-nn)
	     * @param {string} targetFolder Reference of the target folder (F-categ-serial)
	     * @param {string} reason The reason why the user is doing this
	     * @param {string} [targetProject] (optional) project to copy into (by default, same project)
	     * @param {number} [copyLabels] (optional) 0 or 1. Defaults to 0
	     * @param {string} [map] (optional) mapN&#x3D;M -  map field N in source to field M in target
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectCopyItemOrFolderPost(project: string, itemOrFolder: string, targetFolder: string, reason: string, targetProject?: string, copyLabels?: number, map?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Reserved to Matrix Requirements operations. Valid from version 2.1 or earlier
	     * @summary Removes completely a project (only used for unit testing). This is an actual DELETE in the database.
	     * @param {string} project Project short label
	     * @param {string} confirm Needs to be yes for the method to be executed
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectDelete(project: string, confirm: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Converts an excel file (xls, xlsx) into a XML version that we send straight back as an XML payload.
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectExcelxmlPost(project: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Executes UC or TC into XTC items
	     * @param {string} project Project short label
	     * @param {any} jSONPayload There must be a JSON as a payload. It includes all parameters AND the reason
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectExecutePost(project: string, jSONPayload: any, options?: any): Promise<FolderAnswer>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Asks for an export of some items. The job ID is returned as answer
	     * @param {string} project Project short label
	     * @param {string} itemList Mandatory list of items to export.
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectExportGet(project: string, itemList: string, options?: any): Promise<ExportItemsAck>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Removes (inactivate) a field.
	     * @param {string} project Project short label
	     * @param {string} category Category short label
	     * @param {number} field The field number (like field&#x3D;502)
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectFieldCategoryDelete(project: string, category: string, field: number, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get 1 field of an item. {item} has the form CATEG-number.
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} field Mandatory. Field number (faster) OR field label
	     * @param {string} [format] Optional. Format for the return. Can be text, json, html, xml or xslt. Defaults to html
	     * @param {number} [download] Optional. 1 to have in download, 0 as direct result. Defaults to 0.
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectFieldItemGet(project: string, item: string, field: string, format?: string, download?: number, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Modifies a field's label and parameter OR modifies a field's order.
	     * @param {string} project Project short label
	     * @param {number} field The field number (like field&#x3D;502)
	     * @param {string} label The new label (for renaming)
	     * @param {string} fieldParam The new parameter (for renaming)
	     * @param {number} order The new order (for reordering)
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectFieldPut(project: string, field: number, label: string, fieldParam: string, order: number, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have the right key to download the file. Valid from version 2.1 or earlier
	     * @summary Retrieve one project file. The fileno is a simple fileId. This request returns the actual file
	     * @param {string} project Project short label
	     * @param {number} fileno file number
	     * @param {string} key The key of the file
	     * @param {string} [disposition] (optional, from version 2.3) set to disposition&#x3D;inline to ask the server to send the disposition to &#x27;inline&#x27; instead of &#x27;attachment&#x27;
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectFileFilenoGet(project: string, fileno: number, key: string, disposition?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Retrieve list of all files owned by a project
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectFileGet(project: string, options?: any): Promise<GetProjectFileListAck>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Creates a new file - the file should be uploaded as payload (or through the url argument as an alternative). It's mime type should be sent through the HTTP protocol.
	     * @param {string} project Project short label
	     * @param {string} [url] Optional argument -  the file could also come from an external URL. In this case there will be an error if we can&#x27;t retrieve it on the server
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectFilePost(project: string, url?: string, options?: any): Promise<AddFileAck>;
	    /**
	     * Permissions - Must have read/write access to the project - admins can impersonate. Valid from version 2.1 or earlier
	     * @summary Creates a new folder
	     * @param {string} project Project short label
	     * @param {string} parent Reference of the parent folder in the form F-CATEG-serial (example -  F-SPEC-17)
	     * @param {string} label folder label
	     * @param {string} reason The reason why the user is doing this
	     * @param {string} [fxField] (optional) Add one of each of these to set folder&#x27;s fields. fx is followed by the field ID (a number)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectFolderPost(project: string, parent: string, label: string, reason: string, fxField?: string, options?: any): Promise<AddItemAck>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get list of project info -  users, settings, categories
	     * @param {string} project Project short label
	     * @param {number} [adminUI] (optional) set to adminUI&#x3D;1 to have this project data even if you are not assigned to, as an admin
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectGet(project: string, adminUI?: number, options?: any): Promise<ProjectInfo>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Hides a project
	     * @param {string} project Project short label
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectHidePut(project: string, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.2
	     * @summary Launches a server-side hook
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} hook name of the hook
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectHookItemPost(project: string, item: string, hook: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
	     * @summary Cleans up an input html blob according to the current html cleanup rules. The blob is passed in the POST payload. The payload must be a json object with {\"htmlToClean\" - \"x\"}
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectHtmlCleanupBlobPost(project: string, options?: any): Promise<GetHtmlBlob[]>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
	     * @summary Get the list of items that would be changed if we applied html cleanup. You can pass a cleanup setting in the payload of the POST. If it's not there we take the customer (global) setting and force the cleanup to true
	     * @param {string} project Project short label
	     * @param {string} [categories] (optional) list of comma-delimited categories to go through, all by default
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectHtmlCleanupTestPost(project: string, categories?: string, options?: any): Promise<HtmlTestCleanup[]>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Imports some items into a project
	     * @param {string} project Project short label
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectImportPost(project: string, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get details of a folder. {folder} has the form F-CATEG-number[-vN].
	     * @param {string} project Project short label
	     * @param {string} folder Folder reference (F-XXX-nn)
	     * @param {number} [history] (optional) set history&#x3D;1 to retrieve list of all versions
	     * @param {string} [filter] (optional) specify a filter
	     * @param {string} [children] (optional) set to yes if you need the children as well (recursively).
	     * @param {string} [atDate] (optional) retrieves the item at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z. Not compatible with the version query -vN
	     * @param {number} [fields] (optional) set fields&#x3D;1 to retrieve list of all fields, even the empty ones
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemFolderGet(project: string, folder: string, history?: number, filter?: string, children?: string, atDate?: string, fields?: number, options?: any): Promise<TrimFolder>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Removes (inactivate) an item (or a folder). Item has the form (F-)CATEG-number. Will fail on non-empty folders
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} confirm Needs to be yes for the method to be executed IF it is a non-empty folder
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemItemDelete(project: string, item: string, confirm: string, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get details of an item. {item} has the form CATEG-number[-vN].
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {number} [history] (optional) set history&#x3D;1 to retrieve list of all versions
	     * @param {number} [fields] (optional) set fields&#x3D;1 to retrieve list of all fields, even the empty ones
	     * @param {string} [filter] (optional) specify a filter
	     * @param {string} [atDate] (optional) retrieves the item at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z. Not compatible with the version query -vN
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemItemGet(project: string, item: string, history?: number, fields?: number, filter?: string, atDate?: string, options?: any): Promise<TrimItem>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Restores an item. Item has the form CATEG-number
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} reason The reason why the user is doing this
	     * @param {number} [at] (optional) If set, specifies that the item should be restored as it was in that version
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemItemPost(project: string, item: string, reason: string, at?: number, options?: any): Promise<UndeleteAnswer>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Modifies an item or a folder. Item has the form CATEG-number, folders -  F-CATEG-number
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} reason The reason why the user is doing this
	     * @param {string} [title] Specify new title for the item -- if not there, keep the old title
	     * @param {string} [fxid_] Values of each field, the URI parameter name is fx followed by the ID of the field (fx501 for example)
	     * @param {string} [labels] (optional) List of labels currently applied to this element. If none is specified, will consider there are none. Should be sent as a comma-delimited list of strings
	     * @param {string} [auditAction] (optional) Specify a new verb for the audit action. Defaults to edit
	     * @param {string} [newFolder] (optional) Name of a new folder to move the item into (exclusive from title and fx arguments)
	     * @param {number} [newPosition] (optional) Indicates a new position within the newfolder. If newFolder is not specified, only changes the position. Exclusive of title and fx arguments. Position is an integer starting at 1
	     * @param {string} [filter] (optional) A filter
	     * @param {string} [linksUp] (optional) Comma-delimited (%2C)list of references to up items
	     * @param {string} [linksDown] (optional) Comma-delimited (%2C)list of references to down items
	     * @param {number} [currentVersion] (optional) will not make the change if the current version is not that one
	     * @param {number} [onlyThoseFields] (optional) when set to 1 says that the only fields to change are those passed
	     * @param {number} [onlyThoseLabels] (optional) when set to 1 says that the only labels to change are those passed. To remove a label in this case, prefix it with minus
	     * @param {number} [failOnCleanup] (optional) when set to 1 (default) says that the call will fail if any HTML cleanup is involved. With 0 it will clean and not fail
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemItemPut(project: string, item: string, reason: string, title?: string, fxid_?: string, labels?: string, auditAction?: string, newFolder?: string, newPosition?: number, filter?: string, linksUp?: string, linksDown?: string, currentVersion?: number, onlyThoseFields?: number, onlyThoseLabels?: number, failOnCleanup?: number, options?: any): Promise<TrimItem>;
	    /**
	     * Permissions - Must have read/write access to the project - admins can impersonate. Valid from version 2.1 or earlier
	     * @summary Adds an item in a folder
	     * @param {string} project Project short label
	     * @param {string} title Item title
	     * @param {string} folder Reference of the folder (F-categ-serial)
	     * @param {string} reason The reason why the user is doing this
	     * @param {string} linksUp Comma-delimited (%2C)list of references to up items
	     * @param {string} linksDown Comma-delimited (%2C)list of references to down items
	     * @param {string} [fxID_] Values of each field, the URI parameter name is fx followed by the ID of the field (fx501 for example)
	     * @param {string} [labels] (optional) List of labels currently applied to this element. If none is specified, will consider there are none. Should be sent as a comma-delimited list of strings
	     * @param {string} [author] The author (login name) - only works when superadmin is issuing this
	     * @param {number} [failOnCleanup] (optional) when set to 1 (default) says that the call will fail if any HTML cleanup is involved. With 0 it will clean and not fail
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemPost(project: string, title: string, folder: string, reason: string, linksUp: string, linksDown: string, fxID_?: string, labels?: string, author?: string, failOnCleanup?: number, options?: any): Promise<AddItemAck>;
	    /**
	     * Permissions - ?. Valid from version 2.1 or earlier
	     * @summary Removes (inactivate) a link between 2 items. Items are in the form CATEG-number
	     * @param {string} project Project short label
	     * @param {string} upitem Item reference (XXX-nn) for the UP item
	     * @param {string} downitem Item reference (XXX-nn) for the DOWN item
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemlinkUpitemDownitemDelete(project: string, upitem: string, downitem: string, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Adds a link between 2 items. Both items are in the form CATEG-number
	     * @param {string} project Project short label
	     * @param {string} upitem Item reference (XXX-nn) for the UP item
	     * @param {string} downitem Item reference (XXX-nn) for the DOWN item
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemlinkUpitemDownitemPost(project: string, upitem: string, downitem: string, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get the list of items that are detailed in a DOC/SIGN item.
	     * @param {string} project Project short label
	     * @param {string} signitem SIGN-xx item
	     * @param {number} [detailed] Optional. When set to 1 adds a secondaryItems list in the answer. Defaults to 0.
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectItemlistSignitemGet(project: string, signitem: string, detailed?: number, options?: any): Promise<GetItemListAck>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Retrieve list of all jobs in a project
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectJobGet(project: string, options?: any): Promise<JobsWithUrl>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.3
	     * @summary Aborts a job.
	     * @param {string} project Project short label
	     * @param {number} job job number
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectJobJobDelete(project: string, job: number, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get a job file. The job part is the jobID (a number) and the file is the fileID (a number)
	     * @param {string} project Project short label
	     * @param {number} job job number
	     * @param {number} fileno file number
	     * @param {string} [mode] (optional) set to mode&#x3D;direct to get the output in the response output instead of as a download file. This assumes the file is HTML
	     * @param {string} [format] (optional) set to format&#x3D;json to get a json output instead of XML
	     * @param {string} [disposition] (optional, from version 2.3) set to disposition&#x3D;inline to ask the server to send the disposition to &#x27;inline&#x27; instead of &#x27;attachment&#x27;
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectJobJobFilenoGet(project: string, job: number, fileno: number, mode?: string, format?: string, disposition?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get a job status, including generated files. The variable part is the jobID (a number)
	     * @param {string} project Project short label
	     * @param {number} job job number
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectJobJobGet(project: string, job: number, options?: any): Promise<JobsStatusWithUrl>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.2
	     * @summary Sets the progress of a job
	     * @param {string} project Project short label
	     * @param {number} job job number
	     * @param {number} progress progress (0 to 100, 200 for error)
	     * @param {string} [status] (optional( status text
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectJobJobPost(project: string, job: number, progress: number, status?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
	     * @summary Get the label history of a project -  list of all label changes for all items
	     * @param {string} project Project short label
	     * @param {string} [itemRef] (optional) ask for just one item (the return structure is still an array in that case)
	     * @param {string} [from] (optional) date from
	     * @param {string} [to] (optional) date to - works only if you only specified a from
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectLabelhistoryGet(project: string, itemRef?: string, from?: string, to?: string, options?: any): Promise<LabelHistory[]>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
	     * @summary Get the merge history of a project - needs the 'merge' module
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectMergehistoryGet(project: string, options?: any): Promise<MergeHistory[]>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
	     * @summary Get the merge information - needs the 'merge' module
	     * @param {string} project Project short label
	     * @param {string} [excludeCategories] (optional) comma-delimited list of categories to exclude
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectMergeinfoGet(project: string, excludeCategories?: string, options?: any): Promise<MergeInfo[]>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Move items into this folder
	     * @param {string} project Project short label
	     * @param {string} folder Folder reference (F-XXX-nn)
	     * @param {string} reason The reason why the user is doing this
	     * @param {string} [items] List of items to move in
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectMoveinFolderPost(project: string, folder: string, reason: string, items?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Find items based on a search string in one project
	     * @param {string} project Project short label
	     * @param {string} search search term
	     * @param {string} id search id. Used by MatrixJira js to match queries with answers. Is returned in the output structure
	     * @param {string} [filter] (optional) applies a filter, can be negative
	     * @param {string} [fieldsOut] (optional) comma-delimited list of fields to return -  101,102 - or * for all
	     * @param {number} [labels] (optional) set to 1 to return labels in the output
	     * @param {number} [treeOrder] (optional) set to 1 to return items in tree order (otherwise it&#x27;s project,category,serial)
	     * @param {string} [links] (optional) set to up,down to return up and down items, or only up or only down
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectNeedleGet(project: string, search: string, id: string, filter?: string, fieldsOut?: string, labels?: number, treeOrder?: number, links?: string, options?: any): Promise<TrimNeedle>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Adds a category to a project
	     * @param {string} project Project short label
	     * @param {string} label Category label
	     * @param {string} shortLabel Category short label
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectPost(project: string, label: string, shortLabel: string, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Publishes an item. Item has the form PUB-nnn
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} reason reason for the publication
	     * @param {string} [trainingFor] (optional) list of items for which we need to add training. If list is not there, all trainings will be generated
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectPublishItemPost(project: string, item: string, reason: string, trainingFor?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) for the reports, read/write for the signed reports. Valid from version 2.1 or earlier
	     * @summary Asks for a new report. The job ID is returned as answer. {report} can be REPORT-n, DOC-n, SIGN-n or a report name.To follow the progress of the job, the GET /{project}/job/{jobid} can be called
	     * @param {string} project Project short label
	     * @param {string} report name of the report
	     * @param {string} isSignedReport If set to true, means the report needs to generate a signed record
	     * @param {string} includeSignatures List of comma separated users who need to sign
	     * @param {string} newTitle New title for the SIGN- item that is generated (only valid for isSignedReport)
	     * @param {string} copyFields List of from-to fields (123,456),(124,457) that we can use to generate the fields in the SIGN record (only valid for isSignedReport)
	     * @param {string} [itemList] (optional) list of items to use in the report. By default all categories are used
	     * @param {string} [url] (optional) url to generate in the filter
	     * @param {string} [resturl] (optional) REST url to generate in the filter
	     * @param {string} [format] (optional) format -  html (default), pdf, docx, odt, xml, zipdocx, zippdf or package (from 2.2)
	     * @param {string} [filter] (optional) specify a filter. Can be negative filters
	     * @param {number} [useOld] (optional) ask to use the old report engine (pre 1.11) if set to 1.
	     * @param {string} [atDate] (optional) generates the report at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectReportReportPost(project: string, report: string, isSignedReport: string, includeSignatures: string, newTitle: string, copyFields: string, itemList?: string, url?: string, resturl?: string, format?: string, filter?: string, useOld?: number, atDate?: string, options?: any): Promise<CreateReportJobAck>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get a project's schema
	     * @param {string} project Project short label
	     * @param {number} [simple] (optional) set to simple&#x3D;1 to have a simpler output (no fields, round shape)
	     * @param {string} [excludeCategories] (optional) comma-separated list of categories to exclude, like DOC,SIGN
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectSchemaGet(project: string, simple?: number, excludeCategories?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Get all settings of a project
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectSettingGet(project: string, options?: any): Promise<GetProjectSettingAck>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Adds or changes a project setting. If the value is empty, the setting will be deleted.
	     * @param {string} project Project short label
	     * @param {string} key setting key
	     * @param {string} value value
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectSettingPost(project: string, key: string, value: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Signs an item. Item has the form SIGN-nnn
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} password signature password - the user who is signing is the one who is logged in
	     * @param {string} [acceptComments] (optional) adds an acceptance comment
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectSignItemPost(project: string, item: string, password: string, acceptComments?: string, options?: any): Promise<SignItemAck>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Edit the signature parts
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} rejectSign The reason why the user is rejecting the signature
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectSignItemPut(project: string, item: string, rejectSign: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Asks for a new report. The job ID is returned as answer
	     * @param {string} project Project short label
	     * @param {string} [url] (optional) url to generate in the filter
	     * @param {string} [resturl] (optional) REST url to generate in the filter
	     * @param {string} [format] (optional) format -  html (default), pdf, docx, odt, xml, zipdocx or zippdf
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectSignedreportSIGNNPost(project: string, url?: string, resturl?: string, format?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Get all tags of a project. Works on any project if user is admin
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectTagGet(project: string, options?: any): Promise<Tag[]>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Adds a tag to a project
	     * @param {string} project Project short label
	     * @param {string} label Tag label. Must be unique within a project
	     * @param {number} auditId Id of the audit this tag is based on
	     * @param {string} type Type of tag (default -  tag)
	     * @param {string} comments Free optional comment
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectTagPost(project: string, label: string, auditId: number, type: string, comments: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.2
	     * @summary Get all todos for the current user, for oneproject
	     * @param {string} project Project short label
	     * @param {string} [itemRef] (optional) set to an item to have all todos linked to an item, regardless of the user
	     * @param {number} [includeDone] (optional) set to 1 to include done todos and todo&#x27;s created by the user
	     * @param {number} [includeAllUsers] (optional) set to 1 to include all todos for all users
	     * @param {number} [includeFuture] (optional) set to 1 to include future todos as well (defaults to 0)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectTodoGet(project: string, itemRef?: string, includeDone?: number, includeAllUsers?: number, includeFuture?: number, options?: any): Promise<GetTodosAck>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.2
	     * @summary Creates a todo on an item (note that you only need read access for this POST method) for you or others
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} text The todo reason
	     * @param {number} [fieldId] (optional) If set, specifies that the todo is related to that field (review, ...)
	     * @param {string} [logins] (optional) If set, a list of user logins or groups to which these todo apply
	     * @param {string} [todoType] (optional) The todo type -  &#x27;user&#x27; by default
	     * @param {string} [atDate] (optional) a date in the future for reminders
	     * @param {number} [auto] (optional) set to 1 to create an auto-notification (0 by default)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectTodoItemPost(project: string, item: string, text: string, fieldId?: number, logins?: string, todoType?: string, atDate?: string, auto?: number, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.2
	     * @summary Removes (mark as done) a todo.
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectTodoNDelete(project: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Touches (set to same date) an item or folder
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} reason The reason why the user is doing this
	     * @param {number} [nbLayers] (optional) Number of layers -- 1 by default
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectTouchItemPut(project: string, item: string, reason: string, nbLayers?: number, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get full tree
	     * @param {string} project Project short label
	     * @param {string} [fancy] (optional) returns a fancy tree
	     * @param {string} [filter] (optional) applies a filter
	     * @param {string} [atDate] (optional) generates the tree at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectTreeGet(project: string, fancy?: string, filter?: string, atDate?: string, options?: any): Promise<FancyFolder[]>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Unhides a project.
	     * @param {string} project Project short label
	     * @param {string} newShort The new project short name to use
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectUnhidePut(project: string, newShort: string, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Converts a word document to an HTML, with images pointing to uploaded files on the server
	     * @param {string} project Project short label
	     * @param {string} reason The reason why the user is doing this
	     * @param {number} [fileNo] If specified, means that the conversion is from an already uploaded file. Otherwise the file must be uploaded as body of this call
	     * @param {string} [targetDocumentFolder] target document folder (in this case creates a document)
	     * @param {number} [useAsField] set to 1 to have this docx used as a field. In this case the return value is the html equivalent, with some meta
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    projectWordconvertPost(project: string, reason: string, fileNo?: number, targetDocumentFolder?: string, useAsField?: number, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Get list of all projects, all settings and current user, all todos and JIRA meta create object
	     * @param {number} [adminUI] (optional) set to adminUI&#x3D;1 to have all projects even the ones you are not assigned to, as an admin
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    rootGet(adminUI?: number, options?: any): Promise<ListProjectAndSettings>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Creates a new project. Either the full project is sent as XML payload, or the label and shortLabel are given. If uploading data for a whole project, label and shortLabel are optional but overwrite the XML content if present. Branching can be done with an audit report as payload, and branch* must be defined in that case
	     * @param {string} label Project label
	     * @param {string} shortLabel Project short label
	     * @param {string} [overwrite] Must be set to yes if you&#x27;re overwriting an existing project
	     * @param {string} [branchLabel] Must be set to branch (optional)
	     * @param {string} [branchTag] Must be set to branch, and match a tag in the audit export (optional)
	     * @param {string} [branchComment] Comment for the branch (optional)
	     * @param {string} [branchBaseProjectLabel] Label of the base Project (optional)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    rootPost(label: string, shortLabel: string, overwrite?: string, importUsers?: string, branchLabel?: string, branchTag?: string, branchComment?: string, branchBaseProjectLabel?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.1 or earlier
	     * @summary Retrieves the user list
	     * @param {string} details (optional) -  if set to 1 returns all details
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userGet(details: string, options?: any): Promise<GetUserListAck>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Creates a new user. Arguments are either a set of arguments or json
	     * @param {string} login User login name
	     * @param {string} email User email
	     * @param {string} password User password in clear
	     * @param {string} json A json struct with login, email, password, first, last, signatureImage(int), signaturePassword, admin(int)
	     * @param {string} [first] User first name (optional)
	     * @param {string} [last] User last name (optional)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userPost(login: string, email: string, password: string, json: string, first?: string, last?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1 or earlier
	     * @summary Retrieves all actions of a user
	     * @param {string} user user login name
	     * @param {number} [startAt] (optional) Pagination -  starts the audit after N records
	     * @param {number} [maxResults] (optional) Pagination -  Retrieve N results per page
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserAuditGet(user: string, startAt?: number, maxResults?: number, options?: any): Promise<TrimAuditList>;
	    /**
	     * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1 or earlier
	     * @summary Check a user's password
	     * @param {string} user user login name
	     * @param {string} password Asks for a check of the password1
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserCheckGet(user: string, password: string, options?: any): Promise<CheckPasswordAck>;
	    /**
	     * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1 or earlier
	     * @summary Check a user's password
	     * @param {string} user user login name
	     * @param {string} password Asks for a check of the password1
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserCheckPost(user: string, password: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Reserved to Matrix Requirements operations. Valid from version 2.1 or earlier
	     * @summary Removes completely a user (only used for unit testing)
	     * @param {string} user user login name
	     * @param {string} confirm Needs to be yes for the method to be executed
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserDelete(user: string, confirm: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1 or earlier
	     * @summary Retrieves full details of a user
	     * @param {string} user user login name
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserGet(user: string, options?: any): Promise<UserType>;
	    /**
	     * Permissions - No permissions needed. Valid from version 2.1 or earlier
	     * @summary Login
	     * @param {string} user user login name
	     * @param {string} password password in clear
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserLoginPost(user: string, password: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Logout
	     * @param {string} user user login name
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserLogoutPost(user: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.1 or earlier
	     * @summary Sets a new password for an account that has a password_reset token in place (the {user} in the URL doesn't matter)
	     * @param {string} user user login name
	     * @param {string} token password_reset token
	     * @param {string} password New password to use from now on
	     * @param {string} [signaturePassword] (optional) New password to use from now on for signatures
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserPasswordResetPost(user: string, token: string, password: string, signaturePassword?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Adds a user to a project
	     * @param {string} user user login name
	     * @param {string} project Project short label
	     * @param {number} permission 0 for no access, 1 for readonly, 2 for read/write (default), 3 for admin, 4 for visitor
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserProjectPost(user: string, project: string, permission: number, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Edits the user permissions in a project. If permission is 0, it means the user has no longer access (but we retain its records for audit purposes)
	     * @param {string} user user login name
	     * @param {string} project Project short label
	     * @param {number} permission 0 for no access, 1 for readonly, 2 for read/write (default), 3 for admin
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserProjectPut(user: string, project: string, permission: number, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1 or earlier
	     * @summary Retrieves all projects a user has access to
	     * @param {string} user user login name
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserProjectsGet(user: string, options?: any): Promise<UserDetails>;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.1 or earlier
	     * @summary Edits the user details. Arguments are all separated or a single json argument. Regular users can only change their signature and passwords.
	     * @param {string} user user login name
	     * @param {string} email User new email
	     * @param {string} password User new password in clear
	     * @param {string} json A json struct with login, email, password, first, last, signatureImage(int), signaturePassword, admin(int)
	     * @param {string} [first] User first name (optional)
	     * @param {string} [last] User last name (optional)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserPut(user: string, email: string, password: string, json: string, first?: string, last?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Renames a user login
	     * @param {string} user user login name
	     * @param {string} newLogin The new login name. Cannot be one of the existing
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserRenamePut(user: string, newLogin: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.1 or earlier
	     * @summary Adds or deletes a user setting.
	     * @param {string} user user login name
	     * @param {string} key Name of the setting
	     * @param {string} value Value of the setting. If empty, deletes the setting.
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserSettingPost(user: string, key: string, value: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Sets the new status of the user. Can be normal,blocked or deleted
	     * @param {string} user user login name
	     * @param {string} status Can be normal,blocked or deleted
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserStatusPut(user: string, status: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.1 or earlier
	     * @summary Removes a user token
	     * @param {string} user user login name
	     * @param {string} value The token to be removed
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserTokenDelete(user: string, value: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.1 or earlier
	     * @summary Adds a token for a user
	     * @param {string} user user login name
	     * @param {string} purpose Purpose of the token. Not checked. Should contain either \&quot;password_reset\&quot; or \&quot;oauth\&quot;
	     * @param {string} [value] Value of the token - by default generated by this call
	     * @param {string} [reason] Free text explain where the token will be used (URL or others). Should be set for oauth, not needed for others
	     * @param {number} [validity] Validity of the token in hours - if not set, doesn&#x27;t expire
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     */
	    userUserTokenPost(user: string, purpose: string, value?: string, reason?: string, validity?: number, options?: any): Promise<string>;
	};
	/**
	 * DefaultApi - object-oriented interface
	 * @export
	 * @class DefaultApi
	 * @extends {BaseAPI}
	 */
	export class DefaultApi extends BaseAPI {
	    /**
	     * Permissions - No permissions needed. Valid from version 2.1 or earlier
	     * @summary Asks for the difference between A and B html exerpts, and produce the B html with annotations
	     * @param {string} [arg] json object with the arguments
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    allCompareHtmlPost(arg?: string, options?: any): Promise<HtmlCompareResult>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Returns all info about a date
	     * @param {string} [date] (optional) an input date formatted as iso8601. If not present, current date/time is used
	     * @param {string} [dateformat] (optional) a date formatter. If not present, current date format is used
	     * @param {string} [timeformat] (optional) a date-time formatter. If not present, current date/time format is used
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    allDateGet(date?: string, dateformat?: string, timeformat?: string, options?: any): Promise<GetDateAck>;
	    /**
	     * Permissions - Must have the right key to download the file. Valid from version 2.1 or earlier
	     * @summary Retrieve one customer file. The fileno is a simple fileId. This request returns the actual file
	     * @param {number} fileno file number
	     * @param {string} key The key of the file
	     * @param {string} [disposition] (optional, from version 2.3) set to disposition&#x3D;inline to ask the server to send the disposition to &#x27;inline&#x27; instead of &#x27;attachment&#x27;
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    allFileFilenoGet(fileno: number, key: string, disposition?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Retrieve list of all customer-wide files
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    allFileGet(options?: any): Promise<GetProjectFileListAck>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Creates a new customer-wide file - the file should be uploaded as payload. Its mime type should be sent through the HTTP protocol.
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    allFilePost(options?: any): Promise<AddFileAck>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Retrieve license status
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    allLicenseGet(options?: any): Promise<LicenseStatus>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Adds a log entry (server side).
	     * @param {string} message Message to log
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    allLogPost(message: string, options?: any): Promise<string>;
	    /**
	     * Permissions - No permissions needed. Valid from version 2.1 or earlier
	     * @summary Monitoring object
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    allMonitorGet(options?: any): Promise<GetMonitorAck>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Find items based on a search string in all projects
	     * @param {string} search search term
	     * @param {string} id search id. Used by MatrixJira js to match queries with answers. Is returned in the output structure
	     * @param {string} [filter] (optional) applies a filter, can be negative
	     * @param {string} [fieldsOut] (optional) comma-delimited list of fields to return -  101,102 - or * for all
	     * @param {number} [labels] (optional) set to 1 to return labels in the output
	     * @param {string} [links] (optional) set to up,down to return up and down items, or only up or only down
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    allNeedleGet(search: string, id: string, filter?: string, fieldsOut?: string, labels?: number, links?: string, options?: any): Promise<TrimNeedle>;
	    /**
	     * Permissions - No permissions needed. Valid from version 2.2
	     * @summary The OpenAPI 3.0 definition of our REST API
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    allOpenapiGet(options?: any): Promise<string>;
	    /**
	     * Permissions - No permissions needed. Valid from version 2.1 or earlier
	     * @summary Lists all reports
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    allReportsGet(options?: any): Promise<GetReportsAck>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Sends an email. The parameters are sent as a POST JSON payload. The arguments in this help are in fact fields in that json
	     * @param {string} to Comma-delimited list of user names to send as to
	     * @param {string} cc Comma-delimited list of user names to send as cc
	     * @param {string} subject Email subject
	     * @param {string} htmlbody HTML body
	     * @param {string} textbody text body, equivalent to the html (both are sent)
	     * @param {number} [system] (optional) if set to 1 makes it a system email (not sent by the actual user
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    allSendmailPost(to: string, cc: string, subject: string, htmlbody: string, textbody: string, system?: number, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Creates a service desk issue. The parameters are sent as a POST JSON payload. The arguments in this help are in fact fields in that json
	     * @param {string} summary Summary
	     * @param {string} description Description
	     * @param {string} matrixProject Matrix project
	     * @param {string} matrixItem Matrix Item
	     * @param {string} browser Browser
	     * @param {string} log Log
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    allServicedeskPost(summary: string, description: string, matrixProject: string, matrixItem: string, browser: string, log: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get all settings of a customer
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    allSettingGet(options?: any): Promise<GetSettingAck>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Adds or changes a customer setting. If the value is empty, the setting will be deleted.
	     * @param {string} key setting key
	     * @param {string} value value
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    allSettingPost(key: string, value: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get instance status
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    allStatusGet(options?: any): Promise<ServerStatus>;
	    /**
	     * Permissions - No permissions needed. Valid from version 2.1 or earlier
	     * @summary Returns all accepted time zones
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    allTimezoneGet(options?: any): Promise<string[]>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.2
	     * @summary Get all todos for the current user, for all projects
	     * @param {number} [includeDone] (optional) set to 1 to include done todos and todo&#x27;s created by the user
	     * @param {number} [includeFuture] (optional) set to 1 to include future todos as well (defaults to 0)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    allTodoGet(includeDone?: number, includeFuture?: number, options?: any): Promise<GetTodosAck>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary WebHook
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    allWebhookPost(options?: any): Promise<string>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.2
	     * @summary Retrieves the group list
	     * @param {number} [details] (optional) -  if set to 1 returns all details -- in this case user needs to be ADMIN
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    groupGet(details?: number, options?: any): Promise<GetGroupListAck>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Removes a group
	     * @param {string} groupId group Id
	     * @param {string} confirm Needs to be yes for the method to be executed
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    groupGroupIdDelete(groupId: string, confirm: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.2
	     * @summary Retrieves details of a group
	     * @param {string} groupId group Id
	     * @param {number} [details] (optional) -  if set to 1 returns all details -- in this case user needs to be ADMIN
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    groupGroupIdGet(groupId: string, details?: number, options?: any): Promise<GroupType>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Adds a group to a project (or removes it)
	     * @param {string} groupId group Id
	     * @param {string} project Project short label
	     * @param {number} [permission] Specify the (new) permission for that group in that project
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    groupGroupIdProjectProjectPost(groupId: string, project: string, permission?: number, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Renames a group
	     * @param {string} groupId group Id
	     * @param {string} newName The new group name. Cannot be one of the existing. Must start with &#x27;group.&#x27;
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    groupGroupIdRenamePut(groupId: string, newName: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.2
	     * @summary Adds a user to a group
	     * @param {string} groupId group Id
	     * @param {string} user user login name
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    groupGroupIdUserUserPut(groupId: string, user: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Sets all users of a group (replacing potential former content)
	     * @param {string} groupId group Id
	     * @param {string} users List of all users members of that group, commas-separated
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    groupGroupIdUserlistPut(groupId: string, users: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Creates a new group
	     * @param {string} groupName group name
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    groupGroupNamePost(groupName: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Removes a user from a group
	     * @param {string} groupName group name
	     * @param {string} user user login name
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    groupGroupNameUserUserDelete(groupName: string, user: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.3
	     * @summary Merge branch into mainline. First project is the mainline, second is the branch. The payload must contain a json object with a list of actions to perform.
	     * @param {string} mainproject mainproject
	     * @param {string} branchproject branchproject
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    mainprojectMergeBranchprojectPost(mainproject: string, branchproject: string, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have QMS viewer access (or higher) to the project. Valid from version 2.2
	     * @summary Retrieves all accesses in a project (list of groups and users who have access)
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectAccessGet(project: string, options?: any): Promise<GetAccessAck>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Retrieves all changes in a project
	     * @param {string} project Project short label
	     * @param {number} [startAt] (optional) Pagination -  starts the audit after N records
	     * @param {number} [maxResults] (optional) Pagination -  Retrieve N results per page
	     * @param {string} [deleteOnly] (optional) if set to yes, only returns actions of type delete
	     * @param {string} [tech] (optional) if set to yes, returns the underneath changes
	     * @param {number} [auditIdMin] (optional) sets a minimum ID for audits, as returned by GET calendar
	     * @param {number} [auditIdMax] (optional) sets a maximum ID for audits
	     * @param {number} [noReport] (optional) set to 1 to avoid having reports
	     * @param {number} [noImport] (optional) set to 1 to avoid having imports
	     * @param {string} [include] (optional) set to a list of actions to include (delete,undelete,add,edit,...)
	     * @param {number} [resolveRef] (optional) set to 1 to resolve item IDs into refs
	     * @param {string} [itemRef] (optional) restrict the audit to only those mentionning this item
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectAuditGet(project: string, startAt?: number, maxResults?: number, deleteOnly?: string, tech?: string, auditIdMin?: number, auditIdMax?: number, noReport?: number, noImport?: number, include?: string, resolveRef?: number, itemRef?: string, options?: any): Promise<TrimAuditList>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.3
	     * @summary Launches a server-side branch or clone - needs the 'merge' module if actual branching
	     * @param {string} project Project short label
	     * @param {string} label Branch project label
	     * @param {string} shortLabel Branch project short label
	     * @param {number} keepPermissions 1 or 0. Defaults to 0 (with 0 the project doesn&#x27;t have any permission after branching)
	     * @param {number} keepContent 1 or 0. Defaults to 1. 0 only works without branch and without history
	     * @param {number} [branch] (optional) Set to 1 to branch (default), 0 to just copy/clone
	     * @param {number} [history] (optional) Set to 1 to branch or copy with history, defaults to 0
	     * @param {string} [tagToCreate] (optional) specify a tag (by default auto-generated)
	     * @param {string} [branchInThePastTag] (optional) specify a tag to branch in the past (needs history&#x3D;1)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectBranchPost(project: string, label: string, shortLabel: string, keepPermissions: number, keepContent: number, branch?: number, history?: number, tagToCreate?: string, branchInThePastTag?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get all dates at which a project has been modified
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectCalendarGet(project: string, options?: any): Promise<CalendarType[]>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Removes (inactivate) a category. Will fail on REPORT and FOLDER categories
	     * @param {string} project Project short label
	     * @param {string} category Category short label
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectCatCategoryDelete(project: string, category: string, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get details of a category
	     * @param {string} project Project short label
	     * @param {string} category Category short label
	     * @param {string} [filter] (optional) specify a filter
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectCatCategoryGet(project: string, category: string, filter?: string, options?: any): Promise<CategoryFull>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Modifies a categorie's labels, and fix the project's settings to reflect that change, OR modifies a category's order.
	     * @param {string} project Project short label
	     * @param {string} category Category short label
	     * @param {number} order The new order (for reordering)
	     * @param {string} shortLabel The new short label for that category (for renaming)
	     * @param {string} label The new long label for that category (for renaming)
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectCatCategoryPut(project: string, category: string, order: number, shortLabel: string, label: string, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get all settings of a category
	     * @param {string} project Project short label
	     * @param {string} category Category short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectCatCategorySettingGet(project: string, category: string, options?: any): Promise<GetSettingAck>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Adds or changes a category setting. If the value is empty, the setting will be deleted
	     * @param {string} project Project short label
	     * @param {string} category Category short label
	     * @param {string} key setting key
	     * @param {string} value value
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectCatCategorySettingPost(project: string, category: string, key: string, value: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get all categories of a project
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectCatGet(project: string, options?: any): Promise<GetProjectStructAck>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Adds a fields in a category
	     * @param {string} project Project short label
	     * @param {string} label Field label
	     * @param {string} category Category short label
	     * @param {string} fieldType Type of field
	     * @param {string} fieldParam Parameter for the field
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectCatPost(project: string, label: string, category: string, fieldType: string, fieldParam: string, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Clones a project
	     * @param {string} project Project short label
	     * @param {string} label Project label
	     * @param {string} shortLabel Project short label
	     * @param {number} keepHistory 1 or 0. Defaults to 0
	     * @param {number} keepContent 1 or 0. Defaults to 0 (only the REPORT part is kept, make sense only if keepHistory is 0)
	     * @param {number} keepPermissions 1 or 0. Defaults to 0 (with 0 the project doesn&#x27;t have any permission after cloning)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectClonePost(project: string, label: string, shortLabel: string, keepHistory: number, keepContent: number, keepPermissions: number, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Asks for the difference between 2 signed documents, as a Word document. The job ID is returned as answer
	     * @param {string} project Project short label
	     * @param {string} signitem1 SIGN-xx for the first SIGN document to compare
	     * @param {string} signitem2 SIGN-xx for the 2nd SIGN document to compare
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectCompareSignitem1Signitem2Post(project: string, signitem1: string, signitem2: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get a project's schema
	     * @param {string} [excludeCategories] (optional) comma-separated list of categories to exclude, like DOC,SIGN
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectConfigcheckGet(excludeCategories?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read/write access to the project - admins can impersonate. Valid from version 2.2
	     * @summary Copy items from a folder to another one
	     * @param {string} project Project short label
	     * @param {string} itemOrFolder Item reference (XXX-nn) or folder (F-XXX-nn)
	     * @param {string} targetFolder Reference of the target folder (F-categ-serial)
	     * @param {string} reason The reason why the user is doing this
	     * @param {string} [targetProject] (optional) project to copy into (by default, same project)
	     * @param {number} [copyLabels] (optional) 0 or 1. Defaults to 0
	     * @param {string} [map] (optional) mapN&#x3D;M -  map field N in source to field M in target
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectCopyItemOrFolderPost(project: string, itemOrFolder: string, targetFolder: string, reason: string, targetProject?: string, copyLabels?: number, map?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Reserved to Matrix Requirements operations. Valid from version 2.1 or earlier
	     * @summary Removes completely a project (only used for unit testing). This is an actual DELETE in the database.
	     * @param {string} project Project short label
	     * @param {string} confirm Needs to be yes for the method to be executed
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectDelete(project: string, confirm: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Converts an excel file (xls, xlsx) into a XML version that we send straight back as an XML payload.
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectExcelxmlPost(project: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Executes UC or TC into XTC items
	     * @param {string} project Project short label
	     * @param {any} jSONPayload There must be a JSON as a payload. It includes all parameters AND the reason
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectExecutePost(project: string, jSONPayload: any, options?: any): Promise<FolderAnswer>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Asks for an export of some items. The job ID is returned as answer
	     * @param {string} project Project short label
	     * @param {string} itemList Mandatory list of items to export.
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectExportGet(project: string, itemList: string, options?: any): Promise<ExportItemsAck>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Removes (inactivate) a field.
	     * @param {string} project Project short label
	     * @param {string} category Category short label
	     * @param {number} field The field number (like field&#x3D;502)
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectFieldCategoryDelete(project: string, category: string, field: number, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get 1 field of an item. {item} has the form CATEG-number.
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} field Mandatory. Field number (faster) OR field label
	     * @param {string} [format] Optional. Format for the return. Can be text, json, html, xml or xslt. Defaults to html
	     * @param {number} [download] Optional. 1 to have in download, 0 as direct result. Defaults to 0.
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectFieldItemGet(project: string, item: string, field: string, format?: string, download?: number, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Modifies a field's label and parameter OR modifies a field's order.
	     * @param {string} project Project short label
	     * @param {number} field The field number (like field&#x3D;502)
	     * @param {string} label The new label (for renaming)
	     * @param {string} fieldParam The new parameter (for renaming)
	     * @param {number} order The new order (for reordering)
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectFieldPut(project: string, field: number, label: string, fieldParam: string, order: number, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have the right key to download the file. Valid from version 2.1 or earlier
	     * @summary Retrieve one project file. The fileno is a simple fileId. This request returns the actual file
	     * @param {string} project Project short label
	     * @param {number} fileno file number
	     * @param {string} key The key of the file
	     * @param {string} [disposition] (optional, from version 2.3) set to disposition&#x3D;inline to ask the server to send the disposition to &#x27;inline&#x27; instead of &#x27;attachment&#x27;
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectFileFilenoGet(project: string, fileno: number, key: string, disposition?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Retrieve list of all files owned by a project
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectFileGet(project: string, options?: any): Promise<GetProjectFileListAck>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Creates a new file - the file should be uploaded as payload (or through the url argument as an alternative). It's mime type should be sent through the HTTP protocol.
	     * @param {string} project Project short label
	     * @param {string} [url] Optional argument -  the file could also come from an external URL. In this case there will be an error if we can&#x27;t retrieve it on the server
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectFilePost(project: string, url?: string, options?: any): Promise<AddFileAck>;
	    /**
	     * Permissions - Must have read/write access to the project - admins can impersonate. Valid from version 2.1 or earlier
	     * @summary Creates a new folder
	     * @param {string} project Project short label
	     * @param {string} parent Reference of the parent folder in the form F-CATEG-serial (example -  F-SPEC-17)
	     * @param {string} label folder label
	     * @param {string} reason The reason why the user is doing this
	     * @param {string} [fxField] (optional) Add one of each of these to set folder&#x27;s fields. fx is followed by the field ID (a number)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectFolderPost(project: string, parent: string, label: string, reason: string, fxField?: string, options?: any): Promise<AddItemAck>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get list of project info -  users, settings, categories
	     * @param {string} project Project short label
	     * @param {number} [adminUI] (optional) set to adminUI&#x3D;1 to have this project data even if you are not assigned to, as an admin
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectGet(project: string, adminUI?: number, options?: any): Promise<ProjectInfo>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Hides a project
	     * @param {string} project Project short label
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectHidePut(project: string, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.2
	     * @summary Launches a server-side hook
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} hook name of the hook
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectHookItemPost(project: string, item: string, hook: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
	     * @summary Cleans up an input html blob according to the current html cleanup rules. The blob is passed in the POST payload. The payload must be a json object with {\"htmlToClean\" - \"x\"}
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectHtmlCleanupBlobPost(project: string, options?: any): Promise<GetHtmlBlob[]>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
	     * @summary Get the list of items that would be changed if we applied html cleanup. You can pass a cleanup setting in the payload of the POST. If it's not there we take the customer (global) setting and force the cleanup to true
	     * @param {string} project Project short label
	     * @param {string} [categories] (optional) list of comma-delimited categories to go through, all by default
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectHtmlCleanupTestPost(project: string, categories?: string, options?: any): Promise<HtmlTestCleanup[]>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Imports some items into a project
	     * @param {string} project Project short label
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectImportPost(project: string, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get details of a folder. {folder} has the form F-CATEG-number[-vN].
	     * @param {string} project Project short label
	     * @param {string} folder Folder reference (F-XXX-nn)
	     * @param {number} [history] (optional) set history&#x3D;1 to retrieve list of all versions
	     * @param {string} [filter] (optional) specify a filter
	     * @param {string} [children] (optional) set to yes if you need the children as well (recursively).
	     * @param {string} [atDate] (optional) retrieves the item at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z. Not compatible with the version query -vN
	     * @param {number} [fields] (optional) set fields&#x3D;1 to retrieve list of all fields, even the empty ones
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectItemFolderGet(project: string, folder: string, history?: number, filter?: string, children?: string, atDate?: string, fields?: number, options?: any): Promise<TrimFolder>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Removes (inactivate) an item (or a folder). Item has the form (F-)CATEG-number. Will fail on non-empty folders
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} confirm Needs to be yes for the method to be executed IF it is a non-empty folder
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectItemItemDelete(project: string, item: string, confirm: string, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get details of an item. {item} has the form CATEG-number[-vN].
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {number} [history] (optional) set history&#x3D;1 to retrieve list of all versions
	     * @param {number} [fields] (optional) set fields&#x3D;1 to retrieve list of all fields, even the empty ones
	     * @param {string} [filter] (optional) specify a filter
	     * @param {string} [atDate] (optional) retrieves the item at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z. Not compatible with the version query -vN
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectItemItemGet(project: string, item: string, history?: number, fields?: number, filter?: string, atDate?: string, options?: any): Promise<TrimItem>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Restores an item. Item has the form CATEG-number
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} reason The reason why the user is doing this
	     * @param {number} [at] (optional) If set, specifies that the item should be restored as it was in that version
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectItemItemPost(project: string, item: string, reason: string, at?: number, options?: any): Promise<UndeleteAnswer>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Modifies an item or a folder. Item has the form CATEG-number, folders -  F-CATEG-number
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} reason The reason why the user is doing this
	     * @param {string} [title] Specify new title for the item -- if not there, keep the old title
	     * @param {string} [fxid_] Values of each field, the URI parameter name is fx followed by the ID of the field (fx501 for example)
	     * @param {string} [labels] (optional) List of labels currently applied to this element. If none is specified, will consider there are none. Should be sent as a comma-delimited list of strings
	     * @param {string} [auditAction] (optional) Specify a new verb for the audit action. Defaults to edit
	     * @param {string} [newFolder] (optional) Name of a new folder to move the item into (exclusive from title and fx arguments)
	     * @param {number} [newPosition] (optional) Indicates a new position within the newfolder. If newFolder is not specified, only changes the position. Exclusive of title and fx arguments. Position is an integer starting at 1
	     * @param {string} [filter] (optional) A filter
	     * @param {string} [linksUp] (optional) Comma-delimited (%2C)list of references to up items
	     * @param {string} [linksDown] (optional) Comma-delimited (%2C)list of references to down items
	     * @param {number} [currentVersion] (optional) will not make the change if the current version is not that one
	     * @param {number} [onlyThoseFields] (optional) when set to 1 says that the only fields to change are those passed
	     * @param {number} [onlyThoseLabels] (optional) when set to 1 says that the only labels to change are those passed. To remove a label in this case, prefix it with minus
	     * @param {number} [failOnCleanup] (optional) when set to 1 (default) says that the call will fail if any HTML cleanup is involved. With 0 it will clean and not fail
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectItemItemPut(project: string, item: string, reason: string, title?: string, fxid_?: string, labels?: string, auditAction?: string, newFolder?: string, newPosition?: number, filter?: string, linksUp?: string, linksDown?: string, currentVersion?: number, onlyThoseFields?: number, onlyThoseLabels?: number, failOnCleanup?: number, options?: any): Promise<TrimItem>;
	    /**
	     * Permissions - Must have read/write access to the project - admins can impersonate. Valid from version 2.1 or earlier
	     * @summary Adds an item in a folder
	     * @param {string} project Project short label
	     * @param {string} title Item title
	     * @param {string} folder Reference of the folder (F-categ-serial)
	     * @param {string} reason The reason why the user is doing this
	     * @param {string} linksUp Comma-delimited (%2C)list of references to up items
	     * @param {string} linksDown Comma-delimited (%2C)list of references to down items
	     * @param {string} [fxID_] Values of each field, the URI parameter name is fx followed by the ID of the field (fx501 for example)
	     * @param {string} [labels] (optional) List of labels currently applied to this element. If none is specified, will consider there are none. Should be sent as a comma-delimited list of strings
	     * @param {string} [author] The author (login name) - only works when superadmin is issuing this
	     * @param {number} [failOnCleanup] (optional) when set to 1 (default) says that the call will fail if any HTML cleanup is involved. With 0 it will clean and not fail
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectItemPost(project: string, title: string, folder: string, reason: string, linksUp: string, linksDown: string, fxID_?: string, labels?: string, author?: string, failOnCleanup?: number, options?: any): Promise<AddItemAck>;
	    /**
	     * Permissions - ?. Valid from version 2.1 or earlier
	     * @summary Removes (inactivate) a link between 2 items. Items are in the form CATEG-number
	     * @param {string} project Project short label
	     * @param {string} upitem Item reference (XXX-nn) for the UP item
	     * @param {string} downitem Item reference (XXX-nn) for the DOWN item
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectItemlinkUpitemDownitemDelete(project: string, upitem: string, downitem: string, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Adds a link between 2 items. Both items are in the form CATEG-number
	     * @param {string} project Project short label
	     * @param {string} upitem Item reference (XXX-nn) for the UP item
	     * @param {string} downitem Item reference (XXX-nn) for the DOWN item
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectItemlinkUpitemDownitemPost(project: string, upitem: string, downitem: string, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get the list of items that are detailed in a DOC/SIGN item.
	     * @param {string} project Project short label
	     * @param {string} signitem SIGN-xx item
	     * @param {number} [detailed] Optional. When set to 1 adds a secondaryItems list in the answer. Defaults to 0.
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectItemlistSignitemGet(project: string, signitem: string, detailed?: number, options?: any): Promise<GetItemListAck>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Retrieve list of all jobs in a project
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectJobGet(project: string, options?: any): Promise<JobsWithUrl>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.3
	     * @summary Aborts a job.
	     * @param {string} project Project short label
	     * @param {number} job job number
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectJobJobDelete(project: string, job: number, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get a job file. The job part is the jobID (a number) and the file is the fileID (a number)
	     * @param {string} project Project short label
	     * @param {number} job job number
	     * @param {number} fileno file number
	     * @param {string} [mode] (optional) set to mode&#x3D;direct to get the output in the response output instead of as a download file. This assumes the file is HTML
	     * @param {string} [format] (optional) set to format&#x3D;json to get a json output instead of XML
	     * @param {string} [disposition] (optional, from version 2.3) set to disposition&#x3D;inline to ask the server to send the disposition to &#x27;inline&#x27; instead of &#x27;attachment&#x27;
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectJobJobFilenoGet(project: string, job: number, fileno: number, mode?: string, format?: string, disposition?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get a job status, including generated files. The variable part is the jobID (a number)
	     * @param {string} project Project short label
	     * @param {number} job job number
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectJobJobGet(project: string, job: number, options?: any): Promise<JobsStatusWithUrl>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.2
	     * @summary Sets the progress of a job
	     * @param {string} project Project short label
	     * @param {number} job job number
	     * @param {number} progress progress (0 to 100, 200 for error)
	     * @param {string} [status] (optional( status text
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectJobJobPost(project: string, job: number, progress: number, status?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
	     * @summary Get the label history of a project -  list of all label changes for all items
	     * @param {string} project Project short label
	     * @param {string} [itemRef] (optional) ask for just one item (the return structure is still an array in that case)
	     * @param {string} [from] (optional) date from
	     * @param {string} [to] (optional) date to - works only if you only specified a from
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectLabelhistoryGet(project: string, itemRef?: string, from?: string, to?: string, options?: any): Promise<LabelHistory[]>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
	     * @summary Get the merge history of a project - needs the 'merge' module
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectMergehistoryGet(project: string, options?: any): Promise<MergeHistory[]>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
	     * @summary Get the merge information - needs the 'merge' module
	     * @param {string} project Project short label
	     * @param {string} [excludeCategories] (optional) comma-delimited list of categories to exclude
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectMergeinfoGet(project: string, excludeCategories?: string, options?: any): Promise<MergeInfo[]>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Move items into this folder
	     * @param {string} project Project short label
	     * @param {string} folder Folder reference (F-XXX-nn)
	     * @param {string} reason The reason why the user is doing this
	     * @param {string} [items] List of items to move in
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectMoveinFolderPost(project: string, folder: string, reason: string, items?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Find items based on a search string in one project
	     * @param {string} project Project short label
	     * @param {string} search search term
	     * @param {string} id search id. Used by MatrixJira js to match queries with answers. Is returned in the output structure
	     * @param {string} [filter] (optional) applies a filter, can be negative
	     * @param {string} [fieldsOut] (optional) comma-delimited list of fields to return -  101,102 - or * for all
	     * @param {number} [labels] (optional) set to 1 to return labels in the output
	     * @param {number} [treeOrder] (optional) set to 1 to return items in tree order (otherwise it&#x27;s project,category,serial)
	     * @param {string} [links] (optional) set to up,down to return up and down items, or only up or only down
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectNeedleGet(project: string, search: string, id: string, filter?: string, fieldsOut?: string, labels?: number, treeOrder?: number, links?: string, options?: any): Promise<TrimNeedle>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Adds a category to a project
	     * @param {string} project Project short label
	     * @param {string} label Category label
	     * @param {string} shortLabel Category short label
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectPost(project: string, label: string, shortLabel: string, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Publishes an item. Item has the form PUB-nnn
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} reason reason for the publication
	     * @param {string} [trainingFor] (optional) list of items for which we need to add training. If list is not there, all trainings will be generated
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectPublishItemPost(project: string, item: string, reason: string, trainingFor?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) for the reports, read/write for the signed reports. Valid from version 2.1 or earlier
	     * @summary Asks for a new report. The job ID is returned as answer. {report} can be REPORT-n, DOC-n, SIGN-n or a report name.To follow the progress of the job, the GET /{project}/job/{jobid} can be called
	     * @param {string} project Project short label
	     * @param {string} report name of the report
	     * @param {string} isSignedReport If set to true, means the report needs to generate a signed record
	     * @param {string} includeSignatures List of comma separated users who need to sign
	     * @param {string} newTitle New title for the SIGN- item that is generated (only valid for isSignedReport)
	     * @param {string} copyFields List of from-to fields (123,456),(124,457) that we can use to generate the fields in the SIGN record (only valid for isSignedReport)
	     * @param {string} [itemList] (optional) list of items to use in the report. By default all categories are used
	     * @param {string} [url] (optional) url to generate in the filter
	     * @param {string} [resturl] (optional) REST url to generate in the filter
	     * @param {string} [format] (optional) format -  html (default), pdf, docx, odt, xml, zipdocx, zippdf or package (from 2.2)
	     * @param {string} [filter] (optional) specify a filter. Can be negative filters
	     * @param {number} [useOld] (optional) ask to use the old report engine (pre 1.11) if set to 1.
	     * @param {string} [atDate] (optional) generates the report at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectReportReportPost(project: string, report: string, isSignedReport: string, includeSignatures: string, newTitle: string, copyFields: string, itemList?: string, url?: string, resturl?: string, format?: string, filter?: string, useOld?: number, atDate?: string, options?: any): Promise<CreateReportJobAck>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get a project's schema
	     * @param {string} project Project short label
	     * @param {number} [simple] (optional) set to simple&#x3D;1 to have a simpler output (no fields, round shape)
	     * @param {string} [excludeCategories] (optional) comma-separated list of categories to exclude, like DOC,SIGN
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectSchemaGet(project: string, simple?: number, excludeCategories?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Get all settings of a project
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectSettingGet(project: string, options?: any): Promise<GetProjectSettingAck>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Adds or changes a project setting. If the value is empty, the setting will be deleted.
	     * @param {string} project Project short label
	     * @param {string} key setting key
	     * @param {string} value value
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectSettingPost(project: string, key: string, value: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Signs an item. Item has the form SIGN-nnn
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} password signature password - the user who is signing is the one who is logged in
	     * @param {string} [acceptComments] (optional) adds an acceptance comment
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectSignItemPost(project: string, item: string, password: string, acceptComments?: string, options?: any): Promise<SignItemAck>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Edit the signature parts
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} rejectSign The reason why the user is rejecting the signature
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectSignItemPut(project: string, item: string, rejectSign: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Asks for a new report. The job ID is returned as answer
	     * @param {string} project Project short label
	     * @param {string} [url] (optional) url to generate in the filter
	     * @param {string} [resturl] (optional) REST url to generate in the filter
	     * @param {string} [format] (optional) format -  html (default), pdf, docx, odt, xml, zipdocx or zippdf
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectSignedreportSIGNNPost(project: string, url?: string, resturl?: string, format?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Get all tags of a project. Works on any project if user is admin
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectTagGet(project: string, options?: any): Promise<Tag[]>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Adds a tag to a project
	     * @param {string} project Project short label
	     * @param {string} label Tag label. Must be unique within a project
	     * @param {number} auditId Id of the audit this tag is based on
	     * @param {string} type Type of tag (default -  tag)
	     * @param {string} comments Free optional comment
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectTagPost(project: string, label: string, auditId: number, type: string, comments: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.2
	     * @summary Get all todos for the current user, for oneproject
	     * @param {string} project Project short label
	     * @param {string} [itemRef] (optional) set to an item to have all todos linked to an item, regardless of the user
	     * @param {number} [includeDone] (optional) set to 1 to include done todos and todo&#x27;s created by the user
	     * @param {number} [includeAllUsers] (optional) set to 1 to include all todos for all users
	     * @param {number} [includeFuture] (optional) set to 1 to include future todos as well (defaults to 0)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectTodoGet(project: string, itemRef?: string, includeDone?: number, includeAllUsers?: number, includeFuture?: number, options?: any): Promise<GetTodosAck>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.2
	     * @summary Creates a todo on an item (note that you only need read access for this POST method) for you or others
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} text The todo reason
	     * @param {number} [fieldId] (optional) If set, specifies that the todo is related to that field (review, ...)
	     * @param {string} [logins] (optional) If set, a list of user logins or groups to which these todo apply
	     * @param {string} [todoType] (optional) The todo type -  &#x27;user&#x27; by default
	     * @param {string} [atDate] (optional) a date in the future for reminders
	     * @param {number} [auto] (optional) set to 1 to create an auto-notification (0 by default)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectTodoItemPost(project: string, item: string, text: string, fieldId?: number, logins?: string, todoType?: string, atDate?: string, auto?: number, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.2
	     * @summary Removes (mark as done) a todo.
	     * @param {string} project Project short label
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectTodoNDelete(project: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Touches (set to same date) an item or folder
	     * @param {string} project Project short label
	     * @param {string} item Item reference (XXX-nn)
	     * @param {string} reason The reason why the user is doing this
	     * @param {number} [nbLayers] (optional) Number of layers -- 1 by default
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectTouchItemPut(project: string, item: string, reason: string, nbLayers?: number, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read access (or higher) to the project. Valid from version 2.1 or earlier
	     * @summary Get full tree
	     * @param {string} project Project short label
	     * @param {string} [fancy] (optional) returns a fancy tree
	     * @param {string} [filter] (optional) applies a filter
	     * @param {string} [atDate] (optional) generates the tree at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectTreeGet(project: string, fancy?: string, filter?: string, atDate?: string, options?: any): Promise<FancyFolder[]>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Unhides a project.
	     * @param {string} project Project short label
	     * @param {string} newShort The new project short name to use
	     * @param {string} reason The reason why the user is doing this
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectUnhidePut(project: string, newShort: string, reason: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have read/write access to the project. Valid from version 2.1 or earlier
	     * @summary Converts a word document to an HTML, with images pointing to uploaded files on the server
	     * @param {string} project Project short label
	     * @param {string} reason The reason why the user is doing this
	     * @param {number} [fileNo] If specified, means that the conversion is from an already uploaded file. Otherwise the file must be uploaded as body of this call
	     * @param {string} [targetDocumentFolder] target document folder (in this case creates a document)
	     * @param {number} [useAsField] set to 1 to have this docx used as a field. In this case the return value is the html equivalent, with some meta
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    projectWordconvertPost(project: string, reason: string, fileNo?: number, targetDocumentFolder?: string, useAsField?: number, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Get list of all projects, all settings and current user, all todos and JIRA meta create object
	     * @param {number} [adminUI] (optional) set to adminUI&#x3D;1 to have all projects even the ones you are not assigned to, as an admin
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    rootGet(adminUI?: number, options?: any): Promise<ListProjectAndSettings>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Creates a new project. Either the full project is sent as XML payload, or the label and shortLabel are given. If uploading data for a whole project, label and shortLabel are optional but overwrite the XML content if present. Branching can be done with an audit report as payload, and branch* must be defined in that case
	     * @param {string} label Project label
	     * @param {string} shortLabel Project short label
	     * @param {string} [overwrite] Must be set to yes if you&#x27;re overwriting an existing project
	     * @param {string} [branchLabel] Must be set to branch (optional)
	     * @param {string} [branchTag] Must be set to branch, and match a tag in the audit export (optional)
	     * @param {string} [branchComment] Comment for the branch (optional)
	     * @param {string} [branchBaseProjectLabel] Label of the base Project (optional)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    rootPost(label: string, shortLabel: string, overwrite?: string, importUsers?: string, branchLabel?: string, branchTag?: string, branchComment?: string, branchBaseProjectLabel?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.1 or earlier
	     * @summary Retrieves the user list
	     * @param {string} details (optional) -  if set to 1 returns all details
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    userGet(details: string, options?: any): Promise<GetUserListAck>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Creates a new user. Arguments are either a set of arguments or json
	     * @param {string} login User login name
	     * @param {string} email User email
	     * @param {string} password User password in clear
	     * @param {string} json A json struct with login, email, password, first, last, signatureImage(int), signaturePassword, admin(int)
	     * @param {string} [first] User first name (optional)
	     * @param {string} [last] User last name (optional)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    userPost(login: string, email: string, password: string, json: string, first?: string, last?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1 or earlier
	     * @summary Retrieves all actions of a user
	     * @param {string} user user login name
	     * @param {number} [startAt] (optional) Pagination -  starts the audit after N records
	     * @param {number} [maxResults] (optional) Pagination -  Retrieve N results per page
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    userUserAuditGet(user: string, startAt?: number, maxResults?: number, options?: any): Promise<TrimAuditList>;
	    /**
	     * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1 or earlier
	     * @summary Check a user's password
	     * @param {string} user user login name
	     * @param {string} password Asks for a check of the password1
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    userUserCheckGet(user: string, password: string, options?: any): Promise<CheckPasswordAck>;
	    /**
	     * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1 or earlier
	     * @summary Check a user's password
	     * @param {string} user user login name
	     * @param {string} password Asks for a check of the password1
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    userUserCheckPost(user: string, password: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Reserved to Matrix Requirements operations. Valid from version 2.1 or earlier
	     * @summary Removes completely a user (only used for unit testing)
	     * @param {string} user user login name
	     * @param {string} confirm Needs to be yes for the method to be executed
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    userUserDelete(user: string, confirm: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1 or earlier
	     * @summary Retrieves full details of a user
	     * @param {string} user user login name
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    userUserGet(user: string, options?: any): Promise<UserType>;
	    /**
	     * Permissions - No permissions needed. Valid from version 2.1 or earlier
	     * @summary Login
	     * @param {string} user user login name
	     * @param {string} password password in clear
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    userUserLoginPost(user: string, password: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must have a valid authentication. Valid from version 2.1 or earlier
	     * @summary Logout
	     * @param {string} user user login name
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    userUserLogoutPost(user: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.1 or earlier
	     * @summary Sets a new password for an account that has a password_reset token in place (the {user} in the URL doesn't matter)
	     * @param {string} user user login name
	     * @param {string} token password_reset token
	     * @param {string} password New password to use from now on
	     * @param {string} [signaturePassword] (optional) New password to use from now on for signatures
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    userUserPasswordResetPost(user: string, token: string, password: string, signaturePassword?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Adds a user to a project
	     * @param {string} user user login name
	     * @param {string} project Project short label
	     * @param {number} permission 0 for no access, 1 for readonly, 2 for read/write (default), 3 for admin, 4 for visitor
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    userUserProjectPost(user: string, project: string, permission: number, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Edits the user permissions in a project. If permission is 0, it means the user has no longer access (but we retain its records for audit purposes)
	     * @param {string} user user login name
	     * @param {string} project Project short label
	     * @param {number} permission 0 for no access, 1 for readonly, 2 for read/write (default), 3 for admin
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    userUserProjectPut(user: string, project: string, permission: number, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1 or earlier
	     * @summary Retrieves all projects a user has access to
	     * @param {string} user user login name
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    userUserProjectsGet(user: string, options?: any): Promise<UserDetails>;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.1 or earlier
	     * @summary Edits the user details. Arguments are all separated or a single json argument. Regular users can only change their signature and passwords.
	     * @param {string} user user login name
	     * @param {string} email User new email
	     * @param {string} password User new password in clear
	     * @param {string} json A json struct with login, email, password, first, last, signatureImage(int), signaturePassword, admin(int)
	     * @param {string} [first] User first name (optional)
	     * @param {string} [last] User last name (optional)
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    userUserPut(user: string, email: string, password: string, json: string, first?: string, last?: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.2
	     * @summary Renames a user login
	     * @param {string} user user login name
	     * @param {string} newLogin The new login name. Cannot be one of the existing
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    userUserRenamePut(user: string, newLogin: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.1 or earlier
	     * @summary Adds or deletes a user setting.
	     * @param {string} user user login name
	     * @param {string} key Name of the setting
	     * @param {string} value Value of the setting. If empty, deletes the setting.
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    userUserSettingPost(user: string, key: string, value: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin. Valid from version 2.1 or earlier
	     * @summary Sets the new status of the user. Can be normal,blocked or deleted
	     * @param {string} user user login name
	     * @param {string} status Can be normal,blocked or deleted
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    userUserStatusPut(user: string, status: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.1 or earlier
	     * @summary Removes a user token
	     * @param {string} user user login name
	     * @param {string} value The token to be removed
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    userUserTokenDelete(user: string, value: string, options?: any): Promise<string>;
	    /**
	     * Permissions - Must be admin or the user. Valid from version 2.1 or earlier
	     * @summary Adds a token for a user
	     * @param {string} user user login name
	     * @param {string} purpose Purpose of the token. Not checked. Should contain either \&quot;password_reset\&quot; or \&quot;oauth\&quot;
	     * @param {string} [value] Value of the token - by default generated by this call
	     * @param {string} [reason] Free text explain where the token will be used (URL or others). Should be set for oauth, not needed for others
	     * @param {number} [validity] Validity of the token in hours - if not set, doesn&#x27;t expire
	     * @param {*} [options] Override http request option.
	     * @throws {RequiredError}
	     * @memberof DefaultApi
	     */
	    userUserTokenPost(user: string, purpose: string, value?: string, reason?: string, validity?: number, options?: any): Promise<string>;
	}
	//# sourceMappingURL=rest-api.d.ts.map

	/**
	 * MatrixALM and MatrixQMS REST API
	 * Feel free to make a copy of this definition and change the url below to your instance of MatrixALM or MatrixQMS. For the authentication, create  a token for an admin to try out all the methods. Use at your own risks! Any question? ask us on https://support.matrixreq.com
	 *
	 * OpenAPI spec version: 2.3
	 *
	 *
	 * NOTE: This file is auto generated by the swagger code generator program.
	 * https://github.com/swagger-api/swagger-codegen.git
	 * Do not edit the file manually.
	 */
	export interface ConfigurationParameters {
	    apiKey?: string | ((name: string) => string);
	    username?: string;
	    password?: string;
	    accessToken?: string | ((name: string, scopes?: string[]) => string);
	    basePath?: string;
	}
	export class Configuration {
	    /**
	     * parameter for apiKey security
	     * @param name security name
	     * @memberof Configuration
	     */
	    apiKey?: string | ((name: string) => string);
	    /**
	     * parameter for basic security
	     *
	     * @type {string}
	     * @memberof Configuration
	     */
	    username?: string;
	    /**
	     * parameter for basic security
	     *
	     * @type {string}
	     * @memberof Configuration
	     */
	    password?: string;
	    /**
	     * parameter for oauth2 security
	     * @param name security name
	     * @param scopes oauth2 scope
	     * @memberof Configuration
	     */
	    accessToken?: string | ((name: string, scopes?: string[]) => string);
	    /**
	     * override base path
	     *
	     * @type {string}
	     * @memberof Configuration
	     */
	    basePath?: string;
	    constructor(param?: ConfigurationParameters);
	}
	//# sourceMappingURL=configuration.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IPrintRenderedCell {
	    rowspan: number;
	    content: string;
	    classes: string[];
	    style: string;
	}
	interface IPrintRowContent {
	    isFolderRow: boolean;
	    rowBefore: string;
	    rowAfter: string;
	    cells: string[];
	}
	/************************************** Processor class  ********************************************/
	class PrintProcessor implements IPrintProcessor {
	    private onError;
	    private possibleTargets;
	    private mf;
	    globals: IPrintGlobals;
	    private functionDefaults;
	    static itemIterators: IPrintIteratorMap;
	    static labelIterators: IPrintIteratorMap;
	    static fieldIterators: IPrintIteratorMap;
	    static itemSorter: IPrintSorterMap;
	    static functions: IPrintFunctionMap;
	    static conditions: IConditionFunctionMap;
	    private formatter;
	    constructor();
	    private stylesheets;
	    /*******************************************************************************
	     *
	     *  Iterator Blocks
	     *
	     ***************************************************************************** */
	    prepareProcessing(mf: JQuery, onError: (message: string) => void, format: string): void;
	    private getRiskControlCategories;
	    processSection(formatter: IPrintCustomFormatter, section: ICustomSection, projectOverwrites: IPrintFunctionParamsOverwrites, selection: string[], possibleTargets: string[]): IProcessResult;
	    getTableData(tableId: string, selection: string[]): string;
	    /********************************************************************************
	     *  Main Processing functions to handle items from the print project
	     ********************************************************************************/
	    private processItem;
	    private processBlockFormatter;
	    private processFieldsFormatter;
	    private processTraceFormatter;
	    private processListFormatter;
	    private processTableFormatter;
	    /********************************************************************************
	    *  processing of "json" macros like {execute:"function", parameters:{...}}
	    ********************************************************************************/
	    private processMacros;
	    private processPrintFormatterMacro;
	    private processFunctionMacro;
	    /********************************************************************************
	    *  Helper for building tables
	    ********************************************************************************/
	    private mergeCells;
	    private extractClassesFromTable;
	    private addRows;
	    private getSubTableCells;
	    /********************************************************************************
	    *  Misc helper
	    ********************************************************************************/
	    getCustomStylesheet(): string;
	    private applyDepth;
	    private hasMergeMacro;
	    private addScriptInfo;
	    private evaluateCondition;
	    private enumeratePossibleTargets;
	    private sortItems;
	    /*********************************** manage formatters ************************************/
	    static getFunctions(group: string): IPrintFunctionMap;
	    static functionHasOptions(functionUid: string): boolean;
	    static editFunctionOptions(currentValue: string, onUpdate: (newOptions: string) => void): void;
	    static showOptionsEditor(fctName: string, currentValue: string, onUpdate: (newValue: string) => void): void;
	    static openEditor(fct: IPrintBaseFunction, params: IAttributePrimitiveParams, onUpdate: (newParams: IAttributePrimitiveParams) => void): boolean;
	    static editStyle(wrap: JQuery): void;
	    private getItemFormatter;
	    static addItemSorter(uid: string, sorter: IPrintSorter): void;
	    static getItemSorters(): IPrintSorterMap;
	    static getItemSorter(uid: string): IPrintSorter;
	    static getItemSorterDropdown(): IDropdownOption[];
	    static addItemIterator(uid: string, iterator: IPrintIterator): void;
	    static getItemIterator(uid: string, quiet?: boolean): IPrintItemIterator | null;
	    static getItemIteratorsDropdown(items: boolean, folders: boolean, allowNoIterator: boolean): IDropdownOption[];
	    static addLabelIterator(uid: string, iterator: IPrintIterator): void;
	    static getLabelIterator(uid: string): IPrintLabelIterator;
	    static addFieldIterator(uid: string, iterator: IPrintIterator): void;
	    static getFieldIterator(uid: string): IPrintFieldIterator;
	    static addFunction(uid: string, fctn: IPrintFunction): void;
	    static getFunction(uid: string): IPrintFunction | null;
	    static FIELD_FUNCTION_TYPE: string;
	    static FIELD_FUNCTION_PREFIX: string;
	    static getFieldFunctionId(uid: string): string;
	    static getFieldFunction(uid: string): IPrintFunction | null;
	    static addConditionFunction(uid: string, fctn: IConditionFunction): void;
	    static getConditionFunction(uid: string): IConditionFunction;
	    static getItemConditionDropdown(): IDropdownOption[];
	    static getAllFunctions(): IPrintBaseFunctionMap;
	    static getAllIterators(): IPrintBaseFunctionMap;
	    static getJsonConfig(config: string, mf: JQuery): any;
	    static getCdataAsJSON(node: Element): any;
	    static getCdataAsText(node: Element, escapeHtmlEntities: boolean): string;
	    static getUserName(user: string, mf: JQuery, first: boolean, last: boolean, login: boolean, email: boolean): string;
	    static getFieldAndLabelsIteratorsDropdown(): IDropdownOption[];
	}
	//# sourceMappingURL=PrintProcessor.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IAttributePrimitiveParams {
	    attributeName?: string;
	    path?: string;
	    class?: string;
	}
	class AttributePrimitive implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    private defaults;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IAttributePrimitiveParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	    editParams(params: IAttributePrimitiveParams, onUpdate: (newParams: IAttributePrimitiveParams) => void): JQuery;
	}
	//# sourceMappingURL=AttributePrimitive.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface postProcessor {
	    run: (rendering: string, params: IPrintFunctionParams) => string;
	}
	interface preProcessor {
	    run: (mf: JQuery, params: IPrintFunctionParams) => void;
	}
	interface postProcessorMap {
	    [key: string]: postProcessor;
	}
	interface preProcessorMap {
	    [key: string]: preProcessor;
	}
	class PrintPrePostProcessor {
	    postProcessors: postProcessorMap;
	    preProcessors: preProcessorMap;
	    executePost(processor: IPrePostProcessor, rendering: string): string;
	    executePre(processor: IPrePostProcessor, mf: JQuery): void;
	}
	let printPrePostProcessor: PrintPrePostProcessor;
	//# sourceMappingURL=PrintPrePostProcessor.d.ts.map

	interface IPrintFieldParams extends IPrintMacro {
	    fieldInfo?: IPrintFieldInfo;
	}
	interface IPrintLabelParams extends IPrintMacro {
	    label: IPrintLabelInfo;
	}
	//# sourceMappingURL=PrintValueOf.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	/** this is info delivered by the UI when rendering the control */
	export interface IControlOptions extends IBaseControlOptions {
	    placeholder: string;
	    controlState?: ControlState;
	    canEdit?: boolean;
	    help?: string;
	    fieldType?: string;
	    fieldId?: number;
	    valueChanged?: () => unknown;
	    parameter?: IFieldParameter;
	    fieldValue?: string;
	    isItem?: boolean;
	    item?: IItem;
	    isForm?: boolean;
	    isPrint?: boolean;
	    isTooltip?: boolean;
	    id?: string;
	    isHistory?: number;
	    type?: string;
	    isFolder?: boolean;
	}
	export abstract class ControlCoreBase extends BaseControl implements IPrintFunction {
	    protected settings: IControlOptions;
	    protected editor: JQuery;
	    protected originalValue: IPluginFieldValueBase;
	    static defaultOptions: IControlOptions;
	    pluginConfig: IPluginConfig;
	    constructor(pluginConfig: IPluginConfig, control?: JQuery);
	    init(options: IControlOptions): void;
	    /** method to call to initialize the editor, e.g. to attach handlers to checkboxes etc */
	    protected initEditor(): void;
	    /** this method is called by the UI to retrieve the string to be saved in the database */
	    getValue(): string;
	    /** this method renders a user input field in an item.
	    * @readOnly is set to true if the user cannot edit the data (e.g. in history or while printing)
	    * @params are can be parameter added by the printing configuration, to configure how something should be printed
	    */
	    protected abstract renderControl(readOnly: boolean, params?: IPluginPrintParamsBase): any;
	    protected abstract renderPrint(fieldId: string, value: IPluginFieldValueBase, options: IPluginFieldOptionsBase, params: IPluginPrintParamsBase): any;
	    protected abstract renderEditor(fieldId: string, value: IPluginFieldValueBase, options: IPluginFieldOptionsBase): any;
	    /** this method is called by the UI to figure out if the control's value changed */
	    hasChanged(): boolean;
	    protected abstract isSame(a: IPluginFieldValueBase, b: IPluginFieldValueBase): any;
	    refresh(): void;
	    setValue(newValue: string, reset?: boolean): void;
	    destroy(): void;
	    resizeItem(): void;
	    /** CUSTOM SECTION  */
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IPluginPrintParamsBase, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): any;
	}
	export abstract class ControlCore<T extends IPluginFieldOptionsBase> extends ControlCoreBase {
	    protected controlConfig: IPluginFieldParameterBase<T>;
	    protected renderControl(readOnly: boolean, params?: IPluginPrintParamsBase): any;
	}
	//# sourceMappingURL=ControlCore.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	/**
	 * This file defines all the data structures which might be shared between UI components and printing
	 *
	 */
	/** Server setting for plugin.
	*
	* This you can use to save setting on an instance level (for all projects)
	* The user can edit these in the admin through the Server Setting Page
	*/
	export interface IServerSettingsBase {
	}
	/** Project setting for plugin
	*
	* This you can use to save setting for one specific project.
	* The user can edit these in the admin through the Project Setting Page
	*/
	export interface IProjectSettingsBase {
	    /** example of a project setting */
	    myProjectSetting: string;
	}
	/** Setting for custom fields
	*
	* These allow a user to add parameters to custom field defined by the plugin
	* each time it is added to a category
	*/
	export interface IPluginFieldParameterBase<T extends IPluginFieldOptionsBase> extends IFieldParameter {
	    /** see below */
	    options: T;
	}
	/**  interface for the configuration options of field */
	export interface IPluginFieldOptionsBase {
	}
	/** interface for the value to be stored by custom field */
	export interface IPluginFieldValueBase {
	}
	/** this allows to store parameters for printing
	*
	* This parameters can be overwritten in the layout and are used by the custom section printing
	*/
	export interface IPluginPrintParamsBase extends IPrintFieldParams {
	    class: string;
	}
	/** base interface for field value */
	export interface IFieldValue {
	}
	/** Description of the current plugin. Each feature can be activated/deactivated using the configuration object */
	export interface IPluginConfig {
	    /** Field. This will add a new field type that can be used for data rendering in the main app */
	    field: IPluginFeatureField;
	    /** Menu tool item. This will add a new menu item in the tools menu  in the main app.*/
	    menuToolItem: IPluginFeatureBase;
	    /** Menu tool item. This will add a new dashboard in the main app.*/
	    dashboard: IPluginFeatureDashboard;
	    /** Customer setting page parameter. This will add a page in the server config in the adminConfig */
	    customerSettingsPage: IPluginFeature<IServerSettingsBase>;
	    /** project setting page parameter. This will add a page per project in the adminConfig */
	    projectSettingsPage: IPluginFeature<IProjectSettingsBase>;
	}
	export interface IDashboardPage {
	    renderProjectPage(): void;
	    onResize(): void;
	}
	export interface IPluginFeatureBase {
	    /** Whether to show the page */
	    enabled: boolean;
	    /** Id of the page in the tree/url */
	    id?: string;
	    /** Title of the page in the tree and of the page when displayed */
	    title?: string;
	}
	export interface IPluginFeature<T> extends IPluginFeatureBase {
	    /** Type is used to determine node type in the setting tree */
	    type: string;
	    /** Setting name that's used by REST api to persist settings */
	    settingName: string;
	    /** Default settings when nothing has been save yet*/
	    defaultSettings?: T;
	    /** Optional help text shown under the title */
	    help?: string;
	    /** Optional URL describing this page */
	    helpUrl?: string;
	}
	export interface IPluginFeatureDashboard extends IPluginFeatureBase {
	    /** Icon of the dashboard (See font awesome) */
	    icon: string;
	    /** Parent of the dashboard (It should exists)) */
	    parent: string;
	    /** Whether using filter when searching.*/
	    usefilter: boolean;
	    /** Order in the tree */
	    order: number;
	}
	export interface IPluginFeatureField extends IPluginFeatureBase {
	    /**  Field type id that will be use when rendering the data */
	    fieldType: string;
	    /**  description of  field  capabilities*/
	    fieldConfigOptions: IFieldDescription;
	}
	export interface IPluginSettingPage<T> {
	    renderSettingPage?: () => void;
	    showAdvanced?: () => void;
	    showSimple?: () => void;
	    getSettingsDOM?: (_setting?: T) => JQuery;
	    settings?: () => T;
	    saveAsync?: () => JQueryDeferred<unknown>;
	    paramChanged?: () => void;
	    settingsOriginal?: T;
	    settingsChanged?: T;
	    getProject?: () => string;
	    pageId?: string;
	    initPage?: (_title: string, _showAdvancedBtn: boolean, _showDeleteText: string, _help: string, _externalHelp?: string, _showCopy?: boolean) => void;
	    showAdvancedCode?: (_code: string, _success: (_code: string) => void, _semanticValidate?: IValidationSpec) => void;
	}
	export interface ITool {
	    menuClicked(itemId: string): void;
	    showMenu(itemId: string): boolean;
	}
	export interface IExternalPlugin {
	    enableToolMenu(ul: JQuery, _hook: number): unknown;
	    onInitItem(_item: IItem): unknown;
	    onInitProject(project: string): unknown;
	    PLUGIN_VERSION: any;
	    PLUGIN_NAME: any;
	    getDashboard(): IDashboardPage;
	    getProjectSettingsPage(): IPluginSettingPage<IProjectSettingsBase>;
	    getServerSettingsPage(): IPluginSettingPage<IServerSettingsBase>;
	    getControl(ctrlObj: JQuery): ControlCoreBase;
	    getTool(): ITool;
	    getConfig(): IPluginConfig;
	}
	//# sourceMappingURL=interfaces.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	export class PluginCore implements IPlugin {
	    Plugin: IExternalPlugin;
	    static getServerSetting(settingId: string, defaultValue: any): IServerSettingsBase;
	    /** if false the plugin will not be loaded (for debugging) */
	    isDefault: boolean;
	    /** can be overwritten by plugin to enable or disable functionality based on what is selected/configured */
	    enabledInContext: boolean;
	    constructor(plugin: IExternalPlugin);
	    initProject(project: string): void;
	    onInitProject(project: string): void;
	    initItem(_item: IItem, _jui: JQuery): void;
	    onInitItem(_item: IItem): void;
	    protected enableToolMenu(ul: JQuery, _hook: number): unknown;
	    updateMenu(ul: JQuery, hook: number): void;
	    protected enableControl(fieldType: string): boolean;
	    supportsControl(fieldType: string): boolean;
	    createControl(ctrlObj: JQuery, settings: IBaseControlOptions): void;
	    getFieldConfigOptions(): IFieldDescription[];
	    initPrinting(): void;
	    protected enableProjectSetting(): boolean;
	    getProjectSettingPages(): ISettingPage[];
	    protected enableServerSetting(): boolean;
	    getCustomerSettingPages(): ISettingPage[];
	    protected enableDashboard(): boolean;
	    getProjectPages(): IProjectPageParam[];
	    getPluginName(): any;
	    getPluginVersion(): any;
	}
	//# sourceMappingURL=PluginCore.d.ts.map

	export interface ITestResultDisplay {
	    displayString: string;
	    mrqlPart: string;
	    color: string;
	}
	export interface ITeoConfig {
	    testResultQueries?: ITestResultDisplay[];
	    coverageGroundTruthMrqlPart?: string;
	    executedStatusForRunDown?: string[];
	    includeTasksInTable?: boolean;
	    otherFields?: string[];
	}
	class TeoHelpers {
	    settingsName: string;
	    getDefaultConfig(): ITeoConfig;
	    XTCStatusSelectionDefault: ITestResultDisplay[];
	    getTEOConfig(): ITeoConfig;
	}
	export let teoHelpers: TeoHelpers;
	//# sourceMappingURL=teoHelpers.d.ts.map

	//# sourceMappingURL=ui.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	abstract class BaseWidget implements IWidgetPlugin {
	    abstract _root: JQuery;
	    abstract id: string;
	    abstract defaultParameters(): IWidgetParameters;
	    abstract displayedWidget: IDisplayedWidget;
	    abstract getBoxConfigurator(): ILineEditorLine[];
	    abstract help: string;
	    abstract render(root: JQuery, arg0: IDisplayedWidget): void;
	    abstract renderOn: widgetRenderEvent;
	    pluginName(): string;
	    mergeOptions(parameters: IWidgetParameters): IWidgetParameters;
	    addContainer(root: JQuery, displayedWidget: IDisplayedWidget): JQuery;
	    updateHideUnHideButton(): void;
	    protected addToToolbar(iconName: string, onClick: () => void, tooltip?: string): void;
	    showWidgetSettingEditor(displayedWidget: IDisplayedWidget): Promise<void>;
	    calculateHeight(configurator: ILineEditorLine[]): number;
	    updatePosition(w: number, h: number, x: number, y: number): void;
	    hide(showConfirm?: boolean): void;
	    unhide(showConfirm: boolean): void;
	}
	//# sourceMappingURL=BaseWidget.d.ts.map

	/// <reference types="jquery" />
	export function initialize(configApp: IConfigApp): void;
	class TeoConfig extends ConfigPage {
	    static BASE_ID: string;
	    private teoConfigOriginal;
	    private teoConfigChanged;
	    getNode(): {
	        type: string;
	        title: string;
	        id: string;
	        icon: string;
	        children: IDB[];
	    };
	    saveAsync(): JQueryDeferred<IRestResult>;
	    load(pageId: string): void;
	    private paramChanged;
	    protected showAdvanced(): void;
	    protected showError(area: string): void;
	    protected showSimple(): void;
	    showOtherFields(): void;
	    protected showIncludeTaskInTestTable(): void;
	    protected createEditQuery(idx: number): void;
	    protected showQueries(): void;
	    protected showSearchExpressions(): void;
	}
	//# sourceMappingURL=TeoConfig.d.ts.map

	//# sourceMappingURL=print.d.ts.map

	/**
	// debugging functionality for old browsers
	(function () {
	    var method:string;
	    var noop = function () {
	    };
	    var methods:string[] = [
	        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
	        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
	        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
	        'timeStamp', 'trace', 'warn'
	    ];
	    var length = methods.length;
	    var console = (window.console = window.console || {});
	    while (length--) {
	        method = methods[length];
	        // Only stub undefined methods.
	        if (!console[method]) {
	            console[method] = noop;
	        }
	    }
	}());
	*/ 
	//# sourceMappingURL=init.d.ts.map

	//# sourceMappingURL=init.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IProjectDataMap {
	    [key: string]: XRGetProject_ProjectInfo_ProjectInfo;
	}
	class ConfigApp implements IConfigApp {
	    private dbConnection;
	    private itemForm;
	    private printForm;
	    private dlgForm;
	    private currentItem;
	    private _user;
	    private _status;
	    private _control;
	    private _needsSave;
	    private triggerSelectionChangeMySelf;
	    private configTree;
	    private projectData;
	    private lastProject;
	    plugins: IServerPluginSettings[];
	    private PROJECT_FOLDER_ID;
	    private PROJECT_FOLDER_WAIT_ID;
	    configPages: ConfigPageFactory;
	    constructor(dataSource: RestDB);
	    init(itemForm: JQuery, dlgForm: JQuery): void;
	    getUser(): string;
	    getVersion(): string;
	    getVersionQualifier(): string;
	    getNeedsSave(): boolean;
	    getLastProject(): string;
	    getType(): string;
	    getParentId(itemId: string): string;
	    saveAsync(): JQueryDeferred<any>;
	    cancel(): void;
	    resizeItem(): void;
	    postLogin(user: string, projects: string): void;
	    treeSelectionChange(pageId: string): void;
	    selectItem(itemId: string, itemLabel: string): void;
	    getTree(): IDB[];
	    getItem(itemId: string): IDB;
	    getCurrentItemId(): string;
	    pingCurrentItem(): void;
	    registerPage(item: IItem, parent: string, updateUI?: boolean): void;
	    insertItem(item: IItem, parent: string): void;
	    itemChanged(needsSave: boolean): void;
	    setLastConnection(): void;
	    canNavigateAwayAsync(): JQueryDeferred<any>;
	    canDragDrop(nodeType: string, pageId: string): boolean;
	    dragEnter(dragged: Fancytree.FancytreeNode, target: Fancytree.FancytreeNode): string[] | boolean;
	    getJSONProjectSettings(projectId: string, settingId?: string): IJsonSetting[];
	    settingExists(projectId: string, settingId: string): boolean;
	    setJSONProjectSettingAsync(projectId: string, setting: IJsonSetting, pageId: string): JQueryDeferred<IRestResult>;
	    setProjectSettingAsync(projectId: string, settingId: string, settingValue: string, pageId: string): JQueryDeferred<IRestResult>;
	    setServerSettingAsync(settingId: string, settingValue: string): JQueryDeferred<any>;
	    getServerSetting(settingId: string, defaultValue: any): any;
	    setServerSetting(settingId: string, property: string, newValue: any): void;
	    getCustomerSetting(setting: string): string;
	    setCategorySettingAsync(projectId: string, category: string, settingId: string, settingValue: string, pageId: string): JQueryDeferred<any>;
	    getProjectConfig(projectId: string): XRGetProject_ProjectInfo_ProjectInfo;
	    getCatgegoryConfig(projectId: string, category: string): XRCategoryExtendedType;
	    getCategories(projectId: string): string[];
	    getUserPermission(projectId: string): XRUserPermissionType[];
	    getGroupPermission(projectId: string): XRGroupPermissionType[];
	    canUserWrite(projectId: string, login: string): boolean;
	    canGroupWrite(projectId: string, groupId: number): boolean;
	    getFieldConfig(projectId: string, category: string, field: string): XRFieldType;
	    updateFieldConfig(projectId: string, category: string, field: string, newConfig: XRFieldType): void;
	    removedFromTree(itemId: string, newId: string): void;
	    renamePage(pageId: string, label: string, parent: string): void;
	    updateProjectData(projectId: string): JQueryDeferred<IRestResult>;
	    private removeACL;
	    reloadProject(project: string, pageId: string, parentFolderId: string): JQueryDeferred<any>;
	    signOut(): void;
	    private clear;
	    private movePage;
	    private prepareTree;
	    private addProjectsToTree;
	    private showUrl;
	    private navigateToUrl;
	    private expandProject;
	    private renderPage;
	    private loadProjectAsync;
	    initConfigPages(): void;
	    getConfigPages(): ConfigPageFactory;
	}
	//# sourceMappingURL=ConfigApp.d.ts.map

	//# sourceMappingURL=index.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ILabelDisplay {
	    id: string;
	    displayString: string;
	}
	interface ILabelDashboardRule {
	    type: string;
	    labels: ILabelDisplay[];
	    cat: string;
	}
	interface ILabelDashboardRuleArray {
	    [key: string]: ILabelDashboardRule;
	}
	interface ILabelDashboardGraphData {
	    [key: string]: XRTrimNeedleItem[];
	}
	class LabelDashboardabilityOverview implements IPlugin {
	    dlg: JQuery;
	    popupModeOrControl: boolean;
	    private currentFolder;
	    static fieldType: string;
	    isDefault: boolean;
	    constructor();
	    initItem(_item: IItem, _jui: JQuery): void;
	    static canBeDisplayed(cat: string): boolean;
	    initServerSettings(serverSettings: XRGetProject_StartupInfo_ListProjectAndSettings): void;
	    updateMenu(ul: JQuery, hook: number): void;
	    supportsControl(ctrlType: string): boolean;
	    createControl(ctrl: JQuery, options: IBaseControlOptions): void;
	    initProject(): void;
	    isEnabled(): boolean;
	    getProjectPages(): IProjectPageParam[];
	}
	export function initialize(): void;
	//# sourceMappingURL=LAO.d.ts.map

	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ICatGraphItem {
	    catName: string;
	    RequiredLinks: ICatGraphItem[];
	}
	interface IDateCreatedExecuted {
	    [key: string]: ICreatedExecuted;
	}
	interface ITimeline {
	    [key: string]: ITimelineValue[];
	}
	interface ITimelineValue {
	    xtc: string;
	    user: string;
	}
	interface ICreatedExecuted {
	    date: any;
	    created: number;
	    todos: number;
	}
	interface IConverage {
	    selectedElements: ISelectedElement[];
	    items: XRGetProject_Needle_TrimNeedle;
	    covered: boolean;
	    query: string;
	}
	interface ISelectedElement {
	    to: string;
	    title: string;
	}
	interface IXTC {
	    id: string;
	    title: string;
	    tester: string;
	    executionDate: IMoment;
	    creationDate: IMoment;
	    itrd: ITestResultDisplay;
	}
	class XTCOverview implements IPlugin {
	    static fieldType: string;
	    popupModeOrControl: boolean;
	    private currentXTC;
	    isDefault: boolean;
	    constructor();
	    initItem(_item: IItem, _jui: JQuery): void;
	    initServerSettings(serverSettings: XRGetProject_StartupInfo_ListProjectAndSettings): void;
	    updateMenu(ul: JQuery, hook: number): void;
	    supportsControl(ctrlType: string): boolean;
	    createControl(ctrl: JQuery, options: IBaseControlOptions): void;
	    initProject(): void;
	    isEnabled(): boolean;
	    getProjectPages(): IProjectPageParam[];
	}
	function initialize(): void;
	interface IXTCSummaryOptions extends IBaseControlOptions {
	    currentXTC: IItem;
	    popupModeOrControl: boolean;
	}
	class TEOImpl extends BaseControl {
	    /**
	    * Check if we can display TEO
	    * @returns The list of unmet requirements to display TEO correctly.
	    */
	    checkForDisplayRequirements(): string[];
	    private otherFields;
	    private includeTasksInTable;
	    private allLinks;
	    XTCStatusSelection: ITestResultDisplay[];
	    coverageGroundTruthMrqlPart: string;
	    overviewGraphChart: c3.ChartAPI;
	    overviewPerUserChart: c3.ChartAPI;
	    executedStatusForRundown: string[];
	    widgetMode: boolean;
	    project: any;
	    protected createHelp(settings: IBaseControlOptions): JQuery;
	    getValue(): void;
	    hasChanged(): boolean;
	    resizeItem(): void;
	    destroy(): void;
	    init(options: IXTCSummaryOptions): void;
	    addToolbarButtons(): void;
	    constructor(ui: JQuery);
	    TesterID: any;
	    ExecutionDateID: any;
	    eventsAttached: boolean;
	    popupModeOrControl: boolean;
	    private elementsLst;
	    XTCSelectionChanged(items: ISelectedElement[]): Promise<void>;
	    private addOtherStats;
	    start(): void;
	    getLastSelection(): ISelectedElement[];
	    setLastSelection(sel: ISelectedElement[]): void;
	    buildRundownTable(lst: IXTC[]): IDateCreatedExecuted;
	    renderCoverage(): any;
	    renderXTCTable(lst: IXTC[]): void;
	    filterXTCByUserByStatus(filter: any): void;
	    getXTCPerStatusInFolder(items: ISelectedElement[], mrqlPart: string): JQueryDeferred<IRestResult>;
	    parseNeedleSearch(results: XRGetProject_Needle_TrimNeedle, itrd: ITestResultDisplay): IXTC[];
	    private getXTCFromNeedleResult;
	    private getFieldValue;
	    private itemSelector;
	    coverage: IConverage[];
	    calculateCoverageByXtc(selectedElements: ISelectedElement[]): JQueryDeferred<IRestResult>[];
	    renderProjectPage(widgetMode?: boolean, project?: any): void;
	    installCopyButtons(title: string): void;
	    private drawXTCCharts;
	    private drawCumulativeChart;
	    private TEOHTMLDom;
	}
	//# sourceMappingURL=Teo.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ITraceRule {
	    cat: string;
	    upMust: string[][];
	    upCan: string[][];
	    downMust: string[][];
	    downCan: string[][];
	}
	interface ITraceRuleArray {
	    [key: string]: ITraceRule;
	}
	interface ITraceGraphData {
	    allItems: ISearchResult[];
	    itemsWithAllCoverageMissing: ISearchResult[];
	    itemsWithDownTraceMissing: ISearchResult[];
	    itemWithUpTraceMissing: ISearchResult[];
	    hasDownMust: boolean;
	    hasUpMust: boolean;
	}
	class TraceabilityOverview implements IPlugin {
	    dlg: JQuery;
	    popupModeOrControl: boolean;
	    private currentFolder;
	    static fieldType: string;
	    isDefault: boolean;
	    constructor();
	    initItem(_item: IItem, _jui: JQuery): void;
	    static canBeDisplay(cat: string): boolean;
	    initServerSettings(serverSettings: XRGetProject_StartupInfo_ListProjectAndSettings): void;
	    updateMenu(ul: JQuery, hook: number): void;
	    supportsControl(ctrlType: string): boolean;
	    createControl(ctrl: JQuery, options: IBaseControlOptions): void;
	    initProject(): void;
	    isEnabled(): boolean;
	    getProjectPages(): IProjectPageParam[];
	}
	function initialize(): void;
	interface ITraceSummaryOptions extends IBaseControlOptions {
	    currentFolder: IItem;
	    popupModeOrControl: boolean;
	}
	class TraceabilityOverviewImpl extends BaseControl {
	    chart: c3.ChartAPI;
	    project: string;
	    static getCatFromFolderName(folder: string): string;
	    static getCatFromFullItemID(itemId: string): string;
	    protected createHelp(settings: IBaseControlOptions): JQuery;
	    getValue(): void;
	    hasChanged(): boolean;
	    resizeItem(): void;
	    destroy(): void;
	    init(options: ITraceSummaryOptions): void;
	    popupModeOrControl: boolean;
	    currentCat: string;
	    currentFolder: string;
	    AllCoveredColor: string;
	    MissingUp: string;
	    MissingDown: string;
	    MissingAll: string;
	    SelectionChanged(cat: string, folder?: string): void;
	    getItems(cat: string, folder?: string): void;
	    start(): void;
	    getLastSelection(): string;
	    setLastSelection(sel: string): void;
	    private currentFilter;
	    filterByType(filter: any): void;
	    renderTraceTable(needles: ISearchResult[]): ITraceGraphData;
	    private hasTraceability;
	    renderProjectPage(project?: string): void;
	    static getRules(): ITraceRuleArray;
	    rules: ITraceRuleArray;
	    installCopyButtons(title: string): void;
	    private drawChart;
	    private TRACEHTMLDom;
	}
	//# sourceMappingURL=Trace.d.ts.map

	export function initialize(): void;
	//# sourceMappingURL=TraceOverviewPerCat.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ITodotypes {
	    [key: string]: any;
	}
	class MyWorkOverview implements IPlugin {
	    static TodoTypes: ITodotypes;
	    dlg: JQuery;
	    popupModeOrControl: boolean;
	    private currentMyWork;
	    static fieldType: string;
	    isDefault: boolean;
	    lastProject: string;
	    lastVisitedItems: string[];
	    constructor();
	    initItem(_item: IItem, _jui: JQuery): void;
	    initServerSettings(serverSettings: XRGetProject_StartupInfo_ListProjectAndSettings): void;
	    updateMenu(ul: JQuery, hook: number): void;
	    supportsControl(ctrlType: string): boolean;
	    createControl(ctrl: JQuery, options: IBaseControlOptions): void;
	    static getLastVisitedItems(): any[];
	    isEnabled(): boolean;
	    getProjectPages(): IProjectPageParam[];
	}
	function initialize(): void;
	interface IMyWorkSummaryOptions extends IBaseControlOptions {
	    currentMyWork: IItem;
	    popupModeOrControl: boolean;
	}
	class MyWorkSummaryImpl extends BaseControl {
	    elementsLst: XRTodo[];
	    notificationConfig: INotificationConfig;
	    protected createHelp(settings: IBaseControlOptions): JQuery;
	    getValue(): void;
	    hasChanged(): boolean;
	    resizeItem(): void;
	    destroy(): void;
	    init(options: IMyWorkSummaryOptions): void;
	    renderProjectPage(): void;
	    installCopyPasteButtons(): void;
	    getTodos(): JQueryDeferred<XRGetTodosAck>;
	    generateXTCTable(table: JQuery): void;
	    generateTodoTable(response: XRGetTodosAck, table: JQuery, filter: string[], linkBuilder: (id: string) => JQuery): number;
	    getItemIdAndTitleLink(itemRef: string): JQuery;
	    getItemIdAndTitleLinkForXTC(itemRef: string, title: string): JQuery;
	    getItemIdAndTitleLinkForQMS(itemRef: string): JQuery;
	    myWorkHTMLDom: string;
	}
	//# sourceMappingURL=myWork.d.ts.map

	/// <reference types="matrixrequirements-type-declarations" />
	interface ITodoCreatedClosed {
	    date: IMoment;
	    created: number;
	    remaining: number;
	}
	function initialize(): void;
	interface INotifSummaryOptions extends IBaseControlOptions {
	    currentNotif: IItem;
	    popupModeOrControl: boolean;
	}
	//# sourceMappingURL=NOO.d.ts.map

	interface IPrintParamMacro extends IPrintMacro {
	    param: string;
	}
	//# sourceMappingURL=PrintParam.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IItemHasLabelConditionParams extends ILabelIteratorParams {
	    iterator?: string;
	    negate: boolean;
	    labels: string[];
	    setOrUnset: boolean;
	    includeNonPrintable?: boolean;
	}
	class ItemHasLabels implements IConditionFunction {
	    itemOrFolder: boolean;
	    static uid: string;
	    getHelp(): string;
	    getName(): string;
	    evaluate(overwrites: IGlobalPrintFunctionParams, params: IItemHasLabelConditionParams, itemOrFolderRef: string, object: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): boolean;
	}
	//# sourceMappingURL=ItemHasLabels.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ILabelIteratorParams {
	    includeNonPrintable?: boolean;
	    excludeSet?: boolean;
	    excludeUnSet?: boolean;
	    includeAllUnSet?: boolean;
	    positiveList?: string[];
	}
	class LabelIterator implements IPrintLabelIterator {
	    worksOnItem: boolean;
	    worksOnFolder: boolean;
	    static uid: string;
	    getHelp(): string;
	    getName(): string;
	    iterate(overwrites: IGlobalPrintFunctionParams, paramsCaller: ILabelIteratorParams, item: string, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): IPrintLabelInfo[];
	    protected getReportName(label: ILabel, set: boolean): string;
	    protected getIcon(label: ILabel, set: boolean): string;
	    protected getStyle(label: ILabel, set: boolean): {
	        foreground: string;
	        background: string;
	        icon?: string;
	        displayName: string;
	        tooltip?: string;
	    };
	    editParams(params: ILabelIteratorParams, onUpdate: (newParams: ILabelIteratorParams) => void): JQuery;
	}
	//# sourceMappingURL=LabelIterator.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IFolderHasItemsConditionParams {
	    iterator: string;
	    negate: boolean;
	}
	class FolderHasItems implements IConditionFunction {
	    itemOrFolder: boolean;
	    static uid: string;
	    getHelp(): string;
	    getName(): string;
	    evaluate(overwrites: IGlobalPrintFunctionParams, paramsCaller: IFolderHasItemsConditionParams, itemOrFolderRef: string, object: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): boolean;
	}
	//# sourceMappingURL=FolderHasChildren.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IItemHasTraces {
	    iterator: string;
	    direction: "up" | "down";
	    mustHave: boolean;
	    canHave: boolean;
	    negate: boolean;
	}
	class ItemHasTraces implements IConditionFunction {
	    itemOrFolder: boolean;
	    static uid: string;
	    getHelp(): string;
	    getName(): string;
	    evaluate(overwrites: IGlobalPrintFunctionParams, paramsCaller: IItemHasTraces, itemOrFolderRef: string, item: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): boolean;
	}
	//# sourceMappingURL=ItemHasTraces.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ILinksIteratorParams extends IPrintItemIteratorParams {
	    direction: "up" | "down";
	    leafs?: string[];
	    maxDepth?: number;
	    xtc?: "highest" | "changed" | "";
	    excludeRiskControlDown: boolean;
	    onlyRiskControlDown: boolean;
	    categories: null | [];
	}
	class LinksIterator implements IPrintItemIterator {
	    worksOnItem: boolean;
	    worksOnFolder: boolean;
	    folderIterator: boolean;
	    traceIterator: boolean;
	    tableRowIterator: boolean;
	    static uid: string;
	    getHelp(): string;
	    getName(): string;
	    getValidation(): any;
	    private paramsDefaults;
	    iterate(overwrites: IGlobalPrintFunctionParams, paramsCaller: ILinksIteratorParams, itemOrFolder: string, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string[];
	    static deduplicate(ids: string[]): string[];
	    private getHighestNumberedId;
	    private getLastChangedId;
	    private getParentTC;
	    private getNextLinks;
	    private getNextIncludedPaths;
	    private getNextPaths;
	    editParams(params: ILinksIteratorParams, onUpdate: (newParams: ILinksIteratorParams) => void): JQuery;
	}
	//# sourceMappingURL=LinksIterator.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IIsCategoryParams extends IPrintMacroParams {
	    categories: string[];
	    negate: boolean;
	}
	class IsCategory implements IConditionFunction {
	    itemOrFolder: boolean;
	    static uid: string;
	    getHelp(): string;
	    getName(): string;
	    evaluate(overwrites: IGlobalPrintFunctionParams, paramsCaller: IIsCategoryParams, itemOrFolderRef: string, object: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): boolean;
	}
	//# sourceMappingURL=IsCategory.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IXTCStatusParams {
	    showIcons?: boolean;
	    icons?: IXTCStatusParamsStates;
	    colors?: IXTCStatusParamsStates;
	    raw?: boolean;
	    class: string;
	}
	interface IXTCStatusParamsStates {
	    error: string;
	    ok: string;
	    warning: string;
	    new: string;
	    [key: string]: string;
	}
	class XTCStatus implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getSubGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    private defaults;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IXTCStatusParams, itemOrFolderRef: string, item: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	    protected getHuman(result: string, mf: JQuery): string;
	    protected getStatus(result: string, mf: JQuery): "" | "error" | "ok" | "warning" | "new";
	    editParams(params: IXTCStatusParams, onUpdate: (newParams: IXTCStatusParams) => void): JQuery;
	}
	//# sourceMappingURL=XTCStatus.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IFieldOfTypeParams extends IPrintMacroParams {
	    fieldType: string;
	    fieldTypes: string[];
	    negate: boolean;
	}
	class FieldIsOfType implements IConditionFunction {
	    itemOrFolder: boolean;
	    static uid: string;
	    getHelp(): string;
	    getName(): string;
	    evaluate(overwrites: IGlobalPrintFunctionParams, params: IFieldOfTypeParams, itemOrFolderRef: string, object: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): boolean;
	}
	//# sourceMappingURL=FieldOfType.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IFieldHasContentParams extends IPrintMacroParams {
	    fieldType?: string;
	    fieldName?: string;
	    match: string;
	    negate: boolean;
	    lowerCase: boolean;
	    matchHTML?: boolean;
	}
	class FieldHasContent implements IConditionFunction {
	    itemOrFolder: boolean;
	    static uid: string;
	    getHelp(): string;
	    getName(): string;
	    evaluate(overwrites: IGlobalPrintFunctionParams, params: IFieldHasContentParams, itemOrFolderRef: string, ifo: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): boolean;
	}
	//# sourceMappingURL=FieldHasContent.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class PrintSortByRevisionDate implements IPrintSorter {
	    getHelp(): string;
	    getName(): string;
	    sort(a: string, b: string, inverse: boolean, params: any, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): number;
	}
	//# sourceMappingURL=PrintSortByDate.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class PrintSortByTitle implements IPrintSorter {
	    getHelp(): string;
	    getName(): string;
	    sort(a: string, b: string, inverse: boolean, params: any, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): 0 | 1 | -1;
	}
	//# sourceMappingURL=PrintSortByTitle.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class PrintSortByItemId implements IPrintSorter {
	    getHelp(): string;
	    getName(): string;
	    sort(ia: string, ib: string, inverse: boolean, params: any, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): 0 | 1 | -1;
	}
	//# sourceMappingURL=PrintSortByItemId.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IChildrenIteratorParams extends IPrintItemIteratorParams {
	    leafs?: boolean;
	    maxDepth?: number;
	    includeItems?: boolean;
	    includeFolders?: boolean;
	}
	class ChildrenIterator implements IPrintItemIterator {
	    worksOnItem: boolean;
	    worksOnFolder: boolean;
	    folderIterator: boolean;
	    traceIterator: boolean;
	    tableRowIterator: boolean;
	    static uid: string;
	    private paramsDefault;
	    getHelp(): string;
	    getValidation(): any;
	    getName(): string;
	    iterate(overwrites: IGlobalPrintFunctionParams, paramsCaller: IChildrenIteratorParams, itemOrFolder: string, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string[];
	    private getChildrenRec;
	    editParams(params: IChildrenIteratorParams, onUpdate: (newParams: IChildrenIteratorParams) => void): JQuery;
	}
	//# sourceMappingURL=ChildrenIterator.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IFieldIteratorParams {
	    showTypes?: string[];
	    showIds?: string[];
	    showNames?: string[];
	    hideTypes?: string[];
	    hideIds?: string[];
	    hideNames?: string[];
	    matches?: string;
	    onlyWithContent?: boolean;
	}
	class FieldIterator implements IPrintFieldIterator {
	    worksOnItem: boolean;
	    worksOnFolder: boolean;
	    static uid: string;
	    static fieldsNoValue: string[];
	    static fieldsPluginValues: string[];
	    getHelp(): string;
	    getName(): string;
	    iterate(overwrites: IGlobalPrintFunctionParams, paramsCaller: IFieldIteratorParams, itemOrFolder: string, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): IPrintFieldInfo[];
	    editParams(params: IFieldIteratorParams, onUpdate: (newParams: IFieldIteratorParams) => void): JQuery;
	}
	//# sourceMappingURL=FieldIterator.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IRowIteratorParams extends IPrintItemIteratorParams {
	    fieldName: string;
	    showRowsMatching?: IStringMap;
	}
	class TableRowIterator implements IPrintItemIterator {
	    worksOnItem: boolean;
	    worksOnFolder: boolean;
	    folderIterator: boolean;
	    traceIterator: boolean;
	    tableRowIterator: boolean;
	    static uid: string;
	    getHelp(): string;
	    getValidation(): any;
	    getName(): string;
	    iterate(overwrites: IGlobalPrintFunctionParams, paramsCaller: IRowIteratorParams, itemOrFolder: string, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string[];
	}
	//# sourceMappingURL=TableRowIterator.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IFieldContentParams {
	    fieldName?: string;
	    raw?: boolean;
	    fieldInfo?: IPrintFieldInfo;
	    function?: string;
	    functionPrefix?: string;
	}
	class FieldContent implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(hideDetails?: boolean, showFieldName?: boolean): string;
	    getName(): string;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IFieldContentParams, itemOrFolderRef: string, item: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	    protected formatXml(node: Element, level: number): Element;
	}
	//# sourceMappingURL=FieldContent.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	class FieldHelper {
	    static fixTermsAndAbbreviation(text: string, mf: JQuery): string;
	    static renderMacroIfNotRenderedBefore(text: string, macroText: string, replacement: string): string;
	}
	//# sourceMappingURL=FieldHelper.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IItemDateParams {
	    class: string;
	    format: string;
	}
	class ItemDate implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    private defaults;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IItemDateParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	    editParams(params: IItemDateParams, onUpdate: (newParams: IItemDateParams) => void): JQuery;
	}
	//# sourceMappingURL=FieldItemDate.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IFieldCheckboxParams extends IPrintFieldParams {
	    class: string;
	    onlyIfSet: boolean;
	}
	class FieldCheckbox implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IFieldCheckboxParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	}
	//# sourceMappingURL=FieldCheckbox.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IFieldRichtextParams extends IPrintFieldParams {
	    class: string;
	}
	class FieldRichText implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IFieldRichtextParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	}
	//# sourceMappingURL=FieldRichtext.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IFieldTableOptions extends IPrintFieldParams {
	    showSteps: boolean;
	    columnWidths: string[];
	    login: boolean;
	    first: boolean;
	    last: boolean;
	    email: boolean;
	    cell?: IFieldTableOptionsCell;
	    hideColumns?: number[];
	    showRowsMatching?: IStringMap;
	    classTable: string;
	    class: string;
	}
	interface IFieldTableOptionsCell {
	    row: number;
	    col: number;
	}
	class FieldTable implements IPrintFunction {
	    static MAX_WIDTH: number;
	    private baseUID;
	    constructor(classes: string);
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IFieldTableOptions, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	    private getColumnWidth;
	    private showTableRow;
	}
	//# sourceMappingURL=FieldTables.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ILinkPrimitiveParams {
	    toAnchor?: boolean;
	    asAnchor?: boolean;
	    titleInLink?: boolean;
	    titleAfterLink?: boolean;
	    keepLinkInXlsx?: boolean;
	    class?: string;
	}
	class LinkPrimitive implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    private defaults;
	    render(overwrites: IGlobalPrintFunctionParams, callerParams: ILinkPrimitiveParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	    editParams(params: IIndentParams, onUpdate: (newParams: IIndentParams) => void): JQuery;
	}
	//# sourceMappingURL=LinkPrimitive.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IIndentParams {
	    recursionDepth: number;
	    offset: number;
	    width: number;
	}
	class IndentPrimitive implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    private defaults;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IIndentParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	    editParams(params: IIndentParams, onUpdate: (newParams: IIndentParams) => void): JQuery;
	}
	//# sourceMappingURL=Indent.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ITitlePrimitiveParams {
	    class?: string;
	}
	class TitlePrimitive implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: ITitlePrimitiveParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	}
	//# sourceMappingURL=TitlePrimitive.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IFieldRiskParams extends IPrintFieldParams {
	    attribute: string;
	    forcePostWeights: boolean;
	    classRiskTable: string;
	    class: string;
	}
	class FieldRisk implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IFieldRiskParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	}
	//# sourceMappingURL=FieldRisk.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IFieldGateControlParams extends IPrintFieldParams {
	    showStatus: number;
	    passedStatus: string;
	    failedStatus: string;
	    progressStatus: string;
	    showLines: number;
	    showDate: boolean;
	    showUser: boolean;
	    showComment: boolean;
	    passedLine: string;
	    failedLine: string;
	    progressLine: string;
	    login: boolean;
	    first: boolean;
	    last: boolean;
	    email: boolean;
	    showHeader: boolean;
	    class: string;
	}
	class FieldGateControl implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IFieldGateControlParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	}
	//# sourceMappingURL=FieldGateControl.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IFieldFileManagerParams extends IPrintFieldParams {
	    formatFile: "list" | "comma";
	    asLinkFile: boolean;
	    class: string;
	}
	class FieldFileManager implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IFieldFileManagerParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	}
	//# sourceMappingURL=FieldFileManager.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IFieldUserParams extends IPrintFieldParams {
	    login: boolean;
	    first: boolean;
	    last: boolean;
	    email: boolean;
	    formatUser: "list" | "comma";
	    class: string;
	}
	class FieldUser implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IFieldUserParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	}
	//# sourceMappingURL=FieldUser.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IFieldtest_resultParams extends IPrintFieldParams {
	    class: string;
	}
	class FieldTest_result implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IFieldtest_resultParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	}
	//# sourceMappingURL=FieldTestResult.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IFieldTextParams extends IPrintFieldParams {
	    class: string;
	}
	class FieldText implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IFieldTextParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	}
	//# sourceMappingURL=FieldText.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IFieldDropdownParams extends IPrintFieldParams {
	    formatDrop: "list" | "comma";
	    class: string;
	}
	class FieldDropdown implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IFieldDropdownParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	}
	//# sourceMappingURL=FieldDropdown.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IFieldReviewControlParams extends IPrintFieldParams {
	    headerItem: string;
	    headerRevision: string;
	    headerComments: string;
	    showUsers: boolean;
	    login: boolean;
	    first: boolean;
	    last: boolean;
	    email: boolean;
	    classReviewTable: string;
	    class: string;
	}
	class FieldReviewControl implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IFieldReviewControlParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	}
	//# sourceMappingURL=FieldReview.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IFieldTextlineParams extends IPrintFieldParams {
	    class: string;
	}
	class FieldTextline implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IFieldTextlineParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	}
	//# sourceMappingURL=FieldTextline.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IFieldCrossLinksParams extends IPrintFieldParams {
	    formatCross: "list" | "comma";
	    asLinkCross: boolean;
	    showTitle: boolean;
	    class: string;
	}
	class FieldCrossLinks implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IFieldCrossLinksParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	}
	//# sourceMappingURL=FieldCrossLinks.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IFieldTasksParams extends IPrintFieldParams {
	    showOnlyPlugins?: string[];
	    showDone: boolean;
	    showOpen: boolean;
	    class: string;
	}
	class FieldTasks implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IPrintFieldParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	}
	//# sourceMappingURL=FieldTasks.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IXTCColorParams {
	    colors?: IXTCStatusParamsStates;
	}
	class XTCColor implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getTemplate(): string;
	    getHelp(): string;
	    getName(): string;
	    private defaults;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IXTCColorParams, itemOrFolderRef: string, item: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): any;
	    protected getHuman(result: string, mf: JQuery): string;
	    protected getStatus(result: string, mf: JQuery): "" | "error" | "ok" | "warning" | "new";
	    editParams(params: IXTCColorParams, onUpdate: (newParams: IXTCColorParams) => void): JQuery;
	}
	//# sourceMappingURL=XTCColor.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IFieldLabelParams extends IPrintFieldParams {
	    checkboxLabel: number;
	    class: string;
	}
	class FieldLabel implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IFieldLabelParams, itemOrFolderRef: string, item: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	}
	//# sourceMappingURL=FieldLabel.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IDepthParams {
	    recursionDepth: number;
	    offset: number;
	    style: string;
	}
	class DepthPrimitive implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    private defaults;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IDepthParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	    editParams(params: IDepthParams, onUpdate: (newParams: IDepthParams) => void): JQuery;
	}
	//# sourceMappingURL=Depth.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ITraceRulesEvaluationParams {
	    direction: "up" | "down";
	    mustHave: boolean;
	    canHave: boolean;
	    before: string;
	    after: string;
	    class: string;
	}
	class TraceRulesEvaluation implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    private paramsDefaults;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IRevisionPrimitiveParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	    private hasLinkTo;
	    editParams(params: ITraceRulesEvaluationParams, onUpdate: (newParams: ITraceRulesEvaluationParams) => void): JQuery;
	}
	//# sourceMappingURL=TraceRulesEvaluation.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IRevisionPrimitiveParams {
	    class: string;
	}
	class RevisionPrimitive implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IRevisionPrimitiveParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	}
	//# sourceMappingURL=RevisionPrimitive.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IAuthorPrimitiveParams {
	    class: string;
	    details?: number;
	}
	class AuthorPrimitive implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IAuthorPrimitiveParams, itemOrFolderRef: string, object: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	}
	//# sourceMappingURL=AuthorPrimitive.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IRiskColorParams {
	    background?: boolean;
	    before?: boolean;
	}
	class RiskColor implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    getTemplate(): string;
	    private defaults;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IRiskColorParams, itemOrFolderRef: string, item: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	    editParams(params: IRiskColorParams, onUpdate: (newParams: IRiskColorParams) => void): JQuery;
	}
	//# sourceMappingURL=RiskColor.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IFieldDateParams extends IPrintFieldParams {
	    formatString: string;
	    class: string;
	}
	class FieldDate implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IFieldDateParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	}
	//# sourceMappingURL=FieldDate.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ICustomCountTableRowsParams {
	    fieldName: string;
	    showRowsMatching: {
	        [key: string]: string;
	    };
	}
	class CustomCountTableRows implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    render(overwrites: IGlobalPrintFunctionParams, callerParams: ITableSummaryParams, itemOrFolder: string, item: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void, _printProcessor?: IPrintProcessor): string;
	}
	//# sourceMappingURL=CountTableFieldRows.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	enum ITableSummaryType {
	    Count = "Count",
	    Sum = "Sum",
	    Average = "Average",
	    Median = "Median",
	    Minimum = "Minimum",
	    Maximum = "Maximum"
	}
	enum ITableSummaryRounding {
	    NoRounding = "No Rounding",
	    NoDecimals = "No Decimals",
	    One = "One",
	    Two = "Two",
	    Three = "Three",
	    Four = "Four",
	    Five = "Five",
	    Six = "Six"
	}
	interface ITableSummaryParams {
	    /**
	     * The category of table to render
	     */
	    tableCat?: string;
	    /**
	     * The serial of table to render
	     */
	    tableId?: string;
	    /**
	     * The type of summary to perform
	     */
	    summary?: ITableSummaryType;
	    /**
	     * The column to summarize
	     */
	    column?: number;
	    /**
	     * Round to how many digits
	     */
	    rounding?: ITableSummaryRounding;
	}
	enum ITableElementType {
	    Span = 0,
	    Number = 1,
	    String = 2
	}
	type ITableElement = ITableElementSpan | ITableElementNumeric | ITableElementString;
	type TableElementColumn = ITableElement[];
	interface ITableElementNumeric {
	    type: ITableElementType.Number;
	    value: number;
	}
	interface ITableElementString {
	    type: ITableElementType.String;
	    value: string;
	}
	interface ITableElementSpan {
	    type: ITableElementType.Span;
	}
	class TableSummary implements IPrintFunction {
	    static uid: string;
	    static defaults: ITableSummaryParams;
	    static explanation: string;
	    getGroup(): string;
	    getHelp(_hideDetails?: boolean, _showFieldName?: boolean): string;
	    getName(): string;
	    editParams(params: IAttributePrimitiveParams, onUpdate: (newParams: IAttributePrimitiveParams) => void): JQuery;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: ITableSummaryParams, itemOrFolderRef: string, item: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void, printProcessor?: IPrintProcessor): string;
	    summarize(data: ITableElement[], type: ITableSummaryType, rounding: ITableSummaryRounding, onError: (message: string) => void): string;
	    round(value: number, rounding: ITableSummaryRounding): number;
	    normalizeTable(tableString: string): ITableElement[][];
	    median(numbers: any): any;
	}
	//# sourceMappingURL=TableSummary.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IBreadcrumbsPrimitiveParams {
	    excludeItem?: boolean;
	    showIDs?: boolean;
	    showLinks?: boolean;
	    showLinksInside?: boolean;
	    rangeStart?: number;
	    rangeEnd?: number;
	    separator?: string;
	    class: string;
	    classBreadcrumb: string;
	    classBreadcrumbSeparator: string;
	}
	class BreadcrumbPrimitive implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    private defaults;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IBreadcrumbsPrimitiveParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	    private toString;
	    editParams(params: IBreadcrumbsPrimitiveParams, onUpdate: (newParams: IBreadcrumbsPrimitiveParams) => void): JQuery;
	}
	//# sourceMappingURL=BreadcrumbsPrimitive.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface ILabelPrimitiveParams {
	    showIcon: boolean;
	    showText: boolean;
	    class: string;
	    classIcon: string;
	    className: string;
	}
	class LabelIconAndName implements IPrintFunction {
	    static uid: string;
	    getGroup(): string;
	    getHelp(): string;
	    getName(): string;
	    private defaults;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IPrintLabelParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	    editParams(params: ILabelPrimitiveParams, onUpdate: (newParams: ILabelPrimitiveParams) => void): JQuery;
	}
	//# sourceMappingURL=LabelIconAndName.d.ts.map

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />
	/// <reference types="matrixrequirements-type-declarations" />
	/// <reference types="bootstrap" />
	/// <reference types="bootstrap-datepicker" />
	/// <reference types="selectize" />
	interface IFieldRiskGenericParams extends IPrintFieldParams {
	    class: string;
	}
	class FieldRiskGeneric implements IPrintFunction {
	    static uid: string;
	    attribute: string;
	    getName(): string;
	    getGroup(): string;
	    getSubGroup(): string;
	    getHelp(): string;
	    render(overwrites: IGlobalPrintFunctionParams, paramsCaller: IFieldRiskGenericParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): string;
	}
	//# sourceMappingURL=FieldRiskGeneric.d.ts.map

}