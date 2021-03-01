import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Modal from '../../components/signUp/Modal';
import { setVisible } from '../../store/modules/signup';
import { signup } from '../../lib/api/auth';

const ModalContainer = ({ history }) => {
  const dispatch = useDispatch();
  const isVisible = useSelector(state => state.signup.isVisible);
  const email = useSelector(state => state.signup.email);
  const userName = useSelector(state => state.signup.userName);
  const phone = useSelector(state => state.signup.phone);
  const password = useSelector(state => state.signup.password);
  const birthday = useSelector(state => state.signup.birthday);
  const saveVisible = data => dispatch(setVisible(data));

  const onClick = async () => {
    saveVisible(false);
    try {
      await signup({
        email,
        userName,
        password,
        birthday,
        phoneNumber: phone,
      });
      history.push('/');
    } catch (e) {}
  };
  return (
    <Modal
      visible={isVisible}
      email={email}
      userName={userName}
      phone={phone}
      birthday={birthday}
      onClick={onClick}
    />
  );
};

export default withRouter(ModalContainer);
