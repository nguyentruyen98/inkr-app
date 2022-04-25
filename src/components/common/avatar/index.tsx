import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import classes from './Avatar.module.scss';
interface IAvatarProps {
  img: string;
  name: string;
  description: string;
  className?: string;
}
const Avatar = ({ img, name, description, className }: IAvatarProps) => {
  return (
    <div className={clsx(classes.avatar, className)}>
      <Image alt={`${name}-${description}`} src={img} />
      <div className={classes.info}>
        <p className={classes.name}> {name}</p>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
};

export default Avatar;
