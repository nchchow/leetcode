/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
// brute with some optimization
const findSolution = (customfunction, z) => {
  const res = [];
  for (let x = 1; x <= 1000; x++) {
    for (let y = 1, result = 0; y <= 1000 && result <= z; y++) {
      result = customfunction.f(x, y);
      if (result === z) res.push([x, y]);
    }
  }
  return res;
};

// binary search
const findSolution = (customfunction, z) => {
  const res = [];
  let max = 1000;
  for (let x = 1; x <= 1000; x++) {
    if (max === 1) break;
    for (let left = 1, right = max; left < right; ) {
      const mid = Math.floor((left + right) / 2);
      const result = customfunction.f(x, mid);
      if (result === z) {
        res.push([x, mid]);
        max = mid;
        break;
      }
      if (result < z) {
        left = mid + 1;
      } else {
        right = mid;
        max = mid;
      }
    }
  }
  return res;
};
