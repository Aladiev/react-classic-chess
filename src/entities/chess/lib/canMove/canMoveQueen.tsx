import canMoveBishop from "./canMoveBishop";
import canMoveRook from "./canMoveRook";
import type { BoardType } from "../../types/_types";

export default function canMoveQueen(color: string, from: string, board: BoardType, recurse = true) {
    const fromRook = canMoveRook(color, from, board, recurse);
    const fromBishop = canMoveBishop(color, from, board, recurse);

    const moves = [...fromRook, ...fromBishop];

    return moves;
}
