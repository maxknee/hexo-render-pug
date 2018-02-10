/* global hexo */
'use strict';

var pugRenderer = require('./lib/renderer');

var userConfig = {
  options: hexo.config.pug || {}
};

hexo.extend.renderer.register('pug', 'html', function(data, locals) {
  return pugRenderer(Object.assign(data, userConfig), locals);
}, true);
