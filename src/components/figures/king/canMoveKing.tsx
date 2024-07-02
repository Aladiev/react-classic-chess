import { cloneBoard } from "../../board/cloneBoard";
import { boardType } from "../../board/types";
import { letters, indexes } from "../../board/config.json";
import { canMove } from "../../../redux/slice/chess";

export default function canMoveKing(color: string, from: string, board: boardType, recurse = true) {
    const [col, _] = from.split('');
    const row = Number(_);

    const moves = [];

    const indexCol = letters.indexOf(col);
    const indexRow = indexes.indexOf(row);

    const dir = [1, 0, 1, 1, -1, 0, -1, -1, 1];

    for (let i = 0; i < dir.length - 1; i++) {
      const x = letters[indexCol + dir[i]];
      const y = indexes[indexRow + dir[i + 1]];

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

          let positions: string[];

          positions = boardCopy[position].type === 'king' ? canMove(boardCopy, position, false) : canMove(boardCopy, position, true);

          positions.forEach(somePosition => enemiesPosibleMoves.add(somePosition))
        }

        if (!enemiesPosibleMoves.has(kingMove)) filteredMoves.push(kingMove);
      }

      return filteredMoves;;
    }

    return moves;
  }