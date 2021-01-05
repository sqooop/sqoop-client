import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUseranswer } from '../../store/modules/useranswer';
import ActivityOneUserData from '../../components/ActivityOne/ActivityOneUserData';

const UserAnswerContainer = () => {
  const dispatch = useDispatch();
  // 처음에 서버 통신해서 question이랑 useranswer에 대한 리덕스 state들 다 변경!

  const saveUserAnswer = (useranswer, idx) =>
    dispatch(setUseranswer(useranswer, idx));
  const useranswer = useSelector(state => state.useranswer.useranswer);

  return (
    <>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(idx => (
        <ActivityOneUserData
          onChangeInputs={evt => {
            const value = evt.target.value;
            saveUserAnswer(value, idx);
          }}
          idx={idx}
          text={useranswer}
        />
      ))}
    </>
  );
};

export default UserAnswerContainer;
