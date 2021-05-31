import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PreviousCard from '../../components/stepCard/PreviousCard';
import { setModalActive } from '../../store/modules/currentCard';
import { setPrevIndex } from '../../store/modules/cardIndex';

const PreviousCardContainer = ({ index }) => {
  const userCardInfo = useSelector(state => state.userCardInfo);
  const { questions, answers } = userCardInfo;
  const currentCard = useSelector(state => state.currentCard);
  const { notSaved, modalActive } = currentCard;
  const prevIndex = useSelector(state => state.cardIndex.previousIndex);

  const dispatch = useDispatch();
  const saveModalActive = data => dispatch(setModalActive(data));
  const savePrevIndex = idx => dispatch(setPrevIndex(idx));

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
    />
  );
};

export default PreviousCardContainer;
