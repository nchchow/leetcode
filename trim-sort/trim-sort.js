/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  const nTrim = arr.length * 0.05;
  return (
    arr
      .sort((a, b) => a - b) // sort
      .reduce(
        // trim min and max and sum
        (a, c, i) => (i < nTrim || i >= arr.length - nTrim ? a : a + c),
        0
      ) /
    (arr.length - 2 * nTrim) // calc mean
  );
};
