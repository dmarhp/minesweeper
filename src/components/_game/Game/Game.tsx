import { useState } from 'react';
import { GameField } from '../GameField/GameField';
import { GameStatusType } from '../../../game-logic/Types';
import './Game.scss';
import { GameStats } from '../GameStats/GameStats';
import { useAppSelector } from '../../../store/hooks';

export const Game = () => {
  const [gameStatus, setGameStatus] = useState(GameStatusType.PLAY);
  const [minesLeft, setMinesLeft] = useState(useAppSelector((state) => state.mineList.length));

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
