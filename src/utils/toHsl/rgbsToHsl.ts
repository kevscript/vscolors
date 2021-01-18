import * as vscode from 'vscode';

// RGB TO HSL
export function rgbToHsl([rr, gg, bb]: number[]) {
  // Make r, g, and b fractions of 1
  let r = rr /= 255;
  let g = gg /= 255;
  let b = bb /= 255;

  let cmin = Math.min(r,g,b);
  let cmax = Math.max(r,g,b);
  let delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

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

// RGB TO HSLA
export function rgbToHsla([rr, gg, bb]: number[]) {
  // Make r, g, and b fractions of 1
  let r = rr /= 255;
  let g = gg /= 255;
  let b = bb /= 255;

  let cmin = Math.min(r,g,b);
  let cmax = Math.max(r,g,b);
  let delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

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

  return "hsla(" + h + ", " + Math.round(s) + "%, " + Math.round(l) + "%, 1)";
}

// RGBA TO HSLA
export function rgbaToHsla([rr, gg, bb, a]: number[]) {
  // Make r, g, and b fractions of 1
  let r = rr /= 255;
  let g = gg /= 255;
  let b = bb /= 255;

  let cmin = Math.min(r,g,b);
  let cmax = Math.max(r,g,b);
  let delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

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

  return "hsla(" + h + ", " + Math.round(s) + "%, " + Math.round(l) + "%, " + a + ")";
}

// RGBA TO HSL
export function rgbaToHsl([r, g, b, a]: number[]) {
  if (a === 1) {
    return rgbToHsl([r, g, b]);
  } else if (a < 1) {
    return rgbaToHsla([r, g, b, a]);
  } else {
    vscode.window.showErrorMessage("error in rgbaToHsl()");
    throw new Error("error in rgbaToHsl()");
  }
}