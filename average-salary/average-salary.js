/**
 * @param {number[]} salary
 * @return {number}
 */
const averageBrute = (salary) => {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < salary.length; i++) {
    let current = salary[i];
    sum += current;
    if (current < min) {
      min = current;
    }
    if (current > max) {
      max = current;
    }
  }
  return (sum - min - max) / (salary.length - 2);
};

const averageOneLine = (salary) =>
  salary
    .sort((a, b) => a - b) // sort
    .slice(1, salary.length - 1) // copy array excluding first and last
    .reduce((sum, c) => sum + c, 0) /
  (salary.length - 2); // calculate average
