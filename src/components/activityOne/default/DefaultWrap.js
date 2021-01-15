import React from 'react';
import Title from '../../../containers/activityOne/default/Title.container';
import BasicData from '../../../containers/activityOne/default/BasicData.container';
import UserData from './UserData';

const DefaultWrap = ({ id }) => {
  return (
    <>
      <Title id={id} />
      <div style={{ display: 'flex' }}>
        <BasicData id={id} />
        <UserData id={id} />
      </div>
    </>
  );
};

export default DefaultWrap;
