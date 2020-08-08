// functions sorted by speed
/**
 * @param {number} x
 * @return {number}
 */
const mySqrtBinarySearch = (x) => {
  // using binary search starting with lower half
  let left = 0;
  let right = Math.ceil(x / 2);
  let mid = 0;

  // while not found
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    // if mid * mid is < x, search lower half
    if (mid * mid < x) left = mid + 1;
    // else, search upper half
    else if (mid * mid > x) right = mid - 1;
    // mid is sqrt
    else return mid;
  }
};

const mySqrtOneLine = (x) => Math.floor(Math.pow(x, 0.5));

const mySqrtBrute = function (x) {
  if (x === 0) return 0;
  for (let i = 1; i <= x; i++) {
    if (i * i === x) return i;
    if (i * i > x) return i - 1;
  }
};
