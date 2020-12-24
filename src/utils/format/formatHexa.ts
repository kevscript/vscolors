import * as vscode from 'vscode';

export function formatHexa(clr: string) {
  // remove all whitespace
  const hexa = clr.replace(/\s/g, "");

  if (hexa.length !== 5 && hexa.length !== 9) {
    vscode.window.showErrorMessage(`${clr} is not a valid HEXA (#rrggbbaa) color, check for typos`);
    throw new Error(`${clr} is not a valid HEXA (#rrggbbaa) color, check for typos`);
  } 

  return hexa;
}