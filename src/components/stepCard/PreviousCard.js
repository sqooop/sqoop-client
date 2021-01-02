import React from 'react';
import ModifyIconOff from '../../assets/icons/ModifyIconOff.svg';
import ModifyIconOn from '../../assets/icons/ModifyIconOn.svg';
import { withRouter } from 'react-router-dom';
import Styled from 'styled-components';

const PreviousCardWrap = Styled.div`
  .card {
    box-sizing: border-box;
    width: 266px;
    height: 355px;
    margin-right: 12px;
    border: 1px solid #A5A5A5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;

    &--question {
      margin: 12px 16px;
      font-size: 16px;
      font-weight: bold;
      color: #A5A5A5;
      word-break: keep-all;
      line-height: 170%;
    }

    &--hr {
      margin: 0 auto;
      width: 234px;
      border: none;
      border-top: 1px solid #A5A5A5;
    }

    &--text {
      width: 234px;
      height: 180px;
      padding-bottom: 6px;
      margin: 12px 16px;
      font-size: 12px;
      color: #A5A5A5;
      line-height: 150%;
      overflow: hidden;
	    text-overflow: ellipsis;
	    word-wrap: break-word;
	    display: -webkit-box;
	    -webkit-line-clamp: 10;
	    -webkit-box-orient: vertical;
    }

    &--modify {
      box-sizing: border-box;
      width: 124px;
      height: 40px;
      margin-left: 142px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: #A5A5A5;
      font-size: 16px;
    }
  }
`;

const PreviousCard = ({ questions, answers, index, history }) => {
  const hovered = event => {
    let card = event.target;
    while (card.className !== 'card') {
      card = card.parentNode;
    }

    if (card.className === 'card') {
      const question = card.querySelector('.card--question');
      const text = card.querySelector('.card--text');
      const modify = card.querySelector('.card--modify');
      const icon = card.querySelector('.card--modify__icon');

      event.target.style.cursor = 'pointer';
      card && (card.style.border = '1px solid black');
      question && (question.style.color = 'black');
      text && (text.style.color = 'black');
      modify && (modify.style.color = '#195BFF');
      icon && (icon.src = ModifyIconOn);
    }
  };

  const unhovered = event => {
    let card = event.target;
    while (card.className !== 'card') {
      card = card.parentNode;
    }

    if (card.className === 'card') {
      const question = card.querySelector('.card--question');
      const text = card.querySelector('.card--text');
      const modify = card.querySelector('.card--modify');
      const icon = card.querySelector('.card--modify__icon');

      event.target.style.cursor = 'default';
      card && (card.style.border = '1px solid #A5A5A5');
      question && (question.style.color = '#A5A5A5');
      text && (text.style.color = '#A5A5A5');
      modify && (modify.style.color = '#A5A5A5');
      icon && (icon.src = ModifyIconOff);
    }
  };

  const onClickFunc = event => {
    let card = event.target;
    while (card.className !== 'card') {
      card = card.parentNode;
    }
    history.push(`/steps/${card.id}`);
  };

  return (
    <PreviousCardWrap>
      <div
        className="card"
        id={index}
        onMouseEnter={hovered}
        onMouseLeave={unhovered}
        onClick={onClickFunc}
      >
        <div
          className="card--question"
          onMouseEnter={hovered}
          onMouseLeave={unhovered}
          onClick={onClickFunc}
        >
          sqoop {index + 1}.<br />
          {questions[index]}
        </div>
        <hr className="card--hr" />
        <div
          className="card--text"
          onMouseEnter={hovered}
          onMouseLeave={unhovered}
          onClick={onClickFunc}
        >
          {answers[index]}
        </div>
        <div
          className="card--modify"
          onMouseEnter={hovered}
          onMouseLeave={unhovered}
          onClick={onClickFunc}
        >
          <img
            className="card--modify__icon"
            src={ModifyIconOff}
            alt=""
            onMouseEnter={hovered}
            onMouseLeave={unhovered}
            onClick={onClickFunc}
          />
          스쿱 수정
        </div>
      </div>
    </PreviousCardWrap>
  );
};

export default withRouter(PreviousCard);
