/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  let result = 0;

  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // iterate through s
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    const previous = s[i - 1];
    result += romanNumerals[current];

    if (romanNumerals[previous] < romanNumerals[current]) {
      result -= romanNumerals[previous] * 2;
    }
  }

  return result;
};
