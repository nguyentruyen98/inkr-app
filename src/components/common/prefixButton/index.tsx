import React from 'react';
import clsx from 'clsx';
import classes from './PrefixButton.module.scss';
interface IPrefixButtonProps {
  children: React.ReactNode;
  prefix?: string;
}
const PrefixButton = ({ children, prefix }: IPrefixButtonProps) => {
  return (
    <div className={classes.prefixButton}>
      {prefix && <div className={classes.prefix}>{prefix}</div>}
      <div className={clsx(classes.label, prefix && classes.labelWithPrefix)}>{children}</div>
    </div>
  );
};

export default PrefixButton;
