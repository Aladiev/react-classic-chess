import { createSlice } from "@reduxjs/toolkit";
import { boardType } from "../../components/board/types";
import canMoveRook from "../../components/figures/rook/canMoveRook";
import canMovePawn from "../../components/figures/pawn/canMovePawn";
import canMoveQueen from "../../components/figures/queen/canMoveQueen";
import canMoveKnight from "../../components/figures/knight/canMoveKnight";
import canMoveKing from "../../components/figures/king/canMoveKing";
import canMoveBishop from "../../components/figures/bishop/canMoveBishop";

function canMove(board: any, startPosition: any) {
  const figure = board[startPosition]

  switch (figure.type) {
    case 'rook':
      return canMoveRook(figure.color, startPosition, board, false);
    case 'pawn':
      return canMovePawn(figure.color, startPosition, board, false);
    case 'queen':
      return canMoveQueen(figure.color, startPosition, board, false);
    case 'king':
      return canMoveKing(figure.color, startPosition, board, false);
    case 'knight':
      return canMoveKnight(figure.color, startPosition, board, false);
    case 'bishop':
      return canMoveBishop(figure.color, startPosition, board, false);
    default:
      return [];
  }
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
        state.posibleMoves = canMove(state.board, clickedPosition);

        return;
      }

      // переход на пустую клетку
      if (
        state.clickedPosition &&
        state.posibleMoves.includes(clickedPosition) &&
        !state.board[clickedPosition]
      ) {
        state.board = {...state.board, [clickedPosition]: state.board[state.clickedPosition]}
        state.board[clickedPosition].position = clickedPosition;
        delete state.board[state.clickedPosition];

        state.turnOrder = turnOrderRule[state.turnOrder];

        state.clickedPosition = '';
        state.posibleMoves = [];

        return;
      }

      // хаваем чужую фигуру
      if (
        state.clickedPosition &&
        state.posibleMoves.includes(clickedPosition) &&
        state.board[clickedPosition] &&
        state.board[clickedPosition].color !== state.turnOrder
      ) {
        state.board = {...state.board, [clickedPosition]: state.board[state.clickedPosition]}
        state.board[clickedPosition].position = clickedPosition;
        delete state.board[state.clickedPosition]

        state.turnOrder = turnOrderRule[state.turnOrder];

        state.clickedPosition = '';
        state.posibleMoves = [];

        return;
      }
    },
  },
});
export default chess.reducer;
export const { initBoardWithFigures, cellOnClick } = chess.actions;
