import React from 'react';
import MyPageHeader from '../../components/myPage/MyPageHeader';
import MainHeader from '../../components/common/MainHeader';
import Styled from 'styled-components';

const SettingsWrap = Styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: 0 auto;
  justify-content: center;

  .footer {
    width: 730px;
    font-size: 14px;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  .logout {
    margin-bottom: 12px;
  }
`;

const Settings = () => {
  return (
    <>
      <MainHeader />
      <SettingsWrap>
        <MyPageHeader settingsColor={'black'} />
        <div className="footer">
          <div className="logout">로그아웃</div>
        </div>
      </SettingsWrap>
    </>
  );
};

export default Settings;
