'use strict';

var pug = require('pug');

function pugCompile(data) {
  return pug.compile(data.text, Object.assign({
    filename: data.path
  }, data.options));
}

function pugRenderer(data, locals) {
  return pugCompile(data)(locals);
}

pugRenderer.compile = pugCompile;

module.exports = pugRenderer;
