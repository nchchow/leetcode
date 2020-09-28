/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
// sort and compare
const canBeEqual = (target, arr) => {
  target.sort();
  arr.sort();
  for (const i in arr) {
    if (arr[i] !== target[i]) return false;
  }
  return true;
};

// one line
const canBeEqual = (target, arr) =>
  arr.sort().join("") === target.sort().join("");
