import React from 'react';
import { Row, Col } from 'antd';
import Image from 'next/image';
import clsx from 'clsx';
import Wrapper from '../../common/wrapper';
import WrapperContent from '../../common/wrapperContent';
import Text from '../../common/text';
import SmallCoin from '../../../../public/icon/smallCoin.svg';
import LargeCoin from '../../../../public/icon/largeCoin.svg';
import CrownIcon from '../../../../public/icon/crown-icon.svg';
import PrefixButton from '../../common/prefixButton';
import classes from './Pricing.module.scss';
const PricingSection = () => {
  return (
    <Wrapper>
      <WrapperContent title="Pricing & Promotion" className={classes.pricingSection}>
        <Row className={classes.firstRow}>
          <Col span={12} className={classes.row}>
            <Text>FREE</Text>
            <Text size="large">3 chapters</Text>
          </Col>
          <Col span={12} className={classes.row}>
            <Text>LOCKED</Text>
            <div className={classes.locked}>
              <Text size="large">7 chapters</Text>
              <Text className="ml-4">
                (<Image alt="Coin" src={SmallCoin} />5 / chapter)
              </Text>
            </div>
          </Col>
        </Row>
        <Row className={classes.lastRow}>
          <Col span={24} className={clsx(classes.price, 'content-between')}>
            <div>
              <Text size="large">Total Price</Text>
              <Text>Instant access to all chapters • No Ad</Text>
            </div>
            <PrefixButton>
              <div className="items-center">
                <Image alt="Coin" src={LargeCoin} />
                <Text className="mr-4 ml-4" size="large">
                  35
                </Text>
              </div>
            </PrefixButton>
          </Col>
          <Col span={24} className={clsx(classes.price, 'content-between')}>
            <div>
              <Text size="large" className="items-center" color="purple">
                <p className="mr-4">Save money with INKR Extra</p>
                <Image alt="Coin" src={CrownIcon} />
              </Text>
              <Text>Instant access to all chapters • No Ad • Extra saving</Text>
            </div>
            <div className="items-end">
              <PrefixButton prefix="-50%">
                <div className="items-center">
                  <Image alt="Coin" src={LargeCoin} />
                  <Text className="mr-4 ml-4" isLineThrough>
                    35
                  </Text>
                  <Text size="large">18</Text>
                </div>
              </PrefixButton>
              <Text className="mt-8" size="extraSmall" isItalic>
                Saving rates may vary
              </Text>
            </div>
          </Col>
        </Row>
      </WrapperContent>
      <Text className="mt-16 text-center">Want to read for free? Learn more</Text>
    </Wrapper>
  );
};

export default PricingSection;
