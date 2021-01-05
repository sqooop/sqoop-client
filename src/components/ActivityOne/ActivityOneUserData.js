import React from 'react';
import styled from 'styled-components';

const ActivityOneUserData = props => {
  const { text, onChangeInputs } = props;

  const UserData = [
    {
      index: 0,
      title: '1. 활동 목표는?',
      content:
        '어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...',
    },
    {
      index: 1,
      title: '2. 활동 목표는?',
      content:
        '어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...',
    },
    {
      index: 2,
      title: '3. 활동 목표는?',
      content:
        '어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...',
    },
    {
      index: 3,
      title: '4. 활동 목표는?',
      content:
        '어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...',
    },
    {
      index: 4,
      title: '5. 활동 목표는?',
      content:
        '어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...',
    },
    {
      index: 5,
      title: '6. 활동 목표는?',
      content:
        '어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...',
    },
    {
      index: 6,
      title: '7. 활동 목표는?',
      content:
        '어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...',
    },
    {
      index: 7,
      title: '8. 활동 목표는?',
      content:
        '어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...',
    },
    {
      index: 8,
      title: '9. 활동 목표는?',
      content:
        '어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...',
    },
    {
      index: 9,
      title: '10. 활동 목표는?',
      content:
        '어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...어쩌구저쩌구저저구 저쩌구 어쩌구 저쩌구 너무 길면...',
    },
  ];

  function InputResize() {
    let inputSize = document.getElementById('UserData');
    inputSize.style.width = window.innerWidth - 726 + 'px';
  }

  function AnswerResize() {
    let answerSize = document.getElementsByClassName('AnswerData');
    answerSize.style.width = window.innerWidth - 770 + 'px';
  }

  window.onload = function () {
    InputResize();
    AnswerResize();
    window.addEventListener('Inputresize', InputResize);
    window.addEventListener('Answerresize', AnswerResize);
  };

  return (
    <StyledUserData className="UserData">
      {UserData.map((data, index) => (
        <>
          <StyledQuestionData key={index - 1}>{data.title}</StyledQuestionData>
          <StyledAnswerData
            className="AnswerData"
            data={UserData.content}
            placeholder={UserData.content}
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
  height: 50.4rem;
  overflow-y: scroll;
  position: relative;
  width: 100%;

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #195bff;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #dce3fd;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

const StyledQuestionData = styled.div`
  margin-top: 3.2rem;
  margin-left: 2.4rem;
  font-size: 1.4rem;
  font-weight: 700 !important;
  line-height: 2.1rem;
  letter-spacing: 0em;
  text-align: left;
`;

const StyledAnswerData = styled.input`
  height: 5.25rem;
  margin-top: 7px;
  margin-left: 3.2rem;
  font-size: 1.2rem;
  font-weight: 400 !important;
  line-height: 1.8rem;
  letter-spacing: 0em;
  border: none;
  outline: none;

  :hover {
    background-color: #eeeeee;
  }
`;

export default ActivityOneUserData;
