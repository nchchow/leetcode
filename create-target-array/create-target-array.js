/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = (nums, index) => {
  const target = [];
  nums.forEach((num, i) => target.splice(index[i], 0, num));
  return target;
};
