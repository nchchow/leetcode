/**
 * @param {string} s
 * @return {string}
 */
// using map
const sortString = (s) => {
  let res = "";
  const charCount = {};
  for (const char of s) {
    if (!charCount[char]) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }
  const uniqueChars = Object.keys(charCount).sort();
  while (res.length !== s.length) {
    uniqueChars.forEach((char) => {
      if (charCount[char]) {
        res += char;
        charCount[char]--;
      }
    });
    uniqueChars.reverse();
  }
  return res;
};

// splice
const sortString = (s) => {
  s = s.split("").sort();
  let res = "";
  while (s.length !== 0) {
    res += s.shift();
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== res[res.length - 1]) {
        res += s[i];
        s.splice(i, 1);
        i--;
      }
    }
    if (s.length === 0) break;
    s.reverse();
  }
  return res;
};
