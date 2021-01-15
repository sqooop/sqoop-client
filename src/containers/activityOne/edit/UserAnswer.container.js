import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUseranswer, setQuestion } from '../../../store/modules/userdata';
import UserEdit from '../../../components/activityOne/edit/UserEdit';
const UserAnswerContainer = () => {
  const dispatch = useDispatch();
  const saveUseranswer = (userdata, idx) =>
    dispatch(setUseranswer(userdata, idx));
  const question = useSelector(state => state.userdata.question);
  const answer1 = useSelector(state => state.userdata.useranswer[1]);
  const answer2 = useSelector(state => state.userdata.useranswer[2]);
  const answer3 = useSelector(state => state.userdata.useranswer[3]);
  const answer4 = useSelector(state => state.userdata.useranswer[4]);
  const answer5 = useSelector(state => state.userdata.useranswer[5]);
  const answer6 = useSelector(state => state.userdata.useranswer[6]);
  const answer7 = useSelector(state => state.userdata.useranswer[7]);
  const answer8 = useSelector(state => state.userdata.useranswer[8]);
  const answer9 = useSelector(state => state.userdata.useranswer[9]);
  const answer10 = useSelector(state => state.userdata.useranswer[10]);
  const order = useSelector(state => state.userdata.order);
  return (
    <div style={{ display: 'block' }}>
      <UserEdit
        text={answer1}
        question={question[1]}
        index={order[1]}
        onChange={evt => {
          saveUseranswer(evt.target.value, 1);
        }}
      />
      <UserEdit
        text={answer2}
        question={question[2]}
        index={order[2]}
        onChange={evt => {
          saveUseranswer(evt.target.value, 2);
        }}
      />
      <UserEdit
        text={answer3}
        question={question[3]}
        index={order[3]}
        onChange={evt => {
          saveUseranswer(evt.target.value, 3);
        }}
      />
      <UserEdit
        text={answer4}
        question={question[4]}
        index={order[4]}
        onChange={evt => {
          saveUseranswer(evt.target.value, 4);
        }}
      />
      <UserEdit
        text={answer5}
        question={question[5]}
        index={order[5]}
        onChange={evt => {
          saveUseranswer(evt.target.value, 5);
        }}
      />
      <UserEdit
        text={answer6}
        question={question[6]}
        index={order[6]}
        onChange={evt => {
          saveUseranswer(evt.target.value, 6);
        }}
      />
      <UserEdit
        text={answer7}
        question={question[7]}
        index={order[7]}
        onChange={evt => {
          saveUseranswer(evt.target.value, 7);
        }}
      />
      <UserEdit
        text={answer8}
        question={question[8]}
        index={order[8]}
        onChange={evt => {
          saveUseranswer(evt.target.value, 8);
        }}
      />
      <UserEdit
        text={answer9}
        question={question[9]}
        index={order[9]}
        onChange={evt => {
          saveUseranswer(evt.target.value, 9);
        }}
      />
      <UserEdit
        text={answer10}
        question={question[10]}
        index={order[10]}
        onChange={evt => {
          saveUseranswer(evt.target.value, 10);
        }}
      />
    </div>
  );
};

export default UserAnswerContainer;
