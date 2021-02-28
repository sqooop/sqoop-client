import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin: 0 auto;
  width: 358px;
  color: #a5a5a5;
  font-size: 12px;
  margin-top: 68px;
`;

const Notice = props => {
  return (
    <>
      <StyledDiv>이메일/비밀번호를 찾기 위해 필요한 정보입니다</StyledDiv>
    </>
  );
};

export default Notice;
