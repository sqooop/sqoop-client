import React from 'react';
import Title from '../../../containers/activityOne/Title.container';
import BasicData from '../../../containers/activityOne/BasicData.container';
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
