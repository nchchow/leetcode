/**
 * @param {string} S
 * @return {string}
 */
const removeOuterParentheses = (S) => {
  const primitives = [];
  const stack = [];
  let start = 0;
  for (let i = start; i < S.length; i++) {
    if (S[i] === "(") {
      stack.push(S[i]);
    } else {
      stack.pop();
      if (stack.length === 0) {
        primitives.push(S.slice(start, i + 1));
        start = i + 1;
      }
    }
  }
  return primitives.map((part) => part.slice(1, part.length - 1)).join("");
};

// cleaner solution
const removeOuterParentheses = (S) => {
  let result = "";
  let length = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === ")") length--;
    if (length > 0) result += S[i];
    if (S[i] === "(") length++;
  }
  return result;
};
