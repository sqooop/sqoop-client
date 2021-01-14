import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import DefaultWrap from '../../components/activityOne/default/DefaultWrap';
import NotStarting from '../../components/activityOne/notStarting/NotStartingWrap';
import NotFinished from '../../components/activityOne/notFinished/NotFinished';
import MainHeader from '../../components/common/MainHeader';
const ActivityOneDefault = ({ match }) => {
  const id = match.params.id;
  const detail = useSelector(state => state.detail);

  return (
    <>
      <MainHeader />
      <StyledActivityOneWrap>
        {detail.detailState === 0 ? (
          <NotStarting id={id} />
        ) : detail.detailState === 1 ? (
          <NotFinished id={id} />
        ) : (
          <DefaultWrap id={id} />
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
