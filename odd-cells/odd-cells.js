/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
const oddCells = (n, m, indices) => {
  const matrix = new Array(n).fill().map(() => Array(m).fill(0));
  indices.forEach(([r, c]) => {
    for (let i = 0; i < m; i++) matrix[r][i]++;
    for (let i = 0; i < n; i++) matrix[i][c]++;
  });
  return matrix.flat().reduce((a, c) => (c % 2 === 1 ? a + 1 : a), 0);
};
