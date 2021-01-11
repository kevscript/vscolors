import { expect } from 'chai';
import { hslToHex, hslToHexa, hslaToHex, hslaToHexa } from '../../utils/toHex/hslsToHex';

describe('hslToHex()', () => {
  it('parses valid hsl to correct hex', () => {
    const hsl1 = [0,100,50];
    const hsl2 = [190,65,40];

    const hex1 = hslToHex(hsl1);
    const hex2 = hslToHex(hsl2);

    expect(hex1).to.eql('#ff0000');
    expect(hex2).to.eql('#2492a8');
  });
});

describe('hslToHexa()', () => {
  it('parses valid hsl to correct hexa', () => {
    const hsl1 = [0,100,50];
    const hsl2 = [190,65,40];

    const hexa1 = hslToHexa(hsl1);
    const hexa2 = hslToHexa(hsl2);

    expect(hexa1).to.eql('#ff0000ff');
    expect(hexa2).to.eql('#2492a8ff');
  });
});

describe('hslaToHexa()', () => {
  it('parses valid hsla to correct hexa', () => {
    const hsla1 = [0,100,50, 0.8];
    const hsla2 = [190,65,40, 0.5];

    const hexa1 = hslaToHexa(hsla1);
    const hexa2 = hslaToHexa(hsla2);

    expect(hexa1).to.eql('#ff0000cc');
    expect(hexa2).to.eql('#2492a880');
  });
});

describe('hslaToHex()', () => {
  it('parses valid hsla with full opacity to hex', () => {
    const hsla = [0,100,50, 1];
    const hex = hslaToHex(hsla);
    expect(hex).to.eql('#ff0000');
  });

  it('parses valid hsla with custom opacity to hexa', () => {
    const hsla = [0,100,50, 0.8];
    const hexa = hslaToHex(hsla);
    expect(hexa).to.eql('#ff0000cc');
  });
});