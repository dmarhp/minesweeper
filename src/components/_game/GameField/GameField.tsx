import React, { useState } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { Mine } from '../../../store/minesSlice';
import { GameCell } from '../GameCell/GameCell';
import './GameField.scss';
import { Cell } from '../../../store/gameFieldSlice';
import { traverseBoard } from '../../../game-logic/createGame';
import { GameStatusType } from '../../../game-logic/Types';

let flags: Mine[] = [];

interface GameFieldProps{
  gameStatus: GameStatusType;
  toggleStatus: (status: GameStatusType) => void;
  toggleMinesLeft: (minesLeft: number)=> void,
}

export const GameField = ({ gameStatus, toggleStatus, toggleMinesLeft }:GameFieldProps) => {
  const [field, setField] = useState(useAppSelector((state) => state.gameField));
  const mineList = useAppSelector((state) => state.mineList);
  const settings = useAppSelector((state) => state.settings);
  const gameField111 = JSON.parse(JSON.stringify(field));

  const revealEmpty = (cell: Cell) => {
    const area = traverseBoard(cell, gameField111, settings);

    area.forEach((item) => {
      const { x, y, isFlagged, isRevealed, isEmpty, isMine } = item;

      if (!isFlagged && !isRevealed && (isEmpty || !isMine)) {
        gameField111[x][y].isRevealed = true;

        if (isEmpty) {
          revealEmpty(item);
        }
      }
    });
  };

  const checkWinner = () => {
    let winner = false;
    const mines = mineList.length;

    if (flags.length === mines) {
      let countMines = mines;

      flags.forEach((flag) => {
        mineList.forEach((mine) => {
          if (JSON.stringify(flag) === JSON.stringify(mine)) {
            countMines--;
          }
        });
      });

      winner = countMines === 0;
    } else {
      let hiddenCells = 0;
      gameField111.forEach((row: Cell[]) => (
        row.forEach((rowCell) => {
          if (!rowCell.isRevealed) {
            hiddenCells++;
          }
        })
      ));
      winner = hiddenCells === mines;
    }
    if (winner) {
      toggleStatus(GameStatusType.WIN);
    }
  };

  const updateFlagList = () => {
    flags = [];
    gameField111.forEach((row: Cell[]) => {
      row.forEach(({ isFlagged, x, y }) => {
        if (isFlagged) {
          flags.push({ x, y });
        }
      });
    });

    const minesLeft = mineList.length - flags.length;
    toggleMinesLeft(minesLeft);
  };

  const onLeftClick = (cell: Cell) => {
    const { x, y, isRevealed, isFlagged, isMine, isEmpty } = cell;

    if (!isRevealed && !isFlagged && gameStatus === GameStatusType.PLAY) {
      gameField111[x][y].isRevealed = true;
      if (isMine) {
        gameField111.forEach((row: Cell[]) => {
          row.forEach((rowCell) => {
            // eslint-disable-next-line no-param-reassign
            rowCell.isRevealed = true;
          });
        });

        toggleStatus(GameStatusType.LOSE);
      }

      if (isEmpty) {
        revealEmpty(cell);
      }

      checkWinner();
    }

    setField(gameField111);
  };

  const onRightCluck = (cell: Cell) => {
    const { x, y, isRevealed, isFlagged } = cell;

    if (!isRevealed && gameStatus === GameStatusType.PLAY) {
      gameField111[x][y].isFlagged = (!isFlagged && flags.length < 10);
      updateFlagList();
      setField(gameField111);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="game__field">
        {
        field.map((fieldRow) => (
          fieldRow.map((cell) => (
            <React.Fragment key={`${cell.x}_${cell.y}`}>
              <GameCell
                cell={cell}
                toggleLeftClick={() => onLeftClick(cell)}
                toggleRightClick={() => onRightCluck(cell)}
              />

              {(fieldRow[fieldRow.length - 1] === cell)
                ? <div key={`Cl${fieldRow.length}`} className="clear" /> : ''}
            </React.Fragment>
          ))
        ))
      }
      </div>
    </div>
  );
};

/*
<MineCell
                key={`C${cell.x}${cell.y}`}
                className={getCellClassName(cell)}
                value={getCellValue(cell)}
                leftClick={() => handleCellClick(cell.x, cell.y)}
                rightClick={(event) => handleRightClick(event, cell.x, cell.y)}
              />
 */
