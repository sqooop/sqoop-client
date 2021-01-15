import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { ReactComponent as Star } from '../../../assets/icons/Star.svg';
import { ReactComponent as StarFill } from '../../../assets/icons/StarFill.svg';
import { likeActivity } from '../../../lib/api/activity';

const FavoritesButton = () => {
  // 즐겨찾기를 클릭하면 component를 변경하기 위한 state
  const [favoritesClick, setFavoritesClick] = useState('BasicIcon');
  const favoritesStatus = favoritesClick === 'BasicIcon' ? true : false;
  const id = useSelector(state => state.paramsid.id);
  const FavoritesClick = async () => {
    await likeActivity(id);
    setFavoritesClick('FillIcon');
  };

  const FillFavoritesClick = async () => {
    await likeActivity(id);
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
  cursor: pointer;
`;

export default FavoritesButton;
