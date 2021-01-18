import * as vscode from 'vscode';

export function rgbToRgb(rgbArr: number[]) {
  return `rgb(${rgbArr[0]}, ${rgbArr[1]}, ${rgbArr[2]})`;
}

export function rgbaToRgba([r, g, b, a]: number[]) {
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export function rgbToRgba([r, g, b]: number[]) {
  return `rgba(${r}, ${g}, ${b}, 1)`;
}

export function rgbaToRgb([r, g, b, a]: number[]) {
  if (a === 1) {
    return rgbToRgb([r, g, b]);
  } else if (a < 1) {
    return rgbaToRgba([r, g, b, a]);
  } else {
    vscode.window.showErrorMessage('error in rgbaToRgb()');
    throw new Error('error in rgbaToRgb()');
  }
}