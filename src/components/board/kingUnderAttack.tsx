import { canMove } from "../../redux/slice/chess";
import { boardType } from "./types";

type boardTypeWithoutMoving = { [key: string]: { color: string, type: string, canMove: Function } };


export const kingUnderAttack = (board: boardType, color: string) => {
  for (const position in board) {
    if (!board[position] || board[position].color === color) continue;

    const posibles = canMove(board, position);

    for (const posiblePosition of posibles) {
      if (board[posiblePosition] && board[posiblePosition].type === 'king' && board[posiblePosition].color !== board[position].color) return true;
    }
  }

  return false;
}