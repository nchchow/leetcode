/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
// one line
const kWeakestRows = (mat, k) =>
  mat
    .map((row, i) => [i, row.reduce((a, c) => a + c, 0)])
    .sort((a, b) => a[1] - b[1])
    .map(([x, _]) => x)
    .splice(0, k);
