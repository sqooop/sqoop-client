import React from 'react';
import styled from 'styled-components';

const DefaultData = props => {
  const { text, isStar } = props;
  return (
    <StyleDiv>
      {text}
      {isStar ? <span style={{ color: '#00FF84' }}>*</span> : <></>}
    </StyleDiv>
  );
};

const StyleDiv = styled.div`
  display: flex;
  align-items: center;
  width: 6.3vw;
  height: 1.6vw;
  font-size: 1.1vw !important;
  background-color: lightblue;
`;

export default DefaultData;
