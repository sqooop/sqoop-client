import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setEmailWarning } from '../../../store/modules/signup';
import Input from '../../../components/signIn/Input';
import WarningMessage from '../../../components/signUp/WarnMessage';

const InputContainer = () => {
  const dispatch = useDispatch();
  const saveEmail = data => dispatch(setEmail(data));
  const saveEmailWarning = data => dispatch(setEmailWarning(data));
  const email = useSelector(state => state.signup.email);

  const onChangeEmail = evt => {
    const value = evt.target.value;
    var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!reg_email.test(value)) {
      saveEmailWarning(
        '입력하신 정보와 일치하는 계정이 없습니다. 다시 한번 확인해주세요!',
      );
    } else {
      saveEmailWarning('');
    }
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
