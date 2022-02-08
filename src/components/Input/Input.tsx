import React, { FC } from 'react';
import './Input.scss';

type InputProps = {
    id?: string;
    name: string;
    hasError?: boolean;
    placeholder: string;
    icon?: string;
    height?: string;
    fontSize?: string;
    value: string;
    onChange: (value: string) => void;
}

const Input:FC<InputProps> = ({
  id, name, hasError, placeholder, icon,
  height, fontSize, value, onChange,
}) => (
  <div className="input--container">
    <input
      id={id}
      name={name}
      type="text"
      placeholder={placeholder}
      className={`input ${hasError && 'error'}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ height, fontSize }}
    />
    <img src={icon} alt="" className="input__icon" />
  </div>
);

export default Input;
