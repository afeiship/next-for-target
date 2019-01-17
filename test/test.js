var nx = require('next-js-core2');
require('../src/next-scanf');

test('nx.scanf', function() {
  var tmpl1 = 'test is %s';
  var tmpl2 = 'test is what %s, is your %s';
  var tmpl3 = 'test is what?';
  var tmpl4 = null;

  expect(nx.scanf(tmpl1, 'scanf')).toBe('test is scanf');
  expect(nx.scanf(tmpl2, 111, 222)).toBe('test is what 111, is your 222');
  expect(nx.scanf(tmpl3)).toBe('test is what?');
  expect(nx.scanf(tmpl4)).toBe(null);
});
