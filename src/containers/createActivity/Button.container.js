import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../../components/CreateActivity/Button';

const ButtonContainer = () => {
  const activity = useSelector(state => state.activity);
  const { title, job, skill } = activity;

  const onClickFunc = event => {
    // 서버 통신 저장
    console.log('저장되었습니다');
  };

  return (
    <>
      {title && skill && job ? (
        <Button backgroundColor="#195BFF" onClick={onClickFunc} isAble={true} />
      ) : (
        <Button
          backgroundColor="#A5A5A5"
          color="white"
          border="none"
          isAble={false}
        />
      )}
    </>
  );
};

export default ButtonContainer;
