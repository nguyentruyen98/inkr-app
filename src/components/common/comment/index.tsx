import React from 'react';
import Image from 'next/image';
import { Row, Col } from 'antd';
import clsx from 'clsx';
import Text from '../../common/text';
import SmallLikeIcon from '../../../../public/icon/small-like-icon.svg';
import SmallCommentIcon from '../../../../public/icon/small-comment-icon.svg';
import classes from './Comment.module.scss';
interface ICommentProps {
  avatar: string;
  name: string;
  date: string;
  comment: string;
  like: number;
  rely: number;
}
const Comment = ({ avatar, name, date, comment, like, rely }: ICommentProps) => {
  return (
    <Row wrap={false}>
      <Col flex="50px">
        <Image className={classes.avatar} src={avatar} alt="Avatar" height={32} width={32} />
      </Col>
      <Col flex="auto">
        <div className={classes.info}>
          <Text size="extraSmall">{name}</Text>
          <p className={clsx(classes.date, 'ml-8')}>{date}</p>
        </div>
        <p className={clsx(classes.comment, 'mt-4')}>{comment}</p>
        <div className={clsx(classes.action, 'mt-12')}>
          <div className={classes.actionItem}>
            <Image src={SmallLikeIcon} alt="Like" />
            <Text className="ml-8" size="extraSmall">
              {like}
            </Text>
          </div>
          <div className={classes.actionItem}>
            <Image src={SmallCommentIcon} alt="Like" />
            <Text className="ml-8" size="extraSmall">
              {rely}
            </Text>
          </div>
          <Text>Rely</Text>
        </div>
      </Col>
    </Row>
  );
};

export default Comment;
