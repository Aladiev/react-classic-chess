import { cloneBoard } from "../../screens/board/cloneBoard";
import { letters, indexes } from "../../screens/board/config.json";
import { kingUnderAttack } from "../../screens/board/kingUnderAttack";
import type { boardType } from "../constants/_types";

export default function canMoveRook(color: string, from: string, board: boardType, recurse = true) {
    const [col, _] = [...from];
    const row = Number(_);

    const moves = [];

    const indexCol = letters.indexOf(col);
    const indexRow = indexes.indexOf(row);

    for (let i = indexCol + 1; i < letters.length; i++) {
        const position = letters[i] + indexes[indexRow];

        if (board[position]) {
            if (board[position].color !== color) moves.push(position);

            break;
        }

        moves.push(position);
    }

    for (let i = indexCol - 1; i >= 0; i--) {
        const position = letters[i] + indexes[indexRow];

        if (board[position]) {
            if (board[position].color !== color) moves.push(position);

            break;
        }

        moves.push(position);
    }

    for (let i = indexRow + 1; i < indexes.length; i++) {
        const position = letters[indexCol] + indexes[i];

        if (board[position]) {
            if (board[position].color !== color) moves.push(position);

            break;
        }

        moves.push(position);
    }

    for (let i = indexRow - 1; i >= 0; i--) {
        const position = letters[indexCol] + indexes[i];

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