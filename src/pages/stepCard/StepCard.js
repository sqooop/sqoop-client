import React from 'react';
import StepHeader from '../../components/stepCard/StepHeader';
import CurrentCard from '../../components/stepCard/CurrentCard';
import NextCard from '../../components/stepCard/NextCard';
import PreviousCard from '../../components/stepCard/PreviousCard';
import EmptyCard from '../../components/stepCard/EmptyCard';
import LastCard from '../../components/stepCard/LastCard';
import Progress from '../../components/stepCard/Progress';
import { withRouter } from 'react-router-dom';
import { useState } from 'react';
import Styled from 'styled-components';

const CardWrap = Styled.div`
  display: flex;
  flex-direction: row;
  width: 1470px;
  margin: 0 auto;
  justify-content: center;
`;

const StepCard = ({ match }) => {
  const index = parseInt(match.params.id);

  // 나중에 서버에서 데이터 받아오기
  const userData = {
    title: '라오스 봉사 활동',
    sqoops: {
      q: [
        '활동을 시작할 당시의 시기는 어땠나요?',
        '활동을 시작할 당시의 상황은 어땠나요?',
        '어떤 활동을 어떻게 했나요?',
        '네 번째 활동을 시작할 당시의 상황은 어땠나요?',
        '다섯 번째 활동을 시작할 당시의 상황은 어땠나요?',
        '여섯 번째 활동을 시작할 당시의 상황은 어땠나요?',
        '일곱 번째 활동을 시작할 당시의 상황은 어땠나요?',
        '여덟 번째 활동을 시작할 당시의 상황은 어땠나요?',
        '아홉 번째 활동을 시작할 당시의 상황은 어땠나요?',
        '열 번째 활동을 시작할 당시의 상황은 어땠나요?',
        '???',
      ],
      a: {
        0: '안녕하세용',
        1: 'ㅎㅇ',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',
      },
    },
  };

  const [answers, setAnswers] = useState(userData.sqoops.a);
  const questions = userData.sqoops.q;

  return (
    <>
      <StepHeader title={userData.title} answers={answers} />
      <CardWrap>
        {questions[index - 2] ? (
          <PreviousCard
            questions={questions}
            answers={answers}
            index={index - 2}
          />
        ) : (
          <EmptyCard marginRight={'12px'} />
        )}
        {questions[index - 1] ? (
          <PreviousCard
            questions={questions}
            answers={answers}
            index={index - 1}
          />
        ) : (
          <EmptyCard marginRight={'12px'} />
        )}
        {index < 10 ? (
          <CurrentCard
            questions={questions}
            answers={answers}
            setAnswers={setAnswers}
          />
        ) : (
          <LastCard />
        )}
        {questions[index + 1] ? (
          <NextCard questions={questions} index={index + 1} />
        ) : (
          <EmptyCard marginLeft={'12px'} />
        )}
        {questions[index + 2] ? (
          <NextCard questions={questions} index={index + 2} />
        ) : (
          <EmptyCard marginLeft={'12px'} />
        )}
      </CardWrap>
      <Progress answers={answers} />
    </>
  );
};

export default withRouter(StepCard);
