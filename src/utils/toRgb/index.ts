import * as vscode from 'vscode';
import { FormatedColorArrayType, FormatedColorStringType } from '../format';
import { hexaToRgb } from './hexaToRgb';
import { hexToRgb } from './hexToRgb';
import { hslaToRgb } from './hslaToRgb';
import { hslToRgb } from './hslToRgb';
import { rgbaToRgb } from './rgbaToRgb';
import { rgbToRgb } from './rgbToRgb';

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
      throw new Error('error from toRgb()');
      break;
  }
}