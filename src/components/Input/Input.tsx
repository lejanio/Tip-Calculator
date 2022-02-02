import React, { FC, HTMLAttributes, useState } from 'react';
import './Input.scss';

type InputType = {
    id?: string;
    placeholder: string;
    icon?: string;
    style?: React.CSSProperties;
}

const Input:FC<InputType> = ({
  id, placeholder, icon, style,
}) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="input--container">
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="input"
        style={style}
      />
      <img src={icon} alt="" className="input__icon" />
    </div>
  );
};

export default Input;
