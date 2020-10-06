/**
 * @param {number[]} arr
 * @return {number[][]}
 */
const minimumAbsDifference = (arr) => {
  let min = Infinity;
  let res = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    const diff = arr[i + 1] - arr[i];
    if (diff < min) {
      min = diff;
      res = [];
    }
    if (diff <= min) {
      res.push([arr[i], arr[i + 1]]);
    }
  }
  return res;
};
