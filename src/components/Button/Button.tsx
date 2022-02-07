import React, { FC } from 'react';
import './Button.scss';

type ButtonProps = {
    className: string;
    onClick: () => void;
}

const Button:FC<ButtonProps> = ({ className, onClick, children }) => (
  <button
    className={`button ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
