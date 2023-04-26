import { IGameDifficulty } from '../Interfaces';
import { Difficulty } from '../Enums';

const beginner = {
  title: 'Beginner',
  settings: {
    difficulty: Difficulty.Beginner,
    width: 9,
    height: 9,
    mines: 10,
  },
} as IGameDifficulty;

const intermediate = {
  title: 'Intermediate',
  difficulty: Difficulty.Intermediate,
  settings: {
    difficulty: Difficulty.Intermediate,
    width: 16,
    height: 16,
    mines: 40,
  },
} as IGameDifficulty;

const expert = {
  title: 'Expert',
  settings: {
    difficulty: Difficulty.Expert,
    width: 30,
    height: 16,
    mines: 99,
  },
} as IGameDifficulty;

export const GameDifficulty = { beginner, intermediate, expert };
export const BoardWidthOptions = [9, 16, 30];
export const BoardHeightOptions = [9, 16, 30, 40];
export const MineCount = [10, 20, 30, 40, 60, 80, 99];
