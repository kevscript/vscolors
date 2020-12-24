import { rgbToHex } from './rgbToHex';
import { FormatedColorStringType, FormatedColorArrayType } from '../format';

export function toHex(formatedColor: FormatedColorStringType | FormatedColorArrayType) {

  switch (formatedColor.type) {
    case "rgb":
      return rgbToHex(formatedColor.value);
      break;
  
    default:
      throw new Error('error from toHex()');
      break;
  }

}