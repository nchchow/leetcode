/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = (moves) => {
  let y = 0;
  let x = 0;
  for (const move of moves) {
    if (move === "U") y++;
    else if (move === "D") y--;
    else if (move === "L") x--;
    else if (move === "R") x++;
  }
  return !y && !x;
};
