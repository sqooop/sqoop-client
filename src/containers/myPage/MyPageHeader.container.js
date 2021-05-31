import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateMyPageData } from '../../lib/api/myPage';
import { getMyPageData } from '../../lib/api/myPage';
import MyPageHeader from '../../components/myPage/MyPageHeader';
import { setProfileImg } from '../../store/modules/myPage';

const MyPageHeaderContainer = ({ saved, setSaved }) => {
  const myPageData = useSelector(state => state.myPage);
  const dispatch = useDispatch();
  const saveProfileImg = string => dispatch(setProfileImg(string));

  useEffect(() => {
    saved &&
      (async () => {
        let formData = new FormData();
        for (let key in myPageData) {
          if (
            key === 'education' ||
            key === 'langHistory' ||
            key === 'certificateHistory' ||
            key === 'awardHistory'
          ) {
            for (let i = 0; i < myPageData[key].length; i++) {
              for (let key_ in myPageData[key][i]) {
                formData.append(
                  `${key}[${i}][${key_}]`,
                  myPageData[key][i][key_],
                );
              }
            }
          } else {
            formData.append(key, myPageData[key]);
          }
        }
        const result = await updateMyPageData(formData);
        console.log(result);
        const newData = await getMyPageData();
        saveProfileImg(newData.profileImg);
        setSaved(false);
      })();
  });

  return (
    <>
      <MyPageHeader profileColor={'black'} setSaved={setSaved} />
    </>
  );
};

export default MyPageHeaderContainer;
