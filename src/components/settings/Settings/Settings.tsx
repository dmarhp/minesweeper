import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Select } from '../Select/Select';
import './Settings.scss';
import { createGameField } from '../../../game-logic/createGame';
import { saveGameField } from '../../../store/gameFieldSlice';
import { saveMines } from '../../../store/minesSlice';
import { saveSettings } from '../../../store/settingSlice';

const options = [8, 12, 16, 20, 24];
const mineAmount = [10, 15, 20, 25, 30, 35, 40];

export const Settings = () => {
  const [settings, setSettings] = useState(useAppSelector((state) => state.settings));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onButtonClick = () => {
    const { field, mineList } = createGameField(settings);
    dispatch(saveSettings(settings));
    dispatch(saveGameField(field));
    dispatch(saveMines(mineList));
    navigate('/play');
  };

  return (
    <div>
      <form className="settings__wrapper">
        <div className="settings__options">
          <Select
            title="Field width"
            options={options}
            selected={settings.width}
            toggleSelected={(width) => setSettings({ ...settings, width })}
          />

          <Select
            title="Field height"
            options={options}
            selected={settings.height}
            toggleSelected={(height) => setSettings({ ...settings, height })}
          />

          <Select
            title="Amount of mines"
            options={mineAmount}
            selected={settings.mines}
            toggleSelected={(mines) => setSettings({ ...settings, mines })}
          />
        </div>

        <button
          className="game_settings_submit"
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
