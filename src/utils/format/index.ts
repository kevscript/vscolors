import { ColorType } from '../getColorType';
import { formatHex } from './formatHex';
import { formatRgb } from './formatRgb';
import { formatRgba } from './formatRgba';

export type FormatedColorStringType = {
  type: "hex" | "hexa",
  value: string
};

export type FormatedColorArrayType = {
  type: "rgb" | "rgba" | "hsl" | "hsla",
  value: number[]
};

export function formatColor(colorType: ColorType) {

  switch (colorType.type) {

    case "rgb":
      return { 
        type: colorType.type, 
        value: formatRgb(colorType.value) 
      } as FormatedColorArrayType;
      break;

    // case "rgba":
    //   return { 
    //     type: colorType.type, 
    //     value: formatRgba(colorType.value) 
    //   } as FormatedColorArrayType;
    //   break;

    // case "hex":
    //   return { 
    //     type: colorType.type, 
    //     value: formatHex(colorType.value) 
    //   } as FormatedColorStringType;
    //   break;
  
    default:
      throw new Error('error from formatColor()');
      break;
  }

}