/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
// using loop and minor optimization
const findOcurrences = (text, first, second) => {
  const out = [];
  const words = text.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i] === first && words[i + 1] === second && words[i + 2]) {
      out.push(words[i + 2]);
      i++; // skip a word
    }
  }
  return out;
};

// using reduce
const findOcurrences = (text, first, second) => {
  const words = text.split(" ");
  return words.reduce((a, c, i) => {
    if (c === first && words[i + 1] === second && words[i + 2])
      a.push(words[i + 2]);
    return a;
  }, []);
};
