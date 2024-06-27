import { createSlice } from "@reduxjs/toolkit";

const chess = createSlice({
  name: "chess",
  initialState: {
    initialBoard: {} as any,
  },
  reducers: {
    initBoardWithFigures: (state, action) => {
      const data = action.payload;
      const key = action.payload.positionFigure;
      delete data.positionFigure;

      state.initialBoard = {
        ...state.initialBoard,
        ...{
          [key]: data,
        },
      };
    },
  },
});
export default chess.reducer;
export const { initBoardWithFigures } = chess.actions;
