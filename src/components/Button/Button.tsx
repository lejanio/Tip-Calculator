import React, { FC } from 'react';
import './Button.scss';

type ButtonProps = {
    size: 'small' | 'large';
    active?: boolean;
    onClick: () => void;
    disabled?: boolean;
}

const Button:FC<ButtonProps> = ({
  size, active, onClick, disabled, children,
}) => (
  <button
    className={`button ${size === 'small' && 'button-small'} ${size === 'large' && 'button-large'} ${active && 'active'}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
