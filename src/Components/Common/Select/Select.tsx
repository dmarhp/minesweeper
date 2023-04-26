import React, { useEffect, useState } from 'react';
import './Select.scss';
import { Icon } from '../../../Enums';
import IconProvider from '../../IconProvider/IconProvider';

interface IProps {
    selected: number | string;
    options: number[] | string[];
    disabled?: boolean;
    onSelect: (value: number | string) => void;
}

const Select = ({ selected, options, disabled, onSelect }: IProps) => {
  const [opened, setOpened] = useState(false);

  const handleSelect = (option: number | string) => {
    onSelect(option);
    setOpened(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    event.preventDefault();
    document.removeEventListener('mousedown', handleClickOutside);
    const target = (event.target as Element);
    if (!target.closest('.select.select--opened')) {
      setOpened(false);
    }
  };

  useEffect(() => {
    if (opened) {
      document.addEventListener('mousedown', handleClickOutside);
    }
  }, [opened]);

  const getSelectClassName = () => {
    const openedClass = opened ? 'select--opened' : '';
    const disabledClass = disabled ? 'select--disabled' : '';
    return ['select', openedClass, disabledClass].filter((c) => c).join(' ');
  };

  return (
    <div className={getSelectClassName()}>
      <div
        className="select__button"
        onClick={() => setOpened(!opened)}
      >
        <span className="select__button__title">{selected}</span>
        <div className="select__button__icon">
          <IconProvider icon={Icon.ArrowDown} />
        </div>
      </div>

      {opened && (
        <div className="select__options">
          {options.map((option) => (
            <div
              className="select__option"
              onClick={() => handleSelect(option)}
              key={`select_${option}`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
