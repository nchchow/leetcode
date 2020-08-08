/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  // take absolute value to remove potential negative sign
  let unsigned = x < 0 ? -x : x;
  let str = "" + unsigned;
  const reversed = str.split("").reverse().join("");

  // if the reversed is greater than 32 bit, return 0
  if (parseInt(reversed).toString(2).length > 31) return 0;

  // return result after adding potential negative sign
  return x < 0 ? -parseInt(reversed) : parseInt(reversed);
};
