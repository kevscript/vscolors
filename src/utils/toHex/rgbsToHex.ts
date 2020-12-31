import * as vscode from 'vscode';

// RGB TO HEX
export function rgbToHex(rgbArr: number[]) {
  return '#' + rgbArr.map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}

// RGBA TO HEX
export function rgbaToHex([r, g, b, a]: number[]) {
  if (a === 1) {
    return rgbToHex([r, g, b]);
  } else {
    vscode.window.showErrorMessage(`Can't parse RGBA format to HEX because of opacity value.`);
    throw new Error(`Can't parse RGBA format to HEX because of opacity value.`);
  }
}