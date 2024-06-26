export type boardType = {
  [key: string]: {
    moveTo: Function;
    color: string;
    canMove: Function;
    type: string;
  };
};
export type boardTypeWithoutMoving = {
  [key: string]: { color: string; type: string; canMove: Function };
};
