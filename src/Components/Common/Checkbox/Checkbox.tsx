import { Icon } from '../../../Enums';
import IconProvider from '../../IconProvider/IconProvider';
import './Checkbox.scss';

interface IProps {
    label: string;
    checked: boolean;
    disabled?: boolean;
    onClick: () => void;
}

const Checkbox = (props:IProps) => {
  const getCheckboxClassName = () => {
    const disabled = props.disabled ? 'checkbox--disabled' : '';
    return ['checkbox', disabled].filter((c) => c).join(' ');
  };

  return (
    <div
      className={getCheckboxClassName()}
      onClick={props.onClick}
    >
      <div className="checkbox__input">
        {props.checked && (
          <IconProvider icon={Icon.Check} />
        )}
      </div>

      <span>{props.label}</span>
    </div>
  );
};

export default Checkbox;
