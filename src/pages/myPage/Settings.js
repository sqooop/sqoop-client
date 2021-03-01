import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyPageHeader from '../../components/myPage/MyPageHeader';
import MainHeader from '../../components/common/MainHeader';
import Styled from 'styled-components';
import ChangePassword from '../../containers/myPage/settings/ChangePassword.container';
import AccountConfirm from '../../containers/myPage/settings/AccountConfirm.container';
import { setStatus } from '../../store/modules/settings/status';
const SettingsWrap = Styled.div`
  padding-left: 25.4629vw;
  padding-right: 25.4629vw;
  .footer {
    width: 730px;
    font-size: 14px;
    margin: 0 auto;
    margin-bottom: 40px;
  }
  .logout {
    margin-top: 197px;
    margin-bottom: 12px;
  }
`;
const MaterialBox = Styled.div`
  display: inline-block;
  width: 700px;
  height: 244px;
`;
const OneDiv = Styled.div`
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
  color: ${props => props.color};
`;
const NavbarWrap = Styled.div`
  float: left;
  display: block;
  display: flex;
  width: 130px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;
const MaterialWrap = Styled.div`
  float: left;
  width: 416px;
  display: block;
`;

const Settings = () => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.status.status);
  const saveStatus = data => dispatch(setStatus(data));
  const onClick = evt => {
    saveStatus(evt.target.innerHTML);
  };
  console.log(status, status === '계정 정보 확인');
  return (
    <>
      <MainHeader />
      <MyPageHeader settingsColor={'black'} />
      <SettingsWrap>
        <MaterialBox>
          <NavbarWrap>
            <OneDiv
              color={'계정 정보 확인' === status ? 'black' : '#a5a5a5'}
              onClick={onClick}
            >
              계정 정보 확인
            </OneDiv>
            <OneDiv
              color={'비밀번호 변경' === status ? 'black' : '#a5a5a5'}
              onClick={onClick}
            >
              비밀번호 변경
            </OneDiv>
            <OneDiv
              color={'마케팅 수신 설정' === status ? 'black' : '#a5a5a5'}
              onClick={onClick}
            >
              마케팅 수신 설정
            </OneDiv>
            <OneDiv
              color={'개인정보처리방침' === status ? 'black' : '#a5a5a5'}
              onClick={onClick}
            >
              개인정보처리방침
            </OneDiv>
            <OneDiv
              color={'이용약관' === status ? 'black' : '#a5a5a5'}
              onClick={onClick}
            >
              이용약관
            </OneDiv>
            <OneDiv
              color={'계정 삭제' === status ? 'black' : '#a5a5a5'}
              onClick={onClick}
            >
              계정 삭제
            </OneDiv>
          </NavbarWrap>
          <MaterialWrap>
            {status === '계정 정보 확인' ? <AccountConfirm /> : <></>}
            {status === '비밀번호 변경' ? <ChangePassword /> : <></>}
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
