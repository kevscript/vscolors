// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { getColorType } from './utils/getColorType';
import { formatColor } from './utils/format';
import { toHex } from './utils/toHex';


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "VSColors" is now active!');
  
  const color2Hex = vscode.commands.registerCommand('vscolors.color2Hex', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
			const document = editor.document;
			const selection = editor.selection;
			// Get the word within the selection
      const selectedText = document.getText(selection).trim();
      const colorType = getColorType(selectedText);
      const formatedColor = formatColor(colorType);
      const hex = toHex(formatedColor);
      editor.edit(editBuilder => {
        editBuilder.replace(selection, hex);
      });
		}
  });

  context.subscriptions.push(color2Hex);
}

// this method is called when your extension is deactivated
export function deactivate() {}
