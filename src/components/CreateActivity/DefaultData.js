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

const DefaultTagData = props => {
  const { text } = props;
  return (
    <TagStyleDiv>
      {text}
      <span style={{ color: '#00FF84' }}>*</span>
    </TagStyleDiv>
  );
};

const TagStyleDiv = styled.div`
  float: left;
  width: 5rem;
  font-size: 0.875rem;
  margin-top: 4px;
`;

const StyleDiv = styled.div`
  float: left;
  width: 5rem;
  font-size: 0.875rem;
`;
export { DefaultData, DefaultTagData };
