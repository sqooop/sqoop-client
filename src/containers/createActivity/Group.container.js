import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD
import { setGoup } from '../../store/modules/activity';
import Group from '../../components/CreateActivity/Group';
=======
import { setGroup } from '../../store/modules/activity';
import Group from '../../components/createActivity/Group';
>>>>>>> d8196b0ff773fd3112689d5e1ece4810f86335fc

const TitleContainer = () => {
  const dispatch = useDispatch();
  const saveGroup = data => dispatch(setGroup(data));

  const group = useSelector(state => state.activity.group);

  const onChangeInputs = evt => {
    const value = evt.target.value;
    saveGroup(value);
  };
  return <Group onChangeInputs={onChangeInputs} text={group} />;
};

export default TitleContainer;
