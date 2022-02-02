import React, {
  ChangeEvent, FC, HTMLAttributes, useState,
} from 'react';
import './Input.scss';

type InputProps = {
    id?: string;
    placeholder: string;
    icon?: string;
    style?: React.CSSProperties;
    getInputValue: (value: string) => void;
}

const Input:FC<InputProps> = ({
  id, placeholder, icon, style, getInputValue,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    getInputValue(e.target.value);
  };

  return (
    <div className="input--container">
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="input"
        value={inputValue}
        onChange={handleChange}
        style={style}
      />
      <img src={icon} alt="" className="input__icon" />
    </div>
  );
};

export default Input;
