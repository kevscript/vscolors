import * as vscode from 'vscode';

// HSL TO HSL
export function hslToHsl([h, s, l]: number[]) {
  return `hsl(${h}, ${s}%, ${l}%)`;
}


// HSLA TO HSL
export function hslaToHsl([h, s, l, a]: number[]) {
  if (a === 1) {
    return hslToHsl([h, s, l]);
  } else {
    vscode.window.showErrorMessage(`Can't parse HSLA format to HSL because of opacity value.`);
    throw new Error(`Can't parse HSLA format to HSL because of opacity value.`);
  }
}