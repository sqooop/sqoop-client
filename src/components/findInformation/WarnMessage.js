import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
const WarnWrap = styled.div`
  font-size: 10px;
  color: #ff1919;
  width: 358px;
`;
const WarnMessageContainer = ({ history }) => {
  const warning = useSelector(state => state.signIn.warning);
  return (
    <>
      <WarnWrap>{warning}</WarnWrap>
    </>
  );
};

export default withRouter(WarnMessageContainer);
