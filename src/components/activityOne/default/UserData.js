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
  width: 43.3vw;

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
  margin-bottom: 12px;
  font-size: 1vw;
  font-weight: 700 !important;
`;

const StyledAnswerData = styled.div`
  margin-bottom: 35px;

  .AnswerData {
    width: 43.3vw;
    padding-left: 8px;
    font-size: 0.8vw;
    font-weight: 400 !important;
    border: none;
    outline: none;
    resize: none;
  }
`;

export default UserData;
