import { React, useState, useEffect } from 'react';
import getUserEdit from '../../../lib/api/activityOne/user';
import styled from 'styled-components';

const UserData = ({ id }) => {
  const [data, setData] = useState('');

  useEffect(() => {
    (async () => {
      const userData = await getUserEdit(id);
      setData(userData);
    })();
  }, []);

  return (
    <StyledUserData className="UserData">
      {data ? (
        data.map((item, index) => (
          <>
            <StyledQuestionData key={index - 1}>
              {index + 1}. {item.question}
            </StyledQuestionData>
            <StyledAnswerData key={index + 1}>{item.content}</StyledAnswerData>
          </>
        ))
      ) : (
        <></>
      )}
    </StyledUserData>
  );
};

const StyledUserData = styled.div`
  display: block;
  width: 41.6vw;
  height: 39.1vw;
  overflow-y: scroll;
  margin-top: 2.5vw;

  ::-webkit-scrollbar {
    width: 0px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: white;
  }

  ::-webkit-scrollbar-track {
    background-color: white;
  }
`;

const StyledQuestionData = styled.div`
  margin-bottom: 0.9vw;
  margin-left: 1.9vw;
  font-size: 1vw;
  font-weight: 700 !important;
  line-height: 150%;
`;

const StyledAnswerData = styled.div`
  width: 39.1vw;
  height: auto;
  margin-bottom: 2.7vw;
  margin-left: 2.5vw;
  font-size: 0.8vw;
  font-weight: 400 !important;
  line-height: 150%;
  border: none;
  outline: none;
`;

export default UserData;
