import React from 'react';
import styled from 'styled-components';
import { ReactComponent as NotStartingIcon } from '../../../assets/icons/NotFinished.svg';

const NotStarting = () => {
  return (
    <StyledNotStarting>
      <NotStartingIcon />
    </StyledNotStarting>
  );
};

const StyledNotStarting = styled.div``;

export default NotStarting;
