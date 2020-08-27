/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countOddsOneLine = (low, high) =>
  low % 2 !== 0 || high % 2 !== 0
    ? Math.floor((high - low) / 2) + 1
    : Math.floor((high - low) / 2);

const countOddsFastest = (low, high) => {
  if (low % 2 === 0) low++;
  if (high % 2 === 0) high--;
  return (high - low) / 2;
};
