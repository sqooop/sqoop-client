import React from 'react';
import palette from '../../lib/styles/palette';
import Styled from 'styled-components';

const ButtonWrap = Styled.div`
  margin: 0 auto;
  margin-top: 10px;
  font-size: 15px;
  width: 45px;
  font-size: 10px;
  font-weight: bold !important;
  margin-bottom: 72px;
  border: 0;
  outline: 0;
  cursor: default;
  color: ${palette.grey02};
`;

const Button = ({ index, month }) => {
  return (
    <ButtonWrap>
      <div key={index}>{month}월</div>
    </ButtonWrap>
  );
};

export default Button;
