import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWarning } from '../../../store/modules/signIn';
import Button from '../../../components/signIn/Button';
import { withRouter } from 'react-router-dom';

const ButtonContainer = ({ history }) => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.signIn.email);
  const password = useSelector(state => state.signIn.password);
  const saveWarning = data => dispatch(setWarning(data));

  return (
    <>
      <Button color={'#195bff'} content="비밀번호 찾기" />
    </>
  );
};

export default withRouter(ButtonContainer);
