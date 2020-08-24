/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + currentSum;
    currentSum = nums[i];
  }
  return nums;
};
