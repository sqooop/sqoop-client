import React from 'react';
import Title from '../../../containers/activityOne/edit/Title.container';
import BasicData from '../edit/BasicData';
import NotFinished from './NotFinished';

const NotFinishedWrap = () => {
  return (
    <>
      <Title />
      <div style={{ display: 'flex' }}>
        <BasicData />
        <NotFinished />
      </div>
    </>
  );
};

export default NotFinishedWrap;
