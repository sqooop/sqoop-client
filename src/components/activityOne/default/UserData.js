import { React, useState, useEffect } from 'react';
import styled from 'styled-components';

const UserData = () => {
  const [userData, setUserData] = useState([]);
  const id = '49';

  const saveData = data => {
    map((data, index) => setUserData(data.data.questionCards[index]));
  };

  const fetchData = async () => {
    const response = await fetch(`http://54.180.189.240:3000/card/${id}`, {
      method: 'GET',
      headers: {
        jwt:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InRlc3RlciIsImlhdCI6MTYxMDE3OTg2MywiZXhwIjoxNjEwNzg0NjYzLCJpc3MiOiJsY2cifQ.hkYUZx9REp8ugpkRrf_XUhXC1BDTT7dpToseAYnxM9Y',
      },
    }).then(async response => {
      if (response.status === 200) {
        response.json().then(data => {
          saveData(data);
        });
      } else {
        console.log('Server Error');
      }
    });
    return response;
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(userData.question);

  return <StyledUserData className="UserData">ㅎㅇ</StyledUserData>;
};

const StyledUserData = styled.div`
  display: block;
  width: 41.6vw;
  height: 39.1vw;
  overflow-y: scroll;
  margin-top: 1.6vw;

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
