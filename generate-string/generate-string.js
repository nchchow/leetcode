/**
 * @param {number} n
 * @return {string}
 */
// append string
const generateTheString = (n) => {
  let s = n % 2 === 0 ? "b" : "a";
  for (let i = 1; i < n; i++) s += "a";
  return s;
};

// fill and join
const generateTheString = (n) => {
  const arr = new Array(n - 1).fill("a");
  n % 2 === 0 ? arr.push("b") : arr.push("a");
  return arr.join("");
};

// one line spread and join
const generateTheString = (n) =>
  [...new Array(n - 1).fill("a"), n % 2 === 0 ? "b" : "a"].join("");

// one line repeat | least memory
const generateTheString = (n) =>
  n % 2 === 0 ? `${"a".repeat(n - 1)}b` : "a".repeat(n);
