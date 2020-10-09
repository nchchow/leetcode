/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
const groupThePeople = (groupSizes) => {
  const out = [];
  // use obj to store arrays where the key is the length and the value is array
  const map = {};
  // iterate array
  for (let i = 0; i < groupSizes.length; i++) {
    // get value to determine array length
    const len = groupSizes[i];
    // if array of that length doesnt exist, create an array of that length
    if (!map[len]) map[len] = [];
    // push index in that array
    map[len].push(i);
    // if that array is filled, push that array to output and delete from obj
    if (map[len].length === len) {
      out.push(map[len]);
      map[len] = undefined;
    }
  }
  // return output
  return out;
};
