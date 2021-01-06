import { React, useState, useEffect } from 'react';
import AniEmpty from '../../assets/icons/AniEmpty.svg';
import AniBall from '../../assets/icons/AniBall.svg';
import TextBox from '../../assets/icons/TextBox.svg';
import Styled from 'styled-components';

const ProgressWrap = Styled.div`
  .progress {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 90px;
    bottom: 40px;
    align-items: flex-end;

    &--text {
      width: 214px;
      height: 40px;
      margin-right: 32px;
      margin-bottom: 40px;

      &__box {
        z-index: 1;
        animation-name: appearing;
        animation-duration: 2s;
      }
      &__text {
        z-index: 2;
        font-size: 14px;
        text-align: center;
        margin-right: 18px;
        position: relative;
        top: -32px;
        animation-name: appearing;
        animation-duration: 2s;
      }
    }

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
        animation-name: emphasis;
        animation-duration: 1s;
      }
    }
  }
  .falling {
    animation-name: falling;
    animation-duration: 0.3s;
    animation-timing-function: ease-in;
  }

  .bouncing {
    animation-name: bouncing;
    animation-duration: 0.3s;
    animation-timing-function: ease-in;
    animation-delay: 0.3s;
  }

  @keyframes falling {
    from {
      top: -50px;
    } to {
      top: 0px;
    }
  }
  @keyframes bouncing {
    0% {
      bottom: 0px;
      transform-origin: 100%;
      transform: rotate(360deg);
    }
    30% {
      bottom: -15px;
      transform-origin: 100%;
      transform: rotate(345deg);
    }
    100% {
      bottom: 0px;
      transform-origin: 100%;
      transform: rotate(360deg);
    }
  }
  @keyframes emphasis {
    50% {
      font-size: 150%;
      font-weight: bold;
    }
  }
  @keyframes appearing {
    0% {
      transform: scaleX(0) scaleY(0);
    }
    90% {
      transform: scaleX(0) scaleY(0) translateX(100%);
    }
    100% {
      transform: scaleX(1) scaleY(1) translateX(0%);
    }
  }
`;

const Progress = ({ answers }) => {
  const textList = {
    2: '경험을 한 스쿱씩 꺼내보자!',
    4: '이번 스쿱은 무슨 맛일까?',
    7: '한 스쿱만 더 푸자~!',
    10: '고생했어, 넌 최고야~!',
  };

  const [index, setIndex] = useState(0);
  const [startAni, setStartAni] = useState(false);
  const percent = index * 10 + '%';

  useEffect(() => {
    let userIndex = index;
    while (answers[userIndex] !== '' && userIndex < 10) {
      userIndex++;
    }
    setIndex(userIndex);
    index in textList ? setStartAni(true) : setStartAni(false);
  });

  return (
    <ProgressWrap>
      <div className="progress">
        <div className="progress--text">
          {textList[index] && (
            <img className="progress--text__box" src={TextBox} alt="" />
          )}
          {textList[index] && (
            <p className="progress--text__text">{textList[index]}</p>
          )}
        </div>
        {startAni && (
          <div className="progress--animation bouncing">
            {index === 10 && (
              <img
                className="progress--animation__fourth falling"
                src={AniBall}
                alt=""
              />
            )}
            {index === 7 && (
              <img
                className="progress--animation__third falling"
                src={AniBall}
                alt=""
              />
            )}
            {index > 7 && (
              <img
                className="progress--animation__third"
                src={AniBall}
                alt=""
              />
            )}
            {index === 4 && (
              <img
                className="progress--animation__second falling"
                src={AniBall}
                alt=""
              />
            )}
            {index > 4 && (
              <img
                className="progress--animation__second"
                src={AniBall}
                alt=""
              />
            )}
            {index === 2 && (
              <img
                className="progress--animation__first falling"
                src={AniBall}
                alt=""
              />
            )}
            {index > 2 && (
              <img
                className="progress--animation__first"
                src={AniBall}
                alt=""
              />
            )}
            <img className="progress--animation__empty" src={AniEmpty} alt="" />
            <p>{percent}</p>
          </div>
        )}
        {startAni || (
          <div className="progress--animation">
            {index === 10 && (
              <img
                className="progress--animation__fourth"
                src={AniBall}
                alt=""
              />
            )}
            {index >= 7 && (
              <img
                className="progress--animation__third"
                src={AniBall}
                alt=""
              />
            )}
            {index >= 4 && (
              <img
                className="progress--animation__second"
                src={AniBall}
                alt=""
              />
            )}
            {index >= 2 && (
              <img
                className="progress--animation__first"
                src={AniBall}
                alt=""
              />
            )}
            <img className="progress--animation__empty" src={AniEmpty} alt="" />
            <p>{percent}</p>
          </div>
        )}
      </div>
    </ProgressWrap>
  );
};

export default Progress;
