import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUseranswer } from '../../store/modules/useranswer';
import ActivityOneUserData from '../../components/activityOne/ActivityOneUserData';

const UserAnswerContainer = () => {
  const dispatch = useDispatch();
  const saveUserAnswer = data => dispatch(setUseranswer(data));

  const useranswer = useSelector(state => state.useranswer.useranswer);

  const onChangeInputs = evt => {
    const value = evt.target.value;
    saveUserAnswer(value);
  };
  return (
    <ActivityOneUserData onChangeInputs={onChangeInputs} text={useranswer} />
  );
};

export default UserAnswerContainer;
