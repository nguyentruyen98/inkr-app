import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Wrapper from '../../common/wrapper';
import WrapperContent from '../../common/wrapperContent';
import Text from '../../common/text';
import ImageProgress from '../../common/imgProgress';
import IconButton from '../../common/iconButton';
import LastReadImg from '../../../../public/img/lastRead-img.svg';
import SmallCoin from '../../../../public/icon/smallCoin.svg';
import classes from './LastRead.module.scss';
const lastReadItem: { img: string; name: string; date: string } = {
  img: LastReadImg,
  name: 'Chapter 1',
  date: 'Last read 2 days ago ',
};
const chapterList: {
  img: string;
  name: string;
  percent?: number;
  isLock?: boolean;
  price?: number;
  isActive?: boolean;
}[] = [
  {
    img: LastReadImg,
    name: 'Chapter 1',
    percent: 25,
    isActive: true,
  },
  {
    img: LastReadImg,
    name: 'Chapter 2',
  },
  {
    img: LastReadImg,
    name: 'Chapter 3',
  },
  {
    img: LastReadImg,
    name: 'Chapter 4',
    isLock: true,
    price: 5,
  },
  {
    img: LastReadImg,
    name: 'Chapter 5',
    isLock: true,
    price: 5,
  },
  {
    img: LastReadImg,
    name: 'Chapter 6',
    isLock: true,
    price: 5,
  },
  {
    img: LastReadImg,
    name: 'Chapter 7',
    isLock: true,
    price: 5,
  },
  {
    img: LastReadImg,
    name: 'Chapter 8',
    isLock: true,
    price: 5,
  },
  {
    img: LastReadImg,
    name: 'Chapter 9',
    isLock: true,
    price: 5,
  },
  {
    img: LastReadImg,
    name: 'Chapter 10',
    isLock: true,
    price: 5,
  },
];
const LastReadSection = () => {
  return (
    <Wrapper>
      <WrapperContent title="Last read">
        <div className={clsx(classes.lastReadItem, 'items-center')}>
          <ImageProgress src={lastReadItem.img} percent={75} />
          <div className="ml-12">
            <Text>{lastReadItem.name}</Text>
            <Text size="extraSmall">{lastReadItem.date}</Text>
          </div>
        </div>
      </WrapperContent>
      <div className={classes.allChapters}>
        <div>
          <Text className="mb-4" size="title">
            10 chapters
          </Text>
          <Text size="extraSmall">New chapter every Thursday</Text>
        </div>
        <div className={classes.buttonGroup}>
          <IconButton icon="bell" />
          <IconButton icon="sort" />
        </div>
      </div>
      <div className="mt-24">
        {chapterList.map((el, index) => (
          <div
            key={index}
            className={clsx(
              classes.chapterItem,
              index === 0 && 'h-69',
              'content-between',
              el.isActive && classes.isActive,
            )}
          >
            <div className="items-center">
              <ImageProgress src={el.img} percent={el.percent} isLock={el.isLock} />
              <Text className="ml-12">{el.name}</Text>
            </div>

            {el.price ? (
              <div className="items-center">
                <Image alt="Coin" src={SmallCoin} />
                <p className="ml-4">{el.price}</p>
              </div>
            ) : (
              <Text>FREE</Text>
            )}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default LastReadSection;
