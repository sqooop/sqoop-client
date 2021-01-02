import { React, useState, useEffect } from 'react';
import AniEmpty from '../../assets/icons/AniEmpty.svg';
import AniBall from '../../assets/icons/AniBall.svg';
import Styled from 'styled-components';

const ProgressWrap = Styled.div`
  .progress {
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 90px;
    bottom: 40px;
    &--animation {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &__empty {
        z-index: 2;
        margin-bottom: 4px;
      }
      &__first {
        z-index: 1;
        position: relative;
        margin-right: 15px;
        top: 7px;
      }
      &__second {
        z-index: 3;
        position: relative;
        margin-right: 15px;
        top: 15px;
      }
      &__third {
        z-index: 4;
        position: relative;
        margin-right: 15px;
        top: 23px;
      }
      &__fourth {
        z-index: 5;
        position: relative;
        margin-right: 15px;
        top: 31px;
      }
      & > p {
        font-size: 15px;
        margin-right: 14px;
      }
    }
  }
`;

const Progress = ({ answers }) => {
  const [index, setIndex] = useState(0);
  const percent = index * 10 + '%';

  useEffect(() => {
    let userIndex = index;
    while (answers[userIndex] !== '' && userIndex < 9) {
      userIndex++;
    }
    setIndex(userIndex);
  });

  return (
    <ProgressWrap>
      <div className="progress">
        <div className="progress--text"></div>
        <div className="progress--animation">
          {index === 10 && (
            <img className="progress--animation__fourth" src={AniBall} alt="" />
          )}
          {index >= 7 && (
            <img className="progress--animation__third" src={AniBall} alt="" />
          )}
          {index >= 4 && (
            <img className="progress--animation__second" src={AniBall} alt="" />
          )}
          {index >= 2 && (
            <img className="progress--animation__first" src={AniBall} alt="" />
          )}
          <img className="progress--animation__empty" src={AniEmpty} alt="" />
          <p>{percent}</p>
        </div>
      </div>
    </ProgressWrap>
  );
};

export default Progress;
