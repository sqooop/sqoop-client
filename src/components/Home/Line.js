import React from 'react';
import styled from 'styled-components';
import line from '../../assets/icons/Line 1.svg';
const LineBlock = styled.div`
  width: 30px;
  top: 0;
  display: flex;
  margin-left: 10px;
  // background: pink;
`;
const Line = () => {
  return (
    <LineBlock>
      <img src={line} alt="" />
    </LineBlock>
  );
};

export default Line;
