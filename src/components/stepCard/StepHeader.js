// 리덕스 적용완료
import React from 'react';
import Styled from 'styled-components';
import LeftButtonIconOn from '../../assets/icons/LeftButtonIconOn.svg';
import LeftButtonIconOff from '../../assets/icons/LeftButtonIconOff.svg';
import RightButtonIconOn from '../../assets/icons/RightButtonIconOn.svg';
import RightButtonIconOff from '../../assets/icons/RightButtonIconOff.svg';
import { withRouter } from 'react-router-dom';
import SaveModal from './SaveModal';

const HeaderWrap = Styled.div`
  box-sizing: border-box;

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 32px;
    margin-top: 12px;
    height: 48px;

    &--text {
      margin-left: 183px;
      font-size: 32px;
      font-weight: bold;
      line-height: 150%;
      &__title {
        color: #195BFF;
        font-weight: bold;
      }
    }

    &--empty {
      flex: 1;
    }

    &--button {
      display: flex;
      flex-direction: row;
      align-items: center;
      &__right {
        margin-left: 36px;
        margin-right: 183px;
      }
    }
  }
`;

const StepHeader = ({
  title,
  answers,
  notSaved,
  modalActive,
  saveModalActive,
  savePrevIndex,
  saveClassNameLeft,
  saveClassNameGrow,
  saveClassNameShrink,
  saveClassNameRight,
  saveClassNameShrinkRight,
  history,
  match,
}) => {
  const index = parseInt(match.params.id);

  const leftHovered = event => {
    if (answers[index - 1]) {
      event.target.style.cursor = 'pointer';
    } else {
      event.target.style.cursor = 'default';
    }
  };
  const rightHovered = event => {
    if (answers[index]) {
      event.target.style.cursor = 'pointer';
    } else {
      event.target.style.cursor = 'default';
    }
  };
  const onClickLeft = event => {
    if (notSaved) {
      saveModalActive(true);
    } else {
      event.stopPropagation();
      if (answers[index - 1]) {
        saveClassNameLeft('card');
        saveClassNameGrow('card');
        saveClassNameShrink('card');
        saveClassNameRight('card');
        saveClassNameShrinkRight('card');
        savePrevIndex(index);
        history.push(`/steps/${index - 1}`);
      }
    }
  };
  const onClickRight = event => {
    if (notSaved) {
      saveModalActive(true);
    } else {
      event.stopPropagation();
      if (answers[index]) {
        saveClassNameLeft('card');
        saveClassNameGrow('card');
        saveClassNameShrink('card');
        saveClassNameRight('card');
        saveClassNameShrinkRight('card');
        savePrevIndex(index);
        history.push(`/steps/${index + 1}`);
      }
    }
  };

  return (
    <HeaderWrap>
      <div className="header">
        <div className="header--text">
          <span className="header--text__title">{title}</span>, 자세히 떠올려
          볼까요?
        </div>
        <div className="header--empty"></div>
        <div className="header--button">
          {answers[index - 1] ? (
            <img
              className="header--button__left"
              src={LeftButtonIconOn}
              alt=""
              onClick={onClickLeft}
              onMouseEnter={leftHovered}
            />
          ) : (
            <img
              className="header--button__left"
              src={LeftButtonIconOff}
              alt=""
              onMouseEnter={leftHovered}
            />
          )}
          {answers[index] ? (
            <img
              className="header--button__right"
              src={RightButtonIconOn}
              alt=""
              onClick={onClickRight}
              onMouseEnter={rightHovered}
            />
          ) : (
            <img
              className="header--button__right"
              src={RightButtonIconOff}
              alt=""
              onMouseEnter={rightHovered}
            />
          )}
        </div>
      </div>
      {modalActive && <SaveModal setModalActive={saveModalActive} />}
    </HeaderWrap>
  );
};

export default withRouter(StepHeader);
