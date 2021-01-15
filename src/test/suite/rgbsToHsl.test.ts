import { expect } from 'chai';
import { rgbToHsl, rgbToHsla, rgbaToHsl, rgbaToHsla } from '../../utils/toHsl/rgbsToHsl';

describe('rgbToHsl()', () => {
  it('returns valid hsl value from rgb array input', () => {
    const rgbInput1 = [240,170,87];
    const rgbInput2 = [65,250,165];
    const hsl1 = rgbToHsl(rgbInput1);
    const hsl2 = rgbToHsl(rgbInput2);
    expect(hsl1).to.eql(`hsl(33, 84%, 64%)`);
    expect(hsl2).to.eql(`hsl(152, 95%, 62%)`);
  });
});

describe('rgbToHsla()', () => {
  it('returns valid hsla value from rgb array input', () => {
    const rgbInput1 = [240,170,87];
    const rgbInput2 = [65,250,165];
    const hsla1 = rgbToHsla(rgbInput1);
    const hsla2 = rgbToHsla(rgbInput2);
    expect(hsla1).to.eql(`hsla(33, 84%, 64%, 1)`);
    expect(hsla2).to.eql(`hsla(152, 95%, 62%, 1)`);
  });
});

describe('rgbaToHsla()', () => {
  it('returns valid hsla value from rgb array input', () => {
    const rgbaInput1 = [240,170,87,0.8];
    const rgbaInput2 = [65,250,165,0.5];
    const hsla1 = rgbaToHsla(rgbaInput1);
    const hsla2 = rgbaToHsla(rgbaInput2);
    expect(hsla1).to.eql(`hsla(33, 84%, 64%, 0.8)`);
    expect(hsla2).to.eql(`hsla(152, 95%, 62%, 0.5)`);
  });
});

describe('rgbaToHsl()', () => {
  it('returns valid hsl value from rgba with alpha = 1', () => {
    const rgbaInput1 = [240,170,87,1];
    const rgbaInput2 = [65,250,165,1];
    const hsl1 = rgbaToHsl(rgbaInput1);
    const hsl2 = rgbaToHsl(rgbaInput2);
    expect(hsl1).to.eql(`hsl(33, 84%, 64%)`);
    expect(hsl2).to.eql(`hsl(152, 95%, 62%)`);
  });

  it('returns valid hsla value from rgba with custom alpha value', () => {
    const rgbaInput1 = [240,170,87,0.5];
    const rgbaInput2 = [65,250,165,0.8];
    const hsla1 = rgbaToHsl(rgbaInput1);
    const hsla2 = rgbaToHsl(rgbaInput2);
    expect(hsla1).to.eql(`hsla(33, 84%, 64%, 0.5)`);
    expect(hsla2).to.eql(`hsla(152, 95%, 62%, 0.8)`);
  });
}); 