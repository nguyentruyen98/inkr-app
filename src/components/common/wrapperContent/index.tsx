import React from 'react';
import clsx from 'clsx';
import classes from './WrapperContent.module.scss';
interface IWrapperProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  wrapperClassName?: string;
  size?: 'normal' | 'small';
}
const WrapperContent = ({ children, title, className, size = 'normal', wrapperClassName }: IWrapperProps) => {
  return (
    <div className={clsx(classes.wrapperContent, wrapperClassName)}>
      {title && (
        <p className={clsx(classes.title, size === 'normal' ? classes.normalTitle : classes.smallTitle)}>{title}</p>
      )}
      <div className={className}>{children}</div>
    </div>
  );
};

export default WrapperContent;
