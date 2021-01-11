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
  color: ${palette.grey02};
`;

const Button = ({ index, month }) => {
  return (
    <ButtonWrap>
      <button key={index}>{month}</button>
    </ButtonWrap>
  );
};

export default Button;
