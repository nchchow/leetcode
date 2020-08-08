/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = (n) => {
  if (n === 1) return "1";

  const prev = countAndSay(n - 1);

  let str = "";
  let count = 1;

  for (let i = 0; i < prev.length; i++) {
    // compare with next, if same, increment count
    if (prev[i] === prev[i + 1]) {
      count++;
    } else {
      // else append to str and reset count
      str += count + prev[i];
      count = 1;
    }
  }

  return str;
};
