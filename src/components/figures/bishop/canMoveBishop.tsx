import { boardType } from "../../board/types";
import { letters, indexes } from "../../board/config.json";
import { cloneBoard } from "../../board/cloneBoard";
import { kingUnderAttack } from "../../board/kingUnderAttack";

export default function canMoveBishop(color: string, from: string, board: boardType, recurse = true) {
    const [col, _] = from.split('');
    const row = Number(_);

    const moves = [];

    const indexCol = letters.indexOf(col);
    const indexRow = indexes.indexOf(row);

    for (let i = 1; indexCol + i < letters.length && indexRow + i < indexes.length; i++) {
        const position = letters[indexCol + i] + indexes[indexRow + i];

        if (board[position]) {
            if (board[position].color !== color) moves.push(position);

            break;
        }

        moves.push(position);
    }

    for (let i = 1; indexCol - i >= 0 && indexRow - i >= 0; i++) {
        const position = letters[indexCol - i] + indexes[indexRow - i];

        if (board[position]) {
            if (board[position].color !== color) moves.push(position);

            break;
        }

        moves.push(position);
    }

    for (let i = 1; indexCol + i < letters.length && indexRow - i >= 0; i++) {
        const position = letters[indexCol + i] + indexes[indexRow - i];

        if (board[position]) {
            if (board[position].color !== color) moves.push(position);

            break;
        }

        moves.push(position);
    }

    for (let i = 1; indexCol - i >= 0 && indexRow + i < indexes.length; i++) {
        const position = letters[indexCol - i] + indexes[indexRow + i];

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