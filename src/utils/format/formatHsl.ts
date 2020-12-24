export function formatHsl(clr: string) {
  // remove all whitepsace
  let hsl: any = clr.replace(/\s/g, "");
  
  let sep = hsl.indexOf(",") > -1 ? "," : " ";
  hsl = hsl.substr(4).split(")")[0].split(sep);

  let h: any = hsl[0];
  let s = parseInt(hsl[1].substr(0,hsl[1].length - 1)) / 100;
  let l = parseInt(hsl[2].substr(0,hsl[2].length - 1)) / 100;
        
  // Strip label and convert to degrees (if necessary)
  if (h.indexOf("deg") > -1)
    {h = h.substr(0,h.length - 3);}
  else if (h.indexOf("rad") > -1)
    {h = Math.round((h.substr(0,h.length - 3)) * (180 / Math.PI));}
  else if (h.indexOf("turn") > -1)
    {h = Math.round((h.substr(0,h.length - 4)) * 360);}
  if (h >= 360)
    {h %= 360;}

  return [h, s, l];
}