/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = (words, order) => {
  const orderMap = {};
  for (let i = 0; i < order.length; i++) {
    orderMap[order[i]] = i;
  }
  for (let i = 0; i < words.length - 1; i++) {
    const cur = words[i];
    const next = words[i + 1];
    for (let j = 0; j < cur.length; j++) {
      if (!next[j] || orderMap[cur[j]] > orderMap[next[j]]) return false;
      if (orderMap[cur[j]] === orderMap[next[j]]) continue;
      break;
    }
  }
  return true;
};
