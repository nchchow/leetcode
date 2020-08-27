/**
 * @param {string} s
 * @return {string}
 */
const makeGood = (s) => {
  const removeBad = (s) => {
    for (let i = 0; i < s.length - 1; i++) {
      if (Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)) === 32) {
        const arr = s.split("");
        arr.splice(i, 2);
        s = arr.join("");
        return removeBad(s);
      }
    }
    return s;
  };
  return removeBad(s);
};
