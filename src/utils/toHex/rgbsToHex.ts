import * as vscode from 'vscode';

// RGB TO HEX
export function rgbToHex(rgbArr: number[]) {
  return '#' + rgbArr.map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}

export function rgbToHexa(rgbArr: number[]) {
  const hex = rgbArr.map(x => {
    const clr = x.toString(16);
    return clr.length === 1 ? '0' + clr : clr;
  }).join('');
  return '#' + hex + 'ff';
}

// RGBA TO HEXA
export function rgbaToHexa([rr, gg, bb, aa]: number[]) {
  let r = rr.toString(16);
  let g = gg.toString(16);
  let b = bb.toString(16);
  let a = Math.round(aa * 255).toString(16);

  if (r.length === 1)
    {r = "0" + r;}
  if (g.length === 1)
    {g = "0" + g;}
  if (b.length === 1)
    {b = "0" + b;}
  if (a.length === 1)
    {a = "0" + a;}

  return "#" + r + g + b + a;
}

// RGBA TO HEX
export function rgbaToHex([r, g, b, a]: number[]) {
  if (a === 1) {
    return rgbToHex([r, g, b]);
  } else if (a < 1) {
    return rgbaToHexa([r, g, b, a]);
  } else {
    throw new Error('error in rgbaToHex()');
  }
}