import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import UserData from '../../../components/activityOne/default/UserData';

const UserAnswerContainer = () => {
  const answer = useSelector(state => state.userdata.useranswer);
  const question = useSelector(state => state.userdata.question);
  const order = useSelector(state => state.userdata.order);

  return (
    <StyledAnswer>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(idx => (
        <UserData
          style
          answer={answer[idx]}
          question={question[idx]}
          index={order[idx]}
        />
      ))}
    </StyledAnswer>
  );
};

const StyledAnswer = styled.div`
  display: block;
  height: 33vw;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default UserAnswerContainer;
