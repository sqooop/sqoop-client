import React from 'react';
import LastCard from '../../components/stepCard/LastCard';
import { useSelector } from 'react-redux';

const LastCardContainer = () => {
  const id = useSelector(state => state.userCardInfo.id);
  console.log(id);

  return <LastCard id={id} />;
};

export default LastCardContainer;
