import React from 'react';
import styled from 'styled-components';
import { ReactComponent as NotStartingIcon } from '../../../assets/icons/NotStarting.svg';
import ActivityReviewButton from '../global/ActivityReviewButton';

const NotStarting = () => {
  return (
    <StyledNotStarting>
      <NotStartingIcon style={{ width: '21.3vw', height: '12.9vw' }} />
      <ActivityReviewButton />
    </StyledNotStarting>
  );
};

const StyledNotStarting = styled.div`
  display: block;
  text-align: center;
  margin-top: 7vw;
  width: 41.6vw;
`;

export default NotStarting;
