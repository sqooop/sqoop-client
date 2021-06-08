import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
const StyledTag = styled.span`
  color: #195bff;
  border: 1px solid #195bff;
  background: ${palette.main};
  color: white;
  font-size: 13px;
  padding: 1px 10px;
  margin-right: 10px;
  display: inline-block;
`;
const HashTag = props => {
  const { tag } = props;
  return (
    <>
      <StyledTag>{tag}</StyledTag>
    </>
  );
};

export default HashTag;
