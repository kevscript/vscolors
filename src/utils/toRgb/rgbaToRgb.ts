import * as vscode from 'vscode';
import { rgbToRgb } from './rgbToRgb';

export function rgbaToRgb([r, g, b, a]: number[]) {
  if (a === 1) {
    return rgbToRgb([r, g, b]);
  } else {
    vscode.window.showErrorMessage(`Can't parse RGBA format to RGB because of opacity value.`);
    throw new Error(`Can't parse RGBA format to RGB because of opacity value.`);
  }
}