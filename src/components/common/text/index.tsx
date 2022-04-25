import React from 'react';
import clsx from 'clsx';
import classes from './Text.module.scss';
interface ITextProps {
  children: React.ReactNode;
  size?: 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge' | 'title';
  color?: 'default' | 'purple';
  className?: string;
  isLineThrough?: boolean;
  isItalic?: boolean;
}
const Text = ({
  className,
  children,
  size = 'small',
  color = 'default',
  isLineThrough = false,
  isItalic = false,
}: ITextProps) => {
  const handleCheckSize = (size: 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge' | 'title') => {
    switch (size) {
      case 'extraSmall':
        return classes.extraSmall;
      case 'small':
        return classes.small;
      case 'medium':
        return classes.medium;
      case 'large':
        return classes.large;
      case 'title':
        return classes.title;
      default:
        return classes.extraLarge;
    }
  };
  const handleCheckColor = (color: 'default' | 'purple') => {
    switch (color) {
      case 'purple':
        return classes.purple;
      default:
        return classes.default;
    }
  };
  return (
    <div
      className={clsx(
        handleCheckSize(size),
        handleCheckColor(color),
        isLineThrough && classes.lineThrough,
        isItalic && classes.italic,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Text;
