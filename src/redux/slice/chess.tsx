import { createSlice } from "@reduxjs/toolkit";
import { boardType } from "../../components/board/types";
import canMoveRook from "../../components/figures/rook/canMoveRook";
import canMovePawn from "../../components/figures/pawn/canMovePawn";
import canMoveQueen from "../../components/figures/queen/canMoveQueen";
import canMoveKnight from "../../components/figures/knight/canMoveKnight";
import canMoveKing from "../../components/figures/king/canMoveKing";
import canMoveBishop from "../../components/figures/bishop/canMoveBishop";
import { cloneBoard } from "../../components/board/cloneBoard";
import { kingUnderAttack } from "../../components/board/kingUnderAttack";

export function canMove(board: any, startPosition: any, recursion = false) {
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

function checkForCheckmate(board: any) {
  const result = { check: false, checkmate: false };

  for (const position in board) {
    if (!board[position]) continue;

    const posibles = canMove(board, position, false);

    for (const posiblePosition of posibles) {
      if (
        board[posiblePosition] &&
        board[posiblePosition].type === "king" &&
        board[posiblePosition].color !== board[position].color
      ) {
        result.check = true;

        const kingMoves = canMove(board, position, true);

        if (!kingMoves.length) {
          let flag = true;

          for (const friendPosition in board) {
            if (
              !board[friendPosition] ||
              board[friendPosition].color !== board[posiblePosition].color ||
              board[friendPosition].type === "king"
            )
              continue;

            const friendMoves = canMove(board, friendPosition, false);

            for (const friendMove of friendMoves) {
              const boardCopy = cloneBoard(board);

              boardCopy[friendMove] = boardCopy[friendPosition];
              delete boardCopy[friendPosition];

              const checkAfterFriendMove = kingUnderAttack(
                boardCopy,
                board[posiblePosition].color
              );

              if (!checkAfterFriendMove) flag = false;
            }
          }

          if (flag) result.checkmate = true;
        }
      }
    }
  }
  return result;
}

const turnOrderRule: { [key: string]: string } = {
  white: "black",
  black: "white",
};

const chess = createSlice({
  name: "chess",
  initialState: {
    board: {} as boardType,
    clickedPosition: '',
    posibleMoves: [] as string[],
    turnOrder: "white",
    check: false,
    checkmate: false,
  },
  reducers: {
    initBoardWithFigures: (state, { payload: data }) => {
      for (const figure of data) {
        const key = figure.position;

        state.board[key] = figure;
      }
    },
    cellOnClick: (state, { payload: clickedPosition }) => {
      console.log('cellOnClick', state.board['E2']);

      // выбор чем ходить
      if (state.board[clickedPosition] && state.board[clickedPosition].color === state.turnOrder) {
        state.clickedPosition = clickedPosition;
        state.posibleMoves = canMove(state.board, clickedPosition, true);

        return;
      }

      // переход на пустую клетку
      if (
        state.clickedPosition &&
        state.posibleMoves.includes(clickedPosition) &&
        !state.board[clickedPosition]
      ) {
        state.board = { ...state.board, [clickedPosition]: state.board[state.clickedPosition] }
        state.board[clickedPosition].position = clickedPosition;
        delete state.board[state.clickedPosition];

        state.turnOrder = turnOrderRule[state.turnOrder];

        state.clickedPosition = '';
        state.posibleMoves = [];

        const { check, checkmate } = checkForCheckmate(state.board);

        state.check = check;
        state.checkmate = checkmate;

        return;
      }

      // хаваем чужую фигуру
      if (
        state.clickedPosition &&
        state.posibleMoves.includes(clickedPosition) &&
        state.board[clickedPosition] &&
        state.board[clickedPosition].color !== state.turnOrder
      ) {
        state.board = { ...state.board, [clickedPosition]: state.board[state.clickedPosition] }
        state.board[clickedPosition].position = clickedPosition;
        delete state.board[state.clickedPosition]

        state.turnOrder = turnOrderRule[state.turnOrder];

        state.clickedPosition = '';
        state.posibleMoves = [];

        const { check, checkmate } = checkForCheckmate(state.board);

        state.check = check;
        state.checkmate = checkmate;

        return;
      }
    },
  },
});
export default chess.reducer;
export const { initBoardWithFigures, cellOnClick } = chess.actions;
