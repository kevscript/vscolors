export function formatRgba(clr: string) {
  const rgba = clr.replace(/\s/g, "");
  const rgbaColors = rgba.substring(rgba.indexOf('(') + 1, rgba.lastIndexOf(')')).split(/,\s*/);
  const rgbaArr = [ parseInt(rgbaColors[0]), parseInt(rgbaColors[1]), parseInt(rgbaColors[2]), parseFloat(rgbaColors[3])];
  return rgbaArr;
}