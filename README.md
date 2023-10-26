# Dot Foods Brand Colors and Style Guide
The Dot Foods Style Guide is designed to be shared across teams to ensure the proper use of branding colors and design patterns for all Dot Foods digital properties. 

By having a collective repository published as an npm package, we are able to share foundational design information and utilities for development teams to access and contribute.
## Installation & Setup
#### Install node package
``` js
npm i dotfoods-style
```
## How to use
#### Import partials into your project files
At the most basic level you can simply import .scss (or .less) files into your Vue, React, or Angular components.
``` scss
@import '../../node_modules/dotfoods-style/scss/colors';
// or
@import '../../node_modules/dotfoods-style/less/colors';
```
or accessing colors from a JavaScript object
``` js
import { colors } from '../../node_modules/dotfoods-style/js/colors';
```
## CSS Custom Properties
`colors.css` is an alternate approach that leverages a collection of CSS custom properties to inform SCSS variables, Less variables, and JS objects for use in your project. This file can be overriden or replaced if alternative themeing is necessary without having to update your source code.

The primary benefit to using CSS custom properties is having the ability to change variable value in code.

``` js
// Set property value
document.documentElement.setProperty('--color-brand-primary', '#0082ca');

// Get property value
document.documentElement.getPropertyValue('--color-brand-primary');
```

To implement this approach, simply copy the css file from the `node_modules` folder to one of your output directories using any front-end build process.

#### Webpack Example
``` js
const webpack = require("webpack")
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: "development",
    plugins: [
        new CopyPlugin([
            { 
                from: path.resolve(__dirname, '../../node_modules/dotfoods-style/css/colors.css'),
                to: path.resolve('./css/colors.css')
            }
        ]),
    ],
};
```
And then link to the file in your index.html or template layout files
``` html
<!-- HTML -->
<head>
    ...
    <link href="/css/colors.css" rel="stylesheet" type="text/css">
</head>
```
Linking to colors.css adds CSS custom properties to the root element
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
CSS custom properties are referenced by their coresponding SCSS/Less variables
``` scss 
/* SCSS Variables */
$brand-primary: var(--color-brand-primary);
$brand-primary-light: var(--color-brand-primary-light);
$brand-primary-dark: var(--color-brand-primary-dark);
$brand-accent: var(--color-brand-accent);
$brand-accent-dark: var(--color-brand-accent-dark);
...
```
``` less
/* Less Variables */
@brand-primary: var(--color-brand-primary);
@brand-primary-light: var(--color-brand-primary-light);
@brand-primary-dark: var(--color-brand-primary-dark);
@brand-accent: var(--color-brand-accent);
@brand-accent-dark: var(--color-brand-accent-dark);
...
```
CSS Custom Properties can also be accessed by the colors JavaScript object in code
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
#### Import CSS Custom Properties partials into your project files
``` scss
@import '../../node_modules/dotfoods-style/scss/css-colors';
// or
@import '../../node_modules/dotfoods-style/less/css-colors';
```
Or access colors values from the JavaScript object
``` js
import { colors } from '../../node_modules/dotfoods-style/js/css-colors';
```