import React from 'react';
import { withRouter } from 'react-router-dom';
import Styled from 'styled-components';
import Edit from '../../assets/icons/Edit.svg';

const MyPageHeaderWrap = Styled.div`
  display: flex;
  flex-direction: row;
  width: 928px;
  margin: 40px auto;
  justify-content: center;
  align-items: center;

  button {
    width: 86px;
    padding: 0;
    margin: 0;
    background: none;
    font-size: 20px;
    font-weight: bold;
    border: none;
    &:focus {
      outline: none;
    }
    &:hover {
      cursor: pointer;
    }
  }

  .button {
    &--profile {
      margin-right: 36px;
      color: #AAAAAA;
    }
    &--settings {
      color: #AAAAAA;
    }
    &--edit {
      width: 24px;
      height: 24px;
    }
}

.empty {
  flex: 1;
}
`;

const MyPageHeader = ({ history, profileColor, settingsColor }) => {
  return (
    <MyPageHeaderWrap>
      <button
        className="button--profile"
        style={{ color: profileColor }}
        onClick={() => history.push('/mypage/profile')}
      >
        프로필
      </button>
      <button
        className="button--settings"
        style={{ color: settingsColor }}
        onClick={() => history.push('/mypage/settings')}
      >
        계정 설정
      </button>
      <div className="empty" />
      {profileColor && <img className="button--edit" src={Edit} alt="" />}
    </MyPageHeaderWrap>
  );
};

export default withRouter(MyPageHeader);
