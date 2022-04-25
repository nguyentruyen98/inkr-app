import React from 'react';
import clsx from 'clsx';
import classes from './Input.module.scss';
interface IInputProps {
  className?: string;
}
const Input = ({ className }: IInputProps) => {
  return (
    <div className={clsx(className, classes.input)}>
      <input placeholder="Add your comment" />
    </div>
  );
};

export default Input;
