/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = (word) =>
  word === word.toUpperCase() ||
  word === `${word.slice(0, 1)}${word.slice(1).toLowerCase()}`;
