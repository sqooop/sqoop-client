import React from 'react';
import styled from 'styled-components';
import { ReactComponent as NotFinishedIcon } from '../../../assets/icons/NotFinished.svg';
import ActivityReviewButton from '../global/ActivityReviewButton';

const NotFinished = () => {
  return (
    <StyledIcon>
      <NotFinishedIcon style={{ width: '21.3vw', height: '12.9vw' }} />
      <ActivityReviewButton />
    </StyledIcon>
  );
};

const StyledIcon = styled.div`
  display: block;
  text-align: center;
  margin-top: 7vw;
  width: 41.6vw;
`;

export default NotFinished;
