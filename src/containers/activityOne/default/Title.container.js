import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import FavoritesButton from '../../../components/activityOne/global/FavoritesButton';
import DeleteButton from '../../../components/activityOne/global/DeleteButton';
import EditButton from '../../../components/activityOne/global/EditButton';

const TitleContainer = ({ userData }) => {
  const userFlag = userData !== null ? true : false;

  const title = useSelector(state => state.detail.detailTitle);

  return (
    <StyledActivityOneTitle>
      <span>{title}</span>
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
  margin-top: 4.4vh;

  & > span {
    font-size: 2.5vw;
    font-weight: 700;
    line-height: 3.8vw;
    border-style: solid;
  }
`;

export default TitleContainer;
