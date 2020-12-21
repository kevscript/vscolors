import * as vscode from 'vscode';

export function hex2Rgb(h: string) {
  // remove all whitespace in provided hex string
  const hex = h.replace(/\s/g, "");

  let r: string = "";
  let g: string = "";
  let b: string = "";

  // if after triming the string length isnt 4 or 7
  // its not a valid hex value
  if (hex.length !== 4 && hex.length !== 7) {
    vscode.window.showErrorMessage(`${h} is not a valid hex code, check for typos`);
    throw new Error(`${h} is not a valid hex code, check for typos`);
  } 

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

  // console.log("rgb(" + +r + "," + +g + "," + +b + ")");
  return `rgb(${parseInt(r)}, ${parseInt(g)}, ${parseInt(b)})`;
}