# Dot Foods Brand Colors and Style Guide
Brand Colors and Pattern Library

## How to use

### Install node package
``` js
npm i dotfoods-style
```
### Copy brand.css file to your output directory
``` js
const webpack = require("webpack")
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "development",
    plugins: [
        new CopyPlugin([
            { 
                from: path.resolve(__dirname, '../../node_modules/dotfoods-style/brand.css'),
                to: path.resolve('./css/brand.css')
            }
        ]),
    ],
};
```
### Link to Brand.css in your HTML layout
``` html
<head>
    ...
    <link href="/css/brand.css" rel="stylesheet" type="text/css">
</head>
```

### Import partials into your project files
``` scss
@import '../../node_modules/dotfoods-style/design/colors';
```
or 
``` js
import { colors } from '../../node_modules/dotfoods-style';
```


