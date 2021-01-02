import React from 'react';
import SaveButton from './SaveButton';
import Styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SaveIconOn from '../../assets/icons/SaveIconOn.svg';
import SaveIconOnHover from '../../assets/icons/SaveIconOnHover.svg';
import SaveConfirm from './SaveConfirm';

const CurrentCardWrap = Styled.div`
  .card {
    box-sizing: border-box;
    width: 358px;
    height: 496px;
    border: 1px solid black;

    &--question {
      font-size: 22px;
      height: 112px;
      font-weight: bold;
      line-height: 170%;
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
      height: 277px;
      box-sizing: border-box;
      border: none;
      word-break: normal;
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

const CurrentCard = ({ questions, answers, setAnswers, match, history }) => {
  const index = parseInt(match.params.id);

  const [textValue, setTextValue] = useState(answers[index]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setTextValue(answers[index]);
  }, [answers, index]);

  const onChangeFunc = event => {
    setTextValue(event.target.value);
  };

  const onClickFunc = event => {
    setAnswers({ ...answers, [index]: textValue });
    console.log('저장되었습니다');
    setSaved(true);
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
      cursor: default;
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
            text={'스쿱 저장'}
          />
        ) : (
          <SaveButton
            backgroundColor="#A5A5A5"
            color="white"
            border="none"
            text={'스쿱 저장'}
          />
        )}
        {saved && <SaveConfirm setSaved={setSaved} />}
      </div>
    </CurrentCardWrap>
  );
};

export default withRouter(CurrentCard);
