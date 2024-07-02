import { boardType } from "../constants/_types";
import canMoveBishop from "./canMoveBishop";
import canMoveRook from "./canMoveRook";

export default function canMoveQueen(color: string, from: string, board: boardType, recurse = true) {
    const fromRook = canMoveRook(color, from, board, recurse);
    const fromBishop = canMoveBishop(color, from, board, recurse);

    const moves = fromRook.concat(fromBishop);

    return moves;
}
