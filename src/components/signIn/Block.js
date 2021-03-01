import React from 'react';
import styled from 'styled-components';
import divider from '../../assets/icons/Divider.svg';
<<<<<<< HEAD
import { withRouter } from 'react-router-dom';
=======
>>>>>>> c701b541a4661ae58261808483f8b9182a287066

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
<<<<<<< HEAD
  cursor: pointer;
=======
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
`;
const CenterDiv = styled.div`
  margin: 0 auto;
  margin-top: ${props => props.marginTop};
  width: ${props => props.width};
  padding-left: ${props => props.paddingLeft};
`;

<<<<<<< HEAD
const Block = ({ history }) => {
  const onClick = () => {
    history.push('/signup');
  };
=======
const Block = props => {
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
  return (
    <>
      <CenterDiv width="170px" paddingLeft="10px">
        <StyledSpan>이메일 찾기</StyledSpan>
        <img src={divider} style={{ margin: '0px 20px' }} alt="" />
        <StyledSpan>비밀번호 찾기</StyledSpan>
      </CenterDiv>
      <CenterDiv width="130px" marginTop="54px">
        <StyledSpan>sqoop을 처음 사용하시나요?</StyledSpan>
      </CenterDiv>
<<<<<<< HEAD
      <SignupDiv onClick={onClick}>회원가입</SignupDiv>
=======
      <SignupDiv>회원가입</SignupDiv>
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
    </>
  );
};

<<<<<<< HEAD
export default withRouter(Block);
=======
export default Block;
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
