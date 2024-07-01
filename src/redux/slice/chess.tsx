import { createSlice } from "@reduxjs/toolkit";

const chess = createSlice({
  name: "chess",
  initialState: {
    board: {} as any,
  },
  reducers: {
    initBoardWithFigures: (state, { payload: data }) => {
      const key = data.positionFigure;
      delete data.positionFigure;

      state.board = {
        ...state.board,
        ...{
          [key]: data,
        },
      };
    },
  },
});
export default chess.reducer;
export const { initBoardWithFigures } = chess.actions;
