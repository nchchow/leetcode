/**
 * @param {number[]} nums
 * @return {number}
 */
// brute with optimization
const minStartValue = (nums) => {
  let n = 1;
  while (true) {
    let step = n;
    for (let i = 0; i < nums.length; i++) {
      step += nums[i];
      if (step < 1) break;
      if (i === nums.length - 1) return n;
    }
    n++;
  }
};

// by tracking min
const minStartValue = (nums) => {
  let min = Infinity;
  let sum = 0;
  nums.forEach((n) => {
    min = Math.min(min, (sum += n));
  });
  return min < 1 ? -min + 1 : 1;
};
