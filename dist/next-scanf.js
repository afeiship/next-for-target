(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var REPLACER_RE = /%s/g;

  nx.scanf = function(inTemplate, a, b, c, d, e, f) {
    var args = [a, b, c, d, e, f];
    var index = 0;
    inTemplate.replace(REPLACER_RE, function() {
      return args[index++];
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.scanf;
  }
})();
