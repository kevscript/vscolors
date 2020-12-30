import * as vscode from 'vscode';
import { rgbToHsl } from './rgbToHsl';

export function rgbaToHsl([r, g, b, a]: number[]) {
  if (a === 1) {
    return rgbToHsl([r, g, b]);
  } else {
    vscode.window.showErrorMessage(`Can't parse RGBA format to HSL because of opacity value.`);
    throw new Error(`Can't parse RGBA format to HSL because of opacity value.`);
  }
}