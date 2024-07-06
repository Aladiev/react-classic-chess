import { cloneBoard } from "../cloneBoard";
import { LETTERS, INDEXES } from "../../config/config";
import { kingUnderAttack } from "../kingUnderAttack";
import type { BoardType } from "../../types/_types";

export default function canMoveRook(color: string, from: string, board: BoardType, recurse = true) {
    const [col, _] = [...from];
    const row = Number(_);

    const moves = [];

    const indexCol = LETTERS.indexOf(col);
    const indexRow = INDEXES.indexOf(row);

    for (let i = indexCol + 1; i < LETTERS.length; i++) {
        const position = LETTERS[i] + INDEXES[indexRow];

        if (board[position]) {
            if (board[position].color !== color) moves.push(position);

            break;
        }

        moves.push(position);
    }

    for (let i = indexCol - 1; i >= 0; i--) {
        const position = LETTERS[i] + INDEXES[indexRow];

        if (board[position]) {
            if (board[position].color !== color) moves.push(position);

            break;
        }

        moves.push(position);
    }

    for (let i = indexRow + 1; i < INDEXES.length; i++) {
        const position = LETTERS[indexCol] + INDEXES[i];

        if (board[position]) {
            if (board[position].color !== color) moves.push(position);

            break;
        }

        moves.push(position);
    }

    for (let i = indexRow - 1; i >= 0; i--) {
        const position = LETTERS[indexCol] + INDEXES[i];

        if (board[position]) {
            if (board[position].color !== color) moves.push(position);

            break;
        }

        moves.push(position);
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