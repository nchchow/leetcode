/**
 * @param {character[][]} board
 * @return {number}
 */
const numRookCaptures = (board) => {
  let row,
    col,
    count = 0;
  // find rook
  for (let j = 0; j < board.length; j++) {
    for (let i = 0; i < board[j].length; i++) {
      if (board[j][i] === "R") {
        col = j;
        row = i;
        break;
      }
    }
  }
  // search north
  for (let i = row; i >= 0; i--) {
    if (board[col][i] === "p") {
      count++;
      break;
    } else if (board[col][i] === "B") {
      break;
    }
  }
  // search east
  for (let j = col; j < board.length; j++) {
    if (board[j][row] === "p") {
      count++;
      break;
    } else if (board[j][row] === "B") {
      break;
    }
  }
  // search south
  for (let i = row; i < board.length; i++) {
    if (board[col][i] === "p") {
      count++;
      break;
    } else if (board[col][i] === "B") {
      break;
    }
  }
  // search west
  for (let j = col; j >= 0; j--) {
    if (board[j][row] === "p") {
      count++;
      break;
    } else if (board[j][row] === "B") {
      break;
    }
  }
  return count;
};
