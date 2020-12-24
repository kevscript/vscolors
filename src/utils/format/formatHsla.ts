export function formatHsla(clr: string) {
  // remove all whitepsace
  let hsla: any = clr.replace(/\s/g, "");

  let sep = hsla.indexOf(",") > -1 ? "," : " ";
  hsla = hsla.substr(5).split(")")[0].split(sep);
    
  // Strip the slash
  if (hsla.indexOf("/") > -1)
    {hsla.splice(3,1);}
    
  let h = hsla[0],
      s = hsla[1].substr(0,hsla[1].length - 1) / 100,
      l = hsla[2].substr(0,hsla[2].length - 1) / 100,
      a = hsla[3];

  return [h, s, l, a];
}