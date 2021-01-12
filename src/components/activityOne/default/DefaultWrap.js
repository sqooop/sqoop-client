import React from 'react';
import Title from '../default/Title';
import BasicData from '../default/BasicData';
import UserData from './UserData';

const DefaultWrap = () => {
  return (
    <>
      <Title />
      <div style={{ display: 'flex' }}>
        <BasicData />
        <UserData />
      </div>
    </>
  );
};

export default DefaultWrap;
