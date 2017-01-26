'use strict';

var pug = require('pug');
var extend = require('util')._extend;

function pugCompile(data) {
  return pug.compile(data.text, extend({
    filename: data.path
  }, data.options));
}

function pugRenderer(data, locals) {
  return pugCompile(data)(locals);
}

pugRenderer.compile = pugCompile;

module.exports = pugRenderer;
