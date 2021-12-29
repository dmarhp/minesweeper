export interface CellProp {
  x: number;
  y: number;
  isMine: boolean;
  neighbour: number;
  isRevealed: boolean;
  isEmpty: boolean;
  isFlagged: boolean;
}

export type Settings ={
  height: number,
  width: number,
  mines: number
}

/*
export const createEmptyArray = (gameSettings: Settings, gameBoard: CellProp[][]) => {
  for (let i = 0; i < gameSettings.height; i++) {
    const row = [];
    for (let j = 0; j < gameSettings.width; j++) {
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
    gameBoard.push(row);
  }
};
 */

/*
const plantMines = (field: CellProp[][], gameSettings: Settings, mineList: { x: number, y: number }[]) => {
  let minesPlanted = 0;
  while (minesPlanted < gameSettings.mines) {
    const mineX = Math.floor(Math.random() * gameSettings.width);
    const mineY = Math.floor(Math.random() * gameSettings.height);

    if (!(field[mineX][mineY].isMine)) {
      // eslint-disable-next-line no-param-reassign
      field[mineX][mineY].isMine = true;
      minesPlanted += 1;
      mineList.push({ x: mineX, y: mineY });
    }
  }
};
 */

/*
const traverseBoard = (x: number, y: number, field: CellProp[][], gameSettings: Settings) => {
  const el: CellProp[] = [];

  // up
  if (x > 0) {
    el.push(field[x - 1][y]);
  }
  // down
  if (x < gameSettings.height - 1) {
    el.push(field[x + 1][y]);
  }
  // left
  if (y > 0) {
    el.push(field[x][y - 1]);
  }
  // right
  if (y < gameSettings.width - 1) {
    el.push(field[x][y + 1]);
  }
  // top left
  if (x > 0 && y > 0) {
    el.push(field[x - 1][y - 1]);
  }
  // top right
  if (x > 0 && y < gameSettings.width - 1) {
    el.push(field[x - 1][y + 1]);
  }
  // bottom right
  if (x < gameSettings.height - 1 && y < gameSettings.width - 1) {
    el.push(field[x + 1][y + 1]);
  }
  // bottom left
  if (x < gameSettings.height - 1 && y > 0) {
    el.push(field[x + 1][y - 1]);
  }

  return el;
};
 */

/*
const getNeighbours = (field: CellProp[][], gameSettings: Settings) => {
  field.forEach((row) => row.forEach((cell: CellProp) => {
    if (!cell.isMine) {
      let mine = 0;
      const area = traverseBoard(cell.x, cell.y, field, gameSettings);
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
};
 */
