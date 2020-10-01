/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortByBits = (arr) => {
  const countBit = (i) => {
    let count = 0;
    while (i) {
      count += i & 1;
      i >>= 1;
    }
    return count;
  };
  return arr.sort((a, b) => countBit(a) - countBit(b) || a - b);
};
