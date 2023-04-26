import Store from '../../Store';
import { GameStatus } from '../../Enums';

const isGameFinished = () => {
  const { isFinished, status } = Store.getState().game;
  return !isFinished
    ? [GameStatus.Win, GameStatus.Lose].includes(status)
    : true;
};

const isGameActive = () => {
  const { isFinished, status } = Store.getState().game;
  return !isFinished && GameStatus.Play === status;
};

export default {
  isGameFinished,
  isGameActive,
};
