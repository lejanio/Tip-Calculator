import React, { FC } from 'react';
import './ButtonLarge.scss';

type ButtonLargeProps = {
    onClick: () => void;
    disabled: boolean;
}

const ButtonLarge:FC<ButtonLargeProps> = ({ onClick, children, disabled }) => (
  <button
    className="button button-large"
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default ButtonLarge;
