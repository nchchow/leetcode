/**
 * @param {number[]} prices
 * @return {number[]}
 */
const finalPricesOneLine = (prices) =>
  prices.map(
    (price, i) =>
      price - (prices.find((discount, j) => j > i && discount <= price) || 0)
  );
