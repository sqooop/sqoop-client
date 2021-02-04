import React from 'react';
import palette from '../../lib/styles/palette';
import Styled from 'styled-components';

const ButtonWrap = Styled.div`
//background: pink;
text-align: center;
  margin: 0 auto;
  margin-top: 0px;
  width: 40px;
  height: 30px;
  font-size: 10px;
  font-weight: bold !important;
  margin-bottom: 60px;
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
