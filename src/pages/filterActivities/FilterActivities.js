import React from 'react';
import styled from 'styled-components';
import Header from '../../containers/filterActivities/Header.container';
import Card from '../../containers/filterActivities/Card.container';
const FilterActivitiesWrap = styled.div`
  padding-left: 14.297vw;
  padding-right: 14.297vw;
`;
const FilterActivities = () => {
  return (
    <FilterActivitiesWrap>
      <Header />
      <Card />
    </FilterActivitiesWrap>
  );
};

export default FilterActivities;
