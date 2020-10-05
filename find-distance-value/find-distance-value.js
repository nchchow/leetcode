/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
// nlogn with sort and binary search
const findTheDistanceValue = (arr1, arr2, d) => {
  const isValid = (num, arr, d) => {
    let low = 0,
      high = arr.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (Math.abs(num - arr[mid]) <= d) {
        return false;
      } else {
        num > arr[mid] ? (low = mid + 1) : (high = mid - 1);
      }
    }
    return true;
  };

  const sorted = arr2.sort((a, b) => a - b);
  return arr1.reduce((a, c) => (isValid(c, sorted, d) ? a + 1 : a), 0);
};

// one line
const findTheDistanceValue = (arr1, arr2, d) =>
  arr1.filter((num) => arr2.reduce((a, c) => Math.abs(num - c) > d && a, true))
    .length;
