import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Cell = {
  x: number;
  y: number;
  isMine: boolean;
  neighbour: number;
  isRevealed: boolean;
  isEmpty: boolean;
  isFlagged: boolean;
}

const initialState: Cell[][] = [[]];

export const gameFieldSlice = createSlice({
  name: 'gameFieldSlice',
  initialState,
  reducers: {
    setGameField: (state:Cell[][], { payload }) => payload,

  },
});

export const { setGameField } = gameFieldSlice.actions;
export default gameFieldSlice.reducer;
