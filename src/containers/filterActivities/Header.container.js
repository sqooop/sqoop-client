import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStatus, setFilterOpen } from '../../store/modules/filter';
import { setActivities } from '../../store/modules/activities';
import Header from '../../components/filterActivities/Header';
import {
  getLikeActivity,
  getActivities,
  getWritingActivity,
} from '../../lib/api/activity';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const saveStatus = data => dispatch(setStatus(data));
  const saveActivities = data => dispatch(setActivities(data));
  const saveFilterOpen = data => dispatch(setFilterOpen(data));

  const status = useSelector(state => state.filter.status);
  const isOpen = useSelector(state => state.filter.isOpen);
  const onChange = event => {
    saveStatus(event);
  };
  const onClick = event => {
    saveFilterOpen(!isOpen);
  };
  useEffect(() => {
    (async () => {
      if (status === 'like') {
        const data = await getLikeActivity();
        saveActivities(data);
      } else if (status === 'all') {
        const data = await getActivities();
        saveActivities(data);
      } else if (status === 'writing') {
        const data = await getWritingActivity();
        saveActivities(data);
      }
    })();
  }, [status]);
  return (
    <Header
      handleChange={onChange}
      status={status}
      onClick={onClick}
      isOpen={isOpen}
    />
  );
};

export default HeaderContainer;
