import { React, useState } from 'react';
<<<<<<< HEAD
import { withRouter } from 'react-router-dom';
import UserPhoto from '../../assets/icons/UserPhoto.svg';
import Styled from 'styled-components';
=======
import UserPhoto from '../../assets/icons/UserPhoto.svg';
import Styled from 'styled-components';
import { useSelector } from 'react-redux';
>>>>>>> c701b541a4661ae58261808483f8b9182a287066

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
<<<<<<< HEAD
      &__url > input {
=======
      &__sns > input {
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
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
<<<<<<< HEAD
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
=======
  }
`;

const UserInfo = () => {
  const userName = useSelector(state => state.home.name);

  const [name, setName] = useState(userName);
  const [birth, setBirth] = useState('1998년  10월  17일');
  const [phone, setPhone] = useState('010 - 6533 - 1928');
  const [email, setEmail] = useState('thgml6533@gmail.com');
  const [sns, setSns] = useState('@sophisticated_hee');
>>>>>>> c701b541a4661ae58261808483f8b9182a287066

  return (
    <UserInfoWrap>
      <div className="user--photo">
        <img src={UserPhoto} alt="" />
      </div>
      <div className="user--info">
        <div className="user--info__name">
          <span className="title">이름</span>
<<<<<<< HEAD
          <input type="text" value={userName} readOnly={isReadOnly} />
        </div>
        <div className="user--info__birth">
          <span className="title">생년월일</span>
          <input type="text" value={userBirthday} readOnly={isReadOnly} />
=======
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
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
        </div>
        <div className="user--info__phone">
          <span className="title">전화번호</span>
          <input
            type="text"
<<<<<<< HEAD
            value={userPhone}
            placeholder="입력해주세요"
            readOnly={isReadOnly}
=======
            value={phone}
            onChange={event => setPhone(event.target.value)}
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
          />
        </div>
        <div className="user--info__email">
          <span className="title">이메일</span>
          <input
            type="text"
            value={email}
<<<<<<< HEAD
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
=======
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <div className="user--info__sns">
          <span className="title">SNS</span>
          <input
            type="text"
            value={sns}
            onChange={event => setSns(event.target.value)}
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
          />
        </div>
      </div>
    </UserInfoWrap>
  );
};

<<<<<<< HEAD
export default withRouter(UserInfo);
=======
export default UserInfo;
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
