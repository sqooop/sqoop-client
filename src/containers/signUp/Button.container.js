import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/signIn/Button';
import { withRouter } from 'react-router-dom';
import { setVisible } from '../../store/modules/signup';

const ButtonContainer = ({ history }) => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.signup.email);
  const password = useSelector(state => state.signup.password);
  const passwordCheck = useSelector(state => state.signup.passwordCheck);
  const userName = useSelector(state => state.signup.userName);
  const phone = useSelector(state => state.signup.phone);
  const phoneWarning = useSelector(state => state.signup.phoneWarning);
  const emailWarning = useSelector(state => state.signup.emailWarning);
  const passwordWarning = useSelector(state => state.signup.passwordWarning);
  const check = useSelector(state => state.signup.isChecked);
  const passwordCheckWarning = useSelector(
    state => state.signup.passwordCheckWarning,
  );
  const saveVisible = data => dispatch(setVisible(data));
  const onClick = async () => {
    saveVisible(true);
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
