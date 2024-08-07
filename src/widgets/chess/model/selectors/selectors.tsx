import type { RootState } from "../store/store";

export const boardSelector = (state: RootState) => state.chess.board;

export const clickedPositionSelector = (state: RootState) => state.chess.clickedPosition;

export const posibleMovesSelector = (state: RootState) => state.chess.posibleMoves;

export const checkSelector = (state: RootState) => state.chess.check;

export const checkmateSelector = (state: RootState) => state.chess.checkmate;

export const turnOrderSelector = (state: RootState) => state.chess.turnOrder;