import React, { FC } from 'react';
import './Button.scss';

const Button:FC = ({ children }) => (
  <button className="button">{children}</button>
);

export default Button;
