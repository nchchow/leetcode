/**
 * @param {string[]} A
 * @return {number}
 */
const minDeletionSize = (A) => {
  let count = 0;
  for (let j = 0; j < A[0].length; j++) {
    for (let i = 0; i < A.length - 1; i++) {
      if (A[i][j] > A[i + 1][j]) {
        count++;
        break;
      }
    }
  }
  return count;
};
