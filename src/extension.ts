// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { getColorFormat } from './utils/getColorFormat';
import { hex2Rgb } from './utils/hex/hex2Rgb';
import { hex2Hsl } from './utils/hex/hex2Hsl';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "test-ext" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let hexToRgb = vscode.commands.registerCommand('test-ext.hex2rgb', () => {
    // The code you place here will be executed every time your command is executed
    const editor = vscode.window.activeTextEditor;
    const selection = editor?.selection;
    const selectedText = editor?.document.getText(selection).trim();

    if (selectedText) {
      const colorFormat = getColorFormat(selectedText);

      if (colorFormat) {
        const rgb = hex2Rgb(selectedText);

        if (rgb) {
          vscode.window.showInformationMessage(`${rgb}`);
          editor?.edit(editBuilder => {
            if(selection) {editBuilder.replace(selection, rgb);};
          });
        } else {
          vscode.window.showErrorMessage(`${selectedText} couldn't resolve to an RGB value`);
        }
      }
    }
  });

  let hexToHsl = vscode.commands.registerCommand('test-ext.hex2hsl', () => {
    const editor = vscode.window.activeTextEditor;
    const selection = editor?.selection;
    const selectedText = editor?.document.getText(selection).trim();

    if (selectedText) {
      const colorFormat = getColorFormat(selectedText);

      if (colorFormat) {
        const hsl = hex2Hsl(selectedText);

        if (hsl) {
          vscode.window.showInformationMessage(`${hsl}`);
          editor?.edit(editBuilder => {
            if(selection) {editBuilder.replace(selection, hsl);};
          });
        } else {
          vscode.window.showErrorMessage(`${selectedText} couldn't resolve to a HSL value`);
        }
      }
    }
  });
  
  context.subscriptions.push(hexToRgb);
  context.subscriptions.push(hexToHsl);
}

// this method is called when your extension is deactivated
export function deactivate() {}
