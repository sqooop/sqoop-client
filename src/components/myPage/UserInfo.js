import { React, useState } from 'react';
import { withRouter } from 'react-router-dom';
import UserPhoto from '../../assets/icons/UserPhoto.svg';
import Styled from 'styled-components';

const UserInfoWrap = Styled.div`
  width: 730px;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
  
  .user {
    &--photo {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 151px;
      height: 192px;
      background-color: white;
      border: 1px solid black;
    }
    &--info {
      margin-left: 47px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 14px;
      align-items: left;
      /* &__birth > input,
      &__phone > input,
      &__url > input {
        color: #A5A5A5;
      } */
      &__sns > span {
        margin-bottom: 0px;
      }
    }
  }

  .title {
    font-weight: bold;
    width: 68px;
    margin-bottom: 15px;
    margin-right: 24px;
    display: inline-block;
    text-align: left;
  }

  input[type="text"] {
    width: 254px;
    border: none;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #AAAAAA;
    }
  }
`;

const UserInfo = ({ userName, birthday, phone, email, url, match }) => {
  const userBirthday = `${birthday.slice(0, 4)}년    ${parseInt(
    birthday.slice(4, 6),
  )}월    ${parseInt(birthday.slice(6, 8))}일`;
  const userPhone = phone
    ? `${phone.slice(0, 3)} - ${phone.slice(3, 7)} - ${phone.slice(7, 11)}`
    : '';
  const isReadOnly = match.path === '/mypage/profile' ? true : false;

  return (
    <UserInfoWrap>
      <div className="user--photo">
        <img src={UserPhoto} alt="" />
      </div>
      <div className="user--info">
        <div className="user--info__name">
          <span className="title">이름</span>
          <input type="text" value={userName} readOnly={isReadOnly} />
        </div>
        <div className="user--info__birth">
          <span className="title">생년월일</span>
          <input type="text" value={userBirthday} readOnly={isReadOnly} />
        </div>
        <div className="user--info__phone">
          <span className="title">전화번호</span>
          <input
            type="text"
            value={userPhone}
            placeholder="입력해주세요"
            readOnly={isReadOnly}
          />
        </div>
        <div className="user--info__email">
          <span className="title">이메일</span>
          <input
            type="text"
            value={email}
            placeholder="입력해주세요"
            readOnly={isReadOnly}
          />
        </div>
        <div className="user--info__url">
          <span className="title">URL</span>
          <input
            type="text"
            value={url}
            placeholder="입력해주세요"
            readOnly={isReadOnly}
          />
        </div>
      </div>
    </UserInfoWrap>
  );
};

export default withRouter(UserInfo);
