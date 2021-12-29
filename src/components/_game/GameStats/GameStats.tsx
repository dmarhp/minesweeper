import { useEffect, useState } from 'react';
import './GameStats.scss';
import { GameStatusType } from '../../../game-logic/Types';

interface GameStatsProps{
  gameStatus: GameStatusType
  minesLeft: number;
}

// eslint-disable-next-line no-undef
let timer: NodeJS.Timeout;

export const GameStats = ({ gameStatus, minesLeft }:GameStatsProps) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    if (gameStatus === GameStatusType.PLAY) {
      timer = setTimeout(() => setCounter(counter + 1), 1000);
    }
  }, [counter]);

  const getEmoji = () => {
    switch (gameStatus) {
      case GameStatusType.LOSE:
        return '😵';
      case GameStatusType.WIN:
        return '😎';
      default:
        return '🙂';
    }
  };

  const formatNumber = (number: number) => number.toLocaleString('en-US', {
    minimumIntegerDigits: 3,
    useGrouping: false,
  });

  return (
    <div className="game_window_stats-wrapper">
      <div className="game_window_stats-counter">{formatNumber(minesLeft)}</div>
      <div className="game_window_stats-emoji">{getEmoji()}</div>
      <div className="game_window_stats-counter">{formatNumber(counter)}</div>

    </div>
  );
};
