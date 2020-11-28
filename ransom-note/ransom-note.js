/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  const letters = {};
  for (const c of magazine) {
    letters[c] = (letters[c] || 0) + 1;
  }
  for (const c of ransomNote) {
    if (!letters[c]) return false;
    letters[c]--;
  }
  return true;
};
