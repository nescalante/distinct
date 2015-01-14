'use strict';

var assert = require('assert');
var distinct = require('../index.js');

describe('distinct()', function () {
  it('should return distinct for numbers', function () {
    assert.deepEqual(distinct([1, 2, 2, 2, 3, 3, 1]), [1, 2, 3]);
  });

  it('should return distinct for objects', function () {
    assert.deepEqual(distinct([{ a: 1 }, { b: 2 }, { a: 1 }, { b: 1 }]), [{ a: 1 }, { b: 2 }, { b: 1 }]);
  });
});
