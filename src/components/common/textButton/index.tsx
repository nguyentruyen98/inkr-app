import React from 'react';
import Image from 'next/image';

import likeIcon from '../../../../public/icon/like-icon.svg';
import readIcon from '../../../../public/icon/read-icon.svg';

import classes from './TextButton.module.scss';
interface ITextButtonProps {
  label: string;
  icon: 'read' | 'like';
}

const TextButton = ({ label, icon }: ITextButtonProps) => {
  const handleCheckIcon = (icon: 'read' | 'like') => {
    switch (icon) {
      case 'like':
        return <Image src={likeIcon} alt="Like icon" />;
      default:
        return <Image src={readIcon} alt="Read icon" />;
    }
  };
  return (
    <div className={classes.textButton}>
      {icon && handleCheckIcon(icon)}
      <span className={classes.label}>{label}</span>
    </div>
  );
};

export default TextButton;
