import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';
import { useSelector, useDispatch } from 'react-redux';
import { setCardArray } from '../../store/modules/home';
import { getCardAPI } from '../../lib/api/home/cardAPI';

const CardList = () => {
  const dispatch = useDispatch();
  const saveCards = data => dispatch(setCardArray(data));
  useEffect(() => {
    (async () => {
      const data = await getCardAPI();
      saveCards(data);
    })();
  }, []);
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
