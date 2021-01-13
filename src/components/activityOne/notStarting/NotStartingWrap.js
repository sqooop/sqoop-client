import React from 'react';
import Title from '../default/Title';
import BasicData from '../../../containers/activityOne/BasicData.container';
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
