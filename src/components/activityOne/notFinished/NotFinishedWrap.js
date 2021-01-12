import React from 'react';
import Title from '../default/Title';
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
