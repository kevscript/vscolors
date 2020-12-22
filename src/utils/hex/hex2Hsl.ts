import * as vscode from 'vscode';

export function hex2Hsl(clr: string) {
  // NEED TO PARSE HEX TO RGB FIRST
  // remove all whitespace in provided hex string
  const hex = clr.replace(/\s/g, "");

  let r: any = 0;
  let g: any = 0;
  let b: any = 0;

  // if after triming the string length isnt 4 or 7
  // its not a valid hex value
  if (hex.length !== 4 && hex.length !== 7) {
    vscode.window.showErrorMessage(`${clr} is not a valid hex code, check for typos`);
    throw new Error(`${clr} is not a valid hex code, check for typos`);
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

  
  // THEN PARSE RGB TO HSL

  r = parseInt(r) / 255;
  g = parseInt(g) / 255;
  b = parseInt(b) / 255;
  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

  if (delta === 0) {h = 0;}
  else if (cmax === r) {h = ((g - b) / delta) % 6;}
  else if (cmax === g) {h = (b - r) / delta + 2;}
  else {h = (r - g) / delta + 4;}

  h = Math.round(h * 60);

  if (h < 0) {h += 360;}

  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return "hsl(" + h + ", " + Math.round(s) + "%, " + Math.round(l) + "%)";
}
