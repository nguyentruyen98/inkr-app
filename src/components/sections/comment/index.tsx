import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import Wrapper from '../../common/wrapper';
import WrapperContent from '../../common/wrapperContent';
import Comment from '../../common/comment';
import Input from '../../common/input';
import Button from '../../common/button';

import Avatar4 from '../../../../public/img/avatar4.svg';
import Avatar5 from '../../../../public/img/avatar5.svg';
import SendIcon from '../../../../public/icon/send-icon.svg';
import classes from './Comment.module.scss';
import { StaticImageData } from 'next/image';
const commentList: {
  avatar: string;
  name: string;
  date: string;
  comment: string;
  like: number;
  rely: number;
}[] = [
  {
    avatar: Avatar4,
    name: 'Han Solo',
    date: 'Commented on Chapter 35 • 24 min. ago',
    comment:
      'I had no idea such a sequel was coming as I thought the show had ended and Kyoto Animation took a hard hit from the tragedy but currently 4 episodes in as of writing this review, and I love every second of it.',
    like: 61,
    rely: 12,
  },
];
const CommentSection = () => {
  return (
    <Wrapper>
      <WrapperContent title="12 Comments">
        {commentList.map((el, index) => (
          <Comment {...el} key={index} />
        ))}
        <div className={clsx(classes.input, 'mt-32')}>
          <Image alt="Avatar" src={Avatar5} />
          <Input className="ml-18" />
        </div>
        <Button className="mt-24 ml-50">
          <div className="items-center">
            <Image alt="Send icon" src={SendIcon} />
            <p className="ml-8">Add Comment</p>
          </div>
        </Button>
      </WrapperContent>
    </Wrapper>
  );
};

export default CommentSection;
