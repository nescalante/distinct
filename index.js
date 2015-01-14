'use strict';

module.exports = distinct;

function distinct(arr) {
  var equals = require('equals');
  var result = [];

  arr.forEach(function (item) {
    var alreadyAdded = result.some(function (s) {
      return equals(item, s);
    });

    if (!alreadyAdded) {
      result.push(item);
    }
  });

  return result;
}
