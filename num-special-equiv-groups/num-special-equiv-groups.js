/**
 * @param {string[]} A
 * @return {number}
 */
const numSpecialEquivGroups = (A) => {
  const set = new Set();
  for (const s of A) {
    const odd = [];
    const even = [];
    for (let i = 0; i < s.length; i++) {
      i % 2 === 0 ? even.push(s[i]) : odd.push(s[i]);
    }
    set.add(`${odd.sort().join("")}+${even.sort().join("")}`);
  }
  return set.size;
};
