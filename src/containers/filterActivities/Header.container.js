import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStatus } from '../../store/modules/filter';
import { setActivities } from '../../store/modules/activities';
import Header from '../../components/filterActivities/Header';
import { getLikeActivity } from '../../lib/api/activity';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const saveStatus = data => dispatch(setStatus(data));
  const saveActivities = data => dispatch(setActivities(data));

  const status = useSelector(state => state.filter.status);
  const onChange = event => {
    saveStatus(event);
  };
  if (status == 'like') {
    const data = getLikeActivity();
    saveActivities(data);
  }
  return <Header handleChange={onChange} status={status} />;
};

export default HeaderContainer;
