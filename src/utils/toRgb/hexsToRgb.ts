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
  } else {
    vscode.window.showErrorMessage(`Hex input is not valid`);
    throw Error(`Hex input is not valid`);
  }
  
  return "rgb("+ +r + ", " + +g + ", " + +b + ")";
}

export function hexToRgba(hex: string) {
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
  } else {
    vscode.window.showErrorMessage(`Hex input is not valid`);
    throw Error(`Hex input is not valid`);
  }
  
  return "rgba("+ +r + ", " + +g + ", " + +b + ", 1)";
}

export function hexaToRgba(h: string) {
  let r: any = 0, g: any = 0, b: any = 0, a: any = 1;

  if (h.length === 5) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];
    a = "0x" + h[4] + h[4];

  } else if (h.length === 9) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
    a = "0x" + h[7] + h[8];
  } else {
    vscode.window.showErrorMessage(`Hex input is not valid`);
    throw Error(`Hex input is not valid`);
  }

  a = +(a / 255).toFixed(2);

  return "rgba(" + +r + ", " + +g + ", " + +b + ", " + a + ")";
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
      return hexaToRgba(clr);
    }
  // check for short version
  } else if (arr.length === 5) {
    if (arr[arr.length - 1] === 'f' || arr[arr.length - 1] === 'F') {
      arr.splice(4, 1);
      const hex = arr.join('');
      return hexToRgb(hex);
    } else {
      return hexaToRgba(clr);
    }
  } 
  vscode.window.showErrorMessage(`Error in hexaToRgb().`);
  throw new Error(`Error in hexaToRgb().`);
}