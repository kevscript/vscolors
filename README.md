## Features

VSColors is a VS Code extension helping you with color type conversions. It handles basic HEX, RGB and HSL colors, alongside their Alpha formats for opacity.

## How it Works

Highlight your color, and right-click it. You should see options to convert your colors in the navigation.

![how it works](https://media.giphy.com/media/5s8vrQ3IiZMvDAZNYk/giphy.gif)

## Extension Settings

This extension contributes the following settings:

- `vscolors.color2Hex`: converts highlighted color to a HEX value
- `vscolors.color2Rgb`: converts highlighted color to an RGB value
- `vscolors.color2Hsl`: converts highlighted color to an HSL value

## Additional Informations

Extension doesn't handle implicit alpha values.

For example `rgba(255, 255, 0)` will yield an error as RGBA format expects an alpha value.
