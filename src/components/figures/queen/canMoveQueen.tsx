import { boardType } from "../../board/types";
import canMoveBishop from "../bishop/canMoveBishop";
import canMoveRook from "../rook/canMoveRook";

export default function canMoveQueen(color: string, from: string, board: boardType, recurse = true) {
    const fromRook = canMoveRook(color, from, board, recurse);
    const fromBishop = canMoveBishop(color, from, board, recurse);

    const moves = fromRook.concat(fromBishop);

    return moves;
}
