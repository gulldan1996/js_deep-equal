'use strict';

/**
 * Implement deepEqual function:
 *
 * Function compares 2 values
 * for primitives it compares types and values of given params
 * for objects it checks all fields and compare primitive values
 * inside all fields. Nested objects are compared too.
 *
 * @param {any} a
 * @param {any} b
 *
 * @return {boolean}
 *
 * deepEqual(1, 2) === false
 * deepEqual(10, 10) === true
 * deepEqual('10', 10) === false
 * deepEqual(0, false) === false
 * deepEqual({test: 5}, {test: 5}) === true
 * deepEqual({test: {abc: 5}}, {test: {abc: 5}}) === true
 * deepEqual({test: {abc: 5}}, {test: {abc: 5, def: 4}}) === false
 *
 */

function deepEqual(a, b) {
  const _isObj = arg => typeof arg === 'object' && arg !== null;
  const _isKeys = arg => Object.keys(arg);

  if (a === b) {
    return true;
  }
  if (_isObj(a) && _isObj(b)) {
    if (_isKeys(a).length !== _isKeys(b).length) {
      return false;
    }
    for (let prop in a) {
      if (!(prop in b)) {
        return false;
      }
      if (!deepEqual(a[prop], b[prop])) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

module.exports = deepEqual;
