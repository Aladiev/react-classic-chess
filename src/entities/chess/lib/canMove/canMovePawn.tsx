import { cloneBoard } from "../cloneBoard";
import { LETTERS } from "../../config/config";
import { kingUnderAttack } from "../kingUnderAttack";
import type { BoardType } from "../../types/_types";

export default function canMovePawn(color: string, from: string, board: BoardType, recurse = true) {
    const [fromCol, b] = [...from];

    const fromRow = Number(b);

    const moves = [];

    if (color === 'white') {
        if (fromRow < 8 && !board[fromCol + (fromRow + 1)]) moves.push(fromCol + (fromRow + 1));

        const index = LETTERS.indexOf(fromCol);

        if (fromRow < 8 && index > 0 && board[LETTERS[index - 1] + (fromRow + 1)] && board[LETTERS[index - 1] + (fromRow + 1)].color !== color) moves.push(LETTERS[index - 1] + (fromRow + 1));
        if (fromRow < 8 && index < 7 && board[LETTERS[index + 1] + (fromRow + 1)] && board[LETTERS[index + 1] + (fromRow + 1)].color !== color) moves.push(LETTERS[index + 1] + (fromRow + 1));

        if (fromRow === 2 && !board[fromCol + (fromRow + 2)]) moves.push(fromCol + (fromRow + 2));
    }

    if (color === 'black') {
        if (fromRow > 1 && !board[fromCol + (fromRow - 1)]) moves.push(fromCol + (fromRow - 1));

        const index = LETTERS.indexOf(fromCol);

        if (fromRow > 1 && index > 0 && board[LETTERS[index - 1] + (fromRow - 1)] && board[LETTERS[index - 1] + (fromRow - 1)].color !== color) moves.push(LETTERS[index - 1] + (fromRow - 1));
        if (fromRow > 1 && index < 7 && board[LETTERS[index + 1] + (fromRow - 1)] && board[LETTERS[index + 1] + (fromRow - 1)].color !== color) moves.push(LETTERS[index + 1] + (fromRow - 1));

        if (fromRow === 7 && !board[fromCol + (fromRow - 2)]) moves.push(fromCol + (fromRow - 2));
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