/**
 * @param {string} path
 * @return {boolean}
 */
// faster run time and uses less memory
const isPathCrossingObj = (path) => {
  const moves = {
    N: 1,
    E: 1,
    S: -1,
    W: -1,
  };
  let [x, y] = [0, 0];
  const points = {};
  points[`${x},${y}`] = true;

  for (let direction of path) {
    if (direction === "N" || direction === "S") {
      y += moves[direction];
    } else {
      x += moves[direction];
    }
    if (points[`${x},${y}`]) {
      return true;
    } else {
      points[`${x},${y}`] = true;
    }
  }
  return false;
};

const isPathCrossingArr = (path) => {
  const moves = {
    N: [0, 1],
    E: [1, 0],
    S: [0, -1],
    W: [-1, 0],
  };
  let [currentX, currentY] = [0, 0];
  let points = [[currentX, currentY]];
  for (let move of path) {
    currentX += moves[move][0];
    currentY += moves[move][1];
    if (
      points.some(
        (point) => point.toString() === [currentX, currentY].toString()
      )
    ) {
      return true;
    } else {
      points.push([currentX, currentY]);
    }
  }
  return false;
};
