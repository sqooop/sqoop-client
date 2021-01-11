import { React, useEffect } from 'react';
import styled from 'styled-components';
import { getMonthAPI } from '../../lib/api/home/cardAPI';
import { useSelector } from 'react-redux';
import ButtonActive from '../../components/home/ButtonActive';
import Button from '../../components/home/Button';

const MonthScrollWrapper = styled.div`
  display: block;
  width: 50px;
  height: 100%;
`;

const MonthScroll = () => {
  const year = useSelector(state => state.home.year);
  const dataSet = new Map();
  const monthMap = new Map();
  useEffect(() => {
    (async () => {
      const data = await getMonthAPI();

      for (let i = data.firstYear; i <= data.lastYear; i++) {
        dataSet.set(i, new Set());
      }
      data.allMonthArray
        .filter(item => item.length !== 0)
        .forEach(item => dataSet.get(Math.floor(item / 100)).add(item % 100));
      console.log(dataSet);
      console.log(dataSet.get(year));
      for (let m = 1; m <= 12; m++) {
        monthMap.set(m, dataSet.get(year).has(m));
      }
      console.log(monthMap.get(1));
      console.log(monthMap.get(2));
    })();
  });
  console.log('a', monthMap.get(1));
  console.log(monthMap.get(2));

  return (
    <MonthScrollWrapper>
      {monthMap.get(1) ? <Button month={1} /> : <ButtonActive month={1} />}
      {monthMap.get(2) ? <Button month={2} /> : <ButtonActive month={2} />}
      {monthMap.get(3) ? <Button month={3} /> : <ButtonActive month={3} />}
      {monthMap.get(4) ? <Button month={4} /> : <ButtonActive month={4} />}
      {monthMap.get(5) ? <Button month={5} /> : <ButtonActive month={5} />}
      {monthMap.get(6) ? <Button month={6} /> : <ButtonActive month={6} />}
      {monthMap.get(7) ? <Button month={7} /> : <ButtonActive month={7} />}
      {monthMap.get(8) ? <Button month={8} /> : <ButtonActive month={8} />}
      {monthMap.get(9) ? <Button month={9} /> : <ButtonActive month={9} />}
      {monthMap.get(10) ? <Button month={10} /> : <ButtonActive month={10} />}
      {monthMap.get(11) ? <Button month={11} /> : <ButtonActive month={11} />}
      {monthMap.get(12) ? <Button month={12} /> : <ButtonActive month={12} />}
      {/* {MonthArray.map((data, index) => (
        <MonthData key={index}>{data.month}</MonthData>
      ))} */}
    </MonthScrollWrapper>
  );
};

export default MonthScroll;
