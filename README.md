# Dot Foods Brand Colors and Style Guide
The Dot Foods Style Guide is designed to be shared across teams to ensure the proper use of branding colors and design patterns for all Dot Foods digital properties. 

By having a collective repository published as an npm package, we are able to share foundational design information and utilities for development teams to access and contribute.
## Installation & Setup
#### Install node package
``` js
npm i dotfoods-style
```
#### Copy brand.css file to your output directory
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
## Brand.css
Brand.css is a collection of CSS custom properties that is used to inform Scss variables and JS objects for use in your project. This file can be overriden or replaced if alternative themeing is necessary without having to update your source code.    
``` html
<!-- HTML -->
<head>
    ...
    <link href="/css/brand.css" rel="stylesheet" type="text/css">
</head>
```
Linking to brand.css adds  CSS custom properties to the root element
``` css
/* CSS Custom Properties */
:root {
    --color-brand-primary: #0082ca;
    --color-brand-primary-light: #1b7fcc;
    --color-brand-primary-dark: #0065a4;
    --color-brand-accent: #faba11;
    --color-brand-accent-dark: #eaaa00;
    ...
}
```
CSS custom properties are referenced in the coresponding Scss variables
``` scss 
/* Scss Variables */
$brand-primary: var(--color-brand-primary);
$brand-primary-light: var(--color-brand-primary-light);
$brand-primary-dark: var(--color-brand-primary-dark);
$brand-accent: var(--color-brand-accent);
$brand-accent-dark: var(--color-brand-accent-dark);
...
```
And can also be accessed using JavaScript in code
``` js
// JavaScript Object
const styles = getComputedStyle(document.documentElement);
const colors = {
    /* Brand Primary Variables */
    brandPrimary: styles.getPropertyValue('--color-brand-primary'),
    brandPrimaryLight: styles.getPropertyValue('--color-brand-primary-light'),
    brandPrimaryDark: styles.getPropertyValue('--color-brand-primary-dark)'),
    brandAccent: styles.getPropertyValue('--color-brand-accent'),
    brandAccentDark: styles.getPropertyValue('--color-brand-accent-dark')
    ...
}
```
## How to use
#### Import partials into your project files
``` scss
@import '../../node_modules/dotfoods-style/design/colors';
```
or 
``` js
import { colors } from '../../node_modules/dotfoods-style';
```