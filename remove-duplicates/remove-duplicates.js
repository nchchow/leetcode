/**
 * @param {string} S
 * @return {string}
 */
const removeDuplicates = (S) => {
  const stack = [];
  for (const char of S) {
    char === stack[stack.length - 1] ? stack.pop() : stack.push(char);
  }
  return stack.join("");
};
