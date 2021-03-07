import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StepHeader from '../../components/stepCard/StepHeader';
import {
  setModalActive,
  setClassNameLeft,
  setClassNameGrow,
  setClassNameShrink,
  setClassNameRight,
  setClassNameShrinkRight,
} from '../../store/modules/currentCard';
import { setPrevIndex } from '../../store/modules/cardIndex';

const StepHeaderContainer = () => {
  const userCardInfo = useSelector(state => state.userCardInfo);
  const currentCard = useSelector(state => state.currentCard);
  const { notSaved, modalActive } = currentCard;
  const { title, answers } = userCardInfo;

  const dispatch = useDispatch();
  const saveModalActive = data => dispatch(setModalActive(data));
  const savePrevIndex = idx => dispatch(setPrevIndex(idx));
  const saveClassNameLeft = string => dispatch(setClassNameLeft(string));
  const saveClassNameGrow = string => dispatch(setClassNameGrow(string));
  const saveClassNameShrink = string => dispatch(setClassNameShrink(string));
  const saveClassNameRight = string => dispatch(setClassNameRight(string));
  const saveClassNameShrinkRight = string =>
    dispatch(setClassNameShrinkRight(string));

  return (
    <StepHeader
      title={title}
      answers={answers}
      notSaved={notSaved}
      modalActive={modalActive}
      saveModalActive={saveModalActive}
      savePrevIndex={savePrevIndex}
      saveClassNameLeft={saveClassNameLeft}
      saveClassNameGrow={saveClassNameGrow}
      saveClassNameShrink={saveClassNameShrink}
      saveClassNameRight={saveClassNameRight}
      saveClassNameShrinkRight={saveClassNameShrinkRight}
    />
  );
};

export default StepHeaderContainer;
