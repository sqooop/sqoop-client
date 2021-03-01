import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/signIn/Button';
import { withRouter } from 'react-router-dom';
import { resetPassword } from '../../../lib/api/auth';
import { setVisible, setWarning } from '../../../store/modules/findPassword';

const ButtonContainer = ({ history, content }) => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.findPassword.email);
  const saveWarning = data => dispatch(setWarning(data));
  const saveVisible = data => dispatch(setVisible(data));

  const onClickFind = async () => {
    try {
      await resetPassword(email);
      saveVisible(true);
    } catch (e) {
      saveWarning('존재하지 않는 이메일입니다. 다시 한번 확인해주세요!');
    }
  };
  return (
    <>
      <Button
        onClick={onClickFind}
        color={email ? '#195bff' : '#a5a5a5'}
        content={content}
      />
    </>
  );
};

export default withRouter(ButtonContainer);
