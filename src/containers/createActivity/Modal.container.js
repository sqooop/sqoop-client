import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVisible } from '../../store/modules/modal';
import Modal from '../../components/createActivity/Modal';

const ModalContainer = () => {
  const dispatch = useDispatch();
  const saveVisible = data => dispatch(setVisible(data));

  const isVisible = useSelector(state => state.modal.isVisible);

  const toggleVisible = () => {
    saveVisible(!isVisible);
  };
  return <Modal toggleVisible={toggleVisible} visible={isVisible} />;
};

export default ModalContainer;
