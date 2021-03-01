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
      <span>
        <input value={title}></input>
      </span>
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

  input {
    border-style: none;
    font-weight: bold;
    font-size: 2.5vw;
    line-height: 3.8vw;

    :focus {
      outline: none;
    }
  }
`;

export default TitleContainer;
