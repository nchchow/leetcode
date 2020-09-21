/**
 * @param {number[]} arr
 * @return {number}
 */
const sumOddLengthSubarrays = (arr) => {
  let sum = 0;
  for (let subLength = 1; subLength <= arr.length; subLength += 2) {
    for (let i = 0; i + subLength <= arr.length; i++) {
      for (let j = i; j < i + subLength; j++) {
        sum += arr[j];
      }
    }
  }
  return sum;
};
