/**
 * @param {number[]} nums
 * @return {number[]}
 */
// with set, extra memory used
const findDisappearedNumbers = (nums) => {
  const set = new Set(nums);
  const out = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) out.push(i);
  }
  return out;
};
