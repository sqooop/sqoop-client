import React from 'react';
import SaveButton from './SaveButton';
import Styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useState } from 'react';
import SaveIconOn from '../../assets/icons/SaveIconOn.svg';
import SaveIconOnHover from '../../assets/icons/SaveIconOnHover.svg';

const CurrentCardWrap = Styled.div`
  .card {
    box-sizing: border-box;
    width: 358px;
    height: 496px;
    border: 1px solid black;

    &--question {
      font-size: 24px;
      font-weight: bold;
      line-height: 160%;
      word-break: keep-all;
      margin: 12px 16px;
      &__number {
        font-weight: bold;
        color: #195BFF;
      }
    }

    &--hr {
      margin: 0 auto;
      width: 326px;
      border: none;
      border-top: 1px solid #A5A5A5;
    }

    &--text {
      margin: 12px 16px;
      width: 326px;
      height: 273px;
      box-sizing: border-box;
      border: none;
      word-break: keep-all;
      font-size: 12px;
      line-height: 170%;
      resize: none;
    }
  }

  textarea:focus {
    outline: none;
  }
  textarea::placeholder {
    color: #A5A5A5;
  }
`;

const CurrentCard = ({ questions, answers, match, history }) => {
  const index = parseInt(match.params.id);

  const [textValue, setTextValue] = useState(answers[index]);

  const onChangeFunc = event => {
    setTextValue(event.target.value);
  };

  const onClickFunc = event => {
    console.log('저장되었습니다');
    history.push(`/steps/${index + 1}`);
    setTextValue(answers[index + 1]);
  };

  const hovered = event => {
    const image = event.target.querySelector('img');
    image && (image.src = SaveIconOnHover);
    event.target.style.cssText = `
      border: 1px solid #195BFF; 
      background-color: white; 
      color: #195BFF;
      cursor: pointer;
    `;
  };

  const unhovered = event => {
    const image = event.target.querySelector('img');
    image && (image.src = SaveIconOn);
    event.target.style.cssText = `
      border: none;
      background-color: #195BFF;
      color: white;
      cursor: normal;
    `;
  };

  return (
    <CurrentCardWrap>
      <div className="card">
        <div className="card--question">
          <span className="card--question__number">
            sqoop {index + 1}.<br />
          </span>
          {questions[index]}
        </div>
        <hr className="card--hr" />
        <textarea
          className="card--text"
          placeholder="답변을 작성해 주세요."
          value={textValue}
          onChange={onChangeFunc}
        />
        {textValue ? (
          <SaveButton
            backgroundColor="#195BFF"
            onClick={onClickFunc}
            onMouseEnter={hovered}
            onMouseLeave={unhovered}
          />
        ) : (
          <SaveButton backgroundColor="#A5A5A5" color="white" border="none" />
        )}
      </div>
    </CurrentCardWrap>
  );
};

export default withRouter(CurrentCard);
