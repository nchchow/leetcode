/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// set
const luckyNumbers = (matrix) => {
  const min = new Set();
  matrix.forEach((row) => min.add(Math.min(...row)));
  const max = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const val = matrix[i][j];
      if (!max[j] || val > max[j]) max[j] = val;
    }
  }
  return max.filter((x) => min.has(x));
};

// array intercepts
const luckyNumbers = (matrix) => {
  let min = [];
  let max = new Array(matrix[0].length).fill(0);
  matrix.forEach((row, idx) => (min[idx] = Math.min(...row)));
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > max[j]) max[j] = matrix[i][j];
    }
  }
  return min.filter((x) => max.includes(x));
};

// brute
const luckyNumbers = (matrix) => {
  const res = [];
  matrix.forEach((row, i) => {
    row.forEach((val, j) => {
      if (
        val === Math.min(...row) &&
        val === Math.max(...matrix.map((row) => row[j]))
      )
        res.push(val);
    });
  });
  return res;
};
