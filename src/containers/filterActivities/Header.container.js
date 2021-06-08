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
      if (status === '즐겨찾기') {
        const data = await getLikeActivity();
        saveActivities(data);
      } else if (status === '활동 모아보기') {
        const data = await getActivities();
        saveActivities(data);
      } else if (status === '작성 중인 활동') {
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
