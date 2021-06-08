import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../lib/api/home/userAPI';
import { getMyPageData } from '../../lib/api/myPage';
import { setUserName } from '../../store/modules/home';
import {
  setBirthday,
  setPhone,
  setEmail,
  setURL,
  setProfileImg,
} from '../../store/modules/myPage';
import UserInfo from '../../components/myPage/UserInfo';

const UserInfoContainer = () => {
  const dispatch = useDispatch();
  const saveUserName = string => dispatch(setUserName(string));
  const saveBirthday = string => dispatch(setBirthday(string));
  const savePhone = string => dispatch(setPhone(string));
  const saveEmail = string => dispatch(setEmail(string));
  const saveURL = string => dispatch(setURL(string));
  const saveProfileImg = string => dispatch(setProfileImg(string));

  const userName = useSelector(state => state.home.name);
  const myPage = useSelector(state => state.myPage);
  const { birthday, phone, profileEmail, sns, profileImg } = myPage;
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      const name = await getUserName();
      saveUserName(name);
    })();
    (async () => {
      const myPageData = await getMyPageData();
      myPageData.birthday
        ? saveBirthday(myPageData.birthday)
        : saveBirthday('20200101');
      savePhone(myPageData.phone);
      saveEmail(myPageData.profileEmail);
      saveURL(myPageData.sns);
      saveProfileImg(myPageData.profileImg);
      setIsReady(true);
    })();
  }, []);

  return (
    <>
      {isReady && userName && (
        <UserInfo
          userName={userName}
          birthday={birthday}
          phone={phone}
          email={profileEmail}
          url={sns}
          profileImg={profileImg}
          savePhone={savePhone}
          saveEmail={saveEmail}
          saveURL={saveURL}
          saveProfileImg={saveProfileImg}
        />
      )}
    </>
  );
};

export default UserInfoContainer;
