/**
 * @param {number[]} prices
 * @return {number}
 */
// one line
const maxProfit = (prices) =>
  prices.reduce(
    (a, c, i) => (i > 0 && c > prices[i - 1] ? c - prices[i - 1] + a : a),
    0
  );

// with reduce
const maxProfit = (prices) => {
  let prev = Infinity;
  return prices.reduce((a, c) => {
    if (c < prev) {
      prev = c;
      return a;
    } else {
      let profit = c - prev;
      prev = c;
      return a + profit;
    }
  }, 0);
};

// loop
const maxProfit = (prices) => {
  let profit = 0;
  let lowest = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < lowest) {
      lowest = prices[i];
    } else {
      profit += prices[i] - lowest;
      lowest = prices[i];
    }
  }
  return profit;
};
