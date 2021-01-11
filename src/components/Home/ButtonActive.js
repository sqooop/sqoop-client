import React from 'react';
import palette from '../../lib/styles/palette';
import Styled from 'styled-components';

const ButtonActiveWrap = Styled.div`
  margin: 0 auto;
  margin-top: 10px;
  font-size: 15px;
  width: 45px;
  font-size: 10px;
  font-weight: bold !important;
  margin-bottom: 72px;
  border: 0;
  outline: 0;
  :hover {
    font-size: 15px;
    color: ${palette.main};
  }
`;

const ButtonActive = ({ index, month, onClickFunc }) => {
  return (
    <ButtonActiveWrap>
      <button key={index} onClick={onClickFunc}>
        {month}
      </button>
    </ButtonActiveWrap>
  );
};

export default ButtonActive;
