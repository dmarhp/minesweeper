import { createSlice } from '@reduxjs/toolkit';

export interface Settings {
  width: number;
  height: number;
  mines: number
}

const initialState = {
  width: 8,
  height: 8,
  mines: 10,
};

export const settingSlice = createSlice({
  name: 'settingSlice',
  initialState,
  reducers: {

    saveSettings: (state: Settings, { payload }) => payload,

  },
});

export const { saveSettings } = settingSlice.actions;
export default settingSlice.reducer;
