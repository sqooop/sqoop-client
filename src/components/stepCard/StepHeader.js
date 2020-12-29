import React from 'react';
import Styled from 'styled-components';
import LeftButton from '../../assets/icons/LeftButton.svg';
import RightButton from '../../assets/icons/RightButton.svg';

const HeaderWrap = Styled.div`
  box-sizing: border-box;

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;

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

const StepHeader = ({ title }) => {
  return (
    <HeaderWrap>
      <div className="header">
        <div className="header--text">
          <span className="header--text__title">{title}</span>
          을(를) 자세히 떠올려 볼까요?
        </div>
        <div className="header--empty"></div>
        <div className="header--button">
          <div className="header--button__left">
            <img src={LeftButton} alt="left" />
          </div>
          <div className="header--button__right">
            <img src={RightButton} alt="right" />
          </div>
        </div>
      </div>
    </HeaderWrap>
  );
};

export default StepHeader;
