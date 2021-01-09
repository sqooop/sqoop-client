import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/filterActivities/Card';
import NoActivity from '../../components/filterActivities/NoActivity';

const CardContainer = () => {
  const activities = useSelector(state => state.activities.activities);
  return (
    <>
      {activities.length > 0 ? (
        activities.map(activity => (
          <Card key={activity.id} activity={activity} />
        ))
      ) : (
        <NoActivity />
      )}
    </>
  );
};

export default CardContainer;
