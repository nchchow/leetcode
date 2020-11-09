/**
 * @param {number[]} nums
 * @return {number[]}
 */
const frequencySort = (nums) => {
  const freq = nums.reduce((a, c) => {
    a[c] = (a[c] || 0) + 1;
    return a;
  }, {});
  return nums.sort((a, b) => freq[a] - freq[b] || b - a);
};
