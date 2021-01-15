import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import FavoritesButton from '../../../components/activityOne/global/FavoritesButton';
import DeleteButton from '../../../components/activityOne/global/DeleteButton';
import EditButton from '../../../components/activityOne/global/EditButton';
import getOneActivity from '../../../lib/api/activityOne/basic';
import { setDetailTitle } from '../../../store/modules/detail';

const TitleContainer = ({ userData }) => {
  const id = 74;
  const dispatch = useDispatch();
  const saveTitle = data => dispatch(setDetailTitle(data));

  useEffect(() => {
    (async () => {
      const BasicData = await getOneActivity(74);
      saveTitle(BasicData.selectedActivity.title);
    })();
  }, [id]);

  // userData를 props로 받는 이유는 최종 검토하기 페이지에서 즐겨찾기 버튼과 삭제 버튼이 없기 때문
  const userFlag = userData !== null ? true : false;

  // userFlag로 userData의 여부를 확인해 버튼을 보여주거나 보여주지 않음

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
  margin-top: 1vw;

  & > span {
    font-size: 2.2vw;
    font-weight: 700;
    line-height: 4.8rem;
  }
`;

export default TitleContainer;
