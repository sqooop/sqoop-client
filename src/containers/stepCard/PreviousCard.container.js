import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PreviousCard from '../../components/stepCard/PreviousCard';
import { setModalActive } from '../../store/modules/currentCard';
import { setPrevIndex } from '../../store/modules/cardIndex';
import {
  setClassNameLeft,
  setClassNameShrinkRight,
  setClassNameShrink,
  setClassNameRight,
  setClassNameGrow,
} from '../../store/modules/currentCard';

const PreviousCardContainer = ({ index }) => {
  const userCardInfo = useSelector(state => state.userCardInfo);
  const { questions, answers } = userCardInfo;
  const currentCard = useSelector(state => state.currentCard);
  const {
    notSaved,
    modalActive,
    classNameLeft,
    classNameShrinkRight,
  } = currentCard;
  const prevIndex = useSelector(state => state.cardIndex.previousIndex);

  const dispatch = useDispatch();
  const saveModalActive = data => dispatch(setModalActive(data));
  const savePrevIndex = idx => dispatch(setPrevIndex(idx));
  const saveClassNameLeft = string => dispatch(setClassNameLeft(string));
  const saveClassNameShrinkRight = string =>
    dispatch(setClassNameShrinkRight(string));
  const saveClassNameShrink = string => dispatch(setClassNameShrink(string));
  const saveClassNameGrow = string => dispatch(setClassNameGrow(string));
  const saveClassNameRight = string => dispatch(setClassNameRight(string));

  return (
    <PreviousCard
      index={index}
      prevIndex={prevIndex}
      question={questions[index]}
      answer={answers[index]}
      notSaved={notSaved}
      modalActive={modalActive}
      saveModalActive={saveModalActive}
      savePrevIndex={savePrevIndex}
      classNameLeft={classNameLeft}
      saveClassNameLeft={saveClassNameLeft}
      classNameShrink={classNameShrinkRight}
      saveClassNameShrink={saveClassNameShrinkRight}
      saveClassNameS={saveClassNameShrink}
      saveClassNameGrow={saveClassNameGrow}
      saveClassNameRight={saveClassNameRight}
    />
  );
};

export default PreviousCardContainer;
