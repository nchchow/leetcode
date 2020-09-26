/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = (grid) => {
  let count = 0;
  for (let i = grid.length - 1; i >= 0; i--) {
    for (let j = grid[i].length - 1; j >= 0 && grid[i][j] < 0; j--) {
      count++;
    }
  }
  return count;
};

// one line solution
const countNegatives = (grid) => {
  grid.reduce((count, row) => row.filter((x) => x < 0).length + count, 0);
};
