import { expect } from 'chai';
import { rgbToRgb, rgbaToRgb, rgbaToRgba, rgbToRgba } from '../../utils/toRgb/rgbsToRgb';

describe('rgbToRgb()', () => {
  it('returns the valid rgb from rgb array input', () => {
    const rgbInput = [250,180,50];
    const rgb = rgbToRgb(rgbInput);
    expect(rgb).to.eql(`rgb(250, 180, 50)`);
  });
});

describe('rgbaToRgba()', () => {
  it('returns the valid rgba from rgba array input', () => {
    const rgbaInput = [250,180,50,0.8];
    const rgba = rgbaToRgba(rgbaInput);
    expect(rgba).to.eql(`rgba(250, 180, 50, 0.8)`);
  });
});

describe('rgbToRgba()', () => {
  it('returns the valid rgba from rgb array input', () => {
    const rgbInput = [250,180,50];
    const rgba = rgbToRgba(rgbInput);
    expect(rgba).to.eql(`rgba(250, 180, 50, 1)`);
  });
});

describe('rgbaToRgb()', () => {
  it('should return an rgb when the rgba alpha value is 1', () => {
    const rgbaInput = [250,180,50,1];
    const rgb = rgbaToRgb(rgbaInput);
    expect(rgb).to.eql(`rgb(250, 180, 50)`);
  });

  it('should return an rgba when the rgba alpha value is not 1', () => {
    const rgbaInput = [250,180,50,0.8];
    const rgba = rgbaToRgb(rgbaInput);
    expect(rgba).to.eql(`rgba(250, 180, 50, 0.8)`);
  });
});