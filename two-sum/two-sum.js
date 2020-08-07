/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  //  loop through array
  for (let i = 0; i < nums.length; i++) {
    //  add current num to next num and iterate
    for (let j = i + 1; j < nums.length; j++) {
      //  if target is found, return current indices
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};
