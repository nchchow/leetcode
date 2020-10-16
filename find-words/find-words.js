/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (words) => {
  const t = new Set("qwertyuiop");
  const m = new Set("asdfghjkl");
  const b = new Set("zxcvbnm");

  return words.filter((word) => {
    const chars = word.toLowerCase().split("");
    return (
      chars.every((c) => t.has(c)) ||
      chars.every((c) => m.has(c)) ||
      chars.every((c) => b.has(c))
    );
  });
};
