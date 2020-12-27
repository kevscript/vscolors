import * as vscode from 'vscode';

import { FormatedColorStringType, FormatedColorArrayType } from '../format';
import { rgbToHex } from './rgbToHex';
import { hexToHex } from './hexToHex';
import { hslToHex } from './hslToHex';

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
      vscode.window.showErrorMessage(`Can't parse RGBA format to HEX. Needs HEXA (#rrggbbaa).`);
      throw new Error(`Can't parse RGBA format to HEX. Needs HEXA (#rrggbbaa).`);
      break;

    case "hsla":
      vscode.window.showErrorMessage(`Can't parse HSLA format to HEX. Needs HEXA (#rrggbbaa).`);
      throw new Error(`Can't parse HSLA format to HEX. Needs HEXA (#rrggbbaa).`);
      break;

    case "hexa":
      vscode.window.showErrorMessage(`Can't parse HEXA format back to HEX.`);
      throw new Error(`Can't parse HEXA format back to HEX.`);
      break;

    default:
      throw new Error('error from toHex()');
      break;
  }

}