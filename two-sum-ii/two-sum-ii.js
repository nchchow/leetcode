/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// two pointers
const twoSum = (numbers, target) => {
  let i = 0;
  let j = numbers.length - 1;
  while (i < j) {
    if (numbers[i] + numbers[j] === target) return [i + 1, j + 1];
    if (numbers[i] + numbers[j] > target) {
      j--;
    } else {
      i++;
    }
  }
};

// brute with slight optimization
const twoSum = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i + 1, j + 1];
      if (numbers[i] + numbers[j] > target) break;
    }
  }
};
