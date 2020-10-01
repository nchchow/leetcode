/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
// two pointers
const buildArray = (target, n) => {
  const res = [];
  for (let i = 0, j = 1; i < target.length; i++, j++) {
    res.push("Push");
    target[i] !== j && res.push("Pop") && i--;
  }
  return res;
};

// with set
const buildArray = (target, n) => {
  const set = new Set(target);
  const res = [];
  const right = target[target.length - 1];
  for (let i = 1; i <= n && i <= right; i++) {
    res.push("Push");
    if (!set.has(i)) res.push("Pop");
  }
  return res;
};
