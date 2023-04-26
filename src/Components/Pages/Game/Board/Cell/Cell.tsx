import React from 'react';
import { Icon } from '../../../../../Enums';
import { ICell } from '../../../../../Interfaces';
import IconProvider from '../../../../IconProvider/IconProvider';
import './Cell.scss';

interface IProps {
    cell: ICell;
    isFlagged: boolean;
    isRevealed: boolean;
    isHighlighted: boolean;
    handleFlag: () => void;
    handleReveal: () => void;
}

const Cell = (props: IProps) => {
  const getCellIcon = () => {
    if (!props.isRevealed) {
      return props.isFlagged ? Icon.Flag : null;
    }

    if (props.cell.isMine) {
      return Icon.Mine;
    }

    switch (props.cell.neighbours) {
      case 1:
        return Icon.Neighbour1;
      case 2:
        return Icon.Neighbour2;
      case 3:
        return Icon.Neighbour3;
      case 4:
        return Icon.Neighbour4;
      case 5:
        return Icon.Neighbour5;
      case 6:
        return Icon.Neighbour6;
      case 7:
        return Icon.Neighbour6;
      case 8:
        return Icon.Neighbour8;
      default:
        return null;
    }
  };

  const handleFlag = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    props.handleFlag();
  };

  const getCellClassName = () => {
    const hidden = props.isRevealed ? '' : 'hidden';
    const highlighted = props.isHighlighted ? 'highlighted' : '';
    return ['board--cell', hidden, highlighted]
      .filter((c) => c)
      .join(' ');
  };

  return (
    <div
      className={getCellClassName()}
      onClick={props.handleReveal}
      onContextMenu={handleFlag}
    >
      <IconProvider icon={getCellIcon()} />
    </div>
  );
};

export default Cell;
