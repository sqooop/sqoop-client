import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/signIn/Button';
import { withRouter } from 'react-router-dom';
import {
  setVisible,
  setPhoneWarning,
  setEmailWarning,
} from '../../store/modules/signup';
import { checkPhone, checkEmail } from '../../lib/api/auth';

const ButtonContainer = ({ history }) => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.signup.email);
  const password = useSelector(state => state.signup.password);
  const passwordCheck = useSelector(state => state.signup.passwordCheck);
  const userName = useSelector(state => state.signup.userName);
  const phone = useSelector(state => state.signup.phone);
  const phoneWarning = useSelector(state => state.signup.phoneWarning);
  const emailWarning = useSelector(state => state.signup.emailWarning);
  const birthday = useSelector(state => state.signup.birthday);
  const passwordWarning = useSelector(state => state.signup.passwordWarning);
  const check = useSelector(state => state.signup.isChecked);
  const passwordCheckWarning = useSelector(
    state => state.signup.passwordCheckWarning,
  );
  const saveVisible = data => dispatch(setVisible(data));
  const savePhoneWarning = data => dispatch(setPhoneWarning(data));
  const saveEmailWarning = data => dispatch(setEmailWarning(data));

  const onClick = async () => {
    try {
      await checkPhone({ phone });
    } catch (e) {
      savePhoneWarning(
        '이미 등록된 휴대폰 번호입니다. 다시 한번 확인해주세요!',
      );
    }
    try {
      await checkEmail({ email });
      saveVisible(true);
    } catch (e) {
      saveEmailWarning('이미 등록된 이메일입니다. 다시 한번 확인해주세요!');
    }
  };
  return (
    <>
      <Button
        onClick={onClick}
        color={
          email &&
          password &&
          passwordCheck &&
          userName &&
          phone &&
          phoneWarning === '' &&
          emailWarning === '' &&
          passwordWarning === '' &&
          passwordCheckWarning === '' &&
          birthday &&
          check
            ? '#195bff'
            : '#a5a5a5'
        }
        content="회원가입"
      />
    </>
  );
};

export default withRouter(ButtonContainer);
