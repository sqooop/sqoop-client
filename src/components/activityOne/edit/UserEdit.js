import React from 'react';
import styled from 'styled-components';

const ActivityOneUserData = props => {
  const { text, onChangeInputs, question } = props;

  return (
    <StyledUserData className="UserData">
      <>
        <StyledQuestionData>{question}</StyledQuestionData>
        <StyledAnswerData
          className="AnswerData"
          value={text}
          onChange={onChangeInputs}
        />
      </>
    </StyledUserData>
  );
};

const StyledUserData = styled.div`
  display: block;
  width: 41.6vw;
  height: 39.1vw;
  overflow-y: scroll;
  margin-top: 1.6vw;

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
  margin-left: 1.9vw;
  font-size: 1vw;
  font-weight: 700 !important;
  line-height: 150%;
`;

const StyledAnswerData = styled.textarea`
  width: 39.1vw;
  margin-bottom: 2.7vw;
  margin-left: 2.5vw;
  font-size: 0.8vw;
  font-weight: 400 !important;
  line-height: 150%;
  border: none;
  outline: none;
  height: 'scrollheight';

  :hover {
    background-color: #eeeeee;
  }
`;

export default ActivityOneUserData;
