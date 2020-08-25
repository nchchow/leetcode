/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = (n, start) => {
  let result = 0;
  for (let i = 0; i < n; i++) {
    result ^= start + 2 * i;
  }
  return result;
};

const xorOperationOneLine = (n, start) => {
  return Array(n)
    .fill()
    .map((x, i) => start + 2 * i)
    .reduce((c, x) => c ^ x);
};
