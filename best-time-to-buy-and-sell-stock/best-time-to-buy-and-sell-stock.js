/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let min = prices[0];
  let maxProfit = 0;
  for (let price of prices) {
    if (price < min) {
      min = price;
    } else if (price - min > maxProfit) {
      maxProfit = price - min;
    }
  }
  return maxProfit;
};
