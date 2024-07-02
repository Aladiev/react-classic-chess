import { cloneBoard } from "../../screens/board/cloneBoard";
import { kingUnderAttack } from "../../screens/board/kingUnderAttack";
import { letters } from "../../screens/board/config.json";
import { boardType } from "../constants/_types";

export default function canMovePawn(color: string, from: string, board: boardType, recurse = true) {
    const [fromCol, b] = from.split('');

    const fromRow = Number(b);

    const moves = [];

    if (color === 'white') {
        if (fromRow < 8 && !board[fromCol + (fromRow + 1)]) moves.push(fromCol + (fromRow + 1));

        const index = letters.indexOf(fromCol);

        if (fromRow < 8 && index > 0 && board[letters[index - 1] + (fromRow + 1)] && board[letters[index - 1] + (fromRow + 1)].color !== color) moves.push(letters[index - 1] + (fromRow + 1));
        if (fromRow < 8 && index < 7 && board[letters[index + 1] + (fromRow + 1)] && board[letters[index + 1] + (fromRow + 1)].color !== color) moves.push(letters[index + 1] + (fromRow + 1));

        if (fromRow === 2 && !board[fromCol + (fromRow + 2)]) moves.push(fromCol + (fromRow + 2));
    }

    if (color === 'black') {
        if (fromRow > 1 && !board[fromCol + (fromRow - 1)]) moves.push(fromCol + (fromRow - 1));

        const index = letters.indexOf(fromCol);

        if (fromRow > 1 && index > 0 && board[letters[index - 1] + (fromRow - 1)] && board[letters[index - 1] + (fromRow - 1)].color !== color) moves.push(letters[index - 1] + (fromRow - 1));
        if (fromRow > 1 && index < 7 && board[letters[index + 1] + (fromRow - 1)] && board[letters[index + 1] + (fromRow - 1)].color !== color) moves.push(letters[index + 1] + (fromRow - 1));

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