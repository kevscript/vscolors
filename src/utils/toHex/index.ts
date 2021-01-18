import * as vscode from 'vscode';
import { FormatedColorStringType, FormatedColorArrayType } from '../format';
import { hexToHex, hexaToHex } from './hexsToHex';
import { rgbToHex, rgbaToHex } from './rgbsToHex';
import { hslToHex, hslaToHex } from './hslsToHex';

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
      vscode.window.showErrorMessage('error from toHex()');
      throw new Error('error from toHex()');
      break;
  }

}