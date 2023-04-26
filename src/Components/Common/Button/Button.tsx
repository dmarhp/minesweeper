import './Button.scss';
import React from 'react';
import { Icon } from '../../../Enums';
import IconProvider from '../../IconProvider/IconProvider';

interface IProps {
    title: string;
    size?: 'sm' | 'md' | 'lg';
    icon?: Icon;
    selected?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    onClick: () => void;
}

const Button = (props: IProps) => {
  const getButtonSizeClassName = () => {
    switch (props.size) {
      case 'lg':
        return 'button--large';
      case 'md':
        return 'button--medium';
      case 'sm':
      default:
        return 'button--small';
    }
  };

  const getButtonClassName = () => {
    const size = getButtonSizeClassName();
    const fullWidth = props.fullWidth ? 'button--full-width' : '';
    const selected = props.selected ? 'button--selected' : '';
    const disabled = props.disabled ? 'button--disabled' : '';
    return ['button', size, fullWidth, selected, disabled].filter((c) => c).join(' ');
  };

  return (
    <div
      className={getButtonClassName()}
      onClick={props.onClick}
    >
      {props.icon && (
        <IconProvider icon={props.icon} />
      )}
      {props.title}
    </div>
  );
};

export default Button;
