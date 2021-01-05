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
  float: left;
  width: 6.25vw;
  font-size: 1.4rem !important;
  margin-top: 0.3rem;
  margin-right: 0.9375vw;
  padding-left: 0.1vw;
`;

export default DefaultData;
