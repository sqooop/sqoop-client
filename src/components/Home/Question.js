import React from 'react';
import styled from 'styled-components';

const QuestionBlock = styled.div`
  width: 400px;
  height: 30px;
  display: flex;
  margin: 27px 88px;
  justify-content: space-between;
  font-size: 16px;
`;

const Question = ({ question }) => {
  return (
    <>
      <QuestionBlock>{question}</QuestionBlock>
    </>
  );
};

Question.defaultProps = {
  question: '2017 여름에는 무슨 활동을 하셨나요?',
};

export default Question;
