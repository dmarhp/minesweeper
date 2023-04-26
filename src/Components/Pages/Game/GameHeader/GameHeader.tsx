import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../Store/hooks';
import './GameHeader.scss';
import Counter from '../../../Common/Counter/Counter';
import gameHelper from '../../../../Helpers/Game';
import { GameStatus, Icon } from '../../../../Enums';
import boardHelper from '../../../../Helpers/Board';
import { setBoard } from '../../../../Store/Slices/Board';
import { setStartNewGame } from '../../../../Store/Slices/Game';
import IconProvider from '../../../IconProvider/IconProvider';

const GameHeader = () => {
  const { board, game: { status, minesLeft, settings } } = useAppSelector((state) => state);
  const [counter, setCounter] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (gameHelper.isGameActive()) {
      intervalId = setInterval(() => {
        setCounter(counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [status, counter]);

  useEffect(() => {
    setCounter(0);
  }, [board]);

  const getEmoji = () => {
    switch (status) {
      case GameStatus.Play:
        return Icon.FaceSmile;
      case GameStatus.Win:
        return Icon.FaceWin;
      case GameStatus.Lose:
        return Icon.FaceLose;
      case GameStatus.Pause:
      default:
        return Icon.FaceNeutral;
    }
  };

  const startNewGameHandler = () => {
    const board = boardHelper.createGameBoard(settings);
    dispatch(setBoard(board));
    dispatch(setStartNewGame(settings.mines));
  };

  return (
    <div className="game-header">
      <Counter value={minesLeft} counterId="MinesCounter" />
      <div
        className={`game-header__face ${status === GameStatus.Lose ? 'loser' : ''}`}
        onClick={startNewGameHandler}
      >
        <IconProvider icon={getEmoji()} />
      </div>
      <Counter value={counter} counterId="TimeCounter" />
    </div>
  );
};

export default GameHeader;
