import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Select } from '../Select/Select';
import './Settings.scss';
import { createGameField } from '../../../game-logic/createGame';
import { setGameField } from '../../../store/gameFieldSlice';
import { setMines } from '../../../store/minesSlice';
import { GameField } from '../../_game/GameField/GameField';

const options = [8, 12, 16, 20, 24];
const mineAmount = [10, 15, 20, 25, 30, 35, 40];

export const Settings = () => {
  const [settings, setSettings] = useState({ width: 8, height: 8, mines: 10 });
  const [gameFieldLocal, setGameFieldLocal] = useState(useAppSelector((state) => state.gameField));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onButtonClick = () => {
    const { field, mineList } = createGameField(settings);
    dispatch(setGameField(field));
    dispatch(setMines(mineList));

    console.log('F:', field);
    console.log('M:', mineList);
    navigate('/play');
  };

  return (
    <div>
      <form className="settings__wrapper">
        <Select
          title="width"
          options={options}
          toggleSelected={(width) => setSettings({ ...settings, width })}
        />

        <Select
          title="height"
          options={options}
          toggleSelected={(height) => setSettings({ ...settings,
            height })}
        />

        <Select
          title="mines"
          options={mineAmount}
          toggleSelected={(mines) => setSettings({ ...settings,
            mines })}
        />

        <button
          className="form__button"
          onClick={(event) => {
            event.preventDefault();
            onButtonClick();
          }}
        >
          Start
        </button>
      </form>
    </div>
  );
};
