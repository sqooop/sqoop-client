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
  width: 8rem;
  font-size: 1.4rem !important;
  margin-top: 0.3rem;
`;

export default DefaultData;
