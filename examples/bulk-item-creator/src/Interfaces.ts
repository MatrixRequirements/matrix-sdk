import {
    IServerSettingsBase,
    IPluginFieldParameterBase,
    IPluginPrintParamsBase,
    IPluginFieldValueBase
} from 'matrix-requirements-sdk/client';

/* Setting interfaces */

/**
 * This file defines all the data structures which might be shared between UI components and printing
 *
 */

export interface CategoryInstruction {
    category: string;
    count: number;
    attachmentCount: number;
    downLinks: string[];
}

export interface IBulkSettings extends IServerSettingsBase {
    project: string;
    categoryInstructions: CategoryInstruction[];
    imageToAttachURL: string;
}
