'use strict';

import * as dateformat from 'dateformat';
import * as vscode from 'vscode';

// Define a default date format in case the user configuration is not available
const DEFAULT_DATE_FORMAT = 'hh:MM TT';

// Export a function that returns the formatted date and time
export default function (): string {
  // Get the current date and time and format it using the dateformat library
  return dateformat(
    // Date.now() returns the current timestamp
    Date.now(),
    // Retrieve the user-configured date format from VSCode settings
    (vscode.workspace.getConfiguration('clock').get('dateFormat') as string) || DEFAULT_DATE_FORMAT
  );
}
