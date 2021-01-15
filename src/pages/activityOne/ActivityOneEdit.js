import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import EditWrap from '../../components/activityOne/edit/EditWrap';
import NotStarting from '../../components/activityOne/notStarting/NotStartingEdit';
import NotFinished from '../../components/activityOne/notFinished/NotFinishedEdit';
import MainHeader from '../../components/common/MainHeader';
import { setParamsID } from '../../store/modules/paramsid';

const ActivityOneEdit = ({ match }) => {
  const id = match.params.id;

  const dispatch = useDispatch();
  const saveID = data => dispatch(setParamsID(data));

  const detail = useSelector(state => state.detail);

  useEffect(() => {
    saveID(id);
  }, []);

  return (
    <>
      <MainHeader />
      <StyledActivityOneWrap>
        {detail.detailState === 0 ? (
          <NotStarting />
        ) : detail.detailState === 1 ? (
          <NotFinished />
        ) : (
          <EditWrap />
        )}
      </StyledActivityOneWrap>
    </>
  );
};

const StyledActivityOneWrap = styled.div`
  padding-left: 14.3vw;
  padding-right: 14.3vw;
`;

export default ActivityOneEdit;
