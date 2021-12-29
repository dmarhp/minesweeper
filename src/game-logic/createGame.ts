import { Settings } from '../store/settingSlice';
import { Cell } from '../store/gameFieldSlice';

export const traverseBoard = ({ x, y }:Cell, field: Cell[][], settings: Settings) => {
  const el: Cell[] = [];

  // up
  if (x > 0) {
    el.push(field[x - 1][y]);
  }

  // down
  if (x < settings.height - 1) {
    el.push(field[x + 1][y]);
  }

  // left
  if (y > 0) {
    el.push(field[x][y - 1]);
  }

  // right
  if (y < settings.width - 1) {
    el.push(field[x][y + 1]);
  }

  // top left
  if (x > 0 && y > 0) {
    el.push(field[x - 1][y - 1]);
  }

  // top right
  if (x > 0 && y < settings.width - 1) {
    el.push(field[x - 1][y + 1]);
  }

  // bottom right
  if (x < settings.height - 1 && y < settings.width - 1) {
    el.push(field[x + 1][y + 1]);
  }

  // bottom left
  if (x < settings.height - 1 && y > 0) {
    el.push(field[x + 1][y - 1]);
  }

  return el;
};

const getNeighbours = (field: Cell[][], settings: Settings) => {
  field.forEach((row) => row.forEach((cell: Cell) => {
    if (!cell.isMine) {
      let mine = 0;
      const area = traverseBoard(cell, field, settings);

      area.forEach((item) => {
        if (item.isMine) {
          mine++;
        }
      });

      if (mine === 0) {
        // eslint-disable-next-line no-param-reassign
        cell.isEmpty = true;
      }

      // eslint-disable-next-line no-param-reassign
      cell.neighbour = mine;
    }
  }));

  return field;
};

const plantMines = (field: Cell[][], mineList: {x:number, y: number}[], { width, height, mines }: Settings) => {
  let minesPlanted = 0;

  while (minesPlanted < mines) {
    const mineX = Math.floor(Math.random() * height);
    const mineY = Math.floor(Math.random() * width);

    if (!(field[mineX][mineY].isMine)) {
      // eslint-disable-next-line no-param-reassign
      field[mineX][mineY].isMine = true;
      minesPlanted++;
      mineList.push({ x: mineX, y: mineY });
    }
  }
};

const createEmptyArray = ({ height, width }: Settings, field: Cell[][]) => {
  for (let i = 0; i < height; i++) {
    const row = [];
    for (let j = 0; j < width; j++) {
      const cell = {
        x: i,
        y: j,
        isMine: false,
        neighbour: 0,
        isRevealed: false,
        isEmpty: false,
        isFlagged: false,
      };
      row.push(cell);
    }
    field.push(row);
  }
};

export const createGameField = (settings: Settings) => {
  const field: Cell[][] = [];
  const mineList: {x: number, y: number}[] = [];

  createEmptyArray(settings, field);
  plantMines(field, mineList, settings);
  getNeighbours(field, settings);

  return { field, mineList };
};
