import React from 'react';
import Image from 'next/image';

import ShareIcon from '../../../../public/icon/share-icon.svg';
import MoreIcon from '../../../../public/icon/more-icon.svg';
import BellIcon from '../../../../public/icon/bell-icon.svg';
import SortIcon from '../../../../public/icon/sort-icon.svg';
import classes from './IconButton.module.scss';

interface IIconButtonProps {
  icon: 'share' | 'more' | 'bell' | 'sort';
}
const IconButton = ({ icon }: IIconButtonProps) => {
  const handleCheckIcon = (icon: 'share' | 'more' | 'bell' | 'sort') => {
    switch (icon) {
      case 'share':
        return <Image src={ShareIcon} alt="Share icon" />;
      case 'bell':
        return <Image src={BellIcon} alt="Share icon" />;
      case 'sort':
        return <Image src={SortIcon} alt="Share icon" />;
      default:
        return <Image src={MoreIcon} alt="More icon" />;
    }
  };

  return <div className={classes.iconButton}>{handleCheckIcon(icon)}</div>;
};

export default IconButton;
