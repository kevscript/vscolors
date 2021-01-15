import { formatHsl } from '../format/formatHsls';

// HEX TO HSL
export function hexToHsl(clr: string) {
  const hex = clr.replace(/\s/g, "");

  // NEED TO PARSE HEX TO RGB FIRST
  let r: any = 0;
  let g: any = 0;
  let b: any = 0;

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

  r = parseInt(r) / 255;
  g = parseInt(g) / 255;
  b = parseInt(b) / 255;

  // THEN PARSE RGB TO HSL
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

// HEX TO HSLA
export function hexToHsla(clr: string) {
  const hsl = hexToHsl(clr);
  const formattedHsl = formatHsl(hsl);
  return `hsla(${formattedHsl[0]}, ${formattedHsl[1]}%, ${formattedHsl[2]}%, 1)`;
}

// HEXA TO HSLA
export function hexaToHsla(hexa: string) {
  let r: any = 0;
  let g: any = 0;
  let b: any = 0;
  let a: any = 1;

  if (hexa.length === 5) {
    r = "0x" + hexa[1] + hexa[1];
    g = "0x" + hexa[2] + hexa[2];
    b = "0x" + hexa[3] + hexa[3];
    a = "0x" + hexa[4] + hexa[4];
  } else if (hexa.length === 9) {
    r = "0x" + hexa[1] + hexa[2];
    g = "0x" + hexa[3] + hexa[4];
    b = "0x" + hexa[5] + hexa[6];
    a = "0x" + hexa[7] + hexa[8];
  }

  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

  if (delta === 0)
    {h = 0;}
  else if (cmax === r)
    {h = ((g - b) / delta) % 6;}
  else if (cmax === g)
    {h = (b - r) / delta + 2;}
  else
    {h = (r - g) / delta + 4;}

  h = Math.round(h * 60);

  if (h < 0)
    {h += 360;}

  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);
  a = parseFloat((a / 255).toFixed(2));

  return "hsla("+ h + ", " + Math.round(s) + "%, " + Math.round(l) + "%, " + a + ")";
}

// HEXA TO HSL
export function hexaToHsl(clr: string) {
  const arr = clr.split('');

  // check for hexa full format
  if (arr.length === 9) {
    if ((arr[arr.length - 1] === 'f' || arr[arr.length - 1] === 'F') && (arr[arr.length - 2] === 'f' || arr[arr.length - 2] === 'F')) {
      arr.splice(7, 2);
      const hex = arr.join('');
      return hexToHsl(hex);
    } else {
      return hexaToHsla(clr);
    }
  // check for short version
  } else if (arr.length === 5) {
    if (arr[arr.length - 1] === 'f' || arr[arr.length - 1] === 'F') {
      arr.splice(4, 1);
      const hex = arr.join('');
      return hexToHsl(hex);
    } else {
      throw Error("Can't parse a short hexa with custom opacity");
    }
  }

  throw new Error(`Error in hexaToHsl().`);
}
