import React from 'react';
import styled from 'styled-components';
import Input from '../../containers/signUp/Input.container';
import Button from '../../containers/signUp/Button.container';
import Modal from '../../containers/signUp/Modal.container';
import Logo from '../../components/signIn/Logo';
import Block from '../../components/signUp/Block';
import { withRouter } from 'react-router-dom';

const SignInWrap = styled.div`
  width: 100%;
  padding-left: 14.297vw;
  padding-right: 14.297vw;
  margin-top: 102px;
  overflow: hidden;
`;
const SignUp = () => {
  return (
    <SignInWrap>
      <Logo />
      <Input />
      <Button />
      <Block />
      <Modal />
    </SignInWrap>
  );
};

export default withRouter(SignUp);
