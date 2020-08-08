/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  // if length is odd, return false
  if (s.length % 2 !== 0) return false;

  if (s === "") return true;

  const brackets = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  let stack = [];

  // iterate s
  for (let i = 0; i < s.length; i++) {
    // if open bracket
    if (Object.keys(brackets).includes(s[i])) {
      // add to stack
      stack.push(s[i]);
    } else {
      // compare to top of stack
      if (brackets[stack.pop()] !== s[i]) {
        return false;
      }
    }
  }
  if (stack.length !== 0) return false;
  return true;
};
