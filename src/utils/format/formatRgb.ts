export function formatRgb(clr: string) {
  // remove all whitespace
  const rgb = clr.replace(/\s/g, "");
  const rgbColors = rgb.substring(rgb.indexOf('(') + 1, rgb.lastIndexOf(')')).split(/,\s*/);
  const rgbArr = [ parseInt(rgbColors[0]), parseInt(rgbColors[1]), parseInt(rgbColors[2]) ];
  return rgbArr;
}