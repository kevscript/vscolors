import { expect } from 'chai';
import { hexToRgb, hexToRgba, hexaToRgb, hexaToRgba } from '../../utils/toRgb/hexsToRgb';

describe('hexToRgb()', () => {
  it('returns valid rgb from hex input', () => {
    const hexInput1 = '#03fca1';
    const hexInput2 = '#6f03fc';
    const rgb1 = hexToRgb(hexInput1);
    const rgb2 = hexToRgb(hexInput2);
    expect(rgb1).to.eql(`rgb(3, 252, 161)`);
    expect(rgb2).to.eql(`rgb(111, 3, 252)`);
  });

  it('returns valid rgb from mini hex input', () => {
    const hexInput1 = '#99f';
    const hexInput2 = '#ff0';
    const rgb1 = hexToRgb(hexInput1);
    const rgb2 = hexToRgb(hexInput2);
    expect(rgb1).to.eql(`rgb(153, 153, 255)`);
    expect(rgb2).to.eql(`rgb(255, 255, 0)`);
  });
});

describe('hexToRgba()', () => {
  it('returns valid rgba from hex input', () => {
    const hexInput1 = '#03fca1';
    const hexInput2 = '#6f03fc';
    const rgba1 = hexToRgba(hexInput1);
    const rgba2 = hexToRgba(hexInput2);
    expect(rgba1).to.eql(`rgba(3, 252, 161, 1)`);
    expect(rgba2).to.eql(`rgba(111, 3, 252, 1)`);
  });

  it('returns valid rgba from mini hex input', () => {
    const hexInput1 = '#99f';
    const hexInput2 = '#ff0';
    const rgba1 = hexToRgba(hexInput1);
    const rgba2 = hexToRgba(hexInput2);
    expect(rgba1).to.eql(`rgba(153, 153, 255, 1)`);
    expect(rgba2).to.eql(`rgba(255, 255, 0, 1)`);
  });
});

describe('hexaToRgba()', () => {
  it('returns valid rgba from hexa input', () => {
    const hexaInput1 = '#ffff00ff';
    const hexaInput2 = '#6f03fc80';
    const rgba1 = hexaToRgba(hexaInput1);
    const rgba2 = hexaToRgba(hexaInput2);
    expect(rgba1).to.eql(`rgba(255, 255, 0, 1)`);
    expect(rgba2).to.eql(`rgba(111, 3, 252, 0.5)`);
  });

  it('returns valid rgba from mini hexa input', () => {
    const hexaInput1 = '#99ff';
    const hexaInput2 = '#ff0f';
    const rgba1 = hexaToRgba(hexaInput1);
    const rgba2 = hexaToRgba(hexaInput2);
    expect(rgba1).to.eql(`rgba(153, 153, 255, 1)`);
    expect(rgba2).to.eql(`rgba(255, 255, 0, 1)`);
  });
});

describe('hexaToRgb()', () => {
  it('returns valid rgb from hexa input with alpha = 1 (ff)', () => {
    const hexaInput1 = '#ffff00ff';
    const rgb1 = hexaToRgb(hexaInput1);
    expect(rgb1).to.eql(`rgb(255, 255, 0)`);
  });

  it('returns valid rgba from hexa input with custom alpha value', () => {
    const hexaInput1 = '#ffff0080';
    const rgba1 = hexaToRgb(hexaInput1);
    expect(rgba1).to.eql(`rgba(255, 255, 0, 0.5)`);
  });

  it('returns valid rgb from mini hexa input with alpha = 1 (f)', () => {
    const hexaInput1 = '#ff0f';
    const rgb1 = hexaToRgb(hexaInput1);
    expect(rgb1).to.eql(`rgb(255, 255, 0)`);
  });
});