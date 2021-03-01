import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setEmail,
  setPhone,
  setEmailWarning,
} from '../../store/modules/signup';
import Input from '../../components/signIn/Input';
import Birth from '../../containers/signUp/Birth.container';
import WarningMessage from '../../components/signUp/WarnMessage';

const InputContainer = () => {
  const dispatch = useDispatch();
  const saveEmail = data => dispatch(setEmail(data));
  const savePhone = data => dispatch(setPhone(data));
  const saveEmailWarning = data => dispatch(setEmailWarning(data));
  const email = useSelector(state => state.signup.email);
  const phone = useSelector(state => state.signup.phone);
  const phoneWarning = useSelector(state => state.signup.phoneWarning);

  const onChangeEmail = evt => {
    const value = evt.target.value;
    var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!reg_email.test(value)) {
      saveEmailWarning('이메일 형식이 올바르지 않습니다');
    } else {
      saveEmailWarning('');
    }
    saveEmail(value);
  };

  const onChangePhone = evt => {
    const value = evt.target.value;
    const test = value.search(
      /[a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi,
    );
    if (test === -1) {
      savePhone(value);
    }
  };

  return (
    <>
      <Input
        content="이메일"
        value={email}
        onChange={onChangeEmail}
        defaultValue=""
      />
      <Birth />
      <Input
        content="휴대폰 번호"
        value={phone}
        onChange={onChangePhone}
        defaultValue=""
      />
      <WarningMessage warning={phoneWarning} />
    </>
  );
};

export default InputContainer;
