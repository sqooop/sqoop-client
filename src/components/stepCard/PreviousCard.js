// 리덕스 적용완료
import { React, useEffect } from 'react';
import ModifyIconOff from '../../assets/icons/ModifyIconOff.svg';
import ModifyIconOn from '../../assets/icons/ModifyIconOn.svg';
import { withRouter } from 'react-router-dom';
import SaveModal from './SaveModal';
import Styled from 'styled-components';
import './font.css';

const PreviousCardWrap = Styled.div`
  .card {
    box-sizing: border-box;
    width: 266px;
    height: 355px;
    margin-right: 12px;
    border: 1px solid #A5A5A5;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: white;

    &--question {
      margin: 12px;
      height: 63px;
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

    &--hr {
      margin: 0 auto;
      width: 234px;
      border: none;
      border-top: 1px solid #A5A5A5;
    }

    &--text {
      width: 242px;
      height: 163px;
      box-sizing: border-box;
      margin: 12px;
      margin-bottom: 50px;
      font-size: 12px;
      color: #A5A5A5;
      line-height: 150%;
      overflow: hidden;
      white-space: normal;
	    text-overflow: ellipsis;
	    word-wrap: break-word;
	    display: -webkit-box;
	    -webkit-line-clamp: 9;
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

  .rightToLeft {
    animation-name: right;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
  }

  .shrinkRight {
    animation-name: shrinkRight;
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

  @keyframes shrinkRight {
    from {
      transform: translateX(278px) scaleX(1.346) scaleY(1.397);
      transform-origin: top;
    } to {
      transform: translateX(0px) scaleX(1) scaleY(1);
      transform-origin: top;
    }
  }

  @keyframes left {
    from {
      transform: translateX(-278px);
    } to {
      transform: translateX(0px);
    }
  }
`;

const PreviousCard = ({
  index,
  prevIndex,
  question,
  answer,
  notSaved,
  modalActive,
  saveModalActive,
  savePrevIndex,
  classNameLeft,
  saveClassNameLeft,
  classNameShrink,
  saveClassNameShrink,
  saveClassNameS,
  saveClassNameGrow,
  saveClassNameRight,
  history,
  match,
}) => {
  const currentIndex = parseInt(match.params.id);

  useEffect(() => {
    if (prevIndex < currentIndex && currentIndex - index === 1) {
      saveClassNameShrink('card shrinkRight');
    } else if (prevIndex < currentIndex && currentIndex - index === 2) {
      saveClassNameLeft('card rightToLeft');
    } else {
      saveClassNameShrink('card leftToRight');
      saveClassNameLeft('card leftToRight');
    }
  }, [index]);

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
    if (notSaved) {
      saveModalActive(true);
    } else {
      let card = event.target;
      while (card.className !== 'card') {
        card = card.parentNode;
      }
      savePrevIndex(match.params.id);
      saveClassNameLeft('card');
      saveClassNameShrink('card');
      saveClassNameS('card');
      saveClassNameGrow('card');
      saveClassNameRight('card');
      history.push(`/steps/${card.id}`);
    }
  };

  return (
    <PreviousCardWrap>
      <div
        className={currentIndex - index === 2 ? classNameLeft : classNameShrink}
      >
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
            <span className="card--question__number">
              sqoop {index + 1}.<br />
            </span>
            {(index === 3 || index === 9) && (
              <span className="card--question__long">{question}</span>
            )}
            {index === 3 || index === 9 || (
              <span className="card--question__short">{question}</span>
            )}
          </div>
          <hr className="card--hr" />
          <div
            className="card--text"
            onMouseEnter={hovered}
            onMouseLeave={unhovered}
            onClick={onClickFunc}
          >
            {answer}
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
        {modalActive && <SaveModal setModalActive={saveModalActive} />}
      </div>
    </PreviousCardWrap>
  );
};

export default withRouter(PreviousCard);
