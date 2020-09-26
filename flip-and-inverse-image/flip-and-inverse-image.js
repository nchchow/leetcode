/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = (A) =>
  A.map((row) => row.reverse().map((val) => (val === 0 ? 1 : 0)));
