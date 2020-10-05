/**
 * @param {number} N
 * @return {number}
 */
// optimized
const fib = (N) => {
  if (N < 2) return N;
  let sum = 1;
  for (let i = 2, prev = 0; i <= N; i++) {
    sum += prev;
    prev = sum - prev;
  }
  return sum;
};

// recursive
const fib = (N) => {
  if (N < 2) return N;
  return fib(N - 1) + fib(N - 2);
};
