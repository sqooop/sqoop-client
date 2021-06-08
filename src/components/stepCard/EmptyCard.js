// 리덕스 적용없음
import React from 'react';
import Styled from 'styled-components';

const EmptyCardWrap = Styled.div`
  .card {
    box-sizing: border-box;
    width: 266px;
    height: 355px;
    border: none;
    overflow: hidden;
  }
`;

const EmptyCard = ({ marginLeft, marginRight }) => {
  return (
    <EmptyCardWrap>
      <div
        className="card"
        style={{ marginLeft: marginLeft, marginRight: marginRight }}
      ></div>
    </EmptyCardWrap>
  );
};

export default EmptyCard;
