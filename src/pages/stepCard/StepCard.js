import React from 'react';
import { withRouter } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setTitle,
  setQuestion,
  setAnswer,
  setGuide,
  setID,
} from '../../store/modules/userCardInfo';
import { setCurrentIndex } from '../../store/modules/cardIndex';
import { getActivityName, getCardInfo } from '../../lib/api/stepCard';
import StepHeaderContainer from '../../containers/stepCard/StepHeader.container';
import CurrentCardContainer from '../../containers/stepCard/CurrentCard.container';
import NextCardContainer from '../../containers/stepCard/NextCard.container';
import PreviousCardContainer from '../../containers/stepCard/PreviousCard.container';
import ProgressContainer from '../../containers/stepCard/Progress.container';
import EmptyCard from '../../components/stepCard/EmptyCard';
import LastCardContainer from '../../containers/stepCard/LastCard.container';
import Styled from 'styled-components';
import MainHeader from '../../components/common/MainHeader';

const CardWrap = Styled.div`
  display: flex;
  flex-direction: row;
  width: 1470px;
  margin: 0 auto;
  justify-content: center;
`;

const StepCard = ({ match }) => {
  const dispatch = useDispatch();
  const saveCurrentIndex = idx => dispatch(setCurrentIndex(idx));
  const saveTitle = string => dispatch(setTitle(string));
  const saveQuestion = (string, idx) => dispatch(setQuestion(string, idx));
  const saveAnswer = (string, idx) => dispatch(setAnswer(string, idx));
  const saveGuide = (string, idx) => dispatch(setGuide(string, idx));
  const saveID = number => dispatch(setID(number));

  let id = useSelector(state => state.userCardInfo.id);
  if (id === 0) {
    const jsonID = localStorage.getItem('activityID');
    id = JSON.parse(jsonID);
    saveID(id);
  }

  const index = parseInt(match.params.id);

  useEffect(() => {
    saveCurrentIndex(index);
  }, [index]);

  useEffect(() => {
    (async () => {
      const data = await getActivityName(id);
      saveTitle(data);
    })();
    (async () => {
      const data = await getCardInfo(id);
      data.questions.map((card, index) => {
        saveQuestion(card.content, index);
        saveGuide(card.guide, index);
        return 0;
      });
      data.questionCards &&
        data.questionCards.map(card => {
          saveAnswer(card.content, card.number - 1);
          return 0;
        });
    })();
  }, [match.path]);

  const questions = useSelector(state => state.userCardInfo.questions);
  const currentIndex = useSelector(state => state.cardIndex.currentIndex);

  return (
    <>
      <MainHeader />
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
        {currentIndex < 10 ? <CurrentCardContainer /> : <LastCardContainer />}
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
