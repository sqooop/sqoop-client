import React from 'react';
import MyPageHeader from '../../components/myPage/MyPageHeader';
import UserInfo from '../../components/myPage/UserInfo';
import SchoolInfo from '../../components/myPage/SchoolInfo';
import InterestInfo from '../../components/myPage/InterestInfo';
import IntroInfo from '../../components/myPage/IntroInfo';
import Styled from 'styled-components';

const MyPageWrap = Styled.div`
  display: flex;
  flex-direction: column;
  width: 1470px;
  margin: 0 auto;
  justify-content: center;

  .footer {
    width: 730px;
    font-size: 14px;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  .setting,
  .logout {
    margin-bottom: 12px;
  }
`;

const MyPage = () => {
  return (
    <MyPageWrap>
      <MyPageHeader />
      <UserInfo />
      <SchoolInfo />
      <InterestInfo />
      <IntroInfo />
      <div className="footer">
        <div className="setting">계정 설정</div>
        <div className="logout">로그아웃</div>
      </div>
    </MyPageWrap>
  );
};

export default MyPage;
