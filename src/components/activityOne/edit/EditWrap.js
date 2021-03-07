import React from 'react';
import Title from '../../../containers/activityOne/edit/Title.container';
import BasicData from '../../../containers/activityOne/edit/BasicData.container';
import UserAnswer from '../../../containers/activityOne/edit/UserAnswer.container';

const EditWrap = () => {
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

export default EditWrap;
