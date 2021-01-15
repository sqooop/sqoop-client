import React from 'react';
import Title from '../../../containers/activityOne/default/Title.container';
import BasicData from '../../../containers/activityOne/default/BasicData.container';
import NotStarting from './NotStarting';

const NotStartingWrap = () => {
  return (
    <>
      <Title />
      <div style={{ display: 'flex' }}>
        <BasicData />
        <NotStarting />
      </div>
    </>
  );
};

export default NotStartingWrap;
