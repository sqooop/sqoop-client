import React from 'react';
import styled from 'styled-components';
import ActivityOneTitle from '../../components/activityOne/ActivityOneTitle';
import PhotoUpload from '../../components/common/PhotoUpload';
import DefaultData from '../../components/common/DefaultData';

const ActivityOne = () => {
  return (
    <StyledActivityOneWrap>
      <ActivityOneTitle />
      <PhotoUpload />
      <DefaultData />
    </StyledActivityOneWrap>
  );
};

const StyledActivityOneWrap = styled.div`
  padding-left: 11.438rem;
  padding-right: 13.438rem;

  @media screen and (max-width: 868px) {
    padding-left: 6.438rem;
    padding-right: 6.438rem;
  }
`;

export default ActivityOne;
