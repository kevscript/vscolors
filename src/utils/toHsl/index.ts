import * as vscode from 'vscode';
import { FormatedColorArrayType, FormatedColorStringType } from '../format';
import { hexaToHsl } from './hexaToHsl';
import { hexToHsl } from './hexToHsl';
import { hslaToHsl } from './hslaToHsl';
import { hslToHsl } from './hslToHsl';
import { rgbaToHsl } from './rgbaToHsl';
import { rgbToHsl } from './rgbToHsl';

export function toHsl(formatedColor: FormatedColorArrayType | FormatedColorStringType) {
  switch(formatedColor.type) {
    case "hsl":
      return hslToHsl(formatedColor.value);
      break;

    case "hex":
      return hexToHsl(formatedColor.value);
      break;

    case "rgb":
      return rgbToHsl(formatedColor.value);
      break;

    case "hexa":
      return hexaToHsl(formatedColor.value);
      break;

    case "rgba":
      return rgbaToHsl(formatedColor.value);
      break;
    
    case "hsla":
      return hslaToHsl(formatedColor.value);
      break;

    default:
      throw new Error('error from toHsl()');
      break;
  }
}