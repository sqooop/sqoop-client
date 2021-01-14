// 리덕스 적용완료
import { React, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
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

  .rightToLeft {
    animation-name: right;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
  }

  .shrinkLeft {
    animation-name: shrinkLeft;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
  }

  .leftToRight {
    animation-name: left;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
  }
  
  @keyframes right {
    from {
      transform: translateX(278px);
    } to {
      transform: translateX(0px);
    }
  }

  @keyframes left {
    from {
      transform: translateX(-278px);
    } to {
      transform: translateX(0px);
    }
  }

  @keyframes shrinkLeft {
    from {
      transform: translateX(-278px) scaleX(1.346) scaleY(1.397);
      transform-origin: top;
    } to {
      transform: translateX(0px) scaleX(1) scaleY(1);
      transform-origin: top;
    }
  }
`;

const NextCard = ({
  questions,
  index,
  prevIndex,
  className,
  saveClassName,
  match,
}) => {
  const currentIndex = parseInt(match.params.id);

  useEffect(() => {
    if (currentIndex > prevIndex) {
      saveClassName('card rightToLeft');
    } else if (currentIndex < prevIndex) {
      saveClassName('card leftToRight');
    } else {
      saveClassName('card');
    }
  }, [index]);

  return (
    <NextCardWrap>
      <div className={className}>
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

export default withRouter(NextCard);
