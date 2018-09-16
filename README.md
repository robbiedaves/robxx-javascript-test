# robxx javascript test

This is test some features of the js starter kit

## jQury
I added some jQuery code and tested with the dev server and production server using the following commands:
```
npm start
npm run build
```

To use jQuery I had to do the following:

### Install jQuery using npm
in the terminate, type
```
npm install jquery
```
This will add jQuery into the package.json file

### Add jQuery to the vendor.js file
add the following to the vendor.js file so webpack will bundle jQuery into the vendor.js bundle
```
import {$,jQuery} from 'jquery';
```

### Add dependency into the webpack config files (both dev and production versions)
Add the following into the plugins section to provide the jQuery plugin
```
        // To use JQuery
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery'
        }),
```

### Add jQuery to the ESLINT
Add the following to the "env" section of the .eslintrc.json
```
    "jquery": true
```
Note: The application worked but eslint reported errors in the terminal, saying $ was not found.

I found the answer here:
https://stackoverflow.com/questions/39510736/eslint-dollar-is-not-defined-no-undef

