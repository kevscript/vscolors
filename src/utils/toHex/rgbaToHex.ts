import * as vscode from 'vscode';
import { rgbToHex } from './rgbToHex';

export function rgbaToHex([r, g, b, a]: number[]) {
  if (a === 1) {
    return rgbToHex([r, g, b]);
  } else {
    vscode.window.showErrorMessage(`Can't parse RGBA format to HEX because of opacity value.`);
    throw new Error(`Can't parse RGBA format to HEX because of opacity value.`);
  }
}