/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = (words) => {
  const morseCodeOf = (word) => {
    const alpha = [
      ".-",
      "-...",
      "-.-.",
      "-..",
      ".",
      "..-.",
      "--.",
      "....",
      "..",
      ".---",
      "-.-",
      ".-..",
      "--",
      "-.",
      "---",
      ".--.",
      "--.-",
      ".-.",
      "...",
      "-",
      "..-",
      "...-",
      ".--",
      "-..-",
      "-.--",
      "--..",
    ];

    const charCodes = word.split("").map((char) => char.charCodeAt(0));
    return charCodes.map((code) => alpha[code - 97]).join("");
  };
  const set = new Set();
  words.forEach((word) => set.add(morseCodeOf(word)));
  return set.size;
};
