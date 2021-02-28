import { React, useEffect } from 'react';
import styled from 'styled-components';
import { getUserName } from '../../lib/api/home/userAPI';
import { setUserName } from '../../store/modules/home';
import { useSelector, useDispatch } from 'react-redux';

const GreetingBlock = styled.div`
  width: 400px;
  height: 150px;
  display: flex;
  margin: 20px 90px;
  justify-content: space-between;
  font-size: 50px;

  .greeting {
    font-weight: bold;
    animation-name: appear;
    animation-duration: 2s;
  }

  @keyframes appear {
    from {
      opacity: 0.3;
    }
    to {
      opacity: 1;
    }
  }
`;

const Greetings = () => {
  const dispatch = useDispatch();
  const saveUserName = string => dispatch(setUserName(string));
  const userName = useSelector(state => state.home.name);

  useEffect(() => {
    (async () => {
      const name = await getUserName();
      saveUserName(name);
    })();
  }, [userName]);

  return (
    <>
      <GreetingBlock>
        <div className="greeting">
          {userName}님,
          <br />
          안녕하세요!
        </div>
      </GreetingBlock>
    </>
  );
};

export default Greetings;
