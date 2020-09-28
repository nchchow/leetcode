/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = (left, right) => {
  const isSelfDividing = (num) => {
    let temp = num;
    while (temp) {
      const digitRight = temp % 10;
      if (digitRight === 0 || num % digitRight !== 0) return false;
      temp = Math.floor(temp / 10);
    }
    return true;
  };
  const res = [];
  for (let i = left; i <= right; i++) {
    if (isSelfDividing(i)) res.push(i);
  }
  return res;
};

const selfDividingNumbers = (left, right) => {
  const res = [];
  for (let i = left; i <= right; i++) {
    String(i)
      .split("")
      .every((digit) => +digit && !(i % digit)) && res.push(i);
  }
  return res;
};
