/* global hexo */
'use strict';

var pugRenderer = require('./lib/renderer');
var extend = require('util')._extend;

var userConfig = {
  options: hexo.config.pug || {}
};

hexo.extend.renderer.register('pug', 'html', function(data, locals) {
  return pugRenderer(extend(data, userConfig), locals);
}, true);
