import React from 'react';
import styled from 'styled-components';

const ButtonDiv = styled.div`
  background-color: ${props => props.color};
  margin: 0 auto;
  width: 358px;
  color: white;
  cursor: pointer;
  width: 357px;
  height: 50px;
  text-align: center;
  padding-top: 13px;
  font-weight: 700;
  margin-bottom: 12px;
`;
const Button = props => {
  const { onClick, color } = props;
  return (
    <ButtonDiv onClick={onClick} color={color}>
      로그인
    </ButtonDiv>
  );
};

export default Button;
