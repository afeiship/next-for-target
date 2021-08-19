(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var FUNC = 'function';

  nx.mapTo = function (inSource, inTarget) {
    var target = inTarget || {};
    nx.forIn(inSource, function (key, value) {
      if (typeof target.set === FUNC) {
        target.set.call(target, key, value);
      } else {
        target[key] = value;
      }
    });
    return target;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.mapTo;
  }
})();
