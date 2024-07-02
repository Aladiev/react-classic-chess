import { boardType } from "../../shared/constants/_types";

export const cloneBoard = (boardToCopy: boardType) => {
    const board: boardType = {};

    for (const position in boardToCopy) {
      board[position] = { ...boardToCopy[position] };
    }

    return board;
  }
