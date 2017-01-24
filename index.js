/* global hexo */
'use strict';

var pugRenderer = require('./lib/renderer');
var extend = require('util')._extend;

var userConfig = {
    options: hexo.theme.config.pug || {}
};

console.log('hexo object lolo', hexo.theme);

hexo.extend.renderer.register('pug', 'html', function(data) {
    return pugRenderer(extend(data, userConfig));
}, true);