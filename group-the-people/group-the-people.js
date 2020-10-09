/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
const groupThePeople = (groupSizes) => {
  const out = [];
  // use map to store arrays where the key is the size and the value is array
  const map = new Map();
  // iterate array
  groupSizes.forEach((size, i) => {
    // if array of that size doesnt exist, create an array of that size
    if (!map.has(size)) map.set(size, []);
    // push index in that array
    const group = map.get(size);
    group.push(i);
    // if that array is filled, push that array to output and delete from obj
    if (group.length === size) {
      out.push(group);
      map.delete(size);
    }
  });
  // return output
  return out;
};
