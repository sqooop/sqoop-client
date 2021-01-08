import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PreviousCard from '../../components/stepCard/PreviousCard';
import { setModalActive } from '../../store/modules/currentCard';

const PreviousCardContainer = ({ index }) => {
  const userCardInfo = useSelector(state => state.userCardInfo);
  const { questions, answers } = userCardInfo;
  const notSaved = useSelector(state => state.currentCard.notSaved);
  const modalActive = useSelector(state => state.currentCard.modalActive);

  const dispatch = useDispatch();
  const saveModalActive = data => dispatch(setModalActive(data));

  return (
    <PreviousCard
      index={index}
      question={questions[index]}
      answer={answers[index]}
      notSaved={notSaved}
      modalActive={modalActive}
      saveModalActive={saveModalActive}
    />
  );
};

export default PreviousCardContainer;
