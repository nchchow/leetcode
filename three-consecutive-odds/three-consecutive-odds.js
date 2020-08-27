/**
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOddsFastest = (arr) => {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0)
      return true;
  }
  return false;
};

const threeConsecutiveOddsOneLine = (arr) =>
  arr
    .map((x) => x % 2)
    .join("")
    .includes("111");
