/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (words) => {
  const t = new Set(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]);
  const m = new Set(["a", "s", "d", "f", "g", "h", "j", "k", "l"]);
  const b = new Set(["z", "x", "c", "v", "b", "n", "m"]);

  return words.reduce((out, word) => {
    const chars = word.toLowerCase().split("");
    if (
      chars.every((c) => t.has(c)) ||
      chars.every((c) => m.has(c)) ||
      chars.every((c) => b.has(c))
    )
      out.push(word);
    return out;
  }, []);
};
