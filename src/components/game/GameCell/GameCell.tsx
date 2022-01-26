import './GameCell.scss';
import { Cell } from '../../../store/gameFieldSlice';

interface GameCellProps {
  cell: Cell;
  toggleLeftClick: () => void;
  toggleRightClick: ()=>void;
}

const getCellValue = (cell:Cell) => {
  const { isMine, isRevealed, isFlagged, neighbour } = cell;

  if (!isRevealed) {
    return isFlagged ? '🚩' : null;
  }

  if (isMine) {
    return '💣';
  }

  if (neighbour === 0) {
    return null;
  }
  return neighbour;
};

const getCellClassName = ({ isRevealed, isFlagged, isMine, neighbour }: Cell) => {
  let className = `cell${isRevealed ? '' : ' hidden'}`;

  if (isRevealed) {
    let neighbourColor = '';

    switch (neighbour) {
      case 1:
        neighbourColor = ' number-blue';
        break;

      case 2:
        neighbourColor = ' number-green';
        break;

      case 3:
        neighbourColor = ' number-red';
        break;

      default:
        neighbourColor = ' number-black';
        break;
    }

    className += `${isMine ? ' is-mine' : ''
    }${isFlagged ? ' is-flag' : ''
    }${neighbourColor}`;
  }

  return className;
};

export const GameCell = ({ cell, toggleLeftClick, toggleRightClick }:GameCellProps) => {
  const value = getCellValue(cell);
  const className = getCellClassName(cell);

  return (
    <div
      className={className}
      onClick={() => toggleLeftClick()}
      onContextMenu={(e) => { e.preventDefault(); toggleRightClick(); }}
    >
      {value}
    </div>
  );
};
