/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
const oddCells = (n, m, indices) => {
  const matrix = new Array(n).fill().map(() => Array(m).fill(0));
  indices.forEach(([ri, ci]) => {
    for (let i = 0; i < m; i++) matrix[ri][i]++;
    for (let j = 0; j < n; j++) matrix[j][ci]++;
  });
  return matrix.flat().reduce((a, c) => (c % 2 === 1 ? a + 1 : a), 0);
};
