/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// logn one line solution
const moveZeroes = (nums) => {
  nums.sort((a, b) => (a ? 0 : Infinity) - (b ? 0 : Infinity));
};
