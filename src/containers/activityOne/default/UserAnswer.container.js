import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUseranswer, setQuestion } from '../../../store/modules/userdata';
import UserData from '../../../components/activityOne/default/UserData';
import getOneActivity from '../../../lib/api/activityOne/basic';

const UserAnswerContainer = () => {
  const dispatch = useDispatch();
  const answer = useSelector(state => state.userdata.useranswer);
  const question = useSelector(state => state.userdata.question);

  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(idx => (
        <UserData answer={answer.idx} question={question[idx]} />
      ))}
    </>
  );
};

export default UserAnswerContainer;
