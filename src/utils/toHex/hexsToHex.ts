import * as vscode from 'vscode';

// HEX TO HEX
export function hexToHex(hex: string) {
  return hex;
}

// HEXA TO HEX
export function hexaToHex(clr: string) {
  const arr = clr.split('');
  // check for hexa full format
  if (arr.length === 9) {
    if ((arr[arr.length - 1] === 'f' || arr[arr.length - 1] === 'F') && (arr[arr.length - 2] === 'f' || arr[arr.length - 2] === 'F')) {
      arr.splice(7, 2);
      const hex = arr.join('');
      return hexToHex(hex);
    } else {
      vscode.window.showErrorMessage(`Can't parse HEXA format to HEX because of opacity value.`);
      throw new Error(`Can't parse HEXA format to HEX because of opacity value.`);
    }
  // check for short version
  } else if (arr.length === 5) {
    if (arr[arr.length - 1] === 'f' || arr[arr.length - 1] === 'F') {
      arr.splice(4, 1);
      const hex = arr.join('');
      return hexToHex(hex);
    } else {
      vscode.window.showErrorMessage(`Can't parse HEXA format to HEX because of opacity value.`);
      throw new Error(`Can't parse HEXA format to HEX because of opacity value.`);
    }
  }

  vscode.window.showErrorMessage(`Error in hexaToHex().`);
  throw new Error(`Error in hexaToHex().`);
}

// HEX TO HEXA
export function hexToHexa(hex: string) {
  if (hex.length === 4) {
    return `${hex}f`;
  } else if (hex.length === 7) {
    return `${hex}ff`;
  } else {
    vscode.window.showErrorMessage(`Can't parse Hex-life input ${hex} to Hexa.`);
    throw new Error(`Can't parse Hex-life input ${hex} to Hexa.`);
  }
}

// HEXA TO HEXA
export function hexaToHexa(hexa: string) {
  return hexa;
}