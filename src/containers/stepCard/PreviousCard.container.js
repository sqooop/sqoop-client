import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PreviousCard from '../../components/stepCard/PreviousCard';
import { setModalActive } from '../../store/modules/currentCard';
import { setPrevIndex } from '../../store/modules/cardIndex';
import { setClassName } from '../../store/modules/currentCard';

const PreviousCardContainer = ({ index }) => {
  const userCardInfo = useSelector(state => state.userCardInfo);
  const { questions, answers } = userCardInfo;
  const currentCard = useSelector(state => state.currentCard);
  const { notSaved, modalActive, className } = currentCard;
  const prevIndex = useSelector(state => state.cardIndex.previousIndex);

  const dispatch = useDispatch();
  const saveModalActive = data => dispatch(setModalActive(data));
  const savePrevIndex = idx => dispatch(setPrevIndex(idx));
  const saveClassName = string => dispatch(setClassName(string));

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
      className={className}
      saveClassName={saveClassName}
    />
  );
};

export default PreviousCardContainer;
