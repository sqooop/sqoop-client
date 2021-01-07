import React from 'react';
import styled from 'styled-components';
import NoActivity from '../../components/filterActivities/NoActivity';
import Card from '../../containers/filterActivities/Card.container';

const FilterActivities = () => {
  return (
    <>
      {/* {<Card /> ? <Card /> : <NoActivity />} */}
      <NoActivity />
    </>
  );
};

export default FilterActivities;
