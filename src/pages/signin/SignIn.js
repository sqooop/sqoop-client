import React from 'react';
import styled from 'styled-components';
import Input from '../../containers/signIn/Input.container';
import Button from '../../containers/signIn/Button.container';
import WarnMessage from '../../containers/signIn/WarnMessage.container';
import Logo from '../../components/signIn/Logo';
import Block from '../../components/signIn/Block';
import { withRouter } from 'react-router-dom';

const SignInWrap = styled.div`
  width: 100%;
  padding-left: 14.297vw;
  padding-right: 14.297vw;
  margin-top: 23.472222vh;
  height: 55.5556vh;
  overflow: hidden;
`;
const SignIn = () => {
  return (
    <SignInWrap>
      <Logo />
      <Input />
      <WarnMessage />
      <Button />
      <Block />
    </SignInWrap>
  );
};

export default withRouter(SignIn);
