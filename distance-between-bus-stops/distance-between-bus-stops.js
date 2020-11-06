/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
const distanceBetweenBusStops = (distance, start, destination) => {
  // take absolute distance between start and dest
  if (start > destination) [start, destination] = [destination, start];
  const f = distance.slice(start, destination).reduce((a, c) => a + c, 0);
  // calculate distance going backwards
  const b = distance.reduce((a, c) => a + c, 0) - f;
  // return smaller value
  return Math.min(f, b);
};
