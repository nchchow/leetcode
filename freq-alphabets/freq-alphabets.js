/**
 * @param {string} s
 * @return {string}
 */
const freqAlphabets = (s) => {
  const toChar = (char) => String.fromCharCode(parseInt(char) + 96);
  let res = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "#") {
      res = toChar(s.slice(i - 2, i)) + res;
      i -= 2;
    } else {
      res = toChar(s[i]) + res;
    }
  }
  return res;
};
