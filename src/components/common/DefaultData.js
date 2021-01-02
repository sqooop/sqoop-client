import React from 'react';
import styled from 'styled-components';

const DefaultData = () => {
  return (
    <StyledDefaultData>
      <StyledDefaultTitle>
        활동 기간<span>*</span>
      </StyledDefaultTitle>
      <StyledDefaultTitle>소속 단체</StyledDefaultTitle>
      <StyledDefaultTitle>
        관련 직무<span>*</span>
      </StyledDefaultTitle>
      <StyledDefaultTitle>
        핵심 역량<span>*</span>
      </StyledDefaultTitle>
      <StyledDefaultTitle>파일 첨부</StyledDefaultTitle>
      <StyledDefaultTitle>한 줄 설명</StyledDefaultTitle>
    </StyledDefaultData>
  );
};

const StyledDefaultData = styled.div`
  float: left;
  margin-top: 0.438rem;
`;

const StyledDefaultTitle = styled.div`
  width: 5rem;
  margin-top: 0.938rem;
  font-size: 0.875rem;
  line-height: 150%;

  & > span {
    color: #00ff84;
  }
`;

export default DefaultData;
