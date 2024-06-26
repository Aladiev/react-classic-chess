import { RootState } from "../store";

export const boardSelector = (state: RootState) => {
  return state.chess.initialBoard;
};
