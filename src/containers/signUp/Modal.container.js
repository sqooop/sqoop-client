import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Modal from '../../components/signUp/Modal';
import { setVisible } from '../../store/modules/signup';

const ModalContainer = ({ history }) => {
  const dispatch = useDispatch();
  const isVisible = useSelector(state => state.signup.isVisible);
  const email = useSelector(state => state.signup.email);
  const userName = useSelector(state => state.signup.userName);
  const phone = useSelector(state => state.signup.phone);
  const birthday = useSelector(state => state.signup.birthday);
  const saveVisible = data => dispatch(setVisible(data));

  const onClick = async () => {
    saveVisible(false);
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
