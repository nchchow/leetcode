/**
 * @param {number[]} arr
 * @return {number}
 */
// brute
const peakIndexInMountainArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return i;
  }
};

// one line
const peakIndexInMountainArray = (arr) => arr.indexOf(Math.max(...arr));
