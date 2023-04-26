import { useNavigate } from 'react-router-dom';
import { GameDifficulty } from '../../../Constants/settings';
import Button from '../../Common/Button/Button';
import boardHelper from '../../../Helpers/Board';
import { setBoard } from '../../../Store/Slices/Board';
import { saveSettings, setStartNewGame } from '../../../Store/Slices/Game';
import { useAppDispatch } from '../../../Store/hooks';
import { IGameSettings } from '../../../Interfaces';
import './Home.scss';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleStartGame = (settings: IGameSettings) => {
    const board = boardHelper.createGameBoard(settings);
    dispatch(setBoard(board));
    dispatch(setStartNewGame(settings.mines));
    dispatch(saveSettings(settings));
    navigate('/play');
  };

  return (
    <div className="home-page">
      <h3 className="home-page__title">Mineswepper</h3>

      <div className="home-page__difficulty">
        {Object.values(GameDifficulty).map((item) => (
          <Button
            title={item.title}
            size="md"
            onClick={() => handleStartGame(item.settings)}
            key={`difficulty_${item.settings.difficulty}`}
          />
        ))}

        <Button
          title="Advanced"
          size="md"
          onClick={() => navigate('/settings')}
        />
      </div>
    </div>
  );
};

export default Home;
