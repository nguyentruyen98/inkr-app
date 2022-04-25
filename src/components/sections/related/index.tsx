import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import Wrapper from '../../common/wrapper';
import WrapperContent from '../../common/wrapperContent';
import Text from '../../common/text';
import RelatedImg from '../../../../public/img/related.svg';
import CrownIcon from '../../../../public/icon/crown-icon.svg';
import classes from './Related.module.scss';
const ralatedTitleList: { img: string; title: string; isExclusive: boolean; author: string; read: string }[] = [
  {
    title: 'Title Name 1',
    isExclusive: true,
    author: 'PREQUEL',
    read: '45.6K reads',
    img: RelatedImg,
  },
  {
    title: 'Title Name 2',
    isExclusive: true,
    author: 'PREQUEL',
    read: '45.6K reads',
    img: RelatedImg,
  },
  {
    title: 'Title Name 3',
    isExclusive: true,
    author: 'PREQUEL',
    read: '45.6K reads',
    img: RelatedImg,
  },
];
const RelatedSection = () => {
  return (
    <Wrapper>
      <WrapperContent title="Related Titles">
        {ralatedTitleList.map((el, index) => (
          <div className={clsx(index !== 0 && classes.borderBottom)} key={index}>
            <div className="items-center">
              <Image src={el.img} alt="Related Img" />
              <div className="ml-24">
                <Text size="large">Total Price</Text>
                <Text size="large" className="items-center" color="purple">
                  {el.isExclusive && (
                    <>
                      <Image alt="Coin" src={CrownIcon} />
                      <p className="ml-4">EXCLUSIVE</p>
                    </>
                  )}
                </Text>
                <Text>{el.author}</Text>
                <Text>{el.read}</Text>
              </div>
            </div>
          </div>
        ))}
      </WrapperContent>
    </Wrapper>
  );
};

export default RelatedSection;
