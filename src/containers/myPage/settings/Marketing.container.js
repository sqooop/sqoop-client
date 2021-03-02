import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setMarketing,
  setMarketingCheck,
} from '../../../store/modules/settings/account';
import Marketing from '../../../components/myPage/settings/Marketing';
import { changeMarketing } from '../../../lib/api/auth';

const AccountConfirmContainer = () => {
  const dispatch = useDispatch();
  const marketing = useSelector(state => state.account.marketing);
  const marketingCheck = useSelector(state => state.account.marketingCheck);
  const saveMarketing = data => dispatch(setMarketing(data));
  const saveMarketingCheck = data => dispatch(setMarketingCheck(data));
  useEffect(() => {
    if (marketing) {
      saveMarketingCheck('수신 동의하셨습니다!');
    } else {
      saveMarketingCheck('');
    }
  }, [marketing]);
  const onClick = async () => {
    try {
      const bool = !marketing;
      await changeMarketing({ checkMarketing: bool });
      saveMarketing(bool);
      if (bool) {
        saveMarketingCheck('수신 동의하셨습니다!');
      } else {
        saveMarketingCheck('');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return <Marketing onClick={onClick} marketingCheck={marketingCheck} />;
};

export default AccountConfirmContainer;
