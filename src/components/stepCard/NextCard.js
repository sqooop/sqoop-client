import React from 'react';
import LockedIcon from '../../assets/icons/LockedIcon.svg';
import Styled from 'styled-components';

const NextCardWrap = Styled.div`
  .card {
    box-sizing: border-box;
    width: 36.9vh;
    height: 49.3vh;
    margin-left: 1.6vh;
    border: 1px solid #A5A5A5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    &--question {
      margin: 1.6vh 2.2vh;
      font-size: 3vh;
      font-weight: bold;
      color: #A5A5A5;
      word-break: keep-all;
      line-height: 170%;
    }
    &--empty {
      flex: 1;
    }
    &--locked {
      box-sizing: border-box;
      width: 17.2vh;
      height: 5.5vh;
      margin-left: 19.7vh;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: #A5A5A5;
      font-size: 2.2vh;
      &__icon {
        margin-right: 0.5vh;
      }
    }
  }
`;

const NextCard = ({ questions, index }) => {
  return (
    <NextCardWrap>
      <div className="card">
        <div className="card--question">
          sqoop {index + 1}.<br />
          {questions[index]}
        </div>
        <div className="card--empty"></div>
        <div className="card--locked">
          <img className="card--locked__icon" src={LockedIcon} alt="" />
          잠긴 스쿱
        </div>
      </div>
    </NextCardWrap>
  );
};

export default NextCard;
