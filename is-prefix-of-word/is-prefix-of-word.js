/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
const isPrefixOfWord = (sentence, searchWord) => {
  const i = sentence
    .split(" ")
    .findIndex((word) => word.startsWith(searchWord));
  return i !== -1 ? i + 1 : i;
};

// one line
const isPrefixOfWord = (
  sentence,
  searchWord,
  i = sentence.split(" ").findIndex((word) => word.startsWith(searchWord))
) => (i !== -1 ? i + 1 : i);
