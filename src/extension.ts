// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { getColorFormat } from './utils/getColorFormat';
import { hex2Rgb } from './utils/hex2Rgb';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "test-ext" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('test-ext.hex2rgb', () => {
    // The code you place here will be executed every time your command is executed
    const editor = vscode.window.activeTextEditor;
    const selection = editor?.selection;
    const selectedText = editor?.document.getText(selection).trim();

    if (selectedText) {
      const colorFormat = getColorFormat(selectedText);

      if (colorFormat) {
        const hex = hex2Rgb(selectedText);

        if (hex) {
          vscode.window.showInformationMessage(`${hex}`);
          editor?.edit(editBuilder => {
            if(selection) {editBuilder.replace(selection, hex);};
          });
        } else {
          vscode.window.showErrorMessage(`${selectedText} couldn't resolve to an RGB value`);
        }
      }
    }
  });
  
  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
