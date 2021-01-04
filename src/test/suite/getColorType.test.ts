import { expect } from 'chai';
import * as vscode from 'vscode';
import { getColorType } from '../../utils/getColorType';

describe('getColorType function', () => {
  vscode.window.showInformationMessage('Start tests for getColorType');

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
});