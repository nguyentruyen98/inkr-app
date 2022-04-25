import React from 'react';
import clsx from 'clsx';
import classes from './Button.module.scss';
interface IButtonProps {
  children: React.ReactNode;
  className?: string;
}
const Button = ({ children, className }: IButtonProps) => {
  return <button className={clsx(classes.button, className)}>{children}</button>;
};

export default Button;
