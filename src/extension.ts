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
	const hexToRgb = vscode.commands.registerCommand('test-ext.hex2rgb', () => {
		const editor = vscode.window.activeTextEditor;
    if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			// Get the word within the selection
      const selectedText = document.getText(selection).trim();
      const colorFormat = getColorFormat(selectedText);
      const hsl = hex2Rgb(selectedText);
			editor.edit(editBuilder => {
				editBuilder.replace(selection, hsl);
			});
		}
  });

  const hexToHsl = vscode.commands.registerCommand('test-ext.hex2hsl', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
			const document = editor.document;
			const selection = editor.selection;
			// Get the word within the selection
      const selectedText = document.getText(selection).trim();
      const colorFormat = getColorFormat(selectedText);
      const hsl = hex2Hsl(selectedText);
			editor.edit(editBuilder => {
				editBuilder.replace(selection, hsl);
			});
		}
  });


  context.subscriptions.push(hexToRgb, hexToHsl);
}

// this method is called when your extension is deactivated
export function deactivate() {}
