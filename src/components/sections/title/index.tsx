import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import TitleImg from '../../../../public/title-img.svg';
import Wrapper from '../../common/wrapper';
import TextButton from '../../common/textButton';
import Text from '../../common/text';
import Tag from '../../common/tag';
import Button from '../../common/button';
import IconButton from '../../common/iconButton';
import classes from './Title.module.scss';
const tagList: string[] = ['18+', 'new', 'trending', 'bestseller', 'manga'];
const TitleSection = () => {
  return (
    <Wrapper className={classes.titleSection}>
      <div className={classes.titleInfo}>
        <Image src={TitleImg} alt="title-img" />
        <div className={classes.info}>
          <div>
            <Text size="extraLarge" className="mb-2">
              Kasane
            </Text>
            <p className={clsx(classes.author, 'mb-6')}>By Kodansha</p>
            <p className={clsx(classes.author, 'mb-6')}>Drama • 10 Chapters</p>
            <div className={clsx(classes.like, 'mb-25')}>
              <TextButton label="74,483" icon="read" />
              <TextButton label="15,863" icon="like" />
            </div>
            <div className={classes.tag}>
              {tagList.map((el, index) => (
                <Tag label={el} key={index} />
              ))}
            </div>
          </div>
          <Button>Read First Chapter for FREE</Button>
        </div>
      </div>
      <div className={classes.buttonGroup}>
        <IconButton icon="share" />
        <IconButton icon="more" />
      </div>
    </Wrapper>
  );
};

export default TitleSection;
