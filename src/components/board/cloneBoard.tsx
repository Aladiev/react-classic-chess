import canMoveBishop from "../figures/bishop/canMoveBishop";
import canMoveKing from "../figures/king/canMoveKing";
import canMoveKnight from "../figures/knight/canMoveKnight";
import canMovePawn from "../figures/pawn/canMovePawn";
import canMoveQueen from "../figures/queen/canMoveQueen";
import canMoveRook from "../figures/rook/canMoveRook";
import { boardType } from "./types";

export const canMoveDict: { [key: string]: Function } = {
    'pawn': canMovePawn,
    'king': canMoveKing,
    'rook': canMoveRook,
    'bishop': canMoveBishop,
    'queen': canMoveQueen,
    'knight': canMoveKnight
};


export const cloneBoard = (boardToCopy: boardType) => {
    const board: boardType = {};

    for (const position in boardToCopy) {
      board[position] = { color: boardToCopy[position].color, type: boardToCopy[position].type, position }
    }

    return board;
  }
