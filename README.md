# hsl-to-hex-simple

Convert HSL colors to RGB colors in hex format.

## Install 

```sh
npm install --save @sunilsamuel/hsl-to-hex-simple
```
 
## API

```
require('hsl-to-hex') => Function
hsl(hue, saturation, luminosity)` => String
```

## Example

```js
var hsl = require('hsl-to-hex-simple')
var hue = 133
var saturation = 40
var luminosity = 60
var hex = hsl(hue, saturation, luminosity)
console.log(hex) // #70c282
```

## License

ISC