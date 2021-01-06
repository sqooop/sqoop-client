import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVisible } from '../../store/modules/modal';
import Modal from '../../components/createActivity/Modal';
import { createActivity } from '../../lib/api/activity';

const ModalContainer = () => {
  const dispatch = useDispatch();
  const saveVisible = data => dispatch(setVisible(data));

  const isVisible = useSelector(state => state.modal.isVisible);
  const activity = useSelector(state => state.activity);

  const toggleVisible = () => {
    saveVisible(!isVisible);
  };
  const onClickSave = async event => {
    saveVisible(!isVisible);
    // console.log(activity);
    await createActivity(activity);
  };

  return (
    <Modal
      toggleVisible={toggleVisible}
      visible={isVisible}
      onClickSave={onClickSave}
    />
  );
};

export default ModalContainer;
