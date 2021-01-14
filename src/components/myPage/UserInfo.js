import { React, useState } from 'react';
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
      &__birth > input,
      &__phone > input,
      &__sns > input {
        color: #A5A5A5;
      }
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
  }
`;

const UserInfo = () => {
  const [name, setName] = useState('권소희');
  const [birth, setBirth] = useState('1998년  10월  17일');
  const [phone, setPhone] = useState('010 - 6533 - 1928');
  const [email, setEmail] = useState('soheekwon@naver.com');
  const [sns, setSns] = useState('@sophisticated_hee');

  return (
    <UserInfoWrap>
      <div className="user--photo">
        <img src={UserPhoto} alt="" />
      </div>
      <div className="user--info">
        <div className="user--info__name">
          <span className="title">이름</span>
          <input
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </div>
        <div className="user--info__birth">
          <span className="title">생년월일</span>
          <input
            type="text"
            value={birth}
            onChange={event => setBirth(event.target.value)}
          />
        </div>
        <div className="user--info__phone">
          <span className="title">전화번호</span>
          <input
            type="text"
            value={phone}
            onChange={event => setPhone(event.target.value)}
          />
        </div>
        <div className="user--info__email">
          <span className="title">이메일</span>
          <input
            type="text"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <div className="user--info__sns">
          <span className="title">SNS</span>
          <input
            type="text"
            value={sns}
            onChange={event => setSns(event.target.value)}
          />
        </div>
      </div>
    </UserInfoWrap>
  );
};

export default UserInfo;
