/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  if (nums[0] > target) return 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < target) {
      return i + 1;
    }
  }
  return 0;
};
