import { expect } from 'chai';
import { hslaToRgb, hslToRgb, hslaToRgba, hslToRgba } from '../../utils/toRgb/hslsToRgb';

describe('hslToRgb()', () => {
  it('returns a valid rgb from hsl array input', () => {
    const hslInput1 = [260,50,80];
    const hslInput2 = [54,68,49];
    const rgb1 = hslToRgb(hslInput1);
    const rgb2 = hslToRgb(hslInput2);
    expect(rgb1).to.eql(`rgb(195, 179, 230)`);
    expect(rgb2).to.eql(`rgb(210, 193, 40)`);
  });
});

describe('hslaToRgba()', () => {
  it('returns a valid rgba from hsla array input', () => {
    const hslaInput1 = [260,50,80,0.8];
    const hslaInput2 = [54,68,49,0.5];
    const rgba1 = hslaToRgba(hslaInput1);
    const rgba2 = hslaToRgba(hslaInput2);
    expect(rgba1).to.eql(`rgba(195, 179, 230, 0.8)`);
    expect(rgba2).to.eql(`rgba(210, 193, 40, 0.5)`);
  });
});

describe('hslToRgba()', () => {
  it('returns a valid rgb from hsl array input', () => {
    const hslInput1 = [260,50,80];
    const hslInput2 = [54,68,49];
    const rgba1 = hslToRgba(hslInput1);
    const rgba2 = hslToRgba(hslInput2);
    expect(rgba1).to.eql(`rgba(195, 179, 230, 1)`);
    expect(rgba2).to.eql(`rgba(210, 193, 40, 1)`);
  });
});


describe('hslaToRgb()', () => {
  it('returns a valid rgb from hsl with alpha = 1', () => {
    const hslaInput = [260,50,80,1];
    const rgb = hslaToRgb(hslaInput);
    expect(rgb).to.eql(`rgb(195, 179, 230)`);
  });

  it('returns a valid rgba from hsl with custom alpha value', () => {
    const hslaInput = [260,50,80,0.5];
    const rgba = hslaToRgb(hslaInput);
    expect(rgba).to.eql(`rgba(195, 179, 230, 0.5)`);
  });
});


