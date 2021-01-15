import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUseranswer, setQuestion } from '../../../store/modules/userdata';
import UserEdit from '../../../components/activityOne/edit/UserEdit';
import getOneActivity from '../../../lib/api/activityOne/basic';

const UserAnswerContainer = () => {
  const dispatch = useDispatch();
  const setUserAnswer = (useranswer, idx) =>
    dispatch(setUseranswer(useranswer, idx));
  const setQuestion = (question, idx) =>
    dispatch(setUseranswer(useranswer, idx));
  const useranswer = useSelector(state => state.useranswer.useranswer);
  const question = useSelector(state => state.useranswer.question);

  const id = useSelector(state => state.paramsid.id);

  useEffect(() => {
    (async () => {
      const BasicData = await getOneActivity(id);
      setUserAnswer(BasicData.selectedActivity.startDate);
      setQuestion(BasicData.selectedActivity.endDate);
    })();
  }, [id]);

  return (
    <>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(idx => (
        <UserEdit
          onChangeInputs={evt => {
            const value = evt.target.value;
            setUserAnswer(value, idx);
          }}
          idx={idx}
          text={useranswer}
        />
      ))}
    </>
  );
};

export default UserAnswerContainer;
