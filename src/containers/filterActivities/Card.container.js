import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActivities } from '../../store/modules/activities';
import Card from '../../components/filterActivities/Card';
import { getActivities } from '../../lib/api/activity';
import NoActivity from '../../components/filterActivities/NoActivity';

const CardContainer = () => {
  const dispatch = useDispatch();
  const saveActivities = data => dispatch(setActivities(data));

  useEffect(() => {
    (async () => {
      const data = await getActivities();
      saveActivities(data);
    })();
  }, []);
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
