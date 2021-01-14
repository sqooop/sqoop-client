import React from 'react';
import styled from 'styled-components';
import noImage from '../../assets/images/noImage.svg';

const CardWrap = styled.div`
  height: 174px;
  width: 914px;
  &:hover {
    background-color: #eeeeee;
  }
  cursor: pointer;
  margin-bottom: 2px;
`;

const Img = styled.img`
  margin: 8px 8px;
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
  padding-top: 8px;
`;
const Date = styled.div`
  font-size: 12px;
  margin-left: 3px;
  margin-top: 8px;
`;
const Tag = styled.span`
  background-color: #195bff;
  color: white;
  font-size: 13px;
  padding: 1px 10px;
  margin-right: 12px;
  margin-top: 12px;
  display: inline-block;
`;
const Card = props => {
  const { activity, onClick } = props;
  const startDate = `${activity.startDate.substr(
    0,
    4,
  )}.${activity.startDate.substr(4, 2)}.${activity.startDate.substr(6, 2)}`;
  const endDate = `${activity.endDate.substr(0, 4)}.${activity.endDate.substr(
    4,
    2,
  )}.${activity.endDate.substr(6, 2)}`;
  const date = `${startDate} - ${endDate}`;
  return (
    <CardWrap onClick={onClick}>
      {activity.imageUrl ? (
        <Img src={activity.imageUrl} />
      ) : (
        <Img src={noImage} />
      )}
      <Title>{activity.title}</Title>
      <Date>{date}</Date>
      {activity.jobTag.map(tag => (
        <Tag key={tag}>{tag}</Tag>
      ))}
      <br />
      {activity.skillTag.map((tag, idx) => (
        <Tag key={`tag${idx}`}>{tag}</Tag>
      ))}
    </CardWrap>
  );
};

export default Card;
