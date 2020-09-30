/**
 * @param {number[]} A
 * @return {number[]}
 */
// O(n) sort in place
const sortArrayByParityII = (A) => {
  // arrays to hold misplaced indices
  const odds = [];
  const evens = [];
  for (let i = 0; i < A.length; i++) {
    if (i % 2 === 0 && A[i] % 2 !== 0) {
      if (evens.length === 0) {
        odds.push(i);
      } else {
        const temp = A[i];
        const j = evens.pop();
        A[i] = A[j];
        A[j] = temp;
      }
    }
    if (i % 2 === 1 && A[i] % 2 !== 1) {
      if (odds.length === 0) {
        evens.push(i);
      } else {
        const temp = A[i];
        const j = odds.pop();
        A[i] = A[j];
        A[j] = temp;
      }
    }
  }
  return A;
};

// O(n) new array
const sortArrayByParityII = (A) => {
  const res = new Array(A.length);
  let even = 0;
  let odd = 1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      res[even] = A[i];
      even += 2;
    } else {
      res[odd] = A[i];
      odd += 2;
    }
  }
  return res;
};
