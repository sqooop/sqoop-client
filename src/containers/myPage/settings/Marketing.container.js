import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMarketing } from '../../../store/modules/settings/account';
import Marketing from '../../../components/myPage/settings/Marketing';
import { changeMarketing } from '../../../lib/api/auth';

const AccountConfirmContainer = () => {
  const onClick = bool => {
    saveMarketing(bool);
  };
  const dispatch = useDispatch();
  const marketing = useSelector(state => state.account.marketing);
  const saveMarketing = data => dispatch(setMarketing(data));
  return <Marketing />;
};

export default AccountConfirmContainer;
