import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WarnMessage from '../../components/signIn/WarnMessage';
import { withRouter } from 'react-router-dom';

const WarnMessageContainer = ({ history }) => {
  const warning = useSelector(state => state.signIn.warning);
  return (
    <>
      <WarnMessage warning={warning} />
    </>
  );
};

export default withRouter(WarnMessageContainer);
