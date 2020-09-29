/**
 * @param {number[]} A
 * @return {number[]}
 */
// two pointers, O(n)
const sortedSquares = (A) => {
  const res = new Array(A.length);
  let l = 0;
  let r = A.length - 1;
  for (let i = r; i >= 0; i--) {
    res[i] = A[l] ** 2 > A[r] ** 2 ? A[l++] ** 2 : A[r--] ** 2;
  }
  return res;
};

// one line, nlog(n)
const sortedSquares = (A) => A.map((x) => x * x).sort((a, b) => a - b);
