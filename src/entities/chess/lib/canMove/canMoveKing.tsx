import { cloneBoard } from "../cloneBoard";
import { LETTERS, INDEXES } from "../../config/config";
import { canMove } from "./canMove";
import type { BoardType } from "../..";

export default function canMoveKing(color: string, from: string, board: BoardType, recurse: boolean) {
    const [col, _] = [...from];
    const row = Number(_);

    const moves = [];

    const indexCol = LETTERS.indexOf(col);
    const indexRow = INDEXES.indexOf(row);

    const dir = [1, 0, 1, 1, -1, 0, -1, -1, 1];

    for (let i = 0; i < dir.length - 1; i++) {
      const x = LETTERS[indexCol + dir[i]];
      const y = INDEXES[indexRow + dir[i + 1]];

      const position = x + y;

      if (x && y && (!board[position] || board[position].color !== color)) moves.push(position);
    }

    if (recurse) {
      const filteredMoves = [];

      for (const kingMove of moves) {
        const boardCopy = cloneBoard(board);

        boardCopy[kingMove] = boardCopy[from];
        delete boardCopy[from];

        const enemiesPosibleMoves = new Set();

        for (const position in boardCopy) {
          if (!boardCopy[position] || boardCopy[position].color === color) continue;

          const positions = boardCopy[position].type === 'king' ? canMove(boardCopy, position, false) : canMove(boardCopy, position, true);

          for (const somePosition of positions) enemiesPosibleMoves.add(somePosition);
        }

        if (!enemiesPosibleMoves.has(kingMove)) filteredMoves.push(kingMove);
      }

      return filteredMoves;
    }

    return moves;
  }