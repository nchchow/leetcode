/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
const shortestToChar = (S, C) => {
  const res = [];
  for (let i = 0, j = S.length; i < S.length; i++) {
    if (S[i] === C) {
      res[i] = 0;
      for (let k = 1; k <= i && res[i - k] >= k; k++) {
        res[i - k] = k;
      }
      j = 1;
    } else {
      res[i] = j++;
    }
  }
  return res;
};
