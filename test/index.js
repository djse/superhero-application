/* eslint-disable */

const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM(``);
global.window = window;
global.document = window.document;

const native = window.FormData;
window.FormData = undefined;

require = require('esm')(module);
module.exports = require('./tests.js');
