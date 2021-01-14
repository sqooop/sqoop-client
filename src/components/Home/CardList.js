import { React } from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';
import { useSelector } from 'react-redux';

const CardList = () => {
  const cards = useSelector(state => state.home.cards);
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
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export default CardList;
