/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

'use strict';

import * as vscode from 'vscode';
import { activateMockDebug } from './activateMockDebug';

export function activate(context: vscode.ExtensionContext) {

    // run the debug adapter inside the extension and directly talk to it
    activateMockDebug(context);
}

export function deactivate() {
	// nothing to do
}

