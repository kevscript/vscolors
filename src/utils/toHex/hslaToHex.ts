import * as vscode from 'vscode';
import { hslToHex } from './hslToHex';

export function hslaToHex([h, s, l, a]: number[]) {
  if (a === 1) {
    return hslToHex([h, s, l]);
  } else {
    vscode.window.showErrorMessage(`Can't parse HSLA format to HEX because of opacity value.`);
    throw new Error(`Can't parse HSLA format to HEX because of opacity value.`);
  }
}