import React from 'react';
import Greeting from '../../components/Home/Greetings';
import Question from '../../components/Home/Question';
import AddButton from '../../components/Home/AddButton';
const Home = () => {
  return (
    <div>
      <Greeting username={'현지'}></Greeting>
      <Question />
      <AddButton />
    </div>
  );
};

export default Home;
