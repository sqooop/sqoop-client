import React from 'react';
import StepHeader from '../../components/StepCard/StepHeader';
import CurrentCard from '../../components/StepCard/CurrentCard';

const StepCard = () => {
  // 나중에 서버에서 데이터 받아오기
  const userData = {
    title: '라오스 봉사 활동',
    sqoops: {
      q: [
        '첫 번째 활동을 시작할 당시의 상황은 어땠나요?',
        '두 번째 활동을 시작할 당시의 상황은 어땠나요?',
        '세 번째 활동을 시작할 당시의 상황은 어땠나요?',
        '네 번째 활동을 시작할 당시의 상황은 어땠나요?',
        '다섯 번째 활동을 시작할 당시의 상황은 어땠나요?',
        '여섯 번째 활동을 시작할 당시의 상황은 어땠나요?',
        '일곱 번째 활동을 시작할 당시의 상황은 어땠나요?',
        '여덟 번째 활동을 시작할 당시의 상황은 어땠나요?',
        '아홉 번째 활동을 시작할 당시의 상황은 어땠나요?',
        '열 번째 활동을 시작할 당시의 상황은 어땠나요?',
      ],
      a: ['', '', '', '', '', '', '', '', '', ''],
    },
  };

  return (
    <>
      <StepHeader title={userData.title} />
      <CurrentCard questions={userData.sqoops.q} answers={userData.sqoops.a} />
    </>
  );
};

export default StepCard;
