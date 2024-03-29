# $USD Exchange Rates

###  A website for determining exchange rates between the U.S Dollar and several foreign currencies.

### By: Jake Elsberry

## Technologies Used

* HTML
* CSS
* JavaScript
* Bootstrap - v5.3.1
* Node.js - v18.17.1
* Node Package Manager - v9.8.1
* Webpack - v5.88.2
* Babel - v7.22.11
* ESLint - v8.48.0

#### Plug-Ins, Loaders

 * clean-webpack-plugin: "4.0.0"
 * css-loader: "6.8.1"
 * eslint-webpack-plugin: "4.0.1"
 * html-webpack-plugin: "5.5.3"
 * webpack-cli: "5.1.4"
 * style-loader: "3.3.3"
 * webpack-cli: "5.1.4"
 * webpack-dev-server: "4.15.1"
 * babel/plugin-transform-modules-commonjs: "7.22.11"
 * html-loader: "4.2.0"

## Description
A website for determining exchange rates between the U.S Dollar and the following currencies: Australian Dollar, Koruna/Crown, Euro, Pound Sterling, Indian Rupee, Lira, Kina, Riyal, and Manat.
## Setup/Installation Requirements
* Go to the following link and make an account, [Exchange Rate API](https://www.exchangerate-api.com/).
* On the dashboard of [Exchange Rate API](https://www.exchangerate-api.com/), locate API key which is found under the 'API Keys' tab.
* From your terminal, navigate to your desktop directory and use command `git clone https://github.com/Schmelzberry/currency-rates.git`
* In root of project folder, create a .env file to store your API key safely.
* Within .env, type the following line into the top of the file `API_KEY=[your api key]`
*NOTE* - Do not include '[ ]' when pasting your key into line above.
* Install all projects packages with `$ npm install`.
* Build the project using webpack with `$ npm run build`
* Start a development server to view project in browser with `$ npm run start`
* Lint JS files in the src folder with `$ npm run lint`

## Known Bugs

* No known bugs

## License

MIT License

Copyright (c) [2023] Jake Elsberry

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.