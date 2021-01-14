import React from 'react';
import Title from '../default/Title';
import BasicData from '../../../containers/activityOne/BasicData.container';
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
