import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/signIn/Logo';
import Input from '../../components/findInformation/password/Input';
import Button from '../../containers/findInformation/password/Button.container';
import Block from '../../components/findInformation/password/Block';
import WarningMessage from '../../components/signUp/WarnMessage';
import Modal from '../../containers/findInformation/password/Modal.container';
import { useSelector } from 'react-redux';

const Password = () => {
  const warning = useSelector(state => state.findPassword.warning);
  return (
    <StyledPassword>
      <Modal />
      <Logo />
      <StyledText>
        <div>비밀번호 찾기</div>
        <div>sqoop에 가입된 이메일로 임시 비밀번호를 보내드립니다.</div>
      </StyledText>
      <Input />
      <Message>
        <WarningMessage warning={warning} />
      </Message>
      <Button content="비밀번호 찾기" />
      <Block />
    </StyledPassword>
  );
};
const Message = styled.div`
  margin-top: 41px;
`;
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
