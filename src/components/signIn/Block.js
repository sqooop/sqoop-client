import React from 'react';
import styled from 'styled-components';
import divider from '../../assets/icons/Divider.svg';
import { Link, withRouter } from 'react-router-dom';

const StyledSpan = styled.span`
  color: #a5a5a5;
  font-size: 10px;
`;

const SignupDiv = styled.div`
  color: #195bff;
  font-weight: 700;
  margin: 0 auto;
  width: 59px;
  margin-top: 3px;
  cursor: pointer;
`;

const CenterDiv = styled.div`
  margin: 0 auto;
  margin-top: ${props => props.marginTop};
  width: ${props => props.width};
  padding-left: ${props => props.paddingLeft};

  a {
    color: #a5a5a5;
    text-decoration: none;
  }
`;

const Block = ({ history }) => {
  const onClick = () => {
    history.push('/signup');
  };

  return (
    <>
      <CenterDiv width="170px" paddingLeft="10px">
        <StyledSpan>
          <Link to="/email">이메일 찾기</Link>
        </StyledSpan>
        <img src={divider} style={{ margin: '0px 20px' }} alt="" />
        <StyledSpan>
          <Link to="/password">비밀번호 찾기</Link>
        </StyledSpan>
      </CenterDiv>
      <CenterDiv width="130px" marginTop="54px">
        <StyledSpan>sqoop을 처음 사용하시나요?</StyledSpan>
      </CenterDiv>
      <SignupDiv onClick={onClick}>회원가입</SignupDiv>
    </>
  );
};

export default withRouter(Block);
