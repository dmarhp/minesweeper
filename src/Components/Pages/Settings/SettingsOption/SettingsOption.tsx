import './SettingsOption.scss';
import Select from '../../../Common/Select/Select';

interface IProps {
    title: string;
    selected: number | string;
    options: number[] | string[];
    disabled?: boolean;
    onSelect: (value: number | string) => void;
}

const SettingsOption = ({ title, selected, options, disabled, onSelect }: IProps) => (
  <div className="settings-option">
    <span>{`${title}:`}</span>
    <Select
      selected={selected}
      options={options}
      onSelect={onSelect}
      disabled={disabled}
    />
  </div>
);

export default SettingsOption;
