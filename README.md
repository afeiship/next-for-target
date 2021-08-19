# next-for-target
> Map source to target.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-for-target
```

## usage
```js
import '@jswork/next-for-target';

const obj = {
  name: 'afeiship',
  age: 18,
  email: 'email@example.com'
};

const ctx1 = {};
const ctx2 = {
  set: function (key, value) {
    this[`kv_${key}`] = value;
  }
};

const res2 = nx.forTarget(obj, ctx);

/*
// res1
{
  name: 'afeiship',
  age: 18,
  email: 'email@example.com'
}

// res2
{
  set: [Function: set],
  kv_name: 'afeiship',
  kv_age: 18,
  kv_email: 'email@example.com'
}
*/
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-for-target/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-for-target
[version-url]: https://npmjs.org/package/@jswork/next-for-target

[license-image]: https://img.shields.io/npm/l/@jswork/next-for-target
[license-url]: https://github.com/afeiship/next-for-target/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-for-target
[size-url]: https://github.com/afeiship/next-for-target/blob/master/dist/next-for-target.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-for-target
[download-url]: https://www.npmjs.com/package/@jswork/next-for-target
