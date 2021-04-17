import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { updateMyPageData } from '../../lib/api/myPage';
import MyPageHeader from '../../components/myPage/MyPageHeader';

const MyPageHeaderContainer = () => {
  const myPageData = useSelector(state => state.myPage);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    saved &&
      (async () => {
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
