import { expect } from 'chai';
import { hexToHsl, hexToHsla, hexaToHsl, hexaToHsla } from '../../utils/toHsl/hexsToHsl';

describe('hexToHsl()', () => {
  it('returns a valid hsl value from hex input', () => {
    const hexInput1 = '#41FAA5';
    const hexInput2 = '#654216';
    const hsl1 = hexToHsl(hexInput1);
    const hsl2 = hexToHsl(hexInput2);
    expect(hsl1).to.eql(`hsl(152, 95%, 62%)`);
    expect(hsl2).to.eql(`hsl(33, 64%, 24%)`);
  });

  it('returns a valid hsl value from mini hex input', () => {
    const hexInput1 = '#99f';
    const hexInput2 = '#ff0';
    const hsl1 = hexToHsl(hexInput1);
    const hsl2 = hexToHsl(hexInput2);
    expect(hsl1).to.eql(`hsl(240, 100%, 80%)`);
    expect(hsl2).to.eql(`hsl(60, 100%, 50%)`);
  });
});

describe('hexToHsla()', () => {
  it('returns a valid hsla value from hex input', () => {
    const hexInput1 = '#41FAA5';
    const hexInput2 = '#654216';
    const hsla1 = hexToHsla(hexInput1);
    const hsla2 = hexToHsla(hexInput2);
    expect(hsla1).to.eql(`hsla(152, 95%, 62%, 1)`);
    expect(hsla2).to.eql(`hsla(33, 64%, 24%, 1)`);
  });

  it('returns a valid hsla value from mini hex input', () => {
    const hexInput1 = '#99f';
    const hexInput2 = '#ff0';
    const hsla1 = hexToHsla(hexInput1);
    const hsla2 = hexToHsla(hexInput2);
    expect(hsla1).to.eql(`hsla(240, 100%, 80%, 1)`);
    expect(hsla2).to.eql(`hsla(60, 100%, 50%, 1)`);
  });
});

describe('hexaToHsla()', () => {
  it('returns a valid hsla value from hexa input', () => {
    const hexaInput1 = '#41FAA5cc';
    const hexaInput2 = '#65421680';
    const hsla1 = hexaToHsla(hexaInput1);
    const hsla2 = hexaToHsla(hexaInput2);
    expect(hsla1).to.eql(`hsla(152, 95%, 62%, 0.8)`);
    expect(hsla2).to.eql(`hsla(33, 64%, 24%, 0.5)`);
  });

  it('returns a valid hsla value from mini hexa input', () => {
    const hexaInput1 = '#99ff';
    const hexaInput2 = '#ff0f';
    const hsla1 = hexaToHsla(hexaInput1);
    const hsla2 = hexaToHsla(hexaInput2);
    expect(hsla1).to.eql(`hsla(240, 100%, 80%, 1)`);
    expect(hsla2).to.eql(`hsla(60, 100%, 50%, 1)`);
  });
});

describe('hexaToHsl()', () => {
  it('returns a valid hsl value from hexa with alpha = 1 (ff)', () => {
    const hexaInput1 = '#41FAA5ff';
    const hexaInput2 = '#654216ff';
    const hsl1 = hexaToHsl(hexaInput1);
    const hsl2 = hexaToHsl(hexaInput2);
    expect(hsl1).to.eql(`hsl(152, 95%, 62%)`);
    expect(hsl2).to.eql(`hsl(33, 64%, 24%)`);
  });

  it('returns a valid hsl value from mini hex with alpha = 1 (f)', () => {
    const hexaInput1 = '#99ff';
    const hexaInput2 = '#ff0f';
    const hsl1 = hexaToHsl(hexaInput1);
    const hsl2 = hexaToHsl(hexaInput2);
    expect(hsl1).to.eql(`hsl(240, 100%, 80%)`);
    expect(hsl2).to.eql(`hsl(60, 100%, 50%)`);
  });

  it('returns a valid hsla value from hexa with custom alpha value', () => {
    const hexaInput1 = '#41FAA5cc';
    const hexaInput2 = '#65421680';
    const hsla1 = hexaToHsl(hexaInput1);
    const hsla2 = hexaToHsl(hexaInput2);
    expect(hsla1).to.eql(`hsla(152, 95%, 62%, 0.8)`);
    expect(hsla2).to.eql(`hsla(33, 64%, 24%, 0.5)`);
  });

  it('throws an Error from mini hexa with different alpha than 1 (not f)', () => {
    const hexaInput1 = '#99fc';
    const hexaInput2 = '#ff08';
    expect(() => hexaToHsl(hexaInput1)).to.throw(Error);
    expect(() => hexaToHsl(hexaInput2)).to.throw(Error);
  });
});
