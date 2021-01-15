import React from 'react';
import Title from '../../../containers/activityOne/default/Title.container';
import BasicData from '../../../containers/activityOne/default/BasicData.container';
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
