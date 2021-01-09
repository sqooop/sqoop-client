import React from 'react';
import { useSelector } from 'react-redux';
import NextCard from '../../components/stepCard/NextCard';

const NextCardContainer = ({ index }) => {
  const questions = useSelector(state => state.userCardInfo.questions);

  return <NextCard questions={questions} index={index} />;
};

export default NextCardContainer;
