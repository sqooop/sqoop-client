import React from 'react';
import styled from 'styled-components';
import FavoritesButton from '../global/FavoritesButton';
import DeleteButton from '../global/DeleteButton';
import EditButton from '../global/EditButton';

const ActivityOneTitle = ({ userData }) => {
  // userData를 props로 받는 이유는 최종 검토하기 페이지에서 즐겨찾기 버튼과 삭제 버튼이 없기 때문
  const userFlag = userData !== null ? true : false;

  // userFlag로 userData의 여부를 확인해 버튼을 보여주거나 보여주지 않음
  return (
    <StyledActivityOneTitle>
      <input></input>
      <div style={{ display: 'flex' }}>
        {userFlag ? (
          <>
            <FavoritesButton /> <DeleteButton />
          </>
        ) : (
          ''
        )}
        <EditButton />
      </div>
    </StyledActivityOneTitle>
  );
};

const StyledActivityOneTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold !important;
  margin-top: 2.5vw;

  & > input {
    font-size: 2.5vw;
    font-weight: 700;
    line-height: 4.8rem;
    border-style: none;
    width: 63.8vw;

    :focus {
      outline: none;
    }
  }
`;

export default ActivityOneTitle;
