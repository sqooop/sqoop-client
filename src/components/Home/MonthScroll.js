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
      result.set(0, new Set());
      data.allMonthArray.forEach(month =>
        result.get(Math.floor(month / 100).push(month % 100)),
      );
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
