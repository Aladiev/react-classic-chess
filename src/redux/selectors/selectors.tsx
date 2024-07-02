import type { RootState } from "../store";

export const boardSelector = (state: RootState) => state.chess.board;

export const clickedPositionSelector = (state: RootState) => state.chess.clickedPosition;

export const posibleMovesSelector = (state: RootState) => state.chess.posibleMoves;

export const checkSelector = (state: RootState) => state.chess.check;

export const checkmateSelector = (state: RootState) => state.chess.checkmate;