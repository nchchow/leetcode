/**
 * @param {number[]} nums
 * @return {number[]}
 */
const decompressRLElist = (nums) => {
  const result = [];
  for (let i = 0; i < nums.length; i += 2) {
    const [freq, val] = [nums[i], nums[i + 1]];
    for (let j = 0; j < freq; j++) {
      result.push(val);
    }
  }
  return result;
};
