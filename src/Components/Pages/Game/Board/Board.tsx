import './Board.scss';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../Store/hooks';
import { ICell } from '../../../../Interfaces';
import Cell from './Cell/Cell';
import boardHelper from '../../../../Helpers/Board';
import { setGameFinished, setMinesLeft, togglePause } from '../../../../Store/Slices/Game';
import { GameStatus } from '../../../../Enums';

const Board = () => {
  const [revealed, setRevealed] = useState<ICell[]>([]);
  const [flags, setFlags] = useState<ICell[]>([]);
  const [highlighted, setHighlighted] = useState<ICell | null>(null);
  const { board, game: { isFinished, status, settings: { mines } } } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setRevealed([]);
    setFlags([]);
    setHighlighted(null);
  }, [board]);

  useEffect(() => {
    dispatch(setMinesLeft(mines - flags.length));
  }, [flags]);

  useEffect(() => {
    if (revealed.length === board.flat().length - mines) {
      flagAllCellWithMines();
      dispatch(setGameFinished(GameStatus.Win));
    }
  }, [revealed]);

  const isFlagged = ({ x, y }: ICell) => (
    flags.some((f) => f.x === x && f.y === y)
  );

  const isRevealed = ({ x, y }: ICell, revealedCells: ICell[] = revealed) => (
    revealedCells.some((r) => r.x === x && r.y === y)
  );

  const flagAllCellWithMines = () => {
    const updatedFlags = board.flat().filter((c) => c.isMine);
    setFlags(updatedFlags);
  };

  const revealBoard = () => {
    setRevealed(board.flat());
    setFlags([]);
  };

  const loseGemaHandler = () => {
    revealBoard();
    dispatch(setGameFinished(GameStatus.Lose));
  };

  const revealEmptyCells = (cell: ICell, updatedRevealed: ICell[]) => {
    const area = boardHelper.traverseBoard(cell, board);
    area.forEach((item) => {
      if (!item.isMine && !isRevealed(item, updatedRevealed)) {
        updatedRevealed.push(item);
        if (isFlagged(item)) {
          handleFlag(item);
        }
        if (item.neighbours === 0) {
          revealEmptyCells(item, updatedRevealed);
        }
      }
    });
  };

  const handleReveal = (cell: ICell) => {
    if (isFinished || isRevealed(cell) || isFlagged(cell)) return;

    if (cell.isMine) {
      setHighlighted(cell);
      loseGemaHandler();
    } else {
      const updatedRevealed = [...revealed, cell];
      if (cell.neighbours === 0) {
        revealEmptyCells(cell, updatedRevealed);
      }
      setRevealed(updatedRevealed);
    }

    if (status === GameStatus.Pause) {
      dispatch(togglePause());
    }
  };

  const handleFlag = (cell: ICell) => {
    if (isFinished || isRevealed(cell) || flags.length === mines) return;

    if (!isFlagged(cell)) {
      setFlags([...flags, cell]);
    } else {
      const updatedFlags = flags.filter((f) => f.x !== cell.x || f.y !== cell.y);
      setFlags(updatedFlags);
    }
  };

  return (
    <div className="board">
      {board.map((row, index) => (
        <div className="row" key={`row_${index}`}>
          {row.map((cell) => (
            <Cell
              cell={cell}
              isFlagged={isFlagged(cell)}
              isRevealed={isRevealed(cell)}
              isHighlighted={cell.x === highlighted?.x && cell.y === highlighted?.y}
              handleReveal={() => handleReveal(cell)}
              handleFlag={() => handleFlag(cell)}
              key={`cell_${cell.x}_${cell.y}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
