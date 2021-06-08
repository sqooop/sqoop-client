import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StepHeader from '../../components/stepCard/StepHeader';
import { setModalActive } from '../../store/modules/currentCard';
import { setPrevIndex } from '../../store/modules/cardIndex';

const StepHeaderContainer = () => {
  const userCardInfo = useSelector(state => state.userCardInfo);
  const currentCard = useSelector(state => state.currentCard);
  const { notSaved, modalActive } = currentCard;
  const { title, answers } = userCardInfo;

  const dispatch = useDispatch();
  const saveModalActive = data => dispatch(setModalActive(data));
  const savePrevIndex = idx => dispatch(setPrevIndex(idx));

  return (
    <StepHeader
      title={title}
      answers={answers}
      notSaved={notSaved}
      modalActive={modalActive}
      saveModalActive={saveModalActive}
      savePrevIndex={savePrevIndex}
    />
  );
};

export default StepHeaderContainer;
