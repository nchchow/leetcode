/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    const temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }
};
