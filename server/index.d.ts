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
type XRGetProject_ProjectInfo_ProjectInfo = XRProjectInfo;
export type XRGetProject_CategoryList_GetProjectStructAck = XRGetProjectStructAck;
export type XRGetProject_ProjectSettingAll_GetSettingAck = XRGetSettingAck;
export type XRGetProject_Todos_GetTodosAck = XRGetTodosAck;
export type XRGetProject_Needle_TrimNeedle = XRTrimNeedle;
interface XRListProjectAndSettings {
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
interface XRGetProjectStructAck {
	categoryList: XRCategoryExtendedListType;
	label: string;
	shortLabel: string;
	acl: string;
	aclExplanations: string;
}
interface XRGetSettingAck {
	settingList: XRSettingType[];
}
export interface XRGetTodosAck {
	todos: XRTodo[];
	todoCounts: XRTodoCount[];
}
export interface XRTrimNeedle {
	startAt: number;
	maxResults: number;
	totalResults: number;
	searchId: string;
	needles: XRTrimNeedleItem[];
}
interface XRGetDateAck {
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
interface XRLabelHistory {
	entries: XRLabelEntry[];
}
interface XRCrossProjectLink {
	upItem: XRCrossProjectLink$OneItem;
	downItem: XRCrossProjectLink$OneItem;
	relation: string;
	creationDate: string;
}
interface XRSettingType {
	value: string;
	key: string;
	secret: boolean;
}
interface XRMatrixLicense {
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
interface XRUserType {
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
interface XRMainAndBranch {
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
interface XRProjectType {
	id: number;
	label: string;
	shortLabel: string;
	projectLogo: string;
	qmsProject: boolean;
	accessType: string;
	uniqueIds: boolean;
}
interface XRUserPermissionType {
	id: number;
	login: string;
	email: string;
	permission: number;
	firstName: string;
	lastName: string;
}
interface XRGroupPermissionType {
	groupName: string;
	permission: number;
	groupId: number;
	membership: XRUserTypeSimple[];
}
interface XRCategoryExtendedListType {
	categoryExtended: XRCategoryExtendedType[];
}
interface XRCategoryAndSettingListType {
	settingList: XRSettingType[];
	categoryId: number;
	categoryShort: string;
}
interface XRPluginSetting {
	pluginId: number;
	pluginLongName: string;
	pluginShortName: string;
	settings: XRSettingAndValue[];
	computedSettings: XRSettingAndValue[];
	capabilities: XRPluginCapabilities;
}
interface XRCategoryType {
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
interface XRTrimLink {
	upLinkList: XRTrimLink[];
	downLinkList: XRTrimLink[];
	itemRef: string;
	title: string;
	modDate: string;
	modDateUserFormat: string;
}
interface XRCategoryAndRoot {
	category: string;
	rootFolder: string;
}
interface XRCrossProjectLink {
	upItem: XRCrossProjectLink$OneItem;
	downItem: XRCrossProjectLink$OneItem;
	relation: string;
	creationDate: string;
}
interface XRLabelEntry {
	itemRef: string;
	labels: XRLabelChange[];
}
interface XRCrossProjectLink$OneItem {
	itemId: number;
	version: number;
	projectShort: string;
	itemRefWithVersion: string;
}
interface XRLogger {
	ROOT_LOGGER_NAME: string;
}
interface XRTokenType {
	userId: number;
	tokenId: number;
	purpose: string;
	reason: string;
	value: string;
	validTo: string;
	validToUserFormat: string;
}
interface XRTodoAction {
	text: string;
	todoType: string;
}
interface XRUserTypeSimple {
	userId: number;
	login: string;
	email: string;
	firstName: string;
	lastName: string;
}
interface XRCategoryExtendedType {
	category: XRCategoryType;
	fieldList: XRFieldListType;
	enable: string[];
}
interface XRSettingAndValue {
	setting: string;
	value: string;
	encrypted: boolean;
}
interface XRPluginCapabilities {
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
interface XRFieldValType {
	id: number;
	value: string;
	hide: number;
	restricted: number;
	fieldName: string;
	fieldType: string;
}
interface XRLabelChange {
	label: string;
	set: XRLabelChangeDetail[];
	reset: XRLabelChangeDetail[];
}
interface XRFieldListType {
	field: XRFieldType[];
}
interface XRLabelChangeDetail {
	version: number;
	dateIso: string;
	dateUser: string;
}
interface XRFieldType {
	id: number;
	order: number;
	fieldType: string;
	parameter: string;
	label: string;
}
type JsonEditorValidation = (json: unknown) => Promise<string | null>;
interface IPrintFunctionParams {
}
interface IPrintFunctionParamsOverwrites {
	debug: number;
	[key: string]: IPrintFunctionParams;
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
declare enum EnumItemPublish {
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
	/**  if set to true, the user can add up / down traces to the item even if the item is locked*/
	allowTraces?: boolean;
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
type TableCellEditor = ColumnEditor.text | ColumnEditor.none | ColumnEditor.textline | ColumnEditor.design | ColumnEditor.uprules | ColumnEditor.downrules | ColumnEditor.rules | ColumnEditor.result | ColumnEditor.user | ColumnEditor.versionletter | ColumnEditor.date | ColumnEditor.select;
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
interface IFieldCapabilities {
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
interface IFieldDescription {
	id: string;
	label: string;
	class: string;
	help: string;
	capabilities: IFieldCapabilities;
}
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
interface IImportConfig {
	/** includes keep same id */
	includes: IImportConfigDetails;
	/** copies are editable new copies */
	copies: IImportConfigDetails;
}
interface IImportConfigDetails {
	/** includes can be locked by specifying a lock label */
	lockLabel: string;
	/** there can be a list of users who can import (if there's nobody in there, or no list is defined: everybody can) */
	importMasters?: string[];
}
interface IFieldHandler {
	/** Returns the type of field this handler is for. */
	getFieldType(): string;
	/**
	 * Initializes the field handler with the raw string data, or undefined if there is
	 * not yet any representation in the db.
	 */
	initData(serializedFieldData: string | undefined): any;
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
	setData(value: string, doValidation?: boolean): any;
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
export declare class EmptyFieldHandler implements IFieldHandler {
	private fieldType;
	private config;
	constructor(fieldTypeIn: string, configIn: XRFieldTypeAnnotatedParamJson);
	getFieldType(): string;
	initData(serializedFieldData: string | undefined): void;
	getData(): string | undefined;
	setData(value: string, doValidation?: boolean): void;
}
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
	hasTitle(): Promise<boolean>;
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
export declare enum SelectMode {
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
interface INavigationBar {
	disableTabs: boolean;
	tabs: INavigationBarTab[];
}
interface INavigationBarTab {
	name: string;
	icon: string;
	mode: TabMode;
	other: string[];
}
declare enum TabMode {
	ShowAsDefault = 1,
	HideAsDefault = 2
}
export interface IItemChangeEvent {
	caller: any;
	view: ItemControl;
	before: IItem;
	after: IItem;
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
interface IPlugin {
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
}
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
interface ITinySubMenuItem {
	type: string;
	text: string;
	onAction: () => void;
}
interface ITinyMenuItem {
	text: string;
	getSubmenuItems: () => ITinySubMenuItem[];
}
interface ITinyMenu {
	id: string;
	menuItem: ITinyMenuItem;
}
interface IPluginSearch {
	menu: string;
	search: (selectItems: (string: any) => void) => Promise<void>;
}
interface IPluginMenuAction {
	icon: string;
	title: string;
	action: () => Promise<void>;
}
interface IDocFieldHandler extends IFieldHandler {
	dhfFieldConfig: IAnyMap;
	setDHFConfig(config: IAnyMap): void;
	getDefaultConfig(): any;
	getXmlValue(): string;
	getFieldName(): string;
	setFieldName(value: string): void;
	addSignatures(signatures: string[], includeAll?: boolean): void;
}
interface IDHFSectionOptions {
	globalOptions?: boolean;
	show_section_title?: string;
	automation?: string;
	page_break?: string;
	landscape?: boolean;
	sub_section?: string;
}
interface IDHFControlDefinitionValue {
	fieldValue?: string;
	fieldValueXML?: string;
	name?: string;
	type?: string;
	ctrlConfig?: IDHFSectionOptions;
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
export interface IWltItemWithLinks {
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
export interface IExternalItem {
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
	preSaveHookAsync(isItem: boolean, type: string, controls: IControlDefinition[]): Promise<unknown>;
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
interface ITestFieldParam extends XRFieldTypeAnnotatedParamJson {
	fieldMeaning: string;
}
interface ITestStepsResultOption {
	id: string;
	label: string;
}
interface ITestStepsResultsConfig {
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
interface IFieldMapping {
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
interface IBaseDropdownFieldParams {
	splitHuman?: boolean;
	maxItems?: number;
	create?: boolean;
	options?: IDropdownOption[];
	optionSetting?: string;
	initialContent?: string;
}
export declare class DropdownFieldHandler implements IFieldHandler {
	static UpdateFieldConfig(options: XRFieldTypeAnnotatedParamJson, itemConfig: ItemConfiguration): void;
	private rawData;
	private human;
	protected params: IBaseDropdownFieldParams;
	getData(): string | undefined;
	setData(value: string, doValidation?: boolean): void;
	constructor(params: IBaseDropdownFieldParams, initialValue?: string);
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
export declare class RichtextFieldHandler implements IFieldHandler {
	private data;
	private config;
	constructor(configIn: XRFieldTypeAnnotatedParamJson);
	getFieldType(): string;
	initData(serializedFieldData: string | undefined): void;
	getData(): string | undefined;
	setData(value: string, doValidation?: boolean): void;
	getHtml(): string;
	setHtml(str: string): RichtextFieldHandler;
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
type GetTitleFunction = (itemId: string) => string;
interface ISimpleItemTools {
	parseRef(itemRef: string, project: string, matrixBaseUrl: string): IItemIdParts;
	getCreator(item: IItem): string;
	getLastEditor(item: IItem): string;
	refListToDisplayString(inputItems: IReference[] | null, prefix: string, getTitleFunction: GetTitleFunction, shorten?: number): string;
	renderLink(itemId: string, itemTitle: string, newWindow?: boolean): any;
	updateReferences(oldReferences: IReference[], newReferences: IReference[], fromId: string | null, toId: string | null): IReferenceChange[];
	clone(item: IItemGet, copyLabels: boolean): IItemPut;
	sort(a: string, b: string, project: string, matrixBaseUrl: string): any;
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
	escapeJson(code: string): string;
	unEscapeJson(code: string): string;
}
interface IChangedLabels {
	changed: boolean;
	added: string[];
	removed: string[];
	delta: string;
}
interface ILabelManager {
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
export interface ILoggerTools {
	log(id: string, msg: string): any;
	debug(message: string): void;
	info(message: string): void;
	warning(message: string): void;
	error(message: string): void;
	getLog(): string;
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
interface ITableControlOptionsColumn {
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
interface ITableControlBaseParams {
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
export declare class GenericFieldHandler implements IFieldHandler {
	protected fieldType: string;
	protected data: string;
	private config;
	constructor(fieldTypeIn: string, configIn: XRFieldTypeAnnotatedParamJson);
	getFieldType(): string;
	initData(serializedFieldData: string | undefined): void;
	getData(): string | undefined;
	setData(value: string, doValidation?: boolean): void;
}
interface IDHFControlDefinition extends IControlDefinition {
	dhfValue?: IDHFControlDefinitionValue;
	configTouched?: boolean;
}
export declare class DHFFieldHandler extends GenericFieldHandler {
	private itemConfig;
	private fieldConfig;
	innerDataHandler: IDocFieldHandler;
	constructor(itemConfig: ItemConfiguration, fieldConfig: IDHFControlDefinition);
	getData(): string | undefined;
	initData(fieldValue: string | undefined): void;
	setInnerFieldHandler(docFieldHandler: IDocFieldHandler): void;
}
export declare class SteplistFieldHandler extends BaseValidatedTableFieldHandler {
	constructor(configIn: ITableControlBaseParams);
}
export declare class TextlineFieldHandler implements IFieldHandler {
	private data;
	private config;
	constructor(configIn: XRFieldTypeAnnotatedParamJson);
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
export declare class UserFieldHandler implements IFieldHandler {
	static UpdateFieldConfig(params: ITestFieldParam, fieldValue: string, itemConfig: ItemConfiguration): void;
	private rawData;
	private human;
	private params;
	getData(): string | undefined;
	setData(value: string, doValidation?: boolean): void;
	constructor(params: IBaseDropdownFieldParams, initialValue?: string);
	getFieldType(): string;
	initData(serializedFieldData: string | undefined): void;
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
	static getDateFromString(dateStr: string): Date;
	setDate(date: Date): void;
	getDate(): Date | undefined;
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
interface IFromToSelection {
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
interface INotificationsChanges {
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
	getTotalNotificationsProject(project: string): XRTodoCount;
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
interface IBaseGateOptions {
	/** define different reviews/approvals which need to be made for gate to pass */
	lines: IGateLineBase[];
}
interface IGateLineBase {
	/** a unique id for the line */
	id: string;
	/** define which users can approve */
	users: string[];
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
export declare class GateFieldHandler implements IFieldHandler {
	private config;
	private allPassed;
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
	getGateValue(): IGateStatus;
	setGateValue(gateValue: IGateStatus): void;
}
interface IControlDefinition {
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
export interface IAnyMap {
	[key: string]: any;
}
export interface IStringMap {
	[key: string]: string;
}
export interface IStringNumberMap {
	[key: string]: number;
}
interface IStringStringArrayMap {
	[key: string]: string[];
}
export type IRestResult = {} | string;
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
interface IReferenceChange {
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
	FormEdit = 0,
	FormView = 1,
	DialogCreate = 2,
	HistoryView = 3,
	Tooltip = 4,
	Print = 5,
	Report = 6,
	DialogEdit = 7,
	Review = 8
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
interface IDBParent {
	parent: string;
	position: number;
	item: IItem;
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
interface ISearchResultField {
	id: number;
	value: string;
}
interface ILinkInfo {
	category: string | string[];
	reason: string;
}
export interface ISetField {
	fieldName: string;
	value: string;
}
export interface ICategoryConfig {
	fieldList: XRFieldTypeAnnotated[];
	label: string;
	downLinksRequired: string[];
	downLinksOptional: string[];
	enable: string[];
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
interface IDropDownInfo {
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
	isAfterTimeWarp(date: string): boolean;
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
	getFields(category: string): XRFieldTypeAnnotated[];
	getFieldByName(category: string, name: string): XRFieldTypeAnnotated;
	getFieldById(category: string, fieldId: number): XRFieldTypeAnnotated;
	getFieldConfig(fieldId: number): XRFieldTypeAnnotatedParamJson;
	getFieldName(fieldId: number): string;
	getFieldType(category: string, fieldId: number): string;
	getLinkTypes(category: string, down: boolean, required: boolean): string[];
	getLinkInfo(category: string, down: boolean, required: boolean, groupByRule: boolean): ILinkInfo[];
	getMitigations(): IStringStringArrayMap;
	/** return cleanup rules, if there's a project setting that wins, if there's no rules or it's disabled it returns -1 */
	getCleanupRules(): ICleanup;
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
	private oldData;
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
interface ConfigurationParameters {
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
interface FetchAPI {
	(url: string, init?: any): Promise<Response>;
}
declare class BaseAPI {
	protected basePath: string;
	protected fetch: FetchAPI;
	protected configuration: Configuration;
	constructor(configuration?: Configuration, basePath?: string, fetch?: FetchAPI);
}
interface Access {
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
interface AddItemAck {
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
interface AuthType {
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
interface CalendarType {
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
interface CategoryAndRoot {
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
interface CategoryAndSettingListType {
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
interface CategoryExtendedListType {
	/**
	 *
	 * @type {Array<CategoryExtendedType>}
	 * @memberof CategoryExtendedListType
	 */
	categoryExtended?: Array<CategoryExtendedType>;
}
interface CategoryExtendedType {
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
interface CategoryFull {
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
interface CategoryType {
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
interface CheckPasswordAck {
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
interface CleanupFail {
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
interface CleanupField {
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
interface CleanupSetting {
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
interface CrossProjectLink {
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
interface ExceptionItemIso {
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
interface ExceptionStatus {
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
interface ExecuteTestErrorDetails {
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
interface ExportItemsAck {
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
interface FancyLeaf {
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
interface FieldAndValue {
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
interface FieldListType {
	/**
	 *
	 * @type {Array<FieldType>}
	 * @memberof FieldListType
	 */
	field?: Array<FieldType>;
}
interface FieldType {
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
interface FieldValListType {
	/**
	 *
	 * @type {Array<FieldValType>}
	 * @memberof FieldValListType
	 */
	fieldVal?: Array<FieldValType>;
}
interface FieldValType {
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
interface FromTo {
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
interface FromToString {
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
interface GetAccessAck {
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
interface GetDateAck {
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
interface GetGroupListAck {
	/**
	 *
	 * @type {Array<GroupType>}
	 * @memberof GetGroupListAck
	 */
	groups?: Array<GroupType>;
}
interface GetHmlBlobInput {
	/**
	 *
	 * @type {string}
	 * @memberof GetHmlBlobInput
	 */
	htmlToClean?: string;
}
interface GetHtmlBlob {
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
interface GetItemListAck {
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
interface GetMonitorAck {
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
interface GetProjectFileListAck {
	/**
	 *
	 * @type {Array<ProjectFileType>}
	 * @memberof GetProjectFileListAck
	 */
	projectFile?: Array<ProjectFileType>;
}
interface GetProjectSettingAck {
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
interface GetProjectStructAck {
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
interface GetReportsAck {
	/**
	 *
	 * @type {Array<ReportType>}
	 * @memberof GetReportsAck
	 */
	reportList?: Array<ReportType>;
}
interface GetSettingAck {
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
interface GetUserListAck {
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
interface GroupPermissionType {
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
interface GroupType {
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
interface HtmlCompareResult {
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
interface HtmlTestCleanup {
	/**
	 *
	 * @type {Array<CleanupFail>}
	 * @memberof HtmlTestCleanup
	 */
	cleanups?: Array<CleanupFail>;
}
interface IdParent {
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
interface ItemHistoryListType {
	/**
	 *
	 * @type {Array<ItemHistoryType>}
	 * @memberof ItemHistoryListType
	 */
	itemHistory?: Array<ItemHistoryType>;
}
interface ItemHistoryType {
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
interface ItemItemBody {
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
interface ItemSimpleType {
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
interface JobFileWithUrl {
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
interface JobWithUrl {
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
interface JobsWithUrl {
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
interface LabelChange {
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
interface LabelChangeDetail {
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
interface LabelEntry {
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
interface LabelHistory {
	/**
	 *
	 * @type {Array<LabelEntry>}
	 * @memberof LabelHistory
	 */
	entries?: Array<LabelEntry>;
}
interface LicenseStatus {
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
interface LicenseUser {
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
interface ListProjectAndSettings {
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
interface LogLevel {
	/**
	 *
	 * @type {string}
	 * @memberof LogLevel
	 */
	level?: string;
}
interface MainAndBranch {
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
interface MatrixLicense {
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
interface MergeAction {
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
interface MergeEntry {
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
interface MergeHistory {
	/**
	 *
	 * @type {Array<MergeEntry>}
	 * @memberof MergeHistory
	 */
	entries?: Array<MergeEntry>;
}
interface MergeInfo {
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
interface MergeInfoPoint {
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
interface MergeItem {
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
interface MergeItemLink {
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
interface MergeParam {
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
interface MonitorAction {
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
interface OneItem {
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
interface PluginCapabilities {
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
interface PluginSetting {
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
interface ProjectAndAccess {
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
interface ProjectFileType {
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
interface ProjectInfo {
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
interface ProjectItemBody {
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
interface ProjectNeedleBody {
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
interface ProjectNeedleminimalBody {
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
interface ProjectPermissionType {
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
interface ProjectType {
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
interface Protocol {
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
interface ReportTarget {
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
interface ReportType {
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
interface RestField {
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
interface SendmailParam {
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
interface ServerStatus {
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
interface ServiceDeskParam {
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
interface SettingAndValue {
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
interface SettingType {
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
interface SignItemAck {
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
interface Tag {
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
interface TechAuditType {
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
interface Todo {
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
interface TodoAction {
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
interface TodoCount {
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
interface TokenType {
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
interface TrimAudit {
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
interface TrimAuditList {
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
interface TrimFolder {
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
interface TrimItem {
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
interface TrimLink {
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
interface TrimNeedle {
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
interface TrimNeedleItem {
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
interface UndeleteAnswer {
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
interface UserAndTime {
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
interface UserDetails {
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
interface UserInfo {
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
interface UserPermissionType {
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
interface UserType {
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
interface UserTypeSimple {
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
interface VerifiedAuth {
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
	projectFileFilenoGet(project: string, fileno: number, key: string, disposition?: string, options?: any): Promise<string>;
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
	projectJobJobFilenoGet(project: string, job: number, fileno: number, mode?: string, format?: string, disposition?: string, options?: any): Promise<string>;
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
export declare class JSONTools implements IJSONTools {
	private logger;
	constructor(logger: ILoggerTools);
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
	/** json lint and JSON.parse( ) don't handle backslashes ( "a":"\s" )*/
	escapeJson(code: string): string;
	/** json lint and JSON.parse( ) don't handle backslashes ( "a":"\s" )*/
	unEscapeJson(code: string): string;
}
type GetItemConfigFunction = () => ItemConfiguration;
export declare class LabelManager implements ILabelManager {
	protected logger: ILoggerTools;
	protected json: IJSONTools;
	protected getConfig: GetItemConfigFunction;
	ignoreProjectFilter: boolean;
	private activeFilter;
	constructor(logger: ILoggerTools, json: IJSONTools, getConfig: GetItemConfigFunction);
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
	decipherLastTimeLabelWasSet(labelHistory: XRLabelHistory, itemId: string, label: string, beforeRevision: number): number;
	unsetLabel(oldLabelIds: string[], label: string): string[];
	compareLabels(before: string[], after: string[]): IChangedLabels;
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
type FunctionRenderHumanDate = (date: Date) => string;
type FunctionSanitize = (data: string) => string;
export declare class LoggerTools implements ILoggerTools {
	private verbose;
	private lastLogMsg;
	private logData;
	private logIdx;
	private logSize;
	private functionRenderHumanDate;
	private functionSanitize;
	constructor(functionRenderHumanDate: FunctionRenderHumanDate, sanitize?: FunctionSanitize);
	log(id: string, msg: string): void;
	debug(message: string): void;
	info(message: string): void;
	warning(message: string): void;
	error(message: string): void;
	getLog(): string;
}
export interface ITitleAndId {
	title: string;
	id: string;
	isFolder: boolean;
}
interface IProjectSearchOptions {
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
	executeInProject(project: string, payload: ExecuteParam): Promise<FolderAnswer>;
	postProjectReport(project: string, item: string, format: string): Promise<CreateReportJobAck>;
	getJobStatus(project: string, jobId: number, options?: unknown): Promise<JobsStatusWithUrl>;
	createTodo(project: string, users: string[], type: TodoTypes | string, text: string, itemId: string, fieldId: number | null, atDate: Date): Promise<string>;
}
interface ITreeFolderNeeds {
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
	constructor(needs: ITreeFolderNeeds, folder: FancyFolder, parent?: TreeFolder);
	isRoot(): boolean;
	getId(): string;
	getTitle(): string;
	getParent(): TreeFolder;
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
	findFolder(folderId: string): TreeFolder;
	/**
	 * Find a TreeFolder with the given name in this folder.
	 * @param folderTitle
	 * @returns A valid TreeFolder object or null if not found.
	 */
	findDirectFolderByTitle(folderTitle: string): TreeFolder;
	/**
	 * Save an item with this folder as the parent folder.
	 * @param item An item that hasn't yet been saved on the server
	 * @returns An Item object which corresponds to the newly created Item on the server.
	 * @throws throws Error if your item already has an id (was already created on the server).
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
export declare class DocItem extends Item {
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
	toHTML(progressReporter?: (jobId: any, progress: any) => void): Promise<string>;
	/** Generate a pdf document
	 * @return {url} the URL of the generated document */ toPDF(progressReporter?: (jobId: any, progress: any) => void): Promise<string>;
	/** Generate a docx  document
	 * @return {url} the URL of the generated document */
	toDOCx(progressReporter?: (jobId: any, progress: any) => void): Promise<string>;
	private addMandatoryFields;
	private addDocumentOptions;
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
	 * Export a DOC to an external file.
	 * @param type Can be one of "pdf", "html", "docx", or "odt"
	 * @param docId The DOC id
	 * @param progressReporter an optional callback with status updates
	 * @returns a pointer to the location on the server where the file can be downloaded
	 */
	generateDocument(type: "pdf" | "html" | "docx" | "odt", docId: string, progressReporter?: (jobId: any, progress: any) => void): Promise<JobFileWithUrl[]>;
	private sleep;
	createTodo(users: string[], type: TodoTypes, text: string, itemId: string, fieldId: number | null, atDate: Date): Promise<string>;
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
	constructor(category: Category, item?: IItemGet, fieldMask?: ItemFieldMask);
	private fieldMask;
	private fieldMap;
	private dirty;
	private id;
	private type;
	private title;
	private labels;
	private isFolder;
	private downLinks;
	private upLinks;
	private creationDate;
	private maxVersion;
	private history;
	protected toBeIntegrated: IItemGet;
	private setDirty;
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
	expandFieldMaskWithEmptyField(fieldId: number): Field;
	/**
	 * Export the data from this item into an IItemPut structure
	 * @returns An IItemPut structure, filled in from the current state of the Item.
	 */
	extractData(): IItemPut;
	getId(): string;
	getIsFolder(): boolean;
	getType(): string;
	getCreationDate(): string | undefined;
	setCreationDate(creationDate: string): Item;
	getTitle(): string;
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
	getFieldById(fieldId: number): Field;
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
interface IFieldMaskOptions {
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
interface ICategoryItemOptions {
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
	getCategoryMask(categoryId: string): ItemFieldMask;
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
	getDefaultProjectContext(): IProjectContext;
}
interface ICreateConsoleAPIArgs {
	token: string;
	url: string;
	skipSdkVersionCheck?: boolean;
}
export declare function createConsoleAPI({ token, url, skipSdkVersionCheck, }: ICreateConsoleAPIArgs): Promise<StandaloneMatrixSDK>;
/**
 * If this file is loaded in a 2.3 environment, then this function provides an easy way
 * to sniff context from globals and create an sdk object.
 * @throws an Error if some of the environment variables can't be found.
 * @returns A StandaloneMatrixSDK
 */
export declare function createFrom23Environment(skipSdkVersionCheck?: boolean): Promise<StandaloneMatrixSDK>;
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
	private ItemConfig;
	protected labelManager: ILabelManager;
	protected baseRestUrl: string;
	debug: boolean;
	private projectMap;
	private fetchWrapper;
	constructor(config: Configuration, session: ISimpleSessionControl, initialItemConfig: ItemConfiguration, matrixBaseUrl: string, logger: ILoggerTools, json: IJSONTools, simpleItemTools: ISimpleItemTools);
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
	 * Execute a search in the given project, returning matching item ids.
	 * @param project
	 * @param term
	 * @returns an array of item ids.
	 */
	searchIdsInProject(project: string, term: string): Promise<string[]>;
	searchItemsInProject(project: string, term: string, options?: IProjectSearchOptions): Promise<ISearchResult[]>;
	uploadProjectFile(url: string): Promise<AddFileAck>;
	uploadFileToProject(project: string, url: string): Promise<AddFileAck>;
	executeInProject(project: string, payload: ExecuteParam): Promise<FolderAnswer>;
	execute(payload: ExecuteParam): Promise<FolderAnswer>;
	/**
	 * The session object contains a string that represents the "current project."
	 * This convenience method calls openProject() with that string.
	 * @returns A valid Project object, or null if the session has no project.
	 */
	openCurrentProjectFromSession(): Promise<Project>;
	/**
	 * Retrieve or create a Project object for the given project name.  The method is
	 * asynchronous because it may require a trip to the server to retrieve project
	 * configuration.
	 * @param project a valid string.
	 * @returns A valid Project object, or null if the project name is undefined.
	 */
	openProject(project: string): Promise<Project>;
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
	createTodo(project: string, users: string[], type: TodoTypes, text: string, itemId: string, fieldId: number | null, atDate: Date): Promise<string>;
	rootGet(adminUI?: number, output?: string, options?: unknown): Promise<ListProjectAndSettings>;
	validateSdkVersion(): Promise<boolean>;
}

export {};
