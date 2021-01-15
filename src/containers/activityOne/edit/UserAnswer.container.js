import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUseranswer, setQuestion } from '../../../store/modules/userdata';
import UserEdit from '../../../components/activityOne/edit/UserEdit';
import getOneActivity from '../../../lib/api/activityOne/basic';

const UserAnswerContainer = () => {
  const dispatch = useDispatch();
  const saveUseranswer = (userdata, idx) =>
    dispatch(setUseranswer(userdata, idx));
  const saveQuestion = (question, idx) => dispatch(setQuestion(question, idx));
  const useranswer = useSelector(state => state.userdata.useranswer);
  const question = useSelector(state => state.userdata.question);

  const id = useSelector(state => state.paramsid.id);

  useEffect(() => {
    (async () => {
      const BasicData = await getOneActivity(id);
      saveUseranswer(BasicData.questionCards.content);
      saveQuestion(BasicData.questionCards.question);
    })();
  }, [id]);

  const onChangeInputs = evt => {
    const value = evt.target.value;
    if (value.length <= 18) {
      saveUseranswer(value, 0);
    }
  };

  return (
    <>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(idx => (
        <UserEdit
          onChange={onChangeInputs}
          idx={idx}
          text={useranswer}
          question={question}
        />
      ))}
    </>
  );
};

export default UserAnswerContainer;
