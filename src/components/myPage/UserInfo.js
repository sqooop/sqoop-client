import { React, useState } from 'react';
import { withRouter } from 'react-router-dom';
import UserPhoto from '../../assets/icons/UserPhoto.svg';
import Styled from 'styled-components';
import PhotoUpload from './PhotoUpload';

const UserInfoWrap = Styled.div`
  width: 730px;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
  
  .user {
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
      &__url > span {
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

  input {
    width: 254px;
    border: none;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #AAAAAA;
    }
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const UserInfo = ({
  userName,
  birthday,
  phone,
  email,
  url,
  profileImg,
  savePhone,
  saveEmail,
  saveURL,
  saveProfileImg,
  match,
}) => {
  const [currentTarget, setCurrentTarget] = useState('');
  const [userPhone, setUserPhone] = useState(phone);
  const [userEmail, setUserEmail] = useState(email);
  const [userUrl, setUserUrl] = useState(url);
  const [userImg, setUserImg] = useState({
    file: profileImg,
    preview: null,
  });

  const userBirthday = `${birthday.slice(0, 4)}년    ${parseInt(
    birthday.slice(4, 6),
  )}월    ${parseInt(birthday.slice(6, 8))}일`;
  const isReadOnly = match.path === '/mypage/profile' ? true : false;

  const handleChangeFile = event => {
    let reader = new FileReader();
    const data = event.target.files[0];

    if (data) {
      reader.readAsDataURL(data);
    }

    reader.onloadend = () => {
      setUserImg({
        file: data,
        preview: reader.result,
      });
      saveProfileImg(data);
      console.log(data);
    };
  };

  return (
    <UserInfoWrap>
      <PhotoUpload
        isReadOnly={isReadOnly}
        profileImg={userImg}
        photoIcon={UserPhoto}
        onChangeFunc={handleChangeFile}
      />
      <div className="user--info">
        <div className="user--info__name">
          <span className="title">이름</span>
          <input type="text" value={userName} readOnly={true} />
        </div>
        <div className="user--info__birth">
          <span className="title">생년월일</span>
          <input type="text" value={userBirthday} readOnly={true} />
        </div>
        <div className="user--info__phone">
          <span className="title">전화번호</span>
          <input
            type="text"
            value={userPhone}
            placeholder="입력해주세요"
            readOnly={isReadOnly}
            onChange={event => {
              setUserPhone(event.target.value);
              savePhone(event.target.value);
            }}
            onClick={() => {
              isReadOnly ? setCurrentTarget('') : setCurrentTarget('phone');
            }}
            style={
              currentTarget === 'phone'
                ? { backgroundColor: '#EEEEEE' }
                : { backgroundColor: 'white' }
            }
          />
        </div>
        <div className="user--info__email">
          <span className="title">이메일</span>
          <input
            type="text"
            value={userEmail}
            placeholder="입력해주세요"
            readOnly={isReadOnly}
            onChange={event => {
              setUserEmail(event.target.value);
              saveEmail(event.target.value);
            }}
            onClick={() => {
              isReadOnly ? setCurrentTarget('') : setCurrentTarget('email');
            }}
            style={
              currentTarget === 'email'
                ? { backgroundColor: '#EEEEEE' }
                : { backgroundColor: 'white' }
            }
          />
        </div>
        <div className="user--info__url">
          <span className="title">URL</span>
          <input
            type="text"
            value={userUrl}
            placeholder="입력해주세요"
            readOnly={isReadOnly}
            onChange={event => {
              setUserUrl(event.target.value);
              saveURL(event.target.value);
            }}
            onClick={() => {
              isReadOnly ? setCurrentTarget('') : setCurrentTarget('url');
            }}
            style={
              currentTarget === 'url'
                ? { backgroundColor: '#EEEEEE' }
                : { backgroundColor: 'white' }
            }
          />
        </div>
      </div>
    </UserInfoWrap>
  );
};

export default withRouter(UserInfo);
