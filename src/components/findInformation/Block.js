import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Block = ({ history }) => {
  return (
    <>
      <CenterDiv>
        <StyledText>sqoop의 이메일이 기억났다면?</StyledText>
        <Link to="/">로그인</Link>
      </CenterDiv>
    </>
  );
};

const CenterDiv = styled.div`
  margin-top: 48px;
  text-align: center;

  a {
    font-weight: bold;
    font-size: 12px;
    color: #195bff;
    line-height: 150%;
  }
`;

const StyledText = styled.div`
  color: #a5a5a5;
  font-size: 10px;
  line-height: 150%;
  margin-bottom: 3px;
`;

export default Block;
