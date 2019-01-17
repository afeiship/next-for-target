# next-scanf
> Small string template like `scanf` for next

## install:
```bash
npm install -S afeiship/next-scanf --registry=https://registry.npm.taobao.org
```

## usage:
```js
var tmpl1 = 'test is %s';
var tmpl2 = 'test is what %s, is your %s';

nx.scanf('test is what %s, is your %s', 111, 222);
// 'test is what 111, is your 222'
```
