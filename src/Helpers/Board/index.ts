import { ICell, IGameSettings } from '../../Interfaces';

const traverseBoard = (cell: ICell, board: ICell[][]) => {
  const { x, y } = cell;
  const height = board.length;
  const width = board[0].length;
  const area: ICell[] = [];

  // up
  if (x > 0) {
    area.push(board[x - 1][y]);
  }

  // down
  if (x < height - 1) {
    area.push(board[x + 1][y]);
  }

  // left
  if (y > 0) {
    area.push(board[x][y - 1]);
  }

  // right
  if (y < width - 1) {
    area.push(board[x][y + 1]);
  }

  // top left
  if (x > 0 && y > 0) {
    area.push(board[x - 1][y - 1]);
  }

  // top right
  if (x > 0 && y < width - 1) {
    area.push(board[x - 1][y + 1]);
  }

  // bottom right
  if (x < height - 1 && y < width - 1) {
    area.push(board[x + 1][y + 1]);
  }

  // bottom left
  if (x < height - 1 && y > 0) {
    area.push(board[x + 1][y - 1]);
  }
  return area;
};

const setNeighbours = (board: ICell[][]) => {
  board.forEach((row) => {
    row.forEach((cell) => {
      if (!cell.isMine) {
        const area = traverseBoard(cell, board);
        cell.neighbours = area.filter((c) => c.isMine).length;
      }
    });
  });
};

const plantMines = (board: ICell[][], mines: number) => {
  const height = board.length;
  const width = board[0].length;
  let minesPlanted = 0;

  while (minesPlanted < mines) {
    const mineX = Math.floor(Math.random() * height);
    const mineY = Math.floor(Math.random() * width);

    if (!(board[mineX][mineY].isMine)) {
      board[mineX][mineY].isMine = true;
      minesPlanted++;
    }
  }
};

const createEmptyCell = (x: number, y: number) => (
    { x, y, neighbours: 0, isMine: false, isRevealed: false } as ICell
);

const createEmptyBoard = ({ height, width }: IGameSettings) => (
  Array.from({ length: height }, (_, x) => (
    Array.from({ length: width }, (_, y) => createEmptyCell(x, y))
  ))
);

const createGameBoard = (settings: IGameSettings) => {
  const board = createEmptyBoard(settings);
  plantMines(board, settings.mines);
  setNeighbours(board);
  return board;
};

const compareTwoCells = (cell1: ICell, cell2: ICell) => (
  cell1.x === cell2.x && cell1.y === cell2.y
);

export default {
  traverseBoard,
  createGameBoard,
  compareTwoCells,
};
