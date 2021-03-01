import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setNewPassword,
  setPassword,
  setPasswordCheck,
  setCWarn,
  setNWarn,
  setPWarn,
  setButton,
} from '../../../store/modules/settings/password';
import ChangePasswordComponent from '../../../components/myPage/settings/ChangePassword';
import { changePassword } from '../../../lib/api/auth';
const ChangePassword = () => {
  const dispatch = useDispatch();
  const password = useSelector(state => state.password.password);
  const newPassword = useSelector(state => state.password.newPassword);
  const passwordCheck = useSelector(state => state.password.passwordCheck);
  const pwarning = useSelector(state => state.password.pwarning);
  const nwarning = useSelector(state => state.password.nwarning);
  const cwarning = useSelector(state => state.password.cwarning);
  const button = useSelector(state => state.password.button);
  const savePassword = data => dispatch(setPassword(data));
  const saveNewPassword = data => dispatch(setNewPassword(data));
  const savePasswordCheck = data => dispatch(setPasswordCheck(data));
  const saveCWarn = data => dispatch(setCWarn(data));
  const saveNWarn = data => dispatch(setNWarn(data));
  const savePWarn = data => dispatch(setPWarn(data));
  const saveButton = data => dispatch(setButton(data));

  const onChangePassword = evt => {
    const value = evt.target.value;
    savePassword(value);
    savePWarn('');
    saveButton('변경하기');
  };
  const onChangeNewPassword = evt => {
    const value = evt.target.value;
    saveNewPassword(value);
    const num = value.search(/[0-9]/g);
    const eng = value.search(/[a-z]/gi);
    if (num < 0 || eng < 0 || value.length < 8) {
      saveNWarn('8자 이상 입력해주세요 (문자, 숫자 포함)');
    } else {
      saveNWarn('');
    }
    if (value !== passwordCheck) {
      saveCWarn('비밀번호가 일치하지 않습니다');
    } else {
      saveCWarn('');
    }
    saveButton('변경하기');
  };
  const onChangePasswordCheck = evt => {
    const value = evt.target.value;
    savePasswordCheck(value);
    if (value !== newPassword) {
      saveCWarn('비밀번호가 일치하지 않습니다');
    } else {
      saveCWarn('');
    }
    saveButton('변경하기');
  };
  const onClick = async () => {
    try {
      const data = await changePassword({
        inputPW: password,
        newPW: newPassword,
      });
      saveButton('변경되었습니다!');
    } catch (err) {
      savePWarn('비밀번호를 확인해주세요');
    }
  };
  return (
    <ChangePasswordComponent
      onClick={onClick}
      onChangePassword={onChangePassword}
      onChangeNewPassword={onChangeNewPassword}
      onChangePasswordCheck={onChangePasswordCheck}
      password={password}
      newPassword={newPassword}
      passwordCheck={passwordCheck}
      pwarning={pwarning}
      nwarning={nwarning}
      cwarning={cwarning}
      button={button}
    />
  );
};

export default ChangePassword;
