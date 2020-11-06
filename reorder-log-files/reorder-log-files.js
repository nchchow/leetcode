/**
 * @param {string[]} logs
 * @return {string[]}
 */
const reorderLogFiles = (logs) => {
  // split
  const lets = [];
  const digs = [];
  logs.forEach((log) => {
    !isNaN(log.slice(-1)) ? digs.push(log) : lets.push(log);
  });
  // sort
  lets.sort((a, b) => {
    const arrA = a.split(" ");
    arrA.shift();
    const arrB = b.split(" ");
    arrB.shift();
    return arrA.join(" ").localeCompare(arrB.join(" ")) || a.localeCompare(b);
  });
  digs.sort((a, b) => a - b);
  // merge
  return lets.concat(digs);
};
