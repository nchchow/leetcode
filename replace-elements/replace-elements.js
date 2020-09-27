/**
 * @param {number[]} arr
 * @return {number[]}
 */
// cleaner solution
const replaceElements = (arr) => {
  const res = new Array(arr.length);
  res[arr.length - 1] = -1;

  for (let i = arr.length - 1; i > 0; i--) {
    res[i - 1] = Math.max(arr[i], res[i]);
  }

  return res;
};

// in-place
const replaceElements = (arr) => {
  let max = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > max) {
      max = arr[i];
    } else {
      arr[i] = max;
    }
  }
  arr.shift();
  arr.push(-1);
  return arr;
};
