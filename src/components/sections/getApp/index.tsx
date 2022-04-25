import React from 'react';
import Text from '../../common/text';
import Image from 'next/image';
import { Row, Col } from 'antd';

import QRCode from '../../../../public/img/qr-code.svg';
import classes from './GetApp.module.scss';
import Wrapper from '../../common/wrapper';

const GetAppSection = () => {
  return (
    <Wrapper className={classes.getApp}>
      <Row wrap={false} align="middle" gutter={[12, 12]}>
        <Col flex="auto">
          <Text size="large">Get The App</Text>
          <Text>Love this title? Scan the QR code to continue reading right on your mobile devices.</Text>
        </Col>
        <Col flex="112px">
          <Image alt="QRCode" src={QRCode} />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default GetAppSection;
