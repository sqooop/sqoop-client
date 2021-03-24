import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGroup } from '../../store/modules/activity';
import Group from '../../components/createActivity/Group';

const GroupContainer = () => {
  const dispatch = useDispatch();
  const saveGroup = data => dispatch(setGroup(data));
  const group = useSelector(state => state.activity.group);

  useEffect(() => {
    saveGroup('');
  }, []);
  const onChangeInputs = evt => {
    const value = evt.target.value;
    saveGroup(value);
  };
  return <Group onChangeInputs={onChangeInputs} text={group} />;
};

export default GroupContainer;
