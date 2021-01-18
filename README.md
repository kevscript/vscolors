## Features

VSColors is a VS Code extension helping you with color type conversions. It handles basic HEX, RGB and HSL colors, alongside their Alpha formats for opacity.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

- `vscolors.color2Hex`: converts highlighted color to a HEX value
- `vscolors.color2Rgb`: converts highlighted color to an RGB value
- `vscolors.color2Hsl`: converts highlighted color to an HSL value

## Known Issues

Extension doesn't handle implicit alpha values.
For example `rgba(255, 255, 0)` will yield an error as RGBA format expects an alpha value.
