import './Game.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Board from './Board/Board';
import { useAppSelector } from '../../../Store/hooks';
import { GameStage } from '../../../Enums';
import GameHeader from './GameHeader/GameHeader';

const Game = () => {
  const stage = useAppSelector((state) => state.game.stage);
  const navigate = useNavigate();

  useEffect(() => {
    if (stage === GameStage.Settings) {
      navigate('/');
    }
  }, []);

  return (
    <div className="game__container">
      <div className="game">
        <GameHeader />
        <Board />
      </div>
    </div>
  );
};

export default Game;
