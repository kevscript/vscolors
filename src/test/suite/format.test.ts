import { expect } from 'chai';
import { formatHex, formatHexa } from '../../utils/format/formatHexs';
import { formatRgb, formatRgba } from '../../utils/format/formatRgbs';
import { formatHsl, formatHsla } from '../../utils/format/formatHsls';

describe ('HEX formatting functions', () => {
  it('formats valid hex input to hex string', () => {
    const hexInput = ' #333  ';
    const hex = formatHex(hexInput);
    expect(hex).to.eql('#333');
  });

  it('throws an Error on bad hex input', () => {
    const hexLikeInput = '#3333'; // 4 digits
    expect(() => formatHex(hexLikeInput)).to.throw(Error);
  });

  it('formats valid hexa input to hexa string', () => {
    const hexaInput = ' #333f  ';
    const hexa = formatHexa(hexaInput);
    expect(hexa).to.eql('#333f');
  });

  it('throws Error on bad hexa input', () => {
    const hexaLikeInput = '#333ff'; // 5 digits
    expect(() => formatHexa(hexaLikeInput)).to.throw(Error);
  });
});

describe('RGB formatting functions', () => {
  it('formats rgb input to rgb array [r, g, b]', () => {
    const rgbInput = ' rgb(255,255, 0) ';
    const rgb = formatRgb(rgbInput);
    expect(rgb).to.eql([255, 255, 0]);
  });

  it('formats rgba input to rgba array [r, g, b, a]', () => {
    const rgbaInput = ' rgba(255,255, 0, 0.8) ';
    const rgba = formatRgba(rgbaInput);
    expect(rgba).to.eql([255, 255, 0, 0.8]);
  });

  it('throws an Error when the rgb values of an RGB are not in range of [0-255]', () => {
    const rgbInput1 = 'rgba(256,255, 0)';
    const rgbInput2 = 'rgba(255,-80, 0)';
    expect(() => formatRgba(rgbInput1)).to.throw(Error);
    expect(() => formatRgba(rgbInput2)).to.throw(Error);
  });

  it('throws an Error when the rgb values of an RGBA are not in range of [0-255]', () => {
    const rgbaInput1 = 'rgba(256,255, 0, 0.8)';
    const rgbaInput2 = 'rgba(255,-80, 0, 0.8)';
    expect(() => formatRgba(rgbaInput1)).to.throw(Error);
    expect(() => formatRgba(rgbaInput2)).to.throw(Error);
  });

  it('formats the opacity to 1 if the alpha input is higher.', () => {
    const rgbaInput = 'rgba(255,255, 0, 1.8)';
    const rgba = formatRgba(rgbaInput);
    expect(rgba).to.eql([255, 255, 0, 1]);
  });

  it('formats the opacity to 0 if the alpha input is lower.', () => {
    const rgbaInput = 'rgba(255,255, 0, -1)';
    const rgba = formatRgba(rgbaInput);
    expect(rgba).to.eql([255, 255, 0, 0]);
  });
});

describe('HSL formatting functions', () => {
  it('formats hsl input to hsl array [h, s, l]', () => {
    const hslInput = ' hsl(260, 85%, 65%)';
    const hsl = formatHsl(hslInput);
    expect(hsl).to.eql([260, 85, 65]);
  });

  it('formats hsl input with "deg" labels to hsl array [h, s, l]', () => {
    const hslInput = ' hsl(260deg, 85%, 65%)';
    const hsl = formatHsl(hslInput);
    expect(hsl).to.eql([260, 85, 65]);
  });

  it('formats hsl input with "rad" labels to hsl array [h, s, l]', () => {
    const hslInput = ' hsl(4.53rad, 85%, 65d%)';
    const hsl = formatHsl(hslInput);
    expect(hsl).to.eql([260, 85, 65]);
  });

  it('formats hsl input with "turn" labels to hsl array [h, s, l]', () => {
    const hslInput = ' hsl(0.8turn, 85%, 65d%)';
    const hsl = formatHsl(hslInput);
    expect(hsl).to.eql([288, 85, 65]);
  });

  it('formats hsla input to hsla array [h, s, l, a]', () => {
    const hslaInput = ' hsla(260,85%, 65%, 0.6)';
    const hsla = formatHsla(hslaInput);
    expect(hsla).to.eql([260, 85, 65, 0.6]);
  });

  it('formats hsla input with "deg" labels to hsla array [h, s, l, a]', () => {
    const hslaInput = ' hsla(260, 85deg, 65deg, 0.6)';
    const hsla = formatHsla(hslaInput);
    expect(hsla).to.eql([260, 85, 65, 0.6]);
  });
});