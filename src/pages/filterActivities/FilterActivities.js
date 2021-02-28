import React from 'react';
import styled from 'styled-components';
import Header from '../../containers/filterActivities/Header.container';
import Card from '../../containers/filterActivities/Card.container';
import Filter from '../../components/filterActivities/Filter';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MainHeader from '../../components/common/MainHeader';

const FilterActivitiesWrap = styled.div`
  padding-left: 14.297vw;
  padding-right: 14.297vw;
`;
const FilterActivities = () => {
  const isOpen = useSelector(state => state.filter.isOpen);
  return (
    <>
      <MainHeader />
      <FilterActivitiesWrap>
        <Header />
        {isOpen ? <Filter /> : <Card />}
      </FilterActivitiesWrap>
    </>
  );
};

export default withRouter(FilterActivities);
