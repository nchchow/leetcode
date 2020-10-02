/**
 * @param {string[]} A
 * @return {string[]}
 */
// brute with hashmap;
const commonChars = (A) => {
  const getCharCount = (word) => {
    const charCount = {};
    for (const char of word) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
  };

  const charCount = getCharCount(A[0]);
  for (let i = 1; i < A.length; i++) {
    const c = getCharCount(A[i]);
    Object.keys(charCount).forEach(
      (char) => (charCount[char] = Math.min(charCount[char], c[char] || 0))
    );
  }
  const res = [];
  Object.entries(charCount).forEach(([char, count]) => {
    for (let i = 0; i < count; i++) res.push(char);
  });
  return res;
};
