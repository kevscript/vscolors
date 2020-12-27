export function formatRgba(clr: string) {
  const rgba = clr.replace(/\s/g, "");
  const rgbaColors = rgba.substring(rgba.indexOf('(') + 1, rgba.lastIndexOf(')')).split(/,\s*/);

  const rgbaValues = rgbaColors.map((x, i) => {
    // if current value is the opacity
    if (i === rgbaColors.length - 1) {
      return parseFloat(x);
    }

    if (x.includes("%")) {
      const number = parseFloat(x.replace(/\%/g, ""));
      if (number <= 0) {return 0;};
      if (number >= 100) {return 255;};
      return Math.round((number / 100) * 255);
    } else {
      const number = parseInt(x);
      if (number <= 0) {return 0;};
      if (number >= 255) {return 255;};
      return number;
    }
  });

  return [ rgbaValues[0], rgbaValues[1], rgbaValues[2], rgbaValues[3]];
}