// 리덕스 적용완료
import React from 'react';
import LockedIcon from '../../assets/icons/LockedIcon.svg';
import Styled from 'styled-components';

const NextCardWrap = Styled.div`
  .card {
    box-sizing: border-box;
    width: 266px;
    height: 355px;
    margin-left: 12px;
    border: 1px solid #A5A5A5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    &--question {
      margin: 12px;
      font-size: 13px;
      font-weight: bold;
      color: #A5A5A5;
      word-break: keep-all;
      line-height: 150%;
      &__number {
        font-size: 14px;
      }
      &__long {
        font-size: 12.5px;
      }
    }
    &--empty {
      flex: 1;
    }
    &--locked {
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
      &__icon {
        margin-right: 4px;
      }
    }
  }
`;

const NextCard = ({ questions, index }) => {
  return (
    <NextCardWrap>
      <div className="card">
        <div className="card--question">
          <span className="card--question__number">
            sqoop {index + 1}.<br />
          </span>
          {(index === 3 || index === 9) && (
            <span className="card--question__long">{questions[index]}</span>
          )}
          {index === 3 || index === 9 || (
            <span className="card--question__short">{questions[index]}</span>
          )}
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
