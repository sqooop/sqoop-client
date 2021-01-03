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

const TagStyleDiv = styled.div`
  float: left;
  width: 5rem;
  font-size: 0.875rem;
`;

const StyleDiv = styled.div`
  float: left;
  width: 5rem;
  font-size: 0.875rem;
  margin-top: 3px;
`;

export default DefaultData;
