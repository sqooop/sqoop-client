import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setEmail,
  setPassword,
  setWarning,
  setToken,
} from '../../store/modules/signIn';
import { signin } from '../../lib/api/auth';
import Input from '../../components/signIn/Input';

const GroupContainer = () => {
  const dispatch = useDispatch();
  const saveEmail = data => dispatch(setEmail(data));
  const savePassword = data => dispatch(setPassword(data));
  const email = useSelector(state => state.signIn.email);
  const password = useSelector(state => state.signIn.password);
  const saveWarning = data => dispatch(setWarning(data));
  const saveToken = data => dispatch(setToken(data));

  const onClick = async () => {
    try {
      const { data } = await signin({ email, password });
      sessionStorage.setItem('token', data.data.accessToken);
      saveToken(data.data.accessToken);
    } catch (e) {
      saveWarning('이메일 혹은 비밀번호를 확인해주세요');
      throw e;
    }
    window.location.reload();
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  const onChangeEmail = evt => {
    const value = evt.target.value;
    saveEmail(value);
  };
  const onChangePassword = evt => {
    const value = evt.target.value;
    savePassword(value);
  };
  return (
    <>
      <Input
        content="이메일"
        value={email}
        onChange={onChangeEmail}
        defaultValue=""
      />
      <Input
        content="비밀번호"
        value={password}
        onKeyPress={onKeyPress}
        onChange={onChangePassword}
        defaultValue=""
      />
    </>
  );
};

export default GroupContainer;
