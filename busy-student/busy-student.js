/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
// more readable
const busyStudent = (startTime, endTime, queryTime) => {
  let count = 0;
  for (const i in startTime) {
    if (startTime[i] <= queryTime && queryTime <= endTime[i]) {
      count++;
    }
  }
  return count;
};

// one line
const busyStudent = (startTime, endTime, queryTime) =>
  startTime.reduce(
    (count, _, i) =>
      startTime[i] <= queryTime && queryTime <= endTime[i] ? count + 1 : count,
    0
  );
