import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StepHeader from '../../components/stepCard/StepHeader';
import { setModalActive } from '../../store/modules/currentCard';

const StepHeaderContainer = () => {
  const userCardInfo = useSelector(state => state.userCardInfo);
  const notSaved = useSelector(state => state.currentCard.notSaved);
  const modalActive = useSelector(state => state.currentCard.modalActive);
  const { title, answers } = userCardInfo;

  const dispatch = useDispatch();
  const saveModalActive = data => dispatch(setModalActive(data));

  return (
    <StepHeader
      title={title}
      answers={answers}
      notSaved={notSaved}
      modalActive={modalActive}
      saveModalActive={saveModalActive}
    />
  );
};

export default StepHeaderContainer;
