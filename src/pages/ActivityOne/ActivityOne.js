import React from 'react';
import styled from 'styled-components';
import ActivityOneTitle from '../../components/ActivityOne/ActivityOneTitle';

const ActivityOne = () => {
  return (
    <div>
      <StyledActivityOneWrap>
        <ActivityOneTitle />
      </StyledActivityOneWrap>
    </div>
  );
};

const StyledActivityOneWrap = styled.div`
  padding-left: 11.438rem;
  padding-right: 11.438rem;
`;

export default ActivityOne;
