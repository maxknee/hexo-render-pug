'use strict';

var should = require('chai').should(); // eslint-disable-line

describe('hexo-renderer-pug', function() {
  var r = require('../lib/renderer');

  it('default', function() {
    var result = r({
      text: 'p Hello #{name}'
    }, {
      name: 'Hexo'
    });

    result.should.eql('<p>Hello Hexo</p>');
  });

  it('compile', function() {
    var render = r.compile({
      text: 'p Hello #{name}'
    });

    var result = render({
      name: 'Hexo'
    });

    result.should.eql('<p>Hello Hexo</p>');
  });
});
