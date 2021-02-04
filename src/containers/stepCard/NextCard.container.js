import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NextCard from '../../components/stepCard/NextCard';
import {
  setClassNameShrink,
  setClassNameRight,
} from '../../store/modules/currentCard';

const NextCardContainer = ({ index, zindex }) => {
  const questions = useSelector(state => state.userCardInfo.questions);
  const prevIndex = useSelector(state => state.cardIndex.previousIndex);
  const classNameShrink = useSelector(
    state => state.currentCard.classNameShrink,
  );
  const classNameRight = useSelector(state => state.currentCard.classNameRight);

  const dispatch = useDispatch();
  const saveClassNameShrink = string => dispatch(setClassNameShrink(string));
  const saveClassNameRight = string => dispatch(setClassNameRight(string));

  return (
    <NextCard
      questions={questions}
      index={index}
      zindex={zindex}
      prevIndex={prevIndex}
      classNameShrink={classNameShrink}
      classNameRight={classNameRight}
      saveClassNameShrink={saveClassNameShrink}
      saveClassNameRight={saveClassNameRight}
    />
  );
};

export default NextCardContainer;
