/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const countGoodTriplets = (arr, a, b, c) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const first = Math.abs(arr[i] - arr[j]) <= a;
        const second = Math.abs(arr[j] - arr[k]) <= b;
        const third = Math.abs(arr[i] - arr[k]) <= c;
        first && second && third && count++;
      }
    }
  }
  return count;
};
