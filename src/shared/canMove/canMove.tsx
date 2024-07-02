import { boardType } from "../constants/_types";
import canMoveBishop from "./canMoveBishop";
import canMoveKing from "./canMoveKing";
import canMoveKnight from "./canMoveKnight";
import canMovePawn from "./canMovePawn";
import canMoveQueen from "./canMoveQueen";
import canMoveRook from "./canMoveRook";


export function canMove(board: boardType, startPosition: string, recursion = false) {
  const figure = board[startPosition]

  switch (figure.type) {
    case 'rook':
      return canMoveRook(figure.color, startPosition, board, recursion);
    case 'pawn':
      return canMovePawn(figure.color, startPosition, board, recursion);
    case 'queen':
      return canMoveQueen(figure.color, startPosition, board, recursion);
    case 'king':
      return canMoveKing(figure.color, startPosition, board, recursion);
    case 'knight':
      return canMoveKnight(figure.color, startPosition, board, recursion);
    case 'bishop':
      return canMoveBishop(figure.color, startPosition, board, recursion);
    default:
      return [];
  }
}