/**
 * @param {number[]} A
 * @return {number}
 */
// using set to find non-unique number
const repeatedNTimes = (A) => {
  const set = new Set();
  for (const val of A) {
    if (set.has(val)) return val;
    set.add(val);
  }
};

// using map, if other numbers are not unique, only this solution works
const repeatedNTimes = (A) => {
  const countMap = {};
  for (const val of A) {
    if (countMap[val]) {
      countMap[val]++;
    } else {
      countMap[val] = 1;
    }
    if (countMap[val] === A.length / 2) return val;
  }
};
