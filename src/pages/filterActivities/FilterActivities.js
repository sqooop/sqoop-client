import React from 'react';
import styled from 'styled-components';
import Header from '../../containers/filterActivities/Header.container';
import Card from '../../containers/filterActivities/Card.container';
import JobTag from '../../containers/filterActivities/JobTag.container';
const FilterActivitiesWrap = styled.div`
  padding-left: 14.297vw;
  padding-right: 14.297vw;
`;
const FilterActivities = () => {
  return (
    <FilterActivitiesWrap>
      <Header />
      <JobTag />
    </FilterActivitiesWrap>
  );
};

export default FilterActivities;
