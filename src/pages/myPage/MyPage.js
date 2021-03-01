import React from 'react';
import MyPageHeader from '../../components/myPage/MyPageHeader';
import UserInfoContainer from '../../containers/myPage/UserInfo.container';
import SchoolInfoContainer from '../../containers/myPage/SchoolInfo.container';
import InterestInfo from '../../components/myPage/InterestInfo';
import IntroInfo from '../../components/myPage/IntroInfo';
import MainHeader from '../../components/common/MainHeader';
import Styled from 'styled-components';

const MyPageWrap = Styled.div`
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

const MyPage = () => {
  return (
    <>
      <MainHeader />
      <MyPageWrap>
        <MyPageHeader profileColor={'black'} />
        <UserInfoContainer />
        <SchoolInfoContainer />
        <InterestInfo />
        <IntroInfo />
        <div className="footer">
          <div className="logout">로그아웃</div>
        </div>
      </MyPageWrap>
    </>
  );
};

export default MyPage;
