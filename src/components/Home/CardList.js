import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';
import { useSelector, useDispatch } from 'react-redux';
import { setCardArray } from '../../store/modules/home';
import { getCardAPI } from '../../lib/api/home/cardAPI';

const CardList = () => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.home.cards);
  //const month = useSelector(state => state.home.month);
  const monthArr = useSelector(state => state.month.month);
  useEffect(() => {
    (async () => {
      const saveCards = data => dispatch(setCardArray(data));
      const data = await getCardAPI(monthArr);
      saveCards(data);
      console.log(monthArr);
      console.log(cards);
    })();
  }, []);
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
  margin-left: 40px;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export default CardList;
