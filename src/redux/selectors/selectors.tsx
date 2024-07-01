import { RootState } from "../store";

export const boardSelector = (state: RootState) => {
  return state.chess.board;
};

export const clickedPositionSelector = (state: RootState) => {
  return state.chess.clickedPosition;
}

export const posibleMovesSelector = (state: RootState) => {
  return state.chess.posibleMoves;
}