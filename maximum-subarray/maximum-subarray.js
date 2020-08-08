/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let sum = nums[0];
  let largestSum = sum;

  for (let i = 1; i < nums.length; i++) {
    if (sum < 0 && nums[i] > sum) {
      sum = nums[i];
    } else {
      sum += nums[i];
    }
    if (sum > largestSum) largestSum = sum;
  }
  return largestSum;
};
