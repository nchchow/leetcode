/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = (arr) => {
  const map = {};
  arr.forEach((x) => (map[x] ? map[x]++ : (map[x] = 1)));
  const occurences = Object.values(map);
  return new Set(occurences).size === occurences.length;
};
