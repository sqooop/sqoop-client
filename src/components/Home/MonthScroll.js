import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
const MonthScroll = () => {
  const MonthArray = [
    {
      index: 1,
      month: '1월',
    },
    {
      index: 2,
      month: '2월',
    },
    {
      index: 3,
      month: '3월',
    },
    {
      index: 4,
      month: '4월',
    },
    {
      index: 5,
      month: '5월',
    },
    {
      index: 6,
      month: '6월',
    },
    {
      index: 7,
      month: '7월',
    },
    {
      index: 8,
      month: '8월',
    },
    {
      index: 9,
      month: '9월',
    },
    {
      index: 10,
      month: '10월',
    },
    {
      index: 11,
      month: '11월',
    },
    {
      index: 12,
      month: '12월',
    },
  ];
  return (
    <>
      <MonthScrollWrapper>
        {MonthArray.map((data, index) => (
          <MonthData key={index}>{data.month}</MonthData>
        ))}
      </MonthScrollWrapper>
    </>
  );
};
const MonthScrollWrapper = styled.div`
  display: block;
  width: 50px;
  height: 100%;
`;

const MonthData = styled.div`
  margin: 0 auto;
  margin-top: 10px;
  font-size: 15px;
  width: 45px;
  font-size: 10px;
  font-weight: bold !important;
  margin-bottom: 72px;
  :hover {
    font-size: 15px;
    color: ${palette.main};
  }
`;

export default MonthScroll;
