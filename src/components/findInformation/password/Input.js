import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, s } from '../../../store/modules/findPassword';
import Input from '../../../components/signIn/Input';

const InputContainer = () => {
  const dispatch = useDispatch();
  const saveEmail = data => dispatch(setEmail(data));
  const email = useSelector(state => state.findPassword.email);

  const onChangeEmail = evt => {
    const value = evt.target.value;
    saveEmail(value);
  };

  return (
    <>
      <Input
        content="이메일"
        value={email}
        onChange={onChangeEmail}
        defaultValue=""
      />
    </>
  );
};

export default InputContainer;
