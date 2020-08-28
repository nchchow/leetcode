/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStonesOneLine = (J, S) =>
  S.split("").reduce((a, c) => (J.includes(c) ? a + 1 : a), 0);

const numJewelsInStonesBrute = (J, S) => {
  let count = 0;
  for (let c of S) {
    if (J.includes(c)) count++;
  }
  return count;
};
