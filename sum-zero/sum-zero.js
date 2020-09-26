/**
 * @param {number} n
 * @return {number[]}
 */
const sumZero = (n) => {
  const res = n % 2 === 1 ? [0] : [];
  for (let i = 1; res.length < n; i++) res.push(i, -i);
  return res;
};
