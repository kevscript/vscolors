// HSL TO HSL
export function hslToHsl([h, s, l]: number[]) {
  return `hsl(${h}, ${s}%, ${l}%)`;
}

// HSL TO HSLA
export function hslToHsla([h, s, l]: number[]) {
  return `hsla(${h}, ${s}%, ${l}%, 1)`;
}

// HSLA TO HSLA
export function hslaToHsla([h, s, l, a]: number[]) {
  return `hsla(${h}, ${s}%, ${l}%, ${a})`;
}

// HSLA TO HSL
export function hslaToHsl([h, s, l, a]: number[]) {
  if (a === 1) {
    return hslToHsl([h, s, l]);
  } else if (a < 1) {
    return hslaToHsla([h, s, l, a]);
  } else {
    throw new Error('error in hslaToHsl()');
  }
}