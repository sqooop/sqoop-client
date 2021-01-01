import React from 'react';
import ModifyIconOff from '../../assets/icons/ModifyIconOff.svg';
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
      height: 186px;
      margin: 12px 16px;
      font-size: 12px;
      color: #A5A5A5;
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

const PreviousCard = ({ questions, answers, index }) => {
  const hovered = event => {
    console.log(event.target);
  };

  const unhovered = event => {
    console.log(event.target);
  };

  return (
    <PreviousCardWrap>
      <div className="card" onMouseEnter={hovered} onMouseLeave={unhovered}>
        <div className="card--question">
          sqoop {index + 1}.<br />
          {questions[index]}
        </div>
        <hr className="card--hr" />
        <div className="card--text">{answers[index]}</div>
        <div className="card--modify">
          <img className="card--modify__icon" src={ModifyIconOff} alt="" />
          스쿱 수정
        </div>
      </div>
    </PreviousCardWrap>
  );
};

export default PreviousCard;
