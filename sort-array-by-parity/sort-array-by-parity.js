/**
 * @param {number[]} A
 * @return {number[]}
 */
// one line
const sortArrayByParity = (A) =>
  A.filter((val) => val % 2 === 0).concat(A.filter((val) => val % 2 === 1));

// concat
const sortArrayByParity = (A) => {
  const even = [];
  const odd = [];
  for (const val of A) {
    val % 2 === 0 ? even.push(val) : odd.push(val);
  }
  return even.concat(odd);
};

// unshift and push
const sortArrayByParity = (A) => {
  const res = [];
  for (const val of A) {
    val % 2 === 0 ? res.unshift(val) : res.push(val);
  }
  return res;
};
