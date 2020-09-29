/**
 * @param {number[]} nums
 * @return {number}
 */
// one line
const arrayPairSum = (nums) =>
  nums.sort((a, b) => a - b).reduce((a, c, i) => (i % 2 === 0 ? a + c : a), 0);
