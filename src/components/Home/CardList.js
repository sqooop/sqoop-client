import { React, useEffect } from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';
import { useSelector, useDispatch } from 'react-redux';
import { setCardArray } from '../../store/modules/home';
import { getCardAPI, getMonthAPI } from '../../lib/api/home/cardAPI';

const CardList = () => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.home.cards);
  const monthArr = useSelector(state => state.month.month);
  const month = useSelector(state => state.home.month);
  const year = useSelector(state => state.home.year);
  const monthId = year * 100 + month;
  const saveCards = data => dispatch(setCardArray(data));
  const dataSet = new Map();
  useEffect(() => {
    (async () => {
      //    const saveCards = data => dispatch(setCardArray(data));
      //   const data = await getCardAPI(month);
      //  console.log(monthArr);
      //   saveCards(data);
      //  console.log(monthArr.key);
      // console.log(cards);
      const monthData = await getMonthAPI();
      const saveCards = data => dispatch(setCardArray(data));
      for (let i = monthData.firstYear; i <= monthData.lastYear; i++) {
        dataSet.set(i, new Set());
      }
      monthData.allMonthArray
        .filter(item => item.length !== 0)
        .forEach(item => dataSet.get(Math.floor(item / 100)).add(item % 100));
      dataSet.get(year);

      if (dataSet.get(year) === undefined) {
        return;
      }

      const dataSetArray = Array.from(dataSet.get(year)); // 활동이 있는 월 배열로 바꿔줌
      const firstMonth = dataSetArray[0];
      const monthId = year * 100 + firstMonth;
      const cardData = await getCardAPI(monthId);
      saveCards(cardData);
      const data = await getCardAPI(monthId);
      saveCards(data);

      console.log(year);
      console.log(monthId);
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
