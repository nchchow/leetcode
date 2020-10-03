/**
 * @param {number[][]} grid
 * @return {number}
 */
const projectionArea = (grid) => {
  let res = grid.reduce(
    (a, row) => a + Math.max(...row) + row.reduce((a, c) => (c ? a + 1 : a), 0),
    0
  );
  for (let j = 0; j < grid[0].length; j++) {
    let max = 0;
    for (let i = 0; i < grid.length; i++) {
      if (grid[i][j] > max) max = grid[i][j];
    }
    res += max;
  }
  return res;
};
