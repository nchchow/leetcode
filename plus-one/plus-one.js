/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = (digits) => {
  // return (BigInt(digits.join("")) + BigInt(1)).toString().split(""); // results in string[] as new array

  if (digits[0] === 9) digits.unshift(0); // pad with 0 to carry one
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0; // carry one on next iteration
    } else {
      digits[i]++; // increment and break
      break;
    }
  }
  if (digits[0] === 0) digits.shift(); // if padded 0 unused, remove it
  return digits; // results in number[] of original array
};
