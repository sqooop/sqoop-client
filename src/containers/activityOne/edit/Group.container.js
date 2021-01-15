import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDetailGroup } from '../../../store/modules/detail';
import Group from '../../../components/activityOne/edit/Group';

const GroupContainer = () => {
  const dispatch = useDispatch();
  const saveGroup = data => dispatch(setDetailGroup(data));

  const group = useSelector(state => state.detail.detailGroup);

  const onChangeInputs = evt => {
    const value = evt.target.value;
    if (value.length <= 18) {
      saveGroup(value);
    }
  };
  return <Group onChangeInputs={onChangeInputs} text={group} />;
};

export default GroupContainer;
