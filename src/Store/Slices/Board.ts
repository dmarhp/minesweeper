import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICell } from '../../Interfaces';

const initialState: ICell[][] = [];

const boardSlice = createSlice({
  name: 'boardSlice',
  initialState,
  reducers: {
    setBoard: (state: ICell[][], { payload }: PayloadAction<ICell[][]>) => payload,
  },
});

export const { setBoard } = boardSlice.actions;
export default boardSlice.reducer;
