'use strict';

import * as vscode from 'vscode';
import clock from './clock'; 

const DEFAULT_DATE_FORMAT = 'hh:MM TT';

class StatusBarItem {
  private _statusBarItem: vscode.StatusBarItem;
  private _interval: NodeJS.Timeout;

  constructor() {
    this._statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 200);
    this._statusBarItem.command = 'clock.insertDateTime';
    this._statusBarItem.tooltip = 'Click here insert current time into the cursor';
    this._statusBarItem.show();

    this._interval = setInterval(() => this.refreshUI(), 1000);

    this.refreshUI();
  }

  dispose() {
    this._statusBarItem.dispose();
    clearInterval(this._interval);
  }

  refreshUI() {
    this._statusBarItem.text = clock();
  }
}

export = StatusBarItem;
