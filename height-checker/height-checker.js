/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = (heights) => {
  const target = [...heights].sort((a, b) => a - b);
  return heights.reduce((a, c, i) => (c === target[i] ? a : a + 1), 0);
};
