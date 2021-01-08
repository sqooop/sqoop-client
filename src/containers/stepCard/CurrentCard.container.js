import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAnswer } from '../../store/modules/userCardInfo';
import {
  setTextValue,
  setSaved,
  setNotSaved,
} from '../../store/modules/currentCard';
import CurrentCard from '../../components/stepCard/CurrentCard';

const CurrentCardContainer = () => {
  const userCardInfo = useSelector(state => state.userCardInfo);
  const { questions, answers } = userCardInfo;
  const currentIndex = useSelector(state => state.cardIndex.currentIndex);
  const currentCard = useSelector(state => state.currentCard);
  const { saved, notSaved, textValue } = currentCard;

  const dispatch = useDispatch();
  const saveAnswer = (answer, idx) => dispatch(setAnswer(answer, idx));
  const saveTextValue = text => dispatch(setTextValue(text));
  const saveSaved = data => dispatch(setSaved(data));
  const saveNotSaved = data => dispatch(setNotSaved(data));

  return (
    <CurrentCard
      index={currentIndex}
      question={questions[currentIndex]}
      answer={answers[currentIndex]}
      saveAnswer={saveAnswer}
      textValue={textValue}
      saveTextValue={saveTextValue}
      saved={saved}
      saveSaved={saveSaved}
      notSaved={notSaved}
      saveNotSaved={saveNotSaved}
    />
  );
};

export default CurrentCardContainer;
