import * as vscode from 'vscode';
import { FormatedColorArrayType, FormatedColorStringType } from '../format';
import { hexToRgb } from './hexToRgb';
import { hslToRgb } from './hslToRgb';
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
      vscode.window.showErrorMessage(`Can't parse HEXA format to RGB because of opacity values.`);
      throw new Error(`Can't parse HEXA format to RGB because of opacity values.`);
      break;

    case "rgba":
      vscode.window.showErrorMessage(`Can't parse RGBA format to RGB because of opacity values.`);
      throw new Error(`Can't parse RGBA format to RGB because of opacity values.`);
      break;
  
    case "hsla":
      vscode.window.showErrorMessage(`Can't parse HSLA format to RGB because of opacity values.`);
      throw new Error(`Can't parse HSLA format to RGB because of opacity values.`);
      break;
  
    default:
      throw new Error('error from toRgb()');
      break;
  }
}