import * as vscode from 'vscode';

export type RegexType = {
  type: string;
  regex: RegExp;
};

export type ColorType = {
  type: string,
  value: string
};

export function getColorType(clr: string) {
  const colorTypes: RegexType[] = [
    {
      type: "rgb",
      regex: /(rgb)\(\s?\d{1,3}%?\s?(\s?,\s?\d{1,3}%?){2}\s?\)/gi
    },
    {
      type: "rgba",
      regex: /(rgb)a\(\s?(\d{1,3}%?\s?,\s?){3}(1|0?\.\d+)\s?\)/gi
    },
    {
      type: "hsl",
      regex: /(hsl)\(\s?\d{1,3}%?\s?(\s?,\s?\d{1,3}%?){2}\s?\)/gi
    },
    {
      type: "hsla",
      regex: /(hsl)a\(\s?(\d{1,3}%?\s?,\s?){3}(1|0?\.\d+)\s?\)/gi
    },
    {
      type: "hexa",
      regex: /#([\da-f]{4}){1,2}/gi
    },
    {
      type: "hex",
      regex: /#([\da-f]{3}){1,2}/gi
    }
  ];

  const matchingType = colorTypes.find((type) => type.regex.test(clr) === true);
  if (!matchingType) {
    vscode.window.showErrorMessage(`Can't resolve color format of ${clr}`);
    throw new Error(`Can't resolve color format of ${clr}`);
  }

  const colorType: ColorType = {
    type: matchingType.type,
    value: clr
  };
  
  return colorType;
}