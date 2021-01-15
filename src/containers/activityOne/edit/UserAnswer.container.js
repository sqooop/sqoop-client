import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUseranswer, setQuestion } from '../../../store/modules/userdata';
import UserEdit from '../../../components/activityOne/edit/UserEdit';
const UserAnswerContainer = () => {
  const dispatch = useDispatch();
  const saveUseranswer = (userdata, idx) =>
    dispatch(setUseranswer(userdata, idx));
  const useranswer = useSelector(state => state.userdata.useranswer);
  const question = useSelector(state => state.userdata.question);

  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(idx => {
        return (
          <UserEdit
            idx={idx}
            text={useranswer.idx}
            question={question[idx]}
            onChange={evt => {
              saveUseranswer(evt.target.value, idx);
            }}
          />
        );
      })}
    </>
  );
};

export default UserAnswerContainer;
