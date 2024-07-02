import canMoveBishop from "./canMoveBishop";
import canMoveRook from "./canMoveRook";
import type { boardType } from "../constants/_types";

export default function canMoveQueen(color: string, from: string, board: boardType, recurse = true) {
    const fromRook = canMoveRook(color, from, board, recurse);
    const fromBishop = canMoveBishop(color, from, board, recurse);

    const moves = [...fromRook, ...fromBishop];

    return moves;
}
