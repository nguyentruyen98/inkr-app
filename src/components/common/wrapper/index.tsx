import React from 'react';
import clsx from 'clsx';
import classes from './Wrapper.module.scss';
interface IWrapperProps {
  children: React.ReactNode;
  className?: string;
}
const Wrapper = ({ children, className }: IWrapperProps) => {
  return <div className={clsx(classes.wrapper, className)}>{children}</div>;
};

export default Wrapper;
