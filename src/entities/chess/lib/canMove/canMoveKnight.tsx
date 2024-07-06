import { cloneBoard } from "../cloneBoard";
import { LETTERS, INDEXES } from "../../config/config";
import { kingUnderAttack } from "../kingUnderAttack";
import type { BoardType } from "../../types/_types";

export default function canMoveKnight(color: string, from: string, board: BoardType, recurse = true) {
    const [col, _] = [...from];
    const row = Number(_);

    const moves = [];

    const indexCol = LETTERS.indexOf(col);
    const indexRow = INDEXES.indexOf(row);

    const dir = [[1, 2], [1, -2], [2, 1], [2, -1], [-1, 2], [-1, -2], [-2, 1], [-2, -1]];

    for (const [a, b] of dir) {
        const col = LETTERS[indexCol + a];
        const row = INDEXES[indexRow + b];

        const position = col + row;

        if (col && row && (!board[position] || board[position].color !== color)) moves.push(position);
    }

    if (recurse) {
        return moves.filter(move => {
            const boardCopy = cloneBoard(board);

            boardCopy[move] = boardCopy[from];
            delete boardCopy[from];

            return !kingUnderAttack(boardCopy, color);
        });
    }

    return moves;
}