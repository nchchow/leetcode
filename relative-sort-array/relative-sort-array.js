/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = (arr1, arr2) => {
  const map = {};
  for (let i = 0; i < arr2.length; i++) {
    map[arr2[i]] = i;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (!(arr1[i] in map)) map[arr1[i]] = arr1[i] + arr1.length;
  }
  return arr1.sort((a, b) => map[a] - map[b]);
};

const relativeSortArray = (arr1, arr2) => {
  const map = {};
  for (let i = 0; i < arr2.length; i++) {
    map[arr2[i]] = i;
  }
  return arr1.sort((a, b) => {
    if (!(a in map)) map[a] = a + arr1.length;
    if (!(b in map)) map[b] = b + arr1.length;
    return map[a] - map[b];
  });
};
