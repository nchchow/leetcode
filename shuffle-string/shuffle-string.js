/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreStringFastest = (s, indices) => {
  let result = "";
  for (let i = 0; i < indices.length; i++) {
    result += s[indices.indexOf(i)];
  }
  return result;
};

const restoreStringOneLine = (s, indices) => {
  return indices.map((_, i) => s[indices.indexOf(i)]).join("");
};

const restoreStringArr = (s, indices) => {
  const arr = new Array(s.length);
  indices.forEach((c, i) => (arr[c] = s[i]));
  return arr.join("");
};

const restoreStringMap = (s, indices) => {
  const map = {};
  let result = "";

  for (let i = 0; i < s.length; i++) {
    map[indices[i]] = s[i];
  }

  for (let i = 0; i < s.length; i++) {
    result += map[i];
  }
  return result;
};
