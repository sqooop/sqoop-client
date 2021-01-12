import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVisible } from '../../store/modules/modal';
import { withRouter } from 'react-router-dom';
import Modal from '../../components/createActivity/Modal';

const ModalContainer = ({ history }) => {
  const dispatch = useDispatch();
  const saveVisible = data => dispatch(setVisible(data));

  const isVisible = useSelector(state => state.modal.isVisible);

  const nextTime = () => {
    saveVisible(!isVisible);
    history.push(`/`);
  };

  const goCard = () => {
    saveVisible(!isVisible);
    history.push(`/steps/0`);
  };

  return <Modal nextTime={nextTime} visible={isVisible} goCard={goCard} />;
};

export default withRouter(ModalContainer);
