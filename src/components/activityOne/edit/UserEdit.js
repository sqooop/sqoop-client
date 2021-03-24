import React from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

const ActivityOneUserData = props => {
  const { text, onChange, question, index } = props;

  return (
    <StyledUserData className="UserData">
      <>
        <StyledQuestionData>
          {index}. {question}
        </StyledQuestionData>
        <StyledAnswerData>
          <TextareaAutosize
            className="AnswerData"
            value={text}
            onChange={onChange}
          />
        </StyledAnswerData>
      </>
    </StyledUserData>
  );
};

const StyledUserData = styled.div`
  width: 43.3vw;
`;

const StyledQuestionData = styled.div`
  margin-bottom: 0.9vw;
  font-size: 1vw;
  font-weight: 700 !important;
  line-height: 150%;
`;

const StyledAnswerData = styled.div`
  .AnswerData {
    width: 43.3vw;
    padding-left: 8px;
    font-size: 0.8vw;
    font-weight: 400 !important;
    line-height: 150%;
    border: none;
    outline: none;
    resize: none;
    margin-bottom: 2.5vw;

    :hover {
      background-color: #eeeeee;
    }
  }
`;

export default ActivityOneUserData;
