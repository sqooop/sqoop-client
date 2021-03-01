import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Logo from '../../components/signIn/Logo';
import Input from '../../components/findInformation/Input';
import WarnMessage from '../../components/findInformation/WarnMessage';
import Button from '../../containers/findInformation/Button.container';
import Block from '../../components/findInformation/Block';

const Email = () => {
  const email = useSelector(state => state.signup.email);
  return (
    <StyledEmail>
      <Logo />
      {email === '' ? (
        <>
          <StyledText>
            <div>이메일 찾기</div>
            <div>
              회원가입 시 등록한 이름, 생년월일, 휴대폰 번호가 같아야,<br></br>
              이메일을 찾을 수 있습니다.
            </div>
          </StyledText>
          <Input />
          <WarnMessage />
          <Button content="이메일 찾기" />
          <Block />
        </>
      ) : (
        <>
          <StyledText>
            <div>이메일 확인</div>
          </StyledText>
          <StyledEmailDiv>{email}</StyledEmailDiv>
          <Button content="로그인" />
        </>
      )}
    </StyledEmail>
  );
};

const StyledEmailDiv = styled.div`
  margin: 0 auto;
  width: 358px;
  margin-top: 56px;
  text-align: center;
  font-size: 12px;
  margin-bottom: 72px;
`;
const StyledEmail = styled.div`
  padding-left: 14.297vw;
  padding-right: 14.297vw;
  margin-top: 102px;
`;

const StyledText = styled.div`
  margin: 0 auto;
  width: 358px;

  & > div:nth-child(1) {
    font-size: 14px;
    font-weight: bold;
    margin-top: 56px;
  }

  & > div:nth-child(2) {
    font-size: 12px;
    margin-top: 8px;
  }
`;

export default Email;
