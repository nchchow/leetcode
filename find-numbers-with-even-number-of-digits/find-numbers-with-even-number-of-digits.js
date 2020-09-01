/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbersOneLineFilter = (nums) =>
  nums.filter((num) => String(num).length % 2 === 0).length;

const findNumbersOneLineReduce = (nums) =>
  nums.reduce((a, num) => (String(num).length % 2 === 0 ? a + 1 : a), 0);
