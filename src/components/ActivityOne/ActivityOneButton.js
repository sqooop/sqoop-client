import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Edit } from '../../assets/icons/edit.svg';
import { ReactComponent as Star } from '../../assets/icons/star.svg';
import { ReactComponent as Complete } from '../../assets/icons/complete.svg';
import { ReactComponent as StarFill } from '../../assets/icons/starFill.svg';

const ActivityOneButton = () => {
  // 즐겨찾기를 클릭하면 component를 변경하기 위한 state
  const [favoritesClick, setFavoritesClick] = useState('BasicIcon');
  const favoritesStatus = favoritesClick === 'BasicIcon' ? true : false;

  // 편집하기와 완료하기를 클릭하면 component를 변경하기 위한 state
  const [editClick, setEditClick] = useState('EditIcon');
  const editStatus = editClick === 'EditIcon' ? true : false;

  // 즐겨찾기를 클릭하면 아이콘이 바뀌는 함수 추후 서버 연결 예정
  const FavoritesClick = () => {
    setFavoritesClick('FillIcon');
  };

  // 즐겨찾기를 해제하면 아이콘이 바뀌는 함수 추후 서버 연결 예정
  const FillFavoritesClick = () => {
    setFavoritesClick('BasicIcon');
  };

  // 편집하기를 클릭하면 아이콘이 바뀌는 함수 추후 서버 연결 예정
  const EditClick = () => {
    setEditClick('CompleteIcon');
  };

  // 완료하기를 클릭하면 아이콘이 바뀌는 함수 추후 서버 연결 예정
  const CompleteClick = () => {
    setEditClick('EditIcon');
  };

  return (
    <StyledActivityOneButton>
      {favoritesStatus ? (
        <StyledActivityFavoritesButton onClick={FavoritesClick}>
          <Star />
          &nbsp;<span>즐겨찾기</span>
        </StyledActivityFavoritesButton>
      ) : (
        <StyledActivityFavoritesButton onClick={FillFavoritesClick}>
          <StarFill />
          &nbsp;<span>즐겨찾기</span>
        </StyledActivityFavoritesButton>
      )}
      {editStatus ? (
        <StyledActivityOneEdit onClick={EditClick}>
          <Edit />
          &nbsp;<span>편집하기</span>
        </StyledActivityOneEdit>
      ) : (
        <StyledActivityOneEdit onClick={CompleteClick}>
          <Complete />
          &nbsp;<span>완료하기</span>
        </StyledActivityOneEdit>
      )}
    </StyledActivityOneButton>
  );
};

const StyledActivityOneButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.315rem;
`;

const StyledActivityFavoritesButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledActivityOneEdit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  width: 90px;
`;

export default ActivityOneButton;
