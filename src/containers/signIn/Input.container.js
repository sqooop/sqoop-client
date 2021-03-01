import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setPassword } from '../../store/modules/signIn';
import Input from '../../components/signIn/Input';

const GroupContainer = () => {
  const dispatch = useDispatch();
  const saveEmail = data => dispatch(setEmail(data));
  const savePassword = data => dispatch(setPassword(data));

  const email = useSelector(state => state.signIn.email);
  const password = useSelector(state => state.signIn.password);
<<<<<<< HEAD
=======
  const emailWarning = useSelector(state => state.signIn.emailWarning);
  const passwordWarning = useSelector(state => state.signIn.passwordWarning);
>>>>>>> c701b541a4661ae58261808483f8b9182a287066

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
<<<<<<< HEAD
=======
        warning={emailWarning}
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
      />
      <Input
        content="비밀번호"
        value={password}
        onChange={onChangePassword}
        defaultValue=""
<<<<<<< HEAD
=======
        warning={passwordWarning}
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
      />
    </>
  );
};

export default GroupContainer;
