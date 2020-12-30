import * as vscode from 'vscode';
import { hexToRgb } from './hexToRgb';

export function hexaToRgb(clr: string) {
  const arr = clr.split('');

  // check for hexa full format
  if (arr.length === 9) {
    if ((arr[arr.length - 1] === 'f' || arr[arr.length - 1] === 'F') && (arr[arr.length - 2] === 'f' || arr[arr.length - 2] === 'F')) {
      arr.splice(7, 2);
      const hex = arr.join('');
      return hexToRgb(hex);
    } else {
      vscode.window.showErrorMessage(`Can't parse HEXA format to RGB because of opacity value.`);
      throw new Error(`Can't parse HEXA format to RGB because of opacity value.`);
    }
  // check for short version
  } else if (arr.length === 5) {
    if (arr[arr.length - 1] === 'f' || arr[arr.length - 1] === 'F') {
      arr.splice(4, 1);
      const hex = arr.join('');
      return hexToRgb(hex);
    } else {
      vscode.window.showErrorMessage(`Can't parse HEXA format to RGB because of opacity value.`);
      throw new Error(`Can't parse HEXA format to RGB because of opacity value.`);
    }
  }

  throw new Error(`Error in hexaToRgb().`);
}