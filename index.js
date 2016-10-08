/* global hexo */
'use strict';

hexo.extend.renderer.register('pug', 'html', require('./lib/renderer'), true);
