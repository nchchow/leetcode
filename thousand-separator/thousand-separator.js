/**
 * @param {number} n
 * @return {string}
 */
const thousandSeparatorLocale = (n) => n.toLocaleString("de-EG");

const thousandSeparatorFastest = (n) =>
  n
    .toString()
    .split("")
    .reverse()
    .map((x, index) => {
      if (index % 3 === 0 && index !== 0) x += ".";
      return x;
    })
    .reverse()
    .join("");
