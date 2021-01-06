import React from 'react';
import styled from 'styled-components';
import exImg from '../../assets/images/ic_sqoop.svg';

const CardWrap = styled.div`
  height: 174px;
  width: 914px;
  &:hover {
    background-color: #eeeeee;
  }
`;

const Img = styled.img`
  margin: 8px 8px;
  background-color: red;
  float: left;
  height: 158px;
  width: 278px;
  padding-right: 20px;
`;
const Title = styled.div`
  font-size: 30px;
  font-style: normal;
  font-weight: 700 !important;
  line-height: 45px;
`;
const Card = props => {
  const activity = {
    title: '홍익대 졸업 전시를 참여했나',
    img: exImg,
    startDate: '20201003',
    endDate: '20201010',
    jobTag: ['#디자인'],
    skillTag: ['#디자인'],
  };
  return (
    <CardWrap>
      <Img src={activity.img} />
      <Title>{activity.title}</Title>
    </CardWrap>
  );
};

export default Card;
