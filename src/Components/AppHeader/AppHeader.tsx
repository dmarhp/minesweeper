import { useLocation, useNavigate } from 'react-router-dom';

import './AppHeader.scss';
import { GameStatus, Icon } from '../../Enums';
import Button from '../Common/Button/Button';
import IconProvider from '../IconProvider/IconProvider';
import { useAppSelector } from '../../Store/hooks';
import Clock from './Clock/Clock';

const PageHeader = () => {
  const { status } = useAppSelector((state) => state.game);
  const location = useLocation();
  const navigate = useNavigate();

  const goTo = (path: string) => {
    if (path && location.pathname !== path) {
      navigate(path);
    }
  };

  const getGameStatusIcon = () => {
    switch (status) {
      case GameStatus.Play:
        return Icon.Play;
      case GameStatus.Pause:
        return Icon.Pause;
      case GameStatus.Win:
        return Icon.FlagWin;
      case GameStatus.Lose:
        return Icon.X;
      default:
        return Icon.Mine;
    }
  };

  return (
    <div className="app-header">
      <div className="app-header__nav">
        <Button
          title="Home"
          icon={Icon.Home}
          onClick={() => goTo('/')}
        />
        <Button
          icon={Icon.Settings}
          title="Settings"
          onClick={() => goTo('/settings')}
        />
      </div>

      <div className="app-header__info">
        <div className="app-header__info__status">
          <IconProvider icon={getGameStatusIcon()} />
        </div>
        <Clock />
      </div>
    </div>
  );
};

export default PageHeader;
