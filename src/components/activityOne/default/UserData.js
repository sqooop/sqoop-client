import React from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

const UserData = props => {
  const { answer, question, index } = props;

  return (
    <StyledUserData className="UserData">
      <>
        <StyledQuestionData>
          {index}. {question}
        </StyledQuestionData>
        <StyledAnswerData>
          <TextareaAutosize className="AnswerData" value={answer} />
        </StyledAnswerData>
      </>
    </StyledUserData>
  );
};

const StyledUserData = styled.div`
  display: block !important;
  width: 41.6vw;

  ::-webkit-scrollbar {
    width: 0px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: white;
  }

  ::-webkit-scrollbar-track {
    background-color: white;
  }
`;

const StyledQuestionData = styled.div`
  margin-bottom: 0.9vw;
  font-size: 1vw;
  font-weight: 700 !important;
  line-height: 150%;
`;

const StyledAnswerData = styled.div`
  .AnswerData {
    width: 39.1vw;
    margin-left: 8px;
    font-size: 0.8vw;
    font-weight: 400 !important;
    line-height: 150%;
    border: none;
    outline: none;
    resize: none;
    margin-bottom: 2.5vw;
  }
`;

export default UserData;
