import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as Star } from '../../../assets/icons/Star.svg';
import { ReactComponent as StarFill } from '../../../assets/icons/StarFill.svg';
import { likeActivity } from '../../../lib/api/activity';
import { setStar } from '../../../store/modules/detail';

const FavoritesButton = () => {
  const dispatch = useDispatch();
  const id = useSelector(state => state.paramsid.id);
  const star = useSelector(state => state.detail.star);
  const saveStar = data => dispatch(setStar(data));
  const FavoritesClick = async () => {
    await likeActivity(id);
    saveStar(!star);
  };
  return (
    <StyledButton>
      {star ? (
        <StyledFavorites onClick={FavoritesClick}>
          <StarFill />
        </StyledFavorites>
      ) : (
        <StyledFavorites onClick={FavoritesClick}>
          <Star />
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
