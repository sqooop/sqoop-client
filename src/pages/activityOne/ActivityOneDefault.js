import React from 'react';
import styled from 'styled-components';
import NotStarting from '../../components/activityOne/notStarting/NotStartingWrap';

const ActivityOneDefault = () => {
  return (
    <StyledActivityOneWrap>
      <NotStarting />
    </StyledActivityOneWrap>
  );
};

const StyledActivityOneWrap = styled.div`
  padding-left: 14.3vw;
  padding-right: 14.3vw;
`;

export default ActivityOneDefault;
