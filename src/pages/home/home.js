import React from 'react';
import Greeting from '../../components/Home/Greetings';
import Question from '../../components/Home/Question';
const Home = () => {
  return (
    <div>
      <Greeting username={'현지'}></Greeting>
      <Question />
    </div>
  );
};

export default Home;
