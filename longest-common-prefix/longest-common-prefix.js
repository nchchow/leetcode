/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";

  // iterate through first word
  for (let i = 0; i < strs[0].length; i++) {
    const c = strs[0].charAt(i);
    // iterate through array
    for (let j = 0; j < strs.length; j++) {
      // if reach end of a word or if the chars don't match, we found the result
      if (i === strs[j].length || strs[j].charAt(i) !== c) {
        return strs[0].substring(0, i);
      }
    }
  }
  // if reach here, the first word is the result
  return strs[0];
};
