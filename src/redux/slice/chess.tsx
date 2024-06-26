import { createSlice } from "@reduxjs/toolkit";

const chess = createSlice({
  name: "chess",
  initialState: {
    initialBoard: { key: 123 },
  },
  reducers: {
    initBoardWithFigures: (state, action) => {
      state.initialBoard = action.payload;
    },
  },
});
export default chess.reducer;
export const { initBoardWithFigures } = chess.actions;
