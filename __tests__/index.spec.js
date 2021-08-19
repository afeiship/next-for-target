(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.forTarget: target is pure object', function () {
      const obj = {
        name: 'afeiship',
        age: 18,
        email: 'email@example.com'
      };
      const ctx = {};
      const res = nx.forTarget(obj, ctx);
      expect(res).toEqual(obj);
    });

    test('target with set method', function () {
      const obj = {
        name: 'afeiship',
        age: 18,
        email: 'email@example.com'
      };

      const ctx = {
        set: function (key, value) {
          this[`kv_${key}`] = value;
        }
      };
      const res = nx.forTarget(obj, ctx);
      console.log(res);
      expect(res.kv_name).toBe('afeiship');
    });
  });
})();
