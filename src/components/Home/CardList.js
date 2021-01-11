import React from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';

//imgUrl, title, startDate, endDate, hashtag
const CardList = () => {
  return (
    <CardListBlock>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </CardListBlock>
  );
};

const CardListBlock = styled.div`
  width: 360px;
  margin-left: 45px;
  background: white;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export default CardList;
