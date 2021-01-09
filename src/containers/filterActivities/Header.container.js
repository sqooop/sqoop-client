import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStatus } from '../../store/modules/filter';
import { setActivities } from '../../store/modules/activities';
import Header from '../../components/filterActivities/Header';
import { getLikeActivity, getActivities } from '../../lib/api/activity';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const saveStatus = data => dispatch(setStatus(data));
  const saveActivities = data => dispatch(setActivities(data));

  const status = useSelector(state => state.filter.status);
  const onChange = event => {
    saveStatus(event);
  };
  useEffect(() => {
    (async () => {
      if (status === 'like') {
        const data = await getLikeActivity();
        saveActivities(data);
      } else if (status === 'all') {
        const data = await getActivities();
        saveActivities(data);
      }
    })();
  }, [status]);
  return <Header handleChange={onChange} status={status} />;
};

export default HeaderContainer;
