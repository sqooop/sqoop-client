import React from 'react';
import Styled from 'styled-components';

const EmptyCardWrap = Styled.div`
  .card {
    box-sizing: border-box;
    width: 36.9vh;
    height: 49.3vh;
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
