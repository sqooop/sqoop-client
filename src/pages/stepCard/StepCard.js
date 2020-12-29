import React from 'react';
import StepHeader from '../../components/StepCard/StepHeader';

const StepCard = () => {
  // 나중에 서버에서 데이터 받아오기
  const userData = {
    title: '라오스 봉사 활동',
    sqoops: {
      q: [
        '첫 번째 질문?',
        '두 번째 질문?',
        '세 번째 질문?',
        '네 번째 질문?',
        '다섯 번째 질문?',
        '여섯 번째 질문?',
        '일곱 번째 질문?',
        '여덟 번째 질문?',
        '아홉 번째 질문?',
        '열 번째 질문?',
      ],
      a: ['', '', '', '', '', '', '', '', '', ''],
    },
  };

  return (
    <>
      <StepHeader title={userData.title} />
    </>
  );
};

export default StepCard;
