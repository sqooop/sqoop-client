import React from 'react';
import Title from '../../../containers/activityOne/edit/Title.container';
import BasicData from '../edit/BasicData';
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
