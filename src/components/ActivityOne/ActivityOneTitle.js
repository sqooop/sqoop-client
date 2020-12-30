import React from 'react';
import styled from 'styled-components';
import ActivityOneButton from './ActivityOneButton';

const ActivityOneTitle = ({ userData }) => {
  // userData를 props로 받는 이유는 활동 돌아보기를 완료하지 않으면 즐겨찾기 버튼과 편집하기 버튼이 없기 때문
  const userFlag = userData !== null ? true : false;

  // userFlag로 userData의 여부를 확인해 버튼을 보여주거나 보여주지 않음
  return (
    <StyledActivityOneTitle>
      <span>라오스 봉사 활동</span>
      {userFlag ? <ActivityOneButton /> : ''}
    </StyledActivityOneTitle>
  );
};

const StyledActivityOneTitle = styled.div`
  display: flex;
  margin-top: 2.75rem;
  justify-content: space-between;

  & > span {
    font-size: 2rem;
    font-weight: 700;
    line-height: 3rem;
  }
`;

export default ActivityOneTitle;
