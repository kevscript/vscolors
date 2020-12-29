import * as vscode from 'vscode';

import { FormatedColorStringType, FormatedColorArrayType } from '../format';
import { rgbToHex } from './rgbToHex';
import { hexToHex } from './hexToHex';
import { hslToHex } from './hslToHex';
import { rgbaToHex } from './rgbaToHex';
import { hslaToHex } from './hslaToHex';
import { hexaToHex } from './hexaToHex';

export function toHex(formatedColor: FormatedColorStringType | FormatedColorArrayType) {
  switch (formatedColor.type) {
    case "hex":
      return hexToHex(formatedColor.value);
      break;
      
    case "rgb":
      return rgbToHex(formatedColor.value);
      break;

    case "hsl":
      return hslToHex(formatedColor.value);
      break;
  
    case "rgba":
      return rgbaToHex(formatedColor.value);
      break;

    case "hsla":
      return hslaToHex(formatedColor.value);
      break;

    case "hexa":
      return hexaToHex(formatedColor.value);
      break;

    default:
      throw new Error('error from toHex()');
      break;
  }

}