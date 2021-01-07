import React from 'react';
import styled from 'styled-components';
import EditButton from '../global/EditButton';
import FavoritesButton from '../global/FavoritesButton';

const ActivityOneTitle = ({ userData }) => {
  // userData를 props로 받는 이유는 활동 돌아보기를 완료하지 않으면 즐겨찾기 버튼과 편집하기 버튼이 없기 때문
  const userFlag = userData !== null ? true : false;

  // userFlag로 userData의 여부를 확인해 버튼을 보여주거나 보여주지 않음
  return (
    <StyledActivityOneTitle>
      <span>라오스 봉사 활동</span>
      {userFlag ? (
        <>
          <EditButton /> <FavoritesButton />
        </>
      ) : (
        ''
      )}
    </StyledActivityOneTitle>
  );
};

const StyledActivityOneTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold !important;
  margin-top: 3.2rem;

  & > span {
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 4.8rem;
  }
`;

export default ActivityOneTitle;
