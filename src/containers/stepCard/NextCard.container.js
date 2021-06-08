import React from 'react';
import { useSelector } from 'react-redux';
import NextCard from '../../components/stepCard/NextCard';

const NextCardContainer = ({ index, zindex }) => {
  const questions = useSelector(state => state.userCardInfo.questions);
  const prevIndex = useSelector(state => state.cardIndex.previousIndex);

  return (
    <NextCard
      questions={questions}
      index={parseInt(index)}
      zindex={parseInt(zindex)}
      prevIndex={parseInt(prevIndex)}
    />
  );
};

export default NextCardContainer;
