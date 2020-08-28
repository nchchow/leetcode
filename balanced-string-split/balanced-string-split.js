/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplitBrute = (s) => {
  let r = 0;
  let l = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === "R" ? r++ : l++;
    if (r === l) count++;
  }
  return count;
};

const balancedStringSplitReduce = (s) => {
  let r = 0;
  let l = 0;
  return s.split("").reduce((count, char) => {
    char === "R" ? r++ : l++;
    return r === l ? count + 1 : count;
  }, 0);
};
