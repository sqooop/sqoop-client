import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setDetailTitle } from '../../../store/modules/detail';
import FavoritesButton from '../../../components/activityOne/global/FavoritesButton';
import DeleteButton from '../../../components/activityOne/global/DeleteButton';
import EditButton from '../../../components/activityOne/global/EditButton';

const TitleContainer = ({ userData }) => {
  const dispatch = useDispatch();
  const saveTitle = data => dispatch(setDetailTitle(data));
  const title = useSelector(state => state.detail.detailTitle);

  const userFlag = userData !== null ? true : false;

  const onChangeInputs = evt => {
    const value = evt.target.value;
    let cnt = 0;

    for (let i = 0; i < value.length; i++) {
      if (cnt > 26) {
        break;
      }
      if (value[i] === ' ') {
        cnt += 1;
      } else if (value[i] === value[i].toUpperCase()) {
        cnt += 2;
      } else {
        cnt += 1;
      }
    }

    if (cnt <= 25) {
      saveTitle(value);
    }
  };
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
  margin-top: 4.4vh;

  & > input {
    font-size: 2.5vw;
    font-weight: 700;
    line-height: 3.8vw;
    border-style: none;

    :focus {
      outline: none;
    }
  }
`;

export default TitleContainer;
