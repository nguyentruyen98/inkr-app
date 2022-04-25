import React from 'react';
import clsx from 'clsx';
import classes from './Tag.module.scss';

interface ITagProps {
  label: string;
  isUppercase?: boolean;
}
const Tag = ({ label, isUppercase = true }: ITagProps) => {
  return <div className={clsx(classes.tag, !isUppercase && classes.lowercase)}>{label}</div>;
};

export default Tag;
