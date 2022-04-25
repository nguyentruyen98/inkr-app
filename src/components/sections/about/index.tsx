import React, { useState } from 'react';
import Image from 'next/image';
import { Typography, Row, Col } from 'antd';
import clsx from 'clsx';
import Wrapper from '../../common/wrapper';
import WrapperContent from '../../common/wrapperContent';
import Tag from '../../common/tag';
import Avatar from '../../common/avatar';
import AboutImg1 from '../../../../public/img/about-img1.svg';
import Avatar1 from '../../../../public/img/avatar1.svg';
import Avatar2 from '../../../../public/img/avatar2.svg';
import Avatar3 from '../../../../public/img/avatar3.svg';

import classes from './About.module.scss';

const credisList: { name: string; description: string; img: string }[] = [
  { name: 'Kodansha', description: 'Publisher', img: Avatar2 },
  { name: 'Johnnie Christmas', description: 'Story', img: Avatar1 },
  { name: 'Jack T. Cole', description: 'Art', img: Avatar3 },
];
const tagList: string[] = ['Horror', 'Psychological', 'Seinen'];
const otherFactList: { key: string; value: string }[] = [
  { key: 'Last Updated', value: '2 days ago' },
  { key: 'Age Rating', value: 'Mature (18+)' },
  { key: 'Color', value: 'Black & White' },
  { key: 'Origin Media', value: 'Print' },
  { key: 'Style Origin', value: 'Japanese Comics (Manga)' },
  { key: 'Copyright', value: '© Daruma Matsuura / Kodansha Ltd.' },
  { key: 'Other Names', value: 'Kasane -voleuse de visage' },
];

const { Paragraph } = Typography;
const AboutSection = () => {
  const [isShowMore, setIsShowMore] = useState<boolean>(false);

  return (
    <Wrapper className={clsx(classes.about, isShowMore && classes.fitContent)}>
      <WrapperContent className={classes.content} wrapperClassName={classes.contentWrapper} title="About This">
        <WrapperContent title="Genres" size="small">
          <div className={classes.tag}>
            {tagList.map((el, index) => (
              <Tag isUppercase={false} label={el} key={index} />
            ))}
          </div>
        </WrapperContent>
        <WrapperContent title="Summary" size="small">
          <Paragraph
            className={classes.summary}
            ellipsis={
              !isShowMore
                ? {
                    rows: 3,
                    symbol: 'more',
                  }
                : false
            }
          >
            Kasane is an ugly girl who is severely bullied by her classmates because of her appearance; making things
            worse, Kasane&apos;s mother was a beautiful actress to whom Kasane is a dark contrast, even though she is as
            talented as her mother. However, there is nothing to do with this.
          </Paragraph>
        </WrapperContent>
        {!isShowMore ? (
          <span className={classes.showMore} onClick={() => setIsShowMore(!isShowMore)}>
            Show More
          </span>
        ) : (
          <>
            <div className={clsx(classes.aboutImg, 'mb-22')}>
              {[AboutImg1, AboutImg1, AboutImg1, AboutImg1, AboutImg1].map((el, index) => (
                <Image alt={`about-img-${index}`} src={el} key={index} />
              ))}
            </div>
            <WrapperContent className="mb-33" title="Credits" size="small">
              {credisList.map((el, index) => (
                <Avatar
                  className={clsx(index !== 0 && 'mt-14')}
                  key={index}
                  img={el.img}
                  name={el.name}
                  description={el.description}
                />
              ))}
            </WrapperContent>
            <WrapperContent title="Other Facts" size="small">
              <Row gutter={[0, 8]} className={classes.otherFacts}>
                {otherFactList.map((el, index) => (
                  <React.Fragment key={index}>
                    <Col className={classes.key} span={6}>
                      {el.key}
                      <span>:</span>
                    </Col>
                    <Col span={18}>
                      <span className={classes.value}>{el.value}</span>
                    </Col>
                  </React.Fragment>
                ))}
              </Row>
            </WrapperContent>
          </>
        )}
      </WrapperContent>
    </Wrapper>
  );
};

export default AboutSection;
