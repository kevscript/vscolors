import { expect } from 'chai';
import { hexToHex, hexToHexa, hexaToHex, hexaToHexa } from '../../utils/toHex/hexsToHex';

describe('hexToHex()', () => {
  it('returns valid hex on hex input', () => {
    const hexInput = '#333';
    const hex = hexToHex(hexInput);
    expect(hex).to.eql(hexInput);
  });
});

describe('hexToHexa()', () => {
  it('returns valid hexa on short hex input', () => {
    const hexInput = '#333';
    const hex = hexToHexa(hexInput);
    expect(hex).to.eql('#333f');
  });

  it('returns valid hexa on long hex input', () => {
    const hexInput = '#333333';
    const hex = hexToHexa(hexInput);
    expect(hex).to.eql('#333333ff');
  });

  it('throws Error on any hex-like input with length other than 4 or 7', () => {
    const hexInput = '#33333';
    expect(() => hexToHexa(hexInput)).to.throw(Error);
  });
});

describe('hexaToHexa()', () => {
  it('returns valid hexa on hexa input', () => {
    const hexaInput = '#f333';
    const hexa = hexaToHexa(hexaInput);
    expect(hexa).to.eql(hexa);
  });
});

describe('hexaToHex()', () => {
  it('returns valid hex on long hexa with full opacity', () => {
    const hexaInput = '#333333ff';
    const hexa = hexaToHex(hexaInput);
    expect(hexa).to.eql('#333333');
  });

  it('returns valid hex on short hexa with full opacity', () => {
    const hexaInput = '#333f';
    const hexa = hexaToHex(hexaInput);
    expect(hexa).to.eql('#333');
  });

  it('throws Error if hexa inputs have custom opacity', () => {
    const hexa90 = '#333333e6';
    expect(() => hexaToHex(hexa90)).to.throw(Error);

    const shortHexa90 = '#333e';
    expect(() => hexaToHex(shortHexa90)).to.throw(Error);
  });

  it('throws Error when hexa-like input is of length other than 5 or 9', () => {
    const hexLike = '#3333f'; // length = 6
    expect(() => hexaToHex(hexLike)).to.throw(Error);
  });
});

