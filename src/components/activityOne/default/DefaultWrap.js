import React from 'react';
import Title from '../../../containers/activityOne/default/Title.container';
import BasicData from '../../../containers/activityOne/default/BasicData.container';
import UserAnswer from '../../../containers/activityOne/default/UserAnswer.container';

const DefaultWrap = () => {
  return (
    <>
      <Title />
      <div style={{ display: 'flex' }}>
        <BasicData />
        <UserAnswer />
      </div>
    </>
  );
};

export default DefaultWrap;
