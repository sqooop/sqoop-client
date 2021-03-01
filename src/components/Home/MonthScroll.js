import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCardAPI, getMonthAPI } from '../../lib/api/home/cardAPI';
import { useSelector, useDispatch } from 'react-redux';
import { setMonth } from '../../store/modules/month';
import ButtonActive from '../../components/home/ButtonActive';
import Button from '../../components/home/Button';
import { setCardArray } from '../../store/modules/home';

const MonthScrollWrapper = styled.div`
  display: block;
  width: 50px;
  height: 100%;
  // background: ivory;
  text-align: center;
`;

const MonthScroll = () => {
  const dispatch = useDispatch();
  const saveMonth = data => dispatch(setMonth(data));
  const saveCards = data => dispatch(setCardArray(data));
  const year = useSelector(state => state.home.year);
  const monthArr = useSelector(state => state.month.month);
  const dataSet = new Map();
  const monthMap = new Map();

  const [dataSetArray, setDataSetArray] = useState('');

  useEffect(() => {
    (async () => {
      const data = await getMonthAPI();
      for (let i = data.firstYear; i <= data.lastYear; i++) {
        dataSet.set(i, new Set());
      }
      data.allMonthArray
        .filter(item => item.length !== 0)
        .forEach(item => dataSet.get(Math.floor(item / 100)).add(item % 100));

      const dataMonth = dataSet.get(year);

      // const dataSetArray = Array.from(dataSet.get(year)); // 활동이 있는 월 배열로 바꿔줌

      if (dataMonth !== undefined) {
        for (let m = 1; m <= 12; m++) {
          monthMap.set(m, dataSet.get(year).has(m));
        }
      }

      // console.log('dataSetgetyear', dataSet.get(year));
      saveMonth(monthMap);
      // console.log('allmonthArray', data.allMonthArray);
      // console.log('dataSet', dataSet);
      // console.log('monthMap', monthMap);

      // const dataSetArray = Array.from(dataSet.get(year)); // 활동이 있는 월 배열로 바꿔줌

      if (dataMonth !== undefined) {
        setDataSetArray(Array.from(dataMonth));
      }

      const firstMonth = dataSetArray[0];
      const monthId = year * 100 + firstMonth;

      const cardData = await getCardAPI(monthId);
      saveCards(cardData);
    })();
  }, [year]);

  return (
    <MonthScrollWrapper>
      {monthArr?.get(1) ? <ButtonActive month={1} /> : <Button month={1} />}
      {monthArr?.get(2) ? <ButtonActive month={2} /> : <Button month={2} />}
      {monthArr?.get(3) ? <ButtonActive month={3} /> : <Button month={3} />}
      {monthArr?.get(4) ? <ButtonActive month={4} /> : <Button month={4} />}
      {monthArr?.get(5) ? <ButtonActive month={5} /> : <Button month={5} />}
      {monthArr?.get(6) ? <ButtonActive month={6} /> : <Button month={6} />}
      {monthArr?.get(7) ? <ButtonActive month={7} /> : <Button month={7} />}
      {monthArr?.get(8) ? <ButtonActive month={8} /> : <Button month={8} />}
      {monthArr?.get(9) ? <ButtonActive month={9} /> : <Button month={9} />}
      {monthArr?.get(10) ? <ButtonActive month={10} /> : <Button month={10} />}
      {monthArr?.get(11) ? <ButtonActive month={11} /> : <Button month={11} />}
      {monthArr?.get(12) ? <ButtonActive month={12} /> : <Button month={12} />}
    </MonthScrollWrapper>
  );
};

export default MonthScroll;
