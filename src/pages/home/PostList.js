import React from 'react';
import Greeting from '../../components/home/Greetings';
import Question from '../../components/home/Question';
import AddButton from '../../components/home/AddButton';
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
