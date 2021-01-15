import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import DefaultWrap from '../../components/activityOne/default/DefaultWrap';
import NotStarting from '../../components/activityOne/notStarting/NotStartingWrap';
import NotFinished from '../../components/activityOne/notFinished/NotFinishedWrap';
import MainHeader from '../../components/common/MainHeader';
import { setParamsID } from '../../store/modules/paramsid';

const ActivityOneDefault = ({ match }) => {
  const id = match.params.id;

  const dispatch = useDispatch();
  const saveID = data => dispatch(setParamsID(data));

  const detail = useSelector(state => state.detail);

  useEffect(() => {
    saveID(id);
    console.log(id);
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
          <DefaultWrap />
        )}
      </StyledActivityOneWrap>
    </>
  );
};

const StyledActivityOneWrap = styled.div`
  padding-left: 14.3vw;
  padding-right: 14.3vw;
`;

export default ActivityOneDefault;
