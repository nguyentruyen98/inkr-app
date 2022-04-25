import type { NextPage } from 'next';
import { Row, Col } from 'antd';
import React from 'react';
import TitleSection from '../../components/sections/title';
import AboutSection from '../../components/sections/about';
import PricingSection from '../../components/sections/pricing';
import RelatedSection from '../../components/sections/related';
import LastReadSection from '../../components/sections/lastRead';
import CommentSection from '../../components/sections/comment';
import GetAppSection from '../../components/sections/getApp';
import classes from './Home.module.scss';
const HomePage: NextPage = () => {
  return (
    <div className={classes.homePage}>
      <Row gutter={[16, 0]}>
        <Col span={16}>
          <Row gutter={[0, 16]}>
            <Col span={24}>
              <TitleSection />
            </Col>
            <Col span={24}>
              <PricingSection />
            </Col>
            <Col span={24}>
              <LastReadSection />
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row gutter={[0, 16]}>
            <Col span={24}>
              <AboutSection />
            </Col>
            <Col span={24}>
              <RelatedSection />
            </Col>
            <Col span={24}>
              <CommentSection />
            </Col>
            <Col span={24}>
              <GetAppSection />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
