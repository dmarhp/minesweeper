import { useEffect, useState } from 'react';
import './GameStats.scss';
import { useNavigate } from 'react-router-dom';
import { cleanup } from '@testing-library/react';
import { Status } from '../../../game-logic/Types';

interface GameStatsProps{
  gameStatus: Status
  minesLeft: number;
}

let timer: NodeJS.Timeout;

export const GameStats = ({ gameStatus, minesLeft }:GameStatsProps) => {
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    if (gameStatus === Status.PLAY) {
      timer = setTimeout(() => setCounter(counter + 1), 1000);
    }
  }, [counter, gameStatus]);

  useEffect(() => () => {
    cleanup();
    clearTimeout(timer);
  }, [navigate]);

  const getEmoji = () => {
    switch (gameStatus) {
      case Status.LOSE:
        return '😵';
      case Status.WIN:
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
      <div className="game_window_stats-counter">
        {formatNumber(minesLeft)}
      </div>

      <div
        className="game_window_stats-emoji"
        onClick={() => navigate('/settings')}
      >
        {getEmoji()}
      </div>

      <div className="game_window_stats-counter">
        {formatNumber(counter)}
      </div>
    </div>
  );
};
