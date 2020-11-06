/**
 * @param {number[]} nums
 * @return {number}
 */
// initial solution
var findShortestSubArray = function (nums) {
  // track max freq
  let maxFreq = 0;
  // use obj to count all nums and update max freq, track first last index
  const obj = nums.reduce((obj, num, i) => {
    if (!obj[num]) {
      obj[num] = {
        freq: 1,
        first: i,
        last: i,
      };
    } else {
      obj[num].freq++;
      obj[num].last = i;
    }
    if (obj[num].freq > maxFreq) maxFreq = obj[num].freq;
    return obj;
  }, {});
  // return last - first
  return Object.values(obj).reduce((shortest, x) => {
    if (x.freq === maxFreq) {
      const len = x.last - x.first + 1;
      if (len < shortest) shortest = len;
    }
    return shortest;
  }, nums.length);
};
