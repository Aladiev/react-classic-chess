export type boardType = { [key: string]: { color: string, type: string, position: string } };


export type boardTypeWithoutMoving = { [key: string]: { color: string, type: string, canMove: Function } };