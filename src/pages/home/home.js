import React from 'react';
import styled from 'styled-components';
import Greeting from '../../components/home/Greetings';
import Question from '../../components/home/Question';
import AddButton from '../../components/home/AddButton';
import ActivityTemplate from '../../components/home/ActivityTemplate';
import Year from '../../components/home/Year';
/* import MonthScroll from '../../components/home/MonthScroll';
import Line from '../../components/home/Line';

const ScrollWrapper = styled.div`
  display: flex;
  width: 40px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const MonthWrapper = styled.div`
  height: 100%;
  background: gray;
  width: 100px;
  display: flex;
`; */
const Home = () => {
  return (
    <div>
      <Greeting username={'현지'}></Greeting>
      <Question />
      <AddButton />
      <ActivityTemplate>
        <Year />
        {/*         <MonthWrapper>
          <ScrollWrapper>
            <MonthScroll />
          </ScrollWrapper>
          <Line />
        </MonthWrapper> */}
      </ActivityTemplate>
    </div>
  );
};

export default Home;
