import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NextCard from '../../components/stepCard/NextCard';
import { setClassName } from '../../store/modules/currentCard';

const NextCardContainer = ({ index }) => {
  const questions = useSelector(state => state.userCardInfo.questions);
  const prevIndex = useSelector(state => state.cardIndex.previousIndex);
  const className = useSelector(state => state.currentCard.className);

  const dispatch = useDispatch();
  const saveClassName = string => dispatch(setClassName(string));

  return (
    <NextCard
      questions={questions}
      index={index}
      prevIndex={prevIndex}
      className={className}
      saveClassName={saveClassName}
    />
  );
};

export default NextCardContainer;
