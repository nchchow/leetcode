/**
 * @param {number[]} nums
 * @return {number[]}
 */
const minSubsequence = (nums) => {
  if (nums.length <= 1) return nums;
  nums.sort((a, b) => b - a);
  const half = Math.floor(nums.reduce((a, c) => a + c, 0) / 2);
  const res = [];
  let sum = 0;
  for (const num of nums) {
    sum += num;
    res.push(num);
    if (sum > half) break;
  }
  return res;
};
