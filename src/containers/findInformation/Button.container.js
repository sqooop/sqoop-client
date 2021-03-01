import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/signIn/Button';
import { withRouter } from 'react-router-dom';
import { setWarning, setEmail } from '../../store/modules/findEmail';
import { findEmail } from '../../lib/api/auth';

const ButtonContainer = ({ history, content }) => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.findEmail.userName);
  const phone = useSelector(state => state.findEmail.phone);
  const birthday = useSelector(state => state.findEmail.birthday);
  const saveWarning = data => dispatch(setWarning(data));
  const saveEmail = data => dispatch(setEmail(data));

  const onClickFind = async () => {
    try {
      const data = await findEmail({ userName, birthday, phoneNumber: phone });
      saveEmail(data.userEmail);
    } catch (e) {
      saveWarning(
        '입력하신 정보와 일치하는 계정이 없습니다. 다시 한번 확인해주세요!',
      );
    }
  };
  const onClickLogin = async () => {
    history.push('/');
  };
  return (
    <>
      <Button
        onClick={content === '로그인' ? onClickLogin : onClickFind}
        color={userName && phone && birthday ? '#195bff' : '#a5a5a5'}
        content={content}
      />
    </>
  );
};

export default withRouter(ButtonContainer);
