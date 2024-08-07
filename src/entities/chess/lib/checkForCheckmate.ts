import { canMove } from "./canMove/canMove";
import type { BoardType } from "../types/_types";

export function checkForCheckmate(board: BoardType) {
  const result = { check: false, checkmate: false };

  for (const position in board) {
    if (!board[position]) continue;

    const posibles = canMove(board, position, false);

    for (const posiblePosition of posibles) {
      if (
        board[posiblePosition] &&
        board[posiblePosition].type === "king" &&
        board[posiblePosition].color !== board[position].color
      ) {
        result.check = true;

        const kingMoves = canMove(board, posiblePosition, true);

        if (kingMoves.length === 0) {
          let flag = true;

          for (const friendPosition in board) {
            if (
              !board[friendPosition] ||
              board[friendPosition].color !== board[posiblePosition].color ||
              board[friendPosition].type === "king"
            )
              continue;

            const friendMoves = canMove(board, friendPosition, true);

            if (friendMoves.length > 0) {
              flag = false;
            }
          }

          if (flag) result.checkmate = true;
        }
      }
    }
  }
  return result;
}