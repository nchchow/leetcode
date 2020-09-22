/**
 * @param {string[][]} paths
 * @return {string}
 */
// map
const destCity = (paths) => {
  const map = {};
  for (const [from, to] of paths) {
    map[from] = to;
  }
  let dest;
  let from = paths[0][0];
  let to = paths[0][1];
  while (!dest) {
    if (!map[to]) {
      dest = to;
    } else {
      from = to;
      to = map[to];
    }
  }
  return dest;
};

// set
const destCity = (paths) => {
  const fromSet = new Set();
  paths.forEach(([from, _]) => fromSet.add(from));
  for (const [_, to] of paths) {
    if (!fromSet.has(to)) return to;
  }
  return "not found";
};
