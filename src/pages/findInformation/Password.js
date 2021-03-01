import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/signIn/Logo';
import Input from '../../components/findInformation/password/Input';
import WarnMessage from '../../components/findInformation/WarnMessage';
import Button from '../../components/findInformation/password/Button';
import Block from '../../components/findInformation/password/Block';

const Password = () => {
  return (
    <StyledPassword>
      <Logo />
      <StyledText>
        <div>비밀번호 찾기</div>
        <div>sqoop에 가입된 이메일로 임시 비밀번호를 보내드립니다.</div>
      </StyledText>
      <Input />
      <WarnMessage />
      <Button />
      <Block />
    </StyledPassword>
  );
};

const StyledPassword = styled.div`
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

export default Password;
