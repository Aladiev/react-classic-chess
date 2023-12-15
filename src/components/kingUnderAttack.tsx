type boardTypeWithoutMoving = { [key: string]: { color: string, type: string, canMove: Function } };

export const kingUnderAttack = (board: boardTypeWithoutMoving, color: string) => {
    for (const position in board) {
      if (!board[position] || board[position].color === color) continue;

      const posibles = board[position].canMove(false);

      for (const posiblePosition of posibles) {
        if (board[posiblePosition] && board[posiblePosition].type === 'king' && board[posiblePosition].color !== board[position].color) return true;
      }
    }

    return false;
  }
