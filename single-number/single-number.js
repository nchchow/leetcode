/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  if (nums.length === 1) return nums[0];
  nums.sort((a, b) => a - b);
  let temp = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === temp) {
      count++;
    } else {
      if (count === 1) return temp;
      count = 1;
      temp = nums[i];
    }
  }
  return temp;
};

// XOR
const singleNumber = (nums) => {
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    res = res ^ nums[i];
  }
  return res;
};
