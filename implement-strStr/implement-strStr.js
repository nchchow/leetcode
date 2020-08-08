/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (needle === "") return 0;
  if (haystack[0] === needle) return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.substring(i, needle.length + i) === needle) {
        return i;
      }
    }
  }
  return -1;
};
