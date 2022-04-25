import React from 'react';
import Image from 'next/image';
import { Progress } from 'antd';
import LockIcon from '../../../../public/icon/lock-icon.svg';
import classes from './ImageProgress.module.scss';
interface IImageProgressProps {
  src: string;
  percent?: number;
  isLock?: boolean;
}
const ImageProgress = ({ src, percent = 0, isLock = false }: IImageProgressProps) => {
  return (
    <div className={classes.progressImg}>
      <Image src={src} alt="Progress Image" />
      {percent ? <Progress percent={percent} size="small" showInfo={false} /> : ''}
    </div>
  );
};

export default ImageProgress;
