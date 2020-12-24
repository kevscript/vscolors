import * as vscode from 'vscode';

export function formatHex(clr: string) {
    // remove all whitespace
    const hex = clr.replace(/\s/g, "");

    if (hex.length !== 4 && hex.length !== 7) {
      vscode.window.showErrorMessage(`${clr} is not a valid hex code, check for typos`);
      throw new Error(`${clr} is not a valid hex code, check for typos`);
    } 

    return hex;
}