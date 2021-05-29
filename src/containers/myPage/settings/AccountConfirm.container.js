import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setEmail,
  setMarketing,
  setPhone,
} from '../../../store/modules/settings/account';
import AccountConfirm from '../../../components/myPage/settings/AccountConfirm';
import { getUserSetting } from '../../../lib/api/auth';

const AccountConfirmContainer = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.account.email);
  const phone = useSelector(state => state.account.phone);
  const saveEmail = data => dispatch(setEmail(data));
  const saveMarketing = data => dispatch(setMarketing(data));
  const savePhone = data => dispatch(setPhone(data));
  useEffect(() => {
    (async () => {
      const data = await getUserSetting();
      saveEmail(data.userSetting.email);
      saveMarketing(data.userSetting.marketing);
      savePhone(data.userSetting.phone);
    })();
  }, [email]);
  return <AccountConfirm email={email} phone={phone} />;
};

export default AccountConfirmContainer;
