import React, { useState } from 'react';
import MyPageHeaderContainer from '../../containers/myPage/MyPageHeader.container';
import UserInfoContainer from '../../containers/myPage/UserInfo.container';
import SchoolInfoContainer from '../../containers/myPage/SchoolInfo.container';
import InterestInfoContainer from '../../containers/myPage/InterestInfo.container';
import CareerInfoContainer from '../../containers/myPage/CareerInfo.container';
import IntroInfoContainer from '../../containers/myPage/IntroInfo.container';
import MainHeader from '../../components/common/MainHeader';
import Styled from 'styled-components';
import { withRouter } from 'react-router-dom';

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
    margin-bottom: 44px;
    &:hover {
      cursor: pointer;
      font-weight: bold;
    }
  }
`;

const MyPage = ({ history }) => {
  const [saved, setSaved] = useState(false);

  return (
    <>
      <MainHeader />
      <MyPageWrap>
        <MyPageHeaderContainer saved={saved} setSaved={setSaved} />
        <UserInfoContainer />
        <SchoolInfoContainer />
        <InterestInfoContainer />
        <CareerInfoContainer saved={saved} />
        <IntroInfoContainer />
        <div className="footer">
          <div
            className="logout"
            onClick={() => {
              sessionStorage.removeItem('token');
              history.push('/');
              window.location.reload();
            }}
          >
            로그아웃
          </div>
        </div>
      </MyPageWrap>
    </>
  );
};

export default withRouter(MyPage);
