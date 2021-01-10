import React from 'react';
import styled from 'styled-components';
import { ReactComponent as NotFinishedIcon } from '../../../assets/icons/NotFinished.svg';
import ActivityReviewButton from '../global/ActivityReviewButton';

const NotFinished = () => {
  return (
    <StyledNotFinished>
      <div style={{ display: 'block' }}>
        <NotFinishedIcon />
        <ActivityReviewButton />
      </div>
    </StyledNotFinished>
  );
};

const StyledNotFinished = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default NotFinished;
