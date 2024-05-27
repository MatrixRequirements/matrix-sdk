export declare enum TodoTypes {
	needSignature = "needSignature",
	needReview = "needReview",
	signaturesDone = "signaturesDone",
	signatureRejected = "signatureRejected",
	reviewsDone = "reviewsDone",
	needTraining = "needTraining",
	user = "user",
	needApprove = "needApprove",
	approveDone = "approveDone"
}
export type XRGetProject_StartupInfo_ListProjectAndSettings = XRListProjectAndSettings;
export type XRGetProject_ProjectInfo_ProjectInfo = XRProjectInfo;
export type XRGetProject_CategoryList_GetProjectStructAck = XRGetProjectStructAck;
export type XRGetProject_ProjectSettingAll_GetSettingAck = XRGetSettingAck;
export type XRGetProject_Todos_GetTodosAck = XRGetTodosAck;
export type XRGetProject_JobStatus_JobsStatusWithUrl = XRJobsStatusWithUrl;
export type XRGetProject_Needle_TrimNeedle = XRTrimNeedle;
export type XRGetProject_Reports_GetReportsAck = XRGetReportsAck;
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
export interface XRGetProjectStructAck {
	categoryList: XRCategoryExtendedListType;
	label: string;
	shortLabel: string;
	acl: string;
	aclExplanations: string;
}
export interface XRGetSettingAck {
	settingList: XRSettingType[];
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
export interface XRTrimNeedle {
	startAt: number;
	maxResults: number;
	totalResults: number;
	searchId: string;
	needles: XRTrimNeedleItem[];
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
export interface XRLabelHistory {
	entries: XRLabelEntry[];
}
export interface XRCrossProjectLink {
	upItem: XRCrossProjectLink$OneItem;
	downItem: XRCrossProjectLink$OneItem;
	relation: string;
	creationDate: string;
}
export interface XRSettingType {
	value: string;
	key: string;
	secret: boolean;
}
export interface XRMatrixLicense {
	logger: XRLogger;
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
	uniqueIds: boolean;
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
export interface XRTrimLink {
	upLinkList: XRTrimLink[];
	downLinkList: XRTrimLink[];
	itemRef: string;
	title: string;
	modDate: string;
	modDateUserFormat: string;
}
export interface XRCategoryAndRoot {
	category: string;
	rootFolder: string;
}
export interface XRCrossProjectLink {
	upItem: XRCrossProjectLink$OneItem;
	downItem: XRCrossProjectLink$OneItem;
	relation: string;
	creationDate: string;
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
export interface XRLabelEntry {
	itemRef: string;
	labels: XRLabelChange[];
}
export interface XRCrossProjectLink$OneItem {
	itemId: number;
	version: number;
	projectShort: string;
	itemRefWithVersion: string;
}
export interface XRLogger {
	ROOT_LOGGER_NAME: string;
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
export type XRPostProject_AddFile_AddFileAck = XRAddFileAck;
export type XRPostProject_LaunchReport_CreateReportJobAck = XRCreateReportJobAck;
export type XRPostProject_RestoreItem_UndeleteAnswer = XRUndeleteAnswer;
export type XRPostProject_SignItem_SignItemAck = XRSignItemAck;
export type XRPostProject_CompareHtml_HtmlCompareResult = XRHtmlCompareResult;
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
export interface XRHtmlCompareResult {
	html: string[];
	htmlMultiple: string[][];
	spanElement: string;
	addClass: string;
	removeClass: string;
}
export interface XRAccess {
	startDate8601: string;
	endDate8601: string;
	readWrite: number;
	visitorOnly: boolean;
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
export interface IDB {
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
	mode?: string;
	order?: number;
}
export interface IDBParent {
	parent: string;
	position: number;
	item: IItem;
}
export interface IDBCache {
	sortChildren(itemId: string): void;
	initMatrixTree(init: IDB[], includeActivity: boolean): void;
	initConfigTree(init: IDB[]): void;
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
}
declare class DBCache implements IDBCache {
	private db;
	private activities;
	private groupPos;
	private groupDefintion;
	private breadCrumbs;
	constructor();
	protected createVirtualFolder(id: string, title: string, icon?: string, color?: string): IDB;
	protected createVirtualItem(order: number, id: string, title: string, icon?: string): IDB;
	sortChildren(itemId: string): void;
	initMatrixTree(init: IDB[], includeActivity: boolean): Promise<void>;
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
export interface XCPostCompareHtml extends IRestParam {
	arg?: string;
}
export interface IRestConfig {
	server: string;
}
export interface IJcxhr {
	status: number;
	responseText: string;
	responseJSON: IResponseJson;
	displayError: string;
	statusText?: string;
}
export interface IResponseJson {
	category: string;
	detailsList: string[];
	displayError?: string;
	code?: string;
}
export interface IFileParam {
	name: string;
}
export interface IFileUploadProgress {
	position?: number;
	loaded?: number;
	totalSize?: number;
	total?: number;
}
export interface IFileUploadResult {
	fileId: string;
	fileFullPath: string;
	key: string;
}
declare class RestConnector {
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
export type JsonEditorValidation = (json: unknown) => Promise<string | null>;
declare class JsonValidator {
	private baseUrl;
	private schemas;
	private validators;
	private version;
	private ajv;
	/**
	 * This is a global object, you should not have to create it. See `jsonValidator`
	 */
	constructor(baseUrl: string, version: string);
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
export interface ISchema extends ISchemaObject {
}
export type ISchemaPropertyMap = {
	[key: string]: ISchemaItem;
};
export interface ISchemaItem {
	description?: string;
	type?: ESchemaType;
	anyOf?: ISchemaItem[];
}
export interface ISchemaObject extends ISchemaItem {
	properties?: ISchemaPropertyMap;
	additionalProperties?: ISchemaItem;
	required?: string[];
}
export interface ISchemaArray extends ISchemaItem {
	items?: ISchemaItem;
}
declare enum ESchemaType {
	string = "string",
	array = "array",
	object = "object",
	number = "number",
	boolean = "boolean"
}
export interface ISchemaPrintTypeInfo {
	help?: string;
	type?: string;
	subItems?: string;
	subItemStart?: string;
	subItemEnd?: string;
}
declare class MatrixSchemaView {
	schema: ISchema;
	constructor(schema: ISchema);
	render(): HTMLDivElement;
	renderObject(object: ISchemaObject): string;
	renderArray(array: ISchemaArray): string;
	renderProperty(prop: ISchemaItem): ISchemaPrintTypeInfo;
}
/************************************************************************
 
print sorter allow to sort items in tables
 
************************************************************************/
export interface IPrintSorterMap {
	[key: string]: IPrintSorter;
}
export interface IPrintSorter {
	getName: () => string;
	getHelp: () => string;
	sort: (a: string, b: string, inverse: boolean, params: any, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void) => number;
}
export interface IPrintSortParams {
	sorter: string;
	descending: boolean;
	params?: any;
}
/************************************************************************

Iterators return children of an item, items or folders in a folder, or field / label objects

 There are 3 main different types of formatters:
 * Item operators return item ids based on an reference item or folder
 * Label iterators return label objects for an item
 * Field iterators return field objects for an item or folder

 These are implemented as javascript functions

************************************************************************/
export interface IPrintIteratorMap {
	[key: string]: IPrintIterator;
}
export interface IPrintItemIteratorParams {
	maxDepth?: number;
	sorting?: IPrintSortParams[];
	direction?: "up" | "down";
}
export interface IPrintIterator extends IPrintBaseFunction {
	worksOnItem: boolean;
	worksOnFolder: boolean;
}
export interface IPrintItemIterator extends IPrintIterator {
	iterate: (overwrites: IGlobalPrintFunctionParams, params: IPrintItemIteratorParams, itemOrFolder: string, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void) => Promise<string[]>;
	getValidation: () => JsonEditorValidation | null;
	folderIterator: boolean;
	traceIterator: boolean;
	tableRowIterator: boolean;
}
export interface IPrintFieldIteratorParams {
}
export interface IPrintFieldInfo {
	fieldId: string;
	field: JQuery;
	name: string;
	type: string;
	config: JQuery;
	jsonConfig: any;
	jsonValue: any;
}
export interface IPrintFieldIterator extends IPrintIterator {
	iterate: (overwrites: IGlobalPrintFunctionParams, params: IPrintFieldIteratorParams, itemOrFolder: string, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void) => Promise<IPrintFieldInfo[]>;
}
export interface IPrintLabelIteratorParams {
}
export interface IPrintLabelInfo {
	id: string;
	printName: string;
	icon: string;
	set: boolean;
	jsonConfig: {};
}
export interface IPrintLabelIterator extends IPrintIterator {
	iterate: (overwrites: IGlobalPrintFunctionParams, params: IPrintLabelIteratorParams, itemOrFolder: string, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void) => IPrintLabelInfo[];
}
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
export interface IPrintFormatter {
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
export interface IPrintCustomFormatter {
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
/************************************** Main section definition  ********************************************/
export interface ICustomSection {
	description?: string;
	descriptionContent?: string;
	descriptionNoContent?: string;
	formatter: string;
	functionDefaults?: IPrintFunctionParamsOverwrites;
}
export interface IProcessResult {
	/** generated html */
	html: string;
	/** primary list of items from selection + first level interators */
	redlining: string[];
}
export interface IPrintProcessor {
	prepareProcessing(mf: JQuery, onError: (message: string) => void, format: string): void;
	processSection(formatter: IPrintCustomFormatter, section: ICustomSection, projectOverwrites: IPrintFunctionParamsOverwrites, selection: string[], possibleTargets: string[]): Promise<IProcessResult>;
	getCustomStylesheet(): string;
	/**
	 * This can be used by render functions to get a table and process its data,
	 * for example for a row count
	 * @param tableId The (sub)table to render
	 * @param selection The selection to use as the root
	 */
	getTableData(tableId: string, selection: string[]): Promise<string>;
	globals?: IPrintGlobals;
}
export interface IStringRiskConfigMap {
	[key: string]: IRiskConfig;
}
export interface IFieldCache {
	[key: string]: IPrintFieldInfo;
}
export interface IPrintGlobals {
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
export interface IPrintFunctionMap {
	[key: string]: IPrintFunction;
}
export interface IConditionFunctionMap {
	[key: string]: IConditionFunction;
}
export interface IPrintBaseFunction {
	getName: () => string;
	getHelp: (hideDetails?: boolean) => string;
	editParams?: (json: any, onUpdate: (newParams: any) => void) => JQuery;
}
export interface IPrintBaseFunctionMap {
	[key: string]: IPrintBaseFunction;
}
export interface IPrintFunction extends IPrintBaseFunction {
	getTemplate?: () => string;
	getGroup: () => string;
	getSubGroup?: () => string;
	renderAsync: (overwrites: IGlobalPrintFunctionParams, params: IPrintFunctionParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void, printProcessor?: IPrintProcessor) => Promise<string>;
}
export type IPrintFunctionParams = any;
export interface IPrintFunctionParamsOverwrites {
	debug: number;
	[key: string]: IPrintFunctionParams;
}
export interface IPrePostProcessorExecParams {
	processor: string;
	[key: string]: any;
}
export interface IGlobalPrintFunctionParams {
	outputFormat: string;
	customer: IPrintFunctionParamsOverwrites;
	project: IPrintFunctionParamsOverwrites;
	section: IPrintFunctionParamsOverwrites;
	tableRow?: number;
}
export interface IConditionFunction extends IPrintBaseFunction {
	itemOrFolder: boolean;
	evaluate: (overwrites: IGlobalPrintFunctionParams, params: any, itemOrFolderRef: string, object: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void) => Promise<boolean>;
}
export interface ITraceConfig {
	rules: ITraceConfigDetails[];
}
export interface ITraceConfigDetails {
	category: string;
	creates_end: string | boolean;
	end_point?: string;
	reporting: string[];
	up_rules: ITraceConfigRule[];
	down_rules: ITraceConfigRule[];
}
export interface ITraceConfigRule {
	message: string;
	name: string;
	rule: TTraceRule;
	any_of: string[];
}
export type TTraceRule = "can_have" | "must_have";
declare enum EnumItemPublish {
	IfNotInGroup = 0,//allow items to be published unless they are in a group
	Always = 1,// allow items to be published even if they are in a group
	Never = 2
}
export interface IQMSConfig {
	userMode?: string;
	/** there's only one publication in the array supported */
	publications: IPublication[];
	rolesTargetProjects?: string[];
	affectedByField?: string;
	responsibleForField?: string;
	training?: ITraining;
	/** Experimental: comma separated list of labels to show in published site -> if they are set */
	showLabels?: string;
	allowExport: boolean;
	/** obsolete */
	legacyRoles: boolean;
}
export interface ITraining {
	messages?: ITrainingMessages;
}
export interface ITrainingMessages {
	trainingSub?: string;
	trainingText?: string;
	overdueSub?: string;
	overdueText?: string;
}
export interface IPublication {
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
export interface IPublicationCategory {
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
export interface ILabelsConfig {
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
export interface ILabelStyle {
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
export interface ILabel {
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
export interface ILabelTemplate {
	id: number;
	name: string;
	key: string;
}
export interface ILabelGroup {
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
export interface IFilterMenu {
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
export interface IDesignReview {
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
export interface IMailConfig {
	canned?: IMailConfigCanned;
	defaultCC?: string[];
}
export interface IMailConfigCanned {
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
export interface ISearchConfig {
	searches: ISearchConfigSearch[];
	init?: IInitialSearches[];
}
export interface ISearchConfigSearch {
	name: string;
	expr: string;
}
export interface IInitialSearches {
	expr: string;
	style: string;
	computeFolder: number;
}
export interface ILabelLockConfig {
	locks: ILabelLockConfigLocks[];
}
export interface ILabelLockConfigLocks {
	label: string;
	lockKeeper: string[];
	/**  if set to true, the user can add up / down traces to the item even if the item is locked*/
	allowTraces?: boolean;
}
export interface IRiskConfig {
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
export type IRiskConfigMethod = "+" | "*" | "lookup";
export interface IRiskConfigRT {
	short: string;
	long: string;
	report: string;
	hidden?: boolean;
	colDef?: IColDef;
}
export interface IRiskConfigMitgationType {
	type: string;
	name: string;
}
export interface IRiskConfigFactor {
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
export interface IColDef {
	width?: string;
	minWidth?: string;
	maxWidth?: string;
	rowSpan?: boolean;
}
export interface IRiskConfigMitgationTable {
	columns: IRiskConfigTablesColumn[];
}
export interface IRiskConfigTablesColumn {
	name: string;
	field: string;
	editor: RiskTableCellEditor;
	options?: any;
}
export type RiskTableCellEditor = "control" | "reduction";
export type IRiskConfigFactorInputType = "text" | "select" | "textarea" | "richtext";
export interface IRiskConfigFactorOption {
	value: string;
	label: string;
	changes: IRiskConfigSelectChanges[];
}
export interface IRiskConfigSelectChanges {
	changesFactor?: string;
	changesWeight?: string;
	value: number | string;
}
export interface IRiskConfigFactorWeight {
	type: string;
	help: boolean;
	label: string;
	readonly?: boolean;
	hidden?: boolean;
	values: IRiskConfigFactorWeightValue[];
	colDef?: IColDef;
}
export interface IRiskConfigFactorWeightValue {
	shortname: string;
	help: string;
	factor: number;
}
export interface IRiskConfigReduction {
	name: string;
	options: IRiskConfigReductionOptions[];
}
export interface IRiskConfigReductionOptions {
	shortname: string;
	by: number;
	changes: string;
}
export interface IRiskConfigZone {
	zone?: string;
	foreground?: string;
	background?: string;
	textColor?: string;
	label?: string;
}
export interface IRiskConfigRPN {
	zone: string;
	text: string;
	[key: string]: string | number;
}
export interface IRiskPostReduction {
	weights: IRiskConfigFactorWeight[];
	help?: string;
}
export interface IDHFConfig {
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
	/** beta: a list of options to declare what user is signing for ["i release", "i confirm correct","I don't know"], */
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
export interface ICaptions {
	figure?: ICaption;
	table?: ICaption;
}
export interface ICaption {
	preNo: string;
	postNo: string;
}
export interface IDHFCategories {
	documentTypes: string[];
	documentForms: string[];
	documentSigned: string[];
	documentTemplates: string[];
	signAs: string;
}
export interface IDHFConfigCustomReports {
	group: string;
}
export interface IDHFConfigDefaultFormats {
	DOC: IDHFConfigDefaultFormatsOption;
	SIGN: IDHFConfigDefaultFormatsOption;
	REPORT: IDHFConfigDefaultFormatsOption;
	[map: string]: IDHFConfigDefaultFormatsOption;
}
export type IDHFConfigDefaultFormatsOption = "docx" | "pdf" | "html";
export interface IDHFConfigHideFormat {
	category: string;
	format: IDHFConfigDefaultFormatsOption;
}
export interface IDHFConfigCustomColumn {
	type: string;
	options: IDropdownOption[] | any;
	name: string;
	editor?: string;
}
export interface IDHFConfigTable {
	columns: IDHFConfigTableColumn[];
}
export interface IDHFConfigTableColumn {
	name: string;
	field: string;
	columnType: IDHFConfigTableColumnType;
	pos: number;
	editor?: TableCellEditor;
	options?: IDropdownOption[];
}
export type IDHFConfigTableColumnType = "type0" | "type1" | "type2" | "type3" | "type4" | "type5" | "type6" | "type7" | "type8" | "type9" | "type10" | "type11" | "type12" | "type13" | "type14";
export interface IDHFConfigCustomTable {
	name: string;
	id: string;
}
export interface IDHFConfigStandardDocs {
	[key: string]: IDHFConfigStandardDocsDef;
}
export interface IDHFConfigStandardDocsDef {
	fields: IDHFConfigStandardDocsSection[];
}
export interface IDHFConfigStandardDocsSection {
	[key: string]: string;
}
export interface IContextPageConfig {
	categoryHelp?: IContextPageConfigHelp;
	itemHelp?: IContextPageConfigHelp;
	tabs?: IContextPageConfigTab[];
}
export interface IContextPageConfigHelp {
	[key: string]: string;
}
export interface IContextPageConfigTab {
	title: string;
	type: ContextPageConfigTabOption;
	tabId?: string;
	hipchat?: boolean;
	baseURL?: string;
}
export type ContextPageConfigTabOption = "help" | "support" | "faq" | "references" | "smartlinks" | "iframe" | "iframeget" | "upreferences" | "downreferences" | "foldercontent" | "trainings";
export interface ITestConfig {
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
export interface ITestConfigPresetField {
	field: string;
	value: string;
}
export interface ITestConfigTables {
	[key: string]: ITestConfigTablesColumns;
}
export interface ITestConfigTablesColumns {
	columns: ITestConfigTablesColumn[];
}
export interface ITestConfigTablesColumn {
	name: string;
	field: string;
	editor: TableCellEditor;
	options?: IDropdownOption[] | any;
}
export type TableCellEditor = ColumnEditor.text | ColumnEditor.none | ColumnEditor.textline | ColumnEditor.design | ColumnEditor.uprules | ColumnEditor.downrules | ColumnEditor.rules | ColumnEditor.result | ColumnEditor.user | ColumnEditor.versionletter | ColumnEditor.date | ColumnEditor.select;
export interface ITestRule {
	human: string;
	code: string;
	render: TestResultType;
}
export interface ITestRuleAuto extends ITestRule {
	rule: TestResultRule;
	param: string;
}
export interface ITestRuleManual extends ITestRule {
	command: string;
}
export interface ITestRuleStep extends ITestRuleManual {
	key: string;
	image: string;
}
export type TestResultType = "ok" | "error" | "warning";
export type TestResultRule = "all" | "one" | "";
export interface ICategorySetting {
}
export interface ICategoryGroups {
	groups: ICategoryGroup[];
}
export interface ICategoryGroup {
	categories: string[];
	text: string;
	name: string;
	color: string;
	position?: number;
	helpPage?: string;
}
export interface IACL {
	rules: IACLRules[];
}
export interface IACLRules {
	name: string;
	groups: string[];
	acl: IACLGroupsAcl[];
}
export interface IACLGroupsAcl {
	category: string;
	fields?: string[];
	rights: string[];
}
export interface IFieldParameter {
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
export interface IDropDownConfig {
	fieldMeaning?: string;
	placeholder?: string;
	options: IDropdownOption[];
	groups?: IDropdownGroup[];
}
export interface IDropdownGroup {
	value: string;
	label: string;
}
export interface IDropdownOption {
	id: string;
	label: string;
	class?: string;
	disabled?: boolean;
	strikethrough?: boolean;
}
export interface ISmartTextConfig {
	replacements?: ISmartTextConfigReplacement[];
}
export interface ISmartTextConfigReplacement {
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
export interface IExtras {
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
export interface IFieldCapabilities {
	/** if set only one of this kind of fields can be created per category*/
	onlyOne?: boolean;
	/** can be published to QMS site */
	canBePublished: boolean;
	/** can be set to readonly */
	canBeReadonly: boolean;
	/** whether field can be hidden in DOCs */
	canHideInDoc: boolean;
	/** whether a field can be a preset in an XTC */
	canBeXtcPreset: boolean;
	/** whether a field needs to have a value set */
	canRequireContent?: boolean;
	/** whether a field can be added to DOCs and SIGN */
	canBeUsedInDocs?: boolean;
	/** an optional validation function to run against the code*/
	validationFunction?: JsonEditorValidation;
	/** the name of interface schema. If no validation is provided this will also be used for validation*/
	schema?: string;
	/** if true the user needs to set some settings to make it useful*/
	needsConfiguration?: boolean;
	/**  user can allow unsafe text entry,*/
	canBeUnsafe?: boolean;
	/** Can be imported from excel */
	canImportedFromExcel?: boolean;
}
export interface IFieldDescription {
	id: string;
	label: string;
	class: string;
	help: string;
	capabilities: IFieldCapabilities;
}
export interface INotificationConfig {
	enabled: boolean;
	closeAuto: boolean;
	manualCreate: boolean;
	browserNotificationDisabled?: boolean;
	browserNotificationAutoCloseAfter?: number;
}
export interface ICleanup {
	cleanup: boolean;
	tags: string[];
	attributes: IStringStringArrayMap;
	enforcedAttributes: IStringStringArrayMap;
	protocolAttributes: ICleanupProtocol[];
}
export interface ICleanupProtocol {
	element: string;
	attribute: string;
	protocols: string[];
}
/** defines parameters for imports */
export interface IImportConfig {
	/** includes keep same id */
	includes: IImportConfigDetails;
	/** copies are editable new copies */
	copies: IImportConfigDetails;
}
export interface IImportConfigDetails {
	/** includes can be locked by specifying a lock label */
	lockLabel: string;
	/** there can be a list of users who can import (if there's nobody in there, or no list is defined: everybody can) */
	importMasters?: string[];
	/** ItemParentMode for new includes or copies. By default "orphan", otherwise "preserve" */
	itemParentMode?: string;
}
export interface IDisplayedWidget {
	id: string;
	pluginName: string;
	parameters: IWidgetParameters;
	createdBy?: string;
}
declare enum widgetRenderEvent {
	load = 0,
	scroll = 1,
	click = 2
}
export declare enum IWidgetScope {
	admin = 0,
	user = 1,
	superAdmin = 2
}
export interface IWidgetPosition {
	dashboard: string;
	w: number;
	h: number;
	x?: number;
	y?: number;
}
export interface IWidgetParameters {
	canBeAddedOrDeletedBy: IWidgetScope;
	position: IWidgetPosition;
	users?: string[];
	options: {
		title: string;
		canBeHidden: boolean;
		[key: string]: any;
	};
}
export interface IWidgetPlugin {
	id: string;
	help: string;
	_root: JQuery | undefined;
	displayedWidget: IDisplayedWidget | undefined;
	pluginName(): string;
	defaultParameters(): IWidgetParameters;
	mergeOptions(parameters: IWidgetParameters): IWidgetParameters;
	render(root: JQuery, displayedWidget: IDisplayedWidget): void;
	updatePosition(w: number, h: number, x: number, y: number): void;
	hide(showConfirm: boolean): void;
	unload?(): void;
	scrollIntoView?(): void;
	clicked?(): void;
	refresh?(): void;
}
export interface IDashboard {
	displayString: string;
	icon?: string;
}
export interface IDashboardConfig {
	dashboards: {
		[key: string]: IDashboard;
	};
}
export declare class WidgetPluginsConstants {
	static defaultDashboardId: string;
	static defaultDashboard: IDashboard;
}
export interface IWidgetPluginsContainer {
	visible: boolean;
	previousUrl: string;
	toggle(): void;
	addNewWidget(): void;
	render(dashboardId: string): void;
	loadServerSettingWidgets(loadAllUser: boolean): void;
	exit(destination: string): void;
	hideWidget(id: string): void;
	unhide(id: string): void;
	deleteWidget(displayedWidget: IDisplayedWidget): void;
	showUpdateShowHiddenButton(): void;
}
/**
 * There should be an implementation of IFieldHandler for each type of field matrix supports.
 */
export interface IFieldHandler {
	/** Returns the type of field this handler is for. */
	getFieldType(): string;
	/**
	 * Initializes the field handler with the raw string data, or undefined if there is
	 * not yet any representation in the db.
	 */
	initData(serializedFieldData: string | undefined): void;
	/**
	 * getData() returns a string representing the data in the database. It may be
	 * a JSON object, in which case use JSON.parse() to manipulate it. It may also be
	 * undefined, which means the field was never set in the database.
	 */
	getData(): string | undefined;
	/**
	 * setData() sets the raw data of the field, which is always a string.
	 * More specific methods along with validation can be offered by the field handler
	 * implementation class.
	 * @param value
	 * @param doValidation If not specified, the default is false (no validation)
	 */
	setData(value: string, doValidation?: boolean): void;
}
export interface ITableParams {
	canBeModified?: boolean;
	create?: boolean;
	showLineNumbers?: boolean;
	maxRows?: number;
	fixRows?: number;
	readonly_allowfocus?: boolean;
	columns: any;
	onCellChanged?: Function;
}
export interface IBaseControl {
	getFieldHandler(): IFieldHandler;
	setFieldHandler(fieldHandler: IFieldHandler): void;
	getValueAsync: (latestItem?: IItemGet) => Promise<unknown>;
	hasChangedAsync: () => Promise<boolean>;
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
	afterRendering?: () => void;
	disableDelayedShow?: boolean;
}
export interface IBaseControlOptions {
	[key: string]: any;
	controlState?: ControlState;
	canEdit?: boolean;
	help?: string;
	fieldType?: string;
	fieldId?: number;
	valueChanged?: Function;
	parameter?: IFieldParameter;
	fieldValue?: any;
	fieldHandler?: IFieldHandler;
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
declare abstract class BaseControl<T extends IFieldHandler> implements IBaseControl {
	protected _root: JQuery;
	disableDelayedShow: boolean;
	needsLatest: boolean;
	constructor(control: JQuery, fieldHandler: T);
	fieldHandler: T;
	getFieldHandler(): T;
	setFieldHandler(fieldHandler: T): void;
	protected createHelp(settings: IBaseControlOptions): JQuery;
	abstract getValueAsync(): Promise<any>;
	abstract hasChangedAsync(): Promise<boolean>;
	abstract resizeItem(newWidth?: number, force?: boolean): void;
	abstract destroy(): void;
	afterRendering(): void;
}
export interface IBaseDropdownFieldParams {
	splitHuman?: boolean;
	maxItems?: number;
	create?: boolean;
	options?: IDropdownOption[];
	optionSetting?: string;
	initialContent?: string;
}
export declare class DropdownFieldHandler implements IFieldHandler {
	private rawData;
	private human;
	private lt;
	protected params: IBaseDropdownFieldParams;
	constructor(params: IBaseDropdownFieldParams, initialValue?: string);
	static UpdateFieldConfig(options: XRFieldTypeAnnotatedParamJson, itemConfig: ItemConfiguration): void;
	getData(): string | undefined;
	setData(value: string): void;
	getFieldType(): string;
	initData(serializedFieldData: string | undefined): void;
	/**
	 * Retrieve the current value of the field, formatted as an array.
	 * If there are N current values, the array will have N items.
	 * @param filterOnOptions true if you only want to get back values that show up
	 *     in the options list.
	 * @returns an array. Empty if there is no current value.
	 */
	getValues(filterOnOptions?: boolean): string[];
	getHuman(): string;
}
export interface IDropdownParams extends IBaseDropdownFieldParams {
	readonly?: boolean;
	placeholder?: string;
	groups?: IDropdownGroup[];
	sort?: boolean;
	splitHuman?: boolean;
	inlineHelp?: string;
	requiresContent?: boolean;
	maxHeight?: string;
	printProcessor?: {
		dropdownOptions?: string;
		parameterField?: string;
	};
	width?: string;
}
export declare class EmptyFieldHandler implements IFieldHandler {
	private fieldType;
	private config;
	constructor(fieldTypeIn: string, configIn: XRFieldTypeAnnotatedParamJson);
	getFieldType(): string;
	initData(serializedFieldData: string | undefined): void;
	getData(): string | undefined;
	setData(value: string, doValidation?: boolean): void;
}
export interface ILinkRenderParams {
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
export interface ILinkCollectionOptions extends IBaseControlOptions {
	item?: any;
	fieldValue?: IReference[];
	parameter?: ILinkRenderParams;
	doNotSave?: boolean;
	mitigationRenderer?: Function;
	id?: string;
	tiny?: boolean;
}
export interface ILinkCategories {
	name?: string;
	required?: boolean;
	type: string;
}
export interface IItemControlOptions extends IBaseControlOptions {
	id?: string;
	control?: JQuery;
	type?: string;
	item?: IItemGet;
	dummyData?: unknown;
	parent?: string;
	changed?: (needsSave: boolean) => void;
	isForm?: boolean;
	isItem?: boolean;
	isPrint?: boolean;
	isHistory?: number;
	isDialog?: boolean;
	canEdit?: boolean;
	canEditLabels?: boolean;
	canEditTitle?: boolean;
	disableTinyMce?: boolean;
}
export interface ILinkType {
	type: string;
	name?: string;
	buttonName?: string;
	folder?: boolean;
	import?: boolean;
	required?: boolean;
}
declare class ItemControl {
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
	private lastIsDropDown;
	constructor(options: IItemControlOptions);
	load(): Promise<void>;
	destroy(): void;
	getValues(update: IItemPut, latest?: IItemGet): Promise<IItemPut>;
	saveAsync(category: string, auditAction: string, valueOverwrites?: IItemGet): Promise<IDBParent | IItemGet>;
	addMove(itemId: string, newVersion: number): void;
	resizeItem(force?: boolean): void;
	refreshLinks(): void;
	fillControls(): Promise<void>;
	needsSave(): Promise<boolean>;
	hasTitle(): Promise<any>;
	updateItem(newItem: IItem): void;
	setFieldValue(fieldId: number, newValue: string): void;
	getFieldValue(fieldId: number): Promise<any>;
	getCurrentTitle(): Promise<any>;
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
export declare class RichtextFieldHandler implements IFieldHandler {
	private data?;
	private config;
	constructor(configIn: XRFieldTypeAnnotatedParamJson);
	getFieldType(): string;
	initData(serializedFieldData: string | undefined): void;
	getData(): string | undefined;
	setData(value: string, doValidation?: boolean): void;
	getHtml(): string | undefined;
	setHtml(str: string): RichtextFieldHandler;
}
export interface IRichTextParams {
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
	widthViewer?: string;
	initialContent?: string;
	visibleOption?: string;
	autoFocus?: boolean;
}
export interface IContextInformation {
	project: string;
	user: string;
	server: string;
	version: string;
	product: string;
	itemId: string;
	item: string;
	fieldList: string;
}
export interface IContextFramesTools {
	showContextFrame(tabType: string, makeVisible: boolean): boolean;
	getExpender(): JQuery;
	visibility(enabled: boolean): void;
	hideContextFrames(): void;
	showContextFrames(): void;
	renderContextFrames(): void;
	fillContextFrame(_data: IItem, itemId: string): void;
	init(): void;
}
export interface IUploadedFileInfo {
	fileName: string;
	fileId?: string;
	uploaded?: boolean;
	fileObj?: any;
}
export interface IFileTools {
	UploadFilesAsync(files: FileList | File[]): JQueryDeferred<IUploadedFileInfo[]>;
	UploadFileAsync(file: File): JQueryDeferred<IUploadedFileInfo[]>;
	convertXLSXAsync(file: IFileParam): JQueryDeferred<string>;
}
export type GetTitleFunction = (itemId: string) => string;
export interface ISimpleItemTools {
	parseRef(itemRef: string, project: string, matrixBaseUrl: string): IItemIdParts;
	getCreator(item: IItem): string;
	getLastEditor(item: IItem): string;
	refListToDisplayString(inputItems: IReference[] | null, prefix: string, getTitleFunction: GetTitleFunction, shorten?: number): string;
	renderLink(itemId: string, itemTitle: string, newWindow?: boolean): JQuery;
	updateReferences(oldReferences: IReference[], newReferences: IReference[], fromId: string | null, toId: string | null): IReferenceChange[];
	clone(item: IItemGet, copyLabels: boolean): IItemPut;
	sort(a: string, b: string, project: string, matrixBaseUrl: string): number;
}
export interface IItemTools {
	parseRef(itemRef: string): IItemIdParts;
	getCreator(item: IItem): string;
	getLastEditor(item: IItem): string;
	refListToDisplayString(inputItems: IReference[] | null, prefix: string, shorten?: number): string;
	renderLink(itemId: string, itemTitle?: string, newWindow?: boolean): JQuery;
	updateReferences(oldReferences: IReference[], newReferences: IReference[], fromId: string | null, toId: string | null): IReferenceChange[];
	clone(item: IItemGet, copyLabels: boolean): IItemPut;
	sort(a: string, b: string): number;
}
export interface IJSONTools {
	mergeOptions(defaultOptions: IBaseControlOptions, options: IBaseControlOptions): IBaseControlOptions;
	setOptions(newOptions: IBaseControlOptions, options: IBaseControlOptions): IBaseControlOptions;
	isTrue(obj: undefined | null | boolean | string | number): boolean;
	isFalse(obj: undefined | null | boolean | string | number): boolean;
	fromString(str: null | string): {
		status: string;
		value: {};
	};
	clone(src: any): any;
	escapeJson(code: string): string;
	unEscapeJson(code: string): string;
}
export interface IReportOptions extends IRestParam {
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
	reportNameOverride?: string;
}
export interface IReportTransferField {
	fromId: string;
	toId: string;
}
export interface IPostCreateSignOrDocResult {
	jobId: number;
}
export interface IReportInput {
	to: string;
}
export interface IReportGeneratorTools {
	SaveAndCreate(itemId: string, reportOptions: IReportOptions, progressInfo: string, postCreateCallback: Function, postFailCallback?: Function, postProgressCallback?: Function): void;
	CreateSignedDoc(docId: string, signatures: string[], signedDocumentsControl: JQuery, labelFilter: string, signName: string, transferFields: IReportTransferField[], defaultLabels: string[], docUpdateCb: (createdDocumentId: string) => void): void;
	createSIGN(target: string, comment: string, docId: string, signatures: string[], signedDocumentsControl: JQuery, labelFilter: string, signName: string, transferFields: IReportTransferField[], defaultLabels: string[], docUpdateCb: (createdDocumentId: string) => void): void;
	CreateDoc(docId: string, format: IReportOptions, labelFilter: string): void;
	CreateReport(reportId: string, format: IReportOptions, inputItems?: IReportInput[], requiredItems?: IReportInput[]): void;
	DownloadSignedDoc(signedId: string, format: IReportOptions): void;
}
export interface IChangedLabels {
	changed: boolean;
	added: string[];
	removed: string[];
	delta: string;
}
export interface ILabelManager {
	ignoreProjectFilter: boolean;
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
	unsetLabel(oldLabelIds: string[], label: string): string[];
	compareLabels(before: string[], after: string[]): IChangedLabels;
	getLabelNames(): string[];
	getDesignReview(labelId: string): IDesignReview | null;
	isFiltered(category: string, labels: string): boolean;
	getLabelsOfLabelGroupsType(labelGroupType: string): string[];
	getLabelGroups(category?: string): ILabelGroup[];
	/**
	 * In an {@link XRLabelHistory} object returned from the server, find the revision of the item
	 * with the given {itemId} at which {label} was last set. If {beforeRevision} is non-zero, the
	 * search will begin before that revision.
	 *
	 * @param labelHistory
	 * @param itemId
	 * @param label
	 * @param beforeRevision
	 */
	decipherLastTimeLabelWasSet(labelHistory: XRLabelHistory, itemId: string, label: string, beforeRevision: number): number;
}
export interface ILabelTools extends ILabelManager {
	/**
	 * Makes a server call to retrieve history for {itemId}, finds the revision of the item
	 * with the given {itemId} at which {label} was last set. If {beforeRevision} is non-zero, the
	 * search will begin before that revision.
	 *
	 * Returns the revision asynchronously.
	 *
	 * @param itemId
	 * @param label
	 * @param beforeRevision
	 */
	getLastTimeLabelWasSet(itemId: string, label: string, beforeRevision: number): Promise<number>;
}
export interface ILoggerTools {
	log(id: string, msg: string): void;
	debug(message: string): void;
	info(message: string): void;
	warning(message: string): void;
	error(message: string): void;
	getLog(): string;
}
export interface IMailTools {
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
	sendMails(sendTos: string[], subject: string, messages: string[]): void;
}
export interface ICancelSearchEvent {
}
export interface ISearchTools {
	OnCancelSearch: IEvent<ICancelSearchEvent, void>;
	getFilter(): string;
	cancelSearch(): void;
	searchInDialog(): void;
	endSearchInDialog(): void;
	highlight(term: string): void;
	hideHighlight(): void;
	renderHighlight(): void;
}
export interface ISmartTextTools {
	createMenu(docMode: boolean, tableMode: boolean): void;
	deleteTag(what: string): void;
	insertFigReference(reference: string, editor: any, editable: any): void;
	insertTabReference(reference: string, editor: any, editable: any): void;
	pasteBuffer(editor: any, editable: any): void;
	createCaption(isTable: boolean, editor: Summernote.editor, editable: any): void;
	updateCaptionsAndReferences(): void;
	createEditTag(tagType: number, what: string, data?: ISmartTextConfigReplacement, saveFct?: (newFct: ISmartTextConfigReplacement) => boolean, forceTiny?: boolean): void;
	selectEditCreateTag(mode: number, tagType: number, tagSelected: (tag: ISmartTextConfigReplacement) => void): void;
	removeOuterParagraph(edit: string): string;
	replaceTextFragments(text: string, showTooltips?: boolean, encoded?: boolean): string;
	showTooltips(node: JQuery, noContainer?: boolean): void;
	prepareForReadReadRender(itemDetails: JQuery): void;
}
export interface IDropDownButtonOption {
	name: string;
	class?: string;
	click: Function;
}
export interface IDialogOptions {
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
export interface ICIColor {
	color: string;
	alternateColor: string;
}
export interface ICIColorList {
	[key: string]: ICIColor;
}
export interface IUIToolsEnum {
	widgetPluginsContainer: IWidgetPluginsContainer;
	DateTime: IDateTimeUI;
	BlockingProgress: IBlockingProgressUI;
	SelectUserOrGroup: ISelectUserOrGroupUI;
	lt: ILT;
	Progress: IProgressUI;
	fixC3ForCopy(copied: JQuery): void;
	createDropDownButton(defaultText: string, options: IDropDownButtonOption[], isUp: boolean, buttonId?: string, disableDefaultButtonClick?: boolean): JQuery;
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
	container, title, buttons, }: IDialogOptions): void;
	pushDialog(thisDialog: JQuery): void;
	popDialog(thisDialog: JQuery): void;
	serverHtmlCleanupBlob(content: JQuery): JQueryDeferred<string>;
	copyBuffer(anchor: JQuery, tooltip: string, content: JQuery, catchKey?: JQuery, onProcessCopy?: Function, btnText?: string, beforeCopy?: Function, afterCopy?: Function): void;
	getIconOptions(): IDropdownOption[];
	calculateColorFrom(input: string): ICIColor;
	getAvatar(info: string, size: number): JQuery;
	doCopy(content: JQuery, onProcessCopy: Function): void;
	addChevronSection(container: JQuery, text: string, help: string, open?: boolean): JQuery;
	enableIf(cb: JQuery, state: boolean, ctrls: JQuery[]): void;
	addCheckboxD(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function, defaultValue: string): JQuery;
	addCheckbox(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function): JQuery;
	addCheckboxIsTrue(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function): JQuery;
	addCheckboxIsFalse(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function): JQuery;
	addPassInput(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function, onUnFocus?: Function): JQuery;
	addTextInput(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function, onFocusOut?: Function, isPass?: boolean, help?: string, readonly?: boolean, rows?: number, allowResize?: boolean): JQuery;
	addRichTextInput(ui: JQuery, params: IRichTextParams, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function, onFocusOut?: Function): JQuery;
	addDateSelect(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function, help?: string, readonly?: boolean): JQuery;
	addIconInput(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, onChange: Function, onFocusOut?: Function, isPass?: boolean): JQuery;
	addDropdownToArray(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, options: IDropdownOption[], grouping: IDropdownGroup[], maxItems: number, create: boolean, sort: boolean, onChange: Function, placeholder?: string): JQuery;
	addDropdownNumber(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, first: number, last: number, onChange: Function, placeholder?: string, paramsBase?: IDropdownParams): void;
	addDropdownToValue(ui: JQuery, text: string, fieldParams: IGenericMap, propertyName: string, options: IDropdownOption[], create: boolean, sort: boolean, onChange: Function, placeholder?: string, paramsBase?: IDropdownParams): JQuery;
	getPageTitle(title: string, getPanel?: () => JQuery, resize?: () => void): JQuery;
	createConfigLine(lineId: string, linePrefix: string, lineName: string, lineArray: any[], idProp: string, onChangedOrder: () => void, onEdit: (lineId: string) => void, needsEdit: boolean, onDelete: (lineId: string) => void): JQuery;
	fixArrows(ul: JQuery): void;
	createConfigAddLine(action: string, onAdd: () => void): JQuery;
	standardizeColor(fieldValue: string, alpha?: number): string;
	toggleFilters(filterOn: boolean): void;
	changeGlobalFilterSelectionEnabled(isEnabled: boolean): void;
}
export declare class UIToolsConstants {
	static CIColors: ICIColorList;
	static CIColorsGrey: ICIColorList;
	static allGrey: string[];
	static CIColorsPrimary: ICIColorList;
}
export declare namespace UIToolsConstants {
	enum Scroll {
		Auto = 0,
		Vertical = 1,
		None = 2
	}
}
export interface IDateTimeUI {
	initDateTimeSettings(update?: boolean): Promise<void>;
	renderHumanDate(date: Date, dateOnly?: boolean): string;
	renderCustomerHumanDate(date: Date, dateOnly?: boolean): string;
	renderHumanMonth(dateObj: Date): string;
	renderDashFormat(dateObj: Date): string;
	renderSettingControlsAsync(options: {
		table: JQuery;
		user: string;
		help: string;
	}): Promise<void>;
	renderSettingDialog(user: string): void;
	requiresTimeZoneWarning(): boolean;
	getTimeZoneCTA(): JQuery;
	getSimpleDateFormat(): string;
	getSimpleDateFormatMoment(): string;
	getSimpleDateTimeFormatMoment(): string;
}
export interface IBlockingProgressUITask {
	name: string;
	progress?: number;
}
export interface IBlockingProgressUI {
	Init(tasks: IBlockingProgressUITask[], animate?: boolean): void;
	SetProgress(taskIdx: number, percent: number, newText?: string): void;
	SetProgressError(taskIdx: number, problem: string): void;
}
export interface IProgressUI {
	Init(message: string, warning?: boolean): void;
	Update(progress: number): void;
	SuccessHide(message: string, ms: number): void;
	ErrorHide(message: string, ms: number): void;
}
export interface ISelectUserOrGroupUI {
	showMultiUserSelect(container: JQuery, help: string, selected: string[], title: string, selectFrom: string, selectTo: string, showUsers: boolean, showGroups: boolean, onSelect: (selection: string[]) => void, preSelectedUsers?: XRUserPermissionType[]): void;
	getUsersInSelection(selection: string[]): string[];
	getGroupId(group: XRGroupPermissionType | XRGroupType): string;
	getGroupDisplayNameFromId(groupOrUserId: string): string;
	isGroup(groupOrUserId: string): boolean;
	exists(groupOrUserId: string): boolean;
	showSelectDialog(selected: string[], title: string, selectFrom: string, selectTo: string, showUsers: boolean, showGroups: boolean, onSelect: (selection: string[]) => void, preSelectedUsers?: XRUserPermissionType[]): void;
	getUserDropDownOptions(showUsers: boolean, showGroups: boolean, preSelectedUsers?: XRUserPermissionType[], possiblyDeletedUsername?: string): IDropdownOption[];
	showSingleSelect(control: JQuery, showUsers: boolean, showGroups: boolean, onSelect: (selection: string) => void, preSelectedUsers?: XRUserPermissionType[], possiblyDeletedUsername?: string): void;
	getAllUsersAndGroups(): JQueryDeferred<IDropdownOption[]>;
	showSingleSelectDialog(selected: string, title: string, help: string, showUsers: boolean, showGroups: boolean, onSelect: (selection: string) => void, preSelectedUsers?: XRUserPermissionType[]): void;
}
export interface ILT {
	forDB(code: string, fieldId: number): string;
	forUI(code: string, fieldId: number): string;
}
export interface IMatrixUrlParts {
	project: string;
	item: string;
	params: IStringMap;
}
export interface IURLTools {
	getParameterByName(url: string, name: string): string | null;
	parseUrl(url: string): IMatrixUrlParts;
}
export interface IXPathTools {
	get(node: JQuery): string;
	hardCopy(element: JQuery): string;
}
export interface IMatrix {
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
	/**
	 * Create a label tools object from the application context.
	 */
	CreateNewLabelTools(): ILabelTools;
}
export interface IApp extends IBaseApp {
	mainApp: boolean;
	mainTreeLoaded: boolean;
	setCache(externalCache: DBCache): void;
	loadProject(project: string, item: string): Promise<void>;
	loadTree(project: string): JQueryDeferred<{}>;
	loadTreeAndItem(project: string, item: string): JQueryDeferred<IItem>;
	updateFavicon(project: string, notification: boolean): void;
	waitForMainTree(callback: () => void): void;
	loadTreeWithSearches(item: string): JQueryDeferred<unknown>;
	getTree(subtreeFilter?: string[]): IDB[];
	getSubTree(itemId: string): ISimpleTree;
	getAuditDetailsAsync(auditId?: number, ignoreErrors?: boolean): JQueryDeferred<XRTrimAudit>;
	getItemAsync(itemId: string, version?: number, ignoreErrors?: boolean, noHistory?: boolean): JQueryDeferred<IItem>;
	getNeedlesAsync(searchExpr: string, up?: boolean, down?: boolean, fields?: string, labels?: boolean, ignoreFilters?: boolean): JQueryDeferred<IItem[]>;
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
	startReportAsync(itemId: string, reportOptions: IReportOptions): JQueryDeferred<IPostCreateSignOrDocResult>;
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
	uploadFileProjectAsync(file: IFileParam, progress: (p: IFileUploadProgress) => void): JQueryDeferred<{}>;
	fetchFileAsync(url: string, progress: (p: IFileUploadProgress) => void): JQueryDeferred<XRPostProject_AddFile_AddFileAck>;
	resizeItem(force?: boolean): void;
	itemChanged(needsSave: boolean): void;
	updateItem(newItem: IItem): void;
	setFieldValue(fieldId: number, newValue: string): void;
	getFieldValueAsync(fieldId: number): Promise<any>;
	getCurrentTitle(): Promise<string>;
	addDownLinkAsync(fromId: string, toId: string): JQueryDeferred<{}>;
	removeDownLinkAsync(fromId: string, toId: string): JQueryDeferred<{}>;
	setSettingJSON(key: string, valueJSON: {}): JQueryDeferred<{}>;
	readSettingJSONAsync(key: string, otherProject?: string, noRetry?: boolean): JQueryDeferred<any>;
	setSettingCustomerJSON(key: string, valueJSON: {}): JQueryDeferred<unknown>;
	readSettingCustomerJSONAsync(key: string): JQueryDeferred<any>;
	getMissingUpLinks(item: IItem): string[];
	isUpLinkMissing(item: IItem): boolean;
	getMissingDownLinks(item: IItem): string[];
	getLinkCategories(item: IItem, ctrlParameter: ILinkCollectionOptions): ILinkCategories[];
	isDownLinkMissing(item: IItem): boolean;
	isAnyLinkOutdated(item: IItem): boolean;
	hasLinks(item: IItem): boolean;
	isHiddenLink(itemId: string): {};
	setHiddenLink(itemId: string, hidden: number): void;
	saveAsync(sendUnEdit: boolean): JQueryDeferred<{}>;
	forceReadonly(itemId: string): void;
	cancel(): void;
	someOneElseChanged(): void;
	someOneIsChangingTheItem(): void;
	waitForEditRights(): void;
	someOneElseIsChanging(watcherInfo: IItemWatched): void;
	someOneElseWasChanging(watcherInfo: IItemWatched): void;
	someOneElseStoppedEditing(watcherInfo: IItemWatched, previousWatcherInfo: IItemWatched): void;
	updateItemViewers(watcherInfo: IItemWatched): void;
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
	updateMaxVersion(itemId: string): JQueryDeferred<{}>;
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
	commitChangeListAsync(changeList: IReferenceChange[]): JQueryDeferred<{}>;
	isMedical(strict?: boolean): boolean;
	commentRequired(): boolean;
	touchToolAvailable(item: IItem): boolean;
	auditTrailAvailable(): boolean;
	mailToolAvailable(): boolean;
	postLogin(user: string): void;
	canDeleteItem(item: IItem): boolean;
	canViewItem(item: IItem): boolean;
	getImportSource(item: IItemGet): XRCrossProjectLink;
	getUsedBy(item: IItemGet): XRCrossProjectLink[];
	canEditItem(item: IItem): boolean;
	canCreateItemType(category: string, folder?: boolean): boolean;
	canDragDrop(category: string, id: string): boolean;
	canSeeField(category: string, field: number): boolean;
	canEditField(category: string, field: number): boolean;
	evaluateTraceRule(item: IItem, checkDownRule: boolean): ITraceRules;
	isConfigApp(): false;
	isConfigApplication: false;
	isClientApplication: true;
	dragEnter?: (dragged: Fancytree.FancytreeNode, target: Fancytree.FancytreeNode) => string[] | boolean;
	/** Open the analytics UI */
	openAnalytics(): void;
	/** Close the analytics UI */
	closeAnalytics(): void;
}
export interface IBaseApp {
	getParentId(itemId: string): string;
	itemChanged(needsSave: boolean): void;
	getVersion(): string;
	getVersionQualifier(): string;
	getNeedsSave(): boolean;
	getCurrentItemId(): string;
	pingCurrentItem(): void;
	canDragDrop(nodeType: string, pageId: string): boolean;
	dragEnter?: (dragged: Fancytree.FancytreeNode, target: Fancytree.FancytreeNode) => string[] | boolean;
	getTree(subtreeFilter?: string[]): IDB[];
	pingCurrentItem(): void;
	itemForm: JQuery;
	printForm: JQuery;
	dlgForm: JQuery;
	postLogin(user: string): void;
}
export interface ISearchResult {
	itemId: string;
	version: number;
	title: string;
	fieldVal?: ISearchResultField[];
	downlinks: string[];
	uplinks: string[];
	labels: string[];
	creationDate?: string;
}
export interface ISearchResultField {
	id: number;
	value: string;
}
export interface IRestoreItemResult {
	item: string;
	version: number;
	response: XRPostProject_RestoreItem_UndeleteAnswer;
}
export interface IUpdateCache {
	item: IItem;
	parent: string;
}
export interface IItemEditor {
	user: string;
	thisSocket: boolean;
}
export interface IItemWatched {
	item: string;
	users: string[];
	editor: IItemEditor;
	version: number;
}
export interface IItemUpdated {
	item: string;
	version: number;
	title: string;
	thisSocket: boolean;
}
export interface IItemCreated {
	item: string;
	parent: string;
	title: string;
}
export interface IItemDeleted {
	item: string;
}
export interface ITodoChanged {
}
declare class PushMessages {
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
export interface ITraceRules {
	valid: boolean;
	mustHaveCategories: string[];
	canHaveCategories: string[];
	exstingCategories: string[];
	missingMustHaveCategories: string[];
	missingCanHaveCategories: string[];
	outdatedReferences: string[];
}
export interface ILinkInfo {
	category: string | string[];
	reason: string;
}
export interface IVersionDetails {
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
export interface IReferenceUpdate {
	added: boolean;
	fromId: string;
	toId: string;
	date: string;
	dateUserFormat: string;
	comment: string;
	user: string;
}
export interface ISimpleTree {
	itemId: string;
	title: string;
	children?: ISimpleTree[];
}
export interface ISetField {
	fieldName: string;
	value: string;
}
export declare enum SelectMode {
	/*** DO NOT CHANGED numbers use from baseControl */
	none = 0,// cannot select
	items = 1,// can select items (no folders)
	folders = 2,// can select folders (no items)
	singleItem = 3,// can select one item (no folders)
	singleFolder = 4,// can select one folder (no items)
	independent = 5,// can select folder and items (independently)
	auto = 6,// if all children in folder are selected, selection changes to parent
	independentAuto = 7,//  can select folder and items independently -> but when checking a folder it adds all children
	autoPrecise = 8
}
export interface INavigationBar {
	tabs: INavigationBarTab[];
}
export interface INavigationBarTab {
	name: string;
	icon: string;
	mode: TabMode;
	other: string[];
}
declare enum TabMode {
	ShowAsDefault = 1,
	HideAsDefault = 2
}
export interface IItemViewEvent {
	caller: any;
	item: IItem;
	view: ItemControl;
}
export interface IItemChangeEvent {
	caller: any;
	view: ItemControl;
	before: IItem;
	after: IItem;
}
export interface IPreCreateItemEvent {
	caller: any;
	view: ItemControl;
	isItem: boolean;
	category: string;
}
export interface IPreCreateCloseEvent {
	caller: any;
	ok: boolean;
}
export interface IGenericItemEvent {
	caller: any;
	item: IItem;
}
export interface IGenericItemIdEvent {
	caller: any;
	itemId: string;
}
export interface INewItemIdEvent {
	caller: any;
	item: IDBParent;
}
export interface ILabelChangeEvent {
	caller: any;
	item: IItem;
	set: string[];
	unset: string[];
}
export interface ISignatureEvent {
	caller: any;
	item: IItem;
	lastuser: boolean;
}
export interface IEvent<TArgs, TMode> {
	subscribe(caller: any, fn: (args: TArgs) => TMode): void;
	unsubscribe(fn: (args: TArgs) => TMode): void;
	dispatch(args: TArgs): TMode;
}
declare class EventDispatcher<TArgs> implements IEvent<TArgs, void> {
	private _subscriptions;
	private _callers;
	subscribe(caller: any, fn: (args: TArgs) => void): void;
	unsubscribe(fn: (args: TArgs) => void): void;
	dispatch(args: TArgs): void;
}
declare class EventDispatcherAsync<TArgs> implements IEvent<TArgs, JQueryDeferred<{}>> {
	private _subscriptionsAsync;
	private _callersAsync;
	subscribe(caller: any, fn: (args: TArgs) => JQueryDeferred<{}>): void;
	unsubscribe(fn: (args: TArgs) => JQueryDeferred<{}>): void;
	dispatch(args: TArgs): JQueryDeferred<{}>;
	private dispatchAsyncOne;
}
declare class MR1Impl {
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
export interface IDashboardParametersBase {
}
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
declare class Configuration {
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
/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
	(url: string, init?: any): Promise<Response>;
}
declare class BaseAPI {
	protected basePath: string;
	protected fetch: FetchAPI;
	protected configuration: Configuration;
	constructor(configuration?: Configuration, basePath?: string, fetch?: FetchAPI);
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
 * @interface CleanupSetting
 */
export interface CleanupSetting {
	/**
	 *
	 * @type {string}
	 * @memberof CleanupSetting
	 */
	logger?: string;
	/**
	 *
	 * @type {Array<string>}
	 * @memberof CleanupSetting
	 */
	tags?: Array<string>;
	/**
	 *
	 * @type {{ [key: string]: any; }}
	 * @memberof CleanupSetting
	 */
	attributes?: {
		[key: string]: any;
	};
	/**
	 *
	 * @type {{ [key: string]: any; }}
	 * @memberof CleanupSetting
	 */
	protocols?: {
		[key: string]: any;
	};
	/**
	 *
	 * @type {Array<Protocol>}
	 * @memberof CleanupSetting
	 */
	protocolAttributes?: Array<Protocol>;
	/**
	 *
	 * @type {{ [key: string]: any; }}
	 * @memberof CleanupSetting
	 */
	enforcedAttributes?: {
		[key: string]: any;
	};
	/**
	 *
	 * @type {boolean}
	 * @memberof CleanupSetting
	 */
	cleanup?: boolean;
	/**
	 *
	 * @type {string}
	 * @memberof CleanupSetting
	 */
	JSON_SINGLE_QUOTE?: string;
	/**
	 *
	 * @type {string}
	 * @memberof CleanupSetting
	 */
	JSON_NO_CLEAUP_SINGLE_QUOTE?: string;
}
/**
 *
 * @export
 * @interface CopyItemAck
 */
export interface CopyItemAck {
	/**
	 *
	 * @type {Array<string>}
	 * @memberof CopyItemAck
	 */
	itemsAndFoldersCreated?: Array<string>;
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
 * @interface CrossProjectLink
 */
export interface CrossProjectLink {
	/**
	 *
	 * @type {OneItem}
	 * @memberof CrossProjectLink
	 */
	upItem?: OneItem;
	/**
	 *
	 * @type {OneItem}
	 * @memberof CrossProjectLink
	 */
	downItem?: OneItem;
	/**
	 *
	 * @type {string}
	 * @memberof CrossProjectLink
	 */
	relation?: string;
	/**
	 *
	 * @type {string}
	 * @memberof CrossProjectLink
	 */
	creationDate?: string;
	/**
	 *
	 * @type {number}
	 * @memberof CrossProjectLink
	 */
	importHistoryId?: number;
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
 * @interface ExecuteParam
 */
export interface ExecuteParam {
	/**
	 *
	 * @type {Array<string>}
	 * @memberof ExecuteParam
	 */
	input?: Array<string>;
	/**
	 *
	 * @type {string}
	 * @memberof ExecuteParam
	 */
	output?: string;
	/**
	 *
	 * @type {string}
	 * @memberof ExecuteParam
	 */
	parentFolder?: string;
	/**
	 *
	 * @type {string}
	 * @memberof ExecuteParam
	 */
	reason?: string;
	/**
	 *
	 * @type {Array<string>}
	 * @memberof ExecuteParam
	 */
	filter?: Array<string>;
	/**
	 *
	 * @type {Array<FieldAndValue>}
	 * @memberof ExecuteParam
	 */
	itemPresets?: Array<FieldAndValue>;
	/**
	 *
	 * @type {Array<FromTo>}
	 * @memberof ExecuteParam
	 */
	itemFieldMapping?: Array<FromTo>;
	/**
	 *
	 * @type {number}
	 * @memberof ExecuteParam
	 */
	single?: number;
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
	/**
	 *
	 * @type {string}
	 * @memberof FancyFolder
	 */
	mode?: string;
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
	/**
	 *
	 * @type {string}
	 * @memberof FancyLeaf
	 */
	mode?: string;
}
/**
 *
 * @export
 * @interface FieldAndValue
 */
export interface FieldAndValue {
	/**
	 *
	 * @type {number}
	 * @memberof FieldAndValue
	 */
	field?: number;
	/**
	 *
	 * @type {string}
	 * @memberof FieldAndValue
	 */
	value?: string;
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
 * @interface FromTo
 */
export interface FromTo {
	/**
	 *
	 * @type {number}
	 * @memberof FromTo
	 */
	fromId?: number;
	/**
	 *
	 * @type {number}
	 * @memberof FromTo
	 */
	toId?: number;
}
/**
 *
 * @export
 * @interface FromToString
 */
export interface FromToString {
	/**
	 *
	 * @type {string}
	 * @memberof FromToString
	 */
	from?: string;
	/**
	 *
	 * @type {string}
	 * @memberof FromToString
	 */
	to?: string;
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
 * @interface GetHmlBlobInput
 */
export interface GetHmlBlobInput {
	/**
	 *
	 * @type {string}
	 * @memberof GetHmlBlobInput
	 */
	htmlToClean?: string;
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
	 * @type {Array<Array<string>>}
	 * @memberof HtmlCompareResult
	 */
	htmlMultiple?: Array<Array<string>>;
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
 * @interface IdParent
 */
export interface IdParent {
	/**
	 *
	 * @type {string}
	 * @memberof IdParent
	 */
	id?: string;
	/**
	 *
	 * @type {string}
	 * @memberof IdParent
	 */
	parent?: string;
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
 * @interface ItemItemBody
 */
export interface ItemItemBody {
	/**
	 * Specify new title for the item -- if not there, keep the old title
	 * @type {string}
	 * @memberof ItemItemBody
	 */
	title?: string;
	/**
	 *
	 * @type {{ [key: string]: string; }}
	 * @memberof ItemItemBody
	 */
	itemProperties?: {
		[key: string]: string;
	};
	/**
	 * (optional) List of labels currently applied to this element. If none is specified, will consider there are none. Should be sent as a comma-delimited list of strings
	 * @type {string}
	 * @memberof ItemItemBody
	 */
	labels?: string;
	/**
	 * (optional) Specify a new verb for the audit action. Defaults to edit
	 * @type {string}
	 * @memberof ItemItemBody
	 */
	auditAction?: string;
	/**
	 * (optional) Name of a new folder to move the item into (exclusive from title and fx arguments)
	 * @type {string}
	 * @memberof ItemItemBody
	 */
	newFolder?: string;
	/**
	 * (optional) Indicates a new position within the newfolder. If newFolder is not specified, only changes the position. Exclusive of title and fx arguments. Position is an integer starting at 1
	 * @type {number}
	 * @memberof ItemItemBody
	 */
	newPosition?: number;
	/**
	 * The reason why the user is doing this
	 * @type {string}
	 * @memberof ItemItemBody
	 */
	reason: string;
	/**
	 * (optional) A filter
	 * @type {string}
	 * @memberof ItemItemBody
	 */
	filter?: string;
	/**
	 * (optional) Comma-delimited (%2C)list of references to up items
	 * @type {string}
	 * @memberof ItemItemBody
	 */
	linksUp?: string;
	/**
	 * (optional) Comma-delimited (%2C)list of references to down items
	 * @type {string}
	 * @memberof ItemItemBody
	 */
	linksDown?: string;
	/**
	 * (optional) will not make the change if the current version is not that one
	 * @type {number}
	 * @memberof ItemItemBody
	 */
	currentVersion?: number;
	/**
	 * (optional) when set to 1 says that the only fields to change are those passed
	 * @type {number}
	 * @memberof ItemItemBody
	 */
	onlyThoseFields?: number;
	/**
	 * (optional) when set to 1 says that the only labels to change are those passed. To remove a label in this case, prefix it with minus
	 * @type {number}
	 * @memberof ItemItemBody
	 */
	onlyThoseLabels?: number;
	/**
	 * (optional) when set to 1 (default) says that the call will fail if any HTML cleanup is involved. With 0 it will clean and not fail
	 * @type {number}
	 * @memberof ItemItemBody
	 */
	failOnCleanup?: number;
	/**
	 * (optional) when set to 0 (default) says that linksUp and linksDown only append new links to the existing links in the database
	 * @type {number}
	 * @memberof ItemItemBody
	 */
	linksAreComplete?: number;
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
 * @interface LogLevel
 */
export interface LogLevel {
	/**
	 *
	 * @type {string}
	 * @memberof LogLevel
	 */
	level?: string;
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
	 * @type {string}
	 * @memberof MatrixLicense
	 */
	logger?: string;
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
	 * @type {number}
	 * @memberof MatrixLicense
	 */
	maxReadOnly?: number;
	/**
	 *
	 * @type {number}
	 * @memberof MatrixLicense
	 */
	maxVisitors?: number;
	/**
	 *
	 * @type {number}
	 * @memberof MatrixLicense
	 */
	maxTotalUsers?: number;
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
	/**
	 *
	 * @type {number}
	 * @memberof MatrixLicense
	 */
	MAX_USERS?: number;
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
 * @interface MergeParam
 */
export interface MergeParam {
	/**
	 *
	 * @type {Array<string>}
	 * @memberof MergeParam
	 */
	copy?: Array<string>;
	/**
	 *
	 * @type {Array<string>}
	 * @memberof MergeParam
	 */
	conflicted?: Array<string>;
	/**
	 *
	 * @type {Array<string>}
	 * @memberof MergeParam
	 */
	_delete?: Array<string>;
	/**
	 *
	 * @type {Array<FromToString>}
	 * @memberof MergeParam
	 */
	addLinks?: Array<FromToString>;
	/**
	 *
	 * @type {Array<FromToString>}
	 * @memberof MergeParam
	 */
	removeLinks?: Array<FromToString>;
	/**
	 *
	 * @type {Array<IdParent>}
	 * @memberof MergeParam
	 */
	move?: Array<IdParent>;
	/**
	 *
	 * @type {number}
	 * @memberof MergeParam
	 */
	push?: number;
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
 * @interface OneItem
 */
export interface OneItem {
	/**
	 *
	 * @type {number}
	 * @memberof OneItem
	 */
	itemId?: number;
	/**
	 *
	 * @type {number}
	 * @memberof OneItem
	 */
	version?: number;
	/**
	 *
	 * @type {string}
	 * @memberof OneItem
	 */
	projectShort?: string;
	/**
	 *
	 * @type {string}
	 * @memberof OneItem
	 */
	itemRefWithVersion?: string;
	/**
	 *
	 * @type {string}
	 * @memberof OneItem
	 */
	itemTitle?: string;
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
 * @interface ProjectItemBody
 */
export interface ProjectItemBody {
	/**
	 * Item title
	 * @type {string}
	 * @memberof ProjectItemBody
	 */
	title: string;
	/**
	 * Reference of the folder (F-categ-serial)
	 * @type {string}
	 * @memberof ProjectItemBody
	 */
	folder: string;
	/**
	 *
	 * @type {{ [key: string]: string; }}
	 * @memberof ProjectItemBody
	 */
	itemProperties?: {
		[key: string]: string;
	};
	/**
	 * (optional) List of labels currently applied to this element. If none is specified, will consider there are none. Should be sent as a comma-delimited list of strings
	 * @type {string}
	 * @memberof ProjectItemBody
	 */
	labels?: string;
	/**
	 * The author (login name) - only works when superadmin is issuing this
	 * @type {string}
	 * @memberof ProjectItemBody
	 */
	author?: string;
	/**
	 * The reason why the user is doing this
	 * @type {string}
	 * @memberof ProjectItemBody
	 */
	reason: string;
	/**
	 * Comma-delimited (%2C)list of references to up items
	 * @type {string}
	 * @memberof ProjectItemBody
	 */
	linksUp: string;
	/**
	 * Comma-delimited (%2C)list of references to down items
	 * @type {string}
	 * @memberof ProjectItemBody
	 */
	linksDown: string;
	/**
	 * (optional) when set to 1 (default) says that the call will fail if any HTML cleanup is involved. With 0 it will clean and not fail
	 * @type {number}
	 * @memberof ProjectItemBody
	 */
	failOnCleanup?: number;
}
/**
 *
 * @export
 * @interface ProjectNeedleBody
 */
export interface ProjectNeedleBody {
	/**
	 * search term
	 * @type {string}
	 * @memberof ProjectNeedleBody
	 */
	search: string;
	/**
	 * search id. Used by MatrixJira js to match queries with answers. Is returned in the output structure
	 * @type {string}
	 * @memberof ProjectNeedleBody
	 */
	id?: string;
	/**
	 * (optional) applies a filter, can be negative
	 * @type {string}
	 * @memberof ProjectNeedleBody
	 */
	filter?: string;
	/**
	 * (optional) comma-delimited list of fields to return. e.g 101,102 - or * for all
	 * @type {string}
	 * @memberof ProjectNeedleBody
	 */
	fieldsOut?: string;
	/**
	 * (optional) set to 1 to return labels in the output
	 * @type {number}
	 * @memberof ProjectNeedleBody
	 */
	labels?: number;
	/**
	 * (optional) set to 1 to return items in tree order (otherwise it's project,category,serial)
	 * @type {number}
	 * @memberof ProjectNeedleBody
	 */
	treeOrder?: number;
	/**
	 * (optional) set to up,down to return up and down items, or only up or only down
	 * @type {string}
	 * @memberof ProjectNeedleBody
	 */
	links?: string;
}
/**
 *
 * @export
 * @interface ProjectNeedleminimalBody
 */
export interface ProjectNeedleminimalBody {
	/**
	 * search term
	 * @type {string}
	 * @memberof ProjectNeedleminimalBody
	 */
	search: string;
	/**
	 * (optional) applies a filter, can be negative
	 * @type {string}
	 * @memberof ProjectNeedleminimalBody
	 */
	filter?: string;
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
	/**
	 *
	 * @type {boolean}
	 * @memberof ProjectType
	 */
	uniqueIds?: boolean;
}
/**
 *
 * @export
 * @interface Protocol
 */
export interface Protocol {
	/**
	 *
	 * @type {string}
	 * @memberof Protocol
	 */
	element?: string;
	/**
	 *
	 * @type {string}
	 * @memberof Protocol
	 */
	attribute?: string;
	/**
	 *
	 * @type {Array<string>}
	 * @memberof Protocol
	 */
	protocols?: Array<string>;
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
 * @interface SendmailParam
 */
export interface SendmailParam {
	/**
	 *
	 * @type {string}
	 * @memberof SendmailParam
	 */
	subject?: string;
	/**
	 *
	 * @type {string}
	 * @memberof SendmailParam
	 */
	htmlbody?: string;
	/**
	 *
	 * @type {string}
	 * @memberof SendmailParam
	 */
	textbody?: string;
	/**
	 *
	 * @type {Array<string>}
	 * @memberof SendmailParam
	 */
	to?: Array<string>;
	/**
	 *
	 * @type {Array<string>}
	 * @memberof SendmailParam
	 */
	cc?: Array<string>;
	/**
	 *
	 * @type {Array<string>}
	 * @memberof SendmailParam
	 */
	bcc?: Array<string>;
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
 * @interface ServiceDeskParam
 */
export interface ServiceDeskParam {
	/**
	 *
	 * @type {string}
	 * @memberof ServiceDeskParam
	 */
	summary?: string;
	/**
	 *
	 * @type {string}
	 * @memberof ServiceDeskParam
	 */
	description?: string;
	/**
	 *
	 * @type {string}
	 * @memberof ServiceDeskParam
	 */
	matrixProject?: string;
	/**
	 *
	 * @type {string}
	 * @memberof ServiceDeskParam
	 */
	matrixItem?: string;
	/**
	 *
	 * @type {string}
	 * @memberof ServiceDeskParam
	 */
	browser?: string;
	/**
	 *
	 * @type {string}
	 * @memberof ServiceDeskParam
	 */
	log?: string;
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
	/**
	 *
	 * @type {FancyLeaf}
	 * @memberof TrimFolder
	 */
	contextTree?: FancyLeaf;
	/**
	 *
	 * @type {Array<CrossProjectLink>}
	 * @memberof TrimFolder
	 */
	crossLinks?: Array<CrossProjectLink>;
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
	/**
	 *
	 * @type {FancyLeaf}
	 * @memberof TrimItem
	 */
	contextTree?: FancyLeaf;
	/**
	 *
	 * @type {Array<CrossProjectLink>}
	 * @memberof TrimItem
	 */
	crossLinks?: Array<CrossProjectLink>;
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
	logger?: string;
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
	 * @type {{ [key: string]: any; }}
	 * @memberof VerifiedAuth
	 */
	projectMap?: {
		[key: string]: any;
	};
}
declare class DefaultApi extends BaseAPI {
	/**
	 * Permissions - No permissions needed. Valid from version 2.1
	 * @summary Asks for the difference between A and B html exerpts, and produce the B html with annotations
	 * @param {string} [arg] json object with the arguments
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	allCompareHtmlPost(arg?: string, options?: any): Promise<HtmlCompareResult>;
	/**
	 * Permissions - Must have a valid authentication. Valid from version 2.1
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
	 * Permissions - Must have the right key to download the file. Valid from version 2.1
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
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
	 * @summary Retrieve list of all customer-wide files
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	allFileGet(options?: any): Promise<GetProjectFileListAck>;
	/**
	 * Permissions - Must have a valid authentication. Valid from version 2.1
	 * @summary Creates a new customer-wide file - the file should be uploaded as payload. Its mime type should be sent through the HTTP protocol.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	allFilePost(options?: any): Promise<AddFileAck>;
	/**
	 * Permissions - Must be admin. Valid from version 2.1
	 * @summary Retrieve license status
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	allLicenseGet(options?: any): Promise<LicenseStatus>;
	/**
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
	 * @summary Adds a log entry (server side).
	 * @param {string} message Message to log
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	allLogPost(message: string, options?: any): Promise<string>;
	/**
	 * Permissions - Reserved to Matrix Requirements operations. Valid from version 2.4
	 * @summary Update matrix instance log level.
	 * @param {LogLevel} [body] Payload containing the log level
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	allLoglevelPut(body?: LogLevel, options?: any): Promise<string>;
	/**
	 * Permissions - No permissions needed. Valid from version 2.1
	 * @summary Monitoring object
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	allMonitorGet(options?: any): Promise<GetMonitorAck>;
	/**
	 * Permissions - No permissions needed. Valid from version 2.2
	 * @summary The OpenAPI 3.0 definition of our REST API
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	allOpenapiGet(options?: any): Promise<string>;
	/**
	 * Permissions - No permissions needed. Valid from version 2.1
	 * @summary Lists all reports
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	allReportsGet(options?: any): Promise<GetReportsAck>;
	/**
	 * Permissions - Must have a valid authentication. Valid from version 2.1
	 * @summary Sends an email. Non-optional parameters are sent as a POST JSON payload.
	 * @param {SendmailParam} [body] Necessary information to send a mail
	 * @param {number} [system] (optional) if set to 1 makes it a system email (not sent by the actual user)
	 * @param {number} [noreply] (optional) if set to 1 makes it a no-reply email (not sent by the actual user)
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	allSendmailPost(body?: SendmailParam, system?: number, noreply?: number, options?: any): Promise<string>;
	/**
	 * Permissions - Must have a valid authentication. Valid from version 2.1
	 * @summary Creates a service desk issue. The parameters are sent as a POST JSON payload.
	 * @param {ServiceDeskParam} [body] Necessary information to send a mail
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	allServicedeskPost(body?: ServiceDeskParam, options?: any): Promise<string>;
	/**
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
	 * @summary Get all settings of a customer
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	allSettingGet(options?: any): Promise<GetSettingAck>;
	/**
	 * Permissions - Must be admin. Valid from version 2.1
	 * @summary Adds or changes a customer setting. If the value is empty, the setting will be deleted.
	 * @param {string} key setting key
	 * @param {string} value value
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	allSettingPost(key: string, value: string, options?: any): Promise<string>;
	/**
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
	 * @summary Get instance status
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	allStatusGet(options?: any): Promise<ServerStatus>;
	/**
	 * Permissions - No permissions needed. Valid from version 2.1
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
	 * Permissions - Must have read/write access to the project. Valid from version 2.1
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
	 * @summary Removes a user from a group
	 * @param {string} groupName group name
	 * @param {string} user user login name
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	groupGroupNameUserUserDelete(groupName: string, user: string, options?: any): Promise<string>;
	/**
	 * Permissions - Must be admin. Valid from version 2.2
	 * @summary Creates a new group
	 * @param {string} groupLabel The name of the group to create
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	groupPost(groupLabel: string, options?: any): Promise<string>;
	/**
	 * Permissions - Must have read/write access to the project. Valid from version 2.3
	 * @summary Merge branch into mainline. First project is the mainline, second is the branch. The payload must contain a json object with a list of actions to perform.
	 * @param {string} mainproject mainproject
	 * @param {string} branchproject branchproject
	 * @param {string} reason The reason why the user is doing this
	 * @param {MergeParam} [body] Actions to perform
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	mainprojectMergeBranchprojectPost(mainproject: string, branchproject: string, reason: string, body?: MergeParam, options?: any): Promise<string>;
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
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
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
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
	 * @summary Get all dates at which a project has been modified
	 * @param {string} project Project short label
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectCalendarGet(project: string, options?: any): Promise<CalendarType[]>;
	/**
	 * Permissions - Must be admin. Valid from version 2.1
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
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
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
	 * Permissions - Must be admin. Valid from version 2.1
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
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
	 * @summary Get all settings of a category
	 * @param {string} project Project short label
	 * @param {string} category Category short label
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectCatCategorySettingGet(project: string, category: string, options?: any): Promise<GetSettingAck>;
	/**
	 * Permissions - Must be admin. Valid from version 2.1
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
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
	 * @summary Get all categories of a project
	 * @param {string} project Project short label
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectCatGet(project: string, options?: any): Promise<GetProjectStructAck>;
	/**
	 * Permissions - Must be admin. Valid from version 2.1
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
	 * Permissions - Must be admin. Valid from version 2.1
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
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
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
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
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
	 * @param {string} [ignoreLabels] (optional) can contain a comma-delimited list of labels NOT to copy
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectCopyItemOrFolderPost(project: string, itemOrFolder: string, targetFolder: string, reason: string, targetProject?: string, copyLabels?: number, map?: string, ignoreLabels?: string, options?: any): Promise<CopyItemAck>;
	/**
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
	 * @summary Get cross project links
	 * @param {string} project Project short label
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectCrossprojectlinkGet(project: string, options?: any): Promise<CrossProjectLink[]>;
	/**
	 * Permissions - Reserved to Matrix Requirements operations. Valid from version 2.1
	 * @summary Removes completely a project (only used for unit testing). This is an actual DELETE in the database.
	 * @param {string} project Project short label
	 * @param {string} confirm Needs to be yes for the method to be executed
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectDelete(project: string, confirm: string, options?: any): Promise<string>;
	/**
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
	 * @summary Converts an excel file (xls, xlsx) into a XML version that we send straight back as an XML payload.
	 * @param {string} project Project short label
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectExcelxmlPost(project: string, options?: any): Promise<string>;
	/**
	 * Permissions - Must have read/write access to the project. Valid from version 2.1
	 * @summary Executes UC or TC into XTC items
	 * @param {string} project Project short label
	 * @param {ExecuteParam} [body] There must be a JSON as a payload. It includes all parameters AND the reason
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectExecutePost(project: string, body?: ExecuteParam, options?: any): Promise<FolderAnswer>;
	/**
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
	 * @summary Asks for an export of some items. The job ID is returned as answer
	 * @param {string} project Project short label
	 * @param {string} itemList Mandatory list of items to export.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectExportGet(project: string, itemList: string, options?: any): Promise<ExportItemsAck>;
	/**
	 * Permissions - Must be admin. Valid from version 2.1
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
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
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
	 * Permissions - Must be admin. Valid from version 2.1
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
	 * Permissions - Must have the right key to download the file. Valid from version 2.1
	 * @summary Retrieve one project file. The fileno is a simple fileId. This request returns the actual file
	 * @param {string} project Project short label
	 * @param {number} fileno file number
	 * @param {string} key The key of the file
	 * @param {string} [disposition] (optional, from version 2.3) set to disposition&#x3D;inline to ask the server to send the disposition to &#x27;inline&#x27; instead of &#x27;attachment&#x27;
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectFileFilenoGet(project: string, fileno: number, key: string, disposition?: string, options?: any): Promise<ArrayBuffer>;
	/**
	 * Permissions - Must have a valid authentication. Valid from version 2.1
	 * @summary Retrieve list of all files owned by a project
	 * @param {string} project Project short label
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectFileGet(project: string, options?: any): Promise<GetProjectFileListAck>;
	/**
	 * Permissions - Must have read/write access to the project. Valid from version 2.1
	 * @summary Creates a new file - the file should be uploaded as payload (or through the url argument as an alternative). It's mime type should be sent through the HTTP protocol.
	 * @param {string} project Project short label
	 * @param {string} [url] Optional argument -  the file could also come from an external URL. In this case there will be an error if we can&#x27;t retrieve it on the server
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectFilePost(project: string, url?: string, options?: any): Promise<AddFileAck>;
	/**
	 * Permissions - Must have read/write access to the project - admins can impersonate. Valid from version 2.1
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
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
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
	 * @param {string} [body] Payload for the hook, treated as a string.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectHookItemPost(project: string, item: string, hook: string, body?: string, options?: any): Promise<string>;
	/**
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
	 * @summary Cleans up an input html blob according to the current html cleanup rules. The blob is passed in the POST payload. The payload must be a json object with {\"htmlToClean\" - \"x\"}
	 * @param {string} project Project short label
	 * @param {GetHmlBlobInput} [body] Payload
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectHtmlCleanupBlobPost(project: string, body?: GetHmlBlobInput, options?: any): Promise<GetHtmlBlob[]>;
	/**
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
	 * @summary Get the list of items that would be changed if we applied html cleanup. You can pass a cleanup setting in the payload of the POST. If it's not there we take the customer (global) setting and force the cleanup to true
	 * @param {string} project Project short label
	 * @param {CleanupSetting} [body] Cleanup setting (optional)
	 * @param {string} [categories] (optional) list of comma-delimited categories to go through, all by default
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectHtmlCleanupTestPost(project: string, body?: CleanupSetting, categories?: string, options?: any): Promise<HtmlTestCleanup[]>;
	/**
	 * Permissions - ?. Valid from version 2.1
	 * @summary Removes an import
	 * @param {string} project Project short label
	 * @param {string} id id
	 * @param {string} reason The reason why the user is doing this
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectImportIdDelete(project: string, id: string, reason: string, options?: any): Promise<string>;
	/**
	 * Permissions - Must have read/write access to the project. Valid from version 2.1
	 * @summary Imports some items into a project
	 * @param {string} project Project short label
	 * @param {string} reason The reason why the user is doing this
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectImportPost(project: string, reason: string, options?: any): Promise<string>;
	/**
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.4
	 * @summary Get the history of a import in a project
	 * @param {string} project Project short label
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectImportinfoGet(project: string, options?: any): Promise<LabelHistory[]>;
	/**
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
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
	 * Permissions - Must have read/write access to the project. Valid from version 2.1
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
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
	 * @summary Get details of an item. {item} has the form CATEG-number[-vN].
	 * @param {string} project Project short label
	 * @param {string} item Item reference (XXX-nn)
	 * @param {number} [history] (optional) set history&#x3D;1 to retrieve list of all versions
	 * @param {number} [fields] (optional) set fields&#x3D;1 to retrieve list of all fields, even the empty ones
	 * @param {string} [filter] (optional) specify a filter
	 * @param {string} [atDate] (optional) retrieves the item at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z. Not compatible with the version query -vN
	 * @param {number} [withTree] (optional) retrieves the context tree if set to 1, in the field contextTree. Exclusive to filter and atDate
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectItemItemGet(project: string, item: string, history?: number, fields?: number, filter?: string, atDate?: string, withTree?: number, options?: any): Promise<TrimItem>;
	/**
	 * Permissions - Must have read/write access to the project. Valid from version 2.1
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
	 * Permissions - Must have read/write access to the project. Valid from version 2.1
	 * @summary Modifies an item or a folder. Item has the form CATEG-number, folders -  F-CATEG-number
	 * @param {ItemItemBody} body
	 * @param {string} project Project short label
	 * @param {string} item Item reference (XXX-nn)
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectItemItemPut(body: ItemItemBody, project: string, item: string, options?: any): Promise<TrimItem>;
	/**
	 * Permissions - Must have read/write access to the project - admins can impersonate. Valid from version 2.1
	 * @summary Adds an item in a folder
	 * @param {ProjectItemBody} body
	 * @param {string} project Project short label
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectItemPost(body: ProjectItemBody, project: string, options?: any): Promise<AddItemAck>;
	/**
	 * Permissions - ?. Valid from version 2.1
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
	 * Permissions - Must have read/write access to the project. Valid from version 2.1
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
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
	 * @summary Get the list of items that are detailed in a DOC/SIGN item.
	 * @param {string} project Project short label
	 * @param {string} item Item reference (XXX-nn)
	 * @param {number} [detailed] Optional. When set to 1 adds a secondaryItems list in the answer. Defaults to 0.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectItemlistItemGet(project: string, item: string, detailed?: number, options?: any): Promise<GetItemListAck>;
	/**
	 * Permissions - Must have a valid authentication. Valid from version 2.1
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
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
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
	projectJobJobFilenoGet(project: string, job: number, fileno: number, mode?: string, format?: string, disposition?: string, options?: any): Promise<ArrayBuffer>;
	/**
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
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
	 * @param {string} [fromDate] (optional) date from which we consider the merges. ISO8601 format -- this parameter was introduced in v 2.3.4
	 * @param {number} [push] (optional) set to 1 if you inquire about a push, not a merge -- this parameter was introduced in v 2.3.4
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectMergeinfoGet(project: string, excludeCategories?: string, fromDate?: string, push?: number, options?: any): Promise<MergeInfo[]>;
	/**
	 * Permissions - Must have read/write access to the project. Valid from version 2.1
	 * @summary Imports some folders from a project to another as a module. Only available is you have the compose module licensed and the unique_serial setting
	 * @param {string} project Project short label
	 * @param {string} mode Import mode -  can be include or copy
	 * @param {string} sourceProject Source project
	 * @param {string} sourceSelection A selection of folders and items to import
	 * @param {string} reason The reason why the user is doing this
	 * @param {string} [update] Update mode -  can be simple, update or rebase. If not defined, simple assumed
	 * @param {string} [oldSourceProject] Old source project (if update&#x3D;rebase
	 * @param {string} [lockLabel] An optional label that this operation will set on all items
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectModuleimportPost(project: string, mode: string, sourceProject: string, sourceSelection: string, reason: string, update?: string, oldSourceProject?: string, lockLabel?: string, options?: any): Promise<string>;
	/**
	 * Permissions - Must have read/write access to the project. Valid from version 2.1
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
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
	 * @summary Use POST verb instead. Find items based on a search string in one project
	 * @param {string} project Project short label
	 * @param {string} id search id. Used by MatrixJira js to match queries with answers. Is returned in the output structure
	 * @param {string} [search] search term
	 * @param {string} [filter] (optional) applies a filter, can be negative
	 * @param {string} [fieldsOut] (optional) comma-delimited list of fields to return -  101,102 - or * for all
	 * @param {number} [labels] (optional) set to 1 to return labels in the output
	 * @param {number} [treeOrder] (optional) set to 1 to return items in tree order (otherwise it&#x27;s project,category,serial)
	 * @param {string} [links] (optional) set to up,down to return up and down items, or only up or only down
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectNeedleGet(project: string, id: string, search?: string, filter?: string, fieldsOut?: string, labels?: number, treeOrder?: number, links?: string, options?: any): Promise<TrimNeedle>;
	/**
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.4
	 * @summary Find items based on a search string in one project
	 * @param {ProjectNeedleBody} body
	 * @param {string} project Project short label
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectNeedlePost(body: ProjectNeedleBody, project: string, options?: any): Promise<TrimNeedle>;
	/**
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
	 * @summary Find item ids based on a search string in one project
	 * @param {string} project Project short label
	 * @param {string} search search term
	 * @param {string} [filter] (optional) applies a filter, can be negative
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectNeedleminimalGet(project: string, search: string, filter?: string, options?: any): Promise<string[]>;
	/**
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.4
	 * @summary Find item ids based on a search string in one project
	 * @param {ProjectNeedleminimalBody} body
	 * @param {string} project Project short label
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectNeedleminimalPost(body: ProjectNeedleminimalBody, project: string, options?: any): Promise<string[]>;
	/**
	 * Permissions - Must be admin. Valid from version 2.1
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
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
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
	 * Permissions - Must have QMS viewer access (or higher) to the project. Valid from version 2.3
	 * @summary Find a string in the QMS published items
	 * @param {string} project Project short label
	 * @param {string} [search] (optional) search term. Return an empty array on PUB &lt; 2.3.1 and et the list of all pub if not specified.
	 * @param {string} [pubItem] (optional) PUB-x item if you want to search in another than the last one for that project
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectQmsfindGet(project: string, search?: string, pubItem?: string, options?: any): Promise<string[]>;
	/**
	 * Permissions - Must have read access (or higher) for the reports, read/write for the signed reports. Valid from version 2.1
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
	 * @param {string} [format] (optional) format -  html (default), pdf, docx, odt, xml, zipdocx, zippdf or package (from 2.2), or mf (since 2.3)
	 * @param {string} [filter] (optional) specify a comma-delimited filter list. Can be negative filters (with minus before)
	 * @param {number} [useOld] (optional) ask to use the old report engine (pre 1.11) if set to 1.
	 * @param {string} [atDate] (optional) generates the report at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z
	 * @param {string} [reportNameOverride] (optional) Allow to override the reportName of the provided document
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectReportReportPost(project: string, report: string, isSignedReport: string, includeSignatures: string, newTitle: string, copyFields: string, itemList?: string, url?: string, resturl?: string, format?: string, filter?: string, useOld?: number, atDate?: string, reportNameOverride?: string, options?: any): Promise<CreateReportJobAck>;
	/**
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
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
	 * Permissions - Must have a valid authentication. Valid from version 2.1
	 * @summary Get all settings of a project
	 * @param {string} project Project short label
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectSettingGet(project: string, options?: any): Promise<GetProjectSettingAck>;
	/**
	 * Permissions - Must have read/write access to the project. Valid from version 2.1
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
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
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
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
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
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
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
	 * Permissions - Must have a valid authentication. Valid from version 2.1
	 * @summary Get all tags of a project. Works on any project if user is admin
	 * @param {string} project Project short label
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectTagGet(project: string, options?: any): Promise<Tag[]>;
	/**
	 * Permissions - Must have read/write access to the project. Valid from version 2.1
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
	 * @param {string} todoid todoid
	 * @param {string} hardDelete Set to yes to actually remove the record
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	projectTodoTodoidDelete(project: string, todoid: string, hardDelete: string, options?: any): Promise<string>;
	/**
	 * Permissions - Must have read/write access to the project. Valid from version 2.1
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
	 * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
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
	 * Permissions - Must have read/write access to the project. Valid from version 2.1
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
	 * Permissions - Must have a valid authentication. Valid from version 2.1
	 * @summary Get list of all projects, all settings and current user, all todos and JIRA meta create object
	 * @param {number} [adminUI] (optional) set to adminUI&#x3D;1 to have all projects even the ones you are not assigned to, as an admin
	 * @param {string} [output] (optional) comma-delimited list of requested output fields. Returns all fields if parameter is not present
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	rootGet(adminUI?: number, output?: string, options?: any): Promise<ListProjectAndSettings>;
	/**
	 * Permissions - Must be admin. Valid from version 2.1
	 * @summary Creates a new project. Either the full project is sent as XML payload, or the label and shortLabel are given. If uploading data for a whole project, label and shortLabel are optional but overwrite the XML content if present. Branching can be done with an audit report as payload, and branch* must be defined in that case
	 * @param {string} label Project label
	 * @param {string} shortLabel Project short label
	 * @param {string} [overwrite] Must be set to yes if you&#x27;re overwriting an existing project
	 * @param {string} [importUsers] Must be set to yes if you want to import users. false by default
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
	 * Permissions - Must be admin or the user. Valid from version 2.1
	 * @summary Retrieves the user list
	 * @param {string} details (optional) -  if set to 1 returns all details
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	userGet(details: string, options?: any): Promise<GetUserListAck>;
	/**
	 * Permissions - Must be admin. Valid from version 2.1
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
	 * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1
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
	 * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1
	 * @summary Check a user's password
	 * @param {string} user user login name
	 * @param {string} password Asks for a check of the password1
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	userUserCheckGet(user: string, password: string, options?: any): Promise<CheckPasswordAck>;
	/**
	 * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1
	 * @summary Check a user's password
	 * @param {string} user user login name
	 * @param {string} password Asks for a check of the password1
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	userUserCheckPost(user: string, password: string, options?: any): Promise<string>;
	/**
	 * Permissions - Reserved to Matrix Requirements operations. Valid from version 2.1
	 * @summary Removes a user completely.
	 * @param {string} user user login name
	 * @param {string} confirm Needs to be yes for the method to be executed
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	userUserDelete(user: string, confirm: string, options?: any): Promise<string>;
	/**
	 * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1
	 * @summary Retrieves full details of a user
	 * @param {string} user user login name
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	userUserGet(user: string, options?: any): Promise<UserType>;
	/**
	 * Permissions - No permissions needed. Valid from version 2.1
	 * @summary Login
	 * @param {string} user user login name
	 * @param {string} password password in clear
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	userUserLoginPost(user: string, password: string, options?: any): Promise<string>;
	/**
	 * Permissions - Must have a valid authentication. Valid from version 2.1
	 * @summary Logout
	 * @param {string} user user login name
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	userUserLogoutPost(user: string, options?: any): Promise<string>;
	/**
	 * Permissions - Must be admin or the user. Valid from version 2.1
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
	 * Permissions - Must be admin. Valid from version 2.1
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
	 * Permissions - Must be admin. Valid from version 2.1
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
	 * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1
	 * @summary Retrieves all projects a user has access to
	 * @param {string} user user login name
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	userUserProjectsGet(user: string, options?: any): Promise<UserDetails>;
	/**
	 * Permissions - Must be admin or the user. Valid from version 2.1
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
	 * Permissions - Must be admin or the user. Valid from version 2.1
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
	 * Permissions - Must be admin. Valid from version 2.1
	 * @summary Sets the new status of the user. Can be normal,blocked or deleted
	 * @param {string} user user login name
	 * @param {string} status Can be normal,blocked or deleted
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	userUserStatusPut(user: string, status: string, options?: any): Promise<string>;
	/**
	 * Permissions - Must be admin or the user. Valid from version 2.1
	 * @summary Removes a user token
	 * @param {string} user user login name
	 * @param {string} value The token to be removed
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof DefaultApi
	 */
	userUserTokenDelete(user: string, value: string, options?: any): Promise<string>;
	/**
	 * Permissions - Must be admin or the user. Valid from version 2.1
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
export declare enum refLinkStyle {
	edit = 1,// user can change title
	link = 2,// click opens another window
	show = 3,// read only, can call callback if clicked
	select = 4,// renders like the link, but select the item in the tree (changes selection)
	selectTree = 5
}
export declare enum refLinkTooltip {
	none = 1,// no tooltip
	html = 2
}
/**
 * GenericFieldHandler is a field handler which does no validation on the field
 * data. It simply stores the data as a string.
 */
export declare class GenericFieldHandler implements IFieldHandler {
	protected fieldType: string;
	protected data: string;
	private config;
	constructor(fieldTypeIn: string, configIn: XRFieldTypeAnnotatedParamJson);
	/**
	 * Return the field type of this field as a string.
	 * @returns string
	 */
	getFieldType(): string;
	/**
	 * initData will set the data of the field handler to the passed-in parameter,
	 * or, if it is undefined, consult the initialContent key of the configuration
	 * object. If this key is defined, then the data of the field handler will
	 * be set to that value.
	 * @param serializedFieldData
	 */
	initData(serializedFieldData: string | undefined): void;
	/**
	 * Get the data for the field.
	 * @returns a string or undefined.
	 */
	getData(): string | undefined;
	/**
	 * Set the field data to the input string.
	 * @param value
	 * @param doValidation
	 */
	setData(value: string, doValidation?: boolean): void;
}
export interface IRiskControlOptions extends IBaseControlOptions {
	controlState?: ControlState;
	canEdit?: boolean;
	help?: string;
	fieldValue?: string;
	valueChanged?: Function;
	parameter?: IRiskParameter;
	links?: IReference[];
	hideReadonlyColumns?: boolean;
}
export interface IRiskParameter {
	reviewMode?: boolean;
	riskConfig?: IRiskConfig;
	showAttributeNames?: boolean;
	forceAfterWeightsInPrint?: boolean;
	hide_UI?: boolean;
}
export interface IRiskValue {
	factors: IRiskValueFactor[];
	mitigations: IRiskValueMitigation[];
	postWeights?: IRiskValueFactorWeight[];
}
export interface IRiskValueFactor {
	label: string;
	type: string;
	value: string;
	inputType?: string;
	weights: IRiskValueFactorWeight[];
}
export interface IRiskValueFactorWeight {
	description: string;
	label: string;
	type: string;
	value: number;
}
export interface IRiskValueMitigation {
	to: string;
	title: string;
	changes?: IRiskValueMitigationChange[];
}
export interface IRiskValueMitigationChange {
	by: number;
	changes: string;
	description: string;
	name: string;
}
export interface IRiskValueMap {
	[key: string]: number;
}
export interface IRiskRender {
	text: string;
	foregroundColor: string;
	backgroundColor: string;
	css: string;
}
export declare class RiskCalculator {
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
export declare class RiskControlImpl extends BaseControl<GenericFieldHandler> {
	private settings;
	private config;
	private risk;
	private mitbody;
	private isPrint;
	private riskCalculator;
	private mitigationsRemoved;
	constructor(control: JQuery, fieldHandler: GenericFieldHandler);
	init(options: IRiskControlOptions): void;
	hasChangedAsync(): Promise<boolean>;
	getValueAsync(): Promise<string>;
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
export declare class ProjectStorage implements IDataStorage {
	Project: string;
	DOMPurify: any;
	constructor(project: string, appVersion: string, matrixBaseUrl: string, dompurifylib: any);
	setItem(itemKey: string, itemVal: string, dontSanitize?: boolean): void;
	getItem(itemKey: string, dontSanitize?: boolean): string;
	getItemDefault(itemKey: string, defaultValue: string): string;
}
export declare class ItemSelectionFieldHandler implements IFieldHandler {
	protected fieldType: string;
	protected data: string;
	protected config: XRFieldTypeAnnotatedParamJson;
	constructor(configIn: XRFieldTypeAnnotatedParamJson, fieldTypeIn?: string);
	addSignatures(signatures: string[], includeAll: boolean): void;
	getFieldType(): string;
	initData(serializedFieldData: string | undefined): void;
	getData(): string | undefined;
	setData(value: string, doValidation?: boolean): void;
	getItems(): IReference[];
	getItemCount(): number;
	hasItems(): boolean;
	hasItem(itemId: string, projectShortLabel?: string): boolean;
	insertItem(position: number, item: IReference): ItemSelectionFieldHandler;
	appendItem(item: IReference): ItemSelectionFieldHandler;
	removeItem(position: number): ItemSelectionFieldHandler;
	clear(): ItemSelectionFieldHandler;
	setItems(selectedItems: IReference[]): void;
	protected name: string;
	getFieldName(): string;
	setFieldName(value: string): void;
}
export interface IItemSelectionParams {
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
export interface INotificationsChanges {
	total: number;
	allNotifications: XRGetTodosAck;
}
declare class NotificationsCache {
	private myTodoCount;
	private myTodos;
	private isEnabled;
	setNotificationCounts(todos: XRTodoCount[]): void;
	getNotificationCounts(): XRTodoCount[];
	getNotifications(): XRTodo[];
	setNotifications(todos: XRTodo[]): void;
	private notificationUpdateTimer;
	/**
	 * Update the notifications cache  for the provided list of projects
	 * @param projects
	 */
	update(projects: string[]): Promise<INotificationsChanges>;
	setEnabled(isEnabled: boolean): void;
	/**
	 * Return the total number of notifications for a specific project from the cache
	 * @param project
	 */
	getTotalNotificationsProject(project: string): XRTodoCount | null;
	/**
	 * Return the total number of notifications from the cache
	 */
	getTotalNotifications(): number;
	/**
	 * Return the notifications for a specific project and item from the cache
	 * @param project
	 * @param item
	 */
	getProjectNotifications(project: string, item: string): XRTodo[];
	private getAllNotificationsAndUpdateCache;
}
export interface INotificationTableOptions {
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
export declare class Notifications implements IPlugin {
	private notificationConfig;
	private lastCount;
	private newNotification;
	private _item;
	private lastMenu;
	private projectCount;
	isDefault: boolean;
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
	getProjectPagesAsync(): Promise<IProjectPageParam[]>;
	updateMenu(ul: JQuery): void;
	private userCanAcknowledgeNotification;
	supportsControl(): boolean;
	private watchActivity;
	private updateActivity;
	updateUI(notifChanged: INotificationsChanges): Promise<void>;
	private renderNotificationProjectPage;
	protected renderNotificationRow(tr: JQuery, notification: XRTodo, tableOptions: INotificationTableOptions): void;
	protected renderNotificationTable(container: JQuery, tableOptions: INotificationTableOptions, notifications: XRTodo[]): void;
	protected indicateNotificationChange(): void;
	protected closeNotifications(notifications: JQuery, deleteThem: boolean): void;
	protected updateProjectMenu(): void;
	protected showCreateNotificationDialog(): JQueryDeferred<XRTodo[]>;
	protected showAllNotificationsDialog(): void;
	private showNotifications;
	protected filterNotifications(ui: JQuery, cbs: any): void;
	deleteNotificationDlg(notification: XRTodo): JQueryDeferred<unknown>;
	protected deleteNotificationIdRec(project: string, notifications: JQuery, deleteThem: boolean, idx: number): JQueryDeferred<unknown>;
	private countRec;
	protected updateCounters(): void;
	protected getNotificationCount(itemId: string): number;
	private addFancyTreeNotificationCounterPlugin;
	static anchorTimer: number;
	static anchorNotifications(): void;
}
export interface IAttributePrimitiveParams {
	attributeName?: string;
	path?: string;
	class?: string;
	replace?: IReplaceParam;
}
export interface IReplaceParam {
	match: string;
	with: string;
}
/************************************** Processor class  ********************************************/
export declare class PrintProcessor implements IPrintProcessor {
	private onError;
	private possibleTargets;
	private mf?;
	globals?: IPrintGlobals;
	private functionDefaults?;
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
	processSection(formatter: IPrintCustomFormatter, section: ICustomSection, projectOverwrites: IPrintFunctionParamsOverwrites, selection: string[], possibleTargets: string[]): Promise<IProcessResult>;
	getTableData(tableId: string, selection: string[]): Promise<string>;
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
	static getItemSorter(uid: string): IPrintSorter | null;
	static getItemSorterDropdown(): IDropdownOption[];
	static addItemIterator(uid: string, iterator: IPrintIterator): void;
	static getItemIterator(uid: string, quiet?: boolean): IPrintItemIterator | null;
	static getItemIteratorsDropdown(items: boolean, folders: boolean, allowNoIterator: boolean): IDropdownOption[];
	static addLabelIterator(uid: string, iterator: IPrintIterator): void;
	static getLabelIterator(uid: string): IPrintLabelIterator | null;
	static addFieldIterator(uid: string, iterator: IPrintIterator): void;
	static getFieldIterator(uid: string): IPrintFieldIterator | null;
	static addFunction(uid: string, fctn: IPrintFunction): void;
	static getFunction(uid: string): IPrintFunction | null;
	static FIELD_FUNCTION_TYPE: string;
	static FIELD_FUNCTION_PREFIX: string;
	static getFieldFunctionId(uid: string): string;
	static getFieldFunction(uid: string): IPrintFunction | null;
	static addConditionFunction(uid: string, fctn: IConditionFunction): void;
	static getConditionFunction(uid: string): IConditionFunction | null;
	static getItemConditionDropdown(): IDropdownOption[];
	static getAllFunctions(): IPrintBaseFunctionMap;
	static getAllIterators(): IPrintBaseFunctionMap;
	static getJsonConfig(config: string, mf: JQuery): any;
	static getCdataAsJSON(node: Element): any;
	static getCdataAsText(node: Element, escapeHtmlEntities: boolean): string;
	static getUserName(user: string, mf: JQuery, first: boolean, last: boolean, login: boolean, email: boolean): string;
	static getFieldAndLabelsIteratorsDropdown(): IDropdownOption[];
}
export interface PostProcessor {
	run: (rendering: string, params: IPrintFunctionParams) => string;
}
export interface PreProcessor {
	run: (mf: JQuery, params: IPrintFunctionParams) => void;
}
export interface PostProcessorMap {
	[key: string]: PostProcessor;
}
export interface PreProcessorMap {
	[key: string]: PreProcessor;
}
declare class PrintProcessorRegistry {
	private postProcessors;
	private preProcessors;
	executePost(params: IPrePostProcessorExecParams, rendering: string): string;
	executePre(params: IPrePostProcessorExecParams, mf: JQuery): void;
	registerPostProcessor(name: string, processor: PostProcessor): void;
	registerPreProcessor(name: string, processor: PreProcessor): void;
	getRegisteredProcessors(): {
		preProcessors: PreProcessorMap;
		postProcessors: PostProcessorMap;
	};
}
export interface IPrintMacro {
}
export interface IPrintFieldParams extends IPrintMacro {
	fieldInfo?: IPrintFieldInfo;
}
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
export interface IPluginFieldHandler<T> extends IFieldHandler {
	getValueAsync(): Promise<T>;
	setValue(value: T): void;
}
export declare abstract class ControlCoreBase<T extends IPluginFieldHandler<AAA>, AAA extends IPluginFieldValueBase> extends BaseControl<T> implements IPrintFunction {
	protected settings?: IControlOptions;
	protected editor: JQuery | null;
	static defaultOptions: IControlOptions;
	pluginConfig: IPluginConfig<IServerSettingsBase, IProjectSettingsBase>;
	constructor(pluginConfig: IPluginConfig<IServerSettingsBase, IProjectSettingsBase>, fieldHandler: T, control?: JQuery);
	init(options: IControlOptions): void;
	/** method to call to initialize the editor, e.g. to attach handlers to checkboxes etc */
	protected initEditor(): void;
	/** this method is called by the UI to retrieve the string to be saved in the database */
	getValueAsync(): Promise<string | undefined>;
	protected originalValue?: IPluginFieldValueBase;
	/** this method renders a user input field in an item.
	 * @readOnly is set to true if the user cannot edit the data (e.g. in history or while printing)
	 * @params are can be parameter added by the printing configuration, to configure how something should be printed
	 */
	protected abstract renderControl(readOnly: boolean, params?: IPluginPrintParamsBase | null): JQuery;
	protected abstract renderPrint(fieldId: string, value: IPluginFieldValueBase, options: IPluginFieldOptionsBase, params: IPluginPrintParamsBase): JQuery;
	protected abstract renderEditor(fieldId: string, value: IPluginFieldValueBase, options: IPluginFieldOptionsBase): JQuery;
	/** this method is called by the UI to figure out if the control's value changed */
	hasChangedAsync(): Promise<boolean>;
	protected abstract isSame(a: IPluginFieldValueBase, b: IPluginFieldValueBase): boolean;
	refresh(): void;
	setValue(newValue: string, reset?: boolean): void;
	destroy(): void;
	resizeItem(): void;
	/** CUSTOM SECTION  */
	getGroup(): string;
	getHelp(): string;
	getName(): string;
	renderAsync(overwrites: IGlobalPrintFunctionParams, paramsIn: IPrintFunctionParams, itemOrFolderRef: string, itemOrFolder: JQuery, mf: JQuery, globals: IPrintGlobals, possibleTargets: string[], onError: (message: string) => void): Promise<string>;
}
export declare abstract class ControlCore<T extends IPluginFieldOptionsBase, F extends IPluginFieldHandler<A>, A extends IPluginFieldValueBase> extends ControlCoreBase<F, A> {
	protected controlConfig?: IPluginFieldParameterBase<T>;
	protected renderControl(readOnly: boolean, params?: IPluginPrintParamsBase): JQuery;
}
export declare class PluginCore implements IPlugin {
	Plugin: IExternalPlugin<IServerSettingsBase, IProjectSettingsBase, IPluginFieldHandler<IPluginFieldValueBase>, IPluginFieldValueBase, IDashboardParametersBase>;
	static getServerSetting(settingId: string, defaultValue: unknown): IServerSettingsBase;
	/** if false the plugin will not be loaded (for debugging) */
	isDefault: boolean;
	/** can be overwritten by plugin to enable or disable functionality based on what is selected/configured */
	enabledInContext: boolean;
	constructor(plugin: IExternalPlugin<IServerSettingsBase, IProjectSettingsBase, IPluginFieldHandler<IPluginFieldValueBase>, IPluginFieldValueBase, IDashboardParametersBase>);
	initProject(project: string): void;
	onInitProject(project: string): void;
	initItem(_item: IItem, _jui: JQuery): void;
	onInitItem(_item: IItem): void;
	/** can be overwritten by plugin to enable or disable functionality based on what is selected/configured */
	enableToolMenu: (ul: JQuery, _hook: number) => unknown;
	updateMenu(ul: JQuery, hook: number): Promise<void>;
	/** can be overwritten by plugin to enable or disable functionality based on what is selected/configured */
	enableControl: (fieldType: string) => boolean;
	supportsControl(fieldType: string): boolean;
	createControl(ctrlObj: JQuery, settings: IBaseControlOptions): Promise<void>;
	getFieldConfigOptions(): IFieldDescription[];
	initPrintingAsync(): Promise<void>;
	/** can be overwritten by plugin to enable or disable functionality based on what is selected/configured */
	enableProjectSetting: () => boolean;
	getProjectSettingPagesAsync(): Promise<ISettingPage[]>;
	/** can be overwritten by plugin to enable or disable functionality based on what is selected/configured */
	enableServerSetting: () => boolean;
	getCustomerSettingPagesAsync(): Promise<ISettingPage[]>;
	/** can be overwritten by plugin to enable or disable functionality based on what is selected/configured */
	enableDashboardAsync: () => Promise<boolean>;
	getProjectPagesAsync(): Promise<IProjectPageParam[]>;
	getTinyMenuItems(editor: unknown): ITinyMenu[];
	getUserMenuItems(): IPluginMenuAction[];
	getConfigUserMenuItems(): IPluginMenuAction[];
	getProjectMenuItems(): IPluginMenuAction[];
	getCustomSearches(): IPluginSearch[];
	getConfig(): IPluginConfig<IServerSettingsBase, IProjectSettingsBase>;
	getPluginName(): string;
	getPluginVersion(): string;
	getTiles(): ITile[];
	getDashboardLinksForAnalyticsAsync(): Promise<IDashboardParametersBase[]>;
}
export interface IValidationSpec {
	validationFunction?: JsonEditorValidation | null | any;
	schema?: string;
	apiHelp?: string;
}
export interface IPanel {
	destroy: () => void;
	title: string;
	toggleZen?: () => void;
}
declare class Application {
	lastMainItemForm: ItemControl;
	currentPanel: IPanel;
	protected currentPrintPanel: IPanel;
	protected saveEnabled: boolean;
	currentItem: IItem;
	protected currentItemForcedReadonly: boolean;
	protected isSaving: boolean;
	private latestUpdateControlEventId;
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
declare class ConfigPageFactory extends Application {
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
export interface IActualSetting {
	projectId: number;
	projectName: string;
	settingName: string;
	settingValue: any;
}
export interface ISetupSetting {
	key: string;
	type: string;
	userTitle: string;
}
export interface IProjectPlugin {
	owner: string;
	projectId: number;
	projectName: string;
	pwd: string;
	repo: string;
	user: string;
}
export interface IServerPluginSettings {
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
export interface IConfigApp extends IBaseApp {
	configPages?: ConfigPageFactory;
	plugins: IServerPluginSettings[];
	getConfigPages(): ConfigPageFactory;
	init(itemForm: JQuery, dlgForm: JQuery): void;
	getUser(): string | null;
	getVersion(): string;
	getVersionQualifier(): string;
	getNeedsSave(): boolean;
	getLastProject(): string;
	getType(): string;
	getParentId(itemId: string): string;
	saveAsync(): JQueryDeferred<any>;
	cancel(): void;
	resizeItem(): void;
	postLogin(user: string): void;
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
	setJSONProjectSettingAsync(projectId: string, setting: IJsonSetting, pageId: string): JQueryDeferred<unknown>;
	setProjectSettingAsync(projectId: string, settingId: string, settingValue: string, pageId: string): JQueryDeferred<unknown>;
	setServerSettingAsync(settingId: string, settingValue: string): JQueryDeferred<any>;
	getServerSetting(settingId: string, defaultValue: any): any;
	setServerSetting(settingId: string, property: string, newValue: any): void;
	getCustomerSetting(setting: string): string;
	setCategorySettingAsync(projectId: string, category: string, settingId: string, settingValue: string, pageId: string): JQueryDeferred<any>;
	getProjectConfig(projectId: string): XRGetProject_ProjectInfo_ProjectInfo;
	getCatgegoryConfig(projectId: string, category: string): XRCategoryExtendedType | null;
	getCategories(projectId: string): string[];
	getUserPermission(projectId: string): XRUserPermissionType[];
	getGroupPermission(projectId: string): XRGroupPermissionType[];
	canUserWrite(projectId: string, login: string): boolean;
	canGroupWrite(projectId: string, groupId: number): boolean;
	getFieldConfig(projectId: string, category: string, field: string): XRFieldType | null;
	updateFieldConfig(projectId: string, category: string, field: string, newConfig: XRFieldType): void;
	removedFromTree(itemId: string, newId: string): void;
	renamePage(pageId: string, label: string, parent: string): void;
	updateProjectData(projectId: string): JQueryDeferred<IRestResult>;
	reloadProject(project: string, pageId: string, parentFolderId: string): JQueryDeferred<any>;
	signOut(): void;
	isConfigApp(): true;
	isConfigApplication: true;
	isClientApplication: false;
}
export interface IConfigPage {
	getNode(): IDB;
	saveAsync(): JQueryDeferred<unknown>;
	load(pageId: string): void;
	getProject(): string;
	getCategory(): string;
	getField(): string;
	willUnload(): void;
}
export declare class ConfigPage implements IConfigPage {
	static PROJECT_SETTING_FOLDER_BASE_ID: string;
	static PROJECT_SETTING_FOLDER_TYPE: string;
	protected pageId: string;
	protected simple: JQuery;
	protected allUsers: XRUserType[];
	protected allGroups: XRGroupType[];
	configApp: IConfigApp;
	getNode(): IDB;
	saveAsync(): JQueryDeferred<unknown>;
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
	protected showNote(text: string): JQuery;
	protected showAdvancedCode(code: string, success: (code: string) => void, semanticValidate?: IValidationSpec): void;
	protected getProjectSettingLink(setting: string): string;
	protected getProjectSettingLinkA(setting: string, name: string): string;
	protected getCategorySettingLink(): string;
	protected getTraceSettingLink(): string;
	protected getPluginLink(): string;
	protected getGroupId(group: XRGroupType): string;
	protected getGroupDisplayNameFromId(groupOrUserId: string): string;
	protected combinedName(user: XRUserType): string;
	private resizeUserSelectDlg;
	showUserAndGroupsSelectWithDialog(container: JQuery, showUsers: boolean, showGroups: boolean, help: string, empty: string, selected: string[], dialogTitle: string, onSelect: (selection: string[]) => void): void;
	protected showSelectDialog(selectedIn: string[], showUsers: boolean, showGroups: boolean, dialogTitle: string, onSelect: (selection: string[]) => void): void;
	protected markUsersWithoutAccess(lis: JQuery): void;
	protected filterGroupsAndUsers(lis: JQuery, sex: string, writeOnly: boolean): void;
	protected updateUsersAndGroups(withDetails: boolean): JQueryDeferred<void>;
	initMeta(users: XRUserType[], groups: XRGroupType[], pageId: string): void;
}
export declare class LineEditor {
	editor: LineEditorExt;
	constructor();
	showDialog(configPage: ConfigPage, title: string, height: number, input: ILineEditorLine[], onOk: (update: ILineEditorLine[]) => boolean, width?: number): void;
	static mapToKeys(results: ILineEditorLine[]): ILineEditorLine[];
}
export interface ITestFieldParam extends XRFieldTypeAnnotatedParamJson {
	fieldMeaning: string;
}
export interface ITestStepsResultOption {
	id: string;
	label: string;
}
export interface ITestStepsResultsConfig {
	canBeModified: boolean;
	columns: ITestConfigTablesColumn[];
	passFailEditorConfig: ITestRuleStep[];
}
declare class TestManagerConfiguration {
	XTCconfig: ITestConfig;
	constructor();
	initialize(itemConfig: ItemConfiguration): void;
	getTestRunResultOptions(): ITestStepsResultOption[];
	getTestStepsConfig(category: string): ITestConfigTablesColumns;
	getTestStepsResultsConfig(): ITestStepsResultsConfig;
	isXTC(type: string): boolean;
	isTC(type: string): boolean;
	getXTCType(): string;
	getCloneSources(): string[];
	getTestRunResultPlaceholder(value: string): string;
	isCloneSource(category: string): boolean;
}
/**
 * A Field represents a field in an Item in a Project on a Matrix Instance. The Field contains
 * the data for a given field, along with knowledge about the configuration of that field, as
 * given by the Category settings for Items of that particular category.
 *
 * The end user reads and changes the data in a field through a Field Handler. There is a
 * unique field handler for each field type. Consult documentation for a table mapping field
 * types to field handlers.
 */
export declare class Field {
	private item;
	private config;
	private handler;
	private oldData?;
	constructor(item: Item, config: XRFieldTypeAnnotated, handler: IFieldHandler);
	/**
	 * Get the Item which contains this field.
	 * @returns the containing Item
	 */
	getItem(): Item;
	getHandlerRaw(): IFieldHandler;
	getHandler<T>(): T;
	getFieldType(): string;
	getFieldId(): number;
	getFieldName(): string;
	getFieldConfigParameter(name: string): unknown;
	needsSave(): boolean;
}
export interface IDocFieldHandler extends IFieldHandler {
	dhfFieldConfig: IAnyMap;
	setDHFConfig(config: IAnyMap): void;
	getDefaultConfig(): any;
	getXmlValue(): string;
	getFieldName(): string;
	setFieldName(value: string): void;
	addSignatures(signatures: string[], includeAll?: boolean): void;
}
export interface IDHFSectionOptions {
	globalOptions?: boolean;
	show_section_title?: string;
	automation?: string;
	page_break?: string;
	landscape?: boolean;
	sub_section?: string;
}
export interface IDHFControlDefinitionValue {
	fieldValue?: string;
	fieldValueXML?: string;
	name?: string;
	type?: string;
	ctrlConfig?: IDHFSectionOptions;
}
export interface IDHFControlDefinition extends IControlDefinition {
	dhfValue?: IDHFControlDefinitionValue;
	configTouched?: boolean;
}
/**
 * The FieldHandler for all DOC fields.
 */
export declare class DHFFieldHandler extends GenericFieldHandler {
	private itemConfig;
	private fieldConfig;
	innerDataHandler: IDocFieldHandler;
	constructor(itemConfig: ItemConfiguration, fieldConfig: IDHFControlDefinition);
	getData(): string | undefined;
	initData(fieldValue: string | undefined): void;
	setInnerFieldHandler(docFieldHandler: IDocFieldHandler): void;
}
/**
 * DocItem is a subclass of Item which provides additional helper functions for managing a
 * Document (Items of Category DOC in a Matrix Instance).
 */
export declare class DocItem extends Item {
	/**
	 * Construct a DocItem.
	 * @param category
	 * @param item
	 * @param fieldMask
	 */
	constructor(category: Category, item?: IItemGet, fieldMask?: ItemFieldMask);
	/**
	 * add a section to the end of a document
	 * @param {title} Title of the section
	 * @param {sectionType} Type of the section
	 */
	addSection(title: string, sectionType: string): DHFFieldHandler;
	/**
	 * Get the next section that needs to be filled
	 * */
	getNextDHFFieldName(): string;
	/**
	 * Get the list of DHF fields. This list only includes actual DHF fields,
	 * not the "hidden" ones.
	 * @returns DHF fields sorted by name (dhf00, dhf01, etc).
	 */
	getDHFFields(): Field[];
	/**
	 * It's helpful to see the names of DHF fields that would show up in the
	 * UI for the DOC. Then fields can be retrieved by these names.
	 * @returns A list of DOC UI field names (not "dhf01" but "Signatures",
	 *     for example).
	 */
	getDHFFieldInnerNames(): string[];
	/**
	 * Retrieve an array of DOC DHF fields with the given UI name.
	 * @param name
	 * @returns An array of Field objects from the Item.
	 */
	getDHFFieldsByInnerName(name: string): Field[];
	/**
	 * It is often convenient to work with the "inner field" of a dhf field,
	 * where the configuration and values lie.
	 * @returns An array of IDocFieldHandlers[]. The length is the number of valid fields.
	 */
	getInnerDHFFields(): IDocFieldHandler[];
	/**
	 * This method helps you know the most appropriate FieldHandler class to use
	 * to manipulate the doc field.
	 * @param handler
	 * @returns the name of the handler class.
	 */
	getDocFieldHandlerClassName(handler: IDocFieldHandler): string;
	private isHiddenDHFField;
	/** insert a section at a given position
	 * @param {number} number Position of the section
	 * @param {sectionName} sectionName Name of the section
	 * @param {sectionType} sectionType Type of the section
	 * @returns the DHFFieldHandler inserted.
	 * */
	insertSection(number: number, sectionName: string, sectionType: string): DHFFieldHandler;
	/**
	 * Remove a section at a given position
	 * @param number The position of the element to remove.
	 * @throws Error if number is out of range.
	 */
	removeSection(number: number): void;
	private exportTo;
	/** Generate a html document
	 * @return {url} the URL of the generated document */
	toHTML(progressReporter?: (jobId: number, jobDetails: JobsStatusWithUrl) => void): Promise<string>;
	/** Generate a pdf document
	 * @return {url} the URL of the generated document */ toPDF(progressReporter?: (jobId: number, jobDetails: JobsStatusWithUrl) => void): Promise<string>;
	/** Generate a docx  document
	 * @return {url} the URL of the generated document */
	toDOCx(progressReporter?: (jobId: number, jobDetails: JobsStatusWithUrl) => void): Promise<string>;
	private addMandatoryFields;
	private addDocumentOptions;
}
/**
 * An Item represents a database item. Every Item must have at least a category.
 * If it has an id, then it was retrieved from the database and may be altered and later
 * saved (use needsSave() to determine if the Item needs saving). If it doesn't have
 * an id, it needs to be saved. When an item is saved, it's data is re-initialized from
 * the database.
 */
export declare class Item {
	private category;
	/**
	 * Construct an Item
	 * @param category
	 * @param item
	 * @param fieldMask
	 */
	constructor(category: Category, item?: IItemGet, fieldMask?: ItemFieldMask);
	private fieldMask;
	private fieldMap;
	private dirty;
	private id;
	private type;
	private title;
	private labels;
	private isFolderProperty;
	private downLinks;
	private upLinks;
	private creationDate;
	private maxVersion;
	private history;
	protected toBeIntegrated: IItemGet;
	private setDirty;
	/**
	 * Gets the ItemFieldMask which specifies which fields are loaded
	 * @returns on ItemFieldMask object
	 */
	getFieldMask(): ItemFieldMask;
	/**
	 * Read-only.
	 * @returns The highest version reached for this item, or undefined if the
	 *     item hasn't yet been saved on the server.
	 */
	getMaxVersion(): number | undefined;
	/**
	 * Return the history for an item, if present.
	 * @returns an IItemHistory array
	 */
	getHistory(): IItemHistory[];
	private hasLink;
	private addLink;
	private removeLink;
	/**
	 * Return any downlinks.
	 * @returns An array of downlinks (may be undefined)
	 */
	getDownlinks(): IReference[];
	/**
	 * Check if there is a downlink to another item
	 * @param id
	 * @returns true if this item links to the item given by {id}
	 */
	hasDownlink(id: string): boolean;
	/**
	 * Replace the current array of downlinks with a new one.
	 * @param downLinks
	 * @returns the Item itself
	 */
	setDownlinks(downLinks: IReference[]): Item;
	/**
	 * Add a new downlink to the item. Does nothing if the item is
	 * already represented
	 * @param id - the id of the item to add.
	 * @param title - optional. The title is just for convenience.
	 *     It is neither saved nor representative of the actual title of the item.
	 * @throws Error if the passed id matches the id of the current item.
	 * @returns the Item
	 */
	addDownlink(id: string, title?: string): Item;
	/**
	 * Remove a link given by {id} if it exists.
	 * @param id  the id of the downlinked item to remove
	 * @returns the current Item
	 */
	removeDownlink(id: string): Item;
	/**
	 * Return any uplinks.
	 * @returns An array of uplinks (may be undefined)
	 */
	getUplinks(): IReference[];
	/**
	 * Check if there is an uplink to another item
	 * @param id
	 * @returns true if this item links to the item given by {id}
	 */
	hasUplink(id: string): boolean;
	/**
	 * Replace the current array of uplinks with a new one.
	 * @param upLinks
	 * @returns the Item itself
	 */
	setUplinks(upLinks: IReference[]): Item;
	/**
	 * Add a new uplink to the item. Does nothing if the item is
	 * already represented
	 * @param id - the id of the item to add.
	 * @param title - optional. The title is just for convenience.
	 *     It is neither saved nor representative of the actual title of the item.
	 * @throws Error if the passed id matches the id of the current item.
	 * @returns the Item
	 */
	addUplink(id: string, title?: string): Item;
	/**
	 * Remove a link given by {id} if it exists.
	 * @param id  the id of the uplinked item to remove
	 * @returns the current Item
	 */
	removeUplink(id: string): Item;
	/**
	 * Helper method to test if a field id is valid within the Item Category, irrespective of
	 * whether or not it is specified in the mask.
	 * @param fieldId
	 * @returns true if fieldId is valid within the Category.
	 */
	private isValidFieldId;
	/**
	 * Initializes the data fields for the item from an IItemGet structure
	 * @param item
	 */
	private setData;
	/**
	 * Sometimes you've been given an Item with a restrictive ItemFieldMask, however, you'd
	 * like to set a value for a field that was not in the mask. With this method, you can
	 * expand the field mask to include the field given by the fieldId (easily obtained
	 * from the Category object).
	 *
	 * This field will be added to the mask, and the associated Field object will be returned
	 * with an empty value, which you could set. The object will be marked as "dirty" at this point,
	 * because we don't know if the server has an empty value for this field or not, so we assume
	 * the pessimistic case.
	 * @param fieldId a valid fieldId from the Category of the item.
	 * @throws if the fieldId is already in the ItemFieldMask, or if the fieldId is not valid for the Category.
	 * @returns the Field object
	 */
	expandFieldMaskWithEmptyField(fieldId: number): Field | undefined;
	/**
	 * Export the data from this item into an IItemPut structure
	 * @returns An IItemPut structure, filled in from the current state of the Item.
	 */
	extractData(): IItemPut;
	/**
	 * Get the unique Id of the Item within the Project.
	 * @returns a string value containing the Item Id.
	 */
	getId(): string;
	/**
	 * isFolder returns true if the Item is of Category FOLDER.
	 * @returns true if a FOLDER, false otherwise
	 */
	isFolder(): boolean;
	/**
	 * Returns the type (Category) of the Item.
	 * @returns the Item type
	 */
	getType(): string;
	/**
	 * Get the creation date of the item
	 * @returns a string date value or undefined
	 */
	getCreationDate(): string | undefined;
	/**
	 * Set the creation date.
	 * @param creationDate
	 * @returns the Item itself.
	 */
	setCreationDate(creationDate: string): Item;
	/**
	 * Get the Item title
	 * @returns the Item title
	 */
	getTitle(): string;
	/**
	 * Set the title of the Item
	 * @param title
	 * @returns the Item itself
	 */
	setTitle(title: string): Item;
	/**
	 * Returns an array of labels set for the Item.
	 * @returns array of strings
	 */
	getLabels(): string[];
	private labelsToString;
	private stringToLabels;
	private verifyLabelsAllowed;
	/**
	 * Sets the labels for an Item, overwriting any previous labels
	 * @param newLabels
	 * @returns Item
	 * @throws throws error if the Item category doesn't allow labels
	 */
	setLabels(newLabels: string[]): Item;
	/**
	 * Adds one label to the item if it isn't already set. Note that if the
	 * label is in an XOR group with another set label, that label will be
	 * removed.
	 * @param labelToSet
	 * @returns Item
	 * @throws throws error if the Item category doesn't allow labels
	 */
	setLabel(labelToSet: string): Item;
	/**
	 * Unsets one label if it exists.
	 * @param labelToUnset
	 * @returns Item
	 * @throws throws error if the Item category doesn't allow labels
	 */
	unsetLabel(labelToUnset: string): Item;
	/**
	 * Return the Category for the current item
	 * @returns Category
	 */
	getCategory(): Category;
	/**
	 * needsSave() checks the Fields of the Category to which the Item belongs to see if they've
	 * been changed. If so it marks the Item as dirty.
	 * @returns true if the Item has changes that should be propped to the server
	 */
	needsSave(): boolean;
	/**
	 * An Item can be complete or partial, based on the ItemFieldMask passed in
	 * at construction.
	 * @returns true if the item has all of its Category fields.
	 */
	hasAllFields(): boolean;
	/**
	 * In case the Item is masked (hasAllFields() returns false), one or more Fields may
	 * not be tracked. hasFieldId() allows you to check if the field is present.
	 * @param fieldId a valid field id within the Category
	 * @throws Error if fieldId is not valid within the Category
	 * @returns true if the Item's mask allows for this field.
	 */
	hasFieldId(fieldId: number): boolean;
	getFieldById(fieldId: number): Field | undefined;
	/**
	 * Returns all fields within the mask which match the fieldName.
	 * @param fieldName
	 * @returns an array of Fields. Note that if the mask has limited the set of fields from
	 *     the Category which are tracked for this particular item, the number of returned Field
	 *     objects may be less than you expect.
	 */
	getFieldByName(fieldName: string): Field[];
	/**
	 * Returns a Field matching the field name. The field should exist and be within the mask.
	 * @param fieldName
	 * @throws Error if there is no such field, either because the name is invalid or it is not within
	 *     the mask for the Item.
	 * @returns a valid Field.
	 */
	getSingleFieldByName(fieldName: string): Field;
	/**
	 * Returns all fields within the mask which match the fieldType.
	 * @param fieldType
	 * @returns an array of Fields. Note that if the mask has limited the set of fields from
	 *     the Category which are tracked for this particular item, the number of returned Field
	 *     objects may be less than you expect.
	 */
	getFieldsByType(fieldType: string): Field[];
	/**
	 * Create a Todo attached to this item.
	 * @param users an array of user names
	 * @param type
	 * @param text
	 * @param atDate
	 * @returns A comma-separated list of Todo ids (integers), relative to the Item.
	 */
	createTodo(users: string[], type: TodoTypes, text: string, atDate: Date): Promise<string>;
	/**
	 * Return the Todos associated with this item.
	 * @param includeDone - if true, includes done todos
	 * @param includeAllUsers - if true, includes all todos for all users.
	 * @param includeFuture - false by default. If true, includes future todos.
	 * @returns Information on the Todos
	 */
	getTodos(includeDone?: boolean, includeAllUsers?: boolean, includeFuture?: boolean): Promise<GetTodosAck>;
	/**
	 * Visit the server and get this Item as a DocItem.
	 * @throws Error if the fields of this Item are dirty.
	 * @returns a DocItem.
	 */
	toDocItem(): Promise<DocItem>;
}
export interface ITitleAndId {
	title: string;
	id: string;
	isFolder: boolean;
}
/**
 * IProjectSearchOptions is a helper interface which describes options to a search
 * within a given project.
 */
export interface IProjectSearchOptions {
	/**
	 * Specifies a search filter. Default value empty string.
	 */
	filter?: string;
	/**
	 * A list of comma-separated field IDs to retrieve for each Item. By
	 * default all fields, given by the wildcard string "*".
	 */
	fieldList?: string;
	/**
	 * Include information on the labels on each item. By default true.
	 */
	includeLabels?: boolean;
	/**
	 * Include information on the downlinks for each item. By default false.
	 */
	includeDownlinks?: boolean;
	/**
	 * Include information on the uplinks for each item. By default false.
	 */
	includeUplinks?: boolean;
	/**
	 * Return the array of results in tree order. By default false.
	 */
	treeOrder?: boolean;
}
export interface IProjectNeeds {
	/**
	 * Returns the base URL of the server, and the REST api endpoint.
	 * @returns a tuple with [baseUrl, baseRestUrl]
	 */
	getUrlInfo(): [
		string,
		string
	];
	parseRefForProject(project: string, itemRef: string): IItemIdParts;
	setFieldsInProject(project: string, projectItemConfig: ItemConfiguration, itemId: string, data: ISetField[]): Promise<IItemGet>;
	getItemFromProject(project: string, id: string): Promise<IItemGet>;
	updateItemInProject(project: string, item: IItemPut, currentVersion?: number): Promise<string>;
	createItemInProject(project: string, parentFolderId: string, item: IItemPut): Promise<string>;
	deleteItemInProject(project: string, itemId: string, force?: boolean): Promise<string>;
	moveItemsInProject(project: string, folderId: string, itemIds: string[]): Promise<string>;
	searchIdsInProject(project: string, term: string): Promise<string[]>;
	searchItemsInProject(project: string, term: string, options?: IProjectSearchOptions): Promise<ISearchResult[]>;
	getFullTreeFromProject(projectName: string): Promise<FancyFolder[]>;
	getProjectTodos(project: string, itemRef?: string, includeDone?: boolean, includeAllUsers?: boolean, includeFuture?: boolean): Promise<GetTodosAck>;
	uploadFileToProject(project: string, url: string): Promise<AddFileAck>;
	uploadLocalFileToProject(project: string, axiosLib: unknown, file: unknown, progress: (p: IFileUploadProgress) => void): Promise<AddFileAck>;
	executeInProject(project: string, payload: ExecuteParam): Promise<FolderAnswer>;
	postProjectReport(project: string, item: string, format: string): Promise<CreateReportJobAck>;
	runHookInProject(project: string, itemId: string, hookName: string, body: string): Promise<string>;
	getJobStatus(project: string, jobId: number, options?: unknown): Promise<JobsStatusWithUrl>;
	downloadJobResult(project: string, jobId: number, fileno: number, mode?: string, format?: string, disposition?: string, options?: unknown): Promise<ArrayBuffer>;
	postJobProgressForProject(project: string, jobId: number, progress: number, status?: string): Promise<string>;
	deleteJobForProject(project: string, jobId: number, reason: string): Promise<string>;
	createTodo(project: string, users: string[], type: TodoTypes | string, text: string, itemId: string, fieldId: number | null, atDate: Date): Promise<string>;
	getProjectAudit(project: string, startAt?: number, maxResults?: number, deleteOnly?: boolean, tech?: boolean, auditIdMin?: number, auditIdMax?: number, noReport?: boolean, noImport?: boolean, include?: string, resolveRef?: boolean, itemRef?: string): Promise<TrimAuditList>;
	getProjectSettings(project: string): Promise<GetProjectSettingAck>;
	putProjectSetting(project: string, key: string, value: string): Promise<string>;
}
/**
 * Implemented by Project
 */
export interface ITreeFolderNeeds {
	parseRef(id: string): IItemIdParts;
	getItem(id: string): Promise<Item>;
	putItem(parentFolderId: string, item: Item): Promise<Item>;
	deleteItem(itemId: string, force?: boolean): Promise<string>;
	moveItems(folderId: string, itemIds: string[]): Promise<string>;
}
/**
 * A TreeFolder represents a folder in the Matrix application. It can answer queries about
 * folder and item children. A Folder is also an Item.
 */
export declare class TreeFolder {
	private needs;
	private parent?;
	private id;
	private title;
	private type;
	private folderChildren;
	private itemChildren;
	constructor(needs: ITreeFolderNeeds, folder: FancyFolder, parent?: TreeFolder | undefined);
	isRoot(): boolean;
	getId(): string;
	getTitle(): string;
	getParent(): TreeFolder | null;
	/**
	 * Creates a path string including all ancestor folder titles, separated by "/".
	 * @returns the folder path
	 */
	getPath(): string;
	/**
	 * Return a TreeFolder if the folderId is valid in the project.
	 * @param folderId
	 * @returns null if folderId cannot be found.
	 */
	findFolder(folderId: string): TreeFolder | null;
	/**
	 * Find a TreeFolder with the given name in this folder.
	 * @param folderTitle
	 * @returns A valid TreeFolder object or null if not found.
	 */
	findDirectFolderByTitle(folderTitle: string): TreeFolder | null;
	/**
	 * Save an item with this folder as the parent folder. If the item already exists it will be moved there.
	 * @param item An item
	 * @returns An Item object which corresponds to the newly created or moved Item on the server.
	 */
	saveInFolder(item: Item): Promise<Item>;
	/**
	 * Move the given items into this folder. This method does NOT update the list of folder children,
	 * since server-side information is necessary.
	 * @param itemIds an array of itemIds
	 * @returns the string "Ok" on success
	 */
	moveItemsToThisFolder(itemIds: string[]): Promise<string>;
	/**
	 * Delete a child of this folder.
	 * @param id A valid child id of this folder
	 * @param force If the id points to a non-empty folder, then this must be true to carry out the deletion
	 * @throws Error if the child wasn't found, or if it points to a non-empty folder and {force} is not true
	 * @returns The string "Ok" if successful.
	 */
	deleteChildItemOrFolder(id: string, force?: boolean): Promise<string>;
	/**
	 * TreeFolder is nice/simple to work with, but sometimes you need the
	 * underlying Item. For example, you might want to set a label on the folder.
	 * Item is the necessary type to do that.
	 * @returns An Item which matches this folder
	 */
	getItem(): Promise<Item>;
	/**
	 * Returns information on the folders in the folder. May make a request to
	 * the server if children haven't been loaded yet, otherwise, acts on
	 * cached information (which may be out of date. Call refresh() to update
	 * the folder in that case).
	 * @returns an array of TreeFolder objects.
	 */
	getFolderChildren(): TreeFolder[];
	/**
	 * Returns information on the items in the folder. May make a request to
	 * the server if children haven't been loaded yet, otherwise, acts on
	 * cached information (which may be out of date. Call refresh() to update
	 * the folder in that case).
	 * @returns an array of ITitleAndId objects
	 */
	getItemChildren(): ITitleAndId[];
	/**
	 * Returns both folders and items at this level.
	 * @returns an array of ITitleAndId objects for the folders and items
	 */
	getAllChildren(): ITitleAndId[];
}
export interface IProjectContext {
	getItemConfig(): ItemConfiguration;
	getJsonTools(): IJSONTools;
	getLogger(): ILoggerTools;
	getLabelManager(): ILabelManager;
	getTestManagerConfig(): TestManagerConfiguration;
}
/**
 * The Project class offers methods to manipulate a Matrix Project on a Matrix Instance.
 * It is not meant to be created by the end user, rather the openProject() method is used on
 * a StandaloneMatrixSDK object which represents the Matrix Instance.
 */
export declare class Project {
	private server;
	private name;
	private context;
	private categories;
	constructor(server: IProjectNeeds, name: string, context: IProjectContext);
	/**
	 * Get the root TreeFolder for a Project.
	 * @returns A valid TreeFolder.
	 */
	getProjectTree(): Promise<TreeFolder>;
	/**
	 * Perform a search, returning IDs of Items that match.
	 * @param term - a search term. Consult documentation for valid searches, including
	 *     "mrql" searches.
	 * @returns An array of matching item IDs.
	 */
	searchForIds(term: string): Promise<string[]>;
	/**
	 * Run a server execute command with the given payload
	 * @param payload a valid ExecuteParam object
	 * @returns A FolderAnswer object
	 */
	execute(payload: ExecuteParam): Promise<FolderAnswer>;
	/**
	 * Used to populate the rather complex ExecuteParam type. We need a mapping from clone source
	 * field ids to the output category field ids.
	 * @param inputFolderIds
	 * @param outputCategory
	 * @param reason
	 * @returns A populated ExecuteParam suitable for use with the execute method.
	 */
	createExecuteParamWithDefaults(inputFolderIds: string[], outputCategory: string, reason: string): ExecuteParam;
	/**
	 * Execute a more complex search, where the fields in the results can be limited.
	 * @param term
	 * @param options
	 * @return returns an array of ISearchResult objects.
	 */
	searchRaw(term: string, options?: IProjectSearchOptions): Promise<ISearchResult[]>;
	/**
	 * Perform a search and return items that are initialized according to the provided mask
	 * settings. This allows you to efficiently gather data from the server with only the fields
	 * you need brought down.
	 *
	 * @param term the search term
	 * @param filter by default empty string
	 * @param treeOrder return results in tree order (by default false)
	 * @param mask an optional mask
	 * @returns an array of filled-in Item objects.
	 */
	searchForItems(term: string, filter?: string, treeOrder?: boolean, mask?: ItemsFieldMask): Promise<Item[]>;
	/**
	 * Create an ItemsFieldMask for use with search functions.
	 *
	 * @param options A IFieldMaskOptions object. If not specified, then appropriate defaults are chosen.
	 * @returns an initialized ItemsFieldMask object which can be further customized.
	 */
	constructSearchFieldMask(options?: IFieldMaskOptions): ItemsFieldMask;
	/**
	 * Upload a file given by the url into the project.
	 * @param url
	 * @returns an AddFileAck structure.
	 */
	uploadFile(url: string): Promise<AddFileAck>;
	/**
	 * Upload a file to the server in Node. Not suitable for call in a web browser,
	 * as the necessary libraries (and access to the file system) are not available.
	 *
	 * @param axiosLib A pointer to your local Axios library
	 * @param file Passed through to an Axios request. A fs.ReadStream object is appropriate.
	 * @param progress a callback to be notified of upload progress.
	 * @returns a IFileUploadResult object.
	 */
	uploadLocalFile(axiosLib: unknown, file: unknown, progress: (p: IFileUploadProgress) => void): Promise<AddFileAck>;
	/**
	 * Files uploaded to the server with uploadFile() or uploadLocalFile() are retrieved
	 * with a special Url that depends on the Project. This method computes the url
	 * correctly.
	 * @param fileInfo an AddFileAck object with information about the uploaded file
	 * @returns a Url pointing to the file on the server
	 */
	computeFileUrl(fileInfo: AddFileAck): string;
	/**
	 * Returns information about an item from an id in a given project.
	 * @param itemId A valid item id in the project
	 * @returns The itemId decomposed into parts
	 */
	parseRef(itemId: string): IItemIdParts;
	createItem(category: string): Item;
	createDOC(): DocItem;
	/**
	 * Create a folder. Every folder must contain only items of a particular type.
	 * @param type
	 * @returns a new Folder item of the given type.
	 */
	createFolder(type: string): Item;
	getItem(id: string): Promise<Item>;
	/** Return a DocItem from an id.
	 * @param {id} id The id of the DOC */
	getItemAsDoc(id: string): Promise<DocItem>;
	/**
	 * Save an item into a given folder.
	 * @param parentFolderId
	 * @param item
	 * @returns A fresh copy of the Item from the server
	 */
	putItem(parentFolderId: string, item: Item): Promise<Item>;
	/**
	 * Update an item on the server.
	 * @param item
	 * @returns A fresh copy of the Item from the server.
	 */
	updateItem(item: Item): Promise<Item>;
	/**
	 * Delete an Item from the project. If the Item is a folder with children, then parameter
	 * {force} must be true.
	 * @param itemId A valid item
	 * @param force
	 * @throws Error if the item is a non-empty folder and force was not specified as true.
	 * @returns A promise with the string "Ok" on success.
	 */
	deleteItem(itemId: string, force?: boolean): Promise<string>;
	/**
	 * Move items in the project to a particular folder.
	 * @param folderId a valid folder id within the project
	 * @param itemIds an array of itemIds
	 * @returns the string "Ok" on success
	 */
	moveItems(folderId: string, itemIds: string[]): Promise<string>;
	/**
	 * set a field of an item in the database
	 *
	 * Use: await project.setField("PROC-83", "plain english", "x");
	 *
	 * @param itemId itemId the id of the item like "REQ-1"
	 * @param fieldName name of the field
	 * @param value value of the field
	 * @throws Error in case of invalid itemId or fieldName
	 * @returns Promise to the updated item
	 */
	setField(itemId: string, fieldName: string, value: string): Promise<IItemGet>;
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
	/**
	 * Get the TODOs for a project.
	 * @param itemRef if specified, returns all todos linked to an item, regardless of user
	 * @param includeDone - if true, includes done todos
	 * @param includeAllUsers - if true, includes all todos for all users.
	 * @param includeFuture - false by default. If true, includes future todos.
	 * @returns Information on the todos.
	 */
	getTodos(itemRef?: string, includeDone?: boolean, includeAllUsers?: boolean, includeFuture?: boolean): Promise<GetTodosAck>;
	getCategory(category: string): Category;
	getName(): string;
	getItemConfig(): ItemConfiguration;
	getLabelManager(): ILabelManager;
	getTestConfig(): TestManagerConfiguration;
	/**
	 * Run a hook with the given name on a project item.
	 * @param itemId
	 * @param hookName
	 * @param body
	 * @returns the return value of the hook.
	 */
	runHook(itemId: string, hookName: string, body: string): Promise<string>;
	/**
	 * Some server operations that return files as URLs are long-running jobs. With a
	 * jobId, you can wait on their result while also getting progress updates.
	 * @param jobId
	 * @param progressReporter an optional callback to be notified of the job's progress.
	 * @returns an array of JobFileWithUrl structures
	 */
	waitOnJobCompletion(jobId: number, progressReporter?: (jobId: number, jobDetails: JobsStatusWithUrl) => void): Promise<JobFileWithUrl[]>;
	/**
	 * For implementors of server-side hooks and other services that use the Job API.
	 * @param jobId the jobId on which you are reporting progress
	 * @param progress Progress (0 to 100, 200 to indicate error)
	 * @param status optional status string like "Done" or "Error"
	 * @returns string result
	 */
	postJobProgress(jobId: number, progress: number, status?: string): Promise<string>;
	/**
	 * Admin permission on the server is required to successfully call this.
	 * @param jobId the jobId you wish to cancel
	 * @param reason the reason for cancellation
	 * @returns string result
	 */
	deleteJob(jobId: number, reason: string): Promise<string>;
	/**
	 * Export a DOC to an external file.
	 * @param type Can be one of "pdf", "html", "docx", or "odt"
	 * @param docId The DOC id
	 * @param progressReporter an optional callback with status updates
	 * @returns a pointer to the location on the server where the file can be downloaded
	 */
	generateDocument(type: "pdf" | "html" | "docx" | "odt", docId: string, progressReporter?: (jobId: number, jobDetails: JobsStatusWithUrl) => void): Promise<JobFileWithUrl[]>;
	/**
	 * Download a job result
	 * @param jobId
	 * @param fileno
	 * @param mode
	 * @param format
	 * @param disposition
	 * @param options
	 * @returns An ArrayBuffer
	 */
	downloadJobResult(jobId: number, fileno: number, mode?: string, format?: string, disposition?: string, options?: unknown): Promise<ArrayBuffer>;
	private sleep;
	createTodo(users: string[], type: TodoTypes, text: string, itemId: string, fieldId: number | null, atDate: Date): Promise<string>;
	/**
	 * Retrieve all changes in a project
	 * @param startAt - (optional) start the audit after N records
	 * @param maxResults - (optional) retrieve N results per page
	 * @param deleteOnly - (optional) if true, only returns actions of type delete
	 * @param tech - (optional) if true, returns the underneath changes
	 * @param auditIdMin - (optional) sets a minimum ID for audits as returned by GET calendar
	 * @param auditIdMax - (optional) sets a maximum ID for audits
	 * @param noReport - (optional) if true, avoid reports in the output
	 * @param noImport - (optional) if true, avoid imports in the output
	 * @param include - (optional) a comma-seperated list of actions to include (delete,undelete,add,edit,...)
	 * @param resolveRef - (optional) if true, resolve item IDs into refs
	 * @param itemRef - (optional) restrict the audit to only those mentioning this item
	 * @returns a TrimAuditList structure
	 */
	getAudit(startAt?: number, maxResults?: number, deleteOnly?: boolean, tech?: boolean, auditIdMin?: number, auditIdMax?: number, noReport?: boolean, noImport?: boolean, include?: string, resolveRef?: boolean, itemRef?: string): Promise<TrimAuditList>;
	/**
	 * Return settings for this project.
	 * @returns a GetProjectSettingAck object describing all the project settings
	 */
	getSettings(): Promise<GetProjectSettingAck>;
	/**
	 * Put a project setting.
	 * @param key the key to save the setting under
	 * @param value the value of the setting
	 */
	putSetting(key: string, value: string): Promise<string>;
}
/**
 * Options for creating a field mask for search functions.
 */
export interface IFieldMaskOptions {
	/**
	 * includeFields true by default. If false, no fields will be retrieved from the server.
	 */
	includeFields?: boolean;
	/**
	 * includeLabels true by default. If false, no label information will be retrieved from the server.
	 */
	includeLabels?: boolean;
	/**
	 * includeDownlinks false by default. If false, no information about downlinks will come from the server.
	 */
	includeDownlinks?: boolean;
	/**
	 * includeUplinks false by default. If false, no information about uplinks will come from the server.
	 */
	includeUplinks?: boolean;
}
export interface ICategoryItemOptions {
	filter?: string;
	treeOrder?: boolean;
	mask?: ItemsFieldMask;
}
declare class ItemFieldMask {
	private fieldIds;
	constructor(fieldIds: number[]);
	hasFieldId(fieldId: number): boolean;
	getFieldIds(): number[];
	/**
	 * Combine the other ItemFieldMask with this one.
	 * @param other an ItemFieldMask
	 */
	union(other: ItemFieldMask): void;
	toString(): string;
}
declare class ItemsFieldMask {
	private masks;
	private includeFields;
	private includeLabels;
	private includeDownlinks;
	private includeUplinks;
	constructor(options?: IFieldMaskOptions);
	getIncludeFields(): boolean;
	getIncludeLabels(): boolean;
	getIncludeDownlinks(): boolean;
	getIncludeUplinks(): boolean;
	/**
	 * Add fields to the mask for the given Category. If there is already a field mask for the
	 * Category, its values will be combined with the new information via set union.
	 * @param category
	 * @param fieldIdsOrItemFieldMask either an ItemFieldMask object or an array of Category field ids
	 * @throws Error if getIncludeFields() is false.
	 * @returns this
	 */
	addMask(category: Category, fieldIdsOrItemFieldMask: number[] | ItemFieldMask): ItemsFieldMask;
	/**
	 * Adds fields to the Category mask by name. If the name doesn't exist or if there are more
	 * than one fields with the name, an Error is thrown.
	 * @param category
	 * @param fieldNames
	 * @throws Error if a field name exists more than once in the given Category or not at all.
	 *         Also throws Error if getIncludeFields() is false.
	 * @returns this
	 */
	addMaskByNames(category: Category, fieldNames: string[]): ItemsFieldMask;
	/**
	 * Returns an ItemFieldMask for the given Category if it exists
	 * @param categoryId
	 * @returns null if there is no mask for the given Category.
	 */
	getCategoryMask(categoryId: string): ItemFieldMask | null;
	/**
	 * Suitable to send to the server for a search query.
	 * @returns A comma-seperated string of ids or "*" (which means all fields accepted)
	 */
	getFieldMaskString(): string;
}
/**
 * A Category represents a category within a project. It has various configuration
 * settings. It also has a list of fields for that category.
 */
export declare class Category {
	private category;
	private project;
	private allFieldsFieldMask;
	constructor(category: string, project: Project);
	getProject(): Project;
	getItemConfig(): ItemConfiguration;
	getTestConfig(): TestManagerConfiguration;
	getId(): string;
	getConfig(): ICategoryConfig;
	getFields(): XRFieldTypeAnnotated[];
	/**
	 * Return field ids from the Category which match the given label.
	 * These labels are searched in a case-insensitive way.
	 * @param label
	 * @returns a non-empty array of field ids if the label is present in the Category.
	 */
	getFieldIdFromLabel(label: string): number[];
	isFolderCategory(): boolean;
	/**
	 * An ItemFieldMask allows you to specify which fields out of the Category
	 * fields of an Item should be considered valid.
	 * @param fieldIds If specified, a valid set of field ids for this Category. Otherwise,
	 *        the returned ItemFieldMask expresses that all fields in the Item are to be
	 *        considered valid.
	 * @throws throws an Error if any of the field ids specified in fieldIds do not exist in the Category.
	 * @returns an ItemFieldMask.
	 */
	createFieldMask(fieldIds?: number[]): ItemFieldMask;
	/**
	 * Construct a search mask from chosen options
	 * @param options
	 * @returns an ItemsFieldMask object
	 */
	constructSearchFieldMask(options: IFieldMaskOptions): ItemsFieldMask;
	/**
	 * Get all of the items of this Category.
	 * @param options An optional ICategoryItemOptions describing search options.
	 * @returns An array of Items of this Category, configured according to the options given.
	 */
	getItems(options?: ICategoryItemOptions): Promise<Item[]>;
}
export declare class FieldDescriptions {
	static Field_sourceref: string;
	static Field_markAsTemplate: string;
	static Field_dhf: string;
	static Field_docFilter: string;
	static Field_richtext: string;
	static Field_text: string;
	static Field_section: string;
	static Field_fileManager: string;
	static Field_tasksControl: string;
	static Field_textline: string;
	static Field_user: string;
	static Field_date: string;
	static Field_dropdown: string;
	static Field_links: string;
	static Field_uplinkinfo: string;
	static Field_crosslinks: string;
	static Field_risk2: string;
	static Field_checkbox: string;
	static Field_gateControl: string;
	static Field_colorPicker: string;
	static Field_steplist: string;
	static Field_labels: string;
	static Field_workflow: string;
	static Field_test_steps: string;
	static Field_test_steps_result: string;
	static Field_test_result: string;
	static Field_syncStatus: string;
	static Field_syncSourceInfo: string;
	static Field_report: string;
	static Field_cascadingSelect: string;
	static Field_hyperlink: string;
	static Field_reportId: string;
	static Field_filter_file: string;
	static Field_signature: string;
	static Field_signatureControl: string;
	static Field_signCache: string;
	static Field_publishedItemList: string;
	static Field_publishedFilesList: string;
	static Field_publishedContent: string;
	static Field_publishedTitle: string;
	static Field_docTraining: string;
	static Field_docReview: string;
	static Field_risk: string;
	static Field_htmlForm: string;
	static Field_hidden: string;
	static Field_dummy: string;
	static Field_guid: string;
	static Field_oid: string;
	static Field_versionLive: string;
	static Field_version: string;
	static Field_currentVersion: string;
	static Field_riskFolder: string;
	static Field_reviewControl: string;
	static findById(idToFind: string): IFieldDescription | undefined;
	static appendFieldDescriptions(newFields: IFieldDescription[]): void;
	static get(): IFieldDescription[];
	private static validationFunctions;
	private static descriptions;
	static setValidationFunction(fieldId: string, validator: JsonEditorValidation): void;
}
export declare class SectionDescriptions {
	static section_Checkbox: string;
	static section_Custom: string;
	static section_derivedfrom: string;
	static section_dashboard: string;
	static section_designreviews: string;
	static section_audittrail: string;
	static section_signatures: string;
	static section_responsibilities: string;
	static section_genericTable: string;
	static section_dhf_table: string;
	static section_document_options: string;
	static section_Date: string;
	static section_item_index: string;
	static section_itemlist: string;
	static section_package: string;
	static section_items: string;
	static section_itemtable: string;
	static section_linklist: string;
	static section_figures_tables: string;
	static section_multiselect: string;
	static section_remarks: string;
	static section_richtext: string;
	static section_riskstats: string;
	static section_terms_abbreviations: string;
	static section_table_of_content: string;
	static section_testresults: string;
	static section_textline: string;
	static section_tracematrix: string;
	static section_downtraces: string;
	static section_uptraces: string;
	static section_duedate: string;
	static section_templateapproval: string;
	static section_signaturebox: string;
	static section_CustomSection: string;
	static section_checkbox: string;
	static section_hidden: string;
	/** get all sections name for document*/
	static getAllSections(): string[];
}
export declare class SimpleItemTools implements ISimpleItemTools {
	parseRef(itemRef: string, project: string, matrixBaseUrl: string): IItemIdParts;
	getCreator(item: IItem): string;
	getLastEditor(item: IItem): string;
	refListToDisplayString(inputItems: IReference[] | null, prefix: string, getTitleFunction: any, shorten?: number): string;
	renderLink(itemId: string, itemTitle: string, newWindow?: boolean): any;
	updateReferences(oldReferences: IReference[], newReferences: IReference[], fromId: string | null, toId: string | null): IReferenceChange[];
	clone(item: IItemGet, copyLabels: boolean): IItemPut;
	sort(a: string, b: string, project: string, matrixBaseUrl: string): number;
}
export interface IReviewConfig {
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
	autoLock?: boolean;
	autoComment?: boolean;
}
export interface ICreateDoc {
	template: string;
	section: string;
	pasteTo: string;
	hide?: string[];
}
export interface IReviewAction {
	buttonName: string;
	users: string[];
}
export interface IMailAction extends IReviewAction {
	mailSubject: string;
}
export interface ILockAction extends IReviewAction {
	label: string;
}
export interface IReviewStatusUpdate extends IReviewAction {
	passedLabel?: string;
	failedLabel?: string;
	todoLabel?: string;
}
export interface IReviewConfigTask {
	buttonName: string;
	users: string[];
	taskPluginId: number;
	taskIssueType: string;
	taskProject: string;
	taskDescription?: string;
}
export interface ITableReviewData {
	reviewtable: IStringMap[];
}
export declare class ReviewControlColumns {
	static COL_COMMENT_LOG: string;
	static COL_ITEM: string;
	static COL_VERSION: string;
	static COL_ANNOTATIONS: string;
}
export interface ISimpleSessionControl {
	getCsrfCookie(): string;
	setComment(comment: string): void;
	getComment(): string;
	setProject(project: string): void;
	getProject(): string;
	/**
	 * In the web app environment, where this api is used in a context with
	 * existing global variables, the default project context should be
	 * provided. It provides "live" access to globals of the current project.
	 * @returns A valid IProjectContext or null if none is available.
	 */
	getDefaultProjectContext(): IProjectContext | null;
}
/**
 * StandaloneMatrixSDK is a connection to a Matrix Instance. It offers services to interact
 * with the Instance. A primary purpose beyond authenticating on the server is to provide access
 * to Project objects through openProject() or openCurrentProjectFromSession().
 */
export declare class StandaloneMatrixSDK implements IProjectNeeds {
	protected config: Configuration;
	protected session: ISimpleSessionControl;
	protected matrixBaseUrl: string;
	protected logger: ILoggerTools;
	protected json: IJSONTools;
	protected simpleItemTools: ISimpleItemTools;
	protected instance: DefaultApi;
	private ItemConfig?;
	protected labelManager: ILabelManager;
	protected baseRestUrl: string;
	debug: boolean;
	private projectMap;
	private fetchWrapper;
	constructor(config: Configuration, session: ISimpleSessionControl, initialItemConfig: ItemConfiguration, matrixBaseUrl: string, logger: ILoggerTools, json: IJSONTools, simpleItemTools: ISimpleItemTools);
	/**
	 * Returns the base URL of the server, and the REST api endpoint.
	 * @returns a tuple with [baseUrl, baseRestUrl]
	 */
	getUrlInfo(): [
		string,
		string
	];
	getFetchLog(): string[];
	createNewItemConfig(): ItemConfiguration;
	getLabelManager(): ILabelManager;
	getItemConfig(): ItemConfiguration;
	setItemConfig(newItemConfig: ItemConfiguration): void;
	private getHeadersForPost;
	private initializeProject;
	private log;
	setComment(comment: string): void;
	getComment(): string;
	setProject(project: string): Promise<void>;
	getProject(): string;
	getProjects(): Promise<string[]>;
	/**
	 * Return server settings (also called customer settings).
	 * @returns A GetSettingAck object describing all the server settings
	 */
	getServerSettings(): Promise<GetSettingAck>;
	/**
	 * Put a server setting (also called a customer setting).
	 * @param key the key to save the setting under
	 * @param value the value of the setting
	 */
	putServerSetting(key: string, value: string): Promise<string>;
	/**
	 * Return settings for a given project.
	 * @param project The project name
	 * @returns a GetProjectSettingAck object describing all the project settings
	 */
	getProjectSettings(project: string): Promise<GetProjectSettingAck>;
	/**
	 * Put a project setting.
	 * @param project the project
	 * @param key the key to save the setting under
	 * @param value the value of the setting
	 */
	putProjectSetting(project: string, key: string, value: string): Promise<string>;
	protected parseRef(itemId: string): IItemIdParts;
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
	parseRefForProject(project: string, itemRef: string): IItemIdParts;
	getItemFromProject(project: string, id: string): Promise<IItemGet>;
	/**
	 * get the initial tree structure from a project. Project must be set first.
	 */
	getTree(): Promise<ITitleAndId[]>;
	getFullTreeFromProject(projectName: string): Promise<FancyFolder[]>;
	getTreeFromProject(projectName: string): Promise<ITitleAndId[]>;
	/**
	 * get a folder from the database, filling in it's children.
	 * @param folderId  the id of the folder like "F-<type>-<id>"
	 * @throws error if folderId is invalid
	 * @returns Promise to ITitleAndId array
	 */
	getFolderChildren(folderId: string): Promise<ITitleAndId[]>;
	getFolderChildrenFromProject(projectName: string, folderId: string): Promise<ITitleAndId[]>;
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
	 * @returns search results
	 */
	search(term: string, includeFields?: boolean, includeLinks?: boolean, includeLabels?: boolean, filter?: string): Promise<ISearchResult[]>;
	/**
	 * Move items to a particular folder.
	 * @param project a valid project on the instance
	 * @param folderId a valid folder id within the project
	 * @param itemIds an array of itemIds
	 * @returns the string "Ok" on success
	 */
	moveItemsInProject(project: string, folderId: string, itemIds: string[]): Promise<string>;
	/**
	 * Run a hook in a project
	 * @param project
	 * @param itemId
	 * @param hookName
	 * @param body
	 */
	runHookInProject(project: string, itemId: string, hookName: string, body: string): Promise<string>;
	/**
	 * Execute a search in the given project, returning matching item ids.
	 * @param project
	 * @param term
	 * @returns an array of item ids.
	 */
	searchIdsInProject(project: string, term: string): Promise<string[]>;
	searchItemsInProject(project: string, term: string, options?: IProjectSearchOptions): Promise<ISearchResult[]>;
	uploadProjectFile(url: string): Promise<AddFileAck>;
	uploadFileToProject(project: string, url: string): Promise<AddFileAck>;
	private uploadFileServerAsync;
	uploadLocalFileToProject(project: string, axiosLib: unknown, file: IFileParam, progress: (p: IFileUploadProgress) => void): Promise<AddFileAck>;
	executeInProject(project: string, payload: ExecuteParam): Promise<FolderAnswer>;
	execute(payload: ExecuteParam): Promise<FolderAnswer>;
	/**
	 * The session object contains a string that represents the "current project."
	 * This convenience method calls openProject() with that string.
	 * @returns A valid Project object, or null if the session has no project.
	 */
	openCurrentProjectFromSession(): Promise<Project | null>;
	/**
	 * Retrieve or create a Project object for the given project name.  The method is
	 * asynchronous because it may require a trip to the server to retrieve project
	 * configuration.
	 * @param project a valid string.
	 * @returns A valid Project object, or null if the project name is undefined.
	 */
	openProject(project: string): Promise<Project | null>;
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
	getField(itemId: string, fieldName: string): Promise<unknown>;
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
	updateItemInProject(project: string, item: IItemPut, currentVersion?: number): Promise<string>;
	createItemInProject(project: string, parentFolderId: string, item: IItemPut): Promise<string>;
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
	setFieldsInProject(project: string, projectItemConfig: ItemConfiguration, itemId: string, data: ISetField[]): Promise<IItemGet>;
	addDownLink(fromId: string, toId: string): Promise<string>;
	deleteItem(itemId: string, force?: boolean): Promise<string>;
	deleteItemInProject(project: string, itemId: string, force?: boolean): Promise<string>;
	private appDeleteItem;
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
	createItem(folder: string, title: string, data?: ISetField[], labels?: [
	], downlinks?: [
	], uplinks?: [
	]): Promise<string>;
	createItemFromIItemPut(project: string, folder: string, item: IItemPut): Promise<string>;
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
	copyItem(fromProject: string, fromItem: string, toProject: string, toFolder: string, copyLabels: boolean): Promise<CopyItemAck>;
	/**
	 * Get the TODOs for a project.
	 * @param project project name
	 * @param itemRef if specified, returns all todos linked to an item, regardless of user
	 * @param includeDone - if true, includes done todos
	 * @param includeAllUsers - if true, includes all todos for all users.
	 * @param includeFuture - false by default. If true, includes future todos.
	 * @returns Information on the todos.
	 */
	getProjectTodos(project: string, itemRef?: string, includeDone?: boolean, includeAllUsers?: boolean, includeFuture?: boolean): Promise<GetTodosAck>;
	postProjectReport(project: string, item: string, format: string): Promise<CreateReportJobAck>;
	getJobStatus(project: string, jobId: number, options?: unknown): Promise<JobsStatusWithUrl>;
	/**
	 * Actually download a job file
	 * @param project
	 * @param jobId
	 * @param fileno
	 * @param mode
	 * @param format
	 * @param disposition
	 * @param options
	 * @returns An ArrayBuffer
	 */
	downloadJobResult(project: string, jobId: number, fileno: number, mode?: string, format?: string, disposition?: string, options?: unknown): Promise<ArrayBuffer>;
	postJobProgressForProject(project: string, jobId: number, progress: number, status?: string): Promise<string>;
	deleteJobForProject(project: string, jobId: number, reason: string): Promise<string>;
	createTodo(project: string, users: string[], type: TodoTypes, text: string, itemId: string, fieldId: number | null, atDate: Date): Promise<string>;
	/**
	 * Retrieve all changes in a project
	 * @param project - project name
	 * @param startAt - (optional) start the audit after N records
	 * @param maxResults - (optional) retrieve N results per page
	 * @param deleteOnly - (optional) if true, only returns actions of type delete
	 * @param tech - (optional) if true, returns the underneath changes
	 * @param auditIdMin - (optional) sets a minimum ID for audits as returned by GET calendar
	 * @param auditIdMax - (optional) sets a maximum ID for audits
	 * @param noReport - (optional) if true, avoid reports in the output
	 * @param noImport - (optional) if true, avoid imports in the output
	 * @param include - (optional) a comma-seperated list of actions to include (delete,undelete,add,edit,...)
	 * @param resolveRef - (optional) if true, resolve item IDs into refs
	 * @param itemRef - (optional) restrict the audit to only those mentioning this item
	 * @returns a TrimAuditList structure
	 */
	getProjectAudit(project: string, startAt?: number, maxResults?: number, deleteOnly?: boolean, tech?: boolean, auditIdMin?: number, auditIdMax?: number, noReport?: boolean, noImport?: boolean, include?: string, resolveRef?: boolean, itemRef?: string): Promise<TrimAuditList>;
	rootGet(adminUI?: number, output?: string, options?: unknown): Promise<ListProjectAndSettings>;
	validateSdkVersion(): Promise<boolean>;
}
export interface IItemSelectDialogOptions {
	linkTypes: ILinkType[];
	getSelectedItems: () => Promise<IReference[]>;
	selectionChange: (newSelection: IReference[]) => void;
	crossProjectInit?: Function;
	crossProject?: boolean;
	crossProjectProject?: string;
	crossProjectFilter?: string;
	crossProjectFilterStrict?: boolean;
	allowedProjects?: XRProjectType[];
	allowedCategories?: string[];
	selectMode?: SelectMode;
	selectOptions?: JQuery;
	allowAutoDownlinkSelection?: boolean;
	dialogTitle?: string;
	focusOn?: string;
	height?: number;
	autoScroll?: boolean;
}
export interface IItemSelectButtonOptions extends IItemSelectDialogOptions {
	buttonName?: string;
	smallbutton?: boolean;
	isRiskControl?: boolean;
	control: JQuery;
	tinybutton?: boolean;
}
declare class ItemSelectionTools {
	constructor();
	showDialog(options: IItemSelectDialogOptions): void;
	renderButtons(options: IItemSelectButtonOptions): void;
	private showSelectDialog;
	private toggleSelect;
	showCrossProjectDialog(options: IItemSelectDialogOptions): void;
	private removeHidden;
}
export interface IReferenceToolsOptions {
	item: IItem;
	canEdit: boolean;
	callback?: (item: IItem) => void;
}
export declare class ReferenceTools {
	showReferenceDialog(options: IReferenceToolsOptions): void;
}
declare class MatrixSDK {
	protected config: Configuration;
	protected baseRestUrl: string;
	protected matrixBaseUrl: string;
	initialize(): void;
	protected standalone: StandaloneMatrixSDK;
	constructor(config: Configuration, baseRestUrl: string, matrixBaseUrl: string);
	setComment(comment: string): void;
	getComment(): string;
	setProject(project: string): Promise<void>;
	getProject(): string;
	getProjects(): Promise<string[]>;
	getUrlInfo(): [
		string,
		string
	];
	/**
	 * The session object contains a string that represents the "current project."
	 * This convenience method calls openProject() with that string.
	 * @returns A valid Project object.
	 */
	openCurrentProjectFromSession(): Promise<Project | null>;
	/**
	 * Retrieve or create a Project object for the given project name.  The method is
	 * asynchronous because it may require a trip to the server to retrieve project
	 * configuration.
	 * @param project
	 * @returns A valid Project object
	 */
	openProject(project: string): Promise<Project | null>;
	/**
	 * Return server settings (also called customer settings).
	 * @returns A GetSettingAck object describing all the server settings
	 */
	getServerSettings(): Promise<GetSettingAck>;
	/**
	 * Put a server setting (also called a customer setting).
	 * @param key the key to save the setting under
	 * @param value the value of the setting
	 */
	putServerSetting(key: string, value: string): Promise<string>;
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
	 * @returns An array of ISearchResult results.
	 */
	search(term: string, includeFields?: boolean, includeLinks?: boolean, includeLabels?: boolean, filter?: string): Promise<ISearchResult[]>;
	uploadProjectFile(url: string): Promise<AddFileAck>;
	execute(payload: ExecuteParam): Promise<FolderAnswer>;
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
	getField(itemId: string, fieldName: string): Promise<unknown>;
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
	createItem(folder: string, title: string, data?: ISetField[], labels?: [
	], downlinks?: [
	], uplinks?: [
	]): Promise<string>;
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
	copyItem(fromProject: string, fromItem: string, toProject: string, toFolder: string, copyLabels: boolean): Promise<CopyItemAck>;
	/**
	 * Retrieve all changes in a project
	 * @param project - project name
	 * @param startAt - (optional) start the audit after N records
	 * @param maxResults - (optional) retrieve N results per page
	 * @param deleteOnly - (optional) if true, only returns actions of type delete
	 * @param tech - (optional) if true, returns the underneath changes
	 * @param auditIdMin - (optional) sets a minimum ID for audits as returned by GET calendar
	 * @param auditIdMax - (optional) sets a maximum ID for audits
	 * @param noReport - (optional) if true, avoid reports in the output
	 * @param noImport - (optional) if true, avoid imports in the output
	 * @param include - (optional) a comma-seperated list of actions to include (delete,undelete,add,edit,...)
	 * @param resolveRef - (optional) if true, resolve item IDs into refs
	 * @param itemRef - (optional) restrict the audit to only those mentioning this item
	 * @returns a TrimAuditList structure
	 */
	getProjectAudit(project: string, startAt?: number, maxResults?: number, deleteOnly?: boolean, tech?: boolean, auditIdMin?: number, auditIdMax?: number, noReport?: boolean, noImport?: boolean, include?: string, resolveRef?: boolean, itemRef?: string): Promise<TrimAuditList>;
	getRestProject(restQuery: string): JQueryDeferred<IRestResult>;
	getRestServer(restQuery: string): JQueryDeferred<IRestResult>;
	isQMSProject(project: string): boolean;
	getUser(): string;
	getCustomerSettingJSON(s: string, defaultValue?: any): unknown;
	serverConfig(): XRGetProject_StartupInfo_ListProjectAndSettings;
	getImgFromProject(pref: string): string;
	getProjectList(readOrWriteOnly: boolean): XRProjectType[];
	getTestManager(): TestManager;
	static getLabelDefinitions(cats: string[]): ILabel[];
	createNewItemConfig(): ItemConfiguration;
	getItemConfig(): ItemConfiguration;
	setItemConfig(newItemConfig: ItemConfiguration): void;
}
/**
 * This file defines all the data structures which might be shared between UI components and printing
 *
 */
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
/** this allows to store parameters for printing
 *
 * This parameters can be overwritten in the layout and are used by the custom section printing
 */
export interface IPluginPrintParamsBase extends IPrintFieldParams {
	class: string;
}
/** Description of the current plugin. Each feature can be activated/deactivated using the configuration object */
export interface IPluginConfig<SERVERSETTINGS extends IServerSettingsBase, PROJECTSETTINGS extends IProjectSettingsBase> extends IPluginConfigForDashboard {
	/** Field. This will add a new field type that can be used for data rendering in the main app */
	field: IPluginFeatureField;
	/** Menu tool item. This will add a new menu item in the tools menu  in the main app.*/
	menuToolItem: IPluginFeatureBase;
	/** Menu tool item. This will add a new dashboard in the main app.*/
	dashboard: IPluginFeatureDashboard;
	/** Customer setting page parameter. This will add a page in the server config in the adminConfig */
	customerSettingsPage: IPluginFeature<SERVERSETTINGS>;
	/** project setting page parameter. This will add a page per project in the adminConfig */
	projectSettingsPage: IPluginFeature<PROJECTSETTINGS>;
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
}
/**
 * Interface for the tool menu item
 */
export interface ITool {
	/**
	 * function called when the menu item is clicked
	 * @param itemId
	 */
	menuClicked(itemId: string): void;
	/**
	 * functino to decide whether the menu item should be shown or not based on the currently displayed item
	 * @param itemId
	 */
	showMenu(itemId: string): boolean;
}
/**
 * This is the interface that plugin that use our boilerplate template must implement.
 * It is used to define the plugin capabilities and to configure the plugin.
 * The plugin is instantiated once.
 * @param SERVERSETTINGS  The type of the server settings
 * @param PROJECTSETTINGS The type of the project settings
 * @param FIELDHANDLER The fieldhandle that will be responsible for the field data validation
 * @param FIELDVALUETYPE The type of the field value. This is the type of the data that will be stored in the database
 * @param DASHBOARDPARAMS The type of the dashboard parameters that will be used to render the dashboard.
 */
export interface IExternalPlugin<SERVERSETTINGS extends IServerSettingsBase, PROJECTSETTINGS extends IProjectSettingsBase, FIELDHANDLER extends IPluginFieldHandler<FIELDVALUETYPE>, FIELDVALUETYPE extends IPluginFieldValueBase, DASHBOARDPARAMS extends IDashboardParametersBase> extends IPluginCoreForDashboard<DASHBOARDPARAMS> {
	enableToolMenu(ul: JQuery, _hook: number): unknown;
	onInitItem(_item: IItem): unknown;
	onInitProject(project: string): unknown;
	PLUGIN_VERSION: string;
	PLUGIN_NAME: string;
	/**
	 * Returns a page to be added to the dashboard in the main app.
	 */
	getDashboardAsync(): Promise<IDashboardPage<DASHBOARDPARAMS>>;
	/**
	 * Returns a page to be added to the customer settings page in the adminConfig.
	 */
	getProjectSettingsPageAsync(): Promise<IPluginSettingPage<PROJECTSETTINGS>>;
	/**
	 * Returns a page to be added to the server settings page in the adminConfig.
	 */
	getServerSettingsPageAsync(): Promise<IPluginSettingPage<SERVERSETTINGS>>;
	/**
	 * Returns a control object for a given field type. This is used to render the field in the main app.
	 * @param ctrlObj
	 */
	getControlAsync(ctrlObj: JQuery): Promise<ControlCoreBase<FIELDHANDLER, FIELDVALUETYPE>>;
	/**
	 * Returns a tool to be added to the tools menu in the main app.
	 */
	getToolAsync(): Promise<ITool>;
	/**
	 * Returns a list of TinyMCE menu items to be added to the editor.
	 * @param editor
	 */
	getTinyMenuItems?(editor: unknown): ITinyMenu[];
	/**
	 * Returns a list of menu items to be added to the user profile menu in the main app.
	 */
	getUserMenuItems?(): IPluginMenuAction[];
	/**
	 * Returns a list of menu items to be added to the user profile menu of the config page.
	 */
	getConfigUserMenuItems?(): IPluginMenuAction[];
	/**
	 * Returns a list of menu items to be added to the project list.
	 */
	getProjectMenuItems?(): IPluginMenuAction[];
	/**
	 * Returns a list of custom searches to be added to the search drowpdown.
	 */
	getCustomSearches?(): IPluginSearch[];
	/**
	 * Returns a list of menu items to be added to the QMS user profile menu in the liveqms.
	 */
	getQMSUserMenuItems?(): IPluginMenuAction[];
	/**
	 * return the plugin configuration.
	 */
	getConfig(): IPluginConfig<SERVERSETTINGS, PROJECTSETTINGS>;
	/**
	 * Return a list of tiles to be added to the analytics dashboard
	 */
	getTiles?(): ITile[];
	/**
	 * This returns a list of links to dashboards for the analytics homepage
	 * */
	getDashboardLinksForAnalyticsAsync?: () => Promise<IDashboardLinkForAnalytics[]>;
}
export interface ITile {
	getTitle: () => string;
	/**
	 * Render the tile in the container
	 */
	render: (container: HTMLElement) => Promise<void>;
	/**
	 * Refresh the tile
	 */
	refresh: () => void;
	/**
	 * Can the tile be rendered? */
	canBeRenderedAsync: () => Promise<boolean>;
	/**
	 * Return the order of the tile among the other tiles
	 */
	getOrder: () => number;
}
export interface IDashboardLinkForAnalytics {
	/** The page id of the dashboard */
	pageId: string;
	/** The title of the dashboard */
	title: string;
	/** Optional order of the dashboard */
	order?: number;
}
export interface IDashboardParameters extends IDashboardParametersBase {
}
export interface IPlugin {
	initItem?: (item: IItem, jui: JQuery) => void;
	initServerSettings?: (serverSettings: XRGetProject_StartupInfo_ListProjectAndSettings) => void;
	updateMenu?: (ul: JQuery, hook: number) => void;
	/**
	 * Returns true if the plugin offers a control that can display fields of type {fieldType}.
	 */
	supportsControl?: (fieldType: string) => boolean;
	createControl?: (ctrlObj: JQuery, settings: IBaseControlOptions) => void;
	initProject?: (project: string) => void;
	isDefault?: boolean;
	filterProject?: (db: IDB[]) => void;
	updateSearchPanel?: () => void;
	updateItemPanel?: () => void;
	updateItem?: (item: IItem) => void;
	getProjectPagesAsync?: () => Promise<IProjectPageParam[]>;
	preSaveHookAsync?: (isItem: boolean, type: string, controls: IControlDefinition[]) => Promise<{}>;
	renderActionButtons?: (options: IItemControlOptions, body: JQuery, controls: IControlDefinition[]) => boolean;
	updateTree?: () => void;
	getFieldConfigOptions?: () => IFieldDescription[];
	addFieldSettings?: (configApp: any, project: string, pageId: string, fieldType: string, fieldParams: IFieldParameter, ui: JQuery, paramChanged: () => void, canBePublished?: boolean) => void;
	getProjectSettingPagesAsync?: () => Promise<ISettingPage[]>;
	getCustomerSettingPagesAsync?: () => Promise<ISettingPage[]>;
	getPluginName?: () => string;
	getPluginVersion?: () => string;
	categorySetting?: (key: string) => string;
	editCategorySetting?: (key: string, category: string) => void;
	helpUrl?: string;
	initPrintingAsync?: () => Promise<void>;
	/**
	 * Returns a list of TinyMCE menu items to be added to the editor.
	 * @param editor
	 */
	getTinyMenuItems?(editor: any): ITinyMenu[];
	/**
	 * Returns a list of menu items to be added to the user profile menu in the main app.
	 */
	getUserMenuItems?(): IPluginMenuAction[];
	/**
	 * Returns a list of menu items to be added to the user profile menu of the config page.
	 */
	getConfigUserMenuItems?(): IPluginMenuAction[];
	/**
	 * Returns a list of menu items to be added to the project list.
	 */
	getProjectMenuItems?(): IPluginMenuAction[];
	/**
	 * Returns a list of custom searches to be added to the search drowpdown.
	 */
	getCustomSearches?(): IPluginSearch[];
	/**
	 * Returns a list of menu items to be added to the QMS user profile menu in the liveqms.
	 */
	getQMSUserMenuItems?(): IPluginMenuAction[];
	/**
	 *  Notify the plugin to render itself in the element passed.
	 */
	getTiles?: () => ITile[];
}
export interface IPluginHooks {
	shares: number;
}
export interface ISettingPage {
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
export interface IProjectPageParam {
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
export interface IPluginCoreForDashboard<DASHBOARDPARAMS extends IDashboardParametersBase> {
	getDashboardAsync(): Promise<IDashboardPage<DASHBOARDPARAMS>>;
	getConfig(): IPluginConfigForDashboard;
}
export interface IPluginConfigForDashboard {
	dashboard: IPluginFeatureDashboard;
}
export interface IDashboardPage<T extends IDashboardParametersBase> {
	renderProjectPage(): void;
	renderProjectPageWithParams?(params: T, interactive: boolean): Promise<JQuery>;
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
/** interface for the value to be stored by custom field */
export interface IPluginFieldValueBase {
	/**
	 *  html to be rendered to support the field printing outside of custom section
	 */
	html: string;
	/**
	 * value to be stored and used by the control
	 */
	value: unknown;
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
export interface ITinySubMenuItem {
	type: string;
	text: string;
	onAction: () => void;
}
export interface ITinyMenuItem {
	text: string;
	getSubmenuItems: () => ITinySubMenuItem[];
}
export interface ITinyMenu {
	id: string;
	menuItem: ITinyMenuItem;
}
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
}
export interface IPluginPanelOptions {
	type: string;
	control: JQuery;
	controlState: number;
}
export interface IPluginSearch {
	menu: string;
	search: (selectItems: (selectedItems: string[]) => void) => Promise<void>;
}
export interface IPluginMenuAction {
	icon: string;
	title: string;
	action: () => Promise<void>;
}
declare class PluginManager {
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
	initPrinting(): Promise<void>;
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
	supportsControl(fieldType: string): boolean;
	createControl(ctrlObj: JQuery, settings: IBaseControlOptions): void;
	initProject(project: string): void;
	filterProject(db: IDB[]): void;
	updateSearchPanel(): void;
	updateItemPanel(): void;
	updateItem(updates: IItem): void;
	updateTree(): void;
	getTinyMenus(editor: any): ITinyMenu[];
	getCustomSearches(): IPluginSearch[];
	getUserMenuItems(): IPluginMenuAction[];
	getQMSUserMenuItems(): IPluginMenuAction[];
	getConfigUserMenuItems(): IPluginMenuAction[];
	getProjectMenuItems(): IPluginMenuAction[];
	getProjectPages(): Promise<IProjectPageParam[]>;
	/**
	 * Return a list of plugins that can be displayed in the dashboard analytics page.
	 * */
	getAllTiles(): ITile[];
	getAllDashboardLinksForAnalyticsAsync(): Promise<IDashboardLinkForAnalytics[]>;
	supportsControlPage(controlType: string): boolean;
	createControlPage(options: IPluginPanelOptions, toggleFilters?: (toggle: boolean) => void): void;
	destroyActiveControlPage(): void;
	callPreSaveHook(isItem: boolean, type: string, controls: IControlDefinition[]): JQueryDeferred<{}>;
	renderActionButtons(options: IItemControlOptions, body: JQuery, controls: IControlDefinition[]): boolean;
	/******************** admin function  */
	getPlugins(): IPlugin[];
}
/*** config
 *
 */
export interface ITasksConfiguration {
	config: ITaskConfiguration[];
}
export type FolderItem = Folder | IWltItemWithLinks;
export type Folder = {
	name: string;
	id: string;
	children: FolderItem[];
};
export interface IPFExternalField {
	/**  Jira field id something like custom_... or assignee or ...*/
	extFieldId: string;
	/** converter which specified how to convert matrix field into jira field */
	converter: string;
	/** mapping for drop down from Matrix to Jira drop downs  */
	ddMapping?: IStringMap;
	[key: string]: any;
}
export interface ICatFieldMapping {
	/** map from category to the fields in the category. The matrixFieldName is the name of the field in Matrix  */
	[key: string]: {
		[matrixFieldName: string]: IPFExternalField;
	};
}
export interface ITaskConfiguration {
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
export type ITaskTaskDescription = "hide" | "empty" | "text";
export interface IOne2OneMapping {
	projectId: string;
	taskTypeId: string;
	showId?: boolean;
	statusOverwrites: IOne2OneMappingStatus[];
}
export interface IOne2OneMappingStatus extends ITaskRenderInfo {
	externalStatusName: string;
	text: string;
}
export interface ITaskRenderInfo {
	text: string;
	color?: string;
	background?: string;
	strikethrough?: boolean;
}
export interface ITaskSearch {
	name: string;
	expression: string;
}
export interface ITaksProjects {
	projectId: string;
	projectName: string;
	taskTypes: ITaskType[];
}
export interface ITaskType {
	taskTypeId: string;
	taskTypeName: string;
	iconUrl?: string;
	iconClass?: string;
}
export interface ISmartTask {
	regex: string;
	issueProjectId: string;
	issueId: string;
	title: string;
	url?: string;
}
export interface ISmartUrls {
	regex: string;
	issueProjectId: string;
	issueId: string;
	title: string;
	priority?: number;
}
/*** wlt interface
 *
 */
export interface IWltItemWithLinks {
	matrixItem: IWltMatrixItem;
	links: IExternalItem[];
}
export interface IWltMatrixItem {
	itemId: number;
	projectId: number;
	title: string;
	matrixItem: string;
	project: string;
}
export interface IExternalItem {
	externalItemId: string;
	externalItemTitle: string;
	externalItemUrl: string;
	externalDescription: string;
	externalLinkCreationDate?: string;
	externalDone: boolean;
	externalUser?: string;
	externalProject?: string;
	externalType?: string;
	externalMeta?: string;
	plugin: number;
	more?: IMoreInfo[];
}
export interface IMoreInfo {
	key: string;
	value: string;
}
export interface ITaskPart {
	icon: JQuery;
	id: JQuery;
	ticketTitle: JQuery;
	externalUser: JQuery;
	actions: JQuery;
}
export declare class Tasks implements IPlugin {
	private item;
	private jui;
	static tasksConfiguration: ITaskConfiguration[];
	isDefault: boolean;
	constructor();
	initItem(_item: IItem, _jui: JQuery): void;
	reset(): void;
	initServerSettings(serverSettings: XRGetProject_StartupInfo_ListProjectAndSettings): void;
	updateMenu(ul: JQuery, hook: number): void;
	supportsControl(fieldType: string): boolean;
	createControl(ctrl: JQuery, options: IBaseControlOptions): void;
	initProject(): void;
	getProjectPagesAsync(): Promise<IProjectPageParam[]>;
	preSaveHookAsync(isItem: boolean, type: string, controls: IControlDefinition[]): Promise<{}>;
	isPluginEnabled(pluginId: number): boolean;
	evaluateTaskIds(comment: string): string[];
	static externalItemFromUrl(url: string): IExternalItem;
	private addCommentToAllLinkedIssues;
	/** this creates a new item and jira and sets the define fields with values coming from Matrix */
	private pushIssueDlg;
	static postPushIssue(pluginId: number, itemId: string, title: string, description: string, projectId: string, taskTypeId: string): Promise<IExternalItem[]>;
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
	static getConfig(pluginId: number): ITaskConfiguration | null;
	private renderProjectPage;
	private updateUI;
	private static getTaskDefinition;
	static renderTasks(itemId: string, linkedTasks: IExternalItem[], root: JQuery, canEdit: boolean, fullWidth: boolean): void;
	private static escapeHtml;
	static renderTaskParts(itemId: string, task: IExternalItem, unlink: boolean, fullWidth: boolean, tinyLink?: boolean): ITaskPart;
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
export interface ICategoryConfig {
	fieldList: XRFieldTypeAnnotated[];
	label: string;
	downLinksRequired: string[];
	downLinksOptional: string[];
	enable: string[];
}
export interface XRFieldTypeAnnotated extends XRFieldType {
	parameterJson?: XRFieldTypeAnnotatedParamJson;
}
export interface XRFieldTypeAnnotatedParamJson extends IFieldParameter {
	linkTypes?: XRFieldTypeAnnotatedParamJsonLinkType[];
}
export interface XRFieldTypeAnnotatedParamJsonLinkType {
	required: boolean;
	type: string;
}
export interface IFieldsOfType {
	category: string;
	field: XRFieldTypeAnnotated;
}
export interface IDropDownInfo {
	id: string;
	label: string;
	value: IDropDownConfig;
}
export declare class ItemConfiguration {
	private configuration;
	private settings;
	private settingsString;
	private settingsJSON;
	private users;
	private userList;
	private userGroups;
	private timewarpDate;
	private logger;
	private json;
	constructor(logger: ILoggerTools, json: IJSONTools);
	isConfigured(): boolean;
	addUsers(userPermission: XRUserPermissionType[], groupPermission: XRGroupPermissionType[]): void;
	getUserInfo(login: string): XRUserPermissionType;
	getCombinedName(user: XRUserPermissionType | XRUserType): string;
	getFullName(login: string): string;
	groupIdToName(groupId: number): string;
	hasGroupInfo(group: string): boolean;
	hasUserInfo(login: string): boolean;
	getUserIds(): string[];
	getEmail(user: string): string;
	activateTimewarp(date: string): void;
	getTimeWarp(): string;
	isAfterTimeWarp(date: string): boolean | "";
	hasWriteAccess(user: string): boolean;
	private getPermission;
	getUserNames(sorted?: boolean): XRUserPermissionType[];
	getUserGroups(): XRGroupPermissionType[];
	/**
	 * getValidUserOptions returns an array of option values that describe
	 * the users and groups available as values for a user field in the
	 * database (fields of type {@link FieldDescriptions.Field_user}).
	 *
	 * @param showUsers - pass true to include users
	 * @param showGroups - pass true to include groups
	 * @param preSelectedUsers - if present, the list of users will be limited
	 *     to this subset and the full user list will not be consulted to
	 *     construct the return value.
	 * @param possiblyDeletedUserGroupNames - if present, a comma-separated
	 *     list of user and group names. The returned options will include
	 *     these values, and mark deleted user and groups as disabled.
	 * @returns An array of {@link IDropdownOptions} configured according to
	 *     the input parameters and the users and groups of the current project.
	 */
	getValidUserOptions(showUsers: boolean, showGroups: boolean, preSelectedUsers?: XRUserPermissionType[], possiblyDeletedUserGroupNames?: string): IDropdownOption[];
	addGroupMember(gid: number, user: string): void;
	removeGroupMember(gid: number, user: string): void;
	addSettings(s: XRGetProject_ProjectInfo_ProjectInfo | XRGetProject_ProjectSettingAll_GetSettingAck): void;
	getSettings(): XRSettingType[];
	getSetting(s: string): string;
	getSettingJSON(s: string, def?: {}): {};
	getDropDowns(dropdownId?: string): IDropDownInfo[];
	getTasksConfig(): ITasksConfiguration;
	getDHFConfig(): IDHFConfig;
	getExtrasConfig(): IExtras;
	getLabelsConfig(): ILabelsConfig;
	getIncludeConfig(): IImportConfig;
	getQMSConfig(): IQMSConfig;
	getRiskConfig(): IRiskConfig;
	getCategoryGroupConfig(): ICategoryGroups;
	getACLConfig(): IACL;
	getTraceConfig(): ITraceConfig;
	getNavigationBarConfig(): INavigationBar;
	getContextPagesConfig(): IContextPageConfig;
	getMailConfig(): IMailConfig;
	getSearchConfig(): ISearchConfig;
	getLabelLockConfig(): ILabelLockConfig;
	getTestConfig(): ITestConfig;
	setSettingJSON(key: string, valueJSON: {}): void;
	getSmartText(): ISmartTextConfig;
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
	getFields(category: string): XRFieldTypeAnnotated[] | null;
	getFieldByName(category: string, name: string): XRFieldTypeAnnotated;
	getFieldById(category: string, fieldId: number): XRFieldTypeAnnotated | null;
	getFieldConfig(fieldId: number): XRFieldTypeAnnotatedParamJson;
	getFieldName(fieldId: number): string;
	getFieldType(category: string, fieldId: number): string;
	getLinkTypes(category: string, down: boolean, required: boolean): string[];
	getLinkInfo(category: string, down: boolean, required: boolean, groupByRule: boolean): ILinkInfo[];
	getMitigations(): IStringStringArrayMap;
	/** return cleanup rules, if there's a project setting that wins, if there's no rules or it's disabled it returns -1 */
	getCleanupRules(): ICleanup;
}
export interface IGetProjectResultDateInfo {
	timeformat: string;
	dateformat: string;
	timeZone: string;
	customerDateformat: string;
	customerTimeformat: string;
	customerTimezone: string;
	dateIso8601: string;
	timeUserFormat: string;
}
export interface ICompanyUISettings {
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
	/** bigger scale = sharper drawio images in PDF, default is 3 */
	drawIOScale?: boolean;
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
export interface ICompanyTiny {
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
	/** Obsolete */
	textpattern_patterns?: any[];
	/** define auto replacement in tiny editor - see https://www.tiny.cloud/docs/tinymce/6/content-behavior-options/#text_patterns */
	text_patterns?: any[];
}
export interface ICompanyTinyMenuMap {
	[key: string]: ICompanyTinyMenu;
}
export interface ICompanyTinyMenu {
	/** display name of menu */
	title: string;
	/** items to show */
	items: string;
}
declare class MatrixSession {
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
	pushMessages: PushMessages;
	private customParams;
	private branches;
	quiet(): boolean;
	constructor();
	getCsrfCookie(): string;
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
	getMailSettings(): IMailConfig;
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
	isCompose(): boolean;
	isUnique(): boolean;
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
	getImgFromProject(pRef: string): string;
	private createProjectSelectLink;
	amIAllowedUser(limitedTo: string[]): boolean;
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
	getHelpButton(): string;
	private showUserMenu;
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
export interface ITableDataRow {
	[key: string]: number | string;
}
export interface ITableFunction {
	(table: ITableDataRow[], parameterJson: ITableParams): string;
}
export interface ITableFunctions {
	[key: string]: ITableFunction;
}
declare class TableMath {
	protected functions: ITableFunctions;
	/** allow to add new functions:  */
	registerFunction(functionId: string, execute: ITableFunction): void;
	/** executes function on a table */
	execute(functionId: string, table: ITableDataRow[], parameterJson: ITableParams): string;
}
export interface IFieldMapping {
	fromId: number;
	toId: number;
}
export declare class TestManager {
	private testConfig;
	private lookup;
	isDefault: boolean;
	constructor();
	getConfiguration(): TestManagerConfiguration;
	UpdateFolderMenu(ul: JQuery, item: IItem): void;
	InitializeProject(): void;
	PreSaveHook(isItem: boolean, item: IItem, type: string, controls: IControlDefinition[]): Promise<void>;
	RenderActionButtons(options: IItemControlOptions, body: JQuery): boolean;
	isXTC(type: string): boolean;
	isTC(type: string): boolean;
	getXTCType(): string;
	getCloneSources(): string[];
	private redoFailed;
	private ConvertAll;
	getTestStepsConfig(category: string): ITestConfigTablesColumns;
	getTestStepsResultsConfig(): ITestStepsResultsConfig;
	getTestRunResultOptions(): ITestStepsResultOption[];
	getTestRunResultPlaceholder(value: string): string;
	getSearchExpression(resultType: string, notEqual: boolean): string;
	private prepareMapping;
	getMappingItems(): IFieldMapping[];
	private getResultInfo;
	private allTestSteps;
	private oneTestStep;
	private computeOverallResult;
	private createHumanValues;
}
declare enum ColumnEditor {
	none = "none",
	number = "number",
	textline = "textline",
	select = "select",
	commentlog = "commentlog",
	colorPicker = "colorPicker",
	category = "category",
	readonly = "readonly",
	selectIcon = "selectIcon",
	text = "text",
	date_today = "date_today",
	date = "date",
	today = "today",
	current_version = "current_version",
	versionletter = "versionletter",
	signaturemeaning = "signaturemeaning",
	user = "user",
	user_self = "user_self",
	self = "self",
	group = "group",
	revision = "revision",
	result = "result",
	design = "design",
	uprules = "uprules",
	downrules = "downrules",
	ecocapa = "ecocapa",
	eco = "eco",
	uid = "uid",
	rules = "rules"
}
export interface ITableControlOptionsColumn {
	name: string;
	field: string;
	editor: ColumnEditor;
	options?: {
		[key: string]: string;
	} | IDropdownOption[];
	relativeWidth?: number;
	headerCssClass?: string;
	cssClass?: string;
}
export interface ITableControlBaseParams {
	columns?: ITableControlOptionsColumn[];
	initialContent?: any[];
}
export declare class BaseTableFieldHandler implements IFieldHandler {
	protected data: any[];
	protected tableConfig: ITableControlBaseParams;
	constructor(configIn: ITableControlBaseParams);
	getFieldType(): string;
	protected getColumnByField(fieldId: string): ITableControlOptionsColumn | undefined;
	columnNumberToFieldId(columnNumber: number): string;
	validate(): void;
	initData(serializedFieldData: string | undefined): void;
	getData(): string | undefined;
	setData(value: string, doValidation?: boolean): void;
	setDataAsArray(dataIn: any[], fixData?: boolean): void;
	getRowCount(): number;
	deleteRow(rowNumber: number): void;
	insertRow(rowNumber: number, columnData: Array<any>): void;
	clear(): void;
	getColumnCount(): number;
	/**
	 * Set data for a particular cell in the table given by a row number and
	 * a column name.
	 * @param row the zero-based row number.
	 * @param columnId the column name.
	 * @param data
	 */
	setColumnData(row: number, columnId: string, data: any): void;
	getColumnData(row: number, columnId: string): any;
	getRowData(row: number): Array<any>;
}
export declare class BaseValidatedTableFieldHandler extends BaseTableFieldHandler {
	constructor(configIn: ITableControlBaseParams);
	validate(): void;
	setDataAsArray(dataIn: any[], fixData?: boolean): void;
}
export declare class CheckboxFieldHandler implements IFieldHandler {
	private data;
	private config;
	constructor(configIn: XRFieldTypeAnnotatedParamJson);
	getFieldType(): string;
	initData(serializedFieldData: string | undefined): void;
	getData(): string | undefined;
	setData(value: string, doValidation?: boolean): void;
	getValue(): boolean | undefined;
	setValue(value: boolean): void;
}
export declare class SteplistFieldHandler extends BaseValidatedTableFieldHandler {
	constructor(configIn: ITableControlBaseParams);
}
export declare class TextlineFieldHandler implements IFieldHandler {
	private data;
	private config;
	private fieldType;
	constructor(fieldType: string, configIn: XRFieldTypeAnnotatedParamJson);
	getFieldType(): string;
	initData(serializedFieldData: string | undefined): void;
	getData(): string | undefined;
	setData(value: string, doValidation?: boolean): void;
	getText(): string;
	setText(str: string): void;
}
export declare class TestStepsFieldHandler extends BaseValidatedTableFieldHandler {
	static UpdateFieldConfig(options: XRFieldTypeAnnotatedParamJson, itemType: string, testConfig: TestManagerConfiguration): void;
	constructor(options: ITableControlBaseParams);
	getFieldType(): string;
}
export declare class TestStepsResultFieldHandler extends BaseValidatedTableFieldHandler {
	static UpdateFieldConfig(options: XRFieldTypeAnnotatedParamJson, testConfig: TestManagerConfiguration): void;
	constructor(options: ITableControlBaseParams);
	getFieldType(): string;
	setDataAsArray(dataIn: any[], fixData?: boolean): void;
	validate(): void;
}
export declare class TestResultFieldHandler implements IFieldHandler {
	private rawData;
	private human;
	private params;
	static UpdateFieldConfig(params: IBaseDropdownFieldParams, testConfig: TestManagerConfiguration): void;
	constructor(params: IBaseDropdownFieldParams, initialValue?: string);
	getFieldType(): string;
	getData(): string | undefined;
	setData(value: string, doValidation?: boolean): void;
	initData(serializedFieldData: string | undefined): void;
	getValues(filterOnOptions?: boolean): string[];
	getHuman(): string;
}
export interface IUserFieldHandlerParams extends Omit<IBaseDropdownFieldParams, "splitHuman"> {
}
export declare class UserFieldHandler implements IFieldHandler {
	private rawData;
	private params;
	constructor(params: IUserFieldHandlerParams, initialValue?: string);
	static UpdateFieldConfig(params: ITestFieldParam, fieldValue: string, itemConfig: ItemConfiguration): void;
	getData(): string | undefined;
	setData(value: string): void;
	getFieldType(): string;
	initData(serializedFieldData: string): void;
	getValues(filterOnOptions?: boolean): string[];
	private getMaxItems;
	setValues(values: string[]): void;
	getHuman(): string;
}
export declare class DateFieldHandler implements IFieldHandler {
	private date;
	private config;
	constructor(config: IAnyMap);
	getData(): string | undefined;
	getFieldType(): string;
	initData(serializedFieldData: string | undefined): void;
	setData(value: string, doValidation?: boolean): void;
	static getDateFromString(dateStr: string): Date | null;
	setDate(date: Date): void;
	getDate(): Date | undefined;
}
export declare class CrosslinksFieldHandler extends ItemSelectionFieldHandler {
	static UpdateFieldConfig(params: XRFieldTypeAnnotatedParamJson): void;
	constructor(configIn: XRFieldTypeAnnotatedParamJson);
	/**
	 * Add an item to the list at the given position
	 * @param position
	 * @param item
	 * @returns the field handler
	 * @throws Error in case a projectShortLabel doesn't exist in the item.
	 */
	insertItem(position: number, item: IReference): CrosslinksFieldHandler;
	/**
	 * Append the given item to the end of the list of items.
	 * @param item
	 * @returns the field handler.
	 * @throws Error in case a projectShort label doesn't exist in the item.
	 */
	appendItem(item: IReference): CrosslinksFieldHandler;
}
export declare class HyperlinkFieldHandler implements IFieldHandler {
	private data;
	private config;
	constructor(configIn: XRFieldTypeAnnotatedParamJson);
	getFieldType(): string;
	initData(serializedFieldData: string | undefined): void;
	getData(): string | undefined;
	setData(value: string, doValidation?: boolean): void;
}
export interface IFromToSelection {
	from: IReference[];
	to: IReference[];
}
export declare class ItemSelectionFieldHandlerFromTo implements IFieldHandler {
	protected config: XRFieldTypeAnnotatedParamJson;
	private fieldType;
	private selectedItems;
	private defaultSelection;
	constructor(configIn: XRFieldTypeAnnotatedParamJson, fieldTypeIn?: string);
	getData(): string | undefined;
	setData(value: string, doValidation?: boolean): void;
	getFieldType(): string;
	initData(serializedFieldData: string | undefined): void;
	getSelectedItems(): IFromToSelection;
	setSelectedItems(data: IFromToSelection): void;
	setFromSelectiont(newSelection: IReference[]): void;
	setToSelectiont(newSelection: IReference[]): void;
	isDefaultSelection(): boolean;
	setDefaultSelection(map: IReference[]): void;
	setConfig(config: IAnyMap): void;
}
export declare class NotificationsBL {
	static NoticationCache: NotificationsCache;
	/**
	 * Returns the message of the notification. either the message is plain text or some formatted json object
	 * @param todo
	 */
	static getMessage(todo: XRTodo): any;
	/**
	 * Returns the field of the notification. either the message is plain text or some formatted json object: the anchor is a place in the UI
	 * @param todo
	 */
	static getField(todo: XRTodo): any;
	/**
	 *  either the message is plain text or some formatted json object: the reply is a reference to another todo - for which this is a replyTo
	 * @param todo
	 */
	static getReply(todo: XRTodo): any;
	/**
	 * Create a notification for a list of users on a specific item in a project. The notification will be due to a specific date
	 * @param users
	 * @param project
	 * @param item
	 * @param text
	 * @param type
	 * @param atDate
	 */
	static createNotification(users: string[], project: string, item: string, text: string, type: string, atDate: Date): Promise<XRTodo[]>;
	/**
	 * Remove a notification by its id
	 * @param project
	 * @param todoId
	 * @param deleteThem
	 */
	static deleteNotificationId(project: string, todoId: number, deleteThem: boolean): Promise<void>;
	/**
	 * Remove a notification
	 * @param notification Notif to remove
	 */
	static deleteNotification(notification: XRTodo): Promise<void>;
	/**
	 * Return all notifications (for all projects)
	 */
	static getAllNotifications(): Promise<XRGetTodosAck>;
	/**
	 * Return all notifications for a specific project. The notifications are divided into two groups: for now and for later
	 * @param project
	 */
	static getGetNotificationsNowAndFuture(project: string): Promise<{
		todosForLater: XRTodo[];
		todosForNow: XRTodo[];
	}>;
	/**
	 * Return all notifications for a specific project and a specific item
	 * @param project
	 * @param currentItemId
	 */
	static getAllNotificationForItem(project: string, currentItemId: string): Promise<XRGetTodosAck>;
}
export interface IBaseGateOptions {
	/** define different reviews/approvals which need to be made for gate to pass */
	lines?: IGateLineBase[];
}
export interface IGateLineBase {
	/** a unique id for the line */
	id: string;
	/** define which users can approve */
	users: string[];
}
export interface IGateStatus {
	passed: boolean;
	failed: boolean;
	lines?: IGateStatusLine[];
	search: string;
}
export interface IGateStatusLine {
	id: string;
	passed: boolean;
	failed: boolean;
	user: string;
	date: string;
	dateUser: string;
	comment: string;
}
export declare class GateFieldHandler implements IFieldHandler {
	private config;
	private currentValue;
	constructor(config: IBaseGateOptions);
	getData(): string | undefined;
	setData(value: string, doValidation?: boolean): void;
	getFieldType(): string;
	initData(serializedFieldData: string | undefined): void;
	private defautValue;
	parseFieldValue(stored: string): IGateStatus;
	updateOverallStatus(): void;
	private updateOverallStatusInternal;
	getGateValue(): IGateStatus | undefined;
	setGateValue(gateValue: IGateStatus): void;
}
export interface IControlDefinition {
	name?: string;
	control?: JQuery;
	fieldId?: number;
	isDhfType?: boolean;
	/**
	 * fieldType is set if this control supports displaying a particular kind of field.
	 * See FieldDescriptions for a list of many of the field types.
	 */
	fieldType?: string;
}
export interface IGenericMap {
	[key: string]: any;
}
export interface IAnyMap {
	[key: string]: any;
}
export interface IStringMap {
	[key: string]: string;
}
export interface IStringNumberMap {
	[key: string]: number;
}
export interface IStringStringArrayMap {
	[key: string]: string[];
}
export interface IStringJQueryMap {
	[key: string]: JQuery;
}
export interface IJsonSetting {
	id: string;
	value: any;
}
export interface IRestParam extends Object {
	td?: number;
	reason?: string;
	filter?: string;
	[key: string]: any;
}
export type IRestResult = {} | string;
declare class GlobalMatrix {
	verbose: boolean;
	ItemConfig: ItemConfiguration;
	PopulateProjects: Function;
	mobileApp: {
		Login: Function;
		ShowLoginScreen: Function;
		ShowMobileUI: Function;
	};
	jiraPlugin: any;
	Admin: any;
	doc: any;
	ITEM_DOES_NOT_EXIST: string;
	matrixRestUrl: string;
	matrixBaseUrl: string;
	matrixWfgw: string;
	matrixExpress: boolean;
	matrixProduct: string;
	matrixUniqueSerial: string;
	mxOauth: string;
	mxOauthLoginUrl: string;
	serverStorage: IDataStorage;
	projectStorage: IDataStorage;
	wfgwConnection: RestConnector;
	globalShiftDown: boolean;
	globalCtrlDown: boolean;
	jsonValidator: JsonValidator;
	historyFilter: string;
	EmbeddedReport: any;
	constructor();
	installLegacyAdaptor(): void;
}
export interface IReference {
	projectShortLabel?: string;
	to: string;
	title: string;
	modDate?: string;
	isIndirect?: boolean;
}
export interface IItemIdParts {
	id: string;
	version: number;
	type: string;
	isFolder: boolean;
	url: string;
	link: string;
	linkv: string;
	number: number;
}
export interface IReferenceChange {
	action: string;
	fromId: string;
	toId: string;
}
export interface IItem {
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
export interface IItemGet extends IItem {
	labels?: string[];
	crossLinks?: XRCrossProjectLink[];
}
export interface IItemPut extends IItem {
	labels?: string;
	onlyThoseFields?: number;
	onlyThoseLabels?: number;
}
export interface IItemHistory {
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
export interface IDataStorage {
	setItem: (itemKey: string, itemVal: string, sanitize?: boolean) => void;
	getItem: (itemKey: string, dontSanitize?: boolean) => string;
	getItemDefault: (itemKey: string, defaultValue: string) => string;
}
export declare enum ControlState {
	FormEdit = 0,//this is a embedded form which allows the user to modify the content
	FormView = 1,//this is read only version with (some) read only tools enabled (e.g. history)
	DialogCreate = 2,//this allows the user to modify the content, usually to create new elements. No tools
	HistoryView = 3,//is a read only version, e.g. used for the history where smart text and smart link is not resolved
	Tooltip = 4,// most things will not shown as tooltip...
	Print = 5,// for printing ...
	Report = 6,// special to render report into page
	DialogEdit = 7,// between FormEdit and DialogCreate to edit an item in popup
	Review = 8
}
export declare enum LineType {
	textline = "textline",
	id = "id",
	uppercase = "uppercase",
	number = "number",
	select = "select",
	table = "table",
	json = "json",
	color = "color",
	id_ = "id_",
	richtext = "richtext",
	readonly = "readonly",
	boolean = "boolean",
	multiselect = "multiselect",
	folderselect = "folderselect",
	userAndGroupSelect = "userAndGroupSelect"
}
export interface ILineEditorLine {
	id?: string;
	key?: number;
	help: string;
	explanation?: string;
	value: string;
	type: LineType;
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
declare class LineEditorExt {
	constructor();
	showDialog(title: string, height: number, input: ILineEditorLine[], onOk: (update: ILineEditorLine[]) => boolean, width?: number, showUserAndGroupsSelectWithDialog?: (container: JQuery, showUsers: boolean, showGroups: boolean, help: string, empty: string, selected: string[], dialogTitle: string, onSelect: (selection: string[]) => void) => void): JQueryDeferred<any>;
	static mapToKeys(results: ILineEditorLine[]): ILineEditorLine[];
	private setEnabled;
	private getValue;
	private isEnabled;
}
export declare abstract class BaseWidget implements IWidgetPlugin {
	abstract _root: JQuery | undefined;
	abstract id: string;
	abstract defaultParameters(): IWidgetParameters;
	abstract displayedWidget: IDisplayedWidget | undefined;
	abstract getBoxConfigurator(): ILineEditorLine[];
	abstract help: string;
	abstract render(root: JQuery, arg0: IDisplayedWidget): void;
	abstract renderOn: widgetRenderEvent | undefined;
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
export interface IPublishInfo {
	target: string;
	SOPLabelGroupType: string;
	ProcReviewLabelGroupType: string;
	WiReviewLabelGroupType: string;
	publisher: string;
}
export interface IPublished {
	item: string;
	version: number;
	wis: string[];
	sop: string;
}
export interface IToPublish {
	itemInfo: ISearchResult;
	approved: boolean;
	lastPublishedVersion: number;
	wis: string[];
	sop: string;
	rolesAndUsers: string[];
}
export interface IToPublishMap {
	[key: string]: IToPublish;
}
export interface IPublicationGroup {
	groupInfo: IPublicationCategory;
	label: string;
	groupItems: string[];
	approved: boolean;
	needsPublication: boolean;
}
export interface IDocTitle {
	id: string;
	title: string;
}
export interface IPublicationHistory {
	history: IPublicationHistoryItem[];
}
export interface IPublicationHistoryItem {
	item: string;
	date: string;
	comment: string;
}
export interface INewPublication {
	item: string;
	version: number;
	wis: string[];
	sop: string;
}
export interface ClientMatrixSdk {
	plugins: PluginManager;
	globalMatrix: GlobalMatrix;
	matrixSession: MatrixSession;
	app: IConfigApp | IApp;
	ml: IMatrix;
	notificationSetting: string;
	defaultNotificationConfig: INotificationConfig;
	pluginHooks: IPluginHooks;
	MR1: MR1Impl;
	matrixApplicationUI: Application;
	matrixsdk: MatrixSDK;
	tableMath: TableMath;
	RiskCalculator: RiskCalculator;
	RiskControlImpl: RiskControlImpl;
	ItemSelectionTools: typeof ItemSelectionTools;
	ReferenceTools: typeof ReferenceTools;
	ConfigPage: typeof ConfigPage;
	PluginCore: typeof PluginCore;
	PrintProcessor: typeof PrintProcessor;
	ControlCore: typeof ControlCore;
	UIToolsConstants: typeof UIToolsConstants;
	LineEditor: typeof LineEditor;
	printProcessorRegistry: PrintProcessorRegistry;
}
export declare function getSdkInstance(): ClientMatrixSdk;
export declare function registerPlugin(plugin: PluginCore): void;

export {};
