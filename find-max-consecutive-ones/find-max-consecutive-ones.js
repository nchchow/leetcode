/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
  let consec = 0;
  let max = 0;
  nums.forEach((num) => {
    if (num) {
      consec++;
      if (consec > max) max = consec;
    } else {
      consec = 0;
    }
  });
  return max;
};
