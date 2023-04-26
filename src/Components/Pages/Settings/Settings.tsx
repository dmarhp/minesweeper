import { useState } from 'react';
import './Settings.scss';
import { useNavigate } from 'react-router-dom';
import { BoardHeightOptions, BoardWidthOptions, GameDifficulty, MineCount } from '../../../Constants/settings';
import Button from '../../Common/Button/Button';
import SettingsOption from './SettingsOption/SettingsOption';
import boardHelper from '../../../Helpers/Board';
import { useAppDispatch } from '../../../Store/hooks';
import { setBoard } from '../../../Store/Slices/Board';
import { saveSettings, setStartNewGame } from '../../../Store/Slices/Game';

const Settings = () => {
  const [settings, setSettings] = useState(GameDifficulty.beginner.settings);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const setHeight = (height: number) => {
    setSettings({ ...settings, height });
  };

  const setWidth = (width: number) => {
    setSettings({ ...settings, width });
  };

  const setMines = (mines: number) => {
    setSettings({ ...settings, mines });
  };

  const handleStartGame = () => {
    const board = boardHelper.createGameBoard(settings);
    dispatch(setBoard(board));
    dispatch(setStartNewGame(settings.mines));
    dispatch(saveSettings(settings));
    navigate('/play');
  };

  return (
    <div className="settings">
      <h3 className="settings__title">
        Game settings
      </h3>
      <div className="settings__content">
        <div className="settings__details">
          <SettingsOption
            title="Board width"
            selected={settings.width}
            options={BoardWidthOptions}
            onSelect={(width) => setWidth(Number(width))}
          />

          <SettingsOption
            title="Board height"
            selected={settings.height}
            options={BoardHeightOptions}
            onSelect={(height) => setHeight(Number(height))}
          />

          <SettingsOption
            title="Amount of mines"
            selected={settings.mines}
            options={MineCount}
            onSelect={(mines) => setMines(Number(mines))}
          />
        </div>
      </div>

      <div className="settings__actions">
        <Button
          title="START"
          size="lg"
          onClick={handleStartGame}
        />
      </div>
    </div>
  );
};

export default Settings;
