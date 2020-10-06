/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const smallestRangeI = (A, K) =>
  Math.max(Math.max(...A) - K - (Math.min(...A) + K), 0);
