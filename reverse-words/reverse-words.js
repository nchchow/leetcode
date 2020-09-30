/**
 * @param {string} s
 * @return {string}
 */
// one line
const reverseWords = (s) =>
  s
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");

// O(n)
const reverseWords = (s) => {
  let res = "";
  let word = "";
  for (const c of s) {
    if (c !== " ") {
      word = c + word;
    } else {
      res += word + c;
      word = "";
    }
  }
  return res + word;
};
