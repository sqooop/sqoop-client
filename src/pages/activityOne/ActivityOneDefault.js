import React from 'react';
import styled from 'styled-components';
import DefaultWrap from '../../components/activityOne/default/DefaultWrap';

const ActivityOneDefault = () => {
  return (
    <StyledActivityOneWrap>
      <DefaultWrap />
    </StyledActivityOneWrap>
  );
};

const StyledActivityOneWrap = styled.div`
  padding-left: 14.3vw;
  padding-right: 14.3vw;
`;

export default ActivityOneDefault;
