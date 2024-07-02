import { cloneBoard } from "../../screens/board/cloneBoard";
import { letters, indexes } from "../../screens/board/config.json";
import { kingUnderAttack } from "../../screens/board/kingUnderAttack";
import type { boardType } from "../constants/_types";

export default function canMoveKnight(color: string, from: string, board: boardType, recurse = true) {
    const [col, _] = [...from];
    const row = Number(_);

    const moves = [];

    const indexCol = letters.indexOf(col);
    const indexRow = indexes.indexOf(row);

    const dir = [[1, 2], [1, -2], [2, 1], [2, -1], [-1, 2], [-1, -2], [-2, 1], [-2, -1]];

    for (const [a, b] of dir) {
        const col = letters[indexCol + a];
        const row = indexes[indexRow + b];

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