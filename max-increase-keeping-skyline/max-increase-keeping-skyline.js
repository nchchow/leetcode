/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxIncreaseKeepingSkyline = (grid) => {
  let sum = 0;
  const hSkyline = new Array(grid.length).fill(0);
  const vSkyline = new Array(grid[0].length).fill(0);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      hSkyline[j] = Math.max(hSkyline[j], grid[i][j]);
      vSkyline[i] = Math.max(vSkyline[i], grid[i][j]);
    }
  }
  grid.forEach((row, i) => {
    row.forEach((building, j) => {
      sum += Math.min(hSkyline[j], vSkyline[i]) - building;
    });
  });
  return sum;
};

const maxIncreaseKeepingSkyline = (grid) => {
  let sum = 0;
  const hSkyline = grid.map((row) => row.reduce((a, c) => Math.max(a, c)));
  const vSkyline = [];
  for (let j = 0; j < grid[0].length; j++) {
    let max = 0;
    for (let i = 0; i < grid.length; i++) {
      if (grid[i][j] > max) max = grid[i][j];
    }
    vSkyline.push(max);
  }
  grid.forEach((row, i) => {
    row.forEach((building, j) => {
      sum += Math.min(hSkyline[j], vSkyline[i]) - building;
    });
  });
  return sum;
};
