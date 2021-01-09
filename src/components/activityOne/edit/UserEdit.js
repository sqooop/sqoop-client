import React from 'react';
import styled from 'styled-components';

const ActivityOneUserData = props => {
  const { text, onChangeInputs } = props;

  const UserData = [
    {
      index: 0,
      title: '1. 활동 목표는?',
    },
    {
      index: 1,
      title: '2. 활동 목표는?',
    },
    {
      index: 2,
      title: '3. 활동 목표는?',
    },
    {
      index: 3,
      title: '4. 활동 목표는?',
    },
    {
      index: 4,
      title: '5. 활동 목표는?',
    },
    {
      index: 5,
      title: '6. 활동 목표는?',
    },
    {
      index: 6,
      title: '7. 활동 목표는?',
    },
    {
      index: 7,
      title: '8. 활동 목표는?',
    },
    {
      index: 8,
      title: '9. 활동 목표는?',
    },
    {
      index: 9,
      title: '10. 활동 목표는?',
    },
  ];

  return (
    <StyledUserData className="UserData">
      {UserData.map((data, index) => (
        <>
          <StyledQuestionData key={index - 1}>{data.title}</StyledQuestionData>
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
