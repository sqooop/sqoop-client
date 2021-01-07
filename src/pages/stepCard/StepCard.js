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
        '활동을 하게 된 이유는 무엇인가요?',
        '활동을 시작할 당시의 목표는 무엇이었나요?',
        '활동을 하며, 당신이 맡은 주요 역할과 그에 따른 과제는 무엇이었나요?',
        '가장 힘들었던 문제 상황은 무엇이었나요? 구체적으로 어떤 상황이었나요?',
        '문제 상황을 해결했던 과정을 순서대로 떠올려 볼까요?',
        '보다 효과적으로 수행하기 위해 어떤 노력을 했나요?',
        '해당 방법을 선택한 이유는 무엇인가요?',
        '이 활동에서 가장 크게 성취한 것은 무엇인가요?',
        '반면, 가장 아쉬운 것은 무엇인가요?',
        '활동을 통해 배운 점은 무엇인가요? 나의 관심 분야·직무에서 어떻게 도움이 될까요?',
        '???',
      ],
      a: {
        0: '안녕하세용',
        1: '스쿱입니다',
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
