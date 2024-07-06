import type { BoardType } from "../types/_types";

export const cloneBoard = (boardToCopy: BoardType) => {
    const board: BoardType = {};

    for (const position in boardToCopy) {
      board[position] = { ...boardToCopy[position] };
    }

    return board;
  };
