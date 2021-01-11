import { expect } from 'chai';
import { rgbToHex, rgbToHexa, rgbaToHex, rgbaToHexa } from '../../utils/toHex/rgbsToHex';

describe('rgbToHex()', () => {
  it('parses valid rgb to correct hex', () => {
    const rgb1 = [50,168,82];
    const rgb2 = [60,50,168];
  
    const hex1 = rgbToHex(rgb1);
    const hex2 = rgbToHex(rgb2);
  
    expect(hex1).to.eql('#32a852');
    expect(hex2).to.eql('#3c32a8');
  });
});

describe('rgbToHexa()', () => {
  it('parses valid rgb to correct hexa', () => {
    const rgb1 = [50,168,82];
    const rgb2 = [60,50,168];
  
    const hexa1 = rgbToHexa(rgb1);
    const hexa2 = rgbToHexa(rgb2);
  
    expect(hexa1).to.eql('#32a852ff');
    expect(hexa2).to.eql('#3c32a8ff');
  });
});

describe('rgbaToHexa()', () => {
  it('parses valid rgba to correct hexa', () => {
    const rgba1 = [50,168,82,0.8];
    const rgba2 = [60,50,168,0.5];
      
    const hexa1 = rgbaToHexa(rgba1);
    const hexa2 = rgbaToHexa(rgba2);

    expect(hexa1).to.eql('#32a852cc');
    expect(hexa2).to.eql('#3c32a880');
  });
});

describe('rgbaToHex()', () => {
  it('parses valid rgba with full opacity to hex', () => {
    const rgba = [50,168,82,1];
    const hex = rgbaToHex(rgba);
    expect(hex).to.eql('#32a852');
  });

  it('parses valid rgba with custom opacity to hexa', () => {
    const rgba = [50,168,82,0.8];
    const hexa = rgbaToHex(rgba);
    expect(hexa).to.eql('#32a852cc');
  });
});