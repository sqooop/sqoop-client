import React from 'react';
import styled from 'styled-components';
import Title from '../../components/activityOne/edit/UserTitle';
import BasicData from '../../components/activityOne/edit/BasicData';
import UserEdit from '../../components/activityOne/edit/UserEdit';

const ActivityOneEdit = () => {
  return (
    <StyledActivityOneWrap>
      <Title />
      <div style={{ display: 'flex' }}>
        <BasicData />
        <UserEdit />
      </div>
    </StyledActivityOneWrap>
  );
};

const StyledActivityOneWrap = styled.div`
  padding-left: 14.3vw;
  padding-right: 14.3vw;
`;

export default ActivityOneEdit;
