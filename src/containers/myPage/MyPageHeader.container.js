import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { updateMyPageData } from '../../lib/api/myPage';
import MyPageHeader from '../../components/myPage/MyPageHeader';

const MyPageHeaderContainer = ({ saved, setSaved }) => {
  const myPageData = useSelector(state => state.myPage);

  useEffect(() => {
    saved &&
      (async () => {
        // let formData = new FormData();
        // formData.append('awardHistory', myPageData.awardHistory);
        // formData.append('certificateHistory', myPageData.certificateHistory);
        // formData.append('langHistory', myPageData.langHistory);
        // formData.append('birthday', myPageData.birthday);
        // formData.append('profileEmail', myPageData.profileEmail);
        // formData.append('profileImg', myPageData.profileImg);
        // formData.append('phone', myPageData.phone);
        // formData.append('sns', myPageData.sns);
        // formData.append('jobBig', myPageData.jobBig);
        // formData.append('jobSmall', myPageData.jobSmall);
        // formData.append('skillBig', myPageData.skillBig);
        // formData.append('skillSmall', myPageData.skillSmall);
        // formData.append('introduce', myPageData.introduce);
        // formData.append('education', myPageData.education);
        const result = updateMyPageData(myPageData);
        console.log(result);
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
