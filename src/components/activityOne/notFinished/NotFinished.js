import React from 'react';
import styled from 'styled-components';
import { ReactComponent as NotFinishedIcon } from '../../../assets/icons/NotFinished.svg';

const NotFinished = () => {
  return (
    <StyledNotFinished>
      <NotFinishedIcon />
    </StyledNotFinished>
  );
};

const StyledNotFinished = styled.div``;

export default NotFinished;
