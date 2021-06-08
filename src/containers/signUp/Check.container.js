import React from 'react';
import { useDispatch } from 'react-redux';
import { setCheck } from '../../store/modules/signup';
import { withRouter } from 'react-router-dom';
import Check from '../../components/signUp/Check';

const CheckContainer = ({ history }) => {
  const dispatch = useDispatch();
  const saveCheck = data => dispatch(setCheck(data));

  const onChange = evt => {
    saveCheck(evt.target.checked);
  };
  const onClick1 = () => {
    history.push('/signup/notice/1');
  };
  const onClick2 = () => {
    history.push('/signup/notice/2');
  };
  return <Check onChange={onChange} onClick1={onClick1} onClick2={onClick2} />;
};

export default withRouter(CheckContainer);
