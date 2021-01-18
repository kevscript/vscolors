import * as vscode from 'vscode';
import { FormatedColorArrayType, FormatedColorStringType } from '../format';
import { hexToRgb, hexaToRgb } from './hexsToRgb';
import { hslToRgb, hslaToRgb } from './hslsToRgb';
import { rgbToRgb, rgbaToRgb } from './rgbsToRgb';

export function toRgb(formatedColor: FormatedColorStringType | FormatedColorArrayType) {
  switch (formatedColor.type) {
    case "rgb":
      return rgbToRgb(formatedColor.value);
      break;

    case "hex":
      return hexToRgb(formatedColor.value);
      break;

    case "hsl":
      return hslToRgb(formatedColor.value);
      break;

    case "hexa":
      return hexaToRgb(formatedColor.value);
      break;

    case "rgba":
      return rgbaToRgb(formatedColor.value);
      break;
  
    case "hsla":
      return hslaToRgb(formatedColor.value);
      break;
  
    default:
      vscode.window.showErrorMessage('error from toRgb()');
      throw new Error('error from toRgb()');
      break;
  }
}