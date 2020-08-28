/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandiesReduce = (candies, extraCandies) => {
  const greatest = candies.reduce((greatest, candy) =>
    candy > greatest ? candy : greatest
  );
  return candies.map((candy) => candy + extraCandies >= greatest);
};

const kidsWithCandiesMax = (candies, extraCandies) => {
  const greatest = Math.max(...candies);
  return candies.map((candy) => candy + extraCandies >= greatest);
};

const kidsWithCandiesOneLine = (candies, extraCandies) =>
  candies.map((candy) => candy + extraCandies >= Math.max(...candies));
