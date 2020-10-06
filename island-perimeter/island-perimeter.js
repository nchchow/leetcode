/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = (grid) => {
  let edges = 0;
  let col = grid.length;
  let row = grid[0].length;

  for (let j = 0; j < col; j++) {
    for (let i = 0; i < row; i++) {
      if (grid[j][i] === 1) {
        if (!j || !grid[j - 1][i]) edges++;
        if (i === row - 1 || !grid[j][i + 1]) edges++;
        if (j === col - 1 || !grid[j + 1][i]) edges++;
        if (!i || !grid[j][i - 1]) edges++;
      }
    }
  }
  return edges;
};
