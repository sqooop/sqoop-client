import React from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';
import { useSelector } from 'react-redux';
//imgUrl, title, startDate, endDate, hashtag
const CardList = () => {
  const cards = useSelector(state => state.home.cards);
  /*   const year = useSelector(state => state.home.year);
  const monthArr = useSelector(state => state.month.month);
  useEffect(()=>{

  })
  console.log('cardsssss', cards); */
  return (
    <CardListBlock>
      {/* 배열의 길이 만큼 CardItem*/}
      {cards?.map((data, index) => (
        <CardItem key={index} card={data}></CardItem>
      ))}
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
