import React, { useEffect, useRef, InputHTMLAttributes } from 'react';
import { useField, } from '@unform/core';
import { Container } from './styles';

interface InputInterface extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputInterface> = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return <Container ref={inputRef} defaultValue={defaultValue} {...rest} />;
}

export default Input;
