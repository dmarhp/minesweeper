import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Difficulty, GameStage, GameStatus } from '../../Enums';
import { IGameSettings } from '../../Interfaces';

export interface IGame {
    status: GameStatus;
    isFinished: boolean;
    minesLeft: number;
    stage: GameStage;
    isSmallScreen: boolean;
    settings: {
      mines: number,
      height: number,
      width: number,
      difficulty: Difficulty
    }
}

const initialState = {
  status: GameStatus.Pause,
  isFinished: false,
  minesLeft: 0,
  isSmallScreen: false,
  stage: GameStage.Settings,
  settings: {
    width: 9,
    height: 9,
    mines: 10,
    difficulty: Difficulty.Beginner,
  },
} as IGame;

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    setStartNewGame: (state: IGame, { payload }: PayloadAction<number>) => {
      state.status = GameStatus.Pause;
      state.isFinished = false;
      state.minesLeft = payload;
    },

    setGameFinished: (state: IGame, { payload }: PayloadAction<GameStatus>) => {
      if ([GameStatus.Win, GameStatus.Lose].includes(payload)) {
        state.status = payload;
        state.isFinished = true;
      }
    },

    togglePause: (state: IGame) => {
      const isPaused = state.status === GameStatus.Pause;
      state.status = isPaused ? GameStatus.Play : GameStatus.Pause;
    },

    setMinesLeft: (state: IGame, { payload }: PayloadAction<number>) => {
      state.minesLeft = payload;
    },

    saveSettings: (state: IGame, { payload }: PayloadAction<IGameSettings>) => {
      state.settings = payload;
      state.stage = GameStage.Game;
    },

    setIsSmallScreen: (state: IGame, { payload } : PayloadAction<boolean>) => {
      state.isSmallScreen = payload;
    },
  },
});

export const { setGameFinished, togglePause, setMinesLeft, setStartNewGame, saveSettings, setIsSmallScreen } = gameSlice.actions;
export default gameSlice.reducer;
