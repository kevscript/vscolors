export function formatHsla(clr: string) {
  // remove all whitepsace
  let hsla: any = clr.replace(/\s/g, "");

  let sep = hsla.indexOf(",") > -1 ? "," : " ";
  hsla = hsla.substr(5).split(")")[0].split(sep);
    
  // Strip the slash
  if (hsla.indexOf("/") > -1)
    {hsla.splice(3,1);}
    
  let h: any = hsla[0];
  let s = parseInt(hsla[1].substr(0,hsla[1].length - 1));
  let l = parseInt(hsla[2].substr(0,hsla[2].length - 1));
  let a = parseFloat(hsla[3]) >= 1 ? 1 : parseFloat(hsla[3]);

  // Strip label and convert to degrees (if necessary)
  if (h.indexOf("deg") > -1)
    {h = h.substr(0,h.length - 3);}
  else if (h.indexOf("rad") > -1)
    {h = Math.round((h.substr(0,h.length - 3)) * (180 / Math.PI));}
  else if (h.indexOf("turn") > -1)
    {h = Math.round((h.substr(0,h.length - 4)) * 360);}
  if (h >= 360)
    {h %= 360;}

  // if % are over 100
  if (s >= 100) {s = 100;};
  if (l >= 100) {l = 100;};

  return [parseInt(h), s, l, a];
}