/**
 * @param {string} s
 * @return {string}
 */
const makeGood = (s) => {
  const removeBad = (s) => {
    for (let i = 0; i < s.length - 1; i++) {
      if (Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)) === 32) {
        s = removeBad(s.replace(s[i] + s[i + 1], ""));
      }
    }
    return s;
  };
  return removeBad(s);
};
