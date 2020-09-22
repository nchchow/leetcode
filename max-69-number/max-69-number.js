/**
 * @param {number} num
 * @return {number}
 */
const maximum69Number = (num) => {
  const digits = String(num).split("");
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === "6") {
      digits[i] = "9";
      break;
    }
  }
  return parseInt(digits.join(""));
};

// one line solution
const maximum69Number = (num) => parseInt(String(num).replace("6", "9"));
