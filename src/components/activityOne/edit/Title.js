import React from 'react';
import styled from 'styled-components';
import FavoritesButton from '../global/FavoritesButton';
import DeleteButton from '../global/DeleteButton';
import EditButton from '../global/EditButton';

const ActivityOneTitle = props => {
  const userData = true;
  const userFlag = userData !== null ? true : false;
  const { title, onChangeInputs } = props;

  return (
    <StyledActivityOneTitle>
      <input value={title} onChange={onChangeInputs}></input>
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
