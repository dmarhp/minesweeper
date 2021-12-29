import { configureStore } from '@reduxjs/toolkit';
import settingReducer from './settingSlice';
import gameFieldReducer from './gameFieldSlice';
import mineReducer from './minesSlice';

export const store = configureStore({
  reducer: {
    settings: settingReducer,
    gameField: gameFieldReducer,
    mineList: mineReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
