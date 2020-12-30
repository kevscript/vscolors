import * as vscode from 'vscode';
import { hslToRgb } from './hslToRgb';

export function hslaToRgb([h, s, l, a]: number[]) {
  if (a === 1) {
    return hslToRgb([h, s, l]);
  } else {
    vscode.window.showErrorMessage(`Can't parse HSLA format to RGB because of opacity value.`);
    throw new Error(`Can't parse HSLA format to RGB because of opacity value.`);
  }
}