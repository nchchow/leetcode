/**
 * @param {number} n
 * @return {number}
 */

const countLargestGroup = (n) => {
  const groups = [[]];
  const sumDigits = (n) => {
    let sum = 0;
    while (n) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    return sum;
  };

  for (let i = 1; i <= n; i++) {
    const sum = sumDigits(i);
    groups[sum] ? groups[sum].push(i) : (groups[sum] = [i]);
  }
  const largest = Math.max(...groups.map((group) => group.length));

  return groups.reduce((a, group) => (group.length === largest ? a + 1 : a), 0);
};

// one pass
const countLargestGroup = (n) => {
  const sumDigits = (n) => {
    let sum = 0;
    while (n) {
      sum += n % 10;
      n = Math.trunc(n / 10);
    }
    return sum;
  };

  let map = new Map(),
    max = 1,
    maxCount = 0;

  for (let i = 1; i <= n; i++) {
    let sum = sumDigits(i),
      sumCount = map.get(sum) + 1 || 1;
    map.set(sum, sumCount);
    if (sumCount === max) maxCount++;
    else if (sumCount > max) maxCount = 1;
    max = Math.max(max, sumCount);
  }
  return maxCount;
};
