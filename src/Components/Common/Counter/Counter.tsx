import { ReactComponent as Digit0 } from './assets/digit-0.svg';
import { ReactComponent as Digit1 } from './assets/digit-1.svg';
import { ReactComponent as Digit2 } from './assets/digit-2.svg';
import { ReactComponent as Digit3 } from './assets/digit-3.svg';
import { ReactComponent as Digit4 } from './assets/digit-4.svg';
import { ReactComponent as Digit5 } from './assets/digit-5.svg';
import { ReactComponent as Digit6 } from './assets/digit-6.svg';
import { ReactComponent as Digit7 } from './assets/digit-7.svg';
import { ReactComponent as Digit8 } from './assets/digit-8.svg';
import { ReactComponent as Digit9 } from './assets/digit-9.svg';
import './Counter.scss';

interface IProps {
  value: number
  counterId: string
}

const Counter = ({ value, counterId }:IProps) => {
  const valueToNumberArray = (val: number = 0) => {
    const digits = val.toString().padStart(3, '0').split('').map(Number);
    return digits.slice(-3);
  };

  const getIcon = (num: number) => {
    switch (num) {
      case 1:
        return <Digit1 />;
      case 2:
        return <Digit2 />;
      case 3:
        return <Digit3 />;
      case 4:
        return <Digit4 />;
      case 5:
        return <Digit5 />;
      case 6:
        return <Digit6 />;
      case 7:
        return <Digit7 />;
      case 8:
        return <Digit8 />;
      case 9:
        return <Digit9 />;
      case 0:
      default:
        return <Digit0 />;
    }
  };

  return (
    <div className="counter">
      {valueToNumberArray(value).map((num, index) => (
        <div className="counter--digit" key={`${counterId}_${index}`}>
          {getIcon(num)}
        </div>
      ))}
    </div>
  );
};

export default Counter;
