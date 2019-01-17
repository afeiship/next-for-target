(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var REPLACER_RE = /%s/g;

  // thanks to: https://github.com/zertosh/invariant/blob/master/invariant.js

  nx.scanf = function(inTemplate, a, b, c, d, e, f) {
    var args = [a, b, c, d, e, f];
    var index = 0;
    if (!inTemplate || inTemplate.indexOf('%s') === -1) return inTemplate;
    return inTemplate.replace(REPLACER_RE, function() {
      return args[index++];
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.scanf;
  }
})();
