import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const StyledSpan = styled.span`
  color: #a5a5a5;
  font-size: 10px;
`;
const SigninDiv = styled.div`
  color: #195bff;
  font-weight: 700;
  margin: 0 auto;
  width: 51px;
  margin-top: 3px;
  margin-bottom: 80px;
  cursor: pointer;
`;
const CenterDiv = styled.div`
  margin: 0 auto;
  margin-top: ${props => props.marginTop};
  width: 128px;
  padding-left: ${props => props.paddingLeft};
`;

const Block = ({ history }) => {
  const onClick = () => {
    history.push('/');
  };
  return (
    <>
      <CenterDiv width="130px" marginTop="54px">
        <StyledSpan>이미 sqoop의 회원이신가요?</StyledSpan>
      </CenterDiv>
      <SigninDiv onClick={onClick}>로그인</SigninDiv>
    </>
  );
};

export default withRouter(Block);
