/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  const map = {};
  for (const num of nums) {
    map[num] = map[num] + 1 || 1;
    if (map[num] > nums.length / 2) return num;
  }
};

const majorityElement = (nums) => {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};
