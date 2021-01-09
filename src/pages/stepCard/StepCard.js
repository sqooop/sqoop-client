import React from 'react';
import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentIndex } from '../../store/modules/cardIndex';
import StepHeaderContainer from '../../containers/stepCard/StepHeader.container';
import CurrentCardContainer from '../../containers/stepCard/CurrentCard.container';
import NextCardContainer from '../../containers/stepCard/NextCard.container';
import PreviousCardContainer from '../../containers/stepCard/PreviousCard.container';
import ProgressContainer from '../../containers/stepCard/Progress.container';
import EmptyCard from '../../components/stepCard/EmptyCard';
import LastCard from '../../components/stepCard/LastCard';
import Styled from 'styled-components';

const CardWrap = Styled.div`
  display: flex;
  flex-direction: row;
  width: 1470px;
  margin: 0 auto;
  justify-content: center;
`;

const StepCard = ({ match }) => {
  const questions = useSelector(state => state.userCardInfo.questions);
  const currentIndex = useSelector(state => state.cardIndex.currentIndex);

  const dispatch = useDispatch();
  const saveCurrentIndex = idx => dispatch(setCurrentIndex(idx));

  useEffect(() => {
    const index = parseInt(match.params.id);
    saveCurrentIndex(index);
  });

  return (
    <>
      <StepHeaderContainer />
      <CardWrap>
        {questions[currentIndex - 2] ? (
          <PreviousCardContainer index={currentIndex - 2} />
        ) : (
          <EmptyCard marginRight={'12px'} />
        )}
        {questions[currentIndex - 1] ? (
          <PreviousCardContainer index={currentIndex - 1} />
        ) : (
          <EmptyCard marginRight={'12px'} />
        )}
        {currentIndex < 10 ? <CurrentCardContainer /> : <LastCard />}
        {questions[currentIndex + 1] ? (
          <NextCardContainer index={currentIndex + 1} />
        ) : (
          <EmptyCard marginLeft={'12px'} />
        )}
        {questions[currentIndex + 2] ? (
          <NextCardContainer index={currentIndex + 2} />
        ) : (
          <EmptyCard marginLeft={'12px'} />
        )}
      </CardWrap>
      <ProgressContainer />
    </>
  );
};

export default withRouter(StepCard);
