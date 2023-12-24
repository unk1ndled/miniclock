import * as vscode from "vscode";

import clock from './clock'; 
import ClockItem from './clockitem';

export function activate(context: vscode.ExtensionContext): void {

  console.log("the mini clock extension is working");

  let disposable = vscode.commands.registerCommand(
    "miniclock.check",
    () => {
      vscode.window.showInformationMessage("MiniClock is working !");
    }
  );

  context.subscriptions.push(disposable);
  
  context.subscriptions.push(new ClockItem());

  context.subscriptions.push(vscode.commands.registerTextEditorCommand('clock.insertDateTime', (textEditor: vscode.TextEditor, edit: vscode.TextEditorEdit) => {
    textEditor.selections.forEach(selection => {
      const start: vscode.Position = selection.start;
      const end: vscode.Position = selection.end;

      if (start.isEqual(end)) {
        edit.insert(start, clock());
      } else {
        edit.replace(selection, clock());
      }
            
    });
  }));
}

// This method is called when your extension is deactivated
export function deactivate(): void {
  // Cleanup, if needed, when the extension is deactivated
}
