/**
 * @param {number} n
 * @return {number}
 */
let climbStairsFibonacci = (n) => {
  // fibonacci number
  if (n === 1) return 1;

  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }

  return second;
};

let climbStairsRecursive = (n) => {
  if (n === 1 || n === 2) return n;

  return climbStairsRecursive(n - 1) + climbStairsRecursive(n - 2);
};
