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
  lets.sort(
    (a, b) =>
      a.slice(a.indexOf(" ") + 1).localeCompare(b.slice(b.indexOf(" ") + 1)) ||
      a.localeCompare(b) // if identical logs, compare entire strings
  );
  digs.sort((a, b) => a - b);
  // merge
  return lets.concat(digs);
};
