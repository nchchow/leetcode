/**
 * @param {string} s
 * @return {number}
 */
const maxPower = (s) => {
  let res = 1;
  let tmp = 1;
  for (let i = 1; i < s.length; i++) {
    if (s.charAt(i) === s.charAt(i - 1)) {
      tmp++;
    } else {
      res = Math.max(res, tmp);
      tmp = 1;
    }
  }
  return Math.max(res, tmp);
};
