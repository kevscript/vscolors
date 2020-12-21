// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "test-ext" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('test-ext.rgb2hex', () => {
    // The code you place here will be executed every time your command is executed
    const editor = vscode.window.activeTextEditor
    const selection = editor?.selection
    const selectedText = editor?.document.getText(selection).trim()

    function RGBToHex(rgb: String) {
      // Choose correct separator
      let sep = rgb.indexOf(",") > -1 ? "," : " ";
      // Turn "rgb(r,g,b)" into [r,g,b]
      const rgbArr = rgb.substr(4).split(")")[0].split(sep);
  
      let r = (+rgbArr[0]).toString(16),
          g = (+rgbArr[1]).toString(16),
          b = (+rgbArr[2]).toString(16);
    
      if (r.length == 1)
        r = "0" + r;
      if (g.length == 1)
        g = "0" + g;
      if (b.length == 1)
        b = "0" + b;
    
      return "#" + r + g + b;
    }

    if (selectedText?.startsWith('rgb(') && selectedText?.endsWith(')')) {
      const returnText = RGBToHex(selectedText)
      vscode.window.showInformationMessage(`${returnText}`);
      editor?.edit(editBuilder => {
        if(selection) editBuilder.replace(selection, returnText)
      })
    } else {
      vscode.window.showErrorMessage(`${selectedText} is not an RGB expression`);
    }
  });
  
  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
