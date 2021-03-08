import React from 'react';
import Styled from 'styled-components';

const WarnWrap = Styled.div`
  height: 20px;
  font-size: 10px;
  color: #ff1919;
  width: 266px;
`;

const CurrentPasswrod = Styled.div`
  display: flex;
  input {
      width: 266px;
      border: none;
      outline: none;
      :hover{
          background: #EEEEEE;
      }
  }
  input::placeholder {
    color: #A5A5A5
  }
`;

const NewPassword = Styled.div`
  input {
    width: 266px;
    border: none;
    outline: none;
    :hover{
      background: #EEEEEE;
    }
  }
  input::placeholder {
    color: #A5A5A5
  }
`;
const ConfirmPassword = Styled.div`
  input {
    width: 266px;
    border: none;
    outline: none;
    :hover{
        background: #EEEEEE;
    }
  }
  input::placeholder {
    color: #A5A5A5
  }
`;
const ChangeButton = Styled.div`
  cursor:pointer;
  text-align: right;
  width: 266px;
  color: ${props => props.color};
`;
const ChangePassword = props => {
  const {
    onClick,
    onChangePassword,
    onChangeNewPassword,
    onChangePasswordCheck,
    password,
    newPassword,
    passwordCheck,
    pwarning,
    nwarning,
    cwarning,
    button,
  } = props;
  return (
    <>
      <CurrentPasswrod>
        <input
          type="password"
          placeholder="현재 비밀번호"
          onChange={onChangePassword}
          value={password}
        />
      </CurrentPasswrod>
      <WarnWrap>{pwarning}</WarnWrap>
      <NewPassword>
        <input
          type="password"
          placeholder="새 비밀번호"
          onChange={onChangeNewPassword}
          value={newPassword}
        />
      </NewPassword>
      <WarnWrap>{nwarning}</WarnWrap>
      <ConfirmPassword>
        <input
          type="password"
          placeholder="새 비밀번호 확인"
          onChange={onChangePasswordCheck}
          value={passwordCheck}
        />
      </ConfirmPassword>
      <WarnWrap>{cwarning}</WarnWrap>
      <ChangeButton
        color={
          password &&
          newPassword &&
          passwordCheck &&
          pwarning === '' &&
          nwarning === '' &&
          cwarning === ''
            ? '#195BFF'
            : '#a5a5a5'
        }
        onClick={
          password &&
          newPassword &&
          passwordCheck &&
          pwarning === '' &&
          nwarning === '' &&
          cwarning === ''
            ? onClick
            : null
        }
      >
        {button}
      </ChangeButton>
    </>
  );
};

export default ChangePassword;
