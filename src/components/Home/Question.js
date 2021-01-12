import React from 'react';
import styled from 'styled-components';

const QuestionBlock = styled.div`
  width: 420px;
  height: 24px;
  display: flex;
  margin: 27px 88px;
  justify-content: space-between;
  font-size: 16px;
  animation-name: coming-up;
  animation-duration: 1.5s;
  animation-delay: 1s;
  animation-fill-mode: backwards;

  @keyframes coming-up {
    from {
      transform: translateY(50%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Question = () => {
  const questionList = [
    '2019년 여름 방학에는 무슨 활동을 했나요?',
    '저번 학기 가장 인상 깊었던 수업을 떠올려보아요!',
    '휴학 당시에는 무슨 활동을 했나요?',
    '기억에 남는 교내 동아리 활동이 있나요?',
    '대외활동에서 어떤 점이 가장 기억에 남나요?',
    '수업에서 한 팀 프로젝트도 의미있는 경험이 될 수 있어요!',
    '수상하지 못한 공모전도 의미있는 소재가 될 수 있어요!',
  ];
  const random = Math.floor(Math.random() * questionList.length);
  const question = questionList[random];

  return (
    <>
      <QuestionBlock>{question}</QuestionBlock>
    </>
  );
};

export default Question;
