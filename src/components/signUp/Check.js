import React from 'react';
import styled from 'styled-components';
import { Checkbox } from 'antd';

const SigninDiv = styled.div`
  margin: 0 auto;
  width: 358px;
  font-size: 12px;
  margin-bottom: 24px;
  margin-top: 33px;
`;
const StyledSpan = styled.span`
  color: #195bff;
  font-size: 12px;
  cursor: pointer;
`;

const Check = props => {
  const { onChange, onClick1, onClick2 } = props;
  return (
    <SigninDiv>
      <Checkbox
        onChange={onChange}
        style={{ marginRight: '8px', color: '#195bff' }}
      />
      <StyledSpan onClick={onClick1}>개인정보 수집 및 이용</StyledSpan>과{' '}
      <StyledSpan onClick={onClick2}>서비스 이용 약관</StyledSpan>에 모두
      동의합니다.
    </SigninDiv>
  );
};

export default Check;
