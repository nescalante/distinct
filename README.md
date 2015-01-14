# distinct()

Because nobody wants repeated things

# Install

```shell
npm install distinct
```

Just call it and it will retrieve just all distinct values

```js
var distinct = require('distinct');
var arr = distinct([1, 1, 2, 3, 3, 3, 4]);

console.log(arr); // [1, 2, 3, 4]
```

Thats it!

Keep in mind that `distinct` uses the [`equals`](https://github.com/jkroso/equals) package to compare items.


