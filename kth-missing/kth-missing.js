/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = (arr, k) => {
  let missing = [];
  for (let i = 0; missing.length <= k; i++) {
    if (!arr.includes(i)) missing.push(i);
  }
  return missing[k];
};
