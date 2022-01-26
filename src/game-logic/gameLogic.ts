export interface CellProp {
  x: number;
  y: number;
  isMine: boolean;
  neighbour: number;
  isRevealed: boolean;
  isEmpty: boolean;
  isFlagged: boolean;
}

export type Settings ={
  height: number,
  width: number,
  mines: number
}
