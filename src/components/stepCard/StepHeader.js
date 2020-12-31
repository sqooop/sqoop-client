import React from 'react';
import Styled from 'styled-components';
import LeftButtonIcon from '../../assets/icons/LeftButtonIcon.svg';
import RightButtonIcon from '../../assets/icons/RightButtonIcon.svg';
import { withRouter } from 'react-router-dom';

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

const StepHeader = ({ title, answers, history, match }) => {
  const index = parseInt(match.params.id);

  const onClickFunc = event => {
    event.stopPropagation();
    console.log('clicked');
  };

  return (
    <HeaderWrap>
      <div className="header">
        <div className="header--text">
          <span className="header--text__title">{title}</span>
          을(를) 자세히 떠올려 볼까요?
        </div>
        <div className="header--empty"></div>
        <div className="header--button">
          <div className="header--button__left" onClick={onClickFunc}>
            <object type="image/svg+xml" data={LeftButtonIcon}>
              L
            </object>
          </div>
          <div className="header--button__right" onClick={onClickFunc}>
            <object type="image/svg+xml" data={RightButtonIcon}>
              R
            </object>
          </div>
        </div>
      </div>
    </HeaderWrap>
  );
};

export default withRouter(StepHeader);
