import { createSlice } from "@reduxjs/toolkit";

import { canMove, checkForCheckmate, generateFigures } from "../../../../entities/chess";
import type { BoardType } from "../../../../entities/chess";

const turnOrderRule: { [key: string]: string } = {
  white: "black",
  black: "white",
};

const chess = createSlice({
  name: "chess",
  initialState: {
    board: {} as BoardType,
    clickedPosition: '',
    posibleMoves: [] as string[],
    turnOrder: "white",
    check: false,
    checkmate: false,
  },
  reducers: {
    initBoardWithFigures: (state) => {
      state.board = {};
      state.clickedPosition = '';
      state.posibleMoves = [];
      state.turnOrder = "white";
      state.check = false;
      state.checkmate = false;

      const figures = generateFigures();

      for (const figure of figures) {
        const key = figure.position;

        state.board[key] = figure;
      }
    },
    cellOnClick: (state, { payload: clickedPosition }) => {
      if (state.checkmate) return;

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
        state.board = { ...state.board, [clickedPosition]: state.board[state.clickedPosition] };
        state.board[clickedPosition].position = clickedPosition;
        delete state.board[state.clickedPosition];

        if (state.board[clickedPosition].type === 'pawn' && '18'.indexOf(clickedPosition[1]) > -1) state.board[clickedPosition].type = 'queen';
        
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
        state.board = { ...state.board, [clickedPosition]: state.board[state.clickedPosition] };
        state.board[clickedPosition].position = clickedPosition;
        delete state.board[state.clickedPosition];

        if (state.board[clickedPosition].type === 'pawn' && '18'.indexOf(clickedPosition[1]) > -1) state.board[clickedPosition].type = 'queen';

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
