/**
 * @param {string} S
 * @return {string}
 */
const toGoatLatin = (S) => {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  return S.split(" ")
    .map((word, i) =>
      vowels.has(word[0])
        ? `${word}ma${"a".repeat(i + 1)}`
        : `${word.slice(1)}${word[0]}ma${"a".repeat(i + 1)}`
    )
    .join(" ");
};
