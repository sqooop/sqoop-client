import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCheck } from '../../store/modules/signup';
import Check from '../../components/signUp/Check';

const CheckContainer = () => {
  const dispatch = useDispatch();
  const saveCheck = data => dispatch(setCheck(data));

  const onChange = evt => {
    saveCheck(evt.target.checked);
  };
  return <Check onChange={onChange} />;
};

export default CheckContainer;
