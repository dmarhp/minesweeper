import { createSlice } from '@reduxjs/toolkit';
import { settingSlice } from './settingSlice';

export type Mine = {
  x: number,
  y:number
}

const initialState: Mine[] = [];

const minesSlice = createSlice({
  name: 'minesSlice',
  initialState,
  reducers: {
    setMines: (state, { payload }) => payload,
  },
});

export const { setMines } = minesSlice.actions;
export default minesSlice.reducer;
