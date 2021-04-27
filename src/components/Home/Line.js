import React from 'react';
import styled from 'styled-components';
import line from '../../assets/icons/Line 1.svg';
const LineBlock = styled.div`
  width: 5px;
  top: 0;
  height: 580px;
  overflow: hidden;
  display: flex;
  margin-left: 27px;
`;
const Line = () => {
  return (
    <LineBlock>
      <img src={line} alt="" />
    </LineBlock>
  );
};

export default Line;
