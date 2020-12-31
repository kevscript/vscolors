import * as vscode from 'vscode';

export function hexToRgb(hex: string) {
  let r: number | string = 0;
  let g: number | string = 0;
  let b: number | string = 0;

  // 3 digits
  if (hex.length === 4) {
    r = "0x" + hex[1] + hex[1];
    g = "0x" + hex[2] + hex[2];
    b = "0x" + hex[3] + hex[3];

  // 6 digits
  } else if (hex.length === 7) {
    r = "0x" + hex[1] + hex[2];
    g = "0x" + hex[3] + hex[4];
    b = "0x" + hex[5] + hex[6];
  }
  
  return "rgb("+ +r + ", " + +g + ", " + +b + ")";
}


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