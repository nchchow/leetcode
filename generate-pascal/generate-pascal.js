/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  if (numRows === 0) return [];
  const res = [[1]];
  if (numRows === 1) return res;
  for (let i = 1; i < numRows; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      row.push((res[i - 1][j - 1] || 0) + (res[i - 1][j] || 0));
    }
    res.push(row);
  }
  return res;
};
