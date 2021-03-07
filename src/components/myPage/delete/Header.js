import React from 'react';
import styled from 'styled-components';
import Close from '../../../assets/icons/CloseIcon.svg';
import { Link } from 'react-router-dom';

const MyPageHeader = () => {
  return (
    <MyPageHeaderWrap>
      <div style={{ marginLeft: '7.1875vw' }}>계정 삭제</div>
      <Link to="/mypage/settings">
        <img src={Close} alt="close" />
      </Link>
    </MyPageHeaderWrap>
  );
};

const MyPageHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 14.2969vw;
  margin-right: 14.2969vw;
  margin-top: 5.5556vh;
  font-weight: bold;
  font-size: 20px;
  color: #000000;

  img {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default MyPageHeader;
