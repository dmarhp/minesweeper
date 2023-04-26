import { ReactComponent as ArrowDown } from './assets/arrow-down.svg';
import { ReactComponent as Flag } from './assets/flag.svg';
import { ReactComponent as Mine } from './assets/mine.svg';

import { ReactComponent as Neighbour1 } from './assets/neighbour-1.svg';
import { ReactComponent as Neighbour2 } from './assets/neighbour-2.svg';
import { ReactComponent as Neighbour3 } from './assets/neighbour-3.svg';
import { ReactComponent as Neighbour4 } from './assets/neighbour-4.svg';
import { ReactComponent as Neighbour5 } from './assets/neighbour-5.svg';
import { ReactComponent as Neighbour6 } from './assets/neighbour-6.svg';
import { ReactComponent as Neighbour7 } from './assets/neighbour-7.svg';
import { ReactComponent as Neighbour8 } from './assets/neighbour-8.svg';

import { ReactComponent as FaceSmile } from './assets/face-smile.svg';
import { ReactComponent as FaceWin } from './assets/face-win.svg';
import { ReactComponent as FaceLose } from './assets/face-lose.svg';

import { ReactComponent as FaceNeutral } from './assets/face-neutral.svg';
import { ReactComponent as Check } from './assets/check-solid.svg';
import { ReactComponent as FlagWin } from './assets/flag-win.svg';
import { ReactComponent as Home } from './assets/home.svg';
import { ReactComponent as Pause } from './assets/pause.svg';
import { ReactComponent as Play } from './assets/play.svg';
import { ReactComponent as Settings } from './assets/settings.svg';
import { ReactComponent as X } from './assets/x.svg';

import { Icon } from '../../Enums';

interface IProps {
    icon: Icon | null;
}

const IconProvider = ({ icon }: IProps) => {
  const getIcon = () => {
    switch (icon) {
      case Icon.ArrowDown:
        return <ArrowDown />;
      case Icon.Check:
        return <Check />;
      case Icon.FlagWin:
        return <FlagWin />;
      case Icon.Home:
        return <Home />;
      case Icon.Pause:
        return <Pause />;
      case Icon.Play:
        return <Play />;
      case Icon.Settings:
        return <Settings />;
      case Icon.X:
        return <X />;

      case Icon.Flag:
        return <Flag />;
      case Icon.Mine:
        return <Mine />;

      case Icon.Neighbour1:
        return <Neighbour1 />;
      case Icon.Neighbour2:
        return <Neighbour2 />;
      case Icon.Neighbour3:
        return <Neighbour3 />;
      case Icon.Neighbour4:
        return <Neighbour4 />;
      case Icon.Neighbour5:
        return <Neighbour5 />;
      case Icon.Neighbour6:
        return <Neighbour6 />;
      case Icon.Neighbour7:
        return <Neighbour7 />;
      case Icon.Neighbour8:
        return <Neighbour8 />;

      case Icon.FaceSmile:
        return <FaceSmile />;
      case Icon.FaceNeutral:
        return <FaceNeutral />;
      case Icon.FaceWin:
        return <FaceWin />;
      case Icon.FaceLose:
        return <FaceLose />;
      default:
        return null;
    }
  };

  return getIcon();
};

export default IconProvider;
