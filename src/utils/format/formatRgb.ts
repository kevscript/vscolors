export function formatRgb(clr: string) {
  // remove all whitespace
  const rgb = clr.replace(/\s/g, "");
  // make array of values
  const rgbColors = rgb.substring(rgb.indexOf('(') + 1, rgb.lastIndexOf(')')).split(/,\s*/);

  const rgbValues = rgbColors.map(x => {
    // if value is a percentage parse it into 0-255 value
    // return x.includes("%") ? Math.round((parseFloat(x.replace(/\%/g, "")) / 100) * 255) : parseInt(x);

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

  return [ rgbValues[0], rgbValues[1], rgbValues[2] ];
}