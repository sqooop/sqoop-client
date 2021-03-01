import React from 'react';
import MyPageHeader from '../../components/myPage/MyPageHeader';
<<<<<<< HEAD
import UserInfoContainer from '../../containers/myPage/UserInfo.container';
import SchoolInfoContainer from '../../containers/myPage/SchoolInfo.container';
=======
import UserInfo from '../../components/myPage/UserInfo';
import SchoolInfo from '../../components/myPage/SchoolInfo';
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
import InterestInfo from '../../components/myPage/InterestInfo';
import IntroInfo from '../../components/myPage/IntroInfo';
import MainHeader from '../../components/common/MainHeader';
import Styled from 'styled-components';

const MyPageWrap = Styled.div`
  display: flex;
  flex-direction: column;
<<<<<<< HEAD
  width: 1000px;
=======
  width: 1470px;
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
  margin: 0 auto;
  justify-content: center;

  .footer {
    width: 730px;
    font-size: 14px;
    margin: 0 auto;
    margin-bottom: 40px;
  }

<<<<<<< HEAD
=======
  .setting,
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
  .logout {
    margin-bottom: 12px;
  }
`;

const MyPage = () => {
  return (
    <>
      <MainHeader />
      <MyPageWrap>
<<<<<<< HEAD
        <MyPageHeader profileColor={'black'} />
        <UserInfoContainer />
        <SchoolInfoContainer />
        <InterestInfo />
        <IntroInfo />
        <div className="footer">
=======
        <MyPageHeader />
        <UserInfo />
        <SchoolInfo />
        <InterestInfo />
        <IntroInfo />
        <div className="footer">
          <div className="setting">계정 설정</div>
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
          <div className="logout">로그아웃</div>
        </div>
      </MyPageWrap>
    </>
  );
};

export default MyPage;
