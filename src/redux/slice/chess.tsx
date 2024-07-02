import { createSlice } from "@reduxjs/toolkit";
import { canMove } from "../../shared/canMove/canMove";
import { boardType } from "../../shared/constants/_types";
import { checkForCheckmate } from "../../shared/checkForCheckmate";

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
