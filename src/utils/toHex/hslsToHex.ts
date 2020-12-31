import * as vscode from 'vscode';


// HSL TO HEX
export function hslToHex([h, s, l]: number[]) {
  // Must be fractions of 1
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s;
  let x = c * (1 - Math.abs((h / 60) % 2 - 1));
  let m = l - c/2;
  let r: any = 0;
  let g: any = 0;
  let b: any = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  const [rr, gg, bb]: (string|number)[] = [r,g,b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  });
  
  return "#" + rr + gg + bb;
}


// HSLA TO HEX
export function hslaToHex([h, s, l, a]: number[]) {
  if (a === 1) {
    return hslToHex([h, s, l]);
  } else {
    vscode.window.showErrorMessage(`Can't parse HSLA format to HEX because of opacity value.`);
    throw new Error(`Can't parse HSLA format to HEX because of opacity value.`);
  }
}