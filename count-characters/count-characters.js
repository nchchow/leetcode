/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
// fastest solution if chars length is small
const countCharacters = (words, chars) => {
  return words
    .filter((word) => {
      const ch = chars.split("");
      const letters = word.split("");
      for (const letter of letters) {
        if (ch.includes(letter)) {
          ch.splice(ch.indexOf(letter), 1);
        } else {
          return false;
        }
      }
      return true;
    })
    .join("").length;
};

// modularized to improve readability
const countCharacters = (words, chars) => {
  const counts = new Map();
  for (const c of chars) {
    counts.has(c) ? counts.set(c, counts.get(c) + 1) : counts.set(c, 1);
  }
  const isWordGood = (word, counts) => {
    for (let c of word) {
      if (!counts.get(c)) return false;
      counts.set(c, counts.get(c) - 1);
    }
    return true;
  };
  return words.reduce(
    (a, word) => (isWordGood(word, new Map(counts)) ? a + word.length : a),
    0
  );
};

// optimized with reference to prevent counting on each loop
const countCharacters = (words, chars) => {
  const counts = new Map();
  for (const c of chars) {
    counts.has(c) ? counts.set(c, counts.get(c) + 1) : counts.set(c, 1);
  }
  return words.reduce((a, word) => {
    const ref = new Map(counts);
    for (let i = 0; i < word.length; i++) {
      if (ref.get(word[i])) {
        ref.set(word[i], ref.get(word[i]) - 1);
      } else {
        break;
      }
      if (i === word.length - 1) a += word.length;
    }
    return a;
  }, 0);
};

// initial solution
const countCharacters = (words, chars) => {
  return (
    words
      .reduce((a, word) => {
        // get counts of chars
        const counts = {};
        for (const c of chars) {
          counts[c] ? counts[c]++ : (counts[c] = 1);
        }
        // if word can be formed, push to array
        for (let i = 0; i < word.length; i++) {
          if (counts[word[i]]) {
            counts[word[i]]--;
          } else {
            break;
          }
          if (i === word.length - 1) a.push(word);
        }
        return a;
      }, [])
      // get sum of length of all valid words
      .reduce((a, c) => c.length + a, 0)
  );
};
