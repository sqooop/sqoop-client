import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Modal from '../../../components/findInformation/password/Modal';
import { setVisible, setEmail } from '../../../store/modules/findPassword';

const ModalContainer = ({ history }) => {
  const dispatch = useDispatch();
  const isVisible = useSelector(state => state.findPassword.isVisible);
  const email = useSelector(state => state.findPassword.email);
  const saveVisible = data => dispatch(setVisible(data));
  const saveEmail = data => dispatch(setEmail(data));
  const onClick = async () => {
    saveVisible(false);
    history.push('/');
    saveEmail('');
  };
  return <Modal visible={isVisible} onClick={onClick} email={email} />;
};

export default withRouter(ModalContainer);
