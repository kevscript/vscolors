import { FormatedColorArrayType, FormatedColorStringType } from '../format';
import { hexToHsl, hexaToHsl } from './hexsToHsl';
import { hslToHsl, hslaToHsl } from './hslsToHsl';
import { rgbToHsl , rgbaToHsl } from './rgbsToHsl';


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