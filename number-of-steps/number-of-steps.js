/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = (num) => {
  let steps = 0;
  while (num !== 0) {
    num % 2 === 0 ? (num /= 2) : num--;
    steps++;
  }
  return steps;
};
