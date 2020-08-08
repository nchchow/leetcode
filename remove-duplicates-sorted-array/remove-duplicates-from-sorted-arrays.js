/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let j = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[j] !== nums[i]) {
      nums[++j] = nums[i];
    }
  }
  return j + 1;
};
