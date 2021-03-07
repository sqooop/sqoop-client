import React from 'react';
import Title from '../../../containers/activityOne/default/Title.container';
import BasicData from '../../../containers/activityOne/default/BasicData.container';
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
