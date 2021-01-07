import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActivities } from '../../store/modules/activities';
import Card from '../../components/filterActivities/Card';
import { getActivities } from '../../lib/api/activity';
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
      {activities.map(activity => (
        <Card key={activity.id} activity={activity} />
      ))}
    </>
  );
};

export default CardContainer;
