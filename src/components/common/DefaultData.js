import React from 'react';
import styled from 'styled-components';

const DefaultData = () => {
  const DefaultTitleData = [
    {
      index: 0,
      title: '활동 기간*',
    },
    {
      index: 1,
      title: '소속 단체',
    },
    {
      index: 2,
      title: '관련 직무*',
    },
    {
      index: 3,
      title: '핵심 역량*',
    },
    {
      index: 4,
      title: '파일 첨부',
    },
    {
      index: 5,
      title: '한 줄 설명',
    },
  ];

  return (
    <StyledDefaultData>
      {DefaultTitleData.map((data, index) => (
        <StyledDefaultTitle key={index}>{data.title}</StyledDefaultTitle>
      ))}
    </StyledDefaultData>
  );
};

const StyledDefaultData = styled.div`
  margin-top: 0.438rem;
`;

const StyledDefaultTitle = styled.div`
  width: 5rem;
  margin-top: 0.938rem;
  font-size: 0.875rem;
  line-height: 150%;
`;

export default DefaultData;
