/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrentFastest = (nums) => {
  const tMap = new Map(
    [...nums]
      .sort((a, b) => a - b)
      .map((x, i) => [x, i])
      .reverse()
  );
  return nums.map((num) => tMap.get(num));
};

const smallerNumbersThanCurrentOneLine = (nums) =>
  nums.map((num) => nums.reduce((a, c) => (c < num ? a + 1 : a), 0));

const smallerNumbersThanCurrentBrute = (nums) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) count++;
    }
    result.push(count);
  }
  return result;
};
