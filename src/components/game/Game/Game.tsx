import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GameField } from '../GameField/GameField';
import { Status } from '../../../game-logic/Types';
import './Game.scss';
import { GameStats } from '../GameStats/GameStats';
import { useAppSelector } from '../../../store/hooks';

export const Game = () => {
  const [gameStatus, setGameStatus] = useState(Status.WAIT);
  const [minesLeft, setMinesLeft] = useState(useAppSelector((state) => state.mineList.length));
  const navigate = useNavigate();

  useEffect(() => {
    if (!minesLeft) {
      navigate('/settings');
    }
  }, []);

  return (
    <div>
      <div className="game_window-wrapper">

        <GameStats gameStatus={gameStatus} minesLeft={minesLeft} />

        <GameField
          gameStatus={gameStatus}
          toggleStatus={(status) => setGameStatus(status)}
          toggleMinesLeft={(mines) => setMinesLeft(mines)}
        />
      </div>
    </div>
  );
};
