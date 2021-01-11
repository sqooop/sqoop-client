import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ActivityOneUserData = props => {
  const { text, onChangeInputs } = props;
  const state = useSelector(state => state.userCardInfo.questions);

  console.log([state].1);

  return (
    <StyledUserData className="UserData">
      {state.map((data, index) => (
        <>
          <StyledQuestionData key={index - 1}>{data.index}</StyledQuestionData>
          <StyledAnswerData
            className="AnswerData"
            key={index}
            value={text}
            onChange={onChangeInputs}
          />
        </>
      ))}
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

const StyledAnswerData = styled.input`
  width: 39.1vw;
  height: auto;
  margin-bottom: 2.7vw;
  margin-left: 2.5vw;
  font-size: 0.8vw;
  font-weight: 400 !important;
  line-height: 150%;
  border: none;
  outline: none;

  :hover {
    background-color: #eeeeee;
  }
`;

export default ActivityOneUserData;
