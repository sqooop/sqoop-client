import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Star } from '../../../assets/icons/Star.svg';
import { ReactComponent as StarFill } from '../../../assets/icons/StarFill.svg';

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
    <StyledButton>
      {favoritesStatus ? (
        <StyledFavorites onClick={FavoritesClick}>
          <Star />
        </StyledFavorites>
      ) : (
        <StyledFavorites onClick={FillFavoritesClick}>
          <StarFill />
        </StyledFavorites>
      )}
    </StyledButton>
  );
};

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledFavorites = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`;

export default FavoritesButton;
