/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  const obj = {};
  for (const c of s) {
    obj[c] ? obj[c]++ : (obj[c] = 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (obj[s.charAt(i)] === 1) return i;
  }
  return -1;
};
