import canMoveBishop from "./figures/bishop/canMoveBishop";
import canMoveKing from "./figures/king/canMoveKing";
import canMoveKnight from "./figures/knight/canMoveKnight";
import canMovePawn from "./figures/pawn/canMovePawn";
import canMoveQueen from "./figures/queen/canMoveQueen";
import canMoveRook from "./figures/rook/canMoveRook";

export const canMoveDict: { [key: string]: Function } = {
    'pawn': canMovePawn,
    'king': canMoveKing,
    'rook': canMoveRook,
    'bishop': canMoveBishop,
    'queen': canMoveQueen,
    'knight': canMoveKnight
};

type boardTypeWithoutMoving = { [key: string]: { color: string, type: string, canMove: Function } };


export const cloneBoard = (boardToCopy: boardTypeWithoutMoving) => {
    const board: boardTypeWithoutMoving = {};

    for (const position in boardToCopy) {
      board[position] = { color: boardToCopy[position].color, type: boardToCopy[position].type, canMove: canMoveDict[boardToCopy[position].type].bind(null, boardToCopy[position].color, position, board) }
    }

    return board;
  }
