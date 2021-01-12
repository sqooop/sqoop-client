import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setFilterOpen,
  setSkill,
  setJob,
  setDate,
} from '../../store/modules/filter';
import { setActivities } from '../../store/modules/activities';
import { getFilterActivity } from '../../lib/api/activity';
import Button from '../../components/filterActivities/Button';

const ButtonContainer = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const isOpen = useSelector(state => state.filter.isOpen);
  const { jobTag, skillTag, endDate, startDate } = filter;
  const saveFilterOpen = data => dispatch(setFilterOpen(data));
  const saveSkill = data => dispatch(setSkill(data));
  const saveJob = data => dispatch(setJob(data));
  const saveDate = data => dispatch(setDate(data));
  const saveActivities = data => dispatch(setActivities(data));
  const onClick = async () => {
    saveFilterOpen(!isOpen);
    const data = await getFilterActivity({
      jobTag,
      skillTag,
      endDate,
      startDate,
    });
    saveActivities(data);
    saveSkill([]);
    saveJob([]);
    saveDate(['', '']);
  };

  return (
    <>
      {endDate && startDate && skillTag.length > 0 && jobTag.length > 0 ? (
        <Button backgroundColor="#195BFF" onClick={onClick} isAble={true} />
      ) : (
        <Button
          backgroundColor="#A5A5A5"
          color="white"
          border="none"
          isAble={false}
        />
      )}
    </>
  );
};

export default ButtonContainer;
