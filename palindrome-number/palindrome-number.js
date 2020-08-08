/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0) return false;

  const num = x; // hold original value
  let reversed = 0;

  while (x > 0) {
    reversed = reversed * 10 + (x % 10); // append right most digit of x to reversed
    x = Math.floor(x / 10); // remove right most digit of x
  }

  return num === reversed;
};
