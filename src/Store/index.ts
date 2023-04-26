import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './Slices/Game';
import boardReducer from './Slices/Board';

const store = configureStore({
  reducer: {
    game: gameReducer,
    board: boardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
