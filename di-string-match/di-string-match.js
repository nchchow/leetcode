/**
 * @param {string} S
 * @return {number[]}
 */
const diStringMatch = (S) => {
  const A = [];
  let low = 0;
  let high = S.length;
  let i = 0;
  while (A.length !== S.length + 1) {
    A.push(S[i] === "I" ? low++ : high--);
    i++;
  }
  return A;
};
