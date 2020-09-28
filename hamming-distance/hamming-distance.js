/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// one line replace string
const hammingDistance = (x, y) => (x ^ y).toString(2).replace(/0/g, "").length;

// one line reduce
const hammingDistance = (x, y) =>
  (x ^ y)
    .toString(2)
    .split("")
    .reduce((a, c) => (c === "1" ? a + 1 : a), 0);

// one line filter
const hammingDistance = (x, y) =>
  (x ^ y)
    .toString(2)
    .split("")
    .filter((digit) => digit === "1").length;
