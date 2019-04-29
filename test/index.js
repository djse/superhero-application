/* eslint-disable */

const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM(``);
global.window = window;
global.document = window.document;

global.formData = window.FormData;

require = require('esm')(module);
module.exports = require('./tests.js');
