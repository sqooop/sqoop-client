import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Star } from '../../../assets/icons/star.svg';
import { ReactComponent as StarFill } from '../../../assets/icons/starFill.svg';

const FavoritesButton = () => {
  // 즐겨찾기를 클릭하면 component를 변경하기 위한 state
  const [favoritesClick, setFavoritesClick] = useState('BasicIcon');
  const favoritesStatus = favoritesClick === 'BasicIcon' ? true : false;

  // 즐겨찾기를 클릭하면 아이콘이 바뀌는 함수 추후 서버 연결 예정
  const FavoritesClick = () => {
    setFavoritesClick('FillIcon');
  };

  // 즐겨찾기를 해제하면 아이콘이 바뀌는 함수 추후 서버 연결 예정
  const FillFavoritesClick = () => {
    setFavoritesClick('BasicIcon');
  };

  return (
    <StyledActivityOneButton>
      {favoritesStatus ? (
        <StyledActivityFavoritesButton onClick={FavoritesClick}>
          <Star />
        </StyledActivityFavoritesButton>
      ) : (
        <StyledActivityFavoritesButton onClick={FillFavoritesClick}>
          <StarFill />
        </StyledActivityFavoritesButton>
      )}
    </StyledActivityOneButton>
  );
};

const StyledActivityOneButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
`;

const StyledActivityFavoritesButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default FavoritesButton;
