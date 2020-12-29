import * as vscode from 'vscode';
import { hexToHex } from './hexToHex';

export function hexaToHex(clr: string) {
  const arr = clr.split('');

  if ((arr[arr.length - 1] === 'f' || arr[arr.length - 1] === 'F') && (arr[arr.length - 2] === 'f' || arr[arr.length - 2] === 'F')) {
    const hex = arr.splice(1, 2).join('');
    return hexToHex(hex);
  } else {
    vscode.window.showErrorMessage(`Can't parse HEXA format to HEX because of opacity value.`);
    throw new Error(`Can't parse HEXA format to HEX because of opacity value.`);
  }
}