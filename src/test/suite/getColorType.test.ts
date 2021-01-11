import { expect } from 'chai';
import { getColorType } from '../../utils/getColorType';

describe('getColorType function', () => {
  it('recognizes HEX colors', () => {
    const hexInput = '#333333';
    const hexObject = getColorType(hexInput);

    const expectedHexObject = {
      type: "hex",
      value: hexInput
    };

    expect(hexObject).to.eql(expectedHexObject);
  });

  it('recognizes HEX-mini colors', () => {
    const hexInput = '#333';
    const hexObject = getColorType(hexInput);

    const expectedHexObject = {
      type: "hex",
      value: hexInput
    };

    expect(hexObject).to.eql(expectedHexObject);
  });

  it('recognizes HEXA colors', () => {
    const hexaInput = '#333333ff';
    const hexaObject = getColorType(hexaInput);

    const expectedHexaObject = {
      type: "hexa",
      value: hexaInput
    };

    expect(hexaObject).to.eql(expectedHexaObject);
  });

  it('recognizes HEXA-mini colors', () => {
    const hexaInput = '#333f';
    const hexaObject = getColorType(hexaInput);

    const expectedHexaObject = {
      type: "hexa",
      value: hexaInput
    };

    expect(hexaObject).to.eql(expectedHexaObject);
  });

  it('recognizes RGB colors', () => {
    const rgbInput = 'rgb(255,255,0)';
    const rgbObject = getColorType(rgbInput);

    const expectedRgbObject = {
      type: "rgb",
      value: rgbInput
    };

    expect(rgbObject).to.eql(expectedRgbObject);
  });

  it('recognizes RGBA colors', () => {
    const rgbaInput = 'rgba(255,255,0, 0.8)';
    const rgbaObject = getColorType(rgbaInput);

    const expectedRgbaObject = {
      type: "rgba",
      value: rgbaInput
    };

    expect(rgbaObject).to.eql(expectedRgbaObject);
  });

  it('recognizes HSL colors', () => {
    const hslInput = 'hsl(190, 65%, 58%)';
    const hslObject = getColorType(hslInput);

    const expectedHslObject = {
      type: "hsl",
      value: hslInput
    };

    expect(hslObject).to.eql(expectedHslObject);
  });

  it('recognizes HSLA colors', () => {
    const hslaInput = 'hsla(190, 65%, 58%, 0.8)';
    const hslaObject = getColorType(hslaInput);

    const expectedHslaObject = {
      type: "hsla",
      value: hslaInput
    };

    expect(hslaObject).to.eql(expectedHslaObject);
  });

  it('can parse unformatted inputs with unnecessary spaces', () => {
    const unformattedHex = '   #333333 ';
    const hexObject = getColorType(unformattedHex);
    expect(hexObject.type).to.eql("hex");

    const unformattedRgb = ' rgb(255 , 255 ,0 ) ';
    const rgbObject = getColorType(unformattedRgb);
    expect(rgbObject.type).to.eql("rgb");

    const unformattedRgba = ' rgba(255 , 255 ,0, 0.8 ) ';
    const rgbaObject = getColorType(unformattedRgba);
    expect(rgbaObject.type).to.eql("rgba");

    const unformattedHsl = ' hsl( 190 , 30%, 25% ) ';
    const hslObject = getColorType(unformattedHsl);
    expect(hslObject.type).to.eql("hsl");

    const unformattedHsla = ' hsla( 190 , 30%, 25% ,0.8 ) ';
    const hslaObject = getColorType(unformattedHsla);
    expect(hslaObject.type).to.eql("hsla");
  });

  it("returns Errors when can't recognize inputs", () => {
    const hex5Digits = '#33333';
    expect(() => getColorType(hex5Digits)).to.throw(Error);

    const hexSpacedOut = '#333 333';
    expect(() => getColorType(hexSpacedOut)).to.throw(Error);

    const hexSpacedOutAndUntrimed = '  #3333 3';
    expect(() => getColorType(hexSpacedOutAndUntrimed)).to.throw(Error);

    const rgbLackingB = 'rg(255,255,0)';
    expect(() => getColorType(rgbLackingB)).to.throw(Error);

    const hslWithoutPerc = 'hsl(190,50,50%)';
    expect(() => getColorType(hslWithoutPerc)).to.throw(Error);

    const hslaWithoutAlpha = 'hsla(190,50%,50%)';
    expect(() => getColorType(hslaWithoutAlpha)).to.throw(Error);

    const rgbaWithoutAlpha = 'rgba(255,255,0)';
    expect(() => getColorType(rgbaWithoutAlpha)).to.throw(Error);
  });
});