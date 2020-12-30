import * as vscode from 'vscode';
import { hslToHsl } from "./hslToHsl";

export function hslaToHsl([h, s, l, a]: number[]) {
  if (a === 1) {
    return hslToHsl([h, s, l]);
  } else {
    vscode.window.showErrorMessage(`Can't parse HSLA format to HSL because of opacity value.`);
    throw new Error(`Can't parse HSLA format to HSL because of opacity value.`);
  }
}