import React, {
  ChangeEvent, forwardRef, useImperativeHandle, useState,
} from 'react';
import './Input.scss';

type InputProps = {
    id?: string;
    name: string;
    isValidationError?: boolean;
    placeholder: string;
    icon?: string;
    style?: React.CSSProperties;
    getInputValue: (value: string) => void;
}

const Input = forwardRef(({
  id, name, isValidationError, placeholder, icon, style, getInputValue,
}: InputProps, ref) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    getInputValue(e.target.value);
  };

  const resetInput = () => {
    setInputValue('');
  };

  useImperativeHandle(ref, () => ({
    resetInput,
  }));

  return (
    <div className="input--container">
      <input
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        className={`input ${isValidationError ? 'error' : ''}`}
        value={inputValue}
        onChange={handleChange}
        style={style}
      />
      <img src={icon} alt="" className="input__icon" />
    </div>
  );
});

export default Input;
