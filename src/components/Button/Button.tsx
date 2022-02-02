import React, { FC } from 'react';
import './Button.scss';

type ButtonProps = {
    style?: React.CSSProperties;
}

const Button:FC<ButtonProps> = ({ style, children }) => (
  <button
    className="button"
    style={style}
  >
    {children}
  </button>
);

export default Button;
