import * as vscode from 'vscode';
import { FormatedColorArrayType, FormatedColorStringType } from '../format';
import { hexToHsl } from './hexToHsl';
import { hslToHsl } from './hslToHsl';
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
      vscode.window.showErrorMessage(`Can't parse HEXA format to HSL because of opacity values.`);
      throw new Error(`Can't parse HSL format to RGB because of opacity values.`);
      break;

    case "rgba":
      vscode.window.showErrorMessage(`Can't parse RGBA format to HSL because of opacity values.`);
      throw new Error(`Can't parse RGBA format to HSL because of opacity values.`);
      break;
    
    case "hsla":
      vscode.window.showErrorMessage(`Can't parse HSLA format to HSL because of opacity values.`);
      throw new Error(`Can't parse HSLA format to HSL because of opacity values.`);
      break;

    default:
      throw new Error('error from toHsl()');
      break;
  }
}