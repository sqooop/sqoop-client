import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWarning, setToken } from '../../store/modules/signIn';
import Button from '../../components/signIn/Button';
import { signin } from '../../lib/api/auth';
import { withRouter } from 'react-router-dom';

const ButtonContainer = ({ history }) => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.signIn.email);
  const password = useSelector(state => state.signIn.password);
  const saveWarning = data => dispatch(setWarning(data));
  const saveToken = data => dispatch(setToken(data));

  const onClick = async () => {
    try {
      const { data } = await signin({ email, password });
      localStorage.setItem('token', data.data.accessToken);
      saveToken(data.data.accessToken);
    } catch (e) {
      // console.log('[FAIL] SIGNIN', e);
      saveWarning('이메일 혹은 비밀번호를 확인해주세요');
      throw e;
    }
    history.push('/home');
  };
  return (
    <>
      <Button
        onClick={onClick}
        color={email && password ? '#195bff' : '#a5a5a5'}
<<<<<<< HEAD
        content="로그인"
=======
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
      />
    </>
  );
};

export default withRouter(ButtonContainer);
