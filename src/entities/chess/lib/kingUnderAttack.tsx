import { canMove } from "./canMove/canMove";
import type { BoardType } from "..";

export const kingUnderAttack = (board: BoardType, color: string) => {
  for (const position in board) {
    if (!board[position] || board[position].color === color) continue;

    const posibles = canMove(board, position);

    for (const posiblePosition of posibles) {
      if (board[posiblePosition] && board[posiblePosition].type === 'king' && board[posiblePosition].color !== board[position].color) return true;
    }
  }

  return false;
};