import React from 'react';
import MyPageHeader from '../../components/myPage/MyPageHeader';
import MainHeader from '../../components/common/MainHeader';
import Styled from 'styled-components';
import AccountConfirm from '../../components/myPage/settings/ChangePassword';
const SettingsWrap = Styled.div`
  diplay: block;
  display: flex;
  margin: 57px 403px 302px 183px;
  flex-direction: column;
  justify-content: center;

  .footer {
    width: 730px;
    font-size: 14px;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  .logout {
    margin-top: 197px;
    margin-left: 122px;
    margin-bottom: 12px;
  }
`;
const MaterialBox = Styled.div`
  display: inline-block;
  width: 700px;
  height: 244px;
  margin-left: 122px;
  
  button{
    background: none;
    border: none;
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: bold;
    &:focus {
      outline: none;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;
const NavbarWrap = Styled.div`
  float: left;
  display: block;
  display: flex;
  width: 120px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  color: #A5A5A5;
  button{
    :hover{
      color: black;
    }
  }
  `;
const MaterialWrap = Styled.div`
  float: left;
  width: 416px;
  display: block;
  margin-left: 80px;
`;

const Settings = () => {
  return (
    <>
      <MainHeader />
      <SettingsWrap>
        <MyPageHeader settingsColor={'black'} />
        <MaterialBox>
          <NavbarWrap>
            <button className="button--info">계정 정보 확인</button>
            <button className="button--password">비밀번호 변경</button>
            <button className="button--marketing">마케팅 수신 설정</button>
            <button className="button--privacy">개인정보처리방침</button>
            <button className="button—terms">이용약관</button>
            <button className="button—delete">계정 삭제</button>
          </NavbarWrap>
          <MaterialWrap>
            <AccountConfirm />
          </MaterialWrap>
        </MaterialBox>
        <div className="footer">
          <div className="logout">로그아웃</div>
        </div>
      </SettingsWrap>
    </>
  );
};

export default Settings;
