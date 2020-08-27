/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
const numWaterBottles = (numBottles, numExchange) => {
  let total = numBottles;
  do {
    let empty = numBottles % numExchange;
    numBottles = Math.floor(numBottles / numExchange);
    total += numBottles;
    numBottles += empty;
  } while (numBottles >= numExchange);
  return total;
};
