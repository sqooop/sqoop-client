import React from 'react';
import { withRouter } from 'react-router-dom';
import Styled from 'styled-components';
import Edit from '../../assets/icons/Edit.svg';

const MyPageHeaderWrap = Styled.div`
  display: flex;
<<<<<<< HEAD
  width: 928px;
  justify-content: center;
  margin-bottom: 40px;
=======
  flex-direction: row;
  width: 928px;
  margin: 40px auto;
  justify-content: center;
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
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
<<<<<<< HEAD
    &--profile {
      margin-right: 36px;
      color: #AAAAAA;
    }
    &--settings {
=======
    &--basic {
      margin-right: 20px;
      color: black;
    }
    &--career {
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
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

<<<<<<< HEAD
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
=======
const MyPageHeader = ({ history, match }) => {
  return (
    <MyPageHeaderWrap>
      <button
        className="button--basic"
        onClick={() => history.push('/mypage/basic')}
      >
        기본 정보
      </button>
      <button
        className="button--career"
        onClick={() => history.push('/mypage/career')}
      >
        이력 사항
      </button>
      <div className="empty" />
      <img className="button--edit" src={Edit} alt="" />
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
    </MyPageHeaderWrap>
  );
};

export default withRouter(MyPageHeader);
