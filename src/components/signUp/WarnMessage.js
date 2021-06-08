import React from 'react';
import styled from 'styled-components';

const WarnWrap = styled.div`
  height: 20px;
  font-size: 10px;
  color: #ff1919;
  margin: 4px auto;
  width: 358px;
`;
const WarnMessage = props => {
  const { warning } = props;
  return <WarnWrap>{warning}</WarnWrap>;
};

export default WarnMessage;
