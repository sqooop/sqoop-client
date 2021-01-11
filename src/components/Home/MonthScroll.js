import { React, useEffect } from 'react';
import styled from 'styled-components';
import { getCardAPI } from '../../lib/api/home/cardAPI';
import { useSelector } from 'react-redux';

const MonthScrollWrapper = styled.div`
  display: block;
  width: 50px;
  height: 100%;
`;

const MonthScroll = () => {
  const year = useSelector(state => state.userCardInfo.questions);

  useEffect(() => {
    (async () => {
      const data = await getCardAPI();

      const result = new Map();
      for (let i = data.firstYear; i <= data.lastYear; i++) {
        result.set(i, new Set());
      }
      data.allMonthArray
        .filter(item => item.length !== 0)
        .forEach(month => result.get(Math.floor(month / 100)).add(month % 100));
      console.log(result);
    })();
  });

  return (
    <MonthScrollWrapper>
      {/* {MonthArray.map((data, index) => (
        <MonthData key={index}>{data.month}</MonthData>
      ))} */}
    </MonthScrollWrapper>
  );
};

export default MonthScroll;
