export function formatHsl(clr: string) {
  // remove all whitepsace
  const hsl: string = clr.replace(/\s/g, "");

  // check if color input uses commas or not to separate values
  const sep = hsl.indexOf(",") > -1 ? "," : " ";

  // array of hsl values
  const hslArr: string[] = hsl.substr(4).split(")")[0].split(sep);

  // isolate values
  let h: any = hslArr[0];
  let s = parseInt(hslArr[1].substr(0, hslArr[1].length - 1));
  let l = parseInt(hslArr[2].substr(0, hslArr[2].length - 1));  

  // strip label and convert to degrees (if necessary)
  if (h.indexOf("deg") > -1) {h = h.substr(0, h.length - 3);}
  else if (h.indexOf("rad") > -1) {h = Math.round((h.substr(0, h.length - 3)) * (180 / Math.PI)); }
  else if (h.indexOf("turn") > -1) {h = Math.round((h.substr(0, h.length - 4)) * 360);}
  if (h >= 360) {h %= 360;}

  // if values are under 0 or over 100, return 0 or 100
  s <= 0 ? 0 : s >= 100 ? 100 : s;
  l <= 0 ? 0 : l >= 100 ? 100 : l;

  return [parseInt(h), s, l];
}


export function formatHsla(clr: string) {
  // remove all whitepsace
  const hsla: any = clr.replace(/\s/g, "");

  // check if color input uses commas or not to separate values
  let sep = hsla.indexOf(",") > -1 ? "," : " ";

  // array of hsla values
  const hslaArr = hsla.substr(5).split(")")[0].split(sep);

  // strip the slash between colors and opacity, supported since CSS4
  if (hsla.indexOf("/") > -1) {hsla.splice(3,1);}
    
  let h: any = hslaArr[0];
  let s = parseInt(hslaArr[1].substr(0, hslaArr[1].length - 1));
  let l = parseInt(hslaArr[2].substr(0, hslaArr[2].length - 1));
  let a = parseFloat(hslaArr[3]) >= 1 ? 1 : parseFloat(hslaArr[3]);

  // strip label and convert to degrees (if necessary)
  if (h.indexOf("deg") > -1) {h = h.substr(0,h.length - 3);}
  else if (h.indexOf("rad") > -1) {h = Math.round((h.substr(0,h.length - 3)) * (180 / Math.PI));}
  else if (h.indexOf("turn") > -1) {h = Math.round((h.substr(0,h.length - 4)) * 360);}
  if (h >= 360) {h %= 360;}

  // if values are under 0 or over 100, return 0 or 100
  s <= 0 ? 0 : s >= 100 ? 100 : s;
  l <= 0 ? 0 : l >= 100 ? 100 : l;

  return [parseInt(h), s, l, a];
}