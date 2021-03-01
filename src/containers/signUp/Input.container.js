import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setEmail,
  setPassword,
  setPasswordCheck,
  setName,
  setPhone,
  setEmailWarning,
  setPasswordWarning,
  setPasswordCheckWarning,
  setPhoneWarning,
} from '../../store/modules/signup';
import Input from '../../components/signIn/Input';
import Notice from '../../components/signUp/Notice';
import Birth from '../../containers/signUp/Birth.container';
import Check from '../../containers/signUp/Check.container';
import WarningMessage from '../../components/signUp/WarnMessage';
const InputContainer = () => {
  const dispatch = useDispatch();
  const saveEmail = data => dispatch(setEmail(data));
  const savePassword = data => dispatch(setPassword(data));
  const savePasswordCheck = data => dispatch(setPasswordCheck(data));
  const saveName = data => dispatch(setName(data));
  const savePhone = data => dispatch(setPhone(data));
  const saveEmailWarning = data => dispatch(setEmailWarning(data));
  const savePasswordWarning = data => dispatch(setPasswordWarning(data));
  const savePhoneWarning = data => dispatch(setPhoneWarning(data));
  const savePasswordCheckWarning = data =>
    dispatch(setPasswordCheckWarning(data));

  const email = useSelector(state => state.signup.email);
  const password = useSelector(state => state.signup.password);
  const passwordCheck = useSelector(state => state.signup.passwordCheck);
  const userName = useSelector(state => state.signup.userName);
  const phone = useSelector(state => state.signup.phone);
  const phoneWarning = useSelector(state => state.signup.phoneWarning);
  const emailWarning = useSelector(state => state.signup.emailWarning);
  const passwordWarning = useSelector(state => state.signup.passwordWarning);
  const passwordCheckWarning = useSelector(
    state => state.signup.passwordCheckWarning,
  );

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
  const onChangePassword = evt => {
    const value = evt.target.value;
    savePassword(value);
    const num = value.search(/[0-9]/g);
    const eng = value.search(/[a-z]/gi);
    if (num < 0 || eng < 0 || value.length < 8) {
      savePasswordWarning('8자 이상 입력해주세요 (문자, 숫자 포함)');
    } else {
      savePasswordWarning('');
    }
  };
  const onChangePasswordCheck = evt => {
    const value = evt.target.value;
    savePasswordCheck(value);
    if (value !== password) {
      savePasswordCheckWarning('비밀번호가 일치하지 않습니다');
    } else {
      savePasswordCheckWarning('');
    }
  };
  const onChangeName = evt => {
    const value = evt.target.value;
    saveName(value);
  };
  const onChangePhone = evt => {
    const value = evt.target.value;
    const test = value.search(
      /[a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi,
    );
    if (test === -1) {
      savePhone(value);
    }
    savePhoneWarning('');
  };
  return (
    <>
      <Input
        content="이메일"
        value={email}
        onChange={onChangeEmail}
        defaultValue=""
      />
      <WarningMessage warning={emailWarning} />
      <Input
        content="비밀번호"
        value={password}
        onChange={onChangePassword}
        defaultValue=""
      />
      <WarningMessage warning={passwordWarning} />
      <Input
        content="비밀번호 확인"
        value={passwordCheck}
        onChange={onChangePasswordCheck}
        defaultValue=""
      />
      <WarningMessage warning={passwordCheckWarning} />
      <Input
        content="이름"
        value={userName}
        onChange={onChangeName}
        defaultValue=""
      />
      <Notice />
      <Birth />
      <Input
        content="휴대폰 번호"
        value={phone}
        onChange={onChangePhone}
        defaultValue=""
      />
      <WarningMessage warning={phoneWarning} />
      <Check />
    </>
  );
};

export default InputContainer;
